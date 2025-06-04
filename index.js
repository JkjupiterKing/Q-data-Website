document.addEventListener("DOMContentLoaded", () => {
  // Load navbar then attach events
  $("#mySidenav").load("./Navbar/Navbar.html", function () {
    // ✅ Attach toggle functionality after navbar loads
    const menuToggle = document.querySelector(".menu-toggle");
    const navUl = document.querySelector("nav ul");

    if (menuToggle && navUl) {
      menuToggle.addEventListener("click", () => {
        navUl.classList.toggle("active");
      });
    }

    // ✅ Attach dropdown toggle
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
  });

  // ✅ Close dropdowns when clicking outside (can run globally)
  document.addEventListener("click", function (e) {
    document.querySelectorAll(".dropdown").forEach((d) => {
      if (!d.contains(e.target)) d.classList.remove("open");
    });
  });
});
