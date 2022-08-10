"use strict";

const first = document.querySelectorAll(".nav__list");
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
