'use client';

const STORE_BUILDER_ROUTES = new Set([
  '/main-dashboard/store-builder/rental',
  '/main-dashboard/store-builder/sales',
]);

const QUICK_ACCESS_PAGES = [
  ['rental', 'Rental Store'],
  ['sales', 'Sales Store'],
  ['blog', 'Blog'],
  ['faqs', 'FAQs'],
  ['policies', 'Policies'],
  ['store-profile', 'Store Profile'],
] as const;
const QUICK_ACCESS_PREFIX = '/main-dashboard/store-builder/';
const QUICK_ACCESS_LINK_CLASS = 'shrink-0 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50';

function syncQuickAccess(root: HTMLElement) {
  const route = window.location.pathname;
  if (!QUICK_ACCESS_PAGES.some(([slug]) => route === `${QUICK_ACCESS_PREFIX}${slug}`)) return;

  const sidebar = root.querySelector<HTMLElement>('aside[aria-label="Antbuildz Workspace navigation"]');
  const main = Array.from(sidebar?.parentElement?.children || []).find((child) => child.tagName === 'MAIN') as HTMLElement | undefined;
  if (!main) return;

  let nav = main.querySelector<HTMLElement>('nav[aria-label="Store Builder views"], nav[aria-label="Store Content views"]');
  if (!nav) {
    const row = document.createElement('div');
    row.className = 'shrink-0 border-b border-border/70 bg-card/80 px-4 py-2.5 backdrop-blur-md md:px-6';
    const group = document.createElement('div');
    group.className = 'flex min-w-0 items-center gap-3';
    const label = document.createElement('span');
    label.className = 'hidden shrink-0 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground lg:block';
    label.textContent = 'Store Builder';
    nav = document.createElement('nav');
    nav.className = 'flex min-w-0 flex-1 items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden';
    group.append(label, nav);
    row.append(group);
    main.prepend(row);
  } else {
    const label = nav.previousElementSibling;
    if (label && label.textContent !== 'Store Builder') label.textContent = 'Store Builder';
  }

  if (nav.getAttribute('aria-label') !== 'Store Builder views') nav.setAttribute('aria-label', 'Store Builder views');
  QUICK_ACCESS_PAGES.forEach(([slug, text], index) => {
    const href = `${QUICK_ACCESS_PREFIX}${slug}`;
    let link = Array.from(nav.querySelectorAll<HTMLAnchorElement>('a')).find((anchor) => anchor.getAttribute('href') === href);
    if (!link) {
      link = document.createElement('a');
      link.href = href;
      link.textContent = text;
      link.addEventListener('click', (event) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const sidebarLink = sidebar?.querySelector<HTMLAnchorElement>(`a[href="${href}"]`);
        if (!sidebarLink) return;
        event.preventDefault();
        sidebarLink.click();
      });
      const next = QUICK_ACCESS_PAGES.slice(index + 1)
        .map(([nextSlug]) => nav!.querySelector<HTMLAnchorElement>(`a[href="${QUICK_ACCESS_PREFIX}${nextSlug}"]`))
        .find(Boolean);
      nav.insertBefore(link, next || null);
    }
    const active = route === href;
    const className = `${QUICK_ACCESS_LINK_CLASS} ${active ? 'bg-primary/15 text-foreground ring-1 ring-primary/30' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`;
    if (link.className !== className) link.className = className;
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });

  const activeTab = nav.querySelector<HTMLElement>('[aria-current="page"]');
  if (activeTab && nav.scrollWidth > nav.clientWidth) {
    const tab = activeTab.getBoundingClientRect();
    const strip = nav.getBoundingClientRect();
    if (tab.right > strip.right) nav.scrollLeft += tab.right - strip.right + 8;
    else if (tab.left < strip.left) nav.scrollLeft -= strip.left - tab.left + 8;
  }
}

const brandLabels = ['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5'];

const categoryIcons: Record<string, string> = {
  'Heavy Equipment': '<path d="M3 18h18M5 18v-4h7l2 4M8 14V9h4l3-4 2 1-3 5v3M6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm9 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />',
  Pumps: '<circle cx="11" cy="13" r="4" /><path d="M7 13H4V8h7V5h5v3h3v5h-4M11 11l2 2-2 2" />',
  'Power Tools': '<path d="M5 10h9l3-3 2 2-3 3v3h-4v4H8v-4H5Z" /><path d="M14 10h3" />',
  'Spare Parts': '<path d="M12 8V4m0 16v-4m4.2-6.2 2.8-2.8M5 17l2.8-2.8m8.4 0L19 17M5 7l2.8 2.8M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0-5.5 1.5 2.3 2.8-.1.8 2.7 2.4 1.4-1.4 2.4 1.4 2.4-2.4 1.4-.8 2.7-2.8-.1L12 20l-1.5-2.3-2.8.1-.8-2.7-2.4-1.4 1.4-2.4-1.4-2.4 2.4-1.4.8-2.7 2.8.1L12 4Z" />',
  'Industrial Hardware': '<path d="M8 5h8l2 3-2 3H8L6 8l2-3ZM8 11h8v8H8zM10 14h4" />',
  'Material Handling': '<path d="M5 19V8h7v11M12 12h5v7M17 12v-5h2M8 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />',
};

function syncCategoryIcons(root: HTMLElement) {
  Object.entries(categoryIcons).forEach(([label, path]) => {
    const card = root.querySelector<HTMLAnchorElement>(`a[aria-label="Browse ${label}"]`);
    const iconHolder = card?.firstElementChild as HTMLElement | null;
    if (!card || !iconHolder) return;
    iconHolder.replaceChildren();
    iconHolder.setAttribute('aria-hidden', 'true');
    iconHolder.style.cssText = 'width:40px;height:40px;display:grid;place-items:center;background:transparent;border:0;border-radius:0;box-shadow:none;padding:0;color:#a65c00;';
    iconHolder.innerHTML = `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
  });
}

function syncBrandLabels(root: HTMLElement) {
  const logos = Array.from(root.querySelectorAll<HTMLImageElement>('img[alt$=" logo"]'))
    .filter((image) => /^(Caterpillar|JCB|Bosch|Siemens|Schneider Electric) logo$/.test(image.alt));
  logos.forEach((image, index) => {
    const label = document.createElement('span');
    label.className = 'antbuildz-store-builder-brand-label';
    label.textContent = brandLabels[index] || `Brand ${index + 1}`;
    label.setAttribute('aria-label', label.textContent);
    Object.assign(label.style, {
      color: '#64748b',
      fontFamily: 'Inter, sans-serif',
      fontSize: '15px',
      fontWeight: '600',
      letterSpacing: '0.01em',
      lineHeight: '1.2',
    });
    image.replaceWith(label);
  });
}

export function syncStoreBuilderPresentation(root: HTMLElement) {
  syncQuickAccess(root);
  if (!STORE_BUILDER_ROUTES.has(window.location.pathname)) return;
  syncBrandLabels(root);
  syncCategoryIcons(root);
}
