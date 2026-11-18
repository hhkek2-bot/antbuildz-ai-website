const billingCopy = new Map([
  ['Monthly conversations', 'Monthly allowance'],
  ['Extra credits', 'Purchased credits'],
  ['No extra credits', 'No purchased credits'],
  ['No expiry while subscription is active', 'Credits do not expire. Service access is required to use them.'],
  ['When your balance is low, we’ll automatically top up your conversations.', 'Auto Top-Up buys the selected credit pack when your total balance meets the configured trigger. Purchases can repeat.'],
  ['Balance reaches', 'Trigger balance'],
  ['Total Available Conversations = Monthly Conversations Remaining + Extra Credits Remaining. Monthly Conversations are used first. Auto Top-Up pauses when the monthly reset is within 24 hours and usable balance remains.', 'Your total balance combines your remaining monthly allowance and purchased credits. Your monthly allowance is used first. Auto Top-Up pauses when the monthly reset is within 24 hours and usable balance remains.'],
]);

const originalDefinition = '1 conversation includes up to 5 meaningful product-related exchanges. Greetings, thank-you messages, small talk and unsuccessful AI responses do not count.';
const conversationDefinition = 'One conversation credit covers one customer session, with unlimited messages during that session. Console test prompts do not count.';

/** Update labels in the transferred billing preview without replacing interactive elements. */
export function syncConsoleBillingCopy(root: HTMLElement) {
  if (!['/ai-agent-console', '/app'].includes(window.location.pathname)) return;
  const consoleRoot = root.querySelector('.exact-ai-console');
  if (!consoleRoot) return;

  if (consoleRoot.querySelector('[aria-label="How conversations are counted"]')) {
    const labels = document.createTreeWalker(consoleRoot, NodeFilter.SHOW_TEXT);
    while (labels.nextNode()) {
      const text = labels.currentNode;
      const replacement = billingCopy.get(text.nodeValue ?? '');
      if (replacement) text.nodeValue = replacement;
    }
    const tooltips = document.querySelectorAll('[data-radix-popper-content-wrapper], [role="tooltip"]');
    for (const tooltip of tooltips) {
      const labels = document.createTreeWalker(tooltip, NodeFilter.SHOW_TEXT);
      while (labels.nextNode()) {
        if (labels.currentNode.nodeValue === originalDefinition) labels.currentNode.nodeValue = conversationDefinition;
      }
    }
  }

  for (const cell of consoleRoot.querySelectorAll('table td')) {
    if (!cell.closest('table')?.querySelector('th:first-child')?.textContent?.trim().startsWith('Invoice')) continue;
    const labels = document.createTreeWalker(cell, NodeFilter.SHOW_TEXT);
    while (labels.nextNode()) {
      const text = labels.currentNode;
      const pack = text.nodeValue?.match(/^(\d+) Conversations$/);
      if (pack) text.nodeValue = `${pack[1]} Conversation Credits`;
    }
  }
}
