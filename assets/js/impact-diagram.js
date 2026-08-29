(() => {
  const allowsMotion = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (!allowsMotion || !hasFinePointer) return;

  document.querySelectorAll("[data-impact-diagram]").forEach((diagram) => {
    let animationFrame;

    const reset = () => {
      diagram.dataset.active = "false";
      ["--core-x", "--core-y", "--water-x", "--water-y", "--ring-x", "--ring-y", "--ring-x-inverse", "--ring-y-inverse", "--ring-x-half", "--ring-y-half"].forEach((property) => diagram.style.removeProperty(property));
    };

    document.addEventListener("pointermove", (event) => {
      const bounds = diagram.getBoundingClientRect();
      const centreX = bounds.left + bounds.width / 2;
      const centreY = bounds.top + bounds.height / 2;
      const x = Math.max(-1, Math.min(1, (event.clientX - centreX) / (window.innerWidth / 2)));
      const y = Math.max(-1, Math.min(1, (event.clientY - centreY) / (window.innerHeight / 2)));

      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        diagram.dataset.active = "true";
        diagram.style.setProperty("--core-x", `${x * 15}px`);
        diagram.style.setProperty("--core-y", `${y * 15}px`);
        diagram.style.setProperty("--water-x", `${x * -10}px`);
        diagram.style.setProperty("--water-y", `${y * -10}px`);
        diagram.style.setProperty("--ring-x", `${x * 8}px`);
        diagram.style.setProperty("--ring-y", `${y * 8}px`);
        diagram.style.setProperty("--ring-x-inverse", `${x * -8}px`);
        diagram.style.setProperty("--ring-y-inverse", `${y * -8}px`);
        diagram.style.setProperty("--ring-x-half", `${x * -4}px`);
        diagram.style.setProperty("--ring-y-half", `${y * -4}px`);
      });
    });

    window.addEventListener("blur", reset);
    document.addEventListener("mouseout", (event) => {
      if (!event.relatedTarget) reset();
    });
  });
})();