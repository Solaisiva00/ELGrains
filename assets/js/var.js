"use strict";
const navbar = document.querySelector(".navbar");
const homeBtn = document.querySelector(".home-btn");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("active", window.scrollY > 0);
  navbar.classList.toggle("shadow-lg", window.scrollY > 0);
  homeBtn.classList.toggle("active", window.scrollY > 0);
});
const NavLinks = document.querySelectorAll(".navbar-nav li");
NavLinks.forEach((item) => {
  item.addEventListener("click", () => {});
});

//navlink 
window.addEventListener("scroll", () => {
  var navlink = document.querySelectorAll(".nav-link");
  console.log(navlink);
  if (window.scroll>0) {
    navlink.forEach((link) => {
      link.style.color="white"
    })
  }
})