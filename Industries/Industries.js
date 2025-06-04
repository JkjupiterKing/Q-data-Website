// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navUl.classList.toggle("active");
});

// Dropdown menu toggle on button click
document.querySelectorAll(".dropdown-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const parent = btn.closest(".dropdown");
    parent.classList.toggle("open");
    document.querySelectorAll(".dropdown").forEach((d) => {
      if (d !== parent) d.classList.remove("open");
    });
    btn.setAttribute("aria-expanded", parent.classList.contains("open"));
  });
});

// Close dropdowns when clicking outside
document.addEventListener("click", function (e) {
  document.querySelectorAll(".dropdown").forEach((d) => {
    if (!d.contains(e.target)) d.classList.remove("open");
  });
});

const slides = document.querySelectorAll(".carousel-slide");
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove("active");

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add("active");
}

// Change slide every 5 seconds
setInterval(showNextSlide, 5000);
