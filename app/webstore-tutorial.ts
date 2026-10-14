'use client';

const PREFIX = '/main-dashboard/store-builder/';
const STORAGE_KEY = 'antbuildz-webstore-tutorial-v2';
const HOST_ID = 'antbuildz-webstore-tutorial';
const DISPOSE_EVENT = 'antbuildz:webstore-tutorial-dispose';

type Step = { title: string; body: string; find: (root: HTMLElement) => HTMLElement | null; drawer?: 'library' | 'example'; navigation?: 'blog' | 'faqs' | 'policies'; selectTemplate?: boolean; insert?: boolean };
type Phase = 'closed' | 'welcome' | 'tour';

let host: HTMLElement | null = null;
let pageRoot: HTMLElement | null = null;
let pageRoute = '';
let phase: Phase = 'closed';
let index = 0;
let layoutFrame = 0;
let revealedActions: HTMLElement | null = null;
let tutorialPanel: HTMLElement | null = null;
let tutorialSpotlight: HTMLElement | null = null;
let drawerHost: HTMLElement | null = null;
let dockedDrawer: HTMLElement | null = null;
let drawerObserver: MutationObserver | null = null;
let tourSteps: Step[] = [];
let exampleEditButton: HTMLElement | null = null;
let advancing = false;
let openedEditor: HTMLElement | null = null;
let ownedDrawer = false;
let ownedNavigation = false;
let libraryExistingEditors = new Set<Element>();
let spotlightTarget: HTMLElement | null = null;

const activeDrawer = () => Array.from(document.querySelectorAll<HTMLElement>('[role="dialog"][data-state="open"]'))
  .find((dialog) => dialog.querySelector('button[aria-label="Close section editor"], button[aria-label="Close add page content panel"]')) || null;
const drawerButton = (label: string) => { const drawer = activeDrawer(); return drawer ? byText(drawer, 'button', label) : null; };
const editorField = () => activeDrawer()?.querySelector<HTMLElement>('input:not([type="file"]):not([type="color"]), textarea') || null;
const currentSteps = () => tourSteps.length ? tourSteps : stepsFor(pageRoute);

const normalise = (value: string | null | undefined) => (value || '').replace(/\s+/g, ' ').trim();
const visible = (element: HTMLElement) => !element.closest('[hidden], [inert]') && element.getBoundingClientRect().width > 0;

function byText(root: HTMLElement, selector: string, label: string) {
  return Array.from(root.querySelectorAll<HTMLElement>(selector))
    .find((element) => visible(element) && normalise(element.innerText) === label) || null;
}

function sectionLink(root: HTMLElement, name: string) {
  return Array.from(root.querySelectorAll<HTMLElement>(`a[href*="/store-builder/${name}"]`)).find(visible) || null;
}

function sectionControl(root: HTMLElement, action: string) {
  return root.querySelector<HTMLElement>(`button[aria-label^="${action} "]`);
}

function syncNavigation(step?: Step) {
  if (!pageRoot) return;
  if (step?.navigation) {
    if (!sectionLink(pageRoot, step.navigation)) pageRoot.querySelector<HTMLButtonElement>('button[aria-label="Expand Store Builder"]')?.click();
    const sidebar = sectionLink(pageRoot, step.navigation)?.closest('aside');
    if (window.matchMedia('(max-width: 767px)').matches && sidebar?.classList.contains('-translate-x-full')) {
      pageRoot.querySelector<HTMLButtonElement>('button[aria-label="Open dashboard navigation"]')?.click();
      ownedNavigation = true;
    }
  } else if (ownedNavigation) {
    pageRoot.querySelector<HTMLButtonElement>('button[aria-label="Close workspace navigation"]')?.click();
    ownedNavigation = false;
  }
}

function stepsFor(route: string): Step[] {
  const section = route.split('/').pop() || 'rental';
  const workspace: Step = {
    title: 'Choose the store you are building',
    body: 'Rental Store and Sales Store have their own storefront layouts. Use the Store Builder tabs or the navigation on the left to choose the page you want to work on.',
    find: (root) => root.querySelector<HTMLElement>('[aria-label="Store Builder views"]') || sectionLink(root, 'rental'),
  };

  if (section === 'rental' || section === 'sales') {
    return [
      { ...workspace, body: 'Use the top tabs or left menu to open Rental Store, Sales Store, Blog, FAQs, Policies or Store Profile. The store canvas shows your storefront; each section has controls for updating its content and position.' },
      { title: 'Add a section', body: 'Click a plus button where you want new content. The library slides in from the right. We have selected Value propositions: a detailed example with a heading, benefit cards, formatting, a picture and a link.', drawer: 'library', selectTemplate: true, find: () => activeDrawer()?.querySelector<HTMLElement>('button[aria-pressed="true"]') || null },
      { title: 'Try the layout in your draft', body: 'Add section inserts this example into your draft. To learn without adding anything, choose Skip adding and we will open an existing section instead.', drawer: 'library', insert: true, find: () => drawerButton('Add to page') },
      { title: 'Edit content and formatting', body: 'The pencil opens this editor. Edit the heading, introduction and individual benefit cards. Each text field has controls for font, size, bold or italic. The live preview shows your changes. Other sections use the same editing pattern.', drawer: 'example', find: () => activeDrawer()?.querySelector<HTMLElement>('[role="toolbar"]') || editorField() },
      { title: 'Set the picture and link', body: 'Upload a picture or paste its URL, following the recommended dimensions. Link URL sets the destination for the section’s link. Some layouts also let you switch the picture position.', drawer: 'example', find: () => activeDrawer()?.querySelector<HTMLElement>('input[type="file"]')?.closest('label') || editorField() },
      { title: 'Apply your edits', body: 'Apply Changes updates this section in your draft; Cancel discards the drawer’s edits. Apply or cancel before continuing. Use the same pencil and editor for any other section you want to update.', drawer: 'example', find: () => drawerButton('Apply Changes') },
      { title: 'Arrange or remove sections', body: 'Drag the reorder handle or use the arrows to move a section. The bin asks for confirmation before removing it. Keep your most useful content near the top.', find: (root) => sectionControl(root, 'Reorder')?.parentElement || null },
      { title: 'Blog: write an article', body: 'Open Blog in the Store Builder menu. New Post opens the article editor for a title, cover image and content. Preview it, then save a draft or publish. Blog posts appear in both stores.', navigation: 'blog', find: (root) => sectionLink(root, 'blog') },
      { title: 'FAQs: add an answer', body: 'Open FAQs in the Store Builder menu. Choose Rental or Sales, then use Add New for a question and answer. Review the answer before making it active. Each store has its own FAQs.', navigation: 'faqs', find: (root) => sectionLink(root, 'faqs') },
      { title: 'Policies: terms and agreements', body: 'Open Policies in the Store Builder menu. New Policy lets you choose Terms & Conditions or Rental Agreement, write the content and preview it. Save a draft for review before publishing.', navigation: 'policies', find: (root) => sectionLink(root, 'policies') },
      { title: 'Preview and save your store', body: 'Use Preview to check the desktop and mobile layouts. When ready, choose Save Store Changes. The status beneath the title shows whether your draft is saved. In this preview, it is saved in this browser.', find: (root) => byText(root, 'button', 'Preview')?.parentElement || null },
    ];
  }

  if (section === 'blog') return [
    { title: 'Manage your blog', body: 'Blog posts appear in both Rental and Sales stores. Use the status tabs here to review published articles and drafts.', find: (root) => byText(root, 'h1', 'Blog Posts') },
    { title: 'Find an article', body: 'Search by title to find an existing article before creating a new one.', find: (root) => root.querySelector<HTMLElement>('[aria-label="Search blog posts"]') },
    { title: 'Create or edit a post', body: 'New Post opens the editor. Add the title, cover image, and content, then use Preview to check how the article reads.', find: (root) => byText(root, 'button', 'New Post') },
    { title: 'Keep drafts and published posts clear', body: 'Use Save as Draft while an article is being prepared. Publish when the content is ready; the status tabs help you find it again.', find: (root) => root.querySelector<HTMLElement>('main button[aria-pressed="true"]') },
  ];

  if (section === 'faqs') return [
    { title: 'Choose which store your answers belong to', body: 'Select Rental or Sales before adding answers. FAQs are managed separately for each store, so customers see the information that applies to them.', find: (root) => root.querySelector<HTMLElement>('main button[aria-pressed="true"]') || byText(root, 'h1', 'Frequently asked questions') },
    { title: 'Find and filter answers', body: 'Use search and the status filters to review your existing FAQs before adding another answer.', find: (root) => root.querySelector<HTMLElement>('[aria-label="Filter FAQs"]') || byText(root, 'button', 'Filter') },
    { title: 'Add a question and answer', body: 'Add New opens the FAQ editor. Enter the question and approved answer, then check its status and priority before saving.', find: (root) => byText(root, 'button', 'Add New') },
    { title: 'Review generated drafts', body: 'Demo Drafts can create starter questions from pasted content. Review and edit every suggested answer before using it in your store.', find: (root) => byText(root, 'button', 'Demo Drafts') },
  ];

  if (section === 'policies') return [
    { title: 'Manage terms and agreements', body: 'Store Policies contains Terms & Conditions, Rental Agreements and other store notices. Published policies apply to both stores; drafts stay available for review.', find: (root) => byText(root, 'h1', 'Store Policies') },
    { title: 'Find an existing policy', body: 'Search your policies and use the status tabs to review drafts and published content.', find: (root) => root.querySelector<HTMLElement>('[aria-label="Search store policies"]') },
    { title: 'Create or edit a policy', body: 'New Policy opens the editor. Choose the policy type, add the content, and use Preview to review it.', find: (root) => byText(root, 'button', 'New Policy') },
    { title: 'Review before publishing', body: 'Save as Draft keeps a policy while your team reviews it. Publish after confirming that the wording is correct for your business.', find: (root) => root.querySelector<HTMLElement>('main button[aria-pressed="true"]') },
  ];

  return [workspace,
    { title: 'Add your store logo', body: 'Use the edit button on the logo preview to choose an image that helps customers recognise your business.', find: (root) => root.querySelector<HTMLElement>('[data-antbuildz-store-profile] button[aria-label="Upload a new logo"]') },
    { title: 'Set your store address and name', body: 'Choose the store subdomain and storefront name. The copy button beside the address helps you share the store URL.', find: (root) => byText(root, '[data-antbuildz-store-profile] label', 'Store subdomain') },
    { title: 'Choose your primary colour', body: 'Set the text and background colours used for buttons, headers, and primary highlights.', find: (root) => root.querySelector<HTMLElement>('[data-antbuildz-store-profile] input[aria-label="Primary background colour"]')?.closest('label') || null },
    { title: 'Choose the first page customers see', body: 'Default home page selects Rental or Sales as the starting page for your storefront.', find: (root) => root.querySelector<HTMLElement>('[data-antbuildz-store-profile] summary') },
    { title: 'Choose the content you display', body: 'Use the announcement and content options to show the information you want customers to see, including Blog, FAQs, and Agreement.', find: (root) => byText(root, '[data-antbuildz-store-profile] label', 'Show announcement') },
    { title: 'Make it easy to contact your team', body: 'Open Equipment page contact channels to enable the contact methods your team uses and add the matching details.', find: (root) => Array.from(root.querySelectorAll<HTMLElement>('[data-antbuildz-store-profile] summary')).find((element) => element.textContent?.includes('Equipment page contact channels')) || null },
    { title: 'Save your store profile', body: 'Save changes keeps the updated settings. Cancel restores the last saved values. In this preview, your settings are saved in this browser.', find: (root) => byText(root, '[data-antbuildz-store-profile] button', 'Save changes') },
  ];
}

function dockPanel() {
  if (!host || !tutorialPanel) return;
  const drawer = phase === 'tour' ? activeDrawer() : null;
  if (drawer) {
    if (dockedDrawer !== drawer) {
      dockedDrawer?.removeAttribute('data-webstore-tutorial-drawer');
      drawerHost?.remove();
      drawerHost = document.createElement('div');
      drawerHost.id = 'antbuildz-webstore-tutorial-drawer';
      drawer.appendChild(drawerHost);
      drawerHost.appendChild(tutorialPanel);
      if (tutorialSpotlight) drawerHost.appendChild(tutorialSpotlight);
      dockedDrawer = drawer;
      drawer.dataset.webstoreTutorialDrawer = 'true';
    }
    drawerHost?.style.setProperty('--tutorial-drawer-width', `${drawer.getBoundingClientRect().width}px`);
    tutorialPanel.setAttribute('role', 'region');
    tutorialPanel.removeAttribute('aria-modal');
  } else {
    const layer = host.querySelector('.ab-webstore-tour-layer');
    if (layer && tutorialPanel.parentElement !== layer) layer.appendChild(tutorialPanel);
    if (layer && tutorialSpotlight && tutorialSpotlight.parentElement !== layer) layer.appendChild(tutorialSpotlight);
    dockedDrawer?.removeAttribute('data-webstore-tutorial-drawer');
    dockedDrawer = null;
    drawerHost?.remove();
    drawerHost = null;
    tutorialPanel.setAttribute('role', 'dialog');
    tutorialPanel.setAttribute('aria-modal', 'true');
  }
}

async function waitForView(check: () => boolean) {
  for (let frame = 0; frame < 120; frame += 1) {
    if (phase !== 'tour') throw new Error('Tutorial closed.');
    if (check()) return;
    await new Promise<void>((resolve) => window.requestAnimationFrame(() => resolve()));
  }
  throw new Error('The section drawer did not open. Close any other editor and replay the tutorial.');
}

function setBusy(busy: boolean) {
  tutorialPanel?.setAttribute('aria-busy', String(busy));
  tutorialPanel?.querySelectorAll<HTMLButtonElement>('[data-tour-action="next"], [data-tour-action="back"], [data-tour-action="skip-add"]')
    .forEach((button) => { button.disabled = busy || (button.dataset.tourAction === 'back' && index === 0); });
  if (!busy && phase === 'tour') tutorialPanel?.querySelector<HTMLButtonElement>('[data-tour-action="next"]')?.focus({ preventScroll: true });
}

function showNotice(message: string) {
  const body = tutorialPanel?.querySelector<HTMLElement>('.ab-webstore-tour-body');
  if (body) body.textContent = message;
}

async function showStep(nextIndex: number) {
  if (!pageRoot) return;
  const step = currentSteps()[nextIndex];
  const desiredEditor = step.drawer === 'example'
    ? (exampleEditButton?.isConnected ? exampleEditButton
      : pageRoot.querySelector<HTMLElement>('button[aria-label="Edit Why customers choose us"]') || sectionControl(pageRoot, 'Edit'))
    : null;
  let drawer = activeDrawer();
  const sameDrawer = drawer && (step.drawer === 'library'
    ? Boolean(drawer.querySelector('button[aria-label="Close add page content panel"]'))
    : desiredEditor && openedEditor === desiredEditor && Boolean(drawer.querySelector('button[aria-label="Close section editor"]')));
  if (drawer && !sameDrawer) {
    const apply = drawerButton('Apply Changes') as HTMLButtonElement | null;
    if (apply && !apply.disabled) {
      showNotice('Apply Changes or Cancel in the section editor before continuing. Your current edits will stay in this drawer.');
      return;
    }
    drawer.querySelector<HTMLButtonElement>('button[aria-label="Close section editor"], button[aria-label="Close add page content panel"]')?.click();
    await waitForView(() => !activeDrawer());
    drawer = null;
  }
  if (step.drawer && !drawer) {
    if (step.drawer === 'library') libraryExistingEditors = new Set(Array.from(pageRoot.querySelectorAll('button[aria-label^="Edit "]')));
    const button = step.drawer === 'library'
      ? pageRoot.querySelector<HTMLElement>('button[aria-label^="Add section before "]') || pageRoot.querySelector<HTMLElement>('button[aria-label="Add section at end"]')
      : desiredEditor;
    if (!button?.isConnected) throw new Error('This section is no longer on the page. Replay the tutorial to refresh its sections.');
    button.click();
    ownedDrawer = true;
    openedEditor = desiredEditor;
    await waitForView(() => Boolean(activeDrawer()));
    const opened = activeDrawer();
    if (opened) {
      // Let the actual drawer slide finish before positioning its guide.
      void opened.getBoundingClientRect();
      await Promise.all(opened.getAnimations().map((animation) => animation.finished.catch(() => undefined)));
    }
    if (phase !== 'tour') return;
  }
  if (step.selectTemplate) {
    Array.from(activeDrawer()?.querySelectorAll<HTMLButtonElement>('button') || [])
      .find((button) => normalise(button.innerText).startsWith('Value propositions '))?.click();
  }
  syncNavigation(step);
  index = nextIndex;
  render();
}

async function onTourClick(event: Event) {
  const target = event.target as Element;
  const action = target.closest<HTMLElement>('[data-tour-action]')?.dataset.tourAction;
  if (advancing) { if (action === 'dismiss') dismiss(); return; }
  advancing = true;
  setBusy(true);
  try {
    if (target.closest('.ab-webstore-tour-replay') || action === 'start') {
      pageRoute = window.location.pathname;
      tourSteps = stepsFor(pageRoute);
      exampleEditButton = null;
      phase = 'tour';
      await showStep(0);
    } else if (action === 'dismiss') dismiss();
    else if (action === 'back') await showStep(Math.max(0, index - 1));
    else if (action === 'skip-add') await showStep(index + 1);
    else if (action === 'next') {
      if (currentSteps()[index].insert && pageRoot) {
        const existing = new Set(Array.from(pageRoot.querySelectorAll('button[aria-label^="Edit "]')));
        const add = drawerButton('Add to page');
        if (!add) throw new Error('Open the section library and choose a layout before adding it.');
        add.click();
        await waitForView(() => Boolean(Array.from(pageRoot?.querySelectorAll<HTMLElement>('button[aria-label^="Edit "]') || []).find((button) => !existing.has(button))));
        exampleEditButton = Array.from(pageRoot.querySelectorAll<HTMLElement>('button[aria-label^="Edit "]')).find((button) => !existing.has(button)) || null;
      }
      if (index >= currentSteps().length - 1) dismiss('completed');
      else await showStep(index + 1);
    }
  } catch (error) {
    showNotice(error instanceof Error ? error.message : 'Replay the tutorial to try this step again.');
  } finally { advancing = false; setBusy(false); }
}

function clearReveal() {
  revealedActions?.removeAttribute('data-webstore-tutorial-reveal');
  revealedActions = null;
}

function updateSpotlight(scrollToTarget = false) {
  const spotlight = tutorialSpotlight;
  if (!spotlight || !pageRoot) return;
  clearReveal();
  const target = currentSteps()[index]?.find(pageRoot) || null;
  const targetChanged = target !== spotlightTarget;
  spotlightTarget = target;
  const mobile = window.matchMedia('(max-width: 767px)').matches;
  if ((scrollToTarget || targetChanged) && target && (drawerHost || !mobile)) target.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'instant' });
  if (drawerHost && target) drawerHost.dataset.targetPosition = target.getBoundingClientRect().bottom > window.innerHeight * .65 ? 'low' : 'high';
  const toolbar = target?.closest<HTMLElement>('[aria-label$=" section actions"]') || null;
  if (toolbar) { toolbar.dataset.webstoreTutorialReveal = 'true'; revealedActions = toolbar; }
  if (phase !== 'tour' || mobile || !target) {
    spotlight.hidden = true;
    return;
  }
  let rect = target.getBoundingClientRect();
  if (target.matches('[aria-label="Store Builder views"]')) {
    const tabs = Array.from(target.querySelectorAll('a')).map((tab) => tab.getBoundingClientRect());
    if (tabs.length) {
      const left = Math.min(...tabs.map((tab) => tab.left));
      const top = Math.min(...tabs.map((tab) => tab.top));
      rect = new DOMRect(left, top, Math.max(...tabs.map((tab) => tab.right)) - left, Math.max(...tabs.map((tab) => tab.bottom)) - top);
    }
  }
  spotlight.hidden = rect.width < 2 || rect.height < 2;
  spotlight.style.left = `${rect.left - 6}px`;
  spotlight.style.top = `${rect.top - 6}px`;
  spotlight.style.width = `${rect.width + 12}px`;
  spotlight.style.height = `${rect.height + 12}px`;
}

function onLayoutChange() {
  if (phase !== 'tour' || layoutFrame) return;
  layoutFrame = window.requestAnimationFrame(() => {
    layoutFrame = 0;
    if (!advancing && currentSteps()[index]?.insert && !activeDrawer() && pageRoot) {
      const added = Array.from(pageRoot.querySelectorAll<HTMLElement>('button[aria-label^="Edit "]')).find((button) => !libraryExistingEditors.has(button));
      if (added) {
        exampleEditButton = added;
        advancing = true;
        setBusy(true);
        void showStep(index + 1).catch(() => showNotice('Replay the tutorial to inspect the added section.')).finally(() => { advancing = false; setBusy(false); });
        return;
      }
    }
    dockPanel();
    updateSpotlight();
  });
}

function onResize() {
  if (phase === 'tour') syncNavigation(currentSteps()[index]);
  onLayoutChange();
  window.requestAnimationFrame(() => { if (phase === 'tour') { dockPanel(); updateSpotlight(true); } });
}

function onNavigationTransition(event: TransitionEvent) {
  if (event.propertyName === 'transform' && (event.target as Element).closest('[aria-label="Antbuildz Workspace navigation"]')) onLayoutChange();
}

function dismiss(status = 'dismissed') {
  try { window.localStorage.setItem(STORAGE_KEY, status); } catch { /* Storage may be unavailable in private browsing. */ }
  if (ownedNavigation) pageRoot?.querySelector<HTMLButtonElement>('button[aria-label="Close workspace navigation"]')?.click();
  ownedNavigation = false;
  phase = 'closed';
  index = 0;
  clearReveal();
  dockPanel();
  const drawer = ownedDrawer ? activeDrawer() : null;
  const apply = drawerButton('Apply Changes') as HTMLButtonElement | null;
  if (!apply || apply.disabled) drawer?.querySelector<HTMLButtonElement>('button[aria-label="Close section editor"], button[aria-label="Close add page content panel"]')?.click();
  ownedDrawer = false;
  render();
  host?.querySelector<HTMLButtonElement>('.ab-webstore-tour-replay')?.focus({ preventScroll: true });
}

function render() {
  if (!host || !pageRoot) return;
  const welcome = host.querySelector<HTMLElement>('.ab-webstore-tour-welcome');
  const tour = host.querySelector<HTMLElement>('.ab-webstore-tour-layer');
  if (!welcome || !tour) return;
  welcome.hidden = phase !== 'welcome';
  tour.hidden = phase !== 'tour';
  if (phase === 'welcome') {
    host.querySelector<HTMLButtonElement>('[data-tour-action="start"]')?.focus({ preventScroll: true });
    return;
  }
  if (phase !== 'tour') return;
  const steps = currentSteps();
  index = Math.min(index, steps.length - 1);
  const step = steps[index];
  const count = tutorialPanel?.querySelector<HTMLElement>('.ab-webstore-tour-count');
  const total = tutorialPanel?.querySelector<HTMLElement>('.ab-webstore-tour-total');
  const title = tutorialPanel?.querySelector<HTMLElement>('.ab-webstore-tour-title');
  const body = tutorialPanel?.querySelector<HTMLElement>('.ab-webstore-tour-body');
  const back = tutorialPanel?.querySelector<HTMLButtonElement>('[data-tour-action="back"]');
  const next = tutorialPanel?.querySelector<HTMLButtonElement>('[data-tour-action="next"]');
  if (!count || !total || !title || !body || !back || !next) return;
  count.textContent = String(index + 1);
  total.textContent = `of ${steps.length}`;
  title.textContent = step.title;
  body.textContent = step.body;
  back.disabled = index === 0;
  next.innerHTML = step.insert ? `Add section${rightIcon}` : index === steps.length - 1 ? `${checkIcon}Finish` : `Next${rightIcon}`;
  const skip = tutorialPanel?.querySelector<HTMLButtonElement>('[data-tour-action=skip-add]');
  if (skip) skip.hidden = !step.insert;
  dockPanel();
  updateSpotlight(true);
  next.focus({ preventScroll: true });
}

const svg = (content: string) => `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${content}</svg>`;
const closeIcon = svg('<path d="m18 6-12 12M6 6l12 12"/>');
const rightIcon = svg('<path d="M5 12h14m-6-6 6 6-6 6"/>');
const leftIcon = svg('<path d="M19 12H5m6-6-6 6 6 6"/>');
const checkIcon = svg('<path d="m20 6-11 11-5-5"/>');
const playIcon = svg('<path d="m9 5 12 7-12 7V5Z"/>');
const bookIcon = svg('<path d="M12 21V7"/><path d="m16 12 2 2 4-4"/><path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"/>');
const storeIcon = svg('<path d="m3 7 2-4h14l2 4M3 7h18v4a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0V7Zm2 7v7h14v-7M9 21v-5h6v5"/>');

function onKeyDown(event: KeyboardEvent) {
  if (phase === 'closed' || !host) return;
  if (event.key === 'Escape') { event.preventDefault(); dismiss(); return; }
  if (event.key !== 'Tab') return;
  const dialog = phase === 'welcome' ? host.querySelector<HTMLElement>('.ab-webstore-tour-welcome section') : tutorialPanel;
  const controls = Array.from(dialog?.querySelectorAll<HTMLButtonElement>('button:not(:disabled)') || []);
  const first = controls[0];
  const last = controls[controls.length - 1];
  if (!first || !last) return;
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
}

function dispose() {
  if (ownedNavigation) pageRoot?.querySelector<HTMLButtonElement>('button[aria-label="Close workspace navigation"]')?.click();
  ownedNavigation = false;
  phase = 'closed';
  dockPanel();
  drawerObserver?.disconnect();
  drawerObserver = null;
  clearReveal();
  if (layoutFrame) window.cancelAnimationFrame(layoutFrame);
  layoutFrame = 0;
  document.removeEventListener('keydown', onKeyDown);
  window.removeEventListener('resize', onResize);
  window.removeEventListener('scroll', onLayoutChange, true);
  document.removeEventListener('transitionend', onNavigationTransition, true);
  host?.remove();
  host = null;
  pageRoot = null;
  pageRoute = '';
  phase = 'closed';
  tutorialPanel = null;
  tutorialSpotlight = null;
  tourSteps = [];
  exampleEditButton = null;
  openedEditor = null;
  ownedDrawer = false;
  libraryExistingEditors = new Set();
  spotlightTarget = null;
}

export function resetWebstoreTutorial() { dispose(); }

function createHost() {
  document.getElementById(HOST_ID)?.dispatchEvent(new Event(DISPOSE_EVENT));
  const element = document.createElement('div');
  element.id = HOST_ID;
  element.innerHTML = `<button class="ab-webstore-tour-replay" type="button" aria-label="Replay Store Builder tutorial" title="Replay tutorial">${bookIcon}</button>
    <div class="ab-webstore-tour-welcome" hidden><section role="dialog" aria-modal="true" aria-labelledby="ab-webstore-welcome-title" aria-describedby="ab-webstore-welcome-body"><div class="ab-webstore-tour-welcome-top"><span class="ab-webstore-tour-store-icon">${storeIcon}</span><button type="button" class="ab-webstore-tour-close" data-tour-action="dismiss" aria-label="Close onboarding tutorial">${closeIcon}</button></div><p class="ab-webstore-tour-eyebrow">AI Webstore Suite</p><h2 id="ab-webstore-welcome-title">Build your first store with confidence</h2><p id="ab-webstore-welcome-body">Learn to add and edit storefront sections, then find Blog, FAQs and Terms & Agreements. Adding a section updates your draft; saving stays a separate step.</p><div class="ab-webstore-tour-welcome-actions"><button class="ab-webstore-tour-ghost" type="button" data-tour-action="dismiss">Not now</button><button class="ab-webstore-tour-primary" type="button" data-tour-action="start">${playIcon}Start tutorial</button></div></section></div>
    <div class="ab-webstore-tour-layer" hidden><div class="ab-webstore-tour-mobile-shade" aria-hidden="true"></div><div class="ab-webstore-tour-spotlight" aria-hidden="true" hidden></div><section class="ab-webstore-tour-panel" role="dialog" aria-modal="true" aria-labelledby="ab-webstore-tour-title" aria-describedby="ab-webstore-tour-body"><div class="ab-webstore-tour-panel-top"><div class="ab-webstore-tour-progress"><span class="ab-webstore-tour-count"></span><span class="ab-webstore-tour-total"></span></div><button type="button" class="ab-webstore-tour-close" data-tour-action="dismiss" aria-label="Exit tutorial">${closeIcon}</button></div><h2 id="ab-webstore-tour-title" class="ab-webstore-tour-title"></h2><p id="ab-webstore-tour-body" class="ab-webstore-tour-body"></p><button type="button" class="ab-webstore-tour-skip-add ab-webstore-tour-ghost" data-tour-action="skip-add" hidden>Skip adding</button><div class="ab-webstore-tour-actions"><button type="button" class="ab-webstore-tour-ghost" data-tour-action="back">${leftIcon}Back</button><button type="button" class="ab-webstore-tour-primary" data-tour-action="next">Next${rightIcon}</button></div></section></div>`;
  element.addEventListener(DISPOSE_EVENT, dispose);
  element.addEventListener('click', onTourClick);
  tutorialPanel = element.querySelector<HTMLElement>('.ab-webstore-tour-panel');
  tutorialSpotlight = element.querySelector<HTMLElement>('.ab-webstore-tour-spotlight');
  tutorialPanel?.addEventListener('click', (event) => { event.stopPropagation(); onTourClick(event); });
  document.body.appendChild(element);
  document.addEventListener('keydown', onKeyDown);
  window.addEventListener('resize', onResize);
  window.addEventListener('scroll', onLayoutChange, true);
  document.addEventListener('transitionend', onNavigationTransition, true);
  drawerObserver = new MutationObserver((records) => {
    if (records.some((record) => !(record.target as Element).closest?.('#antbuildz-webstore-tutorial, #antbuildz-webstore-tutorial-drawer'))) onLayoutChange();
  });
  drawerObserver.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-state'] });
  return element;
}

export function syncWebstoreTutorial(root: HTMLElement) {
  const route = window.location.pathname;
  if (!route.startsWith(PREFIX)) { dispose(); return; }
  const section = route.split('/').pop();
  const expectedHeading: Record<string, string> = {
    rental: 'Build Your Rental Store', sales: 'Build Your Sales Store',
    blog: 'Blog Posts', faqs: 'Frequently asked questions', policies: 'Store Policies',
  };
  const headings = Array.from(root.querySelectorAll('main h1')).map((element) => normalise(element.textContent));
  const ready = headings.includes(expectedHeading[section || ''])
    || (route.endsWith('/store-profile') && Boolean(root.querySelector('[data-antbuildz-store-profile] label')));
  if (host) host.hidden = !ready;
  if (!ready) return;
  pageRoot = root;
  if (!host) {
    host = createHost();
    try { phase = window.localStorage.getItem(STORAGE_KEY) ? 'closed' : 'welcome'; } catch { phase = 'closed'; }
  }
  if (pageRoute !== route) { pageRoute = route; index = 0; tourSteps = stepsFor(route); render(); }
  else if (phase === 'tour') { dockPanel(); updateSpotlight(); }
}
