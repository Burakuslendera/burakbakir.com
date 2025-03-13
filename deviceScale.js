(function () {
  function scaleContent() {
    const ua = navigator.userAgent;
    const isSafari =
      ua.includes("Safari") &&
      !ua.includes("Chrome") &&
      !ua.includes("CriOS") &&
      !ua.includes("FxiOS"); // Safari Scale Problem ?? Fuck
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    const isPhone = /Android|iPhone|/i.test(ua);
    const isZFlipDevice = /SM-F7\d+/i.test(ua); // Z fold ?? Fuck OFF!!!!

    const container = document.getElementById("zoomContainer");
    const canvas = document.getElementById("renderSurface");
    const centeredDiv = document.querySelector(".centered-div");

    const width = window.innerWidth;
    const height = window.innerHeight;

    const fixedSize = "1300px";
    let designWidth = 2000,
      designHeight = 1500,
      baseWidth,
      baseHeight;

    // Safari :/
    if (isSafari) {
      if (isIOS) {
        // iPhone/iPad Safari
        document
          .querySelector("meta[name=viewport]")
          .setAttribute(
            "content",
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes"
          );
      } else {
        // macOS Safari
        document
          .querySelector("meta[name=viewport]")
          .setAttribute("content", "initial-scale=1.7, maximum-scale=1.7");
      }
    }

    if (isPhone && !isZFlipDevice) {
      baseWidth = 4096;
      baseHeight = 1280;
      if (centeredDiv) {
        centeredDiv.style.maxWidth = fixedSize;
        centeredDiv.style.minWidth = fixedSize;
      }
    } else if (isZFlipDevice) {
      baseWidth = 2893;
      baseHeight = 2000;
      // Okay z Flip :/
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
    } else {
      baseWidth = 4096;
      baseHeight = 1280;
      document
        .querySelector("meta[name=viewport]")
        .setAttribute("content", "initial-scale=1.7, maximum-scale=1.7");
      if (centeredDiv) {
        centeredDiv.style.maxWidth = fixedSize;
        centeredDiv.style.minWidth = fixedSize;
      }
    }

    // Disable Safari's automatic text-size adjustment
    if (isSafari) {
      document.documentElement.style.setProperty(
        "-webkit-text-size-adjust",
        "100%"
      );
    }

    // Fix orientation zoom issues on iOS Safari using gesturestart event (only for iOS)
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

      const scaleW = Math.imul(window.innerWidth, 1.2) / baseWidth;
      const scaleH = Math.imul(window.innerHeight, 1.2) / baseHeight;
      const scale = Math.min(scaleW, scaleH);

      // Uygulanan transform değerine Safari için 3D ekle (GPU katmanı oluşturur)
      container.style.transform = `translate(-50%, -50%) scale(${scale})`;
      container.style.webkitTransform = `translate(-50%, -50%) scale3d(${scale}, ${scale}, 1)`;
      if (isZFlipDevice) {
        container.style.transform = `translate(0%, 0%) scale(${scale})`;
        container.style.webkitTransform = `translate(0%, 0%) scale3d(${scale}, ${scale}, 1)`;
      }

      // Safari'de font boyutunu ayarla
      if (isSafari && (isIOS || ua.includes("Mac"))) {
        var htmlElement = document.querySelector("html");
        var desiredFontSize = 16; // İstenen görüntülenen font boyutunu buradan ayarlayabilirsiniz (örneğin 16px)
        htmlElement.style.fontSize = desiredFontSize / scale + "px";
      }
    };

    setCanvasDimensions();
    updateContainerScale();
  }

  const init = () => {
    scaleContent();
    window.addEventListener("resize", scaleContent);
    window.addEventListener("orientationchange", function () {
      // Safari'de orientationchange sonrasında ölçümlerde gecikme olabiliyor
      if (
        /iPhone|iPad|iPod/i.test(navigator.userAgent) &&
        /^((?!chrome).)*safari/i.test(navigator.userAgent)
      ) {
        setTimeout(scaleContent, 300);
      } else {
        scaleContent();
      }
    });
  };

  window.addEventListener("load", init);
})();
