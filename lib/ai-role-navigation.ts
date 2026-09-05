/** Bridges source-owned role routes and links still owned by the copied router. */
export function syncAiRoleNavigation(root: HTMLElement, roles: readonly { label: string; href: string }[], redirects: Record<string, string>) {
  const footer = root.querySelector('footer nav[aria-label="AI Agent Roles"]');
  if (footer && !footer.querySelector('[data-ai-role-list]')) {
    footer.querySelector('ul')?.setAttribute('hidden', '');
    const list = document.createElement('ul');
    list.dataset.aiRoleList = 'true';
    roles.forEach(({ label, href }) => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = href; link.textContent = label;
      item.appendChild(link); list.appendChild(item);
    });
    footer.appendChild(list);
  }
  document.querySelectorAll<HTMLElement>('.antbuildz-simple-menu-links').forEach(drawer => {
    if (drawer.querySelector('[data-ai-mobile-roles]')) return;
    const group = document.createElement('div');
    group.dataset.aiMobileRoles = 'true';
    [{ label: 'All AI Roles', href: '/ai-roles' }, ...roles].forEach(({ label, href }, index) => {
      const link = document.createElement('a');
      link.href = href; link.textContent = label;
      link.className = `antbuildz-menu-link${index ? ' antbuildz-menu-role-link' : ''}`;
      group.appendChild(link);
    });
    drawer.querySelector('a[href="/pricing"]')?.insertAdjacentElement('afterend', group);
  });
  root.querySelectorAll<HTMLAnchorElement>('a[href]').forEach(link => {
    const destination = redirects[link.getAttribute('href') ?? ''];
    if (destination) link.setAttribute('href', destination);
    if (link.getAttribute('href') === '/resources#ai-agent-roles') link.setAttribute('href', '/ai-roles');
    if (!link.pathname.startsWith('/ai-roles') || link.origin !== window.location.origin
      || link.dataset.aiRoleNavigation === 'true') return;
    link.dataset.aiRoleNavigation = 'true';
    link.addEventListener('click', event => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey
        || event.shiftKey || event.altKey || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
      event.preventDefault(); event.stopImmediatePropagation();
      window.location.assign(link.href);
    }, true);
  });
}
