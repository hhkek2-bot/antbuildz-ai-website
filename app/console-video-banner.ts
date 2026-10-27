let dismissed = false;

/** Add the introduction without changing the copied Console or its guided tour. */
export function syncConsoleVideoBanner(root: HTMLElement) {
  if (!['/ai-agent-console', '/app'].includes(window.location.pathname)) return;
  const main = root.querySelector('main');
  const toolbar = main?.querySelector('.dashboard-page-toolbar');
  const isOverview = root.querySelector('h1')?.textContent?.trim() === 'Overview';
  if (!isOverview || dismissed || !toolbar || main?.querySelector('.console-video-banner')) return;

  const banner = document.createElement('section');
  banner.className = 'console-video-banner';
  banner.setAttribute('aria-label', 'Build your AI Agent video');
  const url = 'https://www.youtube.com/watch?v=0NHrVM3s8Yw';
  const play = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>';
  banner.innerHTML = `
    <a class="console-video-banner__thumbnail" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="Watch Build your AI Agent on YouTube (opens in a new tab)">
      <img src="https://i.ytimg.com/vi/0NHrVM3s8Yw/maxresdefault.jpg?v=20261027" alt="" width="480" height="360" />
      <span>${play}</span>
    </a>
    <div class="console-video-banner__copy"><h2>Build Your AI Agent</h2><p>Get started in five simple steps — no coding required.</p></div>
    <a class="console-video-banner__watch" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="Watch video on YouTube (opens in a new tab)">${play}Watch video</a>
    <button class="console-video-banner__dismiss" type="button" aria-label="Dismiss introduction video"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></button>`;
  const thumbnail = banner.querySelector('img');
  if (thumbnail) {
    // Keep the play control usable if YouTube cannot supply the actual cover.
    // Never substitute an unrelated Console illustration for this video.
    thumbnail.addEventListener('error', () => { thumbnail.hidden = true; });
    thumbnail.addEventListener('load', () => { thumbnail.hidden = thumbnail.naturalWidth <= 120; });
  }
  banner.querySelector('button')?.addEventListener('click', () => {
    dismissed = true;
    const nextAction = main?.querySelector<HTMLButtonElement>('.console-overview__summary button') || toolbar.querySelector<HTMLButtonElement>('button');
    nextAction?.focus();
    banner.remove();
  });
  toolbar.insertAdjacentElement('afterend', banner);
}
