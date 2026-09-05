'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { OriginalAntbuildzApp } from '../original-antbuildz-app';
import { EmmaAvatar } from '../emma-avatar';
import { correctWebstoreCopy } from '../../lib/ai-webstore-copy';
import { removeHeadingFullStops } from '../../lib/title-punctuation';
import { CHAT_TURNS, DEMO_PRODUCTS, INVENTORY_PRODUCTS, INVENTORY_FIELDS, STORY_STAGES, advanceStoryTime, getStoryFrame, productDemoPath } from './storyboard';
import { AI_WEBSTORE_PAGE, syncWebstoreMetadata } from './preview-metadata';
import styles from './webstore-concept.module.css';

const AI_WEBSTORE_PATH = AI_WEBSTORE_PAGE.path;
type Product = typeof DEMO_PRODUCTS[number];

function ProductImage({ product, className = '' }: { product: Product; className?: string }) {
  // Local manufacturer imagery, matched to the model; see PRODUCT-SOURCES.md.
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={className} src={product.image} alt={product.imageAlt} width={720} height={720} draggable={false} />;
}

function BrowserBar({ address }: { address: string }) {
  return <div className={styles.browserBar}><span className={styles.dots}><i /><i /><i /></span><span className={styles.address}>{address}</span><span className={styles.browserMore}>···</span></div>;
}

function Tick() { return <span className={styles.tick}>✓</span>; }
function Spark() { return <span className={styles.spark}>✦</span>; }

const STORE_MENU_ICONS = {
  store: 'M3 10v10h18V10M2 6l2-3h16l2 3v4a3 3 0 0 1-5 2 3 3 0 0 1-5 0 3 3 0 0 1-5 0 3 3 0 0 1-5-2V6Zm7 14v-6h6v6M2 7h20',
  catalogue: 'M5 3h14l2 5v13H3V8l2-5Zm-2 5h18M8 12a4 4 0 0 0 8 0',
  calendar: 'M4 5h16v16H4V5Zm3-3v6m10-6v6M4 10h16M8 14h1m6 0h1m-8 3h1m6 0h1',
  document: 'M5 3h9l5 5v13H5V3Zm9 0v6h5M8 13h8m-8 4h6',
  help: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM9 9a3 3 0 1 1 4 3c-1 .4-1 1-1 2m0 3h.01',
  shield: 'M12 2 3 6v6c0 5 9 10 9 10s9-5 9-10V6l-9-4Z',
  profile: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM9 3h6l1 3 3 1 2 5-2 5-3 1-1 3H9l-1-3-3-1-2-5 2-5 3-1 1-3Z',
  chart: 'M3 3v18h18M7 16V9m5 7V5m5 11v-5',
  billing: 'M3 5h18v14H3V5Zm0 5h18',
} as const;

function StoreMenuIcon({ name }: { name: keyof typeof STORE_MENU_ICONS }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={STORE_MENU_ICONS[name]} /></svg>;
}

function StoreSidebar() {
  // These are visual builder controls in the labelled, illustrative animation.
  return <div className={styles.storeSidebar} data-store-sidebar>
    <div className={styles.storeSidebarHeading}><span>WEBSTORE</span><span>⌄</span></div>
    <div className={styles.storeBuilderItem}><StoreMenuIcon name="store" /><strong>Store Builder</strong><span>⌄</span></div>
    <div className={styles.storeSidebarPages}>
      {([
        ['catalogue', 'Product Catalogue'], ['calendar', 'Sales & Rental'], ['document', 'Blog'],
        ['help', 'FAQs'], ['shield', 'Policies'], ['profile', 'Store Profile'],
      ] as const).map(([icon, label], index) => <div className={styles.storeSidebarItem} data-selected={index === 0} key={label}><StoreMenuIcon name={icon} /><span>{label}</span></div>)}
    </div>
    <div className={styles.storeSidebarTools}><div className={styles.storeSidebarItem}><StoreMenuIcon name="chart" /><span>Analytics</span><span>›</span></div><div className={styles.storeSidebarItem}><StoreMenuIcon name="billing" /><span>Billing</span><span>›</span></div></div>
  </div>;
}

function EquipmentSource() {
  return <div className={styles.source}>
    <div className={styles.sourceHeader}><span className={styles.fileIcon}>▤</span><div><strong>product-models.csv</strong><span>Your product model list</span></div></div>
    <div className={styles.sourceRows}>{INVENTORY_PRODUCTS.map((product, index) => <div className={styles.sourceRow} style={{ '--item': index } as CSSProperties} key={product.id}><span className={styles.rowCheck}>✓</span><span>{product.model}</span><small>Model</small></div>)}</div>
    <div className={styles.sourceFoot}><span>{INVENTORY_PRODUCTS.length} models selected</span><span className={styles.dragHint}>Add models ↗</span></div>
    <div className={styles.dragCursor}>↖<span>{INVENTORY_PRODUCTS.length} models</span></div>
  </div>;
}

function Inventory({ frame }: { frame: ReturnType<typeof getStoryFrame> }) {
  const generating = frame.phase === 'enrich';
  const complete = frame.enrichedFields === INVENTORY_FIELDS.length;
  const generatedCount = frame.enrichedFields * INVENTORY_PRODUCTS.length;
  const totalCount = INVENTORY_FIELDS.length * INVENTORY_PRODUCTS.length;
  const status = complete ? 'Product details ready for review' : generating ? 'AI is adding product details…'
    : frame.phase === 'model' ? 'Models added. Preparing product details…'
      : frame.phase === 'drop' ? 'Adding your models…' : 'Start with your product models';
  return <div className={styles.inventory}>
    <BrowserBar address="Your workspace / Inventory" />
    <div className={styles.inventoryBody}>
      <div className={styles.inventoryTitle}><div><span className={styles.miniLabel}>AI WEBSTORE SUITE</span><strong>Product inventory</strong></div><span className={styles.aiTag}><Spark /> AI enrichment</span></div>
      <div className={styles.inventoryColumns}><span>Model <small>Your input</small></span>{INVENTORY_FIELDS.map(field => <span key={field.key}>{field.label}</span>)}</div>
      <div className={styles.inventoryRows}>{INVENTORY_PRODUCTS.map((product, index) => <div className={styles.inventoryRow} style={{ '--item': index } as CSSProperties} key={product.id}>
        <div className={styles.inventoryProduct} data-label="Model · input" data-provided-model={product.model}><strong>{product.model}</strong><small>{product.id}</small></div>
        {INVENTORY_FIELDS.map((field, column) => <span className={styles.attribute} data-label={field.label} data-inventory-field={field.key} data-enriched={frame.enrichedFields > column} data-generating={generating && frame.enrichedFields === column} key={field.key}><i /><b>{product[field.key]}</b></span>)}
      </div>)}</div>
      <div className={styles.dropZone}><span>＋</span> Drop models to create listings</div>
      <div className={styles.inventoryStatus}><div className={styles.enrichmentStatus}>{complete ? <Tick /> : <Spark />}<span>{status}</span><small>{generatedCount}/{totalCount} fields</small></div><div className={styles.enrichmentProgress}><span style={{ width: `${frame.enrichedFields / INVENTORY_FIELDS.length * 100}%` }} /></div></div>
    </div>
    <div className={styles.enrichmentNote}><Tick /><span>{INVENTORY_PRODUCTS.length} listings ready for review</span></div>
  </div>;
}

function PhotoUpload() {
  return <div className={styles.photoUpload}>
    <span className={styles.photoIcon}>↑</span><div><strong>Choose your featured products</strong><span>Add photos to bring your listings to life.</span></div>
    <div className={styles.photoFiles}>{DEMO_PRODUCTS.map((product, index) => <div className={styles.photoFile} style={{ '--item': index } as CSSProperties} key={product.id}><ProductImage product={product} /><small>{product.id}.jpg</small><Tick /></div>)}</div>
    <span className={styles.uploadLabel}>{DEMO_PRODUCTS.length} featured listings ready <Tick /></span>
  </div>;
}

function WebstoreFrame() {
  return <div className={styles.webstore} data-webstore-frame>
    <BrowserBar address="your-store / products" />
    <div className={styles.storeWorkspace}>
      <StoreSidebar />
      <div className={styles.storePreview} data-store-preview>
    <div className={styles.storeHero} data-store-hero><div><span>INDUSTRIAL SALES & RENTAL</span><strong>Equipment. Tools.<br />Parts & supplies.</strong><p>Construction · Manufacturing · Maintenance</p></div></div>
    <div className={styles.storeCatalogue} data-store-catalogue><strong>Our product range <small>{DEMO_PRODUCTS.length} featured products</small></strong><span>All categories <span>⌄</span></span></div>
      </div>
    </div>
  </div>;
}

function DiscoveryHint() {
  return <div className={styles.pageReady} data-discovery-hint>
    <div className={styles.discoveryStep}>
      <span className={styles.discoveryIcon}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z M4 7.5l8 4.5 8-4.5 M12 12v9 M8 5.25l8 4.5" /></svg></span>
      <span><strong>Product identity</strong><small>Brand · model · specifications</small></span>
    </div>
    <span className={styles.discoveryArrow}>→</span>
    <div className={styles.discoveryStep}>
      <span className={styles.discoveryIcon}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="m10 13 4-4 M8 15l-1 1a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0 M16 9l1-1a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0" transform="translate(1 0) scale(.92)" /></svg></span>
      <span><strong>Unique product URL</strong><small>One page. One product.</small></span>
    </div>
    <span className={styles.discoveryArrow}>→</span>
    <div className={styles.discoveryStep}>
      <span className={styles.discoveryIcon}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="10" cy="11" r="6" /><path d="m14.5 15.5 5 5 M19 2v5 M16.5 4.5h5" /></svg></span>
      <span><strong>Search & AI discovery</strong><small>Supports SEO & GEO</small></span>
    </div>
  </div>;
}

function ProductPage({ product, index }: { product: Product; index: number }) {
  // Keep these nodes mounted as they move from the Webstore into the phone.
  return <div className={styles.productPage} style={{ '--item': index } as CSSProperties} data-product-id={product.id} data-product-index={index} data-product-url={productDemoPath(product.slug)} data-listing-type={product.listingType}>
    <div className={styles.fullProduct}>
      <div className={styles.productPicture}><ProductImage product={product} /></div>
      <div className={styles.productContent}>
        <div className={styles.productTitle}><strong>{product.brand} {product.model}</strong><span>{product.name}</span></div>
        <div className={styles.productLocation}><span>{product.listingType === 'rental' ? 'For rental' : 'For sale'}</span><i aria-hidden="true" /><span>{product.pricingContext}</span></div>
        <div className={styles.pricingGrid} data-pricing-grid>{product.pricing.map(price => <span key={price.label}>{price.label}<b>{price.value}</b></span>)}</div>
      </div>
    </div>
    <div className={styles.recommendationProduct}><ProductImage product={product} /><div><strong>{product.brand} {product.model}</strong><small>{product.summary}</small><span className={styles.productLink}>{product.listingType === 'rental' ? `Rental · ${product.pricing[0].value}/day` : `Sale · ${product.pricing[0].value}`} <span>↗</span></span></div></div>
  </div>;
}

function Conversation({ frame }: { frame: ReturnType<typeof getStoryFrame> }) {
  const initialQuestionVisible = !['idle', 'sync', 'recommendations', 'initial-buyer-typing'].includes(frame.chatBeat);
  const initialReplyVisible = !['idle', 'sync', 'recommendations', 'initial-buyer-typing', 'initial-question', 'initial-agent-typing'].includes(frame.chatBeat);
  return <>
    <div className={styles.syncSummary}><strong>From your store<br />to the conversation.</strong><p>Emma shares your product cards, then helps buyers explain what they need.</p><div><span><Tick /> The same products and photos</span><span><Tick /> Rental dates and purchase quantities</span><span><Tick /> Details for your team to quote</span></div><span className={styles.syncArrow}>⟶</span></div>
    <div className={styles.conversation} data-phone-frame>
      <div className={styles.phoneStatus}><span>9:41</span><svg viewBox="0 0 48 14" fill="currentColor"><path d="M1 10h3v3H1zm5-3h3v6H6zm5-3h3v9h-3zm5-3h3v12h-3z" /><rect x="27" y="3" width="17" height="9" rx="2" fill="none" stroke="currentColor" /><rect x="29" y="5" width="12" height="5" rx="1" /><path d="M46 6h1v3h-1z" /></svg></div>
      <div className={styles.chatHeader}><span className={styles.chatBack}>‹</span><EmmaAvatar className={styles.agentAvatar} /><div><strong>Emma</strong><span className={styles.connected}><i /> Your Webstore · AI Sales Agent</span></div><span className={styles.chatMore}>···</span></div>
      <div className={styles.chatBody}><div className={styles.chatTranscript}>
        <span className={styles.chatDate}>Today</span>
        <div className={styles.buyerTyping} data-visible={frame.chatBeat === 'initial-buyer-typing'} aria-hidden="true"><i /><i /><i /><span>Buyer is typing</span></div>
        <div className={styles.buyerMessage} data-visible={initialQuestionVisible}>Can you help me confirm whether this reach truck fits my warehouse?</div>
        <div className={styles.chatReply} data-typing={frame.chatBeat === 'initial-agent-typing'}><div className={styles.agentMessage} data-visible={initialReplyVisible}><span className={styles.agentByline}><EmmaAvatar className={styles.replyAvatar} size={16} decorative /> Emma</span><span>Yes. What load, lift height, aisle width and hire period do you need?</span></div><div className={styles.chatTyping}><i /><i /><i /><span>Emma is typing</span></div></div>
        <div className={styles.chatFollowups}>{CHAT_TURNS.map((turn, index) => {
          const turnName = index === 0 ? 'rental' : 'sales';
          const buyerTyping = frame.chatBeat === `${turnName}-buyer-typing`;
          const questionVisible = frame.chatTurn >= index;
          return <div className={styles.chatTurn} data-chat-turn={index} data-visible={questionVisible || buyerTyping} data-question-visible={questionVisible} data-buyer-typing={buyerTyping} data-replied={frame.chatTurn > index || (frame.chatTurn === index && frame.chatBeat.endsWith('-reply'))} data-agent-typing={frame.chatTurn === index && frame.chatBeat === `${turnName}-agent-typing`} key={turn.question}>
          <div className={styles.followupBuyerTyping} aria-hidden="true"><i /><i /><i /><span>Buyer is typing</span></div>
          <div className={styles.followupBuyer}>{turn.question}</div>
          <div className={styles.followupResponse}>
            <div className={styles.followupReply}><span className={styles.agentByline}><EmmaAvatar className={styles.replyAvatar} size={16} decorative /> Emma</span><span>{turn.reply}</span></div>
            <div className={styles.chatTyping}><i /><i /><i /><span>Emma is typing</span></div>
          </div>
        </div>})}</div>
      </div></div>
      <div className={styles.chatInput}><span>What would you like to know?</span><span>↑</span></div>
    </div>
  </>;
}

export function ListingStory() {
  const storyRef = useRef<HTMLDivElement>(null);
  const canvasViewportRef = useRef<HTMLDivElement>(null);
  const elapsedRef = useRef(0);
  const [frame, setFrame] = useState(() => getStoryFrame(0));
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    const viewport = canvasViewportRef.current;
    if (!viewport) return;
    // Only the illustrative scene scales. The stage tabs keep their normal
    // readable size; mobile uses its existing stacked scene.
    const fit = () => {
      if (window.innerWidth < 980) return;
      const scale = Math.min(1, viewport.clientWidth / 1120, viewport.clientHeight / 660);
      viewport.style.setProperty('--scene-scale', String(Math.max(0.1, scale)));
    };
    const observer = new ResizeObserver(fit);
    observer.observe(viewport);
    window.addEventListener('resize', fit);
    fit();
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', fit);
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => {
      setReducedMotion(media.matches);
      if (media.matches) {
        elapsedRef.current = STORY_STAGES[2].preview;
        setFrame(getStoryFrame(elapsedRef.current, true));
      }
    };
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateMotion();
    updateVisibility();
    media.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.15 });
    if (storyRef.current) observer.observe(storyRef.current);
    return () => {
      media.removeEventListener('change', updateMotion);
      document.removeEventListener('visibilitychange', updateVisibility);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || !visible || !pageVisible) return;
    let request = 0;
    let previous = performance.now();
    let rendered = getStoryFrame(elapsedRef.current);
    const tick = (now: number) => {
      // Absorb brief dropped frames instead of making the conversation appear
      // to pause, while still preventing a large jump after a long stall.
      elapsedRef.current = advanceStoryTime(elapsedRef.current, Math.min(now - previous, 250));
      previous = now;
      const next = getStoryFrame(elapsedRef.current);
      if (rendered.phase !== next.phase || rendered.enrichedFields !== next.enrichedFields || rendered.chatBeat !== next.chatBeat) {
        rendered = next;
        setFrame(next);
      }
      request = requestAnimationFrame(tick);
    };
    request = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(request);
  }, [paused, reducedMotion, visible, pageVisible]);

  const showStage = (stage: number) => {
    elapsedRef.current = stage === 2 && !reducedMotion ? STORY_STAGES[stage].start : STORY_STAGES[stage].preview;
    setFrame(getStoryFrame(elapsedRef.current));
    setPaused(stage !== 2 || reducedMotion);
  };
  return <div className={styles.story} ref={storyRef} style={{ '--chat-scroll': `${frame.chatScroll}px` } as CSSProperties} data-stage={frame.stage} data-phase={frame.phase} data-chat-beat={frame.chatBeat} data-chat-loop={frame.stage === 2} data-enriched-fields={frame.enrichedFields} data-visible={visible} data-paused={paused || reducedMotion || !visible || !pageVisible} data-reduced-motion={reducedMotion}>
    <div className={styles.glassFrame}>
    <div className={styles.stageNav} role="group" aria-label="Explore the AI listing workflow">{STORY_STAGES.map((stage, index) => <button key={stage.label} onClick={() => showStage(index)} aria-pressed={frame.stage === index} aria-controls="webstore-listing-story"><span className={styles.stageNumber}>{String(index + 1).padStart(2, '0')}</span><span><strong>{stage.label}</strong><small>{stage.detail}</small></span><span className={styles.stageArrow}>↗</span></button>)}</div>
    <div className={styles.canvasViewport} ref={canvasViewportRef}>
    <div id="webstore-listing-story" className={styles.canvas} aria-hidden="true">
      {frame.stage < 2 && <div className={styles.sceneLabel}><span>{frame.stage === 0 ? 'FROM MODEL TO LISTING' : 'BUILT FOR DISCOVERY'}</span><span>{frame.stage === 0 ? 'Add the model. AI fills in the details.' : 'Every product. Its own page and URL.'}</span></div>}
      <EquipmentSource /><Inventory frame={frame} /><PhotoUpload /><WebstoreFrame />
      <DiscoveryHint />
      <Conversation frame={frame} />
      {DEMO_PRODUCTS.map((product, index) => <ProductPage product={product} index={index} key={product.id} />)}
    </div>
    </div>
    </div>
    <p className={styles.srOnly}>This demo starts with five real product models across material handling, power tools and replacement parts. AI fills seven columns, giving you 35 details to review. Three featured products then appear in the demonstration Webstore: one rental listing and two sales listings. A discovery hint connects each product’s identity and structured details with its own page and unique URL, supporting search engine optimisation (SEO) and generative engine optimisation (GEO). This illustrates a foundation for discovery, not guaranteed indexing, rankings or AI citations. The reach-truck card shows example daily, weekly and monthly rates from a comparable 1.6-ton market listing. The Bosch rotary hammer and NSK bearing cards each show one exact-model public sale price. The prices were checked on 31 August 2026 and do not represent live stock, availability or a quotation. Ratings and verified badges are not shown. The same cards move into Emma’s recommendations, followed by an illustrative conversation about rental requirements, purchase quantities and delivery. The bearing image is a manufacturer cutaway illustration. Product selection and specifications require confirmation for the intended application and configuration. Upload, AI enrichment, search, publishing and chat are illustrated, not connected to live services.</p>
  </div>;
}

/** Canonical AI Webstore Suite page using the selected listing workflow. */
export function WebstoreConceptPage() {
  const [mount, setMount] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let container: HTMLDivElement | null = null;
    let oldVisual: HTMLElement | null = null;
    const root = document.getElementById('root');
    if (!root) return;
    let header: HTMLElement | null = null;
    const syncHeaderScroll = () => {
      header?.classList.toggle('is-scrolled', window.scrollY > 24);
    };
    const measureHeader = () => {
      if (header) root.style.setProperty('--preview-header-height', `${header.getBoundingClientRect().height}px`);
    };
    const headerSizeObserver = new ResizeObserver(measureHeader);
    const attachHeader = () => {
      const nextHeader = root.querySelector<HTMLElement>('.antbuildz-public-header');
      if (!nextHeader) return;
      if (nextHeader !== header) {
        if (header) {
          headerSizeObserver.unobserve(header);
          header.classList.remove('is-homepage-overlay', 'is-scrolled');
        }
        header = nextHeader;
        header.classList.add('is-homepage-overlay');
        headerSizeObserver.observe(header);
        measureHeader();
      }
      // Reuse the public header's existing transparent/solid styling and menus.
      header.classList.add('is-homepage-overlay');
      syncHeaderScroll();
    };
    const attach = () => {
      if (window.location.pathname !== AI_WEBSTORE_PATH) return;
      attachHeader();
      // Reapply to newly mounted tabs/FAQs even after the visual is attached.
      correctWebstoreCopy(root, window.location.pathname);
      removeHeadingFullStops(root, window.location.pathname);
      if (container?.isConnected) return;
      const visual = root.querySelector<HTMLElement>('.ws2-hero-visual');
      if (!visual) return;
      oldVisual = visual;
      // Keep the legacy component mounted for the untouched surrounding page.
      // It is hidden and inert, not removed from another React root.
      visual.hidden = true;
      visual.inert = true;
      visual.setAttribute('aria-hidden', 'true');
      container = document.createElement('div');
      container.className = styles.mount;
      visual.insertAdjacentElement('afterend', container);
      setMount(container);
    };
    // Native navigation leaves the product document cleanly. The copied router
    // must not carry the portal into another public page.
    const navigate = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null;
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.download || (link.target && link.target !== '_self')) return;
      const target = new URL(link.href, location.href);
      if (target.origin !== location.origin || target.pathname === AI_WEBSTORE_PATH) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      location.assign(target.href);
    };
    // Batch React's animated text mutations instead of recursing in a
    // MutationObserver microtask; leave time for painting and interaction.
    let correctionFrame = 0;
    const scheduleAttach = () => {
      if (correctionFrame) return;
      correctionFrame = window.requestAnimationFrame(() => {
        correctionFrame = 0;
        attach();
      });
    };
    const observer = new MutationObserver(scheduleAttach);
    observer.observe(root, { childList: true, subtree: true, characterData: true });
    const syncHead = () => syncWebstoreMetadata(document, window.location.pathname);
    const headObserver = new MutationObserver(syncHead);
    headObserver.observe(document.head, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['content', 'href'] });
    document.addEventListener('click', navigate, true);
    window.addEventListener('scroll', syncHeaderScroll, { passive: true });
    syncHead();
    attach();
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(correctionFrame);
      headObserver.disconnect();
      document.removeEventListener('click', navigate, true);
      window.removeEventListener('scroll', syncHeaderScroll);
      headerSizeObserver.disconnect();
      header?.classList.remove('is-homepage-overlay', 'is-scrolled');
      root.style.removeProperty('--preview-header-height');
      if (container) container.hidden = true;
      if (oldVisual) {
        oldVisual.hidden = false;
        oldVisual.inert = false;
        oldVisual.removeAttribute('aria-hidden');
      }
    };
  }, []);

  return <><OriginalAntbuildzApp className={styles.conceptPage} />{mount && createPortal(<ListingStory />, mount)}</>;
}
