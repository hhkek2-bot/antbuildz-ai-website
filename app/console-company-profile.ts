const storageKey = 'antbuildz-console-company-profile-v1';
type Profile = { name: string; industry: string; description: string; address: string; website: string };
const empty: Profile = { name: '', industry: '', description: '', address: '', website: '' };
let draft: Profile | null = null;
let active = false;
const building = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M4 21V3h12v18M16 9h4v12M2 21h20M8 7h4M8 11h4M8 15h4M9 21v-3h2v3"/></svg>';

function readProfile(): Profile {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey) || '{}');
    return Object.fromEntries(Object.keys(empty).map(key => [key, typeof value[key] === 'string' ? value[key] : ''])) as Profile;
  } catch { return { ...empty }; }
}
function complete(profile: Profile) { return Boolean(profile.name.trim() && profile.description.trim()); }
function profileOpen() { return active; }
function closeProfile(root: HTMLElement) {
  active = false;
  root.querySelector('main')?.classList.remove('company-profile-open');
  root.querySelector('.exact-ai-console')?.classList.remove('company-profile-active');
  const heading = root.querySelector<HTMLElement>('h1[data-company-original-title]');
  if (heading) {
    heading.textContent = heading.dataset.companyOriginalTitle || 'Overview';
    delete heading.dataset.companyOriginalTitle;
  }
  root.querySelector('.company-profile-page')?.remove();
}
export function openCompanyProfile(root: HTMLElement) {
  active = true;
  syncConsoleCompanyProfile(root);
  root.querySelector<HTMLElement>('.company-profile-page h2')?.focus();
  root.querySelector('main')?.scrollTo(0, 0);
}

export function syncConsoleCompanyProfile(root: HTMLElement) {
  if (!['/ai-agent-console', '/app'].includes(location.pathname)) return;
  const main = root.querySelector<HTMLElement>('main');
  if (!main) return;
  if (!root.hasAttribute('data-company-navigation')) {
    root.setAttribute('data-company-navigation', '');
    root.addEventListener('click', event => {
      const button = (event.target as HTMLElement).closest('button');
      if (button && !button.closest('main') && !button.classList.contains('company-profile-nav') && button.matches('[class*="bright-nav-item"]') && profileOpen()) closeProfile(root);
    }, true);
  }
  // Use each rendered navigation copy so the mobile drawer has the same entry.
  root.querySelectorAll<HTMLButtonElement>('button').forEach(button => {
    if (button.closest('main') || button.textContent?.trim() !== 'Agent Setup') return;
    const section = button.parentElement;
    if (!section) return;
    if (section.previousElementSibling?.classList.contains('company-profile-nav')) return;
    const existing = section.querySelector('.company-profile-nav');
    if (existing) {
      section.insertAdjacentElement('beforebegin', existing);
      return;
    }
    const entry = document.createElement('button');
    entry.type = 'button';
    entry.className = button.className.replace('bright-nav-item-active', 'bright-nav-item') + ' company-profile-nav';
    entry.innerHTML = `${building}<span>Company Profile</span>`;
    entry.addEventListener('click', () => {
      // Let the existing mobile navigation close itself without changing fields.
      if (window.matchMedia('(max-width: 767px)').matches) {
        button.click();
        requestAnimationFrame(() => openCompanyProfile(root));
      } else openCompanyProfile(root);
    });
    section.insertAdjacentElement('beforebegin', entry);
  });
  const saved = readProfile();
  const overview = main.querySelector('.console-overview');
  if (overview && !complete(saved) && !overview.querySelector('.company-profile-prompt')) {
    const prompt = document.createElement('div');
    prompt.className = 'company-profile-prompt';
    prompt.innerHTML = `${building}<div><strong>Start with your company profile</strong><p>Give your agent the business context it needs before personalising its role.</p></div><button type="button" data-console-button="secondary">Complete company profile</button>`;
    prompt.querySelector('button')!.addEventListener('click', () => openCompanyProfile(root));
    overview.querySelector('.console-overview__guide')?.insertAdjacentElement('beforebegin', prompt);
  }
  if (complete(saved)) overview?.querySelector('.company-profile-prompt')?.remove();

  // Replace duplicate per-agent company fields with a link to the shared form.
  const oldCompanyHeading = Array.from(main.querySelectorAll('h2')).find(heading => heading.textContent === 'Company Information');
  const oldCompanySection = oldCompanyHeading?.parentElement;
  if (oldCompanySection?.querySelector('#company-name') && !oldCompanySection.querySelector('.company-profile-shared-link')) {
    for (const child of Array.from(oldCompanySection.children)) if (child !== oldCompanyHeading) child.classList.add('company-profile-legacy');
    const link = document.createElement('button');
    link.type = 'button';
    link.className = 'company-profile-shared-link';
    link.textContent = 'Manage shared company profile →';
    link.addEventListener('click', () => openCompanyProfile(root));
    oldCompanySection.appendChild(link);
  }
  if (!profileOpen()) return;
  main.classList.add('company-profile-open');
  root.querySelector('.exact-ai-console')?.classList.add('company-profile-active');
  const heading = root.querySelector<HTMLElement>('h1');
  if (heading && heading.textContent !== 'Company Profile') {
    heading.dataset.companyOriginalTitle = heading.textContent || 'Overview';
    heading.textContent = 'Company Profile';
  }
  if (main.querySelector('.company-profile-page')) return;
  draft ??= saved;
  const page = document.createElement('div');
  page.className = 'company-profile-page';
  page.innerHTML = `<header class="company-profile-intro"><span class="company-profile-step">STEP 1 · BUSINESS FOUNDATION</span><h2 tabindex="-1">Company Profile</h2><p>Help your AI Agent understand your business.</p></header>
    <div class="company-profile-layout"><form class="company-profile-form">
      <div class="company-profile-form-intro"><h3>Your company information</h3><p>Add your company information first. This profile is shared across your agents; each agent’s role and behaviour are configured in Agent Setup.</p><span>Fields marked * are required.</span></div>
      <div class="company-profile-fields">
        <label>Company name <span aria-hidden="true">*</span><input name="name" autocomplete="organization" required placeholder="Enter your company name" maxlength="200"></label>
        <label>Industry <span class="company-profile-optional">Optional</span><textarea name="industry" rows="2" placeholder="e.g. Construction equipment, industrial machinery, hardware and tools, building materials, spare parts, or buggies and commercial vehicles" maxlength="300"></textarea></label>
        <label class="company-profile-full">Description of business <span aria-hidden="true">*</span><textarea name="description" required rows="7" maxlength="10000" placeholder="Describe your business in detail, including the products you sell or rent, brands and product categories you carry, services you provide, customers you serve, locations covered, and what makes your company different." aria-describedby="company-description-help"></textarea><small id="company-description-help">The more relevant detail you provide, the better your AI agents can understand your business and respond to customers. Include information you want your agents to use when answering enquiries.</small></label>
        <label class="company-profile-full">Company address <span class="company-profile-optional">Optional</span><input name="address" autocomplete="street-address" placeholder="Enter your full business address, including city, country and postal code" maxlength="500"></label>
        <label class="company-profile-full">Company website <span class="company-profile-optional">Optional</span><input name="website" type="url" autocomplete="url" placeholder="https://www.yourcompany.com" maxlength="2000"></label>
      </div>
      <div class="company-profile-actions"><span role="status" aria-live="polite" class="company-profile-save-status">Not saved yet</span><button type="submit" data-console-button="primary">Save company profile</button></div>
    </form></div>
    <p class="company-profile-local">Local preview: saved in this browser only. This information is not yet connected to your live agents.</p>`;
  const form = page.querySelector('form')!;
  const status = page.querySelector<HTMLElement>('[role="status"]')!;
  for (const key of Object.keys(empty) as (keyof Profile)[]) {
    const field = form.elements.namedItem(key) as HTMLInputElement | HTMLTextAreaElement;
    field.value = draft[key];
    field.addEventListener('input', () => {
      field.setCustomValidity('');
      draft![key] = field.value;
      status.textContent = 'Unsaved changes';
    });
  }
  status.textContent = complete(saved) ? 'Saved in this browser' : 'Not saved yet';
  form.addEventListener('submit', event => {
    event.preventDefault();
    for (const key of ['name', 'description'] as const) {
      const field = form.elements.namedItem(key) as HTMLInputElement;
      field.setCustomValidity(field.value.trim() ? '' : 'Please complete this field.');
    }
    if (!form.reportValidity()) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(draft));
      status.textContent = 'Company profile saved in this browser';
      if (complete(draft!)) root.querySelector('.company-profile-prompt')?.remove();
    } catch { status.textContent = 'Could not save in this browser. Your entries are still here; please try again.'; }
  });
  main.appendChild(page);
}
