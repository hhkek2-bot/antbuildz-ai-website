/** Existing Emma portrait, already used by the public AI Sales Agent demos.
 * Local copy of the original photo-1494790108377-be9c29b29330 avatar.
 * Keep customer photos, business logos and user-uploaded portraits separate.
 */
export const EMMA_PORTRAIT_SRC = '/images/emma-sales-agent.jpg';
export const EMMA_PORTRAIT_ALT = 'Emma, AI Sales Agent';

const AGENT_IMAGES = [
  '.ws2-avatar-ai img',
  '.bright-avatar-ai img',
  '.ws2-agent-title img',
  '.bright-chat-title img',
  '.af-avatar-real',
  'img.live-chat-avatar',
].join(', ');

/** Adapt the copied interface without replacing its React-owned DOM nodes. */
export function standardiseAgentPortraits(root: HTMLElement) {
  root.querySelectorAll<HTMLImageElement>(AGENT_IMAGES).forEach(image => {
    const src = image.getAttribute('src') ?? '';
    const isDefaultPortrait = src === EMMA_PORTRAIT_SRC
      || src.includes('photo-1494790108377-be9c29b29330')
      || src === '/assets/office-lady-portrait-CGdQrlR_.png';
    if (!isDefaultPortrait) return;
    if (src !== EMMA_PORTRAIT_SRC) image.setAttribute('src', EMMA_PORTRAIT_SRC);
    if (image.getAttribute('alt') !== EMMA_PORTRAIT_ALT) image.setAttribute('alt', EMMA_PORTRAIT_ALT);
    if (!image.classList.contains('antbuildz-emma-portrait')) image.classList.add('antbuildz-emma-portrait');
  });

  // These specific initials belong to the illustrative Sales Agent channels.
  // Preserve their children and handlers; only their visual avatar changes.
  root.querySelectorAll<HTMLElement>('.dt-chat-widget-head .dt-chat-avatar, .dt-wa-head .dt-chat-avatar').forEach(avatar => {
    if (!['AI', 'AB'].includes(avatar.textContent?.trim() ?? '')) return;
    if (!avatar.classList.contains('antbuildz-emma-initials')) {
      avatar.classList.add('antbuildz-emma-initials');
      avatar.style.setProperty('--emma-portrait', `url("${EMMA_PORTRAIT_SRC}")`);
      avatar.setAttribute('role', 'img');
      avatar.setAttribute('aria-label', EMMA_PORTRAIT_ALT);
    }
  });
}
