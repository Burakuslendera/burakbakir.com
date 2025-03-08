(function () {
  function scaleContent() {
    const userAgent = navigator.userAgent;
    const isPhone = /Android|iPhone|Tablet|iPad|/i.test(userAgent);

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
      baseWidth = 4096; baseHeight = 2893;
      if (centeredDiv) {
        centeredDiv.style.maxWidth = fixedSize;
        centeredDiv.style.minWidth = fixedSize;
      }
    } else {
      baseWidth = 4096;
      baseHeight = 1280;
      if (centeredDiv) {
        centeredDiv.style.maxWidth = fixedSize;
        centeredDiv.style.minWidth = fixedSize;
      }
    }

    const setCanvasDimensions = () => {
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";

      if (window.devicePixelRatio > 1) {
        canvas.width = canvas.offsetWidth * 2;
        canvas.height = canvas.offsetHeight * 2;
        if (canvas.getContext("2d")) canvas.getContext("2d").scale(16, 16);
      } else {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    };

    const updateContainerScale = () => {
      container.style.width = designWidth + "px";
      container.style.height = designHeight + "px";

      const scaleW = window.innerWidth / baseWidth;
      const scaleH = window.innerHeight / baseHeight;
      const scale = Math.min(scaleW, scaleH);

      container.style.transform = `translate(-50%, -50%) scale(${scale})`;
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