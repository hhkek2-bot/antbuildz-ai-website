export const WHO_WE_SERVE_SEO = {
  title: 'Who We Serve | AI for Complex Product Businesses',
  description: 'Explore Antbuildz AI for equipment rental, industrial suppliers, instruments, electronics and technical products. Find the right fit for your business.',
  path: '/who-we-serve',
} as const;

export const INDUSTRY_OVERVIEW = [
  { name: 'Rental & Leasing', href: '/rental-businesses', image: '/images/solution-rental.jpg', alt: 'Access equipment fleet ready for rental', description: 'Clarify the job, capacity and hire dates before your team confirms fleet availability and a quote.', examples: 'Equipment hire · Access platforms · Fleet rental' },
  { name: 'Manufacturers & OEMs', href: '/manufacturers-brands', image: '/images/solution-manufacturers.jpg', alt: 'Engineer in an industrial manufacturing facility', description: 'Explain specifications and model differences using approved product and application knowledge.', examples: 'Machinery · Instruments · Electronic products' },
  { name: 'Dealers & Distributors', href: '/dealers-distributors', image: '/images/solution-dealers.jpg', alt: 'Industrial equipment showroom', description: 'Guide buyers through multi-brand ranges, compatible options and the right sales contact.', examples: 'Equipment · Electronics · Technical catalogues' },
  { name: 'Industrial & MRO', href: '/industrial-mro', image: '/images/solution-mro.jpg', alt: 'Industrial maintenance equipment and technical supply', description: 'Turn maintenance requirements into the specifications and product details your team needs.', examples: 'Pumps · Sensors · Maintenance supplies' },
  { name: 'Hardware & Trade', href: '/hardware-trade-supplies', image: '/images/solution-hardware.jpg', alt: 'Tools and hardware in a trade supply setting', description: 'Help customers choose tools, accessories and consumables around the job they need to do.', examples: 'Power tools · Fixings · Test equipment' },
  { name: 'Building & Engineering', href: '/building-engineering', image: '/images/solution-building.jpg', alt: 'Building and engineering project', description: 'Collect project specifications, quantities and delivery requirements for quotation review.', examples: 'Building products · Materials · Project supply' },
  { name: 'Parts & Aftermarket', href: '/parts-aftermarket', image: '/images/solution-parts.jpg', alt: 'Industrial replacement parts and bearings', description: 'Use model, part number and approved compatibility data to guide replacement enquiries.', examples: 'Spare parts · Components · Service kits' },
  { name: 'Buggies & Vehicles', href: '/buggies-commercial-vehicles', image: '/images/solution-vehicles.png', alt: 'Utility vehicles outside a distribution facility', description: 'Clarify seating, payload, route and configuration needs for vehicle sales and rental.', examples: 'Utility vehicles · Buggies · Commercial fleets' },
] as const;

export const TECHNICAL_PRODUCT_EXAMPLES = [
  { number: '01', title: 'Instruments & test equipment', examples: 'Measurement instruments, meters and inspection tools', question: 'Which instrument matches the range and accuracy I need?', guidance: 'Use approved specifications to explain measurement ranges, accuracy, accessories and documented calibration information. Gather application details for specialist review.', href: '/manufacturers-brands', link: 'For manufacturers & OEMs' },
  { number: '02', title: 'Electronics & components', examples: 'Sensors, power supplies, connectors and electronic devices', question: 'Will this component work with my existing setup?', guidance: 'Clarify model numbers, voltage, interfaces and operating requirements. Compare documented options and pass uncertain compatibility questions to your technical team.', href: '/dealers-distributors', link: 'For dealers & distributors' },
  { number: '03', title: 'Technical consumer products', examples: '3D printers, workshop machines and specialist devices', question: 'Which model suits what I want to make?', guidance: 'Help home users and business buyers compare capabilities, materials, accessories and setup needs. Continue with approved product guidance and after-sales support.', href: '/ai-roles/product-specialist', link: 'Explore Product Specialist' },
] as const;

export const BUSINESS_FIT = [
  ['Products need explaining', 'Specifications, applications or model differences shape the buying decision.'],
  ['Requirements matter', 'Customers need help describing the job, checking compatibility or comparing options.'],
  ['Your team has the knowledge', 'Catalogues, manuals, policies and product data can ground the Agent’s answers.'],
  ['People confirm the details', 'Your team reviews suitability, availability, quotations and exceptions.'],
] as const;
