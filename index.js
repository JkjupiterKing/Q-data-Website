// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navUl.classList.toggle("active");
});

// Dropdown menu
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
document.addEventListener("click", function (e) {
  document.querySelectorAll(".dropdown").forEach((d) => {
    if (!d.contains(e.target)) d.classList.remove("open");
  });
});
