import { openCompanyProfile } from './console-company-profile';
const icons = {
  company: '<path d="M4 21V3h12v18M16 9h4v12M2 21h20M8 7h4M8 11h4M8 15h4"/>',
  chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  people: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m20 0v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/><circle cx="9" cy="7" r="4"/>',
  setup: '<path d="M9 6h12M3 18h12"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/>',
  knowledge: '<path d="M12 7v14m0-14C9 4 5 4 2 5v14c4-1 7 0 10 2 3-2 6-3 10-2V5c-3-1-7-1-10 2z"/>',
  test: '<path d="m7 3 14 9-14 9z"/>',
  deploy: '<path d="M12 16 8 12c2-6 6-9 13-9 0 7-3 11-9 13zM8 12H3l3-6h6m0 10v5l6-3v-6M6 16l-3 5 5-3"/><circle cx="16" cy="8" r="1"/>',
};
const icon = (name: keyof typeof icons) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;

export function syncConsoleOverviewDesign(root: HTMLElement) {
  if (!['/ai-agent-console', '/app'].includes(window.location.pathname)) return;
  if (root.querySelector('h1')?.textContent?.trim() !== 'Overview') return;
  const toolbar = root.querySelector<HTMLElement>('main .dashboard-page-toolbar');
  const frame = toolbar?.parentElement;
  if (!toolbar || !frame || frame.classList.contains('console-overview')) return;
  const children = Array.from(frame.children);
  const metrics = children.find(el => el.classList.contains('grid'));
  const usage = children.find(el => el.querySelector('h3')?.textContent === 'Conversation Usage');
  const heading = children.find(el => el.querySelector('h2')?.textContent === 'Your Agents');
  if (!metrics || !usage || !heading) return;
  frame.classList.add('console-overview');
  toolbar.classList.add('console-overview__old');
  metrics.classList.add('console-overview__old');
  usage.classList.add('console-overview__old');
  const openTab = (label: string) => {
    if (label === 'Company Profile') { openCompanyProfile(root); return; }
    Array.from(root.querySelectorAll<HTMLButtonElement>('button')).find(button => button.textContent?.trim() === label)?.click();
  };
  const summary = document.createElement('section');
  summary.className = 'console-overview__summary';
  summary.setAttribute('aria-label', 'Workspace summary — sample data');
  summary.innerHTML = `<button type="button" data-destination="Conversations"><span class="console-overview__metric-icon">${icon('chat')}</span><span>Total Conversations</span><strong>1,201</strong><small>Sample data · View conversations</small></button><button type="button" data-destination="Leads"><span class="console-overview__metric-icon">${icon('people')}</span><span>Total Leads</span><strong>201</strong><small>Sample data · View leads</small></button>`;
  summary.querySelectorAll<HTMLButtonElement>('button').forEach(button => button.addEventListener('click', () => openTab(button.dataset.destination!)));
  metrics.insertAdjacentElement('beforebegin', summary);

  const guide = document.createElement('section');
  guide.className = 'console-overview__guide';
  guide.setAttribute('aria-labelledby', 'console-build-heading');
  guide.innerHTML = '<h2 id="console-build-heading">Build your agent, step by step.</h2><p>Start where you are. Each step opens the right workspace.</p><nav aria-label="Build your agent"></nav>';
  const steps: [string, string, keyof typeof icons][] = [['Company Profile', 'Company Profile', 'company'], ['Agent setup', 'Agent Setup', 'setup'], ['Knowledge', 'Knowledge Base', 'knowledge'], ['Test', 'Test Agent', 'test'], ['Deploy', 'Deploy', 'deploy'], ['Monitor', 'Conversations', 'chat']];
  for (const [label, destination, glyph] of steps) {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-label', label);
    button.innerHTML = `<span>${icon(glyph)}</span>${label}`;
    button.addEventListener('click', () => openTab(destination));
    guide.querySelector('nav')!.appendChild(button);
  }
  heading.insertAdjacentElement('beforebegin', guide);
  heading.classList.add('console-overview__agents-heading');
  const description = heading.querySelector('p');
  if (description) description.textContent = 'Select an agent to review or update its setup.';
  const notice = document.createElement('p');
  notice.className = 'console-overview__notice';
  notice.innerHTML = '<span aria-hidden="true">ⓘ</span><span><strong>Additional agents are unavailable.</strong> Multi-agent workspaces for Enterprise plans are still in development.</span>';
  heading.insertAdjacentElement('afterend', notice);
  const cards = heading.nextElementSibling?.nextElementSibling;
  cards?.classList.add('console-overview__agents');
  cards?.querySelectorAll<HTMLElement>('.glass-card').forEach(card => {
    card.classList.add('console-overview__agent');
    card.children[1]?.classList.add('console-overview__old');
  });
}
