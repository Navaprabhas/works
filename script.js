// script.js

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".icon-item");
  items.forEach(item => {
    item.addEventListener("mouseenter", () => {
      item.classList.add("hovered");
    });
    item.addEventListener("mouseleave", () => {
      item.classList.remove("hovered");
    });
  });
});
