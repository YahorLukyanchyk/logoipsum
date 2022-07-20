let leftBtn = document.querySelector(".pricing-change__btn-left");
let rightBtn = document.querySelector(".pricing-change__btn-right");
let pricing = document.querySelectorAll(".pricing-plan__price");

leftBtn.addEventListener("click", () => {
  pricing[1].innerHTML = "$29/month";
  pricing[2].innerHTML = "$49/month";
  leftBtn.style.background = "#5454d4";
  leftBtn.style.color = "white";
  rightBtn.style.background = "none";
  rightBtn.style.color = "black";
});

rightBtn.addEventListener("click", () => {
  pricing[1].innerHTML = "$39/month";
  pricing[2].innerHTML = "$69/month";
  leftBtn.style.background = "none";
  leftBtn.style.color = "black";
  rightBtn.style.background = "#5454d4";
  rightBtn.style.color = "white";
});
