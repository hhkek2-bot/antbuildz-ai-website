const WHO_WE_SERVE_PROCESS_COPY: Record<string, readonly [string, string, string, string]> = {
  '/rental-businesses': [
    'Add approved inventory, specifications, rate sheets, rental terms, service areas, policies, and operating information.',
    'Retrieve specifications, pricing context, accessories, rental conditions, and operating limits from approved sources.',
    'Compare intended use, specifications, hire period, location, operating conditions, and delivery needs with inventory.',
    'Present suitable options and prepare a brief for final availability, pricing, delivery, and commercial confirmation.',
  ],
  '/manufacturers-brands': [
    'Ingest approved catalogues, datasheets, performance curves, selection charts, configuration tables, and commercial rules.',
    'Retrieve duty-point values, materials, limits, standards, configurations, and accessories relevant to the application.',
    'Compare duty, media, temperature, materials, utilities, standards, and operating limits; exclude unsupported models.',
    'Present supported models and send sales or engineering a brief with source evidence and open technical questions.',
  ],
  '/dealers-distributors': [
    'Ingest approved brand catalogues, model and SKU tables, specifications, substitutes, stock, and territory rules.',
    'Retrieve comparable ratings, dimensions, materials, accessories, substitutes, stock context, and sales rules.',
    'Compare application-critical specifications, remove incompatible choices, and explain why each option fits the shortlist.',
    'Present a supported multi-brand shortlist and route the enquiry to the right branch, specialist, territory, or partner.',
  ],
  '/industrial-mro': [
    'Ingest catalogues, datasheets, ratings, operating charts, legacy references, equivalents, inventory, and purchasing rules.',
    'Retrieve the dimensions, ratings, media, materials, connections, standards, asset references, and supply data that matter.',
    'Turn plain language into technical criteria, filter incompatible SKUs, and escalate uncertain or safety-critical choices.',
    'Send purchasing a structured RFQ with supported SKUs, quantity, urgency, delivery needs, and open checks.',
  ],
  '/hardware-trade-supplies': [
    'Ingest approved catalogues, technical tables, application guides, pack sizes, accessories, stock, pricing, and safety rules.',
    'Retrieve product families, dimensions, materials, ratings, quantities, accessories, alternatives, stock, and pricing.',
    'Compare substrate, dimensions, exposure, load, coverage, quantity, and timing; flag regulated or critical choices.',
    'Recommend the core product, quantity, accessories, consumables, and alternatives for stock, price, and delivery confirmation.',
  ],
  '/building-engineering': [
    'Ingest approved catalogues, drawings, schedules, specification tables, performance data, standards, and system rules.',
    'Retrieve product data, grades, standards, test values, limits, quantities, and delivery needs tied to the project brief.',
    'Compare project specifications, materials, standards, programme, and commercial criteria; escalate engineering decisions.',
    'Present supported systems and send technical sales an RFQ with evidence, quantities, delivery sequence, and open decisions.',
  ],
  '/parts-aftermarket': [
    'Ingest approved parts catalogues, diagrams, serial-break tables, supersessions, fitment rules, service kits, and stock rules.',
    'Retrieve the matching model, serial range, variant, assembly, current references, compatible kits, and supply information.',
    'Check machine, serial, variant, assembly, service, and reference data; exclude incompatible parts and flag uncertain fitment.',
    'Present supported parts, replacements, kits, or accessories with fitment evidence, quantity, urgency, and open checks.',
  ],
  '/buggies-commercial-vehicles': [
    'Add approved vehicle catalogues, fleet availability, rates, terms, payload data, body options, accessories, and sales rules.',
    'Retrieve capacity, powertrain, operating limits, availability, rates, accessories, charging, and service information.',
    'Compare seating, payload, route, daily use, fleet size, hire or purchase needs, location, delivery, and after-sales support.',
    'Present supported vehicles and prepare a brief for final model, compliance, availability, pricing, delivery, and service.',
  ],
};

const PRODUCT_RANGE_INTRO: Record<string, { hero: string; context: string }> = {
  '/manufacturers-brands': {
    hero: 'Guide technical product questions across machinery, instruments and electronics. Your AI Sales Agent uses approved data to compare models and prepare enquiries for sales or engineering.',
    context: 'Manufacturers of equipment, precision instruments and electronic products share a need: helping customers choose from complex ranges. The Sales Specialist role of Antbuildz AI Agent uses approved catalogues, datasheets and configuration rules to guide those conversations.',
  },
  '/dealers-distributors': {
    hero: 'Guide buyers across equipment, instruments, electronics and component ranges. Your AI Sales Agent compares approved product options and routes enquiries to the right sales team.',
    context: 'From equipment dealers to electronics and instrument distributors, multi-brand catalogues bring detailed product questions. The Sales Specialist role of Antbuildz AI Agent helps compare approved options and route enquiries by brand, category, branch or territory.',
  },
};

export function applyWhoWeServeProcessCopy(root: HTMLElement, pathname: string) {
  const copy = WHO_WE_SERVE_PROCESS_COPY[pathname];
  if (!copy) return;

  const introduction = PRODUCT_RANGE_INTRO[pathname];
  if (introduction) {
    const hero = root.querySelector<HTMLElement>('.si-hero-copy');
    const context = root.querySelector<HTMLElement>('.si-sierra-context-grid .si-sierra-copy p');
    if (hero && hero.textContent !== introduction.hero) hero.textContent = introduction.hero;
    if (context && context.textContent !== introduction.context) context.textContent = introduction.context;
  }

  root.querySelectorAll<HTMLElement>('.si-sierra-vignette').forEach((card, index) => {
    const paragraph = card.querySelector<HTMLElement>(':scope > p');
    const nextCopy = copy[index];
    if (paragraph && nextCopy && paragraph.textContent !== nextCopy) paragraph.textContent = nextCopy;
  });
}

export { WHO_WE_SERVE_PROCESS_COPY };
