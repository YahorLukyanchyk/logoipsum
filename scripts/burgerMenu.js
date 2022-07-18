const burgerNav = document.querySelector(".burger__nav");

function getViewportHeight (){
  let intViewportHeight = window.innerHeight;
  return intViewportHeight;
}

document.querySelector(".burger-menu").addEventListener("click", () => {
  burgerNav.style.top = 0;
});

document.querySelector(".burger-menu__exit").addEventListener("click", () => {
  burgerNav.style.top = -100 + "%";
});
