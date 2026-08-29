/** Manufacturer facts checked on 28 August 2026; the workflow is not live stock.
 * Keep model, image and source together. See PRODUCT-SOURCES.md for the audit.
 */
export const PRODUCT_FACTS_CHECKED_ON = '2026-08-28';
// Commercial modes illustrate the workflow, not a supplier's stock or rates.
// Replace quote placeholders only with approved seller pricing.
const RENTAL_PRICING = [
  { label: 'Rental / day', value: 'Get Quote' },
  { label: 'Rental / month', value: 'Get Quote' },
  { label: 'Sale price', value: '—' },
] as const;
const SALES_PRICING = [
  { label: 'Rental / day', value: '—' },
  { label: 'Rental / month', value: '—' },
  { label: 'Sale price', value: 'Get Quote' },
] as const;
export const DEMO_PRODUCTS = [
  {
    id: 'EQ-0101', name: 'Electric reach truck', shortName: 'Reach truck',
    brand: 'Jungheinrich', model: 'ETV 216i', category: 'Material handling',
    slug: 'jungheinrich-etv-216i', keyDetail: '1,600 kg load', specification: '10.7 m max. lift',
    application: 'Warehouse stacking', power: 'Electric', summary: 'Reach truck · 1,600 kg',
    listingType: 'rental', pricing: RENTAL_PRICING,
    specs: [{ label: 'Rated load', value: '1,600 kg' }, { label: 'Power', value: 'Electric' }, { label: 'Max. lift', value: '10.7 m' }],
    image: '/images/verified-equipment/jungheinrich-etv-216i.webp',
    imageAlt: 'Jungheinrich ETV 216i electric reach truck — manufacturer image',
    source: 'https://www.jungheinrich.com.sg/products/new-trucks/reach-trucks/etv-214i-216i-556128',
    sourceTitle: 'Jungheinrich ETV 214i–216i — model overview',
    factNote: 'ETV 216i: 1,600 kg rated capacity, lift heights up to 10,700 mm and integrated lithium-ion power. Maximum lift depends on mast configuration.',
  },
  {
    id: 'EQ-0102', name: 'SDS plus rotary hammer', shortName: 'Rotary hammer',
    brand: 'Bosch', model: 'GBH 2-26 DRE', category: 'Power tools',
    slug: 'bosch-gbh-2-26-dre', keyDetail: '2.7 J impact', specification: 'SDS plus',
    application: 'Drilling & chiselling', power: '800 W', summary: 'Rotary hammer · 800 W',
    listingType: 'rental', pricing: RENTAL_PRICING,
    specs: [{ label: 'Input power', value: '800 W' }, { label: 'Impact', value: '2.7 J' }, { label: 'Tool holder', value: 'SDS plus' }],
    image: '/images/verified-equipment/bosch-gbh-2-26-dre.png',
    imageAlt: 'Bosch GBH 2-26 DRE rotary hammer with side handle — manufacturer image',
    source: 'https://www.bosch-professional.com/iq/en/products/gbh-2-26-dre-0611253703',
    sourceTitle: 'Bosch Professional GBH 2-26 DRE — technical data',
    factNote: 'GBH 2-26 DRE: 800 W rated input power, 2.7 J impact energy and SDS plus tool holder. The rotation stop supports chiselling. Regional supply and included accessories must be confirmed.',
  },
  {
    id: 'EQ-0103', name: 'Deep groove ball bearing', shortName: 'Ball bearing',
    brand: 'NSK', model: '6205', category: 'Parts & components',
    slug: 'nsk-6205', keyDetail: '25 mm bore', specification: '52 × 15 mm OD/W',
    application: 'Rotating assemblies', power: 'Not powered', summary: 'Ball bearing · 25 mm bore',
    listingType: 'sale', pricing: SALES_PRICING,
    specs: [{ label: 'Bore', value: '25 mm' }, { label: 'Outside Ø', value: '52 mm' }, { label: 'Width', value: '15 mm' }],
    image: '/images/verified-equipment/nsk-6205-catalogue.jpg',
    imageAlt: 'NSK open deep groove ball bearing — manufacturer cutaway illustration on the 6205 catalogue page',
    source: 'https://www.nsk.com/engineering/products/bearings/ball-bearings/deep-groove-ball-bearings/single-row-deep-groove-ball-bearings/6205-apn.html',
    sourceTitle: 'NSK 6205 — boundary dimensions and properties',
    factNote: '6205: 25 mm bore, 52 mm outside diameter and 15 mm width; single-row, open bearing with pressed steel cage. Catalogue image is a family cutaway, not a photograph of stock. Confirm fit, load, clearance and lubrication for the intended assembly.',
  },
] as const;

/** Five reviewed inventory records; the first three become featured store cards. */
export const INVENTORY_PRODUCTS = [
  ...DEMO_PRODUCTS,
  {
    id: 'EQ-0104', brand: 'Bosch', model: 'GWS 7-115', shortName: 'Angle grinder',
    category: 'Power tools', keyDetail: '115 mm disc', power: '720 W',
    specification: '11,000 rpm', application: 'Metal grinding',
    source: 'https://www.bosch-professional.com/gb/en/products/gws-7-115-0601388174',
  },
  {
    id: 'EQ-0105', brand: 'Toyota', model: 'SWE120', shortName: 'Pallet stacker',
    category: 'Material handling', keyDetail: '1,200 kg load', power: 'Electric',
    specification: '4.5 m max. lift', application: 'Pallet stacking',
    source: 'https://baltic.toyota-forklifts.eu/our-products/stackers/pedestrian/bt-staxio-12-t/',
  },
] as const;

export const CHAT_TURNS = [
  { question: 'Can I rent the rotary hammer for a week?',
    reply: 'What dates and delivery location do you need? I’ll include them in your rental enquiry.' },
  { question: 'I also need 20 NSK 6205 bearings.',
    reply: 'I’ll note 20 units. Please confirm the bearing variant and delivery location for your sales quote.' },
] as const;

/** Model is supplied; category-specific specifications share seven review columns. */
export const INVENTORY_FIELDS = [
  { key: 'brand', label: 'Brand' },
  { key: 'shortName', label: 'Product' },
  { key: 'category', label: 'Category' },
  { key: 'keyDetail', label: 'Key detail' },
  { key: 'power', label: 'Power' },
  { key: 'specification', label: 'Specification' },
  { key: 'application', label: 'Application' },
] as const;

export const STORY_STAGES = [
  { label: 'Enrich your listings', detail: 'AI enrichment', start: 0, preview: 9000,
    caption: 'Add your product models. AI prepares the product details for you to review.' },
  { label: 'Create your Webstore', detail: 'Your Webstore', start: 10500, preview: 15000,
    caption: 'Unique product pages and structured details support search and AI discovery.' },
  { label: 'Guide buyers in chat', detail: 'AI Sales Agent', start: 17800, preview: 19700,
    caption: 'Turn product recommendations into a clear rental or sales enquiry.' },
] as const;

// Give the moving cards time to land, then respond promptly. Longer holds are
// reserved for reading completed replies, rather than waiting for a response.
const CHAT_TIMING = {
  handoff: 1600,
  rentalQuestion: 2400,
  rentalTyping: 2650,
  rentalReply: 3350,
  salesQuestion: 6350,
  salesTyping: 6600,
  salesReply: 7300,
  end: 10800,
} as const;

export const STORY_DURATION = STORY_STAGES[2].start + CHAT_TIMING.end;
export const CHAT_LOOP_START = STORY_STAGES[2].start + CHAT_TIMING.rentalQuestion;

/** Once cards arrive, keep chatting. Only Replay restarts the full workflow. */
export function advanceStoryTime(elapsed: number, delta: number) {
  const next = Math.max(0, elapsed) + Math.max(0, delta);
  return next < STORY_DURATION ? next
    : CHAT_LOOP_START + (next - STORY_DURATION) % (STORY_DURATION - CHAT_LOOP_START);
}

export function getStoryFrame(elapsed: number, reducedMotion = false) {
  const time = reducedMotion ? STORY_STAGES[2].preview : Math.max(0, elapsed % STORY_DURATION);
  const stage = time < STORY_STAGES[1].start ? 0 : time < STORY_STAGES[2].start ? 1 : 2;
  const phase = time < 1400 ? 'source' : time < 3200 ? 'drop'
    : time < 4600 ? 'model' : time < 7400 ? 'enrich' : time < 10500 ? 'enriched'
    : time < 12800 ? 'photos' : time < 17800 ? 'pages'
    : time < STORY_STAGES[2].start + CHAT_TIMING.handoff ? 'sync' : 'recommend';
  const enrichedFields = time < 4600 ? 0 : Math.min(INVENTORY_FIELDS.length, Math.floor((time - 4600) / 350));
  const chatTime = time - STORY_STAGES[2].start;
  const chatBeat = stage !== 2 ? 'idle' : chatTime < CHAT_TIMING.handoff ? 'sync'
    : chatTime < CHAT_TIMING.rentalQuestion ? 'recommendations'
      : chatTime < CHAT_TIMING.rentalTyping ? 'rental-question' : chatTime < CHAT_TIMING.rentalReply ? 'rental-typing'
        : chatTime < CHAT_TIMING.salesQuestion ? 'rental-reply' : chatTime < CHAT_TIMING.salesTyping ? 'sales-question'
          : chatTime < CHAT_TIMING.salesReply ? 'sales-typing' : 'sales-reply';
  const chatTurn = stage !== 2 || chatTime < CHAT_TIMING.rentalQuestion ? -1 : chatTime < CHAT_TIMING.salesQuestion ? 0 : 1;
  const chatScroll = chatTurn === -1 ? 0 : chatTurn === 0 ? 190 : 360;
  return { stage, phase, time, enrichedFields, chatBeat, chatTurn, chatScroll };
}

export function productDemoPath(slug: string) {
  return `/products/${slug}`;
}
