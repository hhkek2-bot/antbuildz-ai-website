# Antbuildz.AI Design System

This is the durable visual and interaction reference for the independent `antbuildz.ai` website. Read it with `AGENTS.md`; the user’s current request remains authoritative.

## Design thesis

Antbuildz.AI should feel like a capable industrial sales partner: product-led, practical, clear and technically grounded. It combines the confidence of industrial equipment commerce with the guidance of a modern AI product. It must not look like a generic AI template or a copied consumer SaaS site.

The memorable signature is the connection between real industrial products and visible, believable AI-guided workflows: product discovery, specification capture, comparison, quotation and human handover.

## Brand principles

1. **Industrial evidence over decoration.** Show real machinery, products, catalogues, specifications and interface states.
2. **One job per screen.** Each page or product view has one primary visitor outcome and one dominant CTA.
3. **Clarity before novelty.** Expressive elements must strengthen hierarchy, product understanding or brand recall.
4. **System before variation.** Reuse established components and tokens before creating a new pattern.
5. **Human handover is visible.** AI supports industrial selling; it does not pretend to replace commercial or technical judgement.
6. **Specific beats generic.** If a hero or section could be relabelled for an unrelated software company, make it more industrial and product-specific.

Browser tabs use the compact `ai` mark extracted from the existing rendered Antbuildz.AI wordmark: the original first stylised red `a` glyph and the existing final yellow `i` from its `.ai` suffix, on a transparent PNG canvas. These letterforms must not be typed, traced, recoloured or redrawn. Do not add a coloured tile or background behind them, and do not reuse the former single-letter mark, transferred Lovable favicon or a product-demo icon as the site favicon.

## Canonical foundations

| Role | Token/value | Use |
| --- | --- | --- |
| Canvas | `#F8F7FF` | Default public marketing section background |
| Clean surface | `#FFFFFF` | Product proof, interface and FAQ sections |
| Soft surface | `#F1EFF8` | Deliberate narrative reset or subtle grouping |
| Dark section surface | `#0F172A` | Operational proof and high-contrast bands only |
| Heading ink | `#0F172A` | Main headings and high-emphasis text |
| Body | `#475569` | Paragraphs and explanatory copy |
| Muted | `#64748B` | Secondary labels and supporting metadata |
| Primary action | `#FFC501` | Dominant CTA and selected emphasis |
| Primary hover | `#F5B70A` | Yellow action hover state |
| Brand accent | `#E3180A` | Brand mark, eyebrows and selective emphasis |
| Violet | `#7C3AED` | Restrained gradient or data accent only |
| Blue | `#3B82F6` | Restrained gradient, focus and data accent |

Use semantic CSS variables rather than repeating hex values. Do not create page-specific shades when an existing semantic token works.

## Typography

**Current decision — 2026-08-28:** The user requested restoration of the typography on the read-only site at `http://localhost:8080/`, with no other design changes. This supersedes the earlier blanket 700-heading / 600-question standardisation.

- Transferred public pages inherit their original component typography: font family, responsive size, weight, line-height and tracking. Do not flatten every heading, paragraph or FAQ into one role with global overrides.
- Keep the locally loaded Plus Jakarta Sans and Inter fonts. Most marketing headings use Plus Jakarta Sans; body copy uses Inter where the reference specifies it. Some hero descriptions, FAQ questions and controls intentionally use Plus Jakarta Sans. Preserve these component differences.
- The original AI Agent Console font scope is retained. Embedded demonstrations keep their own typography; do not apply large marketing heading rules inside them.

| Reference role | Desktop / compact | Mobile | Weight / line-height |
| --- | --- | --- | --- |
| Homepage hero | `clamp(44px, 4.5vw, 64px)` | `clamp(32px, 9.5vw, 39.2px)` | 800 / 1.03, tracking -0.04em |
| General marketing title / new homepage major sections | `clamp(36px, 4vw, 65.6px)` | `clamp(32px, 9vw, 44px)` | 800 / 1.06; component-specific tracking |
| Industry / homepage FAQ heading | `clamp(33.6px, 3.2vw, 52.8px)` | `clamp(30.4px, 7.5vw, 37.6px)` | 800 / 1.06, normal tracking |
| Reference Webstore card heading | 18.88px | 18.88px | 700 / 1.3 |
| General introductory copy | `clamp(16px, 1.35vw, 18.88px)` | 16px | 400 / 1.62; reference mobile often 1.55 |
| Webstore card body | 14.72px | 14.72px | 400 / 1.65, Inter |
| Industry / homepage FAQ question | 16.8px | 16.8px | 500 / 1.375, Plus Jakarta Sans |
| Industry / homepage FAQ answer | 15.2px | 15.2px | 400 / 1.7, Plus Jakarta Sans |
| Standard marketing CTA | 16px | Reference component scale | 700 / 1, Plus Jakarta Sans |
| Product-section eyebrow | 12.16px | 12.16px | 800 / 1, tracking 0.24em |

These are representative roles, not overrides for all components. For example, the Sales Agent hero description retains its own `clamp(16px, 1.15vw, 18.56px)` scale and 1.58 line-height. Industry hero titles style their inner spans; article and pricing typography remains component-owned.

At 767px and below, public marketing hero and section descriptions marked with the shared `major-intro` role fill their available content row and use justified alignment with a left-aligned final line. This mobile rule does not apply to card copy, FAQ answers, pricing data, controls, interface demonstrations or the operational AI Agent Console, which retain their component-owned alignment.

The `--type-*` tokens in `app/globals.css` support source-owned additions. New homepage sections use the reference title, eyebrow and card scale, while retaining their existing layouts. The homepage FAQ mirrors the industry FAQ typography directly. Preserve the 1180px hero title frame, intentional spans, phone width and all non-typographic layout decisions. Natural text wrapping may change with restored font metrics.

## Layout and rhythm

- Standard public content frame: `min(1250px, 90vw)`, centred. This follows the live Antbuildz.com rail: 5vw side gutters until the 1250px maximum is reached. Narrow reading columns, embedded product demonstrations and the operational Console retain their component-owned widths inside that rail.
- Base spacing rhythm: multiples of 4px.
- Major public marketing sections use 96px vertical padding at 1180px and above, 80px from 768–1179px, and 64px at 767px and below.
- Conventional public-page H1s use the same measured gap below the shared header: 96px at 1180px and above, 80px from 768–1179px, and 64px at 767px and below. Home, product-demo heroes, the operational AI Agent Console and the Book a Demo authentication layout retain their approved component-owned header relationships.
- Dense support bands may use 64px desktop and 48px mobile.
- Sections own their spacing through padding; do not create double gaps with adjacent section margins.
- Heroes, footers, operational Console screens, embedded demonstrations and deliberate scroll-led narratives are component-owned exceptions.
- On desktop landscape, standard non-progress marketing sections should aim to present their heading and primary content within one viewport. Compact padding, gaps and illustration scale before extending the section vertically. Deliberate progress timelines and scroll-led narratives are exempt.
- On tablet and mobile, readable type, touch targets and natural stacking take priority over single-viewport section height; never compress content below the established accessibility and typography rules merely to make it fit.
- Marketing layouts may be expressive; operational Console layouts prioritise scanning and task efficiency.
- Prefer a clear reading path and controlled asymmetry over grids of identical cards.
- Cards are for genuinely grouped or repeated content, not the default wrapper for every paragraph.
- Avoid nested cards unless the hierarchy is real and visually necessary.

## Shape, borders and depth

- Primary buttons: pill-shaped and at least 54px high.
- Marketing cards: approximately 22–24px radius.
- Large interface visuals: approximately 28px radius.
- Borders: subtle, cool and low contrast.
- Shadows: broad and soft; use them to separate important layers, not every component.
- The AI Agent Console may use darker, tighter and more operational surfaces than public marketing pages.

## Colour discipline

- Public section backgrounds use the four canonical surface roles: canvas, clean, soft and dark. Do not introduce a new near-white or neutral shade when a canonical role works.
- Gradients may add restrained atmosphere, but must resolve to one canonical base surface and must not create a new section-background role.
- Yellow means primary action or important commercial emphasis.
- Red identifies Antbuildz and selected editorial emphasis; it should not compete with every CTA.
- Violet, blue and gold may form one restrained gradient on one important phrase in a major heading.
- Do not cover whole pages with multicolour gradients.
- Do not communicate state through colour alone.

## Shared component contract

Legal documents use continuous rich-text article sections, including DPA
schedules: no decorative schedule cards. The Agreements hub and every legal
document must match the main site's public footer in content, typography,
spacing, social links, wordmark, language control and responsive behaviour.
Do not introduce a legal-specific footer variant. The source-rendered legal
shell mirrors the transferred footer rules in `app/public-footer.css` until
the main runtime is migrated; preserve this fidelity when either changes.
The Company-column legal directory entry is labelled `Terms & Policy` and
opens `/agreements`, listing all four current legal documents.

Reuse these patterns before creating variants:

- Public Header and mobile navigation
- Public Footer
- Product and solution hero
- Section intro and left-aligned section intro
- Primary, secondary and text CTAs
- Industrial product/interface visual frame
- AI Webstore demonstration
- AI Sales Agent conversation demonstration
- AI Agent Console demonstration
- Resource card
- FAQ accordion
- Who We Serve card and solution narrative
- Final CTA band

Public marketing CTA labels and treatments are destination-owned on Home,
AI Sales Agent and AI Webstore Suite. Reused actions must follow this mapping:

| Destination | Canonical wording | Treatment |
| --- | --- | --- |
| `/book-a-demo` | `Book a Demo` | Primary yellow pill |
| `/pricing` | `View Pricing` | Secondary clean outline pill |
| `/ai-sales-agent` | `Explore AI Sales Agent` | Secondary clean outline pill when rendered as a button |
| `/ai-webstore-suite` | `Explore AI Webstore Suite` | Secondary clean outline pill when rendered as a button |
| `mailto:help@antbuildz.ai` | `Email Us` | Tertiary icon-and-text contact link showing the Antbuildz AI help address |

When `Book a Demo` and `View Pricing` appear in the same action group, `Book a
Demo` is first in the DOM and visual reading order. `View Pricing` follows as
the secondary action. This order applies on desktop and in stacked mobile CTA
groups.

All mapped content buttons use a 54px height, 999px radius, 16px/700 Plus
Jakarta Sans label, consistent horizontal padding and no decorative arrow. At
767px and below, content CTAs use a common 300px width with `max-width: 100%`.
The shared header action remains content-sized and uses a quieter 44px height,
14px label and 18px horizontal padding on desktop and mobile. Its pale yellow
surface is mixed from the approved yellow and clean-surface tokens so it stays
subordinate to the page hero while retaining a comfortable touch target. At
359px and below, it keeps the 44px height but uses a 13px label and 14px
horizontal padding to keep the wordmark, action and menu trigger inside the
viewport. Navigation, footer links and
intentionally lighter text CTAs retain their link treatment, although text CTAs
still use the canonical destination wording.

Where email is offered below a primary action group, use one compact contact
link with a decorative envelope icon, the visible `Email Sales` label and the
verified `help@antbuildz.ai` address. Do not use an icon-only control or a
separate `Prefer email?` prompt. The icon is hidden from assistive technology
because the adjacent copy already provides the link purpose. Keep the contact
link visually subordinate to the 54px content CTAs while retaining a minimum
44px interactive target and a visible keyboard focus state.

The homepage `From your inventory to recommendation` composition is locked by
direct user instruction. Preserve the centred eyebrow, title and description,
then four large graphic-and-copy rows. On desktop the graphic alternates left,
right, left, right; on mobile the matching label, title and description appear
before the graphic. Routine refinements may change only the contents inside the
four graphic panels. Do not change the section frame, alternating structure,
order, typography hierarchy or copy placement unless the user explicitly asks
to unlock the layout.

The homepage hero uses the approved static mountain-logistics photograph at
`/marketplace/how-it-works/assets/hero-option-2-mountain-logistics.png`. Do not
replace it with a video or a scroll-controlled media reveal. The Agent
conversation is part of the initial hero composition and must be visible when
the page first loads; page scrolling must not control its appearance. Preserve
the high-left title and description, aligned to the public-header wordmark rail,
with one concentrated Agent conversation
anchored at the lower right. The four supporting depth conversations stay
hidden in this composition. Keep the foreground conversation inside the shared
header rail, with its outer right edge aligned to the Book a Demo utility edge
rather than to the viewport. Routine hero refinements may adjust the contents
of the primary conversation, but must not reverse this spatial hierarchy unless
the user explicitly asks to unlock it.

When a component changes, check every route that consumes it. New variants need a functional reason, not only a different appearance.

### Account-entry and demo forms

Public account-entry forms and Book a Demo use one restrained form system. Sign in, sign up, password reset and demo-request pages use the clean surface on the canvas, 22–24px card radii, centred account-page introductions, left-aligned field labels, 54px inputs and primary actions, 15px field text and the standard 16px/700 yellow action label. Decorative auth eyebrows, atmospheric blobs and duplicate in-card logos are omitted; useful operational labels and progress indicators remain. Book a Demo keeps its industrial context and benefits left aligned, while its form follows the same field and action scale. Avoid oversized form headings and letter-spaced pre-title labels on these task-focused pages.

The Public Footer is scoped to Antbuildz AI. Its company description is “We are Building the Intelligence Layer for Industrial Businesses.” Do not display the sales-enquiry label or email address in the footer; dedicated sales and pricing action sections retain their purposeful email contact links. Keep the Marketplace column hidden; Marketplace navigation and support belong on antbuildz.com. Under Company, list About Us, Terms & Policy, AI Help Centre, Resources and Marketplace; Marketplace links directly to `https://antbuildz.com`. AI Help Centre links directly to the AI-only FAQ library at `/help/ai`; the old `/help` and `/faqs` paths redirect there. Do not duplicate Resources in the AI Products column. The footer has no duplicate legal-link strip: `Terms & Policy` is the single footer path to the Agreements hub. The existing language selector belongs in the footer bottom bar, with its full keyboard and dialog behaviour preserved. Preserve the existing footer typography and spacing.

Desktop Industries and Resources dropdowns share a 96% canvas surface with the established 18px backdrop blur. This keeps the header disclosure light while preventing busy page imagery from showing through the menu copy too strongly. Preserve their common panel treatment rather than introducing route-specific transparency.

The homepage Who We Serve section uses a photographic horizontal carousel with all eight audience destinations. Desktop presents one dominant full-colour card and approximately half of the next card as a continuation cue; non-active imagery is brighter and strongly desaturated until its card becomes active. Mobile keeps one touch-readable 84vw card with a partial next-card cue. Cards remain full native links with labelled previous/next controls, keyboard focus activation, scroll snapping and reduced-motion support.

The Data protection & control panel appears once on the homepage immediately before the homepage FAQ. Do not repeat it on the eight Who We Serve pages; those routes move directly from their AI Agent control section to their audience-specific FAQ. Keep the panel text-only: no leading icon, principle icons or privacy-policy action. Preserve its three assurance principles and restrained blue trust surface.

The desktop Public Header uses a three-zone alignment: Antbuildz.AI wordmark on the left, primary product navigation centred to the viewport, and utility controls on the right. Translation is not a header control; the right side retains Sign in and Book a Demo. Because the complete primary navigation is visible at 981px and wider, the hamburger is hidden there and reserved for the transferred shell's compact/mobile state at 980px and below. This public-header rule does not remove operational sidebar or menu controls from the signed-in AI Agent Console.

The AI Sales Agent and canonical AI Webstore Suite hero frames use the same `min(1250px, 90vw)` outer rail as the Public Header. On the split Sales Agent hero, the title begins at the wordmark edge and the phone ends at the utility edge. On the centred Webstore hero, the H1 frame spans both header edges. Preserve these outer anchors when changing hero copy or graphics.

At the top of public marketing routes, the fixed Public Header is transparent and the route's own hero surface continues behind it unless the route has an approved component-owned header relationship. Preserve each overlaid hero's original content position with a header-height spacer rather than copying a page-specific colour into the navigation. AI Sales Agent follows this shared transparent-top relationship. After the visitor scrolls 24px on overlaid routes, restore the shared canvas-and-white blurred header surface for legibility. Home and the canonical AI Webstore Suite retain their established dark-image overlay contrast; the signed-in AI Agent Console remains outside this public treatment. Header dropdown panels retain a lightly translucent canvas-glass surface with enough blur and contrast to remain legible at every scroll position.

The shared Public Header and Footer wordmark uses the supplied high-resolution red `antbuildz` artwork without its legacy `.com` suffix. Append `.ai` in the established Plus Jakarta Sans 850 wordmark typography and Antbuildz yellow `#FFC501`; keep the accessible home label and responsive scaling intact.

Public route transitions use that same Antbuildz.AI wordmark on the canvas surface. The full-colour mark reveals progressively from left to right over a restrained low-opacity base mark; do not show a generic spinner or visible `Loading workspace` wording on public page changes. Keep `Loading Antbuildz AI` as the polite assistive status, and show the complete static wordmark when reduced motion is requested.

Primary desktop navigation order is Products, AI Roles, Industries, Resources, Pricing. Products groups AI Sales Agent, AI Webstore Suite and AI Agent Console in that order, using the established grouped dropdown panel rather than showing long product names in the top bar. This supersedes the previous six-item header. Keep AI Roles visible as a distinct use-case entry, Pricing as a direct link, and Sign in / Book a Demo in the utility area. Mobile retains its existing direct product and role links. Header links, disclosure triggers and Sign in use Inter 600 weight, normal tracking and 1.65 line-height, at 14px desktop / 13px compact. The language label retains its reference 13px / 1 line-height and 750 weight. Disclosure triggers use the same 44px control height as the links, not a full-header-height pill. Selected product pages, open disclosures and keyboard focus use a 3px Antbuildz yellow underline; primary navigation tabs do not use circular or pill-shaped selected outlines.

The primary header has a Resources disclosure in the former AI Agent Console slot. Industries, Resources and AI Roles use the centred dropdown pattern: maximum 1120px wide, 24px viewport clearance, an 88px top anchor, rounded corners and a lightly translucent canvas surface. The header introduction sits above a divider. Industries has eight individual destinations and no overview action. Resources has an All resources action and five educational topics in three groups. AI Roles has an All AI Roles action and five destinations in this order: Sales Specialist, Product Specialist, Customer Support, Technical Support, After-Sales Service. Resources no longer duplicates the role collection: a direct link opens `/ai-roles`. Reuse shared menu label, surface, focus and selection tokens. Menus support keyboard operation, Escape/focus return and at least 44px link targets.

The AI Roles panel presents one title and description followed by its five role destinations in three columns. Do not add an intro eyebrow or category-caption eyebrows; the role names and supporting descriptions provide sufficient hierarchy.

The hamburger drawer retains AI Sales Agent, AI Webstore Suite, AI Agent Console, Pricing, Resources and About Us. Following the approved AI Roles brief, it now includes All AI Roles and five direct role links after Pricing. Do not add Marketplace, duplicate Blog links or expanded Industries/Resources sublists. Detailed industry links remain in the desktop dropdown and shared footer; educational topics remain in Resources. Preserve the existing account header, close control, dialog focus behaviour and shared menu type/colour tokens. Source-rendered legal and role pages expose the same destinations with the existing native mobile menu.

### Public dropdown and menu system

- Apply the shared `--menu-*` roles to Industries, the language selector, the public navigation drawer and the inline AI Agent Roles disclosure. Keep the operational Console's controls separate.
- Menu headings: Plus Jakarta Sans, 24px / 1.25, weight 700, `-0.03em` tracking. Link/option labels: Inter, 14px / 1.4, weight 600. Supporting copy: Inter, 13px / 1.5, weight 400. Group labels: Inter, 12px / 1.4, weight 600.
- Industries and Resources use the canonical 24px/700 Plus Jakarta Sans menu heading and 14px/600 Inter link-label roles. Native language and account-drawer components inherit the 8080 typography, including the drawer’s Plus Jakarta Sans 15px/500 links. These controls retain their current geometry and navigation content.
- Industries and Resources use a 90% canvas-glass surface with an 18px backdrop blur, keeping underlying page colour perceptible without allowing page copy to compete with menu content. Other floating panels retain the near-opaque canvas surface. All share the global subtle border, soft shadow and 24px corners. The drawer retains its side-sheet/bottom-sheet geometry; inline role links do not receive a floating-panel shadow.
- Items use 12px corners/padding and at least 44px touch targets; two-line language options reserve 56px. Hover uses the soft surface; selection adds a pale yellow surface and yellow inset marker, preserving existing checkmarks/expanded semantics.
- Keyboard focus is a consistent 2px blue outline. Header dropdowns share Enter/Space toggling, mutually exclusive opening, outside dismissal and Escape dismissal with trigger focus return. Menus retain native disclosure/dialog behaviour and their existing reduced-motion support.
- Text-labelled header menu triggers (Industries, Resources and language) show an 8px down chevron with an 8px label gap. It inherits the header text colour and rotates upward from `aria-expanded="true"`; disable the transition for reduced motion. Direct navigation links and the hamburger do not receive additional arrows.
- Public dialog overlays sit above the fixed header. Language headers and footnotes must not shrink into the scrolling option list on small screens.

### AI Agent Roles page pattern

Each role detail page uses the H1 format `AI Agent for [role]`, while the role names in navigation, cards and breadcrumbs remain human-readable job labels. Its narrative runs in a consistent order: `What` the Agent can handle, `When` to deploy it through role-specific business situations, and `How` to add knowledge, set rules, test, publish and review it. The preparation checklist follows the deployment workflow. The overview applies the same What, When and How structure so visitors can choose a role before learning how to launch it. Use a balanced mix of conversation-led and role-specific industrial photography: the overview, sales and customer-support heroes emphasise digital customer conversations, while product, technical and after-sales heroes may show products, specifications, parts or service context where that makes the role clearer. Avoid making the complete set resemble an engineering contractor website. Use a varied mix of professionals, including Asian advisers and specialists. Apply one restrained old-film treatment across the overview and every role hero: fine static grain, slightly softened focus, gently reduced saturation and contrast, a subtle warm cast and light vignette. Keep headings, descriptions and actions sharp above the photographic treatment. Each image falls away into the canvas from below, while preserving clear action controls. Related-role cards always use a complete 2 × 2 grid; the five-role overview is a single row on wide desktop, then two complete pairs plus a deliberate full-width final row at compact desktop before stacking on mobile.

## Marketing page narrative

A strong conversion page normally moves through:

1. Specific audience problem and outcome
2. Product proof in the first viewport
3. How the workflow operates
4. Relevant capabilities and boundaries
5. Industrial example or use case
6. Objection handling, FAQ or comparison
7. One clear next action

This is a decision framework, not a mandatory section count. Remove any section that does not clarify, prove, reassure or convert.

## Product and interaction demonstrations

- Demonstrations must use believable industrial data and coherent states.
- Do not show staging remarks such as `Illustrative workflow`, `Illustrative records`, `Illustrative answer` or `Illustrative storefront` in or below permanent marketing graphics. Keep necessary product boundaries—plan/setup dependencies, availability checks, technical suitability and human commercial review—in the relevant product copy or workflow state.
- In all homepage hero conversations, AI replies, requirement profiles and AI typing indicators sit on the left; buyer questions sit on the right. Emma's round portrait replaces the repeated AI name label, and the approved Asian male industrial-buyer portrait accompanies questions. Use blue-tinted glass for Emma and warm yellow-tinted glass for buyers, retaining the industrial backdrop and subdued mobile background layers. Apply the same speaker alignment on desktop, mobile and reduced-motion states.
- A clickable UI demo must not imply a working backend.
- Controls need hover, focus and active states; forms also need disabled, loading, success and error states when relevant.
- Show how an enquiry becomes useful: requirements, matching, quotation context and handover.
- Customer-facing AI Sales Agent name: **Emma**. Do not reintroduce Aira or Aria in visible copy.
- Emma's avatar is the established **woman in the red top**, stored locally at `/images/emma-sales-agent.jpg`. Reuse the shared `EmmaAvatar` component and identity source for agent pictures in chats, phone mock-ups, channel previews and profile demonstrations. Do not use an `ai` monogram, robot, different stock portrait or customer photo in her place. Preserve customer avatars, company logos, user-uploaded identities and the existing larger Emma banner photography.

## Photography and imagery

- Prefer real equipment, warehouse, manufacturing, rental, parts and engineering environments.
- Show the product in a credible operating context.
- Use real interface mock-ups or carefully constructed product demonstrations.
- Avoid generic robots, glowing brains, circuit boards, floating holograms and unrelated office stock photography.
- Provide useful alternative text for meaningful images and empty alternative text for decoration.

## Responsive behaviour

Review at a minimum around 1440px, 1024px and 390px wide.

- Navigation compacts near 1180px and becomes the mobile menu below 980px.
- At 767px and below, major grids stack intentionally.
- Preserve reading order, CTA priority and visible product proof.
- Controls remain touch-friendly and text remains readable.
- The persistent AI Agent launcher compacts to a 56px circular avatar control below the 980px mobile-navigation breakpoint so it does not cover phone or tablet cards and primary actions; its accessible name remains available to assistive technology.
- Complex Console or Webstore visuals should recompose rather than simply shrink into illegibility.
- No horizontal page overflow, clipped headings, overlapping controls or inaccessible off-screen content.

## Accessibility and motion

- Use semantic landmarks and one descriptive H1 per page.
- Preserve logical heading order and labelled navigation.
- Use native interactive elements and expected keyboard behaviour.
- Every focusable element needs a visible focus state.
- Maintain adequate contrast and useful touch targets.
- Respect `prefers-reduced-motion`; the page must remain understandable without animation.
- Motion explains hierarchy, state or progression. It is not background decoration.

## Copy and naming

- Use British English: `catalogue`, `enquiry` and `personalised`.
- Approved product names: `AI Webstore Suite`, `AI Sales Agent` and `AI Agent Console`.
- Use concrete nouns and active verbs: products, specifications, availability, rental, quotation, enquiry and handover.
- Prefer `Book a Demo`, `Build Your AI Agent`, `View Pricing` and `Get Quote` over generic actions.
- Do not invent prices, limits, integrations, security claims, language counts, conversion statistics or performance claims.

## SEO-aware design

- Every public route needs a unique title, description, canonical URL, descriptive H1 and useful internal links.
- Use `https://antbuildz.ai` for canonical, Open Graph, sitemap, robots and structured-data URLs.
- Use the branded 1200 × 630 JPEG at `/images/antbuildz-ai-social-share-v2.jpg` as the default large social preview. Its approved treatment is a full-bleed industrial photograph, one short two-part statement and one transparent Antbuildz.AI wordmark—without a white logo plate, body paragraph, URL strip or repeated logo. Keep its absolute HTTPS URL, dimensions, MIME type and useful alternative text in Open Graph and Twitter metadata; audience-specific pages may retain a more relevant approved image.
- Visible headings should naturally explain the product and audience.
- Structured data must match visible, truthful content.

## Current implementation reality

The local 8081 site currently mounts a copied production bundle to preserve close visual fidelity with the read-only 8080 reference. Shared consistency is therefore partly inherited from that bundle, while `app/globals.css` contains project-level tokens and approved visibility overrides.

A source-level compatibility layer in `app/original-antbuildz-app.tsx`, supported by canonical overrides in `app/globals.css`, now standardises the transferred public shell. It owns Antbuildz.AI wordmarks, approved route aliases, homepage positioning, footer cleanup, typography, destination-owned CTAs and responsive CTA order without editing the minified bundle.

- Do not directly edit minified bundles.
- Prefer source-level components and semantic tokens for new maintainable work.
- Keep transferred-shell corrections centralised in the compatibility layer; do not scatter new DOM or CSS patches across unrelated files.
- Do not claim the entire runtime has been refactored into one component library until that migration is actually completed.
- Treat CSS `display: none` overrides as recorded user decisions, but prefer removing the corresponding source component during a future source migration.

## Design decision test

Before approving a design choice, answer:

1. What visitor job does it support?
2. Is it recognisably Antbuildz and industrial?
3. Does an existing component or token already solve it?
4. Is the hierarchy still clear without colour or animation?
5. Does it work with real content on desktop and mobile?
6. Can it be implemented without fragile overrides?

If the answer is unclear, simplify or inspect more evidence before building.

## Completion standard

Source-rendered public pages must reuse the main site's Industries and
Resources dropdown implementation, not introduce simplified alternatives.
The AI Roles dropdown follows that same grouped panel and menu type system.

Design work is complete only when the rendered interface has been inspected, changed interactions have been exercised, representative desktop and mobile layouts have been checked, relevant tests have run, and remaining limitations are reported honestly.
