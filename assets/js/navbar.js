const navbar = document.querySelector(".navbar");
const hamburger = navbar.querySelector(".menu-btn");
const toggler = navbar.querySelector(".navbar-toggler");
let active = false;
// Animate on scroll
window.onscroll = () => {
  if (document.body.scrollTo > 60 || document.documentElement.scrollTop > 60) {
    navbar.classList.add("scrolled");
  } else {
    if (navbar.classList.contains("scrolled")) {
      navbar.classList.remove("scrolled");
      // Only for mobile devices
      if (window.screen.width <= 600 && active == true) {
        if (document.body.scrollTo < 60 || document.documentElement.scrollTop < 60) {
          navbar.style.backgroundColor = "#1d1d1d";
        }
      }
    }
  }
};
// Toggle hamburger
toggler.addEventListener("click", () => {
  if (!active) {
    hamburger.classList.add("active");
    if (document.body.scrollTo < 60 || document.documentElement.scrollTop < 60) {
      navbar.style.backgroundColor = "#1d1d1d";
    }
    active = true;
  } else {
    hamburger.classList.remove("active");
    if (document.body.scrollTo < 60 || document.documentElement.scrollTop < 60) {
      navbar.style.backgroundColor = "transparent";
    }
    active = false;
  }
});
