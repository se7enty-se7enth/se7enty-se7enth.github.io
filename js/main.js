const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav--header__bottom");
const overlay = document.querySelector(".overlay");
const links = document.querySelectorAll(".nav--header__bottom a");
const body = document.body;

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
  body.classList.toggle("menu-open");
});

overlay.addEventListener("click", () => {
  burger.classList.remove("active");
  menu.classList.remove("active");
  overlay.classList.remove("active");
  body.classList.remove("menu-open");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("menu-open");
  });
});