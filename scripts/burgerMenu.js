const burgerNav = document.querySelector(".burger__nav");

function getViewportHeight (){
  let intViewportHeight = window.innerHeight;
  return intViewportHeight;
}

document.querySelector(".burger-menu").addEventListener("click", () => {
  document.body.style.overflow = "hidden"
  burgerNav.style.left = 0;
});

document.querySelector(".burger-menu__exit").addEventListener("click", () => {
  document.body.style.overflow = "auto"
  burgerNav.style.left = -100 + "%";
});
