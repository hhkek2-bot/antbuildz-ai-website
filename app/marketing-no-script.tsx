/* Native links work when JavaScript is unavailable. */
/* eslint-disable @next/next/no-html-link-for-pages */
/* A readable fallback for visitors and crawlers that do not run the transferred app. */
export function MarketingNoScript({ title, description, pricing = false }: { title: string; description: string; pricing?: boolean }) {
  return <noscript><main>
    <nav aria-label="Main navigation">
      <a href="/">Home</a>{' · '}
      <a href="/ai-agent">Customer AI Agent</a>{' · '}
      <a href="/ai-webstore-suite">AI Webstore Suite</a>{' · '}
      <a href="/pricing">Pricing</a>{' · '}
      <a href="/ai-roles">AI Agent Roles</a>{' · '}
      <a href="/who-we-serve">Industries</a>{' · '}
      <a href="/resources">Resources</a>
    </nav>
    <h1>{title}</h1>
    <p>{description}</p>
    <p>Antbuildz AI helps product and service businesses guide customer conversations using approved business knowledge. AI Webstore Suite is an optional extension for product discovery and connected catalogue information.</p>
    {pricing && <p>Agent is US$49 per month and includes 50 customer conversations. Sales is US$149 per month with 75 conversations and a sales Webstore. Rental+ is US$299 per month with 100 conversations and sales and rental Webstore capabilities.</p>}
    <p><a href="/ai-agent">Explore AI Agent</a>{' · '}<a href="/book-a-demo">Book a Demo</a></p>
  </main></noscript>;
}
