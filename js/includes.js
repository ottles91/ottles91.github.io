function includeHTML(selector, url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      const container = document.querySelector(selector);
      if (container) {
        container.innerHTML = data;
        document.body.classList.add("sidebar-loaded");
      }
    })
    .catch(error => {
      console.error(`Failed to include ${url}:`, error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  //includeHTML("#sidebar-placeholder", "/components/sidebar.html");
  //TODO: Add header
  includeHTML("#header-placeholder", "/components/header.html");;
  includeHTML("#footer-placeholder", "/components/footer.html");
});