// For opening and closing mobile menu
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");
const mobileMenu = document.getElementsByClassName("mobile-menu")[0];

hamburgerIcon.addEventListener("click", () => {
  mobileMenu.style.cssText = "display:block";
});

closeIcon.addEventListener("click", () => {
  mobileMenu.style.cssText = "display:none";
});
