document.addEventListener("DOMContentLoaded", () => {
    const masterToggle = document.querySelector(".toc-master-toggle");
    const tocContent = document.querySelector("#toc-content");
  
    if (masterToggle && tocContent) {
      masterToggle.addEventListener("click", () => {
        const isExpanded = masterToggle.getAttribute("aria-expanded") === "true";
        masterToggle.setAttribute("aria-expanded", !isExpanded);
        tocContent.classList.toggle("hidden");
      });
    }
  });