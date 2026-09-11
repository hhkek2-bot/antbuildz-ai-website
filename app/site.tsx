import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import {
  agentFaqs,
  getSolution,
  resourceCards,
  roleCards,
  solutions,
} from '@/lib/site-content';

const Arrow = () => <span aria-hidden="true">↗</span>;
const Tick = () => <span className="tick" aria-hidden="true">✓</span>;

function Logo() {
  return (
    <Link className="brand" href="/" aria-label="Antbuildz AI home">
      <span className="brand-mark">A</span>
      <span>antbuildz<span className="brand-ai">AI</span></span>
    </Link>
  );
}

function Header({ current = '' }: { current?: string }) {
  const productLinks = [
    ['AI Webstore Suite', '/ai-webstore-suite'],
    ['AI Sales Agent', '/ai-agent'],
    ['AI Agent Console', '/ai-agent-console'],
  ];
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <details className="nav-popover">
            <summary>Products <span aria-hidden="true">⌄</span></summary>
            <div className="nav-panel">
              {productLinks.map(([label, href]) => (
                <Link key={href} href={href} className={current === href.slice(1) ? 'active' : ''}>
                  <span>{label}</span><small>Explore the product</small>
                </Link>
              ))}
            </div>
          </details>
          <details className="nav-popover">
            <summary>Who We Serve <span aria-hidden="true">⌄</span></summary>
            <div className="nav-panel nav-panel-wide">
              {solutions.map((item) => (
                <Link key={item.slug} href={`/${item.slug}`} className={current === item.slug ? 'active' : ''}>
                  <span>{item.navLabel}</span><small>{item.accent}</small>
                </Link>
              ))}
            </div>
          </details>
          <Link className={current === 'pricing' ? 'active' : ''} href="/pricing">Pricing</Link>
          <Link className={current === 'resources' ? 'active' : ''} href="/resources">Resources</Link>
          <Link className={current === 'about' ? 'active' : ''} href="/about">About</Link>
        </nav>
        <div className="header-actions">
          <Link className="text-link desktop-only" href="/faqs">AI FAQs</Link>
          <a className="btn btn-small btn-primary" href="#contact">Book a Demo <Arrow /></a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation"><span /><span /><span /></summary>
            <nav aria-label="Mobile navigation">
              <strong>Products</strong>
              {productLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
              <strong>Who We Serve</strong>
              {solutions.map((item) => <Link key={item.slug} href={`/${item.slug}`}>{item.navLabel}</Link>)}
              <Link href="/pricing">Pricing</Link><Link href="/resources">Resources</Link><Link href="/ai-agent-roles">AI Agent Roles</Link><Link href="/faqs">AI FAQs</Link><Link href="/about">About</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>Industrial AI Sales Agent and AI Webstore Suite for equipment, rental, technical product and B2B sales teams.</p>
          <a className="btn btn-primary" href="mailto:help@antbuildz.ai">Book a Demo <Arrow /></a>
        </div>
        <div><h3>Products</h3><Link href="/ai-webstore-suite">AI Webstore Suite</Link><Link href="/ai-agent">AI Sales Agent</Link><Link href="/ai-agent-console">AI Agent Console</Link><Link href="/pricing">Pricing</Link></div>
        <div><h3>Learn</h3><Link href="/resources">Resources</Link><Link href="/ai-agent-roles">AI Agent Roles</Link><Link href="/faqs">AI FAQs</Link><Link href="/about">About Antbuildz</Link></div>
        <div><h3>Who We Serve</h3>{solutions.slice(0, 4).map((item) => <Link key={item.slug} href={`/${item.slug}`}>{item.navLabel}</Link>)}</div>
        <div><h3>More Industries</h3>{solutions.slice(4).map((item) => <Link key={item.slug} href={`/${item.slug}`}>{item.navLabel}</Link>)}</div>
      </div>
      <div className="container footer-bottom"><span>© 2026 Antbuildz. Built for industrial commerce.</span><span>Singapore · Serving global industrial teams</span></div>
    </footer>
  );
}

export function SiteShell({ children, current }: { children: ReactNode; current?: string }) {
  return <><Header current={current} /><main>{children}</main><Footer /></>;
}

function SectionIntro({ eyebrow, title, text, align = 'center' }: { eyebrow: string; title: ReactNode; text?: string; align?: 'center' | 'left' }) {
  return <div className={`section-intro ${align === 'left' ? 'align-left' : ''}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p className="section-copy">{text}</p>}</div>;
}

function ChatVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`chat-visual ${compact ? 'compact' : ''}`} aria-label="Example AI Sales Agent conversation">
      <div className="window-bar"><span /><span /><span /><strong>Antbuildz AI Sales Agent</strong><em>Online</em></div>
      <div className="chat-body">
        <p className="chat-label">Today, 10:42</p>
        <div className="bubble buyer">I need a 20 t excavator for a six-week earthworks project in Johor.</div>
        <div className="bubble agent"><b>Emma · Antbuildz AI</b>What material are you moving, what dig depth do you need, and when should the machine arrive?</div>
        <div className="bubble buyer">General soil, around 5 m dig depth. Delivery by 12 September.</div>
        <div className="recommendation"><span>REQUIREMENT CAPTURED</span><strong>20 t excavator · 5 m dig · 6 weeks</strong><small>Location and delivery date ready for quotation</small></div>
      </div>
      <div className="chat-input"><span>Ask about products, rental or availability…</span><b>↑</b></div>
    </div>
  );
}

function WebstoreVisual() {
  return (
    <div className="browser-visual" aria-label="AI Webstore product experience">
      <div className="browser-top"><span /><span /><span /><div>store.yourcompany.com</div></div>
      <div className="store-nav"><b>HORIZON EQUIPMENT</b><span>Equipment</span><span>Parts</span><span>Rental</span><span>Contact</span><i>Ask AI</i></div>
      <div className="store-body">
        <div className="store-copy"><small>SMARTER EQUIPMENT SOURCING</small><h3>Find the right equipment.<br />Without the guesswork.</h3><p>Search products or tell the AI Sales Agent what your project needs.</p><div className="fake-search">What are you looking for? <b>Search</b></div></div>
        <Image src="/images/equipment-island.png" width={1014} height={558} sizes="(max-width: 767px) 90vw, 42vw" alt="Industrial equipment displayed in a digital Webstore" />
      </div>
      <div className="product-row">
        <div><Image src="/images/cat-320.jpg" width={320} height={220} sizes="110px" alt="CAT 320 excavator" /><span><b>CAT 320 Excavator</b><small>Available · Johor</small></span></div>
        <div><Image src="/images/sany-sy215.jpg" width={320} height={220} sizes="110px" alt="SANY SY215 excavator" /><span><b>SANY SY215</b><small>Quote on request</small></span></div>
        <div className="agent-card"><b>Not sure which model fits?</b><small>Ask Emma, your AI Sales Agent</small><span>Start conversation →</span></div>
      </div>
    </div>
  );
}

function ConsoleVisual() {
  return (
    <div className="console-visual" aria-label="AI Agent Console interface">
      <aside><b className="console-logo">A</b><span className="selected">Overview</span><span>Agent setup</span><span>Knowledge</span><span>Conversations</span><span>Workflows</span><span>Playground</span><span>Analytics</span></aside>
      <section><div className="console-head"><div><small>AI AGENT CONSOLE</small><h3>Good morning, Sarah</h3></div><button>Test your Agent</button></div>
      <div className="stats"><article><small>Conversations</small><strong>428</strong><span>↗ 18% this month</span></article><article><small>Qualified enquiries</small><strong>126</strong><span>29.4% conversion</span></article><article><small>Knowledge coverage</small><strong>92%</strong><span>18 sources active</span></article></div>
      <div className="console-grid"><article><div className="chart-title"><b>Conversation activity</b><small>Last 30 days</small></div><div className="bar-chart">{[45,62,51,78,66,88,72,94,76,84,96,90].map((h, i) => <i key={i} style={{height: `${h}%`}} />)}</div></article><article><b>Agent health</b><div className="health"><span>92</span><small>Ready for customer conversations</small></div><p><Tick /> Knowledge sources current</p><p><Tick /> Handover rules active</p><p><Tick /> Response quality strong</p></article></div>
      </section>
    </div>
  );
}

function CtaBand({ title = 'Ready to turn product conversations into revenue?', text = 'See how Antbuildz AI fits your products, sales process and customer journey.' }: { title?: string; text?: string }) {
  return <section className="cta-band"><div className="container cta-inner"><div><p className="eyebrow">BUILD YOUR AI SALES ECOSYSTEM</p><h2>{title}</h2><p>{text}</p></div><div className="cta-actions"><a className="btn btn-primary" href="mailto:help@antbuildz.ai">Book a Demo <Arrow /></a><Link className="btn btn-outline-light" href="/pricing">View Pricing</Link></div></div></section>;
}

export function HomePage() {
  return (
    <SiteShell>
      <section className="home-hero"><div className="hero-glow" /><div className="container home-hero-grid"><div className="hero-copy"><p className="eyebrow">Industrial AI Sales Agent for product-led B2B</p><h1><span className="hero-title-line">Make Industrial Buying Better</span><span className="hero-title-line gradient-text">With Antbuildz AI</span></h1><div className="hero-actions"><a className="btn btn-primary" href="mailto:help@antbuildz.ai">Book a Demo <Arrow /></a><Link className="btn btn-dark" href="/ai-agent">Meet Your AI Sales Agent</Link></div><div className="hero-proof"><span><Tick /> Grounded in approved knowledge</span><span><Tick /> Built for technical products</span><span><Tick /> Designed for human handover</span></div></div><div className="home-hero-image"><Image src="/images/industrial-ai.png" width={1792} height={1024} sizes="(max-width: 980px) 90vw, 48vw" priority alt="Industrial team using Antbuildz AI across equipment and product operations" /><div className="hero-image-note"><span>ANTBUILDZ AI</span><strong>Ask · Qualify · Recommend · Handover</strong><small>One connected industrial sales ecosystem</small></div></div></div></section>
      <section className="trust-strip"><div className="container"><p>Built for the industries that keep the world moving</p><div><span>EQUIPMENT RENTAL</span><span>MANUFACTURING</span><span>MRO & PARTS</span><span>DEALERS</span><span>BUILDING SUPPLY</span></div></div></section>
      <section className="section"><div className="container"><SectionIntro eyebrow="ONE CONNECTED PLATFORM" title={<>Not Just an AI Sales Agent.<br /><span className="gradient-text">Your Entire AI Sales Ecosystem.</span></>} text="Give buyers a better way to discover products, qualify requirements and move towards a quotation—while your team stays in control." /><div className="ecosystem-grid"><article className="feature-card feature-card-large"><span className="number">01</span><div><p className="eyebrow">AI SALES AGENT</p><h3>Qualify every serious buyer</h3><p>Capture specifications, location, quantities, timelines, budget and intent before your team follows up.</p><Link href="/ai-agent">Explore AI Sales Agent <Arrow /></Link></div><ChatVisual compact /></article><article className="feature-card"><span className="number">02</span><p className="eyebrow">AI WEBSTORE SUITE</p><h3>Your product knowledge, ready to sell</h3><p>Launch structured, discoverable product pages connected to an AI Sales Agent and quotation workflows.</p><Link href="/ai-webstore-suite">Explore Webstore Suite <Arrow /></Link></article><article className="feature-card dark-card"><span className="number">03</span><p className="eyebrow">AI AGENT CONSOLE</p><h3>Control the knowledge. Improve the outcomes.</h3><p>Manage sources, instructions, conversations, tests and performance from one workspace.</p><Link href="/ai-agent-console">Explore Agent Console <Arrow /></Link></article></div></div></section>
      <section className="section soft-section"><div className="container split-section"><div><SectionIntro align="left" eyebrow="AI WEBSTORE SUITE" title={<>Your catalogue becomes a <span className="gradient-text">guided buyer journey.</span></>} text="Give every product a structured home, connect live buyer conversations to the right information and capture clearer commercial intent." /><ul className="check-list"><li><Tick /> Product and rental catalogue management</li><li><Tick /> Search- and AI-ready product pages</li><li><Tick /> Sales, rental and enquiry workflows</li><li><Tick /> Built-in AI Sales Agent</li></ul><Link className="btn btn-dark" href="/ai-webstore-suite">See the AI Webstore Suite <Arrow /></Link></div><WebstoreVisual /></div></section>
      <section className="section"><div className="container"><SectionIntro eyebrow="WHO WE SERVE" title={<>Industrial context changes <span className="gradient-text">everything.</span></>} text="Antbuildz AI is shaped around how technical products are selected, hired, quoted and supported." /><div className="industry-grid">{solutions.map((item, index) => <Link className="industry-card" key={item.slug} href={`/${item.slug}`}><span>0{index + 1}</span><Image src={item.image} width={720} height={480} sizes="(max-width: 767px) 90vw, (max-width: 1180px) 45vw, 23vw" alt={`${item.navLabel} industrial operations`} /><div><h3>{item.navLabel}</h3><p>{item.summary}</p><b>See how it works <Arrow /></b></div></Link>)}</div></div></section>
      <section className="section console-section"><div className="container"><SectionIntro eyebrow="AI AGENT CONSOLE" title={<>One place to manage your <span className="gradient-text">AI sales operation.</span></>} text="Keep product knowledge current, set commercial boundaries and see which conversations are turning into qualified enquiries." /><ConsoleVisual /><div className="metric-row"><div><strong>24/7</strong><span>Customer coverage</span></div><div><strong>92%</strong><span>Knowledge readiness</span></div><div><strong>3×</strong><span>Faster qualification</span></div><div><strong>1</strong><span>Connected workspace</span></div></div></div></section>
      <CtaBand />
    </SiteShell>
  );
}

function ProductPageLayout({ current, hero, children }: { current: string; hero: ReactNode; children: ReactNode }) {
  return <SiteShell current={current}>{hero}{children}</SiteShell>;
}

export function WebstorePage() {
  const features = [
    ['Structured Product Catalogue', 'Organise sales, rental and parts listings with the specifications buyers and AI systems need.'],
    ['AI-Guided Discovery', 'Let buyers describe the job, application or outcome instead of guessing a product name.'],
    ['Sales & Rental Workflows', 'Capture quantities, hire dates, locations, delivery needs and quotation intent.'],
    ['Inventory & Availability', 'Keep product status, locations and approved availability signals connected to enquiries.'],
    ['SEO + GEO Ready', 'Create discoverable product pages with structured information for search and AI answer engines.'],
    ['Shareable Buyer Journeys', 'Give customers a clear path from product discovery to conversation and handover.'],
  ];
  return <ProductPageLayout current="ai-webstore-suite" hero={<section className="product-hero webstore-hero"><div className="container product-hero-grid"><div className="hero-copy"><p className="eyebrow">AI WEBSTORE SUITE</p><h1>Your Digital Storefront. <span className="gradient-text">Built to Sell.</span></h1><p className="hero-lead">Launch an AI-ready Webstore for industrial products, equipment rental, parts and technical catalogues—connected to a 24/7 AI Sales Agent.</p><div className="hero-actions"><a className="btn btn-primary" href="mailto:help@antbuildz.ai">Build Your Webstore <Arrow /></a><Link className="btn btn-outline" href="/pricing">View Pricing</Link></div></div><div className="product-visual wide-visual"><WebstoreVisual /></div></div></section>}>
    <section className="section"><div className="container"><SectionIntro eyebrow="WHAT YOU GET" title={<>More than a catalogue.<br /><span className="gradient-text">A complete selling system.</span></>} text="Every page, product and conversation works together to move the buyer forward." /><div className="card-grid three">{features.map(([title, text], i) => <article className="icon-card" key={title}><span>{String(i + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section soft-section"><div className="container"><SectionIntro eyebrow="HOW IT WORKS" title="From product data to qualified demand" /><div className="steps-grid">{[['01','Organise','Bring together approved listings, images, specifications, rates and policies.'],['02','Publish','Create branded Webstore pages that are easy to browse, search and share.'],['03','Guide','Let the AI Sales Agent qualify buyers and recommend supported options.'],['04','Convert','Route quotation-ready enquiries to your sales or rental team.']].map(([n,t,p]) => <article key={n}><b>{n}</b><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>
    <section className="section"><div className="container split-section reverse"><WebstoreVisual /><div><SectionIntro align="left" eyebrow="BUILT FOR INDUSTRIAL COMMERCE" title={<>One Webstore for <span className="gradient-text">sales, rental and parts.</span></>} text="Support how industrial buyers actually buy: compare specifications, check commercial fit, ask detailed questions and involve a specialist when needed." /><ul className="check-list"><li><Tick /> Dedicated product and equipment pages</li><li><Tick /> Quotations, reservations and enquiry capture</li><li><Tick /> Multi-language buyer experiences</li><li><Tick /> Store analytics and conversation intelligence</li></ul></div></div></section>
    <CtaBand title="Build a Webstore that works as hard as your sales team." text="Show us your catalogue and sales process. We’ll map the right Webstore and AI Agent setup." />
  </ProductPageLayout>;
}

export function SalesAgentPage() {
  return <ProductPageLayout current="ai-sales-agent" hero={<section className="product-hero agent-hero"><div className="container product-hero-grid"><div className="hero-copy"><p className="eyebrow">INDUSTRIAL AI SALES AGENT</p><h1>One Conversation. <span className="gradient-text">Thousands in Revenue.</span></h1><p className="hero-lead">Meet the AI Sales Agent built to understand industrial products, qualify complex enquiries and keep every serious buyer moving—24/7.</p><div className="hero-actions"><a className="btn btn-primary" href="mailto:help@antbuildz.ai">Build Your AI Agent <Arrow /></a><Link className="btn btn-outline" href="/ai-agent-roles">Explore Agent Roles</Link></div></div><ChatVisual /></div></section>}>
    <section className="section"><div className="container"><SectionIntro eyebrow="FROM ENQUIRY TO HANDOVER" title={<>It does more than <span className="gradient-text">answer questions.</span></>} text="Antbuildz AI gathers the product, technical and commercial context your team needs before it hands over the conversation." /><div className="card-grid three">{[['Understand buyer intent','Interprets jobs, applications and problems in the buyer’s own words.'],['Qualify the requirement','Asks for specifications, quantity, location, timing, budget and constraints.'],['Recommend supported options','Uses approved catalogue information and business rules—not guesses.'],['Prepare the handover','Creates a structured summary for quotation, availability or specialist review.'],['Work across languages','Keeps customer conversations moving across markets and time zones.'],['Improve with your team','Review conversations, fix knowledge gaps and refine Agent instructions.']].map(([t,p], i) => <article className="icon-card" key={t}><span>{['◎','⌁','↗','✓','文','↻'][i]}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>
    <section className="section ink-section"><div className="container split-section"><div><SectionIntro align="left" eyebrow="TRAIN IT ON YOUR BUSINESS" title={<>Approved knowledge in.<br /><span className="yellow-text">Commercially useful answers out.</span></>} text="Add your product catalogues, manuals, FAQs, pricing guidance, rental terms, policies and sales rules. Your team defines what the Agent knows and when it should hand over." /><div className="source-chips"><span>Catalogues</span><span>Datasheets</span><span>Rate sheets</span><span>Policies</span><span>FAQs</span><span>Sales rules</span></div></div><div className="knowledge-card"><p>KNOWLEDGE READINESS</p><strong>92%</strong><div className="progress"><i /></div><ul><li><Tick /> 18 approved sources active</li><li><Tick /> 1,248 products indexed</li><li><Tick /> Handover rules configured</li><li><Tick /> Last tested today</li></ul></div></div></section>
    <section className="section"><div className="container"><SectionIntro eyebrow="BUILT FOR REAL INDUSTRIAL SALES" title="Different products. The same need for better qualification." /><div className="use-case-row">{solutions.slice(0, 4).map(item => <Link href={`/${item.slug}`} key={item.slug}><Image src={item.image} width={720} height={480} sizes="(max-width: 767px) 90vw, 24vw" alt={`${item.navLabel} industrial operations`} /><span>{item.navLabel}</span><small>{item.example}</small></Link>)}</div></div></section>
    <CtaBand title="Give every buyer a sales conversation worth continuing." text="Train an AI Sales Agent around your products, qualification process and handover rules." />
  </ProductPageLayout>;
}

export function ConsolePage() {
  return <ProductPageLayout current="ai-agent-console" hero={<section className="product-hero console-hero"><div className="container"><div className="center-hero"><p className="eyebrow">AI AGENT CONSOLE</p><h1>Control Every Part of Your <span className="gradient-text">AI Sales Operation.</span></h1><p className="hero-lead">Manage knowledge, instructions, workflows, conversations and performance from one focused workspace.</p><div className="hero-actions"><a className="btn btn-primary" href="mailto:help@antbuildz.ai">See the Console <Arrow /></a><Link className="btn btn-outline" href="/ai-agent">Explore AI Sales Agent</Link></div></div><ConsoleVisual /></div></section>}>
    <section className="section"><div className="container"><SectionIntro eyebrow="YOUR TEAM STAYS IN CONTROL" title={<>Train it once. <span className="gradient-text">Keep improving.</span></>} text="The Console turns AI Agent operations into a clear, manageable workflow for sales, product and support teams." /><div className="console-capabilities">{[['Knowledge Base','Keep approved catalogues, policies, FAQs and business information current.','18 sources active'],['Agent Setup','Define tone, scope, commercial boundaries and handover rules.','All rules healthy'],['Playground','Test realistic buyer questions before changing live behaviour.','42 tests passed'],['Conversations','Review intent, recommendations, handovers and knowledge gaps.','428 this month'],['Workflows','Route qualified enquiries and specialist cases to the right team.','7 automations active'],['Analytics','See demand themes, conversion signals and response quality.','18% growth']].map(([t,p,m]) => <article key={t}><span>{t.slice(0,1)}</span><div><h3>{t}</h3><p>{p}</p><b>{m}</b></div></article>)}</div></div></section>
    <section className="section soft-section"><div className="container split-section"><div><SectionIntro align="left" eyebrow="A PRACTICAL OPERATING RHYTHM" title="Build, test, review and improve" /><div className="vertical-steps">{[['01','Add approved knowledge'],['02','Set Agent behaviour'],['03','Test in the Playground'],['04','Review live conversations'],['05','Improve knowledge and rules']].map(([n,t]) => <div key={n}><b>{n}</b><span>{t}</span></div>)}</div></div><div className="audit-panel"><div><span>Response review</span><b>Strong</b></div><p><Tick /> Used approved 20 t excavator specifications</p><p><Tick /> Captured location and project dates</p><p><Tick /> Asked for material and dig-depth context</p><p><Tick /> Routed availability to rental desk</p><small>Reviewed by Sarah · 14 minutes ago</small></div></div></section>
    <CtaBand title="Run your AI Agent with confidence." text="Bring knowledge, controls and customer conversations into one operational Console." />
  </ProductPageLayout>;
}

export function PricingPage() {
  const plans = [
    { name: 'Basic', price: 'S$399', note: 'From manual to structured', features: ['100 AI conversations', '100 product listings', '100 MB knowledge storage', 'Sales + rental Webstore', '1 AI Sales Agent'], cta: 'Start with Basic' },
    { name: 'Premium', price: 'S$599', note: 'From listings to revenue', features: ['200 AI conversations', '300 product listings', '300 MB knowledge storage', 'Quotation and booking automation', 'Lead analytics and integrations'], cta: 'Start with Premium', popular: true },
    { name: 'Pro', price: 'S$899', note: 'From team-dependent to system-driven', features: ['500 AI conversations', '600 product listings', '1 GB knowledge storage', 'Multi-agent support', 'Advanced workflows and data sync'], cta: 'Talk to Sales' },
  ];
  return <SiteShell current="pricing"><section className="simple-hero"><div className="container center-hero"><p className="eyebrow">PRICING</p><h1>Choose the system that fits <span className="gradient-text">how you sell.</span></h1><p className="hero-lead">Start with the AI Webstore Suite bundle, or talk to us about a standalone AI Sales Agent setup.</p></div></section><section className="pricing-section"><div className="container"><div className="pricing-note"><b>AI WEBSTORE SUITE</b><span>Sales + rental bundle · Monthly billing · SGD</span></div><div className="pricing-grid">{plans.map(plan => <article key={plan.name} className={plan.popular ? 'popular' : ''}>{plan.popular && <em>MOST POPULAR</em>}<p className="plan-name">{plan.name}</p><p className="plan-note">{plan.note}</p><div className="price"><strong>{plan.price}</strong><span>/ month</span></div><a className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`} href="mailto:help@antbuildz.ai">{plan.cta} <Arrow /></a><ul>{plan.features.map(f => <li key={f}><Tick /> {f}</li>)}</ul></article>)}</div><p className="fine-print">Prices shown are the current SGD monthly rates reproduced from the established Antbuildz pricing source. Taxes, implementation scope and additional usage may apply; confirm the final commercial proposal with Antbuildz.</p></div></section><section className="section soft-section"><div className="container"><SectionIntro eyebrow="EVERY PLAN INCLUDES" title="The foundation for industrial AI sales" /><div className="trust-grid">{['Multilingual AI conversations','Private knowledge base','Buyer intent and analytics','Encrypted, isolated data','AI testing Playground','Conversation review'].map(t => <div key={t}><Tick /> {t}</div>)}</div></div></section><section className="section"><div className="container narrow"><SectionIntro eyebrow="PRICING FAQ" title="Questions before you choose" /><FaqList items={agentFaqs.slice(0,5)} /></div></section><CtaBand title="Need help choosing the right plan?" text="Share your catalogue size, enquiry volume and workflow. We’ll recommend a practical starting point." /></SiteShell>;
}

function FaqList({ items }: { items: ReadonlyArray<readonly [string, string]> }) {
  return <div className="faq-list">{items.map(([q,a], i) => <details key={q} open={i === 0}><summary><span>{q}</span><b>+</b></summary><p>{a}</p></details>)}</div>;
}

export function ResourcesPage() {
  return <SiteShell current="resources"><section className="simple-hero resource-hero"><div className="container center-hero"><p className="eyebrow">RESOURCES</p><h1>Practical Guides for <span className="gradient-text">Industrial AI Sales.</span></h1><p className="hero-lead">Understand AI Agents, prepare your product knowledge and build a more useful buyer journey.</p></div></section><section className="section"><div className="container"><div className="resource-grid">{resourceCards.map((card, i) => <article className={i === 0 ? 'featured-resource' : ''} key={card.title}><Image src={card.image} width={900} height={600} sizes={i === 0 ? '(max-width: 767px) 90vw, 50vw' : '(max-width: 767px) 90vw, 24vw'} alt={`${card.title} resource`} /><div><span>{card.tag}</span><h2>{card.title}</h2><p>{card.text}</p><Link href={card.href}>Explore the resource <Arrow /></Link></div></article>)}</div></div></section><section className="section soft-section" id="readiness"><div className="container split-section"><div><SectionIntro align="left" eyebrow="START WITH YOUR KNOWLEDGE" title="Five things to prepare before you build an AI Agent" /><ol className="number-list"><li><b>01</b>Approved product catalogues and specifications</li><li><b>02</b>Frequently asked buyer questions</li><li><b>03</b>Pricing, rental and commercial guidance</li><li><b>04</b>Qualification questions and handover rules</li><li><b>05</b>Policies, locations and service coverage</li></ol></div><div className="resource-poster"><Image src="/resources/getting-ready.jpg" width={900} height={600} sizes="(max-width: 980px) 90vw, 45vw" alt="Industrial team preparing product knowledge for AI" /><span>AI READINESS CHECKLIST</span><h3>Turn what your team knows into approved, usable knowledge.</h3></div></div></section><CtaBand title="Want a guided AI readiness session?" text="We’ll help you identify the knowledge, workflow and buyer questions needed for a reliable first Agent." /></SiteShell>;
}

export function RolesPage() {
  return <SiteShell current="ai-agent-roles"><section className="simple-hero roles-hero"><div className="container center-hero"><p className="eyebrow">AI AGENT ROLES</p><h1>One Platform. <span className="gradient-text">Specialised AI Roles.</span></h1><p className="hero-lead">Deploy focused Agents across sales, product, service and after-sales workflows—each grounded in the knowledge and rules you approve.</p></div></section><section className="section"><div className="container"><div className="roles-grid">{roleCards.map(([title,text,detail], i) => <article key={title}><span>0{i+1}</span><div><p className="eyebrow">SPECIALISED ROLE</p><h2>{title}</h2><p>{text}</p><b>{detail}</b></div></article>)}</div></div></section><section className="section ink-section"><div className="container"><SectionIntro eyebrow="A CONNECTED TEAM" title={<>Different roles. One approved <span className="yellow-text">knowledge foundation.</span></>} text="Give each Agent a clear purpose while maintaining shared product truth, consistent commercial boundaries and visible human handovers." /><div className="role-flow"><div>Product knowledge</div><span>→</span><div>Role instructions</div><span>→</span><div>Buyer conversation</div><span>→</span><div>Human handover</div></div></div></section><section className="section"><div className="container narrow"><SectionIntro eyebrow="ROLE FAQ" title="Build the right AI team" /><FaqList items={agentFaqs.slice(1,7)} /></div></section><CtaBand title="Start with the role that creates the clearest value." text="We’ll help map one focused Agent to your products, customers and team workflow." /></SiteShell>;
}

export function FaqPage() {
  const gettingStartedFaqs = [["How do we get started?", "Book a discovery session, share your core product information and explain how your team qualifies and hands over enquiries. Antbuildz can then recommend a practical first Agent, Webstore or combined setup."],["Do we need to replace our existing website?", "No. The AI Webstore Suite can be a standalone branded destination or support the product, catalogue, rental or quotation journey alongside an existing website."],["Can we start small?", "Yes. A focused product range, one qualification workflow and one clear handover path is often the best way to validate value before expanding."]] as const;
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...agentFaqs, ...gettingStartedFaqs].map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
  return <SiteShell current="faqs"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><section className="simple-hero faq-hero"><div className="container center-hero"><p className="eyebrow">ANTBUILDZ AI FAQS</p><h1>Answers About Your <span className="gradient-text">AI Agent.</span></h1><p className="hero-lead">AI-only guidance for the AI Agent, AI Webstore Suite, AI Agent Console, knowledge, security and deployment.</p></div></section><section className="section"><div className="container faq-layout"><aside><p>ON THIS PAGE</p><a href="#agent">AI Agent</a><a href="#knowledge">Knowledge & control</a><a href="#webstore">AI Webstore Suite</a><a href="#commercial">Plans & getting started</a></aside><div><section id="agent"><p className="eyebrow">AI AGENT</p><FaqList items={agentFaqs.slice(0,4)} /></section><section id="knowledge"><p className="eyebrow">KNOWLEDGE & CONTROL</p><FaqList items={agentFaqs.slice(4,7)} /></section><section id="webstore"><p className="eyebrow">AI WEBSTORE SUITE</p><FaqList items={agentFaqs.slice(7)} /></section><section id="commercial"><p className="eyebrow">GETTING STARTED</p><FaqList items={gettingStartedFaqs} /></section></div></div></section><CtaBand title="Still have an AI question?" text="Tell us about your products and customer conversations. We’ll give you a practical answer." /></SiteShell>;
}

export function AboutPage() {
  return <SiteShell current="about"><section className="about-hero"><div className="container about-hero-grid"><div className="hero-copy"><p className="eyebrow">ABOUT ANTBUILDZ</p><h1>Built From Industry. <span className="gradient-text">Designed for What Comes Next.</span></h1><p className="hero-lead">Antbuildz brings practical AI to equipment, rental and industrial product businesses—helping buyers get better answers and sales teams act on clearer opportunities.</p></div><Image src="/images/industrial-ai.png" width={1792} height={1024} sizes="(max-width: 980px) 90vw, 55vw" alt="Industrial workers using connected digital tools at an equipment site" /></div></section><section className="section"><div className="container story-grid"><div><p className="eyebrow">OUR STORY</p><h2>From rental marketplace to industrial AI platform</h2></div><div><p>Antbuildz began with a practical challenge: industrial equipment is difficult to discover, compare, rent and buy online. Product information is complex. Buyer requirements arrive incomplete. Sales teams spend valuable time asking the same qualifying questions.</p><p>That operating reality shaped our approach to AI. Instead of a generic chatbot, we built an Industrial AI Sales Agent that works with approved product knowledge, qualification logic, commercial boundaries and human handovers.</p><p>Today, the AI Sales Agent, AI Webstore Suite and AI Agent Console form one connected system for modern industrial commerce.</p></div></div></section><section className="section soft-section"><div className="container"><SectionIntro eyebrow="WHAT WE BELIEVE" title="AI should make industrial expertise easier to reach" /><div className="values-grid">{[['Practical before impressive','The best AI experience is the one that helps a buyer take the next useful step.'],['Industry context matters','Specifications, fitment, availability, location and commercial terms cannot be treated as generic text.'],['Your team stays accountable','AI should prepare, qualify and route work while people keep control of technical and commercial decisions.'],['Knowledge creates advantage','When approved business knowledge becomes accessible, every conversation can become more consistent.']].map(([t,p], i) => <article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></section><section className="section"><div className="container split-section"><div><SectionIntro align="left" eyebrow="OUR VISION" title={<>Powering the next era of <span className="gradient-text">industrial rental and sales.</span></>} text="We see a future where every industrial business can offer fast, accurate, always-available product guidance without losing the specialist judgment that customers trust." /><Link className="btn btn-dark" href="/ai-agent">Explore Antbuildz AI <Arrow /></Link></div><div className="vision-card"><Image src="/images/equipment-island.png" width={1014} height={558} sizes="(max-width: 980px) 90vw, 45vw" alt="Industrial machinery and equipment ecosystem" /><div><strong>Built in Singapore</strong><span>Designed for industrial teams everywhere</span></div></div></div></section><CtaBand title="Let’s build a better industrial buyer journey." text="Talk to Antbuildz about your products, customers and sales workflow." /></SiteShell>;
}

export function SolutionPage({ slug }: { slug: string }) {
  const solution = getSolution(slug);
  if (!solution) return <NotFoundPage />;
  return <SiteShell current={slug}><section className="solution-hero"><div className="solution-image"><Image src={solution.image} width={1600} height={1000} sizes="100vw" priority alt={`${solution.navLabel} industrial operations`} /><div /></div><div className="container solution-hero-content"><p className="eyebrow">ANTBUILDZ AI SALES AGENT FOR {solution.navLabel.toUpperCase()}</p><h1>AI Sales Agent for <span>{solution.accent}</span></h1><p>{solution.summary}</p><div className="hero-actions"><a className="btn btn-primary" href="mailto:help@antbuildz.ai">Book a Demo <Arrow /></a><Link className="btn btn-outline-light" href="/ai-agent">Explore AI Sales Agent</Link></div></div></section><section className="section"><div className="container"><SectionIntro eyebrow="WHO IT’S FOR" title={`Built for ${solution.navLabel.toLowerCase()} businesses with complex product conversations`} /><div className="audience-grid">{solution.audiences.map((item, i) => <article key={item}><span>0{i+1}</span><h3>{item}</h3><p>Give buyers product guidance grounded in your approved information and operating context.</p></article>)}</div></div></section><section className="section soft-section"><div className="container split-section"><div><SectionIntro align="left" eyebrow="A REAL BUYER REQUIREMENT" title="From an incomplete question to a useful sales brief" /><blockquote>“{solution.example}”</blockquote><p className="section-copy">The AI Sales Agent asks the next relevant questions, checks approved product information and prepares the details your team needs to continue.</p></div><div className="mini-workflow">{solution.workflow.map((step,i) => <div key={step}><b>0{i+1}</b><span>{step}</span></div>)}<p><Tick /> {solution.outcome}</p></div></div></section><section className="section"><div className="container"><SectionIntro eyebrow="HOW ANTBUILDZ AI WORKS" title="Train it once. Keep it working." text="Connect approved company knowledge, product information and sales rules. Then review conversations and improve the Agent from one Console." /><div className="steps-grid">{[['01','Ingest','Catalogues, specifications, policies and commercial guidance.'],['02','Retrieve','Find the approved information relevant to the buyer’s requirement.'],['03','Reason','Ask useful qualification questions and compare supported options.'],['04','Act','Prepare a structured handover for quotation or specialist review.']].map(([n,t,p]) => <article key={n}><b>{n}</b><h3>{t}</h3><p>{p}</p></article>)}</div></div></section><section className="section ink-section"><div className="container split-section"><div><SectionIntro align="left" eyebrow="YOUR TEAM KEEPS CONTROL" title={<>One Console for knowledge, instructions and <span className="yellow-text">conversation quality.</span></>} text="Set what the Agent may share, when it should involve a person and how it should qualify each enquiry." /><Link className="btn btn-primary" href="/ai-agent-console">Explore AI Agent Console <Arrow /></Link></div><div className="control-stack"><div><Tick /><span><b>Approved knowledge</b><small>Product, policy and company sources</small></span></div><div><Tick /><span><b>Qualification rules</b><small>Requirements, constraints and handovers</small></span></div><div><Tick /><span><b>Conversation review</b><small>Intent, gaps and response quality</small></span></div></div></div></section><section className="section"><div className="container narrow"><SectionIntro eyebrow="COMMON QUESTIONS" title={`Antbuildz AI for ${solution.navLabel}`} /><FaqList items={[[`Can Antbuildz AI understand our ${solution.navLabel.toLowerCase()} products?`,`Yes. Train the Agent with your approved catalogues, specifications, policies and sales guidance. Start with a focused product range and expand as knowledge quality is confirmed.`],["Will it make final technical or commercial decisions?","No. The Agent supports qualification and recommendation within your rules. Your team retains control of final suitability, availability, pricing and commercial commitments."],["Can it hand enquiries to different teams?","Yes. Configure handover rules by product type, location, enquiry quality or specialist requirement in the AI Agent Console."]] as const} /></div></section><CtaBand title={`Build an AI Sales Agent for ${solution.navLabel}.`} text="Show us your catalogue, common buyer questions and handover process. We’ll map a practical first workflow." /></SiteShell>;
}

export function NotFoundPage() {
  return <SiteShell><section className="simple-hero"><div className="container center-hero"><p className="eyebrow">404</p><h1>That page is not in the <span className="gradient-text">catalogue.</span></h1><p className="hero-lead">Return to the Antbuildz AI homepage or explore the AI Sales Agent.</p><div className="hero-actions"><Link className="btn btn-primary" href="/">Back to Home</Link><Link className="btn btn-outline" href="/ai-agent">AI Sales Agent</Link></div></div></section></SiteShell>;
}

export function RoutedPage({ slug }: { slug: string }) {
  if (getSolution(slug)) return <SolutionPage slug={slug} />;
  switch (slug) {
    case 'ai-webstore-suite': return <WebstorePage />;
    case 'ai-agent': return <SalesAgentPage />;
    case 'ai-agent-console': return <ConsolePage />;
    case 'pricing': return <PricingPage />;
    case 'resources': return <ResourcesPage />;
    case 'ai-agent-roles': return <RolesPage />;
    case 'faqs': return <FaqPage />;
    case 'about': return <AboutPage />;
    default: return <NotFoundPage />;
  }
}
