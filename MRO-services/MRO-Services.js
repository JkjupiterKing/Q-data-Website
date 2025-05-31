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
document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    header.addEventListener("click", function () {
      const active = this.classList.contains("active");

      // Close all
      headers.forEach((h) => {
        h.classList.remove("active");
        h.nextElementSibling.style.display = "none";
      });

      // Toggle current
      if (!active) {
        this.classList.add("active");
        this.nextElementSibling.style.display = "block";
      }
    });
  });

  const readMoreLinks = document.querySelectorAll(".read-more");

  readMoreLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const card = this.closest(".service-card");

      // Collapse all others
      document.querySelectorAll(".service-card").forEach((c) => {
        if (c !== card) {
          c.classList.remove("expanded");
          c.querySelector(".read-more").innerText = "Read more";
        }
      });

      // Toggle the clicked one
      card.classList.toggle("expanded");
      this.innerText = card.classList.contains("expanded")
        ? "Read less"
        : "Read more";
    });
  });
});
