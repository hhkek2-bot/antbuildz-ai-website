/** Manufacturer facts checked on 28 August 2026; the workflow is not live stock.
 * Keep model, image and source together. See PRODUCT-SOURCES.md for the audit.
 */
export const PRODUCT_FACTS_CHECKED_ON = '2026-08-28';
export const PRODUCT_PRICING_CHECKED_ON = '2026-08-31';
// Prices are current public references, not live inventory or a quotation.
// The rental example uses a comparable 1.6-ton reach truck because no public
// rate was available for the pictured ETV 216i. See PRODUCT-SOURCES.md.
const REACH_TRUCK_RENTAL_PRICING = [
  { label: 'Daily', value: 'SGD 350' },
  { label: 'Weekly', value: 'SGD 350' },
  { label: 'Monthly', value: 'SGD 750' },
] as const;
const BOSCH_SALE_PRICING = [
  { label: 'Sale price', value: 'SGD 210.00' },
] as const;
const NSK_SALE_PRICING = [
  { label: 'Sale price', value: 'SGD 7.99' },
] as const;
export const DEMO_PRODUCTS = [
  {
    id: 'EQ-0101', name: 'Electric reach truck', shortName: 'Reach truck',
    brand: 'Jungheinrich', model: 'ETV 216i', category: 'Material handling',
    slug: 'jungheinrich-etv-216i', keyDetail: '1,600 kg load', specification: '10.7 m max. lift',
    application: 'Warehouse stacking', power: 'Electric', summary: 'Reach truck · 1,600 kg',
    listingType: 'rental', pricingContext: 'Example 1.6 t · excl. tax', pricing: REACH_TRUCK_RENTAL_PRICING,
    pricingSource: 'https://antbuildz.com/equipments/material_handling',
    pricingSourceTitle: 'Antbuildz 1.6-ton Hyster R1.6 reach-truck rental listing',
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
    listingType: 'sale', pricingContext: 'GST included', pricing: BOSCH_SALE_PRICING,
    pricingSource: 'https://veshop.com.sg/shop-now/tools-machines/596-bosch-professional-rotary-hammer-with-sds-plus',
    pricingSourceTitle: 'Vertex Enterprise Bosch GBH 2-26 DRE sale listing',
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
    listingType: 'sale', pricingContext: 'Per unit · excl. GST', pricing: NSK_SALE_PRICING,
    pricingSource: 'https://sg.rs-online.com/web/p/ball-bearings/0643713',
    pricingSourceTitle: 'RS Singapore NSK 6205 sale listing',
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
  { question: 'It needs to handle 1,500 kg, lift to 8 m and work in a 3 m aisle for two weeks.',
    reply: 'The ETV 216i may suit, subject to mast configuration and availability. Where and when should it be delivered?' },
  { question: 'Deliver it to Jurong in two weeks. I also need one rotary hammer and 20 bearings.',
    reply: 'Noted. I’ll prepare an enquiry for a two-week reach-truck rental, one rotary hammer and 20 bearings. Our team will confirm the bearing variant, availability, delivery and pricing.' },
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
  handoff: 1400,
  initialBuyerTyping: 2100,
  initialQuestion: 2550,
  initialAgentTyping: 2800,
  initialReply: 3450,
  rentalBuyerTyping: 4700,
  rentalQuestion: 5150,
  rentalAgentTyping: 5400,
  rentalReply: 6050,
  salesBuyerTyping: 7450,
  salesQuestion: 7900,
  salesAgentTyping: 8150,
  salesReply: 8800,
  end: 11000,
} as const;

export const STORY_DURATION = STORY_STAGES[2].start + CHAT_TIMING.end;
export const CHAT_LOOP_START = STORY_STAGES[2].start + CHAT_TIMING.initialBuyerTyping;

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
    : chatTime < CHAT_TIMING.initialBuyerTyping ? 'recommendations'
      : chatTime < CHAT_TIMING.initialQuestion ? 'initial-buyer-typing'
        : chatTime < CHAT_TIMING.initialAgentTyping ? 'initial-question'
          : chatTime < CHAT_TIMING.initialReply ? 'initial-agent-typing'
            : chatTime < CHAT_TIMING.rentalBuyerTyping ? 'initial-reply'
              : chatTime < CHAT_TIMING.rentalQuestion ? 'rental-buyer-typing'
                : chatTime < CHAT_TIMING.rentalAgentTyping ? 'rental-question'
                  : chatTime < CHAT_TIMING.rentalReply ? 'rental-agent-typing'
                    : chatTime < CHAT_TIMING.salesBuyerTyping ? 'rental-reply'
                      : chatTime < CHAT_TIMING.salesQuestion ? 'sales-buyer-typing'
                        : chatTime < CHAT_TIMING.salesAgentTyping ? 'sales-question'
                          : chatTime < CHAT_TIMING.salesReply ? 'sales-agent-typing' : 'sales-reply';
  const chatTurn = stage !== 2 || chatTime < CHAT_TIMING.rentalQuestion ? -1 : chatTime < CHAT_TIMING.salesQuestion ? 0 : 1;
  // Keep the newest exchange in the lower reading area of the tall phone.
  // The previous 360–600px jumps pushed completed messages against the top
  // edge and left an implausibly empty lower half.
  const chatScroll = ['idle', 'sync', 'recommendations', 'initial-buyer-typing', 'initial-question', 'initial-agent-typing', 'initial-reply'].includes(chatBeat) ? 0
    : chatBeat === 'rental-agent-typing' ? 96 : chatBeat === 'rental-reply' ? 120
      : chatBeat === 'sales-buyer-typing' ? 140 : chatBeat === 'sales-question' ? 160
        : chatBeat === 'sales-agent-typing' ? 184 : chatBeat === 'sales-reply' ? 224 : 80;
  return { stage, phase, time, enrichedFields, chatBeat, chatTurn, chatScroll };
}

export function productDemoPath(slug: string) {
  return `/products/${slug}`;
}
