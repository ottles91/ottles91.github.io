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
  document.querySelectorAll('code[data-code-id]').forEach(codeBlock => {
    const codeId = codeBlock.getAttribute('data-code-id');
    const rawScript = document.querySelector(`script[type="text/plain"][data-code-id="${codeId}"]`);

    if (rawScript) {
      let code = rawScript.textContent.replace(/\t/g, '  ').split('\n');

      // Remove empty lines at start and end
      while (code.length && code[0].trim() === '') code.shift();
      while (code.length && code[code.length - 1].trim() === '') code.pop();

      // Find minimum indentation
      const minIndent = code.reduce((min, line) => {
        if (line.trim() === '') return min; // Ignore blank lines
        const leadingSpaces = line.match(/^ */)[0].length;
        return min === null ? leadingSpaces : Math.min(min, leadingSpaces);
      }, null);

      // Remove minIndent spaces from each line
      code = code.map(line => line.slice(minIndent));

      codeBlock.textContent = code.join('\n');
      hljs.highlightElement(codeBlock);
    }
  });
});