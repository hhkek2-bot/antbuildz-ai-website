const TITLE_PUNCTUATION_ROUTES = new Set([
  '/',
  '/ai-sales-agent',
  '/ai-webstore-suite',
]);

const STANDALONE_FULL_STOP = /(?<!\.)\.(?!\.)/g;

/**
 * Removes sentence-style full stops from visible marketing headings while
 * retaining question marks and deliberate truncation ellipses.
 */
export function removeHeadingFullStops(root: ParentNode, pathname: string) {
  if (!TITLE_PUNCTUATION_ROUTES.has(pathname)) return;

  root.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((heading) => {
    const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
    let textNode = walker.nextNode();

    while (textNode) {
      const current = textNode.textContent ?? '';
      const next = current.replace(STANDALONE_FULL_STOP, '');
      if (next !== current) textNode.textContent = next;
      textNode = walker.nextNode();
    }
  });
}
