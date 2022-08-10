"use strict";

const first = document.querySelectorAll(".nav__list");
const menu = document.querySelector(".nav__container");
const overlay = document.querySelector(".overlay");
const openBtn = document.querySelector(".header__toggle");
const closeBtn = document.querySelector(".nav__close");
console.log(menu, overlay);
let dropdown;
let srce;
let img;
first.forEach((nav) => {
  nav.addEventListener("click", function (e) {
    dropdown = e.target.parentElement.querySelector(".nav__dropdown");
    console.log(dropdown);
    if (!dropdown) return;
    dropdown.classList.toggle("show");
    img = nav.querySelector("img");
    srce = img.src;
    img.src = img.dataset.src;
    img.dataset.src = srce;
  });
});
openBtn.addEventListener("click", function () {
  menu.classList.add("menu");
  overlay.classList.add("display");
});
closeBtn.addEventListener("click", function () {
  menu.classList.remove("menu");
  overlay.classList.remove("display");
});
