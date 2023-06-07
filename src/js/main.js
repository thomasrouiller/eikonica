import gsap from "gsap";

var button = document.querySelector(".navigation-close");
var menu = document.querySelector(".navigation-open");
var navigation = document.querySelector(".navigation-credits-informations");

var openMenu = function () {
  menu.classList.toggle("is-open");
  button.classList.toggle("is-active");
  navigation.classList.toggle("is-open");
};

button.addEventListener("click", openMenu);

links.forEach((link) => {
  link.addEventListener("click", openMenu);
});
