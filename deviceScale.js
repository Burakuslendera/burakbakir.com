// ─── Device Detection ────────────────────────────────────────────────────────
const _ua = navigator.userAgent;
const isIOS = /iPhone|iPod/.test(_ua);
const isIPad = /iPad/.test(_ua) ||
  (/Macintosh/.test(_ua) && navigator.maxTouchPoints > 1);
const isZFlip = /SM-F[0-9]{3,}/i.test(_ua);
const isMobile = !isIOS && !isIPad && !isZFlip &&
  /Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(_ua);
const isSafari = /^((?!chrome|android).)*safari/i.test(_ua);
const isDesktop = !isIOS && !isIPad && !isZFlip && !isMobile;

// ─── Constants ───────────────────────────────────────────────────────────────
const DESKTOP_DESIGN_WIDTH = 800;
const MOBILE_DESIGN_WIDTH = 700;
const MOBILE_DESIGN_HEIGHT = 1568;
const VIEWPORT_FIT_FACTOR = 0.90;
const IMAGE_LOAD_TIMEOUT_MS = 3000;

(function () {

  // ── Wait for all images in a container to load (or error/timeout) ─────────
  function waitForImages(container) {
    var imgs = Array.from(container.querySelectorAll("img"));
    var promises = imgs.map(function (img) {
      if (img.complete && img.naturalWidth > 0) return Promise.resolve();
      return new Promise(function (resolve) {
        img.addEventListener("load", resolve, { once: true });
        img.addEventListener("error", resolve, { once: true });
      });
    });
    var timeout = new Promise(function (resolve) {
      setTimeout(resolve, IMAGE_LOAD_TIMEOUT_MS);
    });
    return Promise.race([Promise.all(promises), timeout]);
  }

  // ── Canvas: correct physical pixel dimensions and DPR scaling ────────────
  function setCanvasDimensions(canvas) {
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";

    if (window.devicePixelRatio > 1) {
      var dpr = Math.min(window.devicePixelRatio, 2);
      // Assigning canvas.width resets the 2D context — must happen before scale()
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      var ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
    } else {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }

  // ── Viewport meta helper ─────────────────────────────────────────────────
  function setViewportMeta(content) {
    var meta = document.querySelector("meta[name=viewport]");
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "viewport";
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
  }

  // ── Viewport configuration per device ────────────────────────────────────
  function configureViewport() {
    if (isDesktop) {
      setViewportMeta("width=device-width, initial-scale=1, maximum-scale=1");
    } else if (isZFlip) {
      setViewportMeta("width=device-width, initial-scale=1.4, maximum-scale=1.4");
    } else if (isIOS || isIPad) {
      setViewportMeta(
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes"
      );
    } else if (isMobile) {
      setViewportMeta("width=device-width, initial-scale=1.0");
    }

    if (isSafari) {
      document.documentElement.style.setProperty("-webkit-text-size-adjust", "100%");
    }
  }

  // ── Main entry ───────────────────────────────────────────────────────────
  function scaleContent() {
    var container = document.getElementById("zoomContainer");
    var canvas = document.getElementById("renderSurface");

    setCanvasDimensions(canvas);
    configureViewport();

    if (isDesktop) {
      scaleDesktop(container);
    } else if (isZFlip) {
      scaleZFlip(container);
    } else if (isMobile) {
      scaleMobile(container);
    } else {
      scaleIOS(container);
    }
  }

  // ── Desktop: wait for images, then fit all content in viewport ────────────
  function scaleDesktop(container) {
    // Remove height constraints so scrollHeight reflects true content height
    container.style.width = DESKTOP_DESIGN_WIDTH + "px";
    container.style.height = "auto";
    container.style.maxHeight = "none";
    // Reset to no scale while we wait for images
    container.style.transform = "translate(-50%, -50%) scale(1)";
    if (isSafari) {
      container.style.webkitTransform = "translate(-50%, -50%) scale3d(1,1,1)";
    }

    waitForImages(container).then(function () {
      applyDesktopScale(container);
    });
  }

  function applyDesktopScale(container) {
    var vw = window.innerWidth;
    var vh = window.innerHeight;

    // Measure natural height now that all images are loaded
    var naturalH = container.scrollHeight;

    // Scale so content height fits VIEWPORT_FIT_FACTOR of viewport height
    var scaleForHeight = (vh * VIEWPORT_FIT_FACTOR) / naturalH;
    // Scale so design width fits viewport width
    var scaleForWidth = vw / DESKTOP_DESIGN_WIDTH;
    // Use the more restrictive constraint (allows scale > 1 to compensate for browser zoom-out)
    var scale = Math.min(scaleForHeight, scaleForWidth);

    container.style.transform = "translate(-50%, -50%) scale(" + scale + ")";
    if (isSafari) {
      container.style.webkitTransform =
        "translate(-50%, -50%) scale3d(" + scale + "," + scale + ",1)";
    }

    // Safety maxHeight (in pre-scale px): if dynamic content later grows the
    // card (e.g. switching to Projects tab), the scrollbar activates instead
    // of the card overflowing the viewport.
    container.style.maxHeight = (vh * VIEWPORT_FIT_FACTOR / scale) + "px";
  }

  // ── Z-Flip ────────────────────────────────────────────────────────────────
  function scaleZFlip(container) {
    var baseW = 2893, baseH = 2000;
    var designW = DESKTOP_DESIGN_WIDTH, designH = 900;

    container.style.width = designW + "px";
    container.style.height = designH + "px";

    var scaleW = (window.innerWidth * 1.3) / baseW;
    var scaleH = (window.innerHeight * 1.3) / baseH;
    var scale = Math.min(scaleW, scaleH) * 1.3;

    container.style.transform =
      "translate(0%, 0%) scale(" + scale + ")";
    container.style.webkitTransform =
      "translate(0%, 0%) scale3d(" + scale + "," + scale + ",1)";
  }

  // ── Mobile (Android) ──────────────────────────────────────────────────────
  function scaleMobile(container) {
    var baseW = 4096, baseH = 1280;

    container.style.width = MOBILE_DESIGN_WIDTH + "px";
    container.style.height = MOBILE_DESIGN_HEIGHT + "px";

    var scaleW = (window.innerWidth * 1.3) / baseW;
    var scaleH = (window.innerHeight * 1.3) / baseH;
    var fitW = window.innerWidth / MOBILE_DESIGN_WIDTH;
    var fitH = window.innerHeight / MOBILE_DESIGN_HEIGHT;
    var scale = Math.min(scaleW, scaleH, fitW, fitH) * 1.2;

    container.style.transform =
      "translate(-50%, -50%) scale(" + scale + ")";
    container.style.webkitTransform =
      "translate(-50%, -50%) scale3d(" + scale + "," + scale + ",1)";
  }

  // ── iOS / iPad ────────────────────────────────────────────────────────────
  function scaleIOS(container) {
    // CSS responsive rules handle layout; no JS scale transform needed
    container.style.transform = "translate(-50%, -50%) scale(1)";
    container.style.webkitTransform = "translate(-50%, -50%) scale3d(1,1,1)";

    // Tighten nav button spacing for narrow screens
    var navSection = container.querySelector(".navigation-section");
    if (navSection) {
      navSection.querySelectorAll(".nav-button").forEach(function (btn) {
        btn.style.marginLeft = "15px";
        btn.style.marginRight = "15px";
      });
    }

    // Shrink social buttons so 8 fit on a narrow screen
    var socialLinks = container.querySelector(".social-links");
    if (socialLinks) {
      socialLinks.style.gap = "6px";
      container.querySelectorAll(".social-btn").forEach(function (btn) {
        btn.style.width = "50px";
        btn.style.height = "50px";
        btn.style.marginTop = "-32px";
        btn.style.marginBottom = "64px";
        btn.style.marginLeft = "0";
        btn.style.marginRight = "6px";
        btn.style.borderRadius = "10px";
        var img = btn.querySelector("img");
        if (img) {
          img.style.width = "30px";
          img.style.height = "30px";
        }
      });
    }

    // Fix iOS Safari gesture-zoom snapping
    if (isIOS && isSafari) {
      document.addEventListener("gesturestart", function fixZoom() {
        setViewportMeta(
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes"
        );
        document.removeEventListener("gesturestart", fixZoom, true);
      }, true);
    }
  }

  // ── Init and event wiring ─────────────────────────────────────────────────
  var init = function () {
    scaleContent();
    window.addEventListener("resize", scaleContent);
    window.addEventListener("orientationchange", function () {
      setTimeout(scaleContent, 300);
    });
  };

  window.addEventListener("load", init);
  window.initScaleContent = init;

})();