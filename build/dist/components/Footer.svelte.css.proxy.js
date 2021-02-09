// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".footer-wrapper.svelte-1ibv40.svelte-1ibv40{align-items:center;display:flex;justify-content:center;flex-direction:column\n  }.footer.svelte-1ibv40.svelte-1ibv40{align-items:center;display:flex;justify-content:center;height:72px;max-width:1200px;width:100%}.footer-nav.svelte-1ibv40.svelte-1ibv40{align-items:center;display:flex}.footer-item.svelte-1ibv40.svelte-1ibv40{color:rgb(141, 124, 130);padding-left:16px;padding-right:16px;text-decoration:none}.footer-item.svelte-1ibv40.svelte-1ibv40:hover{color:rgb(104, 85, 92)}.mode-toggle.svelte-1ibv40.svelte-1ibv40{align-items:center;display:none;height:72px;width:144px;cursor:pointer}@media(max-width: 500px){.mode-toggle.svelte-1ibv40.svelte-1ibv40{display:flex}}.mode-toggle.svelte-1ibv40 svg.svelte-1ibv40{height:1.25rem;fill:rgb(141, 124, 130)}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}