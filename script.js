AOS.init({
  duration: 800,
  once: true,
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const spans = hamburger.querySelectorAll("span");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
  navLinks.classList.toggle("flex");
  navLinks.classList.toggle("flex-col");
  spans[0].classList.toggle("rotate-45");
  spans[0].classList.toggle("translate-y-2");
  spans[1].classList.toggle("opacity-0");
  spans[2].classList.toggle("-rotate-45");
  spans[2].classList.toggle("-translate-y-2");
});
