const hamburger = document.querySelector(".nav__hamburgermenu");
const navOptions = document.querySelector(".nav__options");

hamburger.addEventListener("click", hamburgerMenu);

function hamburgerMenu() {
    navOptions.classList.toggle("nav__options--active");
    navOptions.classList.toggle("nav__options--inactive");
}