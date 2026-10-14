/** Presentation-only refinements for the copied Console's AI Rules panels.
 * Keep the bundle's own inputs and actions so existing agent drafts survive.
 */
export function syncConsoleAiRulesDesign(root: HTMLElement) {
  if (!['/ai-agent-console', '/app'].includes(window.location.pathname)) return;

  const knowledge = root.querySelector<HTMLElement>('[role="tabpanel"][id$="-content-knowledge"]:not([hidden])');
  if (knowledge && !knowledge.querySelector('.antbuildz-ai-rules__tip')) {
    const card = knowledge.firstElementChild as HTMLElement | null;
    if (card) {
      knowledge.dataset.antbuildzRulesDesign = 'knowledge';
      knowledge.classList.add('antbuildz-ai-rules', 'antbuildz-ai-rules--knowledge');
      const header = card.children[0] as HTMLElement;
      const heading = header.querySelector('h2');
      if (heading) heading.textContent = '1. What Your AI Knows';
      const description = header.querySelector('p');
      if (description) description.textContent = 'Tell your AI which products, services, and topics it should help customers with.';
      const badge = document.createElement('span');
      badge.className = 'antbuildz-ai-rules__badge';
      badge.textContent = 'Knowledge Scope';
      header.appendChild(badge);

      const domain = Array.from(card.children).find((child) => child.textContent?.includes("Define your agent's domain")) as HTMLElement | undefined;
      if (domain) {
        domain.classList.add('antbuildz-ai-rules__domain');
        const label = domain.querySelector('label');
        if (label) label.textContent = 'Describe your AI’s area of expertise';
        const introduction = domain.querySelector('p');
        if (introduction) introduction.textContent = 'Describe the products and services your AI can discuss. Start with a template, then make it your own.';
        const textarea = domain.querySelector<HTMLTextAreaElement>('#business-focus');
        if (textarea) textarea.placeholder = 'You are an Antbuildz AI Product Specialist. Help customers understand, compare, and subscribe to Antbuildz AI products and services. Only recommend products supported by the company’s knowledge base.';
        const templates = domain.querySelector('button')?.parentElement;
        if (templates) {
          templates.classList.add('antbuildz-ai-rules__templates');
          const templateLabel = document.createElement('p');
          templateLabel.className = 'antbuildz-ai-rules__template-label';
          templateLabel.textContent = 'Use a Template';
          templates.insertAdjacentElement('beforebegin', templateLabel);
        }
      }
      const rules = card.querySelector<HTMLOListElement>('ol[aria-label="Business instructions"]')?.parentElement;
      const legacyForm = rules?.querySelector<HTMLFormElement>('form');
      if (rules && legacyForm) {
        rules.classList.add('antbuildz-ai-rules__business-rules');
        const description = rules.querySelector('p');
        if (description) description.textContent = 'Add one clear instruction at a time. Choose an example or write your own, then edit it before adding.';
        legacyForm.classList.add('antbuildz-ai-rules__legacy-form');
        legacyForm.nextElementSibling?.classList.add('antbuildz-ai-rules__legacy-examples');

        const editor = document.createElement('div');
        editor.className = 'antbuildz-ai-rules__rule-editor';
        const promptLabel = document.createElement('p');
        promptLabel.className = 'antbuildz-ai-rules__rule-prompt-label';
        promptLabel.textContent = 'Start with an example';
        const examples = document.createElement('div');
        examples.className = 'antbuildz-ai-rules__rule-examples';
        const textareaLabel = document.createElement('label');
        textareaLabel.htmlFor = 'antbuildz-business-rule-draft';
        textareaLabel.textContent = 'Write or customise a rule';
        const textarea = document.createElement('textarea');
        textarea.id = 'antbuildz-business-rule-draft';
        textarea.rows = 3;
        textarea.placeholder = 'For example: Confirm delivery costs with our team before giving a final quotation.';
        const footer = document.createElement('div');
        footer.className = 'antbuildz-ai-rules__rule-footer';
        const status = document.createElement('span');
        status.setAttribute('role', 'status');
        status.textContent = 'The rule is editable before you add it.';
        const add = document.createElement('button');
        add.type = 'button';
        add.textContent = 'Add rule';
        add.disabled = true;
        textarea.addEventListener('input', () => {
          add.disabled = !textarea.value.trim();
          status.textContent = 'The rule is editable before you add it.';
        });
        const templates = [
          ['Catalogue & pricing', 'Use our approved catalogue for product recommendations. If pricing or availability is not confirmed, collect the customer’s requirements and ask our team to confirm.'],
          ['Delivery & payments', 'Explain delivery and payment terms from our approved policies. Confirm final costs and dates with our team before making a promise.'],
          ['Ask the team', 'If the answer is not in our business information, ask a clarifying question or pass the enquiry to our team with the relevant details.'],
        ];
        for (const [label, value] of templates) {
          const button = document.createElement('button');
          button.type = 'button';
          button.textContent = label;
          button.addEventListener('click', () => {
            textarea.value = value;
            add.disabled = false;
            status.textContent = 'Example loaded. Edit the wording to fit your business.';
            textarea.focus();
          });
          examples.appendChild(button);
        }
        add.addEventListener('click', () => {
          const value = textarea.value.replace(/\s+/g, ' ').trim();
          const input = legacyForm.querySelector<HTMLInputElement>('input');
          if (!value || !input) return;
          const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;
          setter?.call(input, value);
          input.dispatchEvent(new Event('input', { bubbles: true }));
          window.requestAnimationFrame(() => {
            const submit = legacyForm.querySelector<HTMLButtonElement>('button[type="submit"]');
            if (submit?.disabled) {
              status.textContent = 'The rule could not be added. Please try again.';
              return;
            }
            legacyForm.requestSubmit();
            textarea.value = '';
            add.disabled = true;
            status.textContent = 'Rule added to your draft list. Save changes when you are ready.';
          });
        });
        footer.appendChild(status);
        footer.appendChild(add);
        editor.appendChild(promptLabel);
        editor.appendChild(examples);
        editor.appendChild(textareaLabel);
        editor.appendChild(textarea);
        editor.appendChild(footer);
        legacyForm.insertAdjacentElement('beforebegin', editor);
      }
      const tip = document.createElement('aside');
      tip.className = 'antbuildz-ai-rules__tip';
      tip.innerHTML = '<strong>Tip</strong><p>Be specific about your industry and products. Your AI can still use general technical knowledge to explain concepts without recommending unsupported products.</p>';
      card.appendChild(tip);
    }
  }
  if (knowledge) {
    const rules = knowledge.querySelector('ol[aria-label="Business instructions"]');
    const status = knowledge.querySelector<HTMLElement>('.antbuildz-ai-rules__rule-footer [role="status"]');
    if (rules && !rules.children.length && status?.textContent?.startsWith('Rule added')) {
      status.textContent = 'The rule is editable before you add it.';
    }
  }

  const guardrails = root.querySelector<HTMLElement>('[role="tabpanel"][id$="-content-guardrails"]:not([hidden])');
  if (guardrails && !guardrails.querySelector('.antbuildz-ai-rules__safeguards')) {
    const card = guardrails.firstElementChild as HTMLElement | null;
    if (card) {
      guardrails.dataset.antbuildzRulesDesign = 'guardrails';
      guardrails.classList.add('antbuildz-ai-rules', 'antbuildz-ai-rules--guardrails');
      const header = card.children[0] as HTMLElement;
      const heading = header.querySelector('h2');
      if (heading) heading.textContent = '2. Rules & Restrictions';
      const badge = document.createElement('span');
      badge.className = 'antbuildz-ai-rules__badge';
      badge.textContent = 'Agent Guardrails';
      header.appendChild(badge);
      const intro = card.children[1] as HTMLElement;
      const introLabel = intro.querySelector('label');
      if (introLabel) introLabel.textContent = 'Set boundaries for what your AI should avoid, never promise, or refer to your team.';
      const oldDescription = intro.querySelector('p');
      if (oldDescription) oldDescription.hidden = true;

      const safeguards = document.createElement('div');
      safeguards.className = 'antbuildz-ai-rules__safeguards';
      safeguards.innerHTML = '<h3>Recommended safeguards</h3><ul><li>Do not invent product details, prices, or availability.</li><li>Ask for clarification when important information is missing.</li><li>Do not promise discounts, refunds, or delivery without approval.</li></ul><p>Examples to review; these do not change the agent’s behaviour.</p>';
      const drafts = card.querySelector('ol[aria-label="Guardrail drafts"]');
      if (drafts) {
        drafts.insertAdjacentElement('beforebegin', safeguards);
        const draftsLabel = document.createElement('h3');
        draftsLabel.className = 'antbuildz-ai-rules__drafts-label';
        draftsLabel.textContent = 'Additional business-specific rules';
        drafts.insertAdjacentElement('beforebegin', draftsLabel);
      }
      const notice = Array.from(card.children).find((child) => child.textContent?.includes('These are review drafts'));
      if (notice) notice.textContent = 'These rules are browser-only review drafts. They are not applied to Test Agent or customer chats yet.';
    }
  }
}
