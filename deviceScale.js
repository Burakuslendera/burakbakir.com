(function () {
  function scaleContent() {
    const isPhone = /Android|iPhone|Tablet|iPad|/i.test(navigator.userAgent);
    const isZFlipDevice = /SM-F7\d+/i.test(navigator.userAgent); // Z fold ?? Fuck OFF!!!!

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

    if (isPhone && !(width > 1280 && height >= 800)) {
      baseWidth = 4096; baseHeight = 1280;
      if (centeredDiv) {
        centeredDiv.style.maxWidth = fixedSize;
        centeredDiv.style.minWidth = fixedSize;
      }
    }
    else if (isZFlipDevice) {
      baseWidth = 2893; baseHeight = 2000;
      // Okay z Flip :/
      document.querySelector("meta[name=viewport]").setAttribute(
          'content',
          'width=device-width, initial-scale=1.4, maximum-scale=1.4');
      if (centeredDiv) {
        centeredDiv.style.maxWidth = fixedSize;
        centeredDiv.style.minWidth = fixedSize;
      }
    }
    else {
      baseWidth = 4096;
      baseHeight = 1280;
      document.querySelector("meta[name=viewport]").setAttribute(
          'content',
          'initial-scale=1.7, maximum-scale=1.7');
      if (centeredDiv) {
        centeredDiv.style.maxWidth = fixedSize;
        centeredDiv.style.minWidth = fixedSize;
      }
    }

    const setCanvasDimensions = () => {
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";

      if (window.devicePixelRatio > 1) {
        canvas.width = canvas.offsetWidth * 2; canvas.height = canvas.offsetHeight * 2;
        if (canvas.getContext("2d")) canvas.getContext("2d").scale(4, 4);
      }
      else { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
    };

    const updateContainerScale = () => {
      container.style.width = designWidth + "px";
      container.style.height = designHeight + "px";

      const scaleW = Math.imul(window.innerWidth,  1.2 ) / baseWidth;
      const scaleH = Math.imul(window.innerHeight, 1.2) / baseHeight;
      const scale = Math.min(scaleW, scaleH);

      container.style.transform = `translate(-50%, -50%) scale(${scale})`;
      if (isZFlipDevice) container.style.transform = `translate(0%, 0%) scale(${scale})`;

    };

    setCanvasDimensions();
    updateContainerScale();
  }

  const init = () => {
    scaleContent();
    window.addEventListener("resize", scaleContent);
    window.addEventListener("orientationchange", scaleContent);
  };

  window.addEventListener("load", init);
})();