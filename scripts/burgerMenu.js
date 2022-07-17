const mobileNav = document.querySelector(".nav");
const headerButton = document.querySelector(".header-btn");

document.querySelector(".burger-menu").addEventListener("click", () => {
  mobileNav.style.right = 0;
});

document.querySelector(".burger-menu__exit").addEventListener("click", () => {
  mobileNav.style.right = -100 + "%";
});
