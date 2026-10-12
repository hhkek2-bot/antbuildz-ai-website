'use client';

const STORE_BUILDER_ROUTES = new Set([
  '/main-dashboard/store-builder/rental',
  '/main-dashboard/store-builder/sales',
]);

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
  if (!STORE_BUILDER_ROUTES.has(window.location.pathname)) return;
  syncBrandLabels(root);
  syncCategoryIcons(root);
}
