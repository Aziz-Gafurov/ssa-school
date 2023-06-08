// Animatsiyalar uchun JavaScript kodlari

const navItems = document.querySelectorAll("nav ul li");

navItems.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.transform = "scale(1.1)";
    item.style.transition = "transform 0.3s ease";
  });

  item.addEventListener("mouseout", () => {
    item.style.transform = "scale(1)";
  });
});
