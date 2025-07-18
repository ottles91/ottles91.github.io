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

  
  document.addEventListener("DOMContentLoaded", () => {
  // Find all <code> blocks with a data-code-id
  document.querySelectorAll('code[data-code-id]').forEach(codeBlock => {
    const codeId = codeBlock.getAttribute('data-code-id');
    const rawScript = document.querySelector(`script[type="text/plain"][data-code-id="${codeId}"]`);

    if (rawScript) {
      const code = rawScript.textContent.trim();
      codeBlock.textContent = code;
      hljs.highlightElement(codeBlock);
    }
  });
});