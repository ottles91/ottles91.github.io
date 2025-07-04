function includeHTML(selector, url, callback) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      const container = document.querySelector(selector);
      if (container) {
        container.innerHTML = data;
        if (typeof callback === "function") {
          callback();
        }
      }
    })
    .catch(error => {
      console.error(`Failed to include ${url}:`, error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  includeHTML("#header-placeholder", "/components/header.html", () => {
    highlightActiveNav();

    const toggleButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (toggleButton && navLinks) {
      toggleButton.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("show");
        toggleButton.classList.toggle("open", isOpen);
        toggleButton.setAttribute("aria-expanded", isOpen);
      });
    }
  });

  includeHTML("#footer-placeholder", "/components/footer.html");
});

function highlightActiveNav() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;

    if (
      linkPath === currentPath ||
      (linkPath.endsWith("/index.html") && currentPath === linkPath.replace("index.html", ""))
    ) {
      link.classList.add("active");
    }
  });
}