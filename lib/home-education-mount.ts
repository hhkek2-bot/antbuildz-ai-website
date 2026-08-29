export type HomeEducationTargets = { body: HTMLElement; faq: HTMLElement };

/** Source-owned slots beside, never inside, the transferred hero and Emma.
 * Keep legacy React nodes mounted so their owner can still unmount safely.
 */
export function mountHomeEducation(
  root: HTMLElement,
  retiredClass: string,
  onTargets: (targets: HomeEducationTargets | null) => void,
) {
  let targets: HomeEducationTargets | null = null;
  const retired = new Map<HTMLElement, { hidden: string | null; inert: string | null }>();

  function clear() {
    if (targets) {
      targets.body.remove();
      targets.faq.remove();
      targets = null;
      onTargets(null);
    }
    retired.forEach((attributes, element) => {
      element.classList.remove(retiredClass);
      for (const name of ['hidden', 'inert'] as const) {
        const value = attributes[name];
        if (value === null) element.removeAttribute(name);
        else element.setAttribute(name, value);
      }
    });
    retired.clear();
  }

  function sync() {
    if (window.location.pathname !== '/') {
      clear();
      return;
    }
    const main = root.querySelector<HTMLElement>('.ai-platform-page > main');
    const hero = main?.querySelector<HTMLElement>(':scope > .ai-hero-section');
    const emma = main?.querySelector<HTMLElement>(':scope > #meet-aria');
    const legacyFaq = main?.querySelector<HTMLElement>(':scope > .ai-faq-section');
    if (!main || !hero || !emma || !legacyFaq) {
      clear();
      return;
    }
    if (targets && (targets.body.parentElement !== main || targets.faq.parentElement !== main)) clear();

    if (!targets) {
      const body = document.createElement('div');
      const faq = document.createElement('div');
      body.dataset.homeEducationSlot = 'body';
      faq.dataset.homeEducationSlot = 'faq';
      hero.insertAdjacentElement('afterend', body);
      emma.insertAdjacentElement('beforebegin', faq);
      targets = { body, faq };
      onTargets(targets);
    }

    const industries = main.querySelector<HTMLElement>(':scope > .antbuildz-home-industries');
    for (const element of [industries, legacyFaq]) {
      if (!element || retired.has(element)) continue;
      retired.set(element, { hidden: element.getAttribute('hidden'), inert: element.getAttribute('inert') });
      element.setAttribute('hidden', '');
      element.setAttribute('inert', '');
      element.classList.add(retiredClass);
    }
  }

  const observer = new MutationObserver(sync);
  observer.observe(root, { childList: true, subtree: true });
  window.addEventListener('popstate', sync);
  sync();
  return () => {
    observer.disconnect();
    window.removeEventListener('popstate', sync);
    clear();
  };
}
