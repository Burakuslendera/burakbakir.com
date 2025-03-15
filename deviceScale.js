const userAgent = navigator.userAgent;
const isMobile = /Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
const isIOS = /iPad|iPhone|iPod/.test(userAgent);
const isZFlip = /SM-F[0-9]{3,}/i.test(userAgent);
const isMac = /mac/i.test(userAgent);

function setCenteredWindowSize() {
  const centeredWindow = document.getElementById("centered-window");
  // if (!centeredWindow) return reportError();

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  let scaleFactor;

  // NOTE: This scaling format works stably for iPhone devices! //
  if (isIOS) {
    scaleFactor = Math.min(windowWidth / 320, windowHeight / 64);
    console.error(
      " NOTE： This scaling format works stably for iPhone devices!"
    );
    centeredWindow.style.transform = `scale(${scaleFactor})`;
  }

  if (isSafari || isIOS) {
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content =
      "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no";
    document.head.appendChild(meta);
  }
  window.addEventListener("resize", setCenteredWindowSize);
}

document.addEventListener("DOMContentLoaded", setCenteredWindowSize);

(function () {
  function scaleContent() {
    const ua = navigator.userAgent;
    const container = document.getElementById("zoomContainer");
    const canvas = document.getElementById("renderSurface");
    const centeredDiv = document.querySelector(".centered-div");
    const fixedSize = "1300px";

    let designWidth = 2000,
      designHeight = 1700;
    let baseWidth, baseHeight;

    if (isSafari) {
      if (isIOS) {
        document
          .querySelector("meta[name=viewport]")
          .setAttribute(
            "content",
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes"
          );
      } else if (isMac) {
        document
          .querySelector("meta[name=viewport]")
          .setAttribute("content", "initial-scale=1.7, maximum-scale=1.7");
      }
    }

    if (isIOS || (isSafari && !isMac)) {
      baseWidth = 4196;
      baseHeight = 2180;
      designWidth = 1830;
      designHeight = 4000;
    } else if (isZFlip) {
      baseWidth = 2893;
      baseHeight = 2000;
      // Fuck Off! Z-Flip
      document
        .querySelector("meta[name=viewport]")
        .setAttribute(
          "content",
          "width=device-width, initial-scale=1.4, maximum-scale=1.4"
        );
      if (centeredDiv) {
        centeredDiv.style.maxWidth = fixedSize;
        centeredDiv.style.minWidth = fixedSize;
      }
    } else if (isMobile) {
      baseWidth = 4096;
      baseHeight = 1280;
      designWidth = 700;
      designHeight = 1568;
      if (centeredDiv) {
        centeredDiv.style.maxWidth = fixedSize;
        centeredDiv.style.minWidth = fixedSize;
      }
    } else {
      baseWidth = 1280;
      baseHeight = 720;
      designWidth = 600;
      designHeight = 1580;
      document
        .querySelector("meta[name=viewport]")
        .setAttribute("content", "initial-scale=1, maximum-scale=1");
      if (centeredDiv) {
        centeredDiv.style.maxWidth = fixedSize;
        centeredDiv.style.minWidth = fixedSize;
      }
    }

    // Disable Safari's automatic text size adjustment!
    if (isSafari)
      document.documentElement.style.setProperty(
        "-webkit-text-size-adjust",
        "100%"
      );

    // Fix orientation zoom issue in iOS Safari :/
    if (isSafari && isIOS) {
      document.addEventListener(
        "gesturestart",
        function fixZoom() {
          const meta = document.querySelector("meta[name=viewport]");
          if (meta) {
            meta.setAttribute(
              "content",
              "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes"
            );
          }
          document.removeEventListener("gesturestart", fixZoom, true);
        },
        true
      );
    }

    const setCanvasDimensions = () => {
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      if (window.devicePixelRatio > 1) {
        canvas.width = Math.imul(canvas.offsetWidth, 2);
        canvas.height = Math.imul(canvas.offsetHeight, 2);
        if (canvas.getContext("2d")) canvas.getContext("2d").scale(256, 256);
      } else {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    };

    const updateContainerScale = () => {
      container.style.width = designWidth + "px";
      container.style.height = designHeight + "px";

      const scaleW = Math.imul(window.innerWidth, 1.3) / baseWidth;
      const scaleH = Math.imul(window.innerHeight, 1.3) / baseHeight;
      let scale = Math.min(scaleW, scaleH);

      const fitScaleW = window.innerWidth / designWidth;
      const fitScaleH = window.innerHeight / designHeight;
      scale = Math.min(scale, fitScaleW, fitScaleH);

      let linkDisabledImg = document.querySelector(".link-disabled img");
      let html = document.querySelector("html");

      if (isSafari) {
        container.style.transform = `translate(-50%, -50%) scale(${
          scale * 1.05
        })`;
        container.style.webkitTransform = `translate(-50%, -50%) scale3d(${
          scale * 1.05
        }, ${scale * 1.05}, 1)`;
        linkDisabledImg.style.transform = `scale(${scale * 16})`;
      } else if (isZFlip) {
        container.style.transform = `translate(0%, 0%) scale(${scale * 1.3})`;
        container.style.webkitTransform = `translate(0%, 0%) scale3d(${
          scale * 1.3
        }, ${scale * 1.3}, 1)`;
        linkDisabledImg.style.transform = `scale(${scale * 14})`;
      } else if (isMobile || isIOS) {
        container.style.transform = `translate(-50%, -50%) scale(${
          scale * 0.9
        })`;
        container.style.webkitTransform = `translate(-50%, -50%) scale3d(${
          scale * 0.9
        }, ${scale * 0.9}, 1)`;
        linkDisabledImg.style.transform = `scale(${scale * 4})`;
        if (isIOS) linkDisabledImg.style.transform = `scale(${scale * 16})`;
      } else {
        container.style.transform = `translate(-50%, -50%) scale(${
          scale * 0.8
        })`;
        container.style.webkitTransform = `translate(-50%, -50%) scale3d(${
          scale * 0.8
        }, ${scale * 0.8}, 1)`;
        linkDisabledImg.style.transform = `scale(${scale * 3})`;
      }

      if (isIOS) {
        document
          .querySelectorAll(".social-links img")
          .forEach(img => (img.style.transform = `scale(${scale * 6})`));

        // (ileride ekleyeceğim projelerde resim olur büyük ihtimalle :) )
        // const projectLinkImages = document.querySelectorAll("#projects a img");
        // projectLinkImages.forEach(img => {
        //   img.style.transform = `scale(${scale * 6})`;
        // });

        const socialButtons = document.querySelectorAll(
          ".social-links a.social-btn"
        );
        socialButtons.forEach(btn => {
          btn.style.transform = `scale(${scale * 18})`;
          btn.style.marginRight = 96 + "px";
          btn.style.marginLeft = 96 + "px";
          btn.style.marginTop = 128 + "px";
        });
      }

      if (isSafari && (isIOS || isMac))
        html.style.fontSize = 4.7545 / scale + "px";
    };
    setCanvasDimensions();
    updateContainerScale();
  }

  const init = () => {
    scaleContent();
    window.addEventListener("resize", scaleContent);
    window.addEventListener("orientationchange", function () {
      setTimeout(scaleContent, 300);
    });
  };
  window.addEventListener("load", init);
})();
