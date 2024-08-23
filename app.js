/* global variables */
const menuToggle = document.getElementById("toggle-menu");
const navList = document.getElementById("nav-list");

/* toggle navigation menu */
menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});
