document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded. Ready for effects.");

  const envelopeContainer = document.getElementById("envelope-container");

  if (envelopeContainer) {
    envelopeContainer.addEventListener("click", () => {
      envelopeContainer.classList.toggle("open");
    });
  }
  const windowSection = document.getElementById("magic-window");
  const windowFrame = document.querySelector(".window-frame");

  if (windowSection && windowFrame) {
    windowFrame.addEventListener("click", () => {
      windowSection.classList.toggle("open");
    });
  }

  const petalsScene = document.getElementById("petals-scene");
  if (petalsScene) {
    const petalCount = 40;
    for (let i = 0; i < petalCount; i++) {
      const petal = document.createElement("div");
      petal.className = "petal";

      const size = Math.random() * 8 + 6;
      petal.style.width = `${size}px`;
      petal.style.height = `${size}px`;

      petal.style.left = `${Math.random() * 100}%`;
      petal.style.top = `${Math.random() * 20 - 10}%`;

      const duration = Math.random() * 2.5 + 2.5;
      const delay = Math.random() * 1.5 + 0.5;
      petal.style.animationDuration = `${duration}s`;
      petal.style.animationDelay = `${delay}s`;

      petalsScene.appendChild(petal);
    }
  }

  const waveSection = document.getElementById("wave-section");
  if (waveSection) {
    waveSection.addEventListener("click", () => {
      waveSection.classList.toggle("open");
    });
  }
});
