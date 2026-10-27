/** Semantic roles for the transferred Console. The bundle remains read-only. */
export function syncConsoleDesignSystem(root: HTMLElement) {
  const active = ['/ai-agent-console', '/app'].includes(window.location.pathname);
  const consoleRoot = active ? root.querySelector<HTMLElement>('.exact-ai-console') : null;
  document.querySelectorAll<HTMLElement>('[data-console-portal]').forEach(element => {
    if (!consoleRoot) {
      delete element.dataset.consolePortal;
      delete element.dataset.consoleSystem;
    }
  });
  if (!consoleRoot) return;
  if (!consoleRoot.hasAttribute('data-console-system')) consoleRoot.dataset.consoleSystem = '';
  const page = consoleRoot.querySelector('h1')?.textContent?.trim().toLowerCase().replace(/\s+/g, '-');
  if (page && consoleRoot.dataset.consolePage !== page) consoleRoot.dataset.consolePage = page;

  // Radix renders these outside the Console's DOM tree. Scope only its open UI.
  const portals = Array.from(document.querySelectorAll<HTMLElement>('[role="dialog"], [role="listbox"], [role="menu"], [role="tooltip"]'));
  for (const portal of portals) {
    if (consoleRoot.contains(portal)) continue;
    if (!portal.hasAttribute('data-console-portal')) portal.dataset.consolePortal = '';
    if (!portal.hasAttribute('data-console-system')) portal.dataset.consoleSystem = '';
  }

  for (const scope of [consoleRoot, ...portals]) {
    scope.querySelectorAll<HTMLElement>('button, a.console-video-banner__watch').forEach(button => {
      // Customer chat previews, switches, tabs and cards retain their own roles.
      if (button.closest('.live-chat-preview-panel') || button.hasAttribute('role')) return;
      const sharedButton = button.classList.contains('inline-flex') && button.classList.contains('ring-offset-background');
      const closeButton = button.querySelector('.sr-only')?.textContent?.trim() === 'Close';
      const customButton = closeButton || button.matches('.console-video-banner__watch, .console-video-banner__dismiss, .antbuildz-deploy__manage, .antbuildz-ai-rules__rule-footer button, .antbuildz-ai-rules__rule-examples button, .antbuildz-ai-rules__templates button');
      if (!sharedButton && !customButton) return;
      const classes = button.className;
      const role = closeButton || !button.textContent?.trim() ? 'icon'
        : /bg-destructive|text-destructive/.test(classes) ? 'danger'
        : /bg-gradient-to-br|bg-primary(?:\s|$)/.test(classes) ? 'primary'
        : button.classList.contains('border') || customButton ? 'secondary' : 'ghost';
      if (button.dataset.consoleButton !== role) button.dataset.consoleButton = role;
    });
  }
}
