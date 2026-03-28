// ─── Dinamik Cihaz Tespiti ────────────────────────────────────────────────────
// DevTools cihaz değişikliklerini sayfa yenilenmeden yakalamak için
// her scaleContent() çağrısında yeniden değerlendirilir.
function getDeviceFlags() {
  var ua = navigator.userAgent;
  var isIOS    = /iPhone|iPod/.test(ua);
  var isIPad   = /iPad/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  var isZFlip  = /SM-F[0-9]{3,}/i.test(ua);
  var isMobile = !isIOS && !isIPad && !isZFlip &&
                 /Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  var isSafari = /^((?!chrome|android).)*safari/i.test(ua);
  var isDesktop = !isIOS && !isIPad && !isZFlip && !isMobile;
  return { isIOS: isIOS, isIPad: isIPad, isZFlip: isZFlip,
           isMobile: isMobile, isSafari: isSafari, isDesktop: isDesktop };
}

// ─── Sabitler ────────────────────────────────────────────────────────────────
const DESKTOP_DESIGN_WIDTH = 800;
const VIEWPORT_FIT_FACTOR = 0.90;
const IMAGE_LOAD_TIMEOUT_MS = 3000;

(function () {

  // ── Tüm görseller yüklenene (veya hata/zaman aşımı olana) kadar bekle ─────
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

  // ── Canvas: fiziksel piksel boyutlarını ve DPR ölçeklendirmesini düzelt ───
  function setCanvasDimensions(canvas) {
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";

    if (window.devicePixelRatio > 1) {
      var dpr = Math.min(window.devicePixelRatio, 2);
      // canvas.width atamak 2D context'i sıfırlar — scale()'den önce yapılmalı
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      var ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
    } else {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }

  // ── Viewport meta yardımcısı ─────────────────────────────────────────────
  function setViewportMeta(content) {
    var meta = document.querySelector("meta[name=viewport]");
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "viewport";
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
  }

  // ── Cihaza göre viewport yapılandırması ──────────────────────────────────
  function configureViewport(flags) {
    if (flags.isDesktop) {
      setViewportMeta("width=device-width, initial-scale=1, maximum-scale=1");
    } else if (flags.isZFlip) {
      setViewportMeta("width=device-width, initial-scale=1.4, maximum-scale=1.4");
    } else if (flags.isIOS || flags.isIPad) {
      setViewportMeta(
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes"
      );
    } else if (flags.isMobile) {
      // Açık initial-scale, Samsung Internet'in yenilemede zoom seviyesini
      // hatırlamasını engeller. screen.width, Chromium tabanlı tarayıcılarda
      // (Chrome, Samsung Internet) CSS pikseli döndürür.
      var mobileInitialScale = (window.screen.width / DESKTOP_DESIGN_WIDTH).toFixed(4);
      setViewportMeta("width=" + DESKTOP_DESIGN_WIDTH + ", initial-scale=" + mobileInitialScale + ", user-scalable=yes");
    }

    if (flags.isSafari) {
      document.documentElement.style.setProperty("-webkit-text-size-adjust", "100%");
    }
  }

  // ── Fare ipucu görünürlüğü ───────────────────────────────────────────────
  // Mobil/dokunmatik cihazlarda fare ipucu anlamsız olduğundan gizlenir.
  function updateMouseHint(flags) {
    var hint = document.getElementById("mouseHint");
    if (!hint) return;
    hint.style.display = (flags.isDesktop) ? "" : "none";
  }

  // ── DevTools emülasyon takibi ─────────────────────────────────────────────
  // Emülasyonda: outerWidth = gerçek tarayıcı penceresi, innerWidth = taklit edilen cihaz.
  // Fark her zaman büyüktür (500+ px). Gerçek dar pencerede ikisi birlikte küçülür.
  // DevTools panelinin yan yerleşimi genellikle 500 px'den azdır,
  // bu yüzden 500 eşiği yanlış pozitiflerden kaçınmayı sağlar.
  function _isDevToolsEmulation() {
    return window.outerWidth > 900 && (window.outerWidth - window.innerWidth) > 500;
  }

  var _wasEmulated = _isDevToolsEmulation();

  function _checkEmulationState() {
    var nowEmulated = _isDevToolsEmulation();
    if (_wasEmulated && !nowEmulated) {
      // Emülasyon kapatıldı — temiz masaüstü görünümü için sayfayı yenile.
      location.reload();
      return;
    }
    _wasEmulated = nowEmulated;
  }

  // ── matchMedia ile DPR değişikliği tespiti ────────────────────────────────
  // DevTools, cihaz başına devicePixelRatio'yu değiştirir; bu her zaman
  // resize eventi tetiklemez. DPR her değiştiğinde dinleyiciyi yeniden
  // kaydederek bir sonraki değişikliği her zaman yakalayabiliriz.
  var _dprMql = null;

  function _onDprChange() {
    scaleContent();
    _trackDpr();
  }

  function _trackDpr() {
    if (_dprMql) _dprMql.removeEventListener("change", _onDprChange);
    _dprMql = window.matchMedia(
      "(resolution: " + window.devicePixelRatio + "dppx)"
    );
    _dprMql.addEventListener("change", _onDprChange);
  }

  // ── Ana giriş noktası ─────────────────────────────────────────────────────
  function scaleContent() {
    _checkEmulationState();
    var flags = getDeviceFlags();
    var container = document.getElementById("zoomContainer");
    var canvas = document.getElementById("renderSurface");

    setCanvasDimensions(canvas);
    configureViewport(flags);
    updateMouseHint(flags);

    var scalingDone = Promise.resolve();

    if (flags.isDesktop || flags.isMobile) {
      scalingDone = scaleDesktop(container, flags) || Promise.resolve();
    } else if (flags.isZFlip) {
      scaleZFlip(container);
    } else {
      scaleIOS(container, flags);
    }

    scalingDone.then(function() {
      var loader = document.getElementById("loadingOverlay");
      if (loader) {
        loader.classList.add("hidden");
        setTimeout(function() {
          if (loader.parentNode) loader.parentNode.removeChild(loader);
        }, 600);
      }
    });
  }

  // ── Masaüstü: görseller yüklenince tüm içeriği viewport'a sığdır ─────────
  function scaleDesktop(container, flags) {
    // scrollHeight gerçek içerik yüksekliğini yansıtsın diye kısıtlamaları kaldır
    container.style.width = DESKTOP_DESIGN_WIDTH + "px";
    container.style.height = "auto";
    container.style.maxHeight = "none";
    // Görseller beklenirken ölçekleme sıfırlanır
    container.style.transform = "translate(-50%, -50%) scale(1)";
    if (flags.isSafari) {
      container.style.webkitTransform = "translate(-50%, -50%) scale3d(1,1,1)";
    }

    return waitForImages(container).then(function () {
      applyDesktopScale(container, flags);
    });
  }

  function applyDesktopScale(container, flags) {
    // clientWidth/clientHeight layout viewport'u döndürür; mobilde
    // window.innerWidth gibi görsel viewport'u değil.
    var vw = document.documentElement.clientWidth;
    var vh = document.documentElement.clientHeight;

    // Tüm görseller yüklendikten sonra doğal yüksekliği ölç
    var naturalH = container.scrollHeight;

    // Masaüstünde fare ipucu (bottom: 25px, ~30px yükseklik) için alan bırak
    var availableH = flags.isDesktop ? vh - 70 : vh;
    // İçerik yüksekliği kullanılabilir yüksekliğin VIEWPORT_FIT_FACTOR'üne sığsın
    var scaleForHeight = (availableH * VIEWPORT_FIT_FACTOR) / naturalH;
    // Tasarım genişliği viewport genişliğine sığsın
    var scaleForWidth = vw / DESKTOP_DESIGN_WIDTH;
    // Daha kısıtlayıcı olanı kullan (tarayıcı zoom'unu telafi için >1'e izin verilir)
    var scale = Math.min(scaleForHeight, scaleForWidth);

    container.style.transform = "translate(-50%, -50%) scale(" + scale + ")";
    if (flags.isSafari) {
      container.style.webkitTransform =
        "translate(-50%, -50%) scale3d(" + scale + "," + scale + ",1)";
    }

    // Güvenlik maxHeight (ön-ölçek px cinsinden): dinamik içerik kartı büyütürse
    // (örn. Projeler sekmesine geçince) kart viewport'u taşmak yerine kaydırma çubuğu açar.
    container.style.maxHeight = (availableH * VIEWPORT_FIT_FACTOR / scale) + "px";
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

  // ── iOS / iPad ────────────────────────────────────────────────────────────
  function scaleIOS(container, flags) {
    // CSS kuralları düzeni yönetir; JS ölçek dönüşümüne gerek yoktur
    container.style.transform = "translate(-50%, -50%) scale(1)";
    container.style.webkitTransform = "translate(-50%, -50%) scale3d(1,1,1)";

    // Dar ekranlarda gezinme düğmesi boşluklarını daralt
    var navSection = container.querySelector(".navigation-section");
    if (navSection) {
      navSection.querySelectorAll(".nav-button").forEach(function (btn) {
        btn.style.marginLeft = "15px";
        btn.style.marginRight = "15px";
      });
    }

    // 8 sosyal buton dar ekrana sığsın diye küçült
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

    // iOS Safari hareket-zoom kaymasını düzelt
    if (flags.isIOS && flags.isSafari) {
      document.addEventListener("gesturestart", function fixZoom() {
        setViewportMeta(
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes"
        );
        document.removeEventListener("gesturestart", fixZoom, true);
      }, true);
    }
  }

  // ── Başlatma ve olay bağlama ──────────────────────────────────────────────
  var _resizeTimer = null;

  var init = function () {
    scaleContent();
    if (window.matchMedia) _trackDpr();
    // Resize'ı 100 ms debounce et: Chrome DevTools'un navigator.userAgent ve
    // devicePixelRatio'yu güncellemesi için zaman tanır.
    window.addEventListener("resize", function () {
      clearTimeout(_resizeTimer);
      _resizeTimer = setTimeout(scaleContent, 100);
    });
    window.addEventListener("orientationchange", function () {
      setTimeout(scaleContent, 300);
    });
  };

  window.addEventListener("load", init);
  window.initScaleContent = init;

})();