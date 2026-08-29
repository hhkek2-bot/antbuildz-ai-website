# Antbuildz.AI Project Rules

## Scope and source safety

- This is the independent website for `antbuildz.ai`, focused solely on Antbuildz AI products and industrial AI education.
- The Antbuildz Marketplace remains the main business on `antbuildz.com`; describe it only as company history or an optional connected channel when relevant.
- Keep the reference project at `/Users/kekheanhooi/Documents/New project/lovable-export/AntbuildzAI` strictly read-only. It is a design, copy, page, and asset reference only.
- Make all implementation changes inside `/Users/kekheanhooi/Documents/ChatGPT/ANTBUILDZ AI Website`.
- Run this project locally on port `8081` so it does not conflict with the reference app on port `8080`.
- Do not deploy, create external services, or connect paid integrations unless explicitly approved.

## Required information architecture

- Home
- AI Webstore Suite
- AI Sales Agent
- AI Agent Console
- Pricing
- Resources, including AI Agent Roles
- Antbuildz AI FAQs only
- About Antbuildz
- Who We Serve: Rental & Leasing, Manufacturers & OEMs, Dealers & Distributors, Industrial & MRO, Hardware & Trade, Building & Engineering, Parts & Aftermarket, and Buggies & Vehicles

## Public design system

- Visual character: light, product-led, practical, and industrial rather than generic corporate technology.
- Canvas: `#F8F7FF`; clean surface: `#FFFFFF`; soft surface: `#F1EFF8`; heading ink and dark section surface: `#0F172A`; body: `#475569`; muted text: `#64748B`.
- Primary CTA: yellow `#FFC501`; hover: `#F5B70A`; brand accent: red `#E3180A`.
- Use the established restrained violet-to-blue-to-gold gradient only for one important phrase in a major heading.
- Marketing headings use Plus Jakarta Sans with Inter as fallback, 700–850 weight, tight tracking, and compact line-height. Body copy uses Inter.
- Hero titles use a maximum 1180px title frame, `1.06` line-height or tighter, and intentional block-level spans for two-line titles.
- Standard content frame: maximum 1320px with approximately 5% side padding.
- Public marketing sections own their vertical rhythm through padding, not stacked section margins: 96px top and bottom at 1180px and above, 80px from 768–1179px, and 64px at 767px and below.
- Dense support bands may use 64px desktop and 48px mobile only when they are not complete narrative sections. Heroes, footers, operational Console screens, embedded product demonstrations and deliberate scroll-led narratives retain component-owned spacing.
- The default public section background is canvas `#F8F7FF`. Use clean white `#FFFFFF` for proof, interface or FAQ sections; soft `#F1EFF8` for a deliberate narrative reset; and ink `#0F172A` only for operational or high-contrast bands. Reuse these roles instead of introducing page-specific neutral shades. Gradients must sit on one of these base surfaces.
- Buttons are pill-shaped and at least 54px high for primary marketing actions.
- Large software visuals use approximately 28px radii; marketing cards use 22–24px radii with subtle borders and soft shadows.
- Use industrial photography and real product/interface mock-ups. Do not replace them with generic stock technology graphics.
- Reuse the shared Header, Footer, section intro, CTA, Webstore, Agent, and Console patterns before creating new variations.
- Keep public marketing visuals separate from the darker operational AI Agent Console visual language.

## Responsive and accessible implementation

- Desktop navigation may compact at 1180px and changes to the mobile menu below 980px.
- At 767px and below, stack major layouts, keep primary actions touch-friendly, avoid horizontal overflow, and preserve readable hierarchy.
- Use semantic headings, labelled navigation, useful image alt text, visible focus states, and native interactive elements.
- Respect `prefers-reduced-motion` and never rely on colour alone to communicate meaning.

## Copy and commercial safety

- Use British English: `catalogue`, `enquiry`, and `personalised` where applicable.
- Preferred product names are `AI Webstore Suite`, `AI Sales Agent`, and `AI Agent Console`.
- Write like a practical industrial-sales partner: specific, useful, confident, and grounded in products, specifications, availability, rental, quotation, and handover workflows.
- Do not invent or strengthen prices, usage limits, security claims, performance statistics, supported integrations, language counts, availability, or conversion claims.
- Pricing and limits must match the approved reference pricing source before publication.
- Prefer purpose-specific CTAs such as `Book a Demo`, `Build Your AI Agent`, `View Pricing`, and `Get Quote`.

## Global SEO and AI discovery

- Use `https://antbuildz.ai` for canonical URLs, sitemap entries, robots references, Open Graph URLs, and structured data.
- Every public route requires a unique title, description, canonical URL, one descriptive H1, and useful internal links.
- Keep structured data truthful and limited to visible company, website, product, breadcrumb, and FAQ information.
- Maintain `robots.txt`, `sitemap.xml`, Open Graph metadata, and `llms.txt` whenever the route catalogue changes.
- Do not create doorway pages, duplicate location pages, keyword stuffing, hidden text, or unsupported superlatives.

## Antbuildz.AI design agent profile

- Use the `antbuildz-ai-design` skill for every UI, UX, frontend styling, responsive layout, visual review, page design, component design, or design-system task in this project.
- Read `DESIGN.md` before making visual decisions.
- Read `PAGES.md` before adding, removing, redesigning, or auditing a route.
- Determine whether the request requires Fidelity, Design, Audit, or System mode before acting.
- A fidelity request overrides creative redesign preferences.
- Update `PAGES.md` when a route, primary CTA, page status, or QA status materially changes.
- Update `DESIGN.md` only when an approved shared design decision changes; do not record temporary experiments as permanent rules.
- Visually inspect changed pages in the browser at representative desktop and mobile sizes before declaring design work complete.
