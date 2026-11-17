/** Compact source-owned storage estimate; no billing or provisioning mutation. */
export function syncPricingStorageAddon(root: HTMLElement) {
  const grid = root.querySelector<HTMLElement>('.pricing-addons-grid');
  if (!grid || grid.querySelector('[data-storage-addon]')) return;
  const agent = grid.querySelector<HTMLElement>('.pricing-addon-card:not(:has(.pricing-topup-table))');
  if (!agent) return;

  const card = document.createElement('section');
  card.className = 'pricing-addon-card antbuildz-storage-addon';
  card.dataset.storageAddon = '';
  card.setAttribute('aria-labelledby', 'storage-addon-title');
  card.innerHTML = `
    <h3 id="storage-addon-title">Additional Storage</h3>
    <p id="storage-addon-rate" class="pricing-addon-desc">Store catalogues, manuals and FAQs in your knowledge base to train and guide your Customer AI Agent. $10 per 100 MB/month.</p>
    <div class="storage-addon-controls">
      <div class="pricing-agent-price storage-addon-total" aria-live="polite" aria-atomic="true"><strong data-storage-price>$10</strong><span> / month</span></div>
      <div class="storage-addon-stepper" role="group" aria-label="Extra knowledge storage" aria-describedby="storage-addon-rate">
        <button type="button" data-storage-decrease aria-label="Reduce selected knowledge storage by 100 MB">−</button>
        <output data-storage-amount aria-live="polite" aria-atomic="true">100 MB</output>
        <button type="button" data-storage-increase aria-label="Increase selected knowledge storage by 100 MB">+</button>
      </div>
    </div>`;

  const decrease = card.querySelector<HTMLButtonElement>('[data-storage-decrease]')!;
  const increase = card.querySelector<HTMLButtonElement>('[data-storage-increase]')!;
  let packs = 1;
  const update = (next: number) => {
    if (!Number.isSafeInteger(next) || next < 1 || !Number.isSafeInteger(next * 100)) return;
    packs = next;
    const capacity = `${(packs * 100).toLocaleString('en-US')} MB`;
    const price = `$${(packs * 10).toLocaleString('en-US')}`;
    card.querySelector('[data-storage-amount]')!.textContent = capacity;
    card.querySelector('[data-storage-price]')!.textContent = price;
    decrease.disabled = packs === 1;
  };
  decrease.addEventListener('click', () => update(packs - 1));
  increase.addEventListener('click', () => update(packs + 1));
  update(1);
  agent.dataset.storageAgent = '';
  grid.insertBefore(card, agent);
}
