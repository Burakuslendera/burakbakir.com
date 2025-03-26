const userAgent = navigator.userAgent;
const isMobile = /Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
    userAgent
);
const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
const isIOS = /iPhone|iPod/.test(userAgent);
const isZFlip = /SM-F[0-9]{3,}/i.test(userAgent);
const isMac = /mac/i.test(userAgent);

function setCenteredWindowSize() {
  const zoomContainer = document.getElementById("zoomContainer");
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  if (isIOS) {
    zoomContainer.style.width = windowWidth + "px";
    zoomContainer.style.height = windowHeight + "px";
    zoomContainer.style.transform = "none";
  } else {
    let scaleFactor = Math.min(windowWidth / 320, windowHeight / 64);
    zoomContainer.style.transform = `scale(${scaleFactor})`;
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
      baseWidth = window.innerWidth;
      baseHeight = window.innerHeight;
      designWidth = window.innerWidth;
      designHeight = window.innerHeight;
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
          "90%"
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
        container.style.transform = `translate(-50%, -50%) scale(${scale})`;
        container.style.webkitTransform = `translate(-50%, -50%) scale3d(${scale}, ${scale}, 1)`;
        linkDisabledImg.style.transform = `scale(${scale * 16})`;
      } else if (isZFlip) {
        container.style.transform = `translate(0%, 0%) scale(${scale * 1.3})`;
        container.style.webkitTransform = `translate(0%, 0%) scale3d(${
            scale * 1.3
        }, ${scale * 1.3}, 1)`;
        linkDisabledImg.style.transform = `scale(${scale * 14})`;
      } else if (isMobile) {
        container.style.transform = `translate(-50%, -50%) scale(${
            scale * 1.2
        })`;
        container.style.webkitTransform = `translate(-50%, -50%) scale3d(${
            scale * 1.2
        }, ${scale * 1.2}, 1)`;
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
        linkDisabledImg.style.marginBottom = 64 + "px";
        linkDisabledImg.style.marginTop = 32 + "px";
      }

      if ((isMac && isSafari) || /iPad/.test(userAgent)) linkDisabledImg.style.transform = `scale(${scale * 0.2})`;

      if (isIOS) {

        let meta = document.querySelector("meta[name=viewport]");
        if (!meta) {
          meta = document.createElement("meta");
          meta.name = "viewport";
          document.head.appendChild(meta);
        }

        meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes');

        const navSection = document.querySelector('.navigation-section');
        if (navSection) {
          navSection.style.display = 'flex';
          navSection.style.visibility = 'visible';
          navSection.style.opacity = '1';
          navSection.style.position = 'relative';
          navSection.style.zIndex = '1000';

          const navButtons = navSection.querySelectorAll('.nav-button');
          navButtons.forEach(navBtn => {
            navBtn.style.marginLeft = '15px';
            navBtn.style.marginRight = '15px';
          });
        }


        const scale = 1;

        container.style.transform = `translate(-50%, -50%) scale(1)`;
        container.style.webkitTransform = `translate(-50%, -50%) scale3d(1, 1, 1)`;
        linkDisabledImg.style.transform = `scale(${scale * 0.3})`;

        document.querySelector(".social-links").style.gap = '6px';


        const socialButtons = document.querySelectorAll(".social-links a.social-btn");
        if (socialButtons.length > 0) {
          socialButtons.forEach(btn => {
            btn.style.marginTop = -32 + "px";
            btn.style.marginBottom = 64 + "px";
            btn.style.marginLeft = 0 + "px";
            btn.style.marginRight = 6 + "px";
            btn.style.borderRadius = '10px'
            btn.style.width = '50px';
            btn.style.height = '50px';
            btn.style.removeProperty('transform');
            const img = btn.querySelector('img');
            if (img) {
              img.style.width = '30px';
              img.style.height = '30px';
            }
          });
        }
      }
      if ( isIOS || isSafari && !isMac) html.style.fontSize = 5 / scale + "px";
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
