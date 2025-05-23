document.addEventListener("DOMContentLoaded", () => {
  console.log("Qrello clone loaded");

  // Example interactivity if needed
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
      button.style.opacity = 0.85;
    });

    button.addEventListener("mouseleave", () => {
      button.style.opacity = 1;
    });
  });
});
