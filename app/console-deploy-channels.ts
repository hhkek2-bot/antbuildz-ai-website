/** Present the copied Console's existing deployment actions as two channel choices. */
export function syncConsoleDeployChannels(root: HTMLElement) {
  if (!['/ai-agent-console', '/app'].includes(window.location.pathname)) return;
  const center = root.querySelector<HTMLElement>('section[aria-labelledby="share-chat-heading"]');
  const bubble = root.querySelector<HTMLElement>('section[aria-labelledby="embed-heading"]');
  if (!center || !bubble || center.querySelector('.antbuildz-deploy__visual')) return;
  const grid = center.parentElement?.parentElement;
  const container = grid?.parentElement;
  if (!grid || !container) return;
  container.classList.add('antbuildz-deploy');
  grid.classList.add('antbuildz-deploy__grid');
  center.parentElement?.classList.add('antbuildz-deploy__card', 'antbuildz-deploy__card--center');
  bubble.parentElement?.classList.add('antbuildz-deploy__card', 'antbuildz-deploy__card--bubble');
  container.lastElementChild?.classList.add('antbuildz-deploy__guide');

  if (!container.querySelector('.antbuildz-deploy__intro')) {
    const intro = document.createElement('p');
    intro.className = 'antbuildz-deploy__intro';
    intro.textContent = 'Choose how customers open your AI Agent. Manage a layout to see its link or website installation options.';
    grid.insertAdjacentElement('beforebegin', intro);
  }

  const setupCard = (section: HTMLElement, kind: 'bubble' | 'center', title: string, description: string) => {
    const header = section.firstElementChild as HTMLElement;
    const heading = header.querySelector('h2');
    if (heading) heading.textContent = title;
    const supporting = header.querySelector('p');
    if (supporting) supporting.textContent = description;
    header.classList.add('antbuildz-deploy__card-heading');
    for (const child of Array.from(section.children).slice(1)) child.classList.add('antbuildz-deploy__details');

    const visual = document.createElement('div');
    visual.className = `antbuildz-deploy__visual antbuildz-deploy__visual--${kind}`;
    visual.setAttribute('aria-label', `${title} layout preview`);
    visual.innerHTML = kind === 'bubble'
      ? '<div class="antbuildz-deploy__site"><div class="antbuildz-deploy__site-nav">AI Agent</div><div class="antbuildz-deploy__site-body"><span class="antbuildz-deploy__site-line"></span><span class="antbuildz-deploy__site-line short"></span><span class="antbuildz-deploy__site-line"></span></div><div class="antbuildz-deploy__site-input">Ask a question… <span>●</span></div><span class="antbuildz-deploy__launcher" aria-hidden="true">●</span></div>'
      : '<div class="antbuildz-deploy__stage-wrap"><div class="antbuildz-deploy__stage"><div class="antbuildz-deploy__stage-top">AI Agent</div><span class="antbuildz-deploy__stage-line"></span><span class="antbuildz-deploy__stage-line short"></span></div><div class="antbuildz-deploy__stage-input">Ask a question… <span>●</span></div></div>';
    header.insertAdjacentElement('afterend', visual);

    if (kind === 'bubble') {
      const localWarning = document.createElement('p');
      localWarning.className = 'antbuildz-deploy__details antbuildz-deploy__local-note';
      localWarning.textContent = 'This is a local preview. Embed code can be copied after the Console has a public address.';
      section.appendChild(localWarning);
    }

    const manage = document.createElement('button');
    manage.type = 'button';
    manage.className = 'antbuildz-deploy__manage';
    manage.textContent = 'Manage';
    manage.setAttribute('aria-label', `Manage ${title}`);
    manage.setAttribute('aria-expanded', 'false');
    manage.addEventListener('click', () => {
      const open = section.dataset.open !== 'true';
      section.dataset.open = String(open);
      manage.setAttribute('aria-expanded', String(open));
      manage.textContent = open ? 'Close settings' : 'Manage';
    });
    header.appendChild(manage);
  };

  setupCard(bubble, 'bubble', 'Chat bubble', 'Add a floating chat to your website so visitors can ask questions from any page.');
  setupCard(center, 'center', 'Center Stage', 'Give customers a focused chat page you can open locally or share when hosted.');
}
