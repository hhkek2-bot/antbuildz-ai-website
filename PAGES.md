# Antbuildz.AI Page Register

This register preserves route intent and design status between sessions. Read it before page work and update it when a route, primary CTA, source relationship or QA status materially changes.

## Status language

- **Reference matched** — transferred from an approved 8080 reference and previously compared.
- **Project original** — designed specifically for Antbuildz.AI rather than copied from 8080.
- **Review required** — route exists, but a new visual/responsive audit is needed after recent or future changes.
- **Planned** — required route is not yet complete.

## Core pages

| Route | Primary visitor job | Preferred primary CTA | Design source | Current status |
| --- | --- | --- | --- | --- |
| `/` | Understand industrial product selection and explore the Agent or Webstore | Book a Demo | Protected industrial hero and Emma component, with source-owned educational body | Hero uses the approved static mountain-logistics photograph. The Agent conversations are visible on the first frame and no longer depend on page scrolling. Initial HTML still lacks visible content/links; server-rendering migration and production performance/indexing checks remain open. Details and evidence below |
| `/ai-webstore-suite` | Understand the Webstore product and industrial catalogue workflows | Book a Demo | Selected Webstore listing workflow formerly reviewed at `/webstore-2-ai-webstore-preview` | Canonical product page now uses the approved dusty-ochre listing workflow, mixed-category catalogue enrichment, product-page handoff and Emma recommendation experience. Canonical metadata is indexable at `https://antbuildz.ai/ai-webstore-suite`; the former preview URL redirects here. Desktop, compact and mobile QA pass with one H1 and no horizontal overflow |
| `/ai-sales-agent` | Understand standalone AI-guided qualification and handover | Build Your AI Agent | `/aiagent` on 8080 | Separate shared-header band and original 96px hero inset restored from the reference relationship; current copy, navigation, phone graphic and hero composition remain unchanged. Responsive QA details are recorded below |
| `/ai-agent-console` | Understand how teams control knowledge, instructions and conversations | Book a Demo | `/app` on 8080 | Reference matched; operational typography unchanged against baseline |
| `/pricing` | Compare approved product plans and choose a next step | Build Your AI Agent, Book a Demo or Contact Sales | Transferred content; Gorgias-inspired wider plan layout | Three standard cards with shorter, balanced descriptions and shared price/allowance/CTA baselines; checked at 1440px, 1100px, 1024px and 390px. Ivory/gold hover, Custom panel and commercial terms retained; legacy entitlement decisions pending below |
| `/resources` | Discover practical industrial AI education | Explore a Guide | `/resources` on 8080 | Transferred composition retained; shared typography passed 1440px/390px QA; grouped header dropdown, all topic destinations and mobile access verified |
| `/resources/ai-agent-roles` | Understand specialist AI roles and their boundaries | Build Your AI Agent | Resources role library | Review required: direct route renders Article not found; the Resources role collection and existing individual guides remain available |
| `/help/ai` | Resolve Antbuildz AI product and setup questions | Browse AI FAQs | Transferred AI Help Centre | AI-only FAQ library; Marketplace-specific questions are excluded. `/help` and `/faqs` redirect here; Marketplace help routes leave this website for antbuildz.com |
| `/about` | Understand the industrial history and reason Antbuildz AI exists | Book a Demo | `/about` on 8080 | Transferred composition retained; shared typography passed 1440px/390px QA |
| `/book-a-demo` | Share contact details, then choose a demo time | Continue to Calendly | Existing transferred demo-request form | Header-to-form navigation, validation and Calendly handoff verified at 1440px. 8081 restarted with permission; final responsive QA blocked by Browser Use URL policy. No separate lead storage or booking confirmation implemented |
| `/agreements` | Find Antbuildz AI privacy and product policies | View Terms | Existing transferred agreement directory | AI-only presentation: privacy/data and AI product policies remain; Marketplace policy categories and notes are hidden without detaching source documents |

## Reference typography restored — 2026-08-28

- **Fidelity mode, typography only:** Public pages once again inherit the transferred 8080 component fonts, sizes, weights, line-height and tracking. Removed the later blanket public typography overrides, while preserving the operational Console font scope and all non-typographic layout corrections.
- New homepage sections use reference-derived type tokens. The homepage hero restores the original 64px maximum / 800 weight; the new FAQ retains its approved layout with the reference's 500-weight questions. The Market Shift introduction and cards use the Webstore reference's type sizes. Header navigation restores Inter 750; native drawer/language text returns to its reference styles.
- Compared computed typography on Sales Agent, Webstore, Rental & Leasing, Pricing and Resources at 1440px. Matching sampled elements agree on sizes, weights, line-height and tracking; Sales Agent and Rental also matched at 390px. Reviewed homepage hero, body and FAQ across 1440×1000, 1024×900 and 390×844, with no measured page overflow. These are representative checks, not a new audit of every route or embedded demonstration.
- Source changes are CSS-only, plus tests and design records. The scope audit confirms 2,484 non-typography declarations in the global stylesheet are unchanged. No wording, navigation structure, colours, spacing, images, animations, phone dimensions, configuration or services changed. Natural line wrapping can differ with the restored font metrics.
- Evidence: `artifacts/reference-typography-20260828/`. This typography decision supersedes earlier typography-standardisation notes; earlier content and layout decisions remain in force.

## Homepage educational body — 2026-08-28

### Latest: Mobile, copy and SEO audit — 2026-08-29

- **Audit followed by scoped Design/copy improvements.** Added a product/audience eyebrow and benefit sentence to the approved hero, preserving its H1, photography and typography. Chat positioning follows the new introduction. Shortened Market Shift and industrial-context descriptions, the selection heading and FAQ introduction; retained all sections, four selection stages, Agent-first positioning and optional Webstore.
- Improved the 320px timeline with a 36px numbered rail, 12px gap and 16px card padding. Homepage mobile footer text links now have 44px target heights. No global font-size reductions. Removed illustrative timer/supplier numbers in favour of descriptive labels.
- Shared homepage metadata now agrees between initial HTML and the transferred app's rendered head. Canonical, Open Graph, share images and route schema use antbuildz.ai; no changes to other routes' metadata policy. Added a high-priority hero image preload without claiming a measured speed gain.
- Visually reviewed representative states at 320×740, 375×667, 390×844, 768×1024 and 1440×900. No measured horizontal page overflow; 320px text clipping resolved. Five mobile FAQs and the drawer opened/closed; Book a Demo reached its request form without submission. All 54 tests, targeted ESLint and production build pass.
- **Open:** initial server HTML has no headings or links until JavaScript runs. Source-owned server rendering, hero/bundle optimisation, production indexing/performance and manual keyboard/screen-reader/OS-motion checks remain separate launch work. All 25 checked internal destinations return HTTP 200, but that does not exclude soft 404s; browser URL policy blocked the final Sales Agent destination inspection.
- Report, copy rationale, before/after snapshots and verification logs: `artifacts/homepage-mobile-seo-20260829/AUDIT.md`. Shared design rules, configuration, services, reference files and deployment unchanged.

### Follow-up: confirmed audit application and verification — 2026-08-29

- Tightened the Market Shift heading and card labels around industrial buyer behaviour, while retaining cautious language around AI-assisted discovery. Simplified the Webstore explanation and kept AI Sales Agent as the starting product.
- Corrected the homepage H1 and connected-product H2 text-node spacing without changing their two-line visual treatment. Homepage WebPage and WebSite schema now match the document language (`en-SG`) and share the revised description.
- Below 768px, only the central hero conversation is rendered visually and animated; the supporting depth conversations are hidden. The compact hero is capped at 1120px at 390×844, down from 1320px. Footer links retain a minimum 44px height through 1179px.
- Rechecked 1440×1000, 1024×900 and 390×844 in the live 8081 browser. There is no measured horizontal page overflow; mobile shows one conversation and has no visible control below 44px. Browser logs contain no runtime warnings or errors after refresh.
- All 54 tests, source-scoped ESLint and the production build pass. The repository-wide lint command still scans the transferred compiled files under `public/` and reports their pre-existing generated-code violations; no copied bundle or lint configuration was changed. Open launch work remains server-rendered initial content and hero/bundle performance, including the approximately 1.9 MB hero image.

### Latest: Agent-first product cards with optional Webstore

- **Design mode, 2026-08-28:** The connected-workflow section now leads with AI Sales Agent and gives its desktop card 20% more width than Webstore. A visible plus joins the cards; “Start here” and “Optional addition” make the hierarchy clear without relying on colour. Mobile stacks Agent, plus, then Webstore at equal readable widths.
- Copy positions Webstore as product discovery and a structured catalogue/specification/inventory library the Agent can reference for better-informed recommendations. Standalone Agent use remains explicit; inventory connections depend on plan and setup. No guaranteed accuracy or live-stock claim is added.
- Each card has one native link, with its hit area extended over the card, to `/ai-sales-agent` or `/ai-webstore-suite`. Desktop card-heading clicks and the mobile Webstore CTA reached the correct routes. Typography, existing illustrations, other homepage sections and product-page copy are unchanged.
- Rendered checks passed at 1440×1000, 1024×900 and 390×844, with 16px descriptions, aligned desktop cards and no measured text clipping or page overflow. All 52 tests, targeted ESLint and production build pass. Automated Tab did not move browser focus; native keyboard activation remains unverified. Evidence: `artifacts/home-product-relationship-20260828/`.

### Product-card scale and Webstore discovery refinement — 2026-08-29

- Reduced both product illustrations from 256px to 224px on larger screens and 208px on mobile, removing their negative horizontal margins so the graphics sit more comfortably inside the cards. The Agent remains the wider primary card and Webstore remains the optional addition.
- Repositioned Webstore as a connected product and supported-inventory library that gives the Agent more reliable context for better-informed recommendations. Added explicit, plain-language organic visibility roles for search engines (SEO) and generative AI discovery (GEO).
- Inventory freshness is qualified by the supplied data, selected plan and configured connections. The copy does not claim live stock, guaranteed accuracy, rankings or traffic outcomes.
- Live checks at 1280×720 and 390×844 show the intended 224px/208px graphics, unchanged card destinations and no horizontal overflow. All 54 tests and source-scoped ESLint pass; production build completed successfully.

### Latest: Ingest → Reason → Retrieve → Recommend

- **2026-08-28, Design mode with copywriting review:** The homepage selection timeline now uses these four verbs, each with a plain-language label and a concise explanation. Ingest establishes approved product knowledge; Reason clarifies the buyer's requirements; Retrieve finds relevant catalogue and supported inventory information; Recommend explains a shortlist and flags what the team must confirm.
- Retained the existing headline, alternating timeline, colours, typography and CTAs. Updated the introductory paragraph, accessible list label and miniature illustrations to follow the new concept. This is a conceptual product story, not a verified backend execution diagram or a new technical capability.
- Inspected at 1440x1000, 1024x900 and 390x844 with readable wrapping and no page overflow. Body copy remains 16px. All 52 tests, targeted ESLint and production build pass. Unrelated homepage source is unchanged. Evidence: `artifacts/home-selection-copy-20260828/`.

### Earlier: red accent for the final selection step

- **Design mode, colour-only refinement:** Step 04, “Explain the shortlist”, now uses the existing brand red instead of heading ink. Its number badge, illustration icon, label tint and progress line inherit the same accent. Typography, wording, spacing and the other three steps remain unchanged.
- Browser-inspected at 1440×1000, 1024×900 and 390×844; no clipping or mobile overflow. All 50 tests pass. No new interaction or motion; build was not repeated for this single-variable colour change. Evidence: `artifacts/homepage-review-colour-20260828/`. Shared design rules, configuration and services are unchanged.

### Latest: FAQ matched to Who We Serve

- **Fidelity mode:** Replaced the split FAQ presentation with the industry FAQ pattern: white canvas, centred introduction, 1180px frame, divider rows and circular expand icons. Removed the book illustration and yellow chip from this section. All five questions, answers and introduction wording remain unchanged; Book a Demo now sits below the list and still links to `/book-a-demo`.
- Native details/summary elements retain independent expansion, shared typography and visible focus. Scoped styles reproduce the industry pattern on a fresh homepage visit because the transferred industry stylesheet is route-loaded. Mobile descriptions remain 16px; reduced-motion disables icon transitions.
- Browser-reviewed at 1440×1000, 1024×900 and 390×844. All five desktop disclosures open and close; first and last were also exercised on mobile. No horizontal overflow. The demo link opens the existing request form. Remaining homepage body, Emma and footer match the baseline after normalising generated CSS hashes.
- All 49 tests, targeted ESLint and production build pass. Automated Enter input did not toggle the native disclosure, so keyboard activation is not verified; visible focus was inspected. OS reduced-motion was not emulated. Evidence: `artifacts/homepage-faq-match-20260828/`. No configuration, service, shared design rule, reference-project or deployment changes.

### Latest: subtle colour in Who We Serve

- **Design mode, colour-only refinement:** Added repeating gold, blue, violet and red accents to the eight industry icons, arrows and short divider segments. The existing canvas, four/two/one-column layout, wording, type sizes and item dimensions remain unchanged. Native links gain a pale matching hover/focus background with an underline; existing focus outlines remain.
- Uses shared colour tokens through homepage-scoped custom properties, with original fallback styles for the shared industry icon. No new motion, assets, links or controls. All eight mobile links retain 44px height and descriptions stay 16px.
- Browser-inspected at 1440×1000, 1024×900 and 390×844; hover verified, no clipping or horizontal overflow. Baseline comparison confirms unchanged body markup, item dimensions and fonts after normalising CSS-module hashes. All 49 tests and production build pass. Evidence: `artifacts/homepage-industry-colour-20260828/`. No config, services, shared design rules or reference-project changes.

### Latest: removed the illustrative selection comparison

- **Fidelity mode, scoped removal:** Removed the “Illustrative selection example” table and its following review paragraph, as identified in the user's screenshot. The four-step timeline remains intact. Removed table-only styles and the obsolete gap below the timeline; normal section padding remains (104px desktop, 64px mobile).
- Remaining educational-body and timeline HTML match the pre-removal baseline after normalising CSS-module class hashes. Emma and footer HTML are identical. The Agent-foundations section and FAQ still explain the team's technical/commercial review responsibility.
- Visually checked the transition into the next section at 1440×1000, 1024×900 and 390×844. No horizontal overflow or empty table space. All 49 tests, targeted ESLint and production build pass. Evidence: `artifacts/homepage-comparison-removal-20260828/`. No file deletion, configuration changes, service restart or reference-project edits.

### Latest: four Agent foundations as homepage section three

- **Design mode with supplied layout reference:** Added `HomeAgentFoundations` directly after Market Shift, before the existing industrial-context section. Exactly four cards: Your company brand, Your product inventory, Your technical specifications, and Suitable recommendations. The reference's wide/narrow then narrow/wide composition is adapted to the shared typography, 24px card corners and restrained industrial interface visuals.
- Copy uses approved guidance and product information instead of claiming model training or guaranteed accuracy. Connected inventory is qualified by supported plans/setup; the recommendation card and section note preserve final technical/commercial review by the user's team. Existing business copy, comparison table, timeline and Emma/footer HTML are unchanged against the captured baseline.
- Reuses the shared Emma portrait, existing local equipment/tools/parts images and shared icons. Company branding is a clearly labelled placeholder; product panels are illustrative, with no live stock, numeric specifications, rates, results, integrations or backend controls. Static scenes add no motion or dependency.
- Browser QA passed at 1440×1000, 1024×900 and 390×844. Desktop alternates wide/narrow cards; compact uses two equal columns; mobile stacks all four at 351px wide with 16px descriptions. All images load; no measured page overflow or clipped text. Corrected the avatar's aspect ratio and balanced the mobile heading during review.
- All 49 tests, targeted ESLint and final production build pass. Evidence: `artifacts/homepage-foundations-20260828/`. No shared design/configuration edits, service restart, deployment or reference-project changes.

### Foundations section: single-viewport desktop presentation — 2026-08-29

- Reworked the four foundations into one compact four-column row from 980px upwards. Reduced section padding, internal gaps and interface-scene scale while preserving all four headings, descriptions, industrial illustrations, disclaimer and Agent-first narrative.
- The section measures 716px at the minimum checked desktop viewport of 980×720, 697px at 1024×900 and 695px at 1440×900, so its full heading, cards and disclaimer can be presented without section-level scrolling. No card content is visually clipped and there is no measured horizontal page overflow.
- Below 980px, the existing readable two-column/tablet and one-column/mobile layouts remain. This follows the new shared rule in `DESIGN.md`: non-progress sections should aim to fit one desktop-landscape viewport, while tablet/mobile readability and touch accessibility override viewport-fit compression.
- All 54 tests, source-scoped ESLint and the production build pass. No wording, destinations, images, interactions, services or reference files changed.

### Latest section update: catalogue-to-recommendations timeline

- **Fidelity mode:** Applied the supplied flow reference to “From technical catalogues to suitable recommendations”: centred introduction, alternating white cards, a thin central spine, numbered circles, compact interface illustrations, stage labels and progress strips. Preserved the four existing step titles/descriptions, intro, comparison table and review note. This is a style adaptation, not a replacement with the reference's Webstore wording.
- Reuses shared typography, colours, icons and surface tokens. Body descriptions remain 16px. Below 768px, all four cards stack beside a left-hand spine. No new motion, interactions, dependencies or commercial claims; miniature interfaces are decorative and not presented as functioning controls.
- Browser-inspected at 1440×1000, 1024×900 and 390×844. No horizontal overflow or clipped mobile text; all four mobile cards are 287px wide. Baseline comparison confirms unchanged section wording, comparison table and remaining educational body (normalising CSS-module class hashes), plus identical Emma/footer HTML.
- All 49 tests, targeted ESLint and production build pass. No config, service restart, deployment, shared design rule or reference-project edits. Evidence: `artifacts/homepage-selection-timeline-20260828/` and the matching entry in `design-qa.md`.

### Latest hero update: two additional outer conversations

- **Design mode:** Added Hardware & Trade cordless-drill qualification on the outer left and Buggies & Vehicles fleet qualification on the outer right. Both transcripts and checking responses are copied from their Who We Serve examples. The rental, manufacturer and aftermarket conversations, title and hero photograph remain unchanged.
- Five staggered glass conversations appear from 1180px upwards. Below 1180px, the two outer layers are hidden and their progression pauses; the established three-chat layout remains. All five use the same renderer, AI-left/buyer-right alignment, off-screen/hidden-tab pause and route cleanup. No new performance or product claims.
- Browser checks: 1440×1000 and 1280×720 show all five layers; 1024×900 and 390×844 retain three. No page overflow. Verified speaker alignment, distinct progression, hidden outer-layer pause, homepage-only rendering and preserved original chats/title/body/Emma/footer. Reduced-motion behaviour is unit-tested; reduced-transparency and no-blur fallbacks are source-checked, not emulated.
- All 49 tests, targeted ESLint and production build pass. Evidence: `artifacts/homepage-five-chats-20260828/`. No configuration, services, dependencies, copied bundles or reference-project changes.

### Latest: remove the second section

- **Fidelity mode:** Removed the homepage render/import of `HomeEnquiryGap` at the user's request. Market Shift now directly follows the hero. No component files were deleted; its CSS module remains shared by Market Shift. The original Webstore page is untouched.
- Remaining educational-body HTML, Emma and footer exactly match the pre-removal baseline. No styling, copy, animation, route, CTA or shared-design changes. Regression tests assert the Gap section is absent and Market Shift starts the body; all 49 tests and targeted ESLint pass. Production build was not repeated for this render-only removal.
- Visually inspected the hero-to-Market-Shift transition at 1440×1000, 1024×900 and 390×844. No leftover section gap or horizontal overflow; existing four/two/one-column layouts remain intact. No interaction behaviour changed.

### Requested “Market Shift” as section three

Historical placement: the latest removal above moves Market Shift to section two.

- **Fidelity mode:** Added “AI Is Changing How B2B Buyers Buy” immediately after The Gap. The four cards retain the supplied screenshot's wording, illustrations, colours, white canvas and alternate 80px desktop stagger. Implementation is isolated in `app/home-market-shift.tsx` and its CSS module; the original Webstore section is unchanged.
- Reuses the transferred Gap section's typography, card surfaces and motion controls. Four columns on wide desktop, two from 768–1179px, one below 768px. The tablet breakpoint was adjusted after visual inspection found squeezed illustration labels in four columns at 1024px. Desktop/tablet/mobile screenshots show no horizontal overflow or clipped heading/paragraph text.
- Decorative clock animation has a native pause/play button, verified with pointer activation and pressed/animation states. Reduced-motion CSS is source-checked; browser emulation and manual keyboard activation were not repeated. A small note identifies the reference's timings and supplier scores as illustrative, not measured results.
- Existing body HTML (excluding the inserted section), Emma and footer exactly match the baseline. Shared CSS, Gap files, graphics, original app wrapper, route entry, mounting logic and copied Webstore bundle have unchanged hashes. No configuration, dependency, restart, deployment or reference-project changes.
- All 49 tests, targeted ESLint and production build pass. One build attempt encountered a transient `ENOTEMPTY` output-directory error; a retry passed after checking for other active builds, without manual cleanup or configuration changes. Evidence and limitations: `artifacts/homepage-market-shift-20260828/HANDOVER.md`.

### Requested “The Gap” section below the hero

- **Fidelity mode:** Transferred the six “Why Industrial Product Enquiries Get Lost” cards from the original Webstore section, using the read-only reference source. Preserved all headings, descriptions, category labels, colour accents, illustration composition and micro-animation timings. The original Webstore section remains in place. Source-owned implementation: `app/home-enquiry-gap.tsx` and its scoped CSS module, rendered before the existing `HomeEducationBody` content.
- Uses the shared Plus Jakarta Sans/Inter roles and homepage canvas, retaining the reference's 24px card corners, 230px illustration areas, 1280px frame, three/two/one-column responsive grid and supporting-copy size. The added pause/play button controls the decorative animations; reduced-motion CSS disables animation and hides the redundant control. It introduces no commercial action or backend behaviour.
- Inspected at 1440×1000, 1024×900 and 390×844, with desktop reference comparison and mobile wrapping/containment checks. Measured section top meets the hero bottom exactly. All six cards render; no heading/paragraph clipping or horizontal page overflow. Pause and play work with pointer activation and expose the correct pressed state. Keyboard focus is visible, but the browser tool's Enter action did not toggle the native button; manual keyboard confirmation remains pending. Reduced-motion CSS is source-checked, not browser-emulated.
- Existing educational-body HTML, Emma and footer match the captured baseline exactly. Shared styles, original app wrapper, homepage mounting logic and copied Webstore bundle have unchanged hashes. No reference edits, dependency installation, configuration, restart or deployment. All 49 tests and targeted ESLint pass. Evidence and final build status: `artifacts/homepage-gap-20260828/HANDOVER.md`.

### Graphic refinement

- Added scoped SVG/CSS illustrations in `app/home-graphics.tsx` and its CSS module: technical catalogue sheets, four linked selection icons, outcome symbols, a requirement-to-sales-review handover, a miniature Webstore, eight industry symbols and a small FAQ book. Reused three local product thumbnails without adding specifications, stock claims or prices. The product scenes are explicitly illustrative, with no fake controls.
- Reviewed Remotion guidance and chose static graphics for this modest page enhancement. No video player, dependency, timers or new animations; the existing hero motion is untouched. All approved body headings and paragraphs match the captured baseline exactly. Body copy remains 16px, using the existing typography system.
- Inspected 1440×1000, 1024×900 and 390×844. Fixed a storefront-caption collision and increased mobile catalogue clearance. Final measured states have no horizontal overflow or clipped text; all three thumbnails load and product captions have at least 15px clearance. All five native FAQ disclosures opened and closed with pointer activation. Keyboard and reduced-motion emulation were not repeated in this graphics-only pass.
- Hero desktop dimensions and Emma/header/footer HTML match the baseline. Source hashes confirm that the original app wrapper, shared CSS, layout, product routes/copy, homepage mount and transferred bundle are unchanged. No configuration, service restart, deployment or reference-project changes.
- Homepage tests, targeted ESLint and production build pass. The final full suite has 47 passes and two failures in the separately changing Webstore preview (specification-rendering assertion and chat-timing assertion). Those preview files were not edited here; do not describe the complete suite as passing. Evidence: `artifacts/homepage-graphics-20260828/HANDOVER.md`.

### Original educational-body implementation

- **Design mode, latest brief incorporated:** The homepage now moves from the unchanged hero into industrial context, four selection stages (catalogue, requirements, filtering/ranking, explanation), one static illustrative table, two product summaries, eight compact industry links, the unchanged Emma component and five native FAQ disclosures. The Webstore summary explicitly covers a branded storefront, dedicated product pages and unique URLs, shareable product information, and pages designed to support organic and AI-powered search discovery. Standalone Agent use remains explicit; no new commercial guarantees, prices, integrations or capabilities are introduced.
- **Source isolation:** `app/home-education.tsx` and its CSS module render into source-owned sibling slots managed by `lib/home-education-mount.ts`, mounted only by `app/page.tsx`. The complete hero/scroll container and original Emma element remain untouched. Legacy industry chapters and FAQ stay mounted but hidden/inert so their original React owner can safely unmount them. Existing assets and routes are retained. This homepage-specific composition supersedes the earlier paired-chapter rendering; it is not a new shared design-system rule.
- **Responsive review:** Inspected the actual homepage at 1440×1000, 1024×900 and 390×844. No measured page overflow or clipped new-content elements. Corrected the mobile table's first-column width after finding an awkward word break. New body copy remains 16px; mobile table text uses the existing 14px supporting role. Product/industry/Console links and FAQ controls meet at least 44px touch heights; the demo action is 54px.
- **Protected comparison:** Desktop and mobile baseline/final dimensions, padding, fonts and backgrounds match exactly for the hero section, hero frame, Emma section, Emma heading and Emma action. Emma, header and footer HTML plus homepage metadata match the desktop baseline exactly. Hero initial and conversation screenshots were compared; all three layers remain present, and the desktop scroll-450 animation CSS values match. The original compatibility layer, shared CSS, copied homepage bundle, product copy modules and route metadata files were not edited.
- **Interactions:** Followed all eight industry links, Agent, Webstore and Console links to their expected destinations; no homepage slots appear on those routes. The final demo action opens the existing request form and Continue to Calendly control. No form submitted. All five FAQs open and close with pointer activation. Keyboard focus is visible, but automated Enter/Space did not reliably trigger native disclosure activation; manual keyboard confirmation remains pending. No custom keyboard handlers were added to native summaries.
- **Checks:** All 49 content/regression tests, targeted ESLint and production build pass. New tests cover four-stage/product positioning, eight exact industry destinations, five native FAQs, a 500–700-word bound, route isolation, idempotent mounting, cleanup and restoration of the legacy nodes. Browser inspection confirms one H1 and no CSS animations in the new educational body. Reduced-motion behaviour was preserved in source, not separately emulated.
- **Separate findings/limits:** Existing rendered canonical/structured-data URLs still contain localhost/antbuildzai.com; metadata was intentionally preserved under the brief. The Console has an operational layout with a hidden Overview H1, so its smoke check used the visible Your Agents section. Concurrent changes appeared in the separate Webstore preview component, CSS and PRODUCT-SOURCES.md during this task; those files were not edited or reverted here, and an exact preview baseline comparison is not claimed.
- Evidence, implementation file list and desktop/mobile screenshots: `artifacts/homepage-education-20260828/HANDOVER.md`. No configuration changes, service restarts, file deletions, dependency installations, deployment or reference-project edits.

### Homepage catalogue-to-shortlist graphic redesign — 2026-08-29

- **Design mode:** Reduced the four-step process footprint and replaced the generic stage graphics with one specific industrial workflow: ingest a reach chart into structured coordinate data, reason over the buyer's stated requirement to choose the next useful question, retrieve and compare supported catalogue/inventory records, then present an explained recommendation for sales review.
- The reasoning graphic shows only user-facing decision stages and the follow-up question; it does not expose private chain-of-thought. Product matches remain explicitly illustrative, and availability, site suitability and commercial terms remain subject to the sales team's review.
- Used lightweight native React/CSS motion instead of embedding a Remotion video. Scan, transfer, comparison and status cues stop under `prefers-reduced-motion`. On mobile, each title and explanation now precedes its matching graphic so the associations remain clear while scrolling.
- Browser QA passed at 1440×1000 and 390×844 with no horizontal overflow, clipped section text or console errors. All 59 tests, source-scoped ESLint and the production build pass. Port 8081 remained available and was not restarted; no configuration, deployment, dependency or reference-project changes were made.

### Wide desktop header frame alignment — 2026-08-29

- **System mode:** On desktop widths from 1400px, the shared public header aligns its left wordmark and right utilities to the same 1280px content frame used by homepage section two. The full-width header surface and viewport-centred primary navigation are preserved; compact desktop and mobile navigation rules are unchanged.
- Browser QA at 2048×1000 measured matching 384px left and right edges, a primary-navigation centre of 1024px and no horizontal overflow. The Resources panel stayed inside the viewport. Compact 1024×768 and mobile 390×844 states retained their existing padding and controls without overflow. All 60 tests, targeted ESLint and the production build pass; port 8081 returns HTTP 200 and was not restarted.

## AI Webstore Suite positioning audit — 2026-08-28

- **Current scope correction:** The user clarified that the attached wording brief is for `/webstore-2-ai-webstore-preview`, not the original page. The mistaken main-page implementation is reversed. Copy now runs only from the preview component and has a strict preview-path guard. Current evidence: `artifacts/webstore-preview-wording-20260828/HANDOVER.md`. Earlier original-page QA below is historical, not the current implementation.
- Audit mode, following the user's direction that AI Sales Agent is the core product and AI Webstore Suite is an optional connected catalogue/inventory capability that supports product matching. No application copy or design changes were made.
- Reviewed the current rendered hero, all main sections and comparison rows, all six expanded FAQs, Console tab copy, deployment labels/examples, and metadata. Hero inspected at 1440×1000, 1024×900 and 390×844; comparison and inventory sections inspected on desktop and mobile. This is copy/positioning evidence, not a complete interaction, accessibility or backend approval.
- Main conflicts remain: “our primary product,” Agent as a “focused alternative,” repeated “included”/“built-in” framing, and the two “lighter way to start” links. The connected-inventory section is the closest match to the requested hierarchy. Statistics, integration/language claims and plan boundaries need evidence or qualification.
- Followed the final “Get an AI Webstore Suite Demo” action: it opens `/trial` / “Create Your Chat Agent,” while top demo links target `/book-a-demo`. No form submitted. Legacy/current canonical and Open Graph URL tags both remain present.
- Full section review, proposed hero/comparison/FAQ wording, screenshots and evidence limits: `artifacts/webstore-positioning-audit-20260828/REVIEW.md`. The current CTA and prior layout QA remain recorded; the proposed content and reading order are not an approved implementation or new commercial specification.

## Agreement directory cleanup — 2026-08-28

- Source review followed by scoped Design-mode cleanup. The intended hierarchy is one introduction, three category controls and the selected document list. Repeated library/category eyebrows, decorative counts/numbers, redundant intermediate-page links and repeated document-role labels are hidden without removing React-owned nodes. Verbose implementation notes are shortened to honest document-availability notes.
- Existing category handlers, all 17 unique external document destinations (18 document rows across categories), document titles and update dates remain intact. Singapore and Malaysia groupings and the other-markets guidance remain. Actual legal documents and detail-page implementations are unchanged; Marketplace is explicitly identified as antbuildz.com.
- Scoped CSS uses the approved Plus Jakarta Sans / Inter roles, neutral canvas, restrained selected state and visible focus. Duplicate callout boxes/gradients and excess heading space are reduced. No shared design rule, copied bundle, configuration, reference-project file or service was changed.
- Added the existing hub to the route catalogue/sitemap and llms.txt with unique server metadata. HTTP response is 200 and server-rendered title, description, canonical and Open Graph URL use antbuildz.ai. The existing robots rules already cover the route; rendered metadata from the copied client remains unverified.
- Verification: production build, 33 content tests and targeted ESLint pass. The new unit test covers repeat application, newly mounted category content, preserved URLs/dates, labelled document actions and no-op behaviour on other pages. This is a mocked DOM test, not a browser interaction test.
- **Visual QA pending:** Browser Use URL policy blocked access to the stale `ERR_CONNECTION_REFUSED` browser error page, although HTTP checks show the local server running. Asked the user to manually reopen `/agreements`. No accepted screenshots or rendered desktop/tablet/mobile checks were possible in this pass; do not treat the page as visually approved until that review is completed.

## Local design previews

| Route | Purpose | Primary CTA | Status |
| --- | --- | --- | --- |
| `/webstore-2-ai-webstore-preview` | Preserve old review links after the selected design became the canonical AI Webstore Suite | Redirect to AI Webstore Suite | HTTP 307 redirect to `/ai-webstore-suite`; no separate header link, indexable page or competing canonical remains. Historical preview design decisions below now describe the experience promoted to the canonical product route. |

The selected Webstore experience remains isolated in `app/webstore-2-ai-webstore-preview/` for implementation continuity, but now renders only from canonical `/ai-webstore-suite`. The former preview route is a compatibility redirect and no longer owns metadata or navigation.

Current background colour trial (28 August 2026): the preview hero retains its equipment-yard photograph with a muted blue-grey treatment and a subtle warm highlight. White heading text, glass surfaces, product imagery and the internal store banner are unchanged. All 45 tests and the production build pass; the preview returns HTTP 200. Rendered review remains pending because browser discovery reports crashed/unreachable tabs. This is a local colour experiment, not an approved shared design rule.

**2026-08-28 initial preview QA:** The complete 26-second listing → enrichment → photos → product-page → recommendation loop passed. The same three card elements retain product identity through the shrink transition; original-page navigation restores the original hero. Canonical, social URL and noindex metadata are corrected within the preview only. Build, 35 content tests and targeted ESLint pass. Full TypeScript checking still reports unrelated shared/archived source errors. Existing inherited page-content issues remain outside this hero-only scope. Evidence and limits are recorded in `design-qa.md` and `artifacts/webstore-listing-concept/`.

**2026-08-28 inventory refinement:** The inventory now shows Model, Brand, Equipment, Category, Capacity, Power, Lift height and Application. Models arrive first with the other cells empty; AI fills seven attributes per listing with a 0–21 field counter, progress bar and completion state. The loop is now 28 seconds. Mobile fields regroup into labelled rows. All fifteen width/stage combinations, the model-only state, partial enrichment, full loop and original-page isolation passed. Build, 35 tests and targeted ESLint pass. Sample brands/models are explicitly fictional. Evidence: `artifacts/webstore-listing-concept/inventory-enrichment/`; shared design rules and the original hero remain unchanged by this refinement.

**2026-08-28 Webstore and phone refinement:** Scene 2 now contains one branded Webstore window with search, category navigation, a catalogue heading and the three square-photo listing cards. Scene 3 uses a 324 × 668 px portrait phone with stacked recommendations; it narrows and centres on mobile. Ratings and verified badges remain absent. All 15 combinations of 1440, 1024, 800, 390 and 320 px with the three stages passed containment, square-image and text-fit checks. The full 28-second sequence, progressive enrichment, product identity/URL handoff, pause/replay, preview metadata and navigation back to the original hero passed. Current browser access was restored; checks used the connected browser and a local fixture that renders the actual route in sized iframes. Evidence: `artifacts/webstore-listing-concept/storefront-phone/`. This supersedes the earlier square-card visual-QA block; the original route and shared design system remain unchanged by this work.

**2026-08-28 square-photo revision — visual QA pending:** Fidelity-mode changes follow the user's listing-card screenshot: full-width 1:1 photos, clean brand/model and equipment titles, a sample Singapore location row and three bordered specification cells. No ratings or verified badges; photo labels, repeated gallery thumbnails and the recommendation badge are omitted. Existing specifications replace the reference's unrelated rental prices; unique product URLs remain. Upload and chat images also use square dimensions. Build, 39 content tests and targeted ESLint pass. Browser URL policy blocked the rendered check, and no alternate browser workaround was used. New square-image/containment assertions are prepared but not yet executed. See `design-qa.md`; the earlier visual passes do not verify this revision.

## Who We Serve

| Route | Audience | Page job | Status |
| --- | --- | --- | --- |
| `/rental-businesses` | Rental and leasing companies | Show qualification of hire requirements and quote-ready handover | Active; shared typography passed 1440px, 1024px and 390px QA |
| `/manufacturers-brands` | Manufacturers and OEMs | Show technical product guidance and sales/engineering routing | Active; shared typography passed 1440px/390px QA; broader content audit not included |
| `/dealers-distributors` | Dealers and distributors | Show guided multi-brand discovery and branch routing | Active; shared typography passed 1440px/390px QA; broader content audit not included |
| `/industrial-mro` | Industrial and MRO suppliers | Show attribute capture, SKU matching and structured RFQ | Active; shared typography passed 1440px/390px QA; broader content audit not included |
| `/hardware-trade-supplies` | Hardware and trade suppliers | Show job-led product, accessory and consumable guidance | Active; shared typography passed 1440px/390px QA; broader content audit not included |
| `/building-engineering` | Building and engineering suppliers | Show project specification and material RFQ capture | Active; shared typography passed 1440px/390px QA; broader content audit not included |
| `/parts-aftermarket` | Parts and aftermarket suppliers | Show asset identification, fitment context and parts enquiry | Active; shared typography passed 1440px/390px QA; broader content audit not included |
| `/buggies-commercial-vehicles` | Buggy and commercial vehicle businesses | Show fleet qualification for rental and sales | Active; shared typography passed 1440px/390px QA; broader content audit not included |

## Shared global decisions

- The hamburger drawer uses six direct links in this order: AI Sales Agent, AI Webstore Suite, AI Agent Console, Pricing, Resources and About Us. No collapsible groups, Marketplace/Blog links or expanded resource/industry sublists. Sign-in, account controls, close and modal focus behaviour remain unchanged.
- Public Footer is AI-focused and describes Antbuildz AI as “Building the Intelligence Layer for Industrial Businesses.” The legacy Marketplace column remains hidden; Company contains About Us, AI Agreements & Policies, AI Help Centre, Resources and a Marketplace link to `https://antbuildz.com`. Resources no longer appears under AI Products. The shared language selector sits in the footer bottom bar rather than the public header.
- Public Header excludes `Add Listing` and `Backend Admin`.
- Public Header uses the Antbuildz.AI wordmark and a grouped Resources dropdown in the former AI Agent Console slot. All resources and the six library topics link to the Resources library and its filtered collections; the hamburger links directly to the Resources overview. AI Agent Console remains available in the main navigation drawer.
- Resources includes an expandable AI Agent Roles topic with direct links to Sales Specialist, Customer Service, Technical Support, Product Specialist and After-Sales Support; existing topic filtering is preserved.
- Public Header includes an accessible Industries dropdown with all eight Who We Serve destinations; these detailed links also remain in the shared footer, but are omitted from the simplified hamburger menu.
- Primary header order is AI Sales Agent, AI Webstore Suite, Pricing, Industries, Resources; all header text controls share the same Inter navigation typography tokens.
- Public dropdowns and menus share the `--menu-*` system: Plus Jakarta Sans headings, Inter labels/copy, canvas surfaces, subtle borders, 24px floating-panel corners, 12px item corners, soft hover, yellow selection and blue focus. This covers Industries, language selection, the public drawer and inline AI Agent Roles links without changing their destinations.
- Public Header centres the desktop product navigation independently of the left wordmark and right utilities; the desktop right side contains Sign in and Book a Demo, while Translation lives in the footer. The hamburger is reserved for the compact/mobile header at 980px and below; operational Console navigation remains unchanged.
- The equipment marketplace listing section is not part of the Antbuildz.AI homepage.
- The homepage marketplace search is omitted; the hero leads with Antbuildz.AI positioning and product CTAs.
- The requested homepage Webstore and Sales Agent promotional sections are omitted.
- Public marketing typography uses Plus Jakarta Sans 700 for headings, Inter 600 for controls/questions and Inter 400 for body copy. Shared hero, section, subsection and card scales are defined in `DESIGN.md`; FAQ questions are 16px. Operational Console and embedded demonstration typography remain separate.
- Customer-facing AI Sales Agent name is Emma. Agent avatars use the established red-top portrait at `/images/emma-sales-agent.jpg` through the shared identity/component; customer images, company logos and uploaded identities remain separate.
- Sign-up and login are clickable UI demonstrations only unless a future request explicitly adds a backend.
- The Antbuildz Marketplace is company history or an optional connected channel, not the main Antbuildz.AI product.

## Required checks after page work

- **2026-08-28 preview footer wording cleanup (Fidelity mode):** Removed the two lines beneath the animation: the real-equipment/illustrative-workflow note and the Product facts & sources/date disclosure. Kept playback controls, step caption, model data, manufacturer source documentation and centred hero layout. Removed unused footer component/styles and corrected the accessible description’s reference to the removed disclosure. Desktop illustration uses the freed space; hero remains 639px beneath the 81px header at 1280×720. Browser checked desktop and 390px mobile with no horizontal overflow; removed wording is absent. Updated the existing product-identity regression to preserve documented manufacturer sources without requiring the removed UI. All 47 tests, targeted ESLint and build pass. Evidence: `artifacts/webstore-footer-cleanup-20260828/`.

- **2026-08-28 centred preview hero correction (Fidelity mode):** Supersedes the two-column viewport-height experiment below. Restored the original centred vertical sequence: eyebrow, two-line heading, description, actions, Agent link, then animation. Tightened gaps/padding, used a height-aware heading and animation width, and retained scene-only scaling. Combined demo/source notes into one compact row; expanded sources still flow normally. Confirmed all three stages at 1280×720, 1366×768, 1440×900, 1024×768 and 1920×1080: centred copy, animation below the copy, hero within the viewport, no horizontal overflow or text clipping. Inspected desktop and mobile screenshots; 390px mobile remains naturally scrollable. Playback, replay and source disclosure checked. All 47 tests and production build pass. Short desktop windows below 681px may scroll to preserve content. Original route, shared styles, copy, products and animation logic are unchanged. Evidence: `artifacts/webstore-centred-hero-20260828/`.

- **2026-08-28 viewport-height preview hero (Design refinement; superseded by the centred correction above):** Reduced the preview from a 1462px hero at 1280×720 to 639px beneath the 81px header. Desktop uses a two-column composition, tighter spacing, a fitted 1120×660 illustrative scene and unscaled stage/playback controls. Original wording, product facts, square images, animation timing and shared/public page code are unchanged. All 15 desktop size/stage combinations fit, with no page overflow; 390px mobile remains stacked and scrollable. Playback and source disclosure checked. Sources expand in normal flow when requested; very short desktop windows have a 560px minimum to avoid clipping. 47 tests, targeted lint and production build pass. Evidence: `artifacts/webstore-viewport-hero-20260828/`.

- **2026-08-28 preview-only wording correction:** Restored the original adapter and public route metadata byte-for-byte from the saved pre-wording baseline. Moved copy application into the preview lifecycle, batched with animation frames and reapplied on remounted text. Preserved all styles, storyboard timings, manufacturer facts, imagery and CTA URLs. Actual preview checked at 1440×1000, 1024×900 and 390×844 using a local same-origin iframe; no visible amended-text clipping or page overflow. Six FAQs opened/closed; comparison retains seven rows; stage controls and running chat checked. Original page reloaded and verified separately. 47 tests, lint, copy-module type check and build pass. Current notes supersede the mistaken original-page wording entries below.

- **2026-08-28 renewed Webstore wording brief (Fidelity mode, copy only):** Inspected the current rendered page and reused the existing compatibility layer. Preserved section order, styles, media, animations, controls and all seven marketing link destinations. Shortened the hero/feature descriptions to fit the existing desktop line slots, retained all seven comparison rows and six FAQ questions, and corrected the mobile combined-product legend. Replaced the unconfirmed 20+ translation badge with a neutral AI label and marked the illustration as language examples. Reviewed actual-route iframes at 1440×1000, 1024×900 and 390×844, plus the direct page at 1280×720. Changed text fits with no page-level horizontal overflow; the unchanged miniature store-banner title still exceeds its box on desktop/compact. All FAQ answers and native open/close behaviour checked; revised Leads and Business Chat states confirmed. All 47 tests, targeted ESLint, copy-module type checking and production build pass. Protected stylesheet, bundle, Sales Agent and preview-concept hashes are unchanged. Existing impact figures, legacy-market availability/language assertions, `/trial` closing CTA and duplicate legacy metadata URLs remain documented decisions. Nothing deployed or restarted; DESIGN.md unchanged.

- **2026-08-28 AI Webstore Suite wording revert:** Removed only the latest Webstore copy/description override from the application entry points and restored the exact previous metadata description. The transferred bundle again owns the hero, sections, comparison, FAQs and closing copy after a page refresh. No stylesheet, animation, CTA destination, AI Sales Agent or other-page changes were reverted. Kept the inactive module and evidence files for history. Replaced the retired override tests with a regression check confirming disconnection and preservation of the Sales Agent hook; all 44 tests and targeted ESLint pass. Browser Use remains blocked, so no current rendered verification is claimed.

- **2026-08-28 AI Webstore Suite selective wording pass (Fidelity mode, copy only):** Corrected the hero, both supporting Agent links, prominent built-in/included labels, benefit and inventory explanations, feature introduction, selected deployment/Console copy, seven-row desktop/mobile comparison, closing message, five FAQ answers and route-specific metadata descriptions. Both product columns retain the core AI Sales Agent; supported workflows and connections are qualified. Existing problem/market sections, feature order, six-step workflow, FAQ questions, designer/developer answer and sales-impact figures remain. No CSS or minified bundle edits; hash checks confirm unchanged Webstore assets, shared styles and Sales Agent copy. All 47 tests, targeted ESLint, copy-module TypeScript check and build pass. Browser Use URL policy still blocks rendered verification, so no current 1440px/1024px/390px wrapping or live-interaction pass is claimed. Unverified figures and language illustrations, prior demo-destination mismatch (`/trial`) and legacy metadata URL duplication remain documented decisions. See `artifacts/webstore-wording-20260828/HANDOVER.md`.

- **2026-08-28 homepage conversation speaker alignment (System mode):** Followed the user's screenshot and explicit AI-left/buyer-right direction, superseding the earlier buyer-left/AI-right placement. Changed only the shared role alignment in the three homepage hero conversations: buyer bubbles right, AI replies and requirement profiles left, AI typing left. Reply labels remain inside their AI rows. Widths, typography, glass tokens, layer offsets, copy, animation timing and reduced-motion behaviour are unchanged. Added a regression check for the three role rules and absence of responsive alignment overrides; it failed against the old CSS and passed after the correction. All 43 tests and targeted ESLint pass. Desktop/mobile rendered verification remains pending because of the existing Browser Use URL-policy block; no substitute visual result is claimed. No configuration, service, copied-bundle or reference-project changes.

- **2026-08-28 hero dimensions and description restoration (Fidelity correction):** The longer approved title's no-wrap min-content width competed with the phone's automatic grid track; the phone widened again when animated product cards appeared. The read-only 8080 reference confirms a 380×620px desktop phone and section descriptions up to 18.88px. Added a route-only marker, reserved a 380px desktop track beside shrinkable copy, used the standard 1320px/90% hero frame, allowed heading wrapping, and stacked the hero at 980px with actions before the phone. Restored the reference's responsive lead-description scale and mapped marketing-card descriptions to the existing 16px body role; embedded chat text, FAQs, approved copy and the four capability labels are unchanged. Build, targeted ESLint and 41 tests pass. **Rendered QA pending:** the user's computer restart ended the server and browser session before the new styles were verified. Restarted port 8081 with explicit permission and confirmed the local listener. Browser Use URL policy blocks reloading the preview, so current desktop/mobile rendering remains unverified; requested user review. Do not treat prior screenshots as approval of this revision.

- **2026-08-28 approved capability-label sizing (System mode):** Reduced only Answer / Qualify / Match / Prepare to the existing responsive `--type-section-heading` token, scoped by a route-local capability marker. No layout, weight, colour, copy, FAQ, navigation or other-page changes. Rendered checks passed at 1440×1000, 1024×900 and 390×844; all four text bounds fit their cells and the page has no horizontal overflow. FAQ DOM is unchanged and browser error logs are empty. Build, targeted ESLint and all 40 tests pass. Evidence: `artifacts/sales-agent-wording-20260828/labels-desktop-fixed.png`, `labels-compact-fixed.png`, `labels-mobile-fixed.png` and `label-size-checks.json`. This resolves the sizing issue recorded in the previous correction below.

- **2026-08-28 AI Sales Agent live-copy correction:** The earlier copy implementation silently selected the shared header, which also has `.bright-landing`, instead of the page. Anchored the correction to `.bright-hero` and its containing page; regression coverage now includes the misleading header match. Reloaded the live page and confirmed the approved hero, capabilities, animated feature copies, section headings, all six Console descriptions, connection copy, channel copy and capability summary. Reviewed representative desktop 1440px and mobile 390px screenshots; no document-level horizontal overflow. Collapsed FAQ markup matches the saved pre-change DOM exactly. Production build, targeted ESLint and all 39 tests pass. No service restart or config change. **Remaining:** Answer / Qualify / Match / Prepare overlap at the inherited desktop statistic size. Requested permission to reduce only these four labels because the brief is wording-only; no typography adjustment has been made. The earlier browser-access limitation below is historical and no longer applies to this page.

- **2026-08-28 hamburger simplification (System mode):** Replaced the long public navigation groups with six native main-page links, including Pricing and Console. Removed source-level injection of detailed resource and industry sublists. Transferred React groups remain mounted but hidden from layout, accessibility and keyboard navigation; account and dialog components are unchanged. Reuses shared menu typography, selection and focus tokens with 48px link targets. Production build, 39 tests and targeted ESLint pass. The new unit test checks exact destinations/order, hidden legacy groups, active route state, repeat application and drawer remounts. Initial test failure was an obsolete assertion about the retired Console-link injection, replaced by the new complete drawer behaviour test. Browser discovery still returns the prior connection-error page, so desktop/mobile rendering, focus/close interactions and live link clicks remain unverified. No service restart, configuration or reference-project edits.

- **2026-08-28 AI Sales Agent wording brief (Fidelity mode, copy only):** Applied the supplied consolidated brief to the hero, six capability cards, eight feature cards including animated duplicates, enquiry problems, six rotating Console tab descriptions, optional Webstore connection, buyer touchpoints, four former statistics blocks and closing CTA labels. Security badges now use Business Knowledge / Agent Instructions / Response Rules; quotation steps describe capture, shortlisting, request and review. Unsupported performance figures become Answer / Qualify / Match / Prepare; the problem illustration's unverified drop percentage is replaced with Questions unanswered. Existing FAQ questions and answers remain untouched.
  Source corrections are restricted to `/ai-sales-agent` and preserve React-owned nodes, heading spans, icons, section order and existing action URLs. No CSS, font, pricing, shared navigation, Webstore page, configuration or copied bundle changes were made for this request. The renamed closing Book a Demo action retains its existing `/contact` destination because this brief is wording-only. The hero retains the existing demo-request destination.
  Production build, targeted ESLint and all 38 tests passed. Added tests cover rich-text node identity, repeated feature-card copies, all six Console states, original CTA destinations, untouched FAQ targets and route isolation. SHA-256 checks confirm unchanged stylesheet and transferred page/feature/Console/Webstore bundles. HTTP returns 200. Browser discovery still reports the stale connection-error tab, so no new desktop/mobile screenshots, wrapping checks or live interaction results are claimed. Existing layout QA predates this copy revision; rendered review remains required. Source review evidence is in `artifacts/sales-agent-wording-20260828/`.

- **2026-08-28 footer navigation cleanup (System mode):** Replaced Company → Blogs with Resources and hid the duplicate AI Products row without detaching React-owned nodes. Reused the existing Resources navigation handler to avoid the copied router's stale Blogs destination. Footer copy is now idempotent across observer passes. Production build, 34 tests and targeted ESLint pass; the new mocked-DOM test covers placement, URL, duplicate removal and one-time event binding. Browser tab discovery still returns the earlier connection-error page; desktop/mobile visual and live click QA remain pending. No configuration, service restart, reference-project or copied-bundle changes.

Record results in the current task or add a short dated note below when a route receives a substantial audit.

### 2026-08-29 — AI-only footer, policies and Help Centre

- Scoped the shared footer to Antbuildz AI: the Marketplace column stays hidden, Company uses AI Agreements & Policies and AI Help Centre, and Resources remains under Company only.
- `/agreements` now presents only privacy/data and AI product policies. Marketplace category controls, collections and other-market notes remain mounted but hidden from the layout, keyboard order and accessibility tree.
- `/help/ai` is the canonical AI FAQ library. `/help` and `/faqs` redirect there; `/help/marketplace` and legacy `/faqs/*` detail paths redirect to their antbuildz.com equivalents. The sitemap and `llms.txt` list only the AI Help Centre and AI policy scope.
- Live checks passed at 1440×900 and 390×844 with no horizontal overflow or visible Marketplace content. Mobile policy controls exceed 51px and AI FAQ controls are 64px or taller. All 55 tests, targeted ESLint and the production build pass. The existing 8081 service stayed running and returned HTTP 200; no restart, config edit, copied bundle edit or deployment was required.

- Desktop rendered inspection
- Mobile rendered inspection
- Navigation and CTA behaviour
- Keyboard focus and interactive states
- Heading hierarchy and one H1
- Metadata, canonical and internal links
- No overflow, clipping or broken assets
- Shared component and token reuse
- Copy and commercial-claim review

## Audit notes

- **2026-08-27 aligned header dropdowns:** System-mode refinement using the existing Industries panel as the visual reference. Resources now reuses the same introduction, overview action, divider, grouped link pattern, centred frame, padding and 24px corners. Both panels measure 1120×439px at the same (160,88) position on a 1440px viewport; compact 1024px panels measure 976×447px at (24,88). Dropdown labels and drawer links use lighter 14px/500 Inter, header dropdown titles use 22px/700, and opaque canvas surfaces prevent page copy bleeding through. Existing resource labels/URLs are preserved, with short supporting descriptions; all seven Resources destinations and a Rental & Leasing destination were exercised. Enter/Space, mutually exclusive opening, Escape focus return, selected states and mobile access passed. Core page typography, pricing, hero animation and glass are unchanged. Build, 28 tests and targeted ESLint passed. No configuration, service, deployment, copied-bundle or 8080 changes. Evidence and exact scope are recorded in `design-qa.md`.

- **2026-08-27 typography standardisation:** Audit then System mode, following the reported overly heavy homepage FAQ. Kept Plus Jakarta Sans/Inter; centralised responsive heading/body/control roles. The desktop homepage FAQ heading changes from 57.6px/800 to 44.64px/700 at 1440px, and questions from 19.2px/800 to 16px/600. Standardised public product, industry, Pricing, Resources, About and FAQ templates, navigation/menu labels and article headings. Inspected all eight industry routes and existing core public pages at 1440px/390px, plus representative 1024px layouts; no page-level horizontal overflow. Console heading, body and control metrics match the baseline. No copy, pricing data, route catalogue, configuration, service, bundle or 8080 changes. Existing `/faqs` scope mismatch and broken `/resources/ai-agent-roles` direct route are recorded above, not silently fixed. See `design-qa.md` for evidence and verification limits.

- **2026-08-27 hero transparency revision:** Fidelity-mode follow-up to the user's screenshot and live Gorgias hero. Reduced foreground buyer/reply fill from 20%/22% to 10%/12%, blur from 12px to 6px, and softened the reply edge/halo. Background layer fills remain 2–5%; their blur is now 8px/10px so the scene remains visible. All changes are confined to existing homepage glass tokens; typography, 300px cards, three-layer placement, title gap, copy, background, animation and accessibility fallbacks are unchanged. Rendered checks passed at 1440×1000, 1024×900, 390×844 and 1280×720 with no horizontal overflow. Title-only opening, reveal, message progression, typing, transcript scrolling and resets were observed; browser error log was empty. Build, 26 tests and targeted ESLint passed. This supersedes the earlier 20–22% glass treatment, not the approved layout. Gorgias's chat is composited into a video, so these are visually tuned local values, not extracted reference CSS or an exact scene match. Evidence and remaining verification limits are in `design-qa.md`. No config, service, pricing, copied-bundle or 8080 changes; nothing deployed.
- **2026-08-27 wider pricing cards:** Scoped Design-mode adaptation of the live Gorgias pricing layout: three standard plans across a 1320px maximum / 90vw frame and a full-width Custom panel beneath, using the existing Antbuildz fonts, accents and 24px card radius. Standard cards are approximately 419px rather than 276px at 1440px. All approved features remain visible with 14px copy, consistent allowance rows, aligned prices/actions and 54px pill buttons. Removed inherited extra price/feature margins to keep the wider layout lean. Below 1100px, use two columns; below 768px, use one column. Inspected desktop, compact and mobile layouts, including 1440px, 1280px, 1100px, 1024px and 390px; monthly/annual values and 8/10/8/7 feature counts are unchanged. This is a structural reference adaptation, not an exact Gorgias clone. No pricing data, billing behaviour, global tokens, configuration, services or 8080 files changed. Build, 26 tests and targeted ESLint passed.
- **2026-08-27 hero breathing room:** Design-mode spacing refinement increased the measured title-to-conversation anchor from 20px to 64px on desktop and 40px at 767px and below. All three layers share the new anchor; their glass treatment, relative offsets, typography and animation remain unchanged. Rendered checks passed at 1440×1000, 1024×900, 1280×720 and 390×844 with no horizontal overflow; the foreground transcript still fits within the short desktop hero. Build, 25 tests and targeted ESLint passed; browser error log was empty. Homepage-only adjustment, not a new global spacing rule.
- **2026-08-27 AI Sales Agent navigation:** Reproduced the homepage header click remaining on `/` despite displaying `/ai-sales-agent` as its href. Added scoped capture-phase click/Enter navigation to the canonical Sales Agent page before the copied router/loading handlers run. Modified clicks, new-tab links, downloads, external URLs and Resources role articles keep their existing behaviour. Desktop 1440px, compact 1024px, mobile drawer 390px and return-home checks passed; no horizontal overflow at the checked sizes. Build, 25 tests and targeted ESLint passed. No visual, pricing, config, service or 8080 changes.
- **2026-08-25:** Initial transferred-route fidelity evidence is documented in `design-qa.md`. The AI Sales Agent route passed a same-viewport visual comparison. Other core routes passed title, H1 and dimension parity checks, with noted dynamic widget differences.
- **2026-08-25:** Homepage sections, marketplace navigation items and equipment-listing content were removed or hidden following explicit user requests. The resulting homepage desktop/mobile audit is recorded below.
- **2026-08-25:** Completed the public-shell system pass. The homepage now uses `antbuildz.ai`, the approved industrial H1, an AI-specific supporting statement and 56px primary/secondary CTAs. Marketplace search and the Marketplace footer column are removed from the Antbuildz.AI experience. Header and footer route aliases were normalised.
- **2026-08-25:** Rendered QA passed at 1280px desktop and 390px/325px reported mobile layouts. Homepage, AI Webstore Suite and AI Sales Agent showed no horizontal overflow. Webstore and Sales Agent primary actions precede their large product demonstrations on mobile. Body copy renders in Inter and headings remain Plus Jakarta Sans.
- **2026-08-25:** Added the shared Industries header menu for all eight Who We Serve routes, including active-page states and the mobile drawer equivalent.
- **2026-08-25:** Refined the homepage hero into two intentional desktop lines: the complete white statement followed by the yellow `With Antbuildz AI` line. Its responsive scale is `35–61px` on desktop and `34–43px` on mobile, where natural wrapping remains enabled. Wide, compact and mobile checks passed without clipping or horizontal overflow.
- **2026-08-25:** Refined the Industries header control for visible white contrast over the homepage hero and redesigned its desktop menu as a dark transparent glass panel. Heading copy is left-aligned, both link columns use consistent baselines and 52px rows, and the mobile drawer retains high-contrast red arrows.
- **2026-08-25:** Revamped Industries into a wide Antbuildz.AI mega-menu based on the supplied editorial reference: a light-glass overview row, four business-model groups, eight descriptive Who We Serve links and a compact `View AI products` action. The mobile drawer retains a concise link-only version.
- **2026-08-25:** Updated the homepage hero statement to `We Make Industrial Possible`, removing `Business` at the user's request while preserving the two-line desktop treatment.
- **2026-08-25:** Added a homepage Who We Serve journey between the hero and Emma: four alternating editorial chapters pair the eight required industries, reuse their approved photography and summaries, expose three-step workflows and link to every complete audience page.
- **2026-08-25:** Reworked the homepage hero into a scroll-led story. The opening frame contains only the centred two-line H1; scrolling moves the title upward and reveals a looping Emma qualification conversation over the industrial hero image. The former description and both hero CTA buttons were removed at the user's request, with a static final conversation state for reduced-motion visitors.
- **2026-08-25:** Corrected AI Agent Console routing. Public console links now always resolve to `/ai-agent-console`, which matches the read-only `/app` reference on port 8080; the unrelated legacy `/develop-admin` route redirects to the matched console instead of opening Marketplace Admin.
- **2026-08-25:** Standardised the four homepage Who We Serve chapters to a shared desktop height and visual rhythm: balanced 50/50 columns, reserved two-line heading space, equal summary rows, aligned three-step workflows and consistent 620px image mosaics. Compact and mobile layouts remain content-driven and passed overflow checks.
- **2026-08-25:** Reduced the homepage Who We Serve intro from an oversized one-off heading to the shared section-intro typography tier. It now renders as a calmer two-line title on desktop and compact layouts, with a readable mobile scale and no overflow.
- **2026-08-25:** Lifted the homepage Emma conversation closer to the scroll-shifted hero title and increased its upward reveal travel. Opaque bubbles were replaced with restrained dark and yellow glass surfaces, using responsive title gaps to avoid overlap and retaining the static reduced-motion state.
- **2026-08-25:** Reduced the four homepage Who We Serve chapters from roughly 893px to 760px on desktop for a leaner editorial rhythm. Outer padding, summary rows, workflow cards and image mosaics were tightened proportionally; all four chapters remain equal-height on desktop, with shorter content-driven compact and mobile layouts.
- **2026-08-25:** Centred the shared desktop product navigation independently of the header wordmark and right controls. Translation now precedes Sign in and Menu; the Industries mega-menu remains viewport-centred, and compact/mobile collapse states pass without overflow.
- **2026-08-25:** Tightened the scroll-led homepage hero composition again. Emma now settles roughly 19px below the shifted title on wide desktop, with responsive 26–36px gaps on compact/mobile screens and a narrow-device safeguard; the first faint reveal frame remains contact-free.
- **2026-08-25:** Removed the homepage Emma conversation at the user's request. The hero now keeps only the industrial background and scroll-shifted two-line title; no chat interface, conversation timer or related accessibility summary is mounted.
- **2026-08-25:** Clarified the preceding hero request and restored the qualification conversation. Only the top Emma identity/status pill is removed; the transparent animated message bubbles, requirement profile, title movement and reduced-motion fallback remain.
- **2026-08-25:** Preserved the transferred Pricing page design while removing only the AI Webstore Suite pricing block and its divider. The four existing AI Agent cards now present Launch, Growth, Enterprise and Custom; monthly/annual and USD/SGD display states passed rendered QA at 1440px, 1024px and 390px. The remaining Pricing page sections are intentionally unchanged for this stage.
- **2026-08-26:** Initial approved monthly USD pricing pass, later superseded by the expanded subscription-card specification recorded below. Annual and SGD selectors remain hidden until approved values are supplied.
- **2026-08-26:** Standardised the visible Pricing plan rows. Plan names, descriptions, price blocks, CTA buttons, dividers and included-feature headings now share consistent horizontal baselines across the four-column desktop layout and each two-column compact-desktop row; the single-column mobile layout remains content-driven. Rendered QA passed at 1440px, 1024px and 390px without horizontal overflow.
- **2026-08-26:** Amended `/pricing` to the expanded approved subscription specification. Launch is US$49 with 50 conversations; Growth is US$179 with 100 conversations and 100 Sales listings; Enterprise is US$399 with 300 conversations and 500 Sales + Rental listings; Custom remains Contact Sales. Cards now show positioning, usage, listings, extra-conversation terms, tier badges and the complete tier-specific capability lists. Growth carries the highlighted `Most Popular` state. Rendered QA passed at 1440px, 1024px and 390px with aligned rows and no horizontal overflow.
- **2026-08-26:** Restored the prior Pricing billing-cycle selector directly above the subscription cards. `$` now denotes USD without an additional `US` prefix. Monthly displays $49, $179 and $399; Annual applies the approved 20% discount and shows exact monthly equivalents of $39.20, $143.20 and $319.20 alongside exact annual billing totals. The currency selector remains hidden because no SGD schedule is approved. Monthly/Annual interaction, row alignment and overflow passed rendered QA at 1440px, 1024px and 390px.
- **2026-08-25:** Added the initial homepage-only heading-font trial using the optimised Next.js font loader and one scoped role-token layer; this trial was superseded by Inter Tight on 2026-08-26.
- **2026-08-26:** Refined the homepage hero conversation flow without changing its visual language. The first message now anchors below the settled title, later messages build downward, and a fixed transcript viewport pushes older messages upward through a soft top fade once full. The loop resets cleanly and the static reduced-motion state remains intact; rendered checks passed at 1440px, 1024px and 390px without horizontal overflow.
- **2026-08-26:** Restyled all four homepage Who We Serve chapters using the approved warm cream-to-soft-lilac framed composition, then refined the result to alternate image-right and image-left. Chapter headings and supporting typography were reduced to a calmer editorial scale; existing copy, workflows and links are unchanged. Rendered QA passed at 1440px, 1024px and 390px with all images loaded and no horizontal overflow.
- **2026-08-26:** Replaced the previous homepage heading-font trial with Inter Tight using the optimised Next.js font loader and the existing homepage typography tokens. Applied weights are H1 650, H2 640, H3/card titles 600, navigation 600, buttons 625, body 400, strong body 600 and labels 650; heading tracking is `-0.035em` for H1 and `-0.025em` for H2. Homepage QA passed at 1440px, 1024px and 390px without wrapping regressions, clipping or horizontal overflow; AI Webstore Suite retained Plus Jakarta Sans, confirming the trial remains homepage-only.
- **2026-08-26:** Superseded the homepage-only Inter Tight experiment with one shared Geist Sans public-marketing typography token layer loaded through the optimised Next.js font loader. Applied weights are H1 650, H2 640, H3/card titles 600, navigation 600, buttons 625, body 400, strong body 600 and labels 650; tracking is `-0.03em` for H1 and `-0.025em` for H2. Homepage, AI Webstore Suite, AI Sales Agent, Pricing and Rental & Leasing passed rendered QA at 1440px, 1024px and 390px with fonts loaded, expected wrapping, aligned homepage animation, unclipped navigation/buttons and no horizontal overflow. The AI Agent Console route remains outside the trial and retains its existing operational typography.
- **2026-08-26:** Halved the settled homepage hero title-to-first-message gap from approximately 102/99/60px to 52/49/31px at 1440px, 1024px and 390px respectively. The 350px-and-below safeguard retains its tighter safe spacing to prevent title overlap; all checked layouts remain free of horizontal overflow.
- **2026-08-27:** Reverted the temporary Geist Sans public-marketing experiment and restored the original Plus Jakarta Sans heading and Inter body/UI typography. Both font families are loaded through the optimised project font loader, with the transferred pages' original 700–800 heading weights and tracking rules active again. Home, AI Webstore Suite, AI Sales Agent, Pricing and Rental & Leasing passed rendered checks at 1440px, 1024px and 390px without title clipping or horizontal overflow.
- **2026-08-27:** Applied the user-supplied pricing content in Fidelity mode to the confirmed 8081 `/pricing` route, not the read-only 8080 `/pricing2` reference named in the attachment. Monthly USD plans are Launch $49/50 conversations, Growth $199/150 conversations/100 active Sales listings, Enterprise $399/300 conversations/500 combined Sales + Rental listings, and Custom Contact Sales. The approved 20% annual discount gives $39.20/$159.20/$319.20 monthly equivalents and $470.40/$1,910.40/$3,830.40 annual totals. Product labels, descriptions, complete feature lists, comparison headings and approved comparison mappings were updated in the existing page patterns. Existing credit-pack rows now show 25/$22, 50/$42, 100/$79 and 500/$349. Six existing FAQ slots explain monthly resets, 12-month Purchased Credit validity, earliest-expiry-first consumption, active-subscription requirements and conditional $0.99 PAYG. No CSS, font, configuration, header, footer or source-reference files were changed. Longer approved copy naturally increases card height and produces some desktop row offsets; this content-only pass does not introduce layout changes to equalise them. No extra Enterprise value-line element was added. The page's bottom Get Started action now follows the existing enquiry-only plan-card behaviour instead of carrying an obsolete Starter checkout price. UI copy does not implement billing, metering or credit purchases.
- **2026-08-27 pricing QA:** Browser checks at 1440px, 1024px and 390px confirmed all four plans, complete 8/10/8/7 feature lists, Monthly/Annual switching, unchanged pack prices across billing cycles, comparison content and opening/closing FAQ behaviour. No page-level horizontal overflow; comparison tables retain their existing horizontal scrolling. A clean reload produced no new runtime errors. Production build and all 15 content tests passed; targeted ESLint passed. Whole-workspace type checking still encounters the pre-existing archived file `artifacts/reverted-pricing-20260825/page.tsx` importing a missing `../site`; the active pricing file passes its type check.

- **2026-08-27 homepage glass QA:** Restyled only the hero conversation using the supplied Gorgias reference: pale translucent neutral bubbles, 24px corners, backdrop blur, subtle pink-lilac AI-reply rims and a matching requirement card/typing indicator. The industrial image, original typography, copy, title movement, conversation loop and removed Emma profile pill remain unchanged. Browser checks passed at 1440×1000, 1024×900 and 390×844 without horizontal overflow or new console errors; checked both title-only opening and scroll-revealed conversation. Reduced-motion logic remains unchanged; no-blur and reduced-transparency CSS fallbacks are present but were not browser-emulated. Evidence and scope-specific fidelity review are in `design-qa.md`. Production build, 16 tests and targeted test-file ESLint passed. This is a homepage-local treatment, not a change to the shared design system.

- **2026-08-27 homepage glass revision 2:** The user rejected the first pass as visually different. A focused reference comparison found overly wide, thin outlined messages, reversed speaker placement, lost backdrop blur during masked scrolling, and title overlap at 1280×720. Revised to 360px cards inside a centred 540px composition, buyer-left/AI-right placement, 16px desktop text and padding, a simple Antbuildz AI Agent label above replies (not the removed Emma profile pill), neutral translucent fills and soft pink reply rims. Individual message fading replaces the transcript mask so the glass still samples the industrial background. The conversation now anchors 20px below the measured title, with height limited by available hero space. Browser checks passed at 1440×1000, 1024×900, 1280×720, 390×844 and 320×740; build, 16 tests and targeted ESLint passed. Exact visual parity is not claimed: Gorgias composites the reference into a brighter moving video, while the existing dark industrial photograph and original Inter typography are retained. A broader background/composition change needs user direction; `design-qa.md` records the remaining fidelity limitation.

- **2026-08-27 Resources navigation QA:** Updated the shared header's former AI Agent Console slot to Resources, including native navigation to avoid the copied router's stale Console destination. Console remains available through the main drawer. The AI Agent Roles topic now reveals five existing role guides while preserving category filtering. Verified expanded/collapsed states, Enter/Space activation, Escape dismissal with focus return, switching topics, header navigation from Pricing, drawer navigation from Home, Technical Support and After-Sales guide destinations, and Console access. Rendered dropdown checks passed at 1440×1000, 1024×900 and 390×844 with no horizontal overflow and 44px role-link targets. Original fonts, tokens and page design are retained; no copied bundles, configuration or 8080 files were edited. Production build, 17 content tests and targeted ESLint passed.

- **2026-08-27 header consistency QA:** Swapped Pricing and Industries in the shared header's DOM order. Header links, Industries, language and Sign in now share Inter 750, 14px desktop / 13px compact, and 1.65 line-height. Industries now matches the other links' 44px height. Verified rendered alignment and contrast on Pricing and Home at 1440px and 1024px, mobile header/drawer at 390px, dropdown opening/Escape dismissal, all eight industry links remaining present, Rental & Leasing navigation and Pricing navigation. No horizontal overflow. Production build, 18 tests and targeted ESLint passed; no configuration or 8080 changes.

- **2026-08-27 public menu system QA:** Consolidated Industries, language selection, the public navigation drawer and AI Agent Roles into shared menu typography, colour, shape, spacing and interaction tokens in System mode. Confirmed 24px/700 Plus Jakarta Sans headings, 14px/650 Inter labels and 13px/400 Inter descriptions in rendered styles. Wide desktop (1440px), compact (1024px) and mobile (390px) checks passed without horizontal overflow. Verified eight industry links, five role links, dropdown opening/Escape dismissal, language selection and mobile drawer navigation to Resources. Fixed public dialogs appearing below the fixed header and prevented language intro/footnote text from shrinking into the option list. Menu content and destinations are unchanged. Production build, 19 tests and targeted ESLint passed; no configuration, copied bundle or 8080 edits.

- **2026-08-27 header indicators QA:** Added colour-inheriting down chevrons to Industries and language triggers, rotating upward with their existing expanded state. Direct links and the hamburger remain unchanged. Verified open/closed states, Escape dismissal, light/dark header contrast and layouts at 1440px, 1024px and 390px without horizontal overflow. Reduced-motion transitions are disabled. Production build, 20 content tests and targeted ESLint passed. No configuration, copied bundle or 8080 changes.

- **2026-08-27 Resources dropdown QA:** Added a compact single-column Resources disclosure in Design mode using the existing menu tokens and chevron. All seven destinations were exercised; AI Agent Roles retains its five-guide disclosure. Same-page topic navigation resets the copied route loader to avoid a stuck loading overlay. Checked desktop 1440px, compact 1024px and mobile 390px, including homepage contrast, vertical mobile topic links, Enter/Space opening, Escape and outside dismissal, and no horizontal overflow. Build, 21 content tests and targeted ESLint passed. No configuration, copied bundles or 8080 files changed.

- **2026-08-27 homepage navigation reliability:** Investigated the reported loading loop in Audit mode, then applied a source-level navigation fix without changing visuals. Home links use capture-phase native navigation before the copied router/loading overlay; browser-history returns to `/` perform a clean reload. Modified clicks, downloads, external links and non-home routes retain their existing behaviour. Header returns from Pricing, Resources, AI Sales Agent, AI Webstore Suite and Rental & Leasing, the footer logo, mobile logo and repeated browser Back returns passed. Rendered homepage checks passed at 1440px, 1024px and 390px without a loading overlay or horizontal overflow. Production build, 22 tests and targeted ESLint passed. No service restart, configuration, copied bundle or 8080 changes.

- **2026-08-27 layered hero conversation:** Implemented the new Design-mode direction, superseding the earlier Gorgias exact-match request: smaller 300px borderless cards with neutral 10–12% glass fills in the foreground; the manufacturer pump and aftermarket filter transcripts appear behind it with different scales, heights, rotations and 2–5% fills. Both additional transcripts are taken verbatim from their Who We Serve hero animations and are distinct from the rental conversation. All layers share one renderer and independent staggered clocks, pause off-screen/in hidden tabs, and clean up together on route changes. The two-line desktop title, industrial photograph, original typography, close title gap and absent Emma profile pill remain unchanged. Browser QA passed at 1440×1000, 1024×900, 1280×720, 390×844 and 320×740; no horizontal page overflow. Narrow layouts intentionally crop the faint background layers at the hero edges while retaining the full foreground chat. Pricing-to-home return and title-only initial state passed; browser error log was empty. Build, 24 tests and targeted ESLint passed. Reduced-motion static state is unit-tested; reduced-transparency/no-blur fallbacks are source-checked, not browser-emulated. This treatment is homepage-scoped; no shared design tokens, config, services, copied bundles, pricing or 8080 files changed.

## Latest homepage visual check — 2026-08-27

Refined the three-layer hero chat in Fidelity mode against the user's latest Gorgias screenshot, scoped to the chat-box treatment. Foreground bubbles now use neutral 20% buyer / 22% reply frost, 12px backdrop blur without added saturation, and a soft rose edge/halo for AI replies and the requirement card. All surfaces retain zero CSS border; buyer bubbles have no reply highlight. The shared 300px width, 22px radius, 14px Inter copy, compact layout, industrial background and three different depth layers remain. Reply labels now match the message font size with 12px spacing. Full-view and normalised reply comparisons, desktop 1440px, compact 1024px and mobile 390px checks passed. Animation, title clearance and no horizontal overflow were checked; browser error log was empty. Build, 24 tests and targeted ESLint passed. No runtime, pricing, global typography, config, service or 8080 changes. This is not a copy of the reference's retail/video scene, avatar, product cards or input bar; see `design-qa.md` for comparison evidence.

## Pricing decisions required before publication

- **Additional AI Agent:** The live add-on and existing FAQ retain **S$49/month** and a separate knowledge base. Confirm its intended USD price, eligible plans, and whether extra agents share or add conversation allowances. No new entitlement was inferred.
- **Legacy comparison limits:** The existing four-column Agent table retains storage of 50 MB / 100 MB / 300 MB / 1 GB; the three-column Webstore table retains 100 MB / 300 MB / 1 GB. Confirm these against the new plans rather than treating the inherited numbers as newly approved.
- **Unspecified capability mappings:** Existing values for Multi-Agent Support, Google Sheets Sync, generic data synchronisation, Real-Time Alerts, AI Learning, Behaviour Insights, Shareable Cart, Order & Reservation Panel and AI Testing Playground were left unchanged where not explicitly covered by the supplied specification. These inherited mappings need commercial confirmation, as do numeric workflow, integration, support and onboarding limits. Only explicitly approved inventory/workflow/lead-intelligence mappings were updated.
- **Payments:** This is still a UI demonstration. Automatic-payment eligibility, invoicing approval, credit expiry/consumption and actual subscription checkout require a separately authorised billing implementation.

## Concept audit — 2026-08-27

Audit mode, following the user's direction that the AI Sales Agent becomes the lead product and the AI Webstore Suite expands it into a complete sales system. This records findings and proposed amendments, not an approved redesign or new entitlement specification.

- Reviewed current `/ai-sales-agent`, `/ai-webstore-suite` and `/pricing` at 1440×1000, 1024×900 and 390×844, plus the Webstore hero at 1280×720. Checked mobile navigation, Agent-to-Pricing navigation, Book Demo-to-`/trial`, billing toggle, selected FAQs and console tabs. Homepage opening inspected for context only.
- **Review required for positioning and publication:** Webstore comparison still explicitly describes the suite as the primary product and the agent as an alternative. Agent and Webstore capability claims do not clearly distinguish the current plan boundaries. Pricing's detailed tables conflict on Growth AI Learning/Behaviour Insights and Enterprise Multi-Agent Support; approved card prices remain $49/$199/$399 with 50/150/300 conversations.
- **Review required for journey/accessibility:** Mobile drawer lists Webstore before Agent and lacks Pricing; Book Demo leads to an agent-creation form; pricing plan CTAs are enquiry email drafts. Mobile console tabs have no accessible names, Pricing FAQ buttons lack expanded-state ARIA, and the floating widget obscures some mobile content. Webstore supporting copy clips at 1280px despite no document-level overflow. Duplicate legacy/current canonical tags remain in rendered core pages.
- Industrial demo shortlist includes sub-40m equipment in a 40m working-height scenario; manufacturer specifications checked. Statistics, security badges and partner/language claims need approved evidence. A transient blank Agent page recovered on reload; cause unverified, no service restarted.
- Full review, current screenshots, checked interactions, evidence limits and proposed section orders: `artifacts/agent-first-audit-20260827/REVIEW.md`. No application source, configuration, approved prices, reference files or deployment changed. Prior layout QA is retained as historical evidence and does not resolve these current concept/content findings.


## 2026-08-28 — Broader industrial products in the Webstore preview

Design refinement limited to `/webstore-2-ai-webstore-preview`. Replaced the boom-lift yard with the existing industrial-manufacturing photograph and used the maintenance photograph in the store banner. The demo now covers Jungheinrich ETV 216i material handling, Bosch GBH 2-26 DRE power tools and NSK 6205 replacement bearings. Inventory retains seven enriched fields per product; cards use category-specific specifications instead of truck-only load/lift columns. Product photos, model identity and specifications remain consistent from inventory through Webstore to Emma’s chat. The NSK image is the manufacturer’s catalogue cutaway, identified in alt text and the accessible summary. Sources and publication-rights limitations are documented in `app/webstore-2-ai-webstore-preview/PRODUCT-SOURCES.md`.

Broadened the hero supporting sentence, store labels, enquiry dialogue and selected lower-page discovery/recommendation examples. Removed inherited numerical match scores from the new model examples instead of implying verified suitability. Shared feature illustrations and untouched legacy demo states are retained; this is a broader mix, not a removal of all lifting equipment. Kept the centred hero, glass surfaces, 10% shorter animation, square images, Emma avatar, chat loop and minimal centred-caption footer.

Browser inspected at 1440×900, 1280×720, 1024×768 and 390×844, including inventory, store, mobile chat, playback and the supporting discovery journey. No horizontal page overflow, text clipping or inventory-cell overflow in the measured states; all six card/chat image nodes load. All 47 tests, targeted ESLint and production build pass. Reduced-motion timing remains unit-tested; not separately browser-emulated this pass. Original `/ai-webstore-suite`, shared styles/assets, production bundles, configuration and services are unchanged. No deployment. Evidence: `artifacts/webstore-broader-products-20260828/`.


## 2026-08-28 — Consistent preview title spacing and smaller animation

Fidelity adjustment to the preview only: restored 80px desktop hero top padding, matching the rendered original Webstore page, instead of the preview's 12px inset. Reduced the browser animation frame by another 10% in both dimensions; compensated for the extra top inset so it is not unintentionally shrunk twice. The frame remains centred, controls retain their native touch targets, and the hero stays within the laptop viewport. Short desktop windows cap the frame to the available height. Mobile keeps its existing 48px inset and readable stacked layout.

Compared original Webstore (80px top padding) and Sales Agent (96px top padding with its different split composition). Preview browser checks passed at 1280×720, 1440×900, 1024×768 and 390×844, covering inventory, store and chat. Measured animation size ratios are 0.90 in both axes on the tested desktops; no text clipping, horizontal page overflow or inventory-cell overflow. All 47 tests and production build pass. Only the preview CSS and local QA documentation/artifacts changed; original pages, shared design, copy, products, timings and services remain untouched. Evidence: `artifacts/webstore-title-spacing-20260828/`.


## 2026-08-28 — Clearer glass and simplified hero actions

Design refinement confined to the Webstore preview. Removed the “Explore the AI Sales Agent” link above the animation using the scoped transferred-shell selector; it is not visible or keyboard-focusable. Other Sales Agent links and the original public page remain unchanged. The former link row becomes a 34px desktop breathing gap, preserving the previous browser position, width and height exactly at 1280×720 and the approved 80px top inset.

Replaced the 76% opaque pale outer frame with a transparent neutral glass gradient and subtle dark backing, reduced backdrop blur from 24px to 18px, softened edge opacity from 82% to 38%, and reduced inner panel frost to 64–84%. Reduced the canvas/nav/footer fills so the industrial photograph shows through. Outer labels and controls are white, while inner cards/phone retain dark text on lighter frost; product photos remain unchanged and fully opaque. One static backdrop blur is retained rather than adding filters to moving cards. Opaque no-blur, reduced-transparency and increased-contrast fallbacks retain dark text. These fallback modes were source-reviewed, not browser-emulated.

Rendered inspections covered desktop 1440×900, laptop 1280×720, compact 1024×768 and mobile 390×844, including inventory, store, chat and pause controls. Removed link confirmed hidden at desktop/mobile, no text clipping or horizontal page overflow in measured states. All 47 tests and production build pass. No copy/product/timing changes, shared tokens, configurations, services, original pages or reference files changed. Evidence: `artifacts/webstore-clear-glass-20260828/`.


## 2026-08-28 — Selected dusty ochre hero background

Fidelity update to `/webstore-2-ai-webstore-preview` only, applying the first displayed concept selected by the user: **Dusty Ochre Yard**. Added a 1672 × 941 JPEG of the selected AI-generated site image (589 KiB), preserving the source PNG. Removed the old blue-grey colourisation and used a light neutral shade over the image for white-text contrast. Kept the centred layout, title gap, animation dimensions, glass surfaces, Emma portrait, real product information and all existing controls unchanged. The original `/ai-webstore-suite` and miniature store banner are unchanged. Asset provenance and its non-documentary status are recorded in `PRODUCT-SOURCES.md`.

Browser checks passed at 1280×720, 1440×900 and 390×844, including mobile chat and desktop inventory/store. Hero ends at the laptop viewport bottom; measured desktop/mobile states have no horizontal page overflow or text clipping. All 49 tests and production build pass. No configuration, service restart or deployment. Evidence: `artifacts/webstore-ochre-background-20260828/`.


## 2026-08-28 — Preview photo extended behind the header

Fidelity update limited to `/webstore-2-ai-webstore-preview`, matching the homepage overlay-header behaviour. Reused the existing `is-homepage-overlay` / `is-scrolled` public-header styles: transparent background and white navigation at the top, solid light navigation after 24px of scrolling. The preview lifecycle measures the header with ResizeObserver, preserves the existing content position with matching hero padding/height compensation, and removes listeners, observers and preview-owned classes on cleanup. No shared header CSS or copied bundles changed.

The dusty ochre background now starts at y=0. At 1280×720 the hero ends at y=720; the animation still measures 712.796875×307.3828125 at x=283.6015625/y=396.5078125, identical to before this change. Checked laptop 1280×720, compact 1024×768 and mobile 390×844: background reaches the top, header/CTA remain legible, and measured states have no page overflow or text clipping. Desktop Industries dropdown opened and closed with its opaque readable panel; navigation drawer opened/closed; scrolling changed the header to solid light with dark links, and returning to the top restored transparency. Navigating from the preview to the original Webstore confirmed its normal light header, with no preview classes. Mobile menu appearance was inspected; its drawer interaction was exercised on desktop, not separately in the mobile iframe. 49 tests, targeted ESLint and production build passed. No service restart, configuration, shared design rule, product/copy changes or deployment.

Evidence: `artifacts/webstore-overlay-header-20260828/laptop-top.png`, `laptop-scrolled.png`, `compact-top.png`, `mobile-top.png`, `mobile.json`, test/lint/build logs.


## 2026-08-28 — Brighter, less transparent preview graphic

Design refinement requested by the user, scoped to the Webstore preview stylesheet. Replaced the dark outer-glass backing with 82–90% light frost, increased inner-panel opacity to 90–96%, strengthened the light edge and navigation/footer fills, and restored dark ink/body labels for readable contrast. Kept the existing single 18px backdrop blur, subtle tint and highlights. This supersedes the earlier high-transparency trial, without changing shared design rules.

The dusty ochre background, transparent-at-top navigation, white marketing heading, title spacing, animation dimensions, real product images/specifications, Emma portrait, stage timing and controls are unchanged. The laptop frame remains exactly 712.796875×307.3828125 at x=283.6015625/y=396.5078125.

Browser review covered laptop 1280×720, desktop 1440×900 inventory/store and mobile 390×844 chat/footer. Stage selection operated; measured desktop/mobile states have no horizontal overflow or text clipping, inventory cells fit, and product images load. All 49 tests and production build pass. Reduced-motion/contrast fallbacks are unchanged and were not separately emulated. Evidence: `artifacts/webstore-brighter-glass-20260828/`. Original public page, configurations, services and manufacturer assets untouched; no deployment.

## 2026-08-28 — Pricing, five-row inventory and continued chat

Design refinement limited to `/webstore-2-ai-webstore-preview`. The inventory now contains five real models, including the Bosch GWS 7-115 and Toyota SWE120 checked against their official product pages. Shared column tracks, identical cell padding and top-aligned text keep each desktop row on one baseline; mobile uses five equally spaced labelled groups. Three products become featured store cards. Each card has the same pricing columns: Rental / day, Rental / month and Sale price. The reach truck and rotary hammer illustrate rental listings; the bearing illustrates a sales listing. Applicable cells use Get Quote and non-applicable demo fields use a dash. No numerical rates, stock or supplier availability are claimed. Manufacturer sources and these commercial boundaries are recorded in PRODUCT-SOURCES.md.

The three product elements stay mounted and visible during the store-to-phone transition, retaining model, photo and commercial mode. Emma then continues with rental duration, dates, delivery, purchase quantity and bearing-variant questions. Messages and cards scroll within the phone; subsequent cycles stay in chat. Replay restarts the full workflow; pause, off-screen/document visibility handling and reduced-motion static recommendations remain available.

QA: 49 tests, targeted ESLint and production build pass. Browser inspection covered desktop 1440×900 inventory/store/handoff/rental reply, laptop 1280×720 inventory, compact 1024×768 pricing and mobile 390×844 inventory/store/sales reply. All five desktop row baselines matched; pricing footer positions matched across desktop cards; no measured page, inventory or price-cell horizontal overflow. Eighteen transition samples confirmed the same three DOM nodes with opacity 1 throughout the handoff. Mobile replies fit above the composer without header overlap; product images loaded. Timing tests cover repeated chat loops and reduced-motion output; reduced-motion OS emulation was not performed. Laptop hero is still exactly 720px high with the unchanged 712.796875×307.3828125 animation frame. No config, shared public page, service restart or deployment changes.

Evidence: `artifacts/webstore-pricing-chat-20260828/` (screenshots, measurements, handoff trace, test/lint/build logs and local responsive QA helper).

## 2026-08-28 — Faster responses after the product handoff

Design mode, preview-only timing refinement using the existing glass/Emma conversation and shared visual system. Kept the 1.6-second card handoff, shortened the settled-card pause from 4.4 seconds to 0.8 seconds, and reduced each question-to-reply delay from 4 seconds to 0.95 seconds (0.25 seconds before typing, 0.7 seconds typing). Completed rental/sales replies remain readable for 3 and 3.5 seconds. The continuing chat cycle is now 8.4 seconds; Replay still restarts the full workflow. Reduced-motion preview time was adjusted to retain static, fully visible recommendations. No layout, copy, product, price or asset changes.

Browser checks at 1440×900 and 390×844 recorded both exchanges and the next chat cycle: desktop replies appeared 965/954ms after their questions; mobile replies appeared 932/949ms after their questions. The loop stayed in stage 3 and no measured text clipping appeared. Seven Webstore tests, targeted ESLint and production build pass. Full suite: 48/49 pass; the separate homepage test fails with `Unexpected homepage dependency: ./home-market-shift`, outside the touched preview timing/test code. That homepage work was not changed. Reduced-motion output is unit-tested, not OS-emulated. Evidence: `artifacts/webstore-faster-chat-20260828/`.

## 2026-08-28 — Company-led miniature store banner

Design mode, scoped to the store inside step 2 of `/webstore-2-ai-webstore-preview`. Replaced the generic storefront icon/name with a YC monogram and explicit “Your Company” placeholder branding. The banner introduces the business with “Industrial sales & rental” and “Equipment. Tools. Parts & supplies.”, plus construction, manufacturing and maintenance sectors. Removed the instructional “Find the right products” message and duplicate Explore products CTA; the existing Get Quote header action remains. Used the existing industrial showroom image `solution-dealers.jpg`, positioned beside a dark ink copy area with a restrained yellow accent. Placeholder identity and image provenance are documented in PRODUCT-SOURCES.md; no actual supplier credentials or commercial claims were introduced.

The outer hero/background, glass styling, animation dimensions, real product cards, pricing, inventory and faster chat timing are unchanged. Browser-inspected at 1440×900, 1024×768 and 390×844, including magnified store-only inspection: banner text fits, company identity remains readable, image composition is clear, and no measured text/page overflow. The first compact inspection retained a prior mobile scroll offset; the final compact capture resets to the hero so the fixed page header does not cover the store. Seven Webstore tests, targeted ESLint and final production build pass. The full suite was not rerun for this scoped change; the preceding homepage-test limitation remains separate. No shared design/configuration edits, service restart or deployment.

Evidence: `artifacts/webstore-company-banner-20260828/` (desktop/mobile/compact measurements, store screenshots, scoped test/lint/build logs). The final compact screenshot is `compact-store-final.png`.


## 2026-08-28 — Removed the miniature store header row

Design mode, preview-only refinement. Removed the entire name/search/Get Quote header row inside step 2. The company banner is now the first element of the store preview, directly followed by the catalogue. Shifted the product cards up by the removed row height (40px desktop, 44px mobile), without changing the outer hero/animation dimensions, sidebar, product data, pricing or conversation timing. Removed the obsolete header styles and updated the existing regression test and product-source notes.

Browser QA at 1440×900 and 390×844 confirms zero old header elements, the banner aligned to the top inside the store border, catalogue immediately below, no measured text/page overflow, and the full desktop sidebar including Billing contained in the frame. Seven scoped Webstore tests and targeted ESLint pass. Evidence: `artifacts/webstore-header-removal-20260828/desktop.png`, `desktop.json`, `mobile-final.png`, `mobile-final.json`, `tests.log`, `lint.log`. The first mobile capture was invalidated by development hot reload while saving evidence; the final capture confirms the actual 390px viewport. No config, original page, service restart or deployment changes.


## 2026-08-28 — Product discovery hint in the store step

Design mode using the existing bright glass surfaces and restrained violet data accents. Added a compact three-part hint below the miniature store: Product identity (brand/model/specifications), Unique product URL (one page per product), and Search & AI discovery (Supports SEO & GEO). Step 2 now says “Built for discovery” and “Every product. Its own page and URL.” The centred footer and screen-reader summary explain the relationship without promising indexing, rankings or AI citations. This is an illustrative cue, not actual publication, entity registration or live SEO integration. Official Google guidance and claim boundaries are recorded in PRODUCT-SOURCES.md.

The hint follows the existing pages-phase fade and disappears in chat. Preserved the removed name/search/header row and card URL strips, company banner, product/pricing data, scene dimensions and fast continuing chat. Browser-checked at 1440×900, 1024×768 and 390×844; no measured text/page overflow, hint stays below the store and above the caption, and mobile label/description rows align. Confirmed hint opacity 0 during chat. Seven scoped Webstore tests and targeted ESLint pass. Reduced-motion timing/output remains covered by existing tests; OS-level emulation and a full build were not run for this scoped visual change. Original page, metadata, configuration and services remain unchanged. Evidence: `artifacts/webstore-discovery-20260828/`.


## 2026-08-28 — Slightly larger chat-summary typography

Design mode, preview-only CSS adjustment to the left-hand summary in step 3. Increased heading from 27px to 30px, body 13px to 15px, checklist 11px to 13px and connected badge 10px to 11px. Widened the paragraph measure from 260px to 300px to preserve balanced wrapping. Compact typography increases proportionally (24px heading, 13px body, 11px list); the existing mobile badge-only summary remains, with its badge increased from 9px to 10px. No copy, phone text, animation dimensions, timings, product data or original-page changes.

Browser inspection at 1440×900, 1024×768 and 390×844 confirms the two-line heading, readable checklist, no measured text/page overflow, separation from the phone and mobile badge clearance. Seven scoped Webstore tests pass. Evidence: `artifacts/webstore-chat-type-20260828/`. No configuration changes, service restart or deployment.

## 2026-08-28 — Homepage hero portraits and role colours

Design mode, homepage-only refinement. Replaced repeated AI name labels with Emma's round portrait from the shared identity source; buyer questions use the existing Webstore customer portrait. AI replies and requirement profiles remain on the left, buyer questions on the right. Blue and warm yellow glass use brand tokens, with matching portrait rings and subdued mobile background layers. The central composition is 420px wide with 340px message rows, reserving 40px for the portrait/gap while retaining 300px desktop message surfaces. Typography, industrial photograph, title, transcripts, staggered timings and five-layer structure are unchanged.

Visually inspected at 1440×1000, 1024×900 and 390×844. All portraits load, foreground messages remain readable, title clearance and page width are preserved, and outer layers still hide below 1180px. All 51 tests, targeted ESLint and production build pass. Reduced-motion behaviour is covered by the unchanged runtime tests; OS preferences were not browser-emulated. Evidence: `artifacts/home-hero-avatars-20260828/`. No configuration, service restart, copied bundle, reference-project or deployment changes.

## 2026-08-28 — Pricing add-on spacing

Design mode, limited to the transition from plan cards to Usage & Add-ons. Removed the AI Sales Agent comparison shortcut row from the visible layout and keyboard navigation while preserving the copied React nodes and comparison tables. Replaced stacked bottom padding/margin with a single 64px gap, reducing to 48px on mobile. Pricing content, typography and all other sections are unchanged.

Inspected at 1440x1000, 1024x900 and 390x844 with no page overflow. Visible pricing text matches the baseline except for the requested link. All 52 tests, targeted ESLint and production build pass. Evidence: artifacts/pricing-spacing-20260828/. No configuration, service restart, deployment or reference-source changes.

## 2026-08-29 — Simplified homepage hero portraits

Design mode, homepage-only refinement. Removed the descriptive paragraph below the hero H1 while keeping the existing eyebrow, title, industrial photograph, conversation copy and animation timing. Reduced Emma and buyer portraits from 32px to 24px and removed their coloured rings and shadows. Emma retains the shared AI Sales Agent portrait; buyer messages now use a separate industrial buyer portrait extracted from the existing local `industrial-owner-v1.mp4` brand-film asset.

Browser-inspected the initial and animated hero at 1440×900 and 390×844. The description is absent, both portrait sources are distinct, portraits render at 24px with no border or shadow, and the mobile page width matches its 390px viewport. Five scoped homepage tests and targeted ESLint pass. No configuration, service restart, reference-project change or deployment.

## 2026-08-29 — Removed homepage Market Shift controls

Design mode, homepage-only cleanup. Removed the “Illustrative buyer journey, not live search results.” note and the Pause/Play illustrations control from the Market Shift section. The four educational cards, their illustrative graphics and the clock animation remain unchanged; the existing reduced-motion preference still prevents animation for visitors who request it.

Browser-inspected at 1440×900 and 390×844. Both removed elements are absent, the Market Shift section meets the following section with no extra gap, and neither viewport has horizontal overflow. All 55 tests, targeted ESLint and production build pass; the live homepage returns HTTP 200 on port 8081. No configuration, service restart, shared design-system, copied bundle, reference-project or deployment changes.

## 2026-08-29 — Differentiated homepage flow colours

Design mode, homepage-only colour refinement. Changed stage 02 “Reason” from blue to deep teal so it no longer reads as the same hue as stage 01 “Ingest”. The four-stage sequence is now purple, teal, gold and red; all copy, graphics, layout and flow behaviour remain unchanged.

Verified the computed colours at 1440×900 and 390×844 with no horizontal overflow. All 55 tests, targeted ESLint and production build pass. No configuration, service restart, shared design-system, copied bundle, reference-project or deployment changes.

## 2026-08-29 — Technical diagram ingestion story

Design and copy refinement scoped to stage 01 of the homepage Ingest–Reason–Retrieve–Recommend flow. Replaced the two generic document rows with an illustrative reach diagram that becomes a structured coordinate table. The stage label now says “Diagrams to structured data”, and its concise copy explains that approved catalogues, specification tables and technical diagrams can be converted into structured product data for later reasoning over buyer requirements. The section introduction now names documents, tables and technical diagrams.

The coordinate labels are symbolic rather than specifications for a real machine, so the illustration does not introduce unapproved product data or an accuracy claim. Browser-inspected at 1440×900 and 390×844: the diagram, extraction arrow, table headings and three coordinate rows render within the card, text remains readable, and neither viewport has horizontal overflow. All 55 tests, targeted ESLint and production build pass. No configuration, service restart, shared design-system, copied bundle, reference-project or deployment changes.

## 2026-08-29 — AI Agent Console heading clearance

Fidelity fix scoped to the AI Agent Console section on `/ai-sales-agent`. Added a small lower text buffer to the second gradient title line so “Manage Your Enquiries.” renders fully before the supporting description begins. Copy, font size, weight, line height, section composition and the operational Console visual remain unchanged.

Browser-inspected at 1280px desktop and 390px mobile. The gradient line has 6.14px desktop / 4.21px mobile lower clearance, the title and description no longer visually collide, and neither viewport has horizontal overflow. All 56 tests, targeted ESLint and production build pass. No configuration, service restart, copied bundle, reference-project or deployment changes.

## 2026-08-29 — Restored compact Agent-foundations bento

Fidelity correction to the homepage “Your business at its core” section. Reverted the temporary four-equal-column desktop composition and restored the approved asymmetric bento: wide Company Brand beside narrow Product Inventory, followed by narrow Technical Specifications beside wide Suitable Recommendations. Scaled the existing cards, interface scenes, gaps and section spacing instead of changing their layout or copy.

The section measures approximately 731px at the 1280px rendered desktop width and 783px at 1024px, compared with the former two-row presentation exceeding a typical desktop view. Mobile retains the readable single-card stack. Browser inspection at 1280px, 1024px and 390px confirms the intended spans, complete card content and no horizontal overflow. Production build and targeted ESLint pass; the full content suite passes after updating its layout assertions. No configuration, service restart, copied bundle, reference-project or deployment changes.

## 2026-08-29 — Full Agent-foundations design revert

At the user's direction, removed the entire desktop compaction layer from the homepage “Your business at its core” section. This restores the original approved 2026-08-28 implementation exactly: 104px section padding, 24px grid gaps, 24px card corners, full heading/body sizing, 296px illustrative scenes, and the asymmetric wide/narrow then narrow/wide bento. No scaled panel transforms or compact desktop typography remain.

Browser inspection confirms the original card proportions and full internal illustrations at desktop, plus the unchanged readable mobile stack. There is no horizontal overflow. All content tests, targeted ESLint and production build pass. No copy, route, configuration, service, copied bundle, reference-project or deployment changes.

## 2026-08-29 — Varied and proportionally scaled hero conversations

Design refinement confined to the homepage hero animation. The central rental conversation retains its blue AI / gold buyer treatment. The four supporting Who We Serve conversations now use restrained violet/rose, teal/gold, indigo/orange and cyan/gold accent pairs, preserving cool AI replies and warmer buyer prompts while creating visible variety across the scene.

Supporting layers now scale their bubble width, type, portrait, gap and padding together: 300px/12.35px for the left layer, 270px/11.12px for the right layer, and 240px/9.89px for the outer layers, against the 340px/14px centre. This keeps approximate text measure proportional and prevents full-size copy from being squeezed into smaller cards. Desktop inspection confirms five distinct palettes, no surface overflow and no page overflow. At 390px, the existing centre-only mobile composition remains 14px and the background layers stay hidden. Copy, timings, positions, industrial video and title are unchanged.

## 2026-08-29 — Five-second grainy industrial hero video

Design mode, homepage-only media refinement inspired by the restrained editorial motion of the Sierra reference. Replaced the static hero presentation with a silent five-second loop derived from the existing `equipment-yard-v1.mp4` brand-film asset. The shot moves through a real industrial equipment yard, uses a dusty warm grade, restrained vignette and subtle film grain, then reverses into its opening frame for a clean repeat. The H.264 asset is 1280×720, 24 fps and approximately 810 KB.

The original image layer remains as a matching poster/fallback. The native video is muted, inline, looping and decorative; playback pauses when the document is hidden. `prefers-reduced-motion` users receive the static poster and no visible video. The hero title, Emma/buyer conversations, scroll animation, CTA/header and downstream content are unchanged.

Browser-inspected playback and composition at 1440×900, 1024×768 and 390×844, including the active mobile conversation. The loop advances at every size, title contrast remains clear and measured page width matches each viewport. `ffprobe` confirms exactly 5.000 seconds, H.264/yuv420p at 24 fps. All 57 tests, targeted ESLint and production build pass. No dependency, configuration, service restart, reference-project change or deployment. Visual sequence evidence: `artifacts/home-hero-video-20260829/contact-sheet.jpg`.

## 2026-08-29 — Compact mobile Webstore preview and transcript fade

Design refinement scoped to `/webstore-2-ai-webstore-preview` at 767px and below. Replaced the full-height stacked storyboard with stage-specific scaled scenes while leaving the stage tabs, centred explanatory note and native playback controls at readable sizes. At 390×844, the first-stage storyboard now measures 735px instead of 1,468.39px and the complete hero measures approximately 1,346.88px instead of 2,090.27px. The inventory, store and chat scene viewports are 570px, 496px and 554px respectively; the controls retain 44px touch targets and the page has no horizontal overflow.

The phone transcript now uses a soft top-and-bottom opacity mask so messages approaching either edge recede naturally. Emma's header and the message composer stay crisp because the fade is limited to the scrollable conversation body. Browser-inspected all three stages at 390×844 and confirmed the unchanged composition at 1440×900 and 1024×768. All 58 tests, targeted ESLint and production build pass. No copy, product data, configuration, service restart, reference-project change or deployment.

## 2026-08-29 — Ten-percent Agent-foundations graphic reduction

Fidelity adjustment confined to the four internal illustrations in the homepage “Your business at its core” section. Each illustration wrapper now renders at 90% from its centre. The restored asymmetric card layout, card dimensions, typography, copy, spacing and responsive stacking remain unchanged.

Browser inspection confirms a 0.9 visual-to-layout ratio for all four graphics at 1440×900 and 390×844, with no horizontal overflow. All 58 tests, targeted ESLint and production build pass. No configuration, service restart, copied bundle, reference-project or deployment changes.

## 2026-08-29 — Gradient homepage progress spine

Design refinement limited to the vertical spine in the homepage Ingest–Reason–Retrieve–Recommend flow. Replaced the pale single-colour rule with the established AI Sales Agent title sequence: violet through blue to restrained gold. Increased the line from 1px to 2px for clear but understated continuity; stage cards, numbered markers, copy and layout remain unchanged.

Browser inspection confirms the gradient at 1440×900 and 390×844, correct centre/mobile alignment and no horizontal overflow. No configuration, service restart, copied bundle, reference-project or deployment changes.

## 2026-08-29 — Secondary Webstore scale and fact-checked positioning

Design and copy refinement limited to the homepage Agent-plus-Webstore relationship section. On viewports 768px and wider, the optional AI Webstore Suite card now renders proportionally at 80% and is vertically centred, so its top and bottom no longer align with the primary AI Sales Agent card. Mobile retains the full-size stacked cards for readable text and touch interaction.

Cross-checked the copy against the approved Webstore positioning, product comparison, inventory caveats and reference implementation. Replaced the unsupported absolute “accurate product context” claim with a clearer role: a browsable, structured product library that the Agent can reference. Dedicated product pages are described as supporting—not guaranteeing—SEO and GEO discovery, while inventory freshness and visibility remain qualified by data, plan, connections and indexing. Browser inspection at 1440×900 and 390×844 confirms the intended 0.8 desktop ratio, full-width mobile cards and no horizontal overflow. No configuration, service restart, copied bundle, reference-project or deployment changes.

## 2026-08-29 — Secondary catalogue scale in Agent foundations

Applied the same product hierarchy to the homepage “Your business at its core” bento without changing its approved asymmetric layout. On viewports 768px and wider, the Product Catalogue card renders proportionally at 80% and remains centred within its original grid area; mobile keeps the card at full size for legibility. Its copy now distinguishes approved product details from supported connected-inventory context and avoids implying universal or real-time inventory accuracy. The Company Brand, Technical Specifications and Suitable Recommendations cards remain unchanged.

## 2026-08-29 — Enlarged catalogue-to-shortlist flow

Increased the visual hierarchy of the four homepage progress stages without changing their sequence, wording or alternating composition. Desktop step titles now use a 28–34px responsive scale, the timeline width and centre gutter are moderately larger, and each technical illustration has a 132px canvas with larger controls, labels and diagram details. Mobile uses a restrained 24px step title and 112px illustration canvas to preserve readable wrapping and prevent horizontal overflow.

## 2026-08-29 — Five-conversation edge fade

Design refinement limited to the homepage hero’s five animated conversation layers. The first and last visible message boxes now recede through a restrained two-step opacity falloff, while the middle of each exchange remains fully legible. The treatment extends the existing top-scroll fade with a matching lower edge and uses per-message opacity rather than an ancestor mask, preserving the coloured glass backdrop blur.

Browser-inspected at 1440×900 with all five layers active and at 390×844 with the established centre-only mobile composition. The fade classes and computed opacity are present, the glass surfaces remain intact, and neither viewport has horizontal overflow. All 58 tests, targeted ESLint and production build pass. No copy, dimensions, colours, timing, configuration, service restart, reference-project change or deployment.

## 2026-08-29 — Coloured Agent and Webstore cards

Design refinement limited to the homepage Agent-plus-Webstore relationship section. The primary AI Sales Agent card now uses a restrained warm cream-to-blush surface with its yellow edge, while the optional AI Webstore Suite card uses a pale violet-to-blue surface. The connecting plus marker carries a very light blend of both palettes. Hover states deepen the same colours slightly instead of introducing a new hue.

The Agent remains the larger dominant card and the Webstore retains its 80% desktop scale and full-size mobile stack. Copy, graphics, destinations, typography, dimensions and product positioning remain unchanged. Browser-inspected at 1440×900 and 390×844 with readable contrast and no horizontal overflow. All 58 tests, targeted ESLint and production build pass. No configuration, service restart, reference-project change or deployment.

## 2026-08-29 — Restored full-size Product Catalogue card

Corrected the homepage “Your business at its core” bento after the earlier secondary-card instruction was applied to the wrong section. The Product Catalogue card now fills its original grid area again and aligns with the Company Brand card on desktop. The approved asymmetric bento, copy, responsive stacking and 90% internal illustration scale remain unchanged.

## 2026-08-29 — Larger, clearer product relationship graphics

Refined the homepage Agent-plus-Webstore relationship section without changing its approved hierarchy, copy or destinations. Both graphic canvases now use more of their available card width and render closer to their natural scale. The Agent visual now shows Emma clarifying an industrial buyer’s forklift requirements and preparing a structured requirement profile for sales review, replacing the generic document-to-document handover. The Webstore visual remains the smaller supporting card but its storefront fills the internal canvas more effectively.

## 2026-08-29 — Photographic Who We Serve carousel

Replaced the homepage’s text-only Who We Serve grid with one horizontal, scroll-snap carousel inspired by the supplied large-format reference. The eight cards reuse the established hero photograph and destination from each corresponding Who We Serve page. Each card combines a dark readability gradient, concise industry context and one full-card native link. Touch, trackpad and keyboard scrolling are supported, alongside labelled previous/next buttons; reduced-motion preferences disable smooth transitions. Desktop shows a large lead card with the next card visible, while mobile uses an 84vw card to preserve the horizontal-scroll cue.

The latest correction keeps only half of the earlier desktop extension: the track is mathematically midway between the standard 1320px/90% content frame and the viewport edge. At 1440px this is 1368px, centred with 36px outer margins, instead of 1440px edge to edge. Previous and next controls remain vertically centred at the resized track edges. Mobile retains its full-width touch carousel. Browser-inspected at 1440×900 and 390×844; the controls scroll correctly, preserve text clearance and introduce no horizontal page overflow. All 59 tests, targeted ESLint and the production build pass.

## 2026-08-29 — Editorial catalogue-to-shortlist process

Replaced the narrow central homepage timeline with four alternating visual-and-copy chapters inspired by the supplied editorial reference. The approved `Ingest → Reason → Retrieve → Recommend` sequence, industrial technical diagrams and human-review boundaries remain intact. Each chapter now pairs an enlarged interface illustration with a concise editorial heading, while mobile stacks the visual before its explanation.

Browser-inspected at 1440×900 and 390×844. All four chapters alternate correctly on desktop, stack visual-first on mobile and preserve zero horizontal overflow. All 58 tests, targeted ESLint and the production build pass. No configuration, service restart, reference-project change or deployment.

## 2026-08-29 — Marketing heading punctuation standardisation

Removed standalone full stops from visible H1–H6 marketing headings on the homepage, AI Sales Agent, AI Webstore Suite and Webstore preview. The rule applies to rich multi-span headings and dynamically rendered transferred-page sections without flattening their typography. Question marks remain where grammatically required, deliberate product-name truncation ellipses remain intact, and paragraph, metadata and body-copy punctuation is unchanged.

Browser-audited every visible heading on all four routes at 1440px and 390px: no standalone heading full stops remain and no route introduces horizontal overflow. All 59 tests, targeted ESLint and the production build pass. No configuration, service restart, reference-project change or deployment.

## 2026-08-29 — Reversible public-marketing typography trial

System-mode trial maps only public hero titles, major section titles and their introductory descriptions to semantic source-level roles. It applies across Home, product, pricing, resource, help, company, demo, agreement and all eight Who We Serve routes; AI Agent Console, embedded demonstrations, cards, FAQs, navigation, controls, pricing details, tables and article content remain outside the role map. The trial keeps Plus Jakarta Sans/Inter and uses the approved 64/48/18px wide-desktop and 36/30/16px narrow-mobile endpoints, with centred title/description frames capped at 900px/800px where appropriate.

All 17 scoped routes pass rendered QA at 1440×900, 1024×768, 390×844 and 320×740: one H1, natural wrapping, no role clipping or overlap, no horizontal overflow and no role leakage into excluded UI. Before/after evidence for the six representative routes is in `artifacts/typography-trial-20260829`; all 61 content tests, targeted ESLint and the production build pass. The trial remains reversible and is not yet recorded as an approved permanent rule in `DESIGN.md`.

## 2026-08-29 — Brighter Reason-stage accent

Changed only the homepage `Reason` chapter in the Ingest–Reason–Retrieve–Recommend sequence from dark teal to the established Antbuildz blue token. The brighter blue now carries the numbered marker, label, diagram accent, pale surface and border while the copy, geometry and other three stage colours remain unchanged. Browser-checked at 1440×900, 1024×768 and 390×844 with no horizontal overflow; all 61 tests, targeted ESLint and the production build pass.

## 2026-08-29 — Webstore plug-in relationship

Design-mode refinement of the homepage Agent-plus-Webstore relationship section. Moved the existing relationship description directly below the section title, where it now uses the major-intro typography role. Replaced the ambiguous plus badge with a labelled cable-and-plug connector showing the optional AI Webstore Suite feeding into the primary AI Sales Agent; the connector rotates upward between the stacked cards on mobile. Product copy, card hierarchy, demonstrations and destinations remain unchanged.

Browser-inspected at 1440×900, 1024×768, 390×844 and 320×740. The title and description stay together, the connector points toward the Agent on desktop and mobile, the label remains in bounds, and there is no horizontal overflow. All 61 tests, targeted ESLint and the production build pass.

## 2026-08-29 — Shadow-free Who We Serve cards

Removed the soft drop shadow from the homepage Who We Serve carousel cards while preserving their borders, rounded corners, image readability overlays, navigation controls, dimensions and interactions. Browser-inspected at 1440×900, 1024×768 and 390×844; the computed card shadow is `none` and there is no horizontal page overflow. All 61 tests, targeted ESLint and the production build pass.

## 2026-08-29 — Ninety-percent detailed selection graphics

Expanded all four homepage Ingest–Reason–Retrieve–Recommend illustrations to approximately 90% of both dimensions of their visual panels, removing the excessive internal top and bottom space. Added source context, known and missing requirement fields, catalogue filters, illustrative comparison reasons, open checks and an explicit sales-review boundary. Replaced model-like placeholder codes and unsupported numeric product specifications with neutral illustrative options.

Forklift qualification details were checked against manufacturer guidance: rated capacity is considered with load centre and lift height, while aisle suitability also depends on load dimensions, truck geometry and clearance. Availability remains unassumed and final suitability, site fit and commercial terms remain with the sales team. Browser-inspected at 1440×900, 1024×768, 390×844 and 320×740; all four graphics measure approximately 89.4–89.7% after borders, remain unclipped and introduce no horizontal page overflow. All 61 tests, targeted ESLint and the production build pass.

## 2026-08-29 — Direct-link Industries menu

Removed the `View AI products` overview action from the desktop Industries menu because there is no master Who We Serve route. The eight descriptive industry links remain the menu's only destinations and continue to open their respective pages. The shared intro helper now makes its overview action optional, while the Resources menu retains `All resources`. Browser-checked the Industries panel at 1440×900 and 1024×768, exercised the Rental & Leasing destination, and confirmed the mobile header remains overflow-free. All 61 tests, targeted ESLint and the production build pass.

## 2026-08-29 — Yellow-underlined public header tabs

Replaced the blue rounded focus/open treatment on public primary navigation tabs with a 3px Antbuildz yellow underline. The state persists for the selected AI Sales Agent, AI Webstore Suite and Pricing pages, the selected Industries or Resources collection, open dropdowns and keyboard focus; the tab background remains transparent and no circular outline is shown. Dropdown links, utility controls, the mobile drawer and AI Agent Console controls remain unchanged.

Browser-checked open Resources at 1440×900, open Industries at 1024×768, selected direct/product-group routes at 1440×900, and the unchanged mobile header at 390×844 and 320×740. All checked viewports have zero horizontal overflow. All 61 tests, targeted ESLint and the production build pass.

## 2026-08-29 — Antbuildz browser-tab identity

Replaced the inherited Lovable browser-tab identity with the existing approved red-and-white Antbuildz “a” mark through shared root metadata. The favicon applies to every route, including the Webstore preview, without changing route titles, page content, Open Graph imagery or operational Console visuals.

Rendered-head checks on Home and the Webstore preview show only the Antbuildz shortcut/icon links; the PNG responds with HTTP 200 and no Lovable icon reference remains. All 62 tests, targeted ESLint and the production build pass.

## 2026-08-29 — Translation selector moved to the footer

Moved the existing React-owned language selector from the public header into the shared footer bottom bar. The same control, language state and dialog are preserved; no duplicate selector is created. The footer presentation is a compact 44px outlined control with the translation icon, language code and chevron. The header now retains only Sign in, Book a Demo and Menu on its utility side.

Browser-checked the relocated control at 1440×900, 1024×768, 390×844 and 320×740. The dialog opens, Escape closes it and returns focus to the footer trigger; the header contains no translation trigger and all checked viewports have zero horizontal overflow. All 62 tests, targeted ESLint and the production build pass.

## 2026-08-29 — One-and-a-half-card Who We Serve focus

Refined the homepage Who We Serve carousel to follow the supplied customer-story reference. Desktop now holds one dominant full-colour industry card plus approximately half of the next card at both standard and wide viewports, instead of revealing an increasing number of cards as the screen widens. Every non-active photograph is deliberately brighter, lower-contrast and strongly desaturated; its original colour and full content emphasis return when scrolling, arrow navigation or keyboard focus makes that card active.

The eight destinations, copy, photography, shadow-free cards, labelled controls, native links, scroll snapping and 84vw mobile cue remain intact. Reduced-motion preferences also remove the new colour and emphasis transitions.

Browser-inspected at 2048×1000, 1440×900, 1024×768, 390×844 and 320×740. The desktop composition measures 1.52, 1.50 and 1.49 visible cards respectively; arrow and keyboard-focus changes promote exactly one full-colour card, mobile retains its continuation sliver and every viewport has zero horizontal page overflow. All 62 tests, targeted ESLint and the production build pass.

## 2026-08-29 — Homepage-only data protection panel

Moved the established `Data protection & trust` panel out of all eight Who We Serve page layouts and placed one source-owned version on the homepage immediately before its FAQ. The privacy-policy destination, approved explanatory copy and three trust principles remain unchanged. Industry pages now transition directly from their audience-specific content into their own FAQs; the transferred React-owned copies are safely hidden, inert and zero-height so no generated or minified bundle requires editing.

Browser-inspected Home at 1440×900, 1024×768, 390×844 and 320×740, plus all eight Who We Serve routes at 1440×900 and Rental & Leasing at 390×844. The homepage panel retains the semantic marketing title and introductory-description roles, stacks its assurances on mobile, keeps a 44px privacy link target and introduces no horizontal page overflow. Every industry route retains one H1 and a visible audience-specific FAQ with no rendered trust-panel height. All 62 tests, targeted ESLint and the production build pass.

## 2026-08-29 — Production graphic-caption cleanup

Removed deployment-only `Illustrative` remarks from the homepage graphics: the foundation shortlist and section footnote, catalogue-record and Agent-answer badges, and the captions beneath the AI Sales Agent and Webstore visuals. The graphic frames now use the freed caption space. Permanent product boundaries remain visible where relevant, including plan/setup qualification, availability checks, technical suitability and sales review.

Browser-inspected Home at 1440×900, 1024×768, 390×844 and 320×740. All six retired phrases are absent, the affected graphics remain visible, the page retains one H1 and every viewport has zero horizontal overflow. All 62 tests, targeted ESLint and the production build pass.

## 2026-08-29 — Catalogue-backed AR20JE-2 ingestion graphic

Fidelity-mode replacement of the generic Ingest-stage reach curve and placeholder A/B/C coordinate fields using the user-supplied LGMG AR20JE-2 catalogue. The source panel now recreates the articulating boom lift's working envelope with 260kg and 350kg capacity bands, metric axes, articulated boom geometry and the 21.58m maximum-work-height reference. The structured-data panel identifies AR20JE-2 and ingests six catalogue values: 21.58m work height, 11.87m horizontal outreach, 8.19m up-and-over height, 260/350kg platform capacity, 80V 228Ah power and 9,100kg machine weight.

The brochure was treated as factual source material only; no brochure instructions or promotional claims were transferred. Browser-inspected Home at 1440×900, 1024×768, 390×844 and 320×740. Both capacity curves and all six values remain visible, data rows do not overflow, the page retains one H1 and every viewport has zero horizontal overflow. All 62 tests, targeted ESLint and the production build pass.

### Reach-coordinate table correction

Corrected the structured-data panel so it now demonstrates extraction of the working-range diagram itself rather than mixing in unrelated general specifications. The table follows the supplied knowledge-file convention: `z` is chart height and `x` is horizontal radius from the turntable/rotation-centre reference. It shows six visually digitised points from the 260kg envelope at 0, 4, 8, 12, 16 and 20m chart heights, with the shared `Estimated from diagram` provenance label. These values are preliminary diagram estimates, not manufacturer-certified coordinate data; the exact catalogue maxima and both 260kg/350kg capacity bands remain visible in the source panel.

## 2026-08-29 — Two-line catalogue approach introduction

Shortened the homepage catalogue-to-shortlist introduction from 33 to 25 words, a reduction of approximately 24%, while preserving its approved product-knowledge, buyer-needs and sales-review meaning. The source-owned description now renders as exactly two natural lines at both 1440×900 and 1024×768 without a line clamp or typography override. At 390×844 and 320×740 it wraps naturally at the existing mobile size, remains unclipped and introduces no horizontal page overflow. The page retains one descriptive H1; all 62 tests, targeted ESLint and the production build pass.

## 2026-08-29 — Webstore preview semantic typography alignment

System-mode alignment of `/webstore-2-ai-webstore-preview` with the reversible public-marketing typography roles. The preview hero, all genuine major section titles and their introductory descriptions now inherit the shared Plus Jakarta Sans/Inter tokens instead of preview-only title and description sizes. Computed hero/section/description sizes are 64/48/18px at 1440×900, 46.08/40/17px at 1024×768, 37.05/31.2/16px at 390×844 and 36/30/16px at 320×740. Centred title and description frames use the shared 900px/800px limits where appropriate.

Browser inspection confirms one H1, natural wrapping, no title/description/action overlap, no horizontal page overflow and no semantic-role leakage into the embedded Webstore demonstration at all four viewports. Navigation, buttons, storyboard controls, content, animation and the original `/ai-webstore-suite` route remain unchanged. All 62 tests, targeted ESLint and the production build pass; `DESIGN.md` remains unchanged because the typography trial is not yet approved as a permanent shared rule.

## 2026-08-29 — Inventory-grounded Agent relationship proof

Refined the homepage AI Sales Agent plus AI Webstore Suite relationship section. The Agent graphic is now a longer conversation: the buyer supplies load, lift, aisle and hire requirements; the Agent checks the connected Webstore catalogue; the result explicitly reports no confirmed five-tonne match and routes suitability and availability to team review. This demonstrates better-grounded answers without inventing stock certainty. Replaced the labelled plug illustration with a compact, text-free directional data connector and balanced both product descriptions at exactly 30 words.

Browser-inspected at 1440×900, 1024×768, 390×844 and 320×740. The Agent frame computes to 332px at wide desktop and 344px at compact desktop/mobile, all conversation and requirement details remain visible, both descriptions retain their 30-word balance, the connector remains label-free and directional, the page keeps one H1 and every viewport has zero horizontal overflow. All 62 tests, targeted ESLint, `git diff --check` and the production build pass.

## 2026-08-29 — Homepage hero conversation spacing

Increased the calculated separation between the homepage hero title and its animated conversation field from 40px to 48px on desktop and from 24px to 32px at 767px and below. The existing title position, conversation animation, industrial video, transcript behaviour and responsive banner composition remain unchanged. Browser-inspected at 1440×900, 1024×768, 390×844 and 320×740 with one H1, no title/conversation overlap and zero horizontal page overflow.

## 2026-08-29 — Market Shift section removed from Home

Fidelity-mode homepage composition change. Removed the complete `Market Shift / AI Is Changing How Industrial Buyers Choose` section from the rendered homepage. Its source component and styles remain untouched for reversibility; no files were deleted. The `Your business at its core` Agent-foundations section now follows the industrial hero directly. Other homepage sections, wording, routes, CTAs, graphics and shared design rules remain unchanged.

## 2026-08-29 — Industrial product knowledge moved before Who We Serve

Fidelity-mode homepage order change. Moved the existing `Built for the complexity of industrial products` section from directly after the Agent foundations to immediately before the photographic Who We Serve carousel. Its wording, graphic, typography, spacing and responsive behaviour remain unchanged; no other section was reordered.

## 2026-08-29 — Emma CTA moved above the Home footer

Fidelity-mode homepage order change. Moved the existing `Talk to Emma, Our AI Sales Agent` section from above the data-trust and FAQ content to the final visible position immediately above the shared footer. The trust panel and FAQ now precede Emma; Emma's image, wording, CTA behaviour, typography and responsive design remain unchanged. The transferred component stays mounted so route cleanup remains safe.

## 2026-08-29 — Who We Serve audience-title alignment

Fidelity-mode shared-layout correction across all eight Who We Serve routes. Removed the desktop and compact-desktop inset from the `Who it’s for` introduction so its eyebrow and title align with the standard 1180px section frame and the other left-aligned section titles. The paired description now reaches the frame’s right edge; audience cards, wording, typography and already-aligned mobile layout remain unchanged.

## 2026-08-29 — Shared section rhythm and surface system

System-mode standardisation of public marketing sections. Major narrative sections use semantic source-level roles with 96px vertical padding at 1180px and above, 80px from 768–1179px, and 64px at 767px and below. Compact support bands use 64px, 56px and 48px at the same breakpoints. Heroes, footers, the operational AI Agent Console, embedded demonstrations, Pricing's composed plan grid and deliberate scroll-led narratives remain component-owned. The final Who We Serve CTA now assigns the rhythm to its outer narrative section and neutralises the nested panel margin, removing the only measured stacked gap.

Section backgrounds now resolve to the approved canvas, clean, soft or dark roles while preserving component-owned gradients and the homepage trust panel. The compatibility layer marks sections through their existing semantic marketing-title roles instead of applying a blanket rule to every `<section>` element. `AGENTS.md` and `DESIGN.md` record the approved values and exceptions.

Every public route was browser-audited at 1440×900 in one reusable tab: Home, AI Sales Agent, AI Webstore Suite, Webstore preview, Pricing, Resources, AI Help Centre, About, Book a Demo, Agreements, Rental & Leasing, Manufacturers & OEMs, Dealers & Distributors, Industrial & MRO, Hardware & Trade, Building & Engineering, Parts & Aftermarket, and Buggies & Vehicles. Home, AI Sales Agent, AI Webstore Suite, Pricing, Resources and Manufacturers & OEMs were additionally checked at 1024×768, 390×844 and 320×740. Every visible public route retained one descriptive H1 and zero horizontal overflow; marked sections resolved to 96/80/64px major or 64/56/48px compact padding with zero section margins. AI Agent Console and embedded demonstrations received no marketing-section roles. All 64 tests, targeted ESLint and the production build pass.

## 2026-08-29 — Who We Serve hero breadcrumb removed

Fidelity-mode simplification across all eight Who We Serve routes. Removed the redundant `Who We Serve / current audience` breadcrumb from the top of each audience hero so visitors reach the descriptive H1 directly. Route URLs, canonical metadata, header Industries navigation, hero wording, CTA behaviour and the one-H1 structure remain unchanged.

## 2026-08-29 — Atmospheric blurred Home hero video

Design-mode homepage hero refinement informed by Sierra Horizon’s blurred moving backdrop. The existing industrial-yard loop and reduced-motion poster now use a strong optical blur, restrained desaturation, increased contrast and a slightly enlarged media plane, while a deeper navy overlay strengthens separation behind the white/yellow title and Agent conversations. Antbuildz footage, wording, animation sequence, navigation, speaker glass, title spacing and reduced-motion playback behaviour remain unchanged; the treatment stays homepage-scoped.

## 2026-08-29 — Shared Antbuildz.AI wordmark artwork

Fidelity-mode brand update for the shared public header and footer. Replaced the CSS-typed `antbuildz` approximation with the supplied 1471×225 Antbuildz wordmark artwork, cropped non-destructively before its legacy `.com` suffix. A live `.ai` suffix uses the existing Plus Jakarta Sans 850 wordmark typography and the Antbuildz yellow token, preserving crisp scaling while keeping the source artwork untouched. The accessible `Antbuildz AI home` label, home destination and shared header/footer structure remain unchanged.

## 2026-08-29 — Centred Agent-foundations composition

Scaled the complete homepage `Your AI Sales Agent / Your business at its core` composition to 85% at desktop widths and centred it around the section frame. The title, description, four cards and their internal product graphics retain their original proportions. The established single-column mobile composition remains at full scale to preserve readable text and touch-friendly spacing.

## 2026-08-29 — Longer forward-cut Home hero film

Replaced the five-second forward/reverse hero loop with a 16.83-second forward-moving industrial story. The sequence moves from the equipment yard through tools, parts inventory and warehouse operations, using restrained 0.8-second dissolves before returning to the matching equipment-yard loop frame. No segment plays in reverse. The new silent H.264 asset remains 1280×720 at 24fps, uses fast-start metadata and is approximately 2.9MB.

Browser-inspected active playback at 1440×900, 1024×768 and 390×844. The new source loads and plays at all three sizes, the existing blur and contrast treatment remains legible behind the title, navigation and title geometry are unchanged, each route check retains one H1 and there is no horizontal overflow. Reduced-motion visitors still receive the static poster instead of visible video playback.

## 2026-08-29 — About ecosystem destinations

The About page retains three platform pillars, now named `Agentic AI`, `Webstore Suite` and `Marketplace`. Its closing `Build Your AI Powered Industrial Business` panel presents only `Antbuildz AI Agent` and `Marketplace`: the Agent links directly to `https://antbuildz.ai`, while Marketplace links directly to `https://antbuildz.com`. The transferred production bundle remains unchanged; the adjustment is applied through the source-level compatibility layer. Browser-checked the changed sections at 1280×720 and 390×844 with one H1 and no horizontal overflow; both closing links were exercised and reached their requested domains.

## 2026-08-30 — Emma inventory card replaces industrial-product section

Fidelity-mode homepage composition change. Removed the source-owned `Built for the complexity of industrial products` section and relocated the existing `Talk to Emma, Our AI Sales Agent` inventory card into its position immediately before the photographic Who We Serve carousel. The original Emma component, tablet photography, inventory-aware wording and `/chat` action are reused rather than duplicated. Route cleanup restores the transferred component correctly when leaving and returning to Home.

Browser-inspected at 1440×900 and 390×844. The homepage renders one Emma section, the retired industrial-product section is absent, the card precedes Who We Serve, its image loads, the page retains one H1 and both viewports have zero horizontal overflow. Pricing-to-Home navigation also preserves the placement. All 66 tests, targeted ESLint, `git diff --check` and the production build pass.

## 2026-08-30 — Emma inventory-tablet CTA photography

Fidelity-mode homepage refinement of the final `Talk to Emma, Our AI Sales Agent` section. Replaced the interim portrait with a new versioned 1672×941 image derived from the read-only 8080 Emma reference: the same red-top identity now checks an industrial product catalogue on a tablet within a credible inventory setting. The wide composition retains bright copy space on desktop and reframes Emma, the tablet and the existing identity badge above the copy on mobile. No readable prices, quantities, availability states, logos or stock claims appear in the image.

The established warm card, border, typography, inventory-aware wording and `/chat` action remain unchanged. Browser-inspected at 1440×900, 1024×768 and 390×844: the image loads at its native dimensions, the CTA remains 54px high, every viewport retains one H1 and zero horizontal page overflow, and browser logs are clear. All 66 content tests, targeted ESLint, `git diff --check` and the production build pass. The 8080 project, previous image asset, configuration, services and deployment remain untouched.

## 2026-08-30 — Inventory knowledge replaces the Emma introduction

Design-mode homepage copy correction. Removed the visible `Meet Emma` eyebrow and changed the inventory card from a persona introduction to a product-capability explanation. The new heading is `Built to Understand Your Inventory`; supporting copy covers approved catalogue information, technical specifications, pricing guidance, availability rules, product comparison and suitable recommendations with team review. The image badge now reads `AI Sales Agent`, and the action is `Explore AI Sales Agent` linking to `/ai-sales-agent` instead of the chat demonstration. The established Emma tablet photography, warm card treatment and responsive composition remain unchanged.

## 2026-08-30 — Smaller inventory-card heading

Design-mode homepage typography refinement. Reduced only the `Built to Understand Your Inventory` heading to 28px at wide desktop, 26px at compact desktop and 24px on mobile so it sits closer to the supporting-description scale. The description remains 18px, 17px and 16px at the same breakpoints; the card copy, image, badge, action and shared heading system remain unchanged.

Browser-inspected at 1440×900, 1024×768 and 390×844. The title keeps its intended two-line hierarchy, the mobile card remains readable and touch-friendly, and all checked viewports retain zero horizontal overflow. All 66 content tests, targeted ESLint and the production build pass.

## 2026-08-30 — Desktop hamburger removed from the public header

System-mode shared-header refinement. The complete public navigation already exposes AI Sales Agent, AI Webstore Suite, Pricing, Industries and Resources on desktop, so the redundant hamburger is now hidden from 981px upwards. Sign in and Book a Demo remain visible desktop utilities. At 980px and below, the established hamburger and six-link drawer remain available; the signed-in AI Agent Console and its operational navigation controls are outside this public-header rule.

Browser-inspected at 1440×900, 1024×768 and 390×844. Wide and compact desktop retain the centred full navigation, Sign in and Book a Demo with no hamburger or horizontal overflow; the 1024px navigation keeps 4px clearance before Sign in. On mobile, the hamburger opens the established six-link drawer, its close control dismisses the drawer and returns focus to the trigger, and the page has zero horizontal overflow. All 67 content tests, targeted ESLint, `git diff --check` and the production build pass.

## 2026-08-30 — Recommendation conversation contained in a phone surface

Fidelity-plus-Design refinement of the homepage `04 Recommend` illustration. The existing Emma conversation, buyer question, supported-inventory comparison and sales-review boundary now sit inside a centred 9:17 portrait phone surface rather than stretching across the full stage. The phone uses rounded clipping, a light surface and restrained shadow without a bezel, outline, device chrome or added controls. All existing copy, colour hierarchy and inventory-review safeguards remain unchanged.

Browser-inspected at 1100×720 and 390×844. The phone measures approximately 171×324px at compact desktop and 171×322px on mobile; the mobile stage alone grows to 360px so the content remains recognisable while retaining the portrait proportion. Both viewports have zero horizontal page overflow and clear browser logs. The supplied source and rendered stage were compared together in `artifacts/design-qa-phone-comparison.png`; the final QA result is `passed`. All 67 content tests, targeted ESLint, `git diff --check` and the production build pass. Full-repository ESLint continues to report unrelated pre-existing issues in generated Marketplace assets.

## 2026-08-30 — Fact-checked mixed-equipment retrieval graphic

Audit followed by Design-mode refinement of the homepage `03 Retrieve` and `04 Recommend` illustrations. Replaced the invented `FLT-*` records and arbitrary large funnel counts with seven recognisable manufacturer models spanning electric and diesel forklifts, a telehandler, an articulating boom lift, a scissor lift and a compact excavator. The displayed ratings retain their correct measurement type: forklift rated load, telehandler maximum lift capacity, access-platform capacity and excavator operating weight. Manufacturer sources and interpretation boundaries are recorded in `app/HOME-EQUIPMENT-SOURCES.md`.

Year and approximate age are visibly labelled as example fleet metadata rather than manufacturer specifications or live Antbuildz inventory. The filtering counts now reconcile to the seven visible records, and the recommendation stage continues the same Toyota, Hyster and Linde models while keeping mast, load-centre, site-suitability and availability confirmation with the sales team.

Browser-inspected at 1440×900, 1024×768, 390×844 and 320×740. A first compact-desktop pass exposed table clipping; the Retrieve scene now uses its available stage height, the seven-row table no longer reserves an unused eighth row, and the stage grows only where required at compact and mobile widths. The final render shows every row with no table/funnel overlap, no clipped cells and zero horizontal page overflow. Full-view and focused same-input comparisons are saved under `artifacts/`; the final QA result is `passed`.

## 2026-08-30 — Customer-safe reasoning and decision layer

Audit followed by Design-mode refinement of the homepage `02 Reason` chapter. The graphic now shows a public decision trace from confirmed buyer inputs through essential industrial suitability checks to one of three next actions: clarify, retrieve supported options or route to review. The current example stops at `Clarify before matching` because lift height, load geometry and aisle clearance are incomplete. Emma asks for those constraints before the later retrieval and recommendation stages.

Forklift qualification wording was cross-checked against OSHA load-centre/nameplate guidance, Toyota's aisle-width calculation factors and Hyster's right-angle-stack clearance tables. The public trace includes rated load, load centre, mast/lift configuration, load geometry and aisle clearance, while explicitly avoiding model names, prompts, durations, token totals, costs, scores, hidden routing and chain-of-thought. Source links and the product boundary are recorded in `app/HOME-EQUIPMENT-SOURCES.md`.

Browser-inspected at 1440×900, 1024×768 and 390×844. The first compact pass exposed a clipped Emma follow-up; only the Reason stage now grows to 390px at compact desktop, while mobile retains the established 310px stage. The final implementation contains every state, has zero horizontal page overflow and clear browser logs. Full-view and focused same-input comparisons are saved under `artifacts/`; the final QA result is `passed`. All 67 tests, targeted ESLint, `git diff --check` and the production build pass.

## 2026-08-30 — Larger recommendation phone

Fidelity-plus-Design refinement of the homepage `04 Recommend` chapter. Enlarged the outline-free phone from a narrow 9:17 presentation to a broader surface that occupies approximately 45% of the wide stage and 86% of its height. Compact desktop and mobile increase its share to approximately 57% and 73% of the stage width so the conversation remains the dominant visual. The rounded clipping, light phone surface, soft shadow, Emma portrait, fact-checked catalogue records and sales-review boundary remain unchanged.

Browser-inspected at 1280×720, 1024×768 and 390×844. An initial percentage-width pass resolved against a shrink-to-fit grid track and compressed the table; explicit full-size grid tracks now keep all three option rows and the review handoff visible. Every checked viewport has zero page and phone overflow and clear browser logs. Full-view and focused same-input comparisons are saved in `artifacts/recommend-phone-scale-20260830/`; the final QA result is `passed`. All 67 tests, targeted ESLint, `git diff --check` and the production build pass.

## 2026-08-30 — Simplified four-card selection process — superseded

Design-mode homepage refinement inspired by the supplied Sierra feature layout. Replaced the long alternating technical chapters on Home with one compact four-card overview: Ingest, Reason, Retrieve and Recommend. Each card now carries one simple customer-facing idea, one short heading and one concise explanation. Wide desktop uses one row, tablet uses a 2 × 2 grid and mobile stacks the cards. The detailed fact-checked scenes remain in source for reversibility and possible product-detail use but are no longer rendered in this homepage section.

Remotion guidance was used to reconsider motion; no player or animation was added because the static four-card explanation communicates the sequence more clearly and avoids adding runtime weight. Existing capability boundaries remain visible: approved knowledge, missing constraints, supported catalogue and inventory, and team review for suitability, availability and commercial terms.

Browser-inspected at 1440×900, 1024×768 and 390×844 with zero horizontal overflow and clear browser logs. The Sierra source and implementation comparison is saved at `artifacts/process-simple-20260830/design-qa-comparison.png`; the final QA result is `passed`. All 67 tests, targeted ESLint, `git diff --check` and the production build pass. No configuration, service restart, reference-project change or deployment was performed.

## 2026-08-30 — Original alternating process layout restored

Fidelity-mode correction following the user's clarification that the Sierra reference applied only to simplifying the inner graphics, not to changing the established section composition. Restored the four large alternating graphic-and-copy rows on Home. Wide and compact desktop alternate the visual left and right; mobile keeps each stage's copy before its visual. The concise Ingest, Reason, Retrieve and Recommend scenes remain inside the original large frames.

Browser-inspected at 1440×900, 1024×768 and 390×844. Wide visuals measure approximately 584×410px, compact visuals approximately 495×360px, and mobile visuals 351×310px. Every checked viewport has zero horizontal overflow and the mobile copy-first reading order is intact. Evidence is saved as `artifacts/process-layout-restored-1440.png` and `artifacts/process-layout-restored-390-process.png`; the final QA result is `passed`. All 67 tests, targeted ESLint, `git diff --check` and the production build pass. No configuration, service restart, reference-project change or deployment was performed.

## 2026-08-30 — Agent conversation becomes a fading upper-phone visual

Fidelity-mode homepage refinement scoped to the AI Sales Agent illustration in `One connected workflow`. Removed the pale rectangular conversation stage while retaining the existing Emma conversation inside a centred portrait phone. Only the upper portion of the phone is shown; a static gradient mask gradually fades the device and conversation into the product card below. The product-card layout, copy, `Start here` label, destination, connector and Webstore card remain unchanged.

Browser-inspected at 1440×900, 1024×768 and 390×844. The phone remains centred and readable, the fade is gradual at all three sizes, and every checked viewport has zero horizontal overflow. Evidence is saved as `artifacts/agent-phone-fade-1440-detail.png` and `artifacts/agent-phone-fade-390.png`; the final QA result is `passed`. All 67 tests, targeted ESLint, `git diff --check` and the production build pass. No configuration, service restart, reference-project change or deployment was performed.

## 2026-08-30 — Lighter connected-product cards and directional integration

Fidelity-plus-Design refinement of the homepage `One connected workflow` product pairing. Removed the yellow and violet outer outlines from the AI Sales Agent and AI Webstore Suite cards while preserving their established layout, soft surfaces, radii, responsive stacking and product hierarchy. The two action labels now read `AI Sales Agent` and `AI Webstore Suite`; their arrows and destinations are unchanged.

The Webstore catalogue thumbnails now use one fixed media frame with per-source optical correction, balancing the apparent scale of the drill, bearing and forklift without replacing the approved local product images. Replaced the static centre symbol with a thin dotted integration line whose restrained glow travels from Webstore into the Agent. On mobile the same relationship becomes bottom-to-top, and reduced-motion users receive a static endpoint rather than continuous motion.

Browser-inspected at 1674×939, 1440×900, 1024×768 and 390×844. The card outlines are absent, the three products are visually balanced, the connector direction is correct in both orientations, CTA destinations are preserved, every checked viewport has zero horizontal overflow and browser logs are clear. Full-view, focused and mobile evidence is saved in `artifacts/connected-workflow-refinement-20260830/`; the final QA result is `passed`. All 67 tests, targeted ESLint, `git diff --check` and the production build pass. No shared design-system, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — Webstore 2 shared-header shortcut

Design-mode shared-header addition requested for the Webstore 2 preview. Added `Webstore 2` directly after `AI Webstore Suite` in the public desktop navigation, linking to `/webstore-2-ai-webstore-preview`. It reuses the established navigation-link typography, spacing, focus state and yellow active underline, leaving Book a Demo as the dominant header action. Added the same direct destination to the flat mobile drawer so the preview remains reachable below the desktop-navigation breakpoint.

Browser-inspected the preview at 1440×900 and 1024×768, and opened the drawer at 390×844. The new link reaches the requested route, receives `aria-current="page"` on the preview, retains a 44px mobile target, and all checked viewports have zero horizontal overflow. The page retains one H1. The existing Remotion licensing notice remains in the browser console and is unrelated to this navigation change. All 67 tests, targeted ESLint and `git diff --check` pass.

## 2026-08-30 — Lighter global Sales Agent section

Design-mode refinement scoped to the `24/7 Sales Agent` band on the Webstore 2 preview. Replaced the heavy ink background with the approved soft violet surface and restrained violet/blue radial light. The globe, language orbit, layout, copy and primary action remain unchanged; heading and description colours now use the public ink/body roles, the eyebrow uses a deeper brand blue, and the secondary Demo action uses a quiet translucent white treatment.

Browser-inspected at 1440×900, 1024×768 and 390×844. The desktop two-column and mobile stacked compositions remain intact, all checked viewports have zero horizontal overflow, and the route retains one H1. Evidence is saved in `artifacts/webstore-global-agent-light-20260830/`; the final QA result is `passed`. All 68 tests, targeted ESLint and `git diff --check` pass. No shared design-system, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — Lighter connected-workflow page surface

Design-mode homepage refinement scoped to `One connected workflow`. Remapped this section from the stronger soft surface (`#F1EFF8`) to the default public canvas (`#F8F7FF`) so it sits more quietly between the clean white process section and the following homepage content. The existing Agent/Webstore layout, warm and cool card treatments, phone fade, dotted integration direction, copy, destinations and responsive stacking remain unchanged. No new page-specific colour was introduced.

Browser-inspected at 1440×900, 1024×768 and 390×844. The canvas role is applied at all three widths, the two product actions remain 54px high on mobile, the route retains one H1 and every checked viewport has zero horizontal overflow. Evidence is saved in `artifacts/connected-workflow-lighter-surface-20260830/`; the final QA result is `passed`. All 68 tests, targeted ESLint, `git diff --check` and the production build pass. No shared design token, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — Trust panel returns to the page canvas

Design-mode homepage refinement scoped to `Data protection & trust`. Removed the stronger soft-lavender section fill by remapping the outer band from the soft surface (`#F1EFF8`) to the default public canvas (`#F8F7FF`), matching the surrounding homepage. The restrained blue trust panel remains the section’s only coloured surface; its copy, privacy-policy destination, three assurance principles, border, layout and responsive behaviour are unchanged.

Browser-inspected at 1440×900, 1024×768 and 390×844. The canvas role is applied at all three widths, the panel remains contained, the privacy link retains a 44px mobile target, the route retains one H1 and every checked viewport has zero horizontal overflow. Evidence is saved in `artifacts/trust-section-canvas-20260830/`; the final QA result is `passed`. All 68 tests, targeted ESLint, `git diff --check` and the production build pass. No shared design token, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — Smaller inventory-card description

Design-mode homepage typography refinement scoped to the `Built to Understand Your Inventory` card. Reduced the supporting description from the inherited introduction scale to `clamp(15px, 1.05vw, 16px)` with a 1.55 line-height, while preserving its restrained 52-character measure. The heading, copy, image, badge, action, card geometry and destinations remain unchanged.

Browser-inspected at 1440×900, 1024×768 and 390×844. The description computes to 15px at all three checked widths, wraps cleanly, the mobile action remains 54px high, the route retains one H1 and every viewport has zero horizontal overflow. Evidence is saved in `artifacts/inventory-description-smaller-20260830/`; the final QA result is `passed`. All 68 tests, targeted ESLint, `git diff --check` and the production build pass. No shared design token, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — Public heroes extend behind the shared header

System-mode Public Header refinement applied across the public marketing route system. At the top of each route, the fixed header is transparent and the page's own hero surface now continues behind it. A responsive header-height spacer preserves every hero's established content position instead of copying route-specific colours into the navigation. After 24px of scrolling, the header returns to the shared canvas-and-white blurred surface. Home and the Webstore 2 preview retain their established dark-image overlay contrast, while the signed-in AI Agent Console remains outside the public treatment.

Browser-inspected the AI Sales Agent, AI Webstore Suite, Pricing, Resources, About, Agreements, AI Help and all eight Who We Serve routes at 1440×900, with representative product and industry checks at 390×844. Every checked top state uses its own hero surface behind the header, the scrolled header remains fixed and legible, the mobile drawer opens normally, the original H1 positions are preserved and every viewport has zero horizontal overflow. Home, Webstore 2 and Console exclusions were also confirmed. Evidence is saved in `artifacts/public-hero-header-20260830/`; the final QA result is `passed`. All 69 tests, targeted ESLint, `git diff --check` and the production build pass. No route copy, CTA, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — Pricing hero consolidated around customer channels

Fidelity-plus-Design refinement of the Pricing page hierarchy. Replaced the previous `One Conversation. Thousands in Revenue.` hero with `Deploy Your AI Sales Agent Across Your Customer Channels.` and the concise, qualified supporting line `One business conversation may turn into thousands in revenue.` The repeated AI Sales Agent section heading immediately above the billing controls is hidden, leaving one page title while preserving the monthly/annual control and all plan cards.

Browser-inspected at 1440×900, 1024×768 and 390×844. The authored break produces a balanced two-line desktop title, the mobile title and description wrap cleanly, the route retains one visible H1 and every checked viewport has zero horizontal overflow. Monthly and annual selection continue to update the plan price correctly. Evidence is saved in `artifacts/pricing-hero-consolidated-20260830/`; the final QA result is `passed`. All 69 tests, targeted ESLint, `git diff --check` and the production build pass. No pricing, limits, CTA destinations, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — Shared header dropdowns use restrained canvas glass

System-mode refinement of the shared Industries and Resources desktop dropdowns. Replaced the opaque canvas fill with a 90% canvas-glass surface and 18px backdrop blur, retaining the established border, broad shadow, 24px corners, centred frame and content grouping. Standardised both dropdowns to the approved menu type roles: Plus Jakarta Sans 24px/700 for the panel title, Plus Jakarta Sans 12px/800 for the eyebrow, Inter 14px/600 for link titles, Inter 13px/400 for supporting descriptions and Inter 12px/600 for group labels.

Browser-inspected Resources at 1440×900 and both shared dropdowns at 1024×768, with the compact/mobile exclusion checked at 390×844. The translucent surface remains legible above page content, both menus share the same computed typography, opening one closes the other, Escape closes the active menu and returns focus to its trigger, and every checked viewport has zero horizontal overflow. Evidence is saved in `artifacts/header-dropdown-glass-20260830/`; the final QA result is `passed`. All 69 tests, targeted ESLint, `git diff --check` and the production build pass. No route content, destination, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — Selected Webstore experience becomes the canonical product page

Fidelity/System route promotion requested for AI Webstore Suite. `/ai-webstore-suite` now renders the complete selected Webstore listing workflow previously reviewed at `/webstore-2-ai-webstore-preview`, preserving its dusty-ochre hero, catalogue enrichment storyboard, mixed industrial products, product-page handoff, Emma recommendation conversation, responsive layout and existing actions. The canonical title, description, social URL and canonical URL now use `https://antbuildz.ai/ai-webstore-suite` with index/follow metadata. The old preview URL returns a 307 redirect to the canonical page so saved review links continue to work without competing in search.

Removed the temporary `Webstore 2` shortcut from the desktop Public Header and the mobile drawer. The desktop order is again AI Sales Agent, AI Webstore Suite, Pricing, Industries and Resources; the flat mobile drawer contains AI Sales Agent, AI Webstore Suite, AI Agent Console, Pricing, Resources and About Us. AI Webstore Suite retains its active state and the established transparent overlay header above the dark industrial hero.

Browser-inspected the canonical route at 1440×900, 1024×768 and 390×844. The selected design renders at every width, the former preview link is absent, the mobile drawer contains exactly six intended destinations, canonical metadata is correct, the old URL redirects, the route retains one H1 and every checked viewport has zero horizontal overflow. Evidence is saved in `artifacts/ai-webstore-canonical-20260830/`; the final QA result is `passed`. All 69 tests, targeted ESLint, `git diff --check` and the production build pass. No pricing, claims, product data, configuration, service restart, reference-project, deployment or file-deletion change was made.

## 2026-08-30 — AI Sales Agent header-to-hero spacing restored

Fidelity-mode correction scoped to `/ai-sales-agent`. Restored the transferred header and hero relationship from the read-only `/aiagent` reference: the shared header remains in its own band, followed by the hero's original 96px content inset. The current H1, supporting copy, CTAs, navigation order, Emma phone graphic, hero dimensions and responsive composition remain unchanged. This route-specific decision supersedes the AI Sales Agent portion of the earlier public-hero overlay treatment without changing the other public routes.

Browser-inspected at 1440×1000, 1024×768 and 390×844. The header remains in normal sticky flow, the hero begins directly below it and the content inset computes to 96px at every checked width. The route retains one H1, the temporary Webstore 2 navigation item remains absent and every viewport has zero horizontal overflow. The 44px mobile menu trigger opens and closes the six-link drawer normally. Evidence is saved in `artifacts/ai-sales-agent-header-gap-20260830/`; the final QA result is `passed`. All 69 tests, targeted ESLint, `git diff --check` and the production build pass. No hero copy, CTA, phone graphic, navigation order, configuration, service restart, reference-project, deployment or file-deletion change was made.

## 2026-08-30 — Connected workflow uses a clean white surface

Design-mode homepage refinement scoped to `One connected workflow`. Remapped the section's outer surface from the default canvas (`#F8F7FF`) to the approved clean surface (`#FFFFFF`) so it matches the surrounding white sections. The warm AI Sales Agent card, cool AI Webstore Suite card, fading phone, dotted integration direction, copy, spacing, destinations and responsive stacking remain unchanged. This supersedes the earlier canvas-surface choice for this section only.

Browser-inspected at 1440×1000, 1024×768 and 390×844. The section computes to the clean white surface at all three widths, both product destinations remain unchanged, the two mobile actions remain above 54px and every checked viewport has zero horizontal overflow. Evidence is saved in `artifacts/connected-workflow-white-surface-20260830/`; the final QA result is `passed`. All 69 tests, targeted ESLint, `git diff --check` and the production build pass. No copy, card treatment, illustration, spacing, interaction, shared token, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — Sierra-inspired compact selection overview

Design-mode homepage refinement based on the user-supplied Sierra feature-grid reference. Replaced the oversized alternating `From your inventory to recommendation` chapters with one lean editorial workflow row: four evenly aligned customer-facing interface panels on wide desktop, a 2 × 2 tablet grid and a visual-first single-column mobile sequence. The established Antbuildz title, four-stage order, approved catalogue and inventory boundaries, Emma recommendation handoff, review language and violet/blue/gold/red stage identities remain unchanged. No Sierra copy, assets or product components were copied.

This decision supersedes the earlier `Original alternating process layout restored` composition for this homepage section. Browser-inspected at 1440×1000, 1024×768 and 390×844. Every panel fits its frame without internal clipping, the source order remains visual then supporting copy, the route retains one H1 and every checked viewport has zero horizontal overflow. Evidence is saved in `artifacts/process-sierra-redesign-20260830/`; the final QA result is `passed`. All 69 tests, targeted ESLint, `git diff --check` and the production build pass. No copy, capability claim, route, CTA, shared design token, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — Homepage process composition locked

Fidelity-mode correction following the user's explicit instruction that the attached `From your inventory to recommendation` composition must not change. The approved layout is now a durable section contract: centred eyebrow/title/description, four equal visual-first columns on wide desktop, a 2 × 2 compact layout and a single-column mobile stack with every graphic immediately before its own label, title and description. Future requests to refine this section are graphic-only unless the user explicitly asks to unlock the layout.

No visible layout, copy, route, CTA or graphic changed in this correction because the current implementation already matches the supplied composition. Source comments, design-system guidance and regression assertions now guard the column structure, introduction alignment, panel spacing and visual-before-copy order.

## 2026-08-30 — Alternating homepage process composition restored and locked

Fidelity-mode correction after the user clarified that the compact four-column composition was not the intended layout. Restored the earlier approved four-row process composition from the saved QA reference: large graphic left for Ingest, right for Reason, left for Retrieve and right for Recommend. Mobile keeps each stage's label, title and description before its matching graphic. The current simplified customer-facing graphics remain unchanged inside the restored large panels.

This decision supersedes both `Sierra-inspired compact selection overview` and the mistaken `Homepage process composition locked` entry above. The alternating composition is now the locked layout; future routine requests may change only the four inner graphics unless the user explicitly asks to unlock the section.

Browser-inspected at 1440×1000, 1024×768 and 390×844. Wide panels measure 582×410px, compact panels 477×360px and mobile panels 351×310px. Alternation is correct at both desktop widths; all four mobile stages render copy before graphic. Every checked viewport has zero horizontal overflow and the route retains one H1. All 69 tests, targeted ESLint, `git diff --check` and the production build pass. No inner graphic, copy, route, CTA, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — AI Sales Agent hero extends behind the top header

System-mode correction requested for `/ai-sales-agent`. Removed the route-specific separate-header exception so the shared fixed Public Header is transparent before scrolling and the AI Sales Agent hero surface continues behind it, matching the homepage interaction. The existing header-height spacer preserves the hero content position. After 24px of scrolling, the shared canvas-and-white blurred header surface returns for legibility.

This decision supersedes `AI Sales Agent header-to-hero spacing restored`. The hero copy, phone graphic, actions, navigation order and mobile drawer remain unchanged.

Browser-inspected at 1440×900 and 390×844 in both top and scrolled states. At the top, the header and navigation are transparent, the hero begins at y=0 and the responsive spacer measures 81px desktop / 75px mobile. After scrolling, the shared canvas-and-white blurred surface appears. Both viewports retain one H1 and zero horizontal overflow. All 69 tests, targeted ESLint, `git diff --check` and the production build pass. No hero copy, visual, action, route, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — Static homepage hero restored with immediate conversation

Fidelity-mode homepage correction requested against the supplied earlier hero reference. Restored the approved blue-hour mountain logistics photograph showing the heavy-haul truck and excavator. Removed the decorative industrial video setup and its blur treatment; the photograph now uses a restrained dark overlay that maintains heading and navigation contrast.

The homepage hero is no longer a scroll-led reveal. Its title uses the settled upper position, every responsive layout shows the primary Agent conversation on the first frame, and the hero moves normally with the document instead of pinning. The message sequence may continue inside the visible conversation, but page scrolling does not control its appearance. This static first-load relationship is recorded in `DESIGN.md` as the durable homepage hero rule.

Browser-inspected at 1440×900 and 390×844. Both first frames load the approved image at `scrollY: 0`, contain no hero video element, display the primary conversation at opacity 1 and have zero horizontal overflow. Desktop scrolling moves the relative-positioned hero with the page rather than fixing it. All 69 tests, targeted ESLint, `git diff --check` and the production build pass. No route, CTA, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — Homepage foundation card reframed around company SOPs

Copy refinement within the existing locked four-card `Your business at its core` composition. Replaced the fourth `Suitable recommendations` card with `Your SOPs and process knowledge`. The description now covers approved qualification steps, escalation rules, handover procedures and human sign-off. Its illustrative labels follow the same idea: Approved SOP → warehouse equipment enquiry → approved next step → team approval. The card layout, proportions, industrial product image and surrounding three cards remain unchanged.

Browser-inspected at 1440×900 and 390×844. The heading remains one line on wide desktop and wraps cleanly to two lines on mobile; the process graphic remains inside its card and both viewports have zero horizontal overflow. All 69 tests, targeted ESLint, `git diff --check` and the production build pass.

## 2026-08-30 — Locked homepage process graphics adopt a quieter Sierra-style interface language

Fidelity-plus-Design refinement scoped only to the four inner graphics in `From your inventory to recommendation`. The locked centred introduction, alternating left/right rows, stage order, copy, typography hierarchy, spacing and mobile copy-before-graphic order remain unchanged. Each graphic now presents one restrained piece of interface evidence on the existing stage tint: approved catalogue fields becoming a structured record, known and missing buyer requirements leading to a clarification action, approved-source retrieval producing a short review list, and Emma explaining a supported option inside a clear sales-review boundary.

The supplied Sierra reference informed the airy density, pale surfaces, white inset panels, hairline borders and minimal elevation; no Sierra copy, assets or product UI was copied. A single low-key connector pulse illustrates the knowledge handoff and stops under `prefers-reduced-motion`. Remotion motion guidance informed the timing, while the implementation remains native responsive React/CSS so the established live section does not acquire an unnecessary video runtime.

Browser-inspected at 1440×900 and 390×844. All four desktop graphics fit the existing 582×410px panels, all four mobile graphics fit the existing 351×310px panels, the alternating composition and mobile order remain unchanged, the route retains one H1, the browser console has no warnings or errors and both viewports have zero horizontal overflow. Evidence is saved in `artifacts/home-process-sierra-graphics-20260830/`; the final QA result is `passed`. All 69 tests, targeted ESLint and `git diff --check` pass. No section layout, route copy, CTA, capability claim, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — Homepage hero adopts a high-left promise and lower-right Agent proof

Fidelity-plus-Design refinement scoped only to the homepage hero. The live Sierra hero informed the macro spatial hierarchy: a compact promise in the high-left reading zone and one conversation proof growing upward from the lower right. Antbuildz keeps its approved static mountain-logistics photograph, industrial copy, brand typography, navigation, glass treatment and first-load conversation sequence; no Sierra asset, copy, type or interface component was copied.

The title, new supporting description and Agent eyebrow now share a left-aligned 680px desktop frame. The primary Agent conversation is anchored to the lower-right corner and remains visible immediately; the four supporting depth conversations are hidden so the industrial photograph retains breathing room. On mobile the same hierarchy becomes one safe vertical composition with the copy at the top and the conversation at the bottom. Scrolling still does not control the conversation, while the existing fixed header remains transparent at the top and restores its canvas surface after scrolling.

Browser-inspected at 1280×720 and 390×844, including a later desktop conversation state. Both viewports retain one H1 and zero horizontal overflow; the full later transcript scrolls inside its lower-right stage without escaping the hero. The browser console has no warnings or errors. Evidence and the same-input source/implementation comparison are saved in `artifacts/home-hero-sierra-layout-20260830/`; the final QA result is `passed`. All 69 tests, targeted ESLint, `git diff --check` and the production build pass. No route, CTA, navigation item, shared process-section layout, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — Inventory-aware Agent panel moves below the homepage FAQ

Fidelity-plus-Design homepage refinement requested for `Built to Understand Your Inventory`. The complete panel now follows the homepage FAQ and precedes the footer, superseding its earlier placement before `Who we serve`. Its heading now uses the shared homepage section-heading scale and tracking, while the existing description size, copy, industrial photograph, badge and action remain unchanged.

The panel expands to the standard 1320px content-frame maximum so it has more room on both sides without changing the internal copy frame or introducing horizontal overflow. At a 1440px viewport the standard 5% page inset produces a 1296px panel; on mobile it remains contained within the established page gutters.

Browser-inspected at 1440×900 and 390×844. The FAQ precedes the panel in both DOM and visual order, the heading wraps cleanly to two lines, the description retains its existing 15–16px responsive size and both viewports have zero horizontal overflow. All 69 tests pass. No copy, image, CTA, route, configuration, service restart, reference-project, deployment or file-deletion change was made.

## 2026-08-30 — Connected product cards use icon-only destinations

Fidelity-plus-Design refinement scoped to the two `One connected workflow` cards. Replaced the repeated visible AI Sales Agent and AI Webstore Suite action labels with restrained circular arrow icons at the bottom-right. Each card retains one native link, its extended card hit area, visible focus treatment and a descriptive accessible label. Destinations remain `/ai-sales-agent` and `/ai-webstore-suite`.

Browser-inspected at 1440×900 and 390×844. Desktop icons retain the existing responsive card scaling and sit at the visual lower-right inset; mobile icons are 52px touch targets with 24px right and bottom insets. Both destinations were followed successfully and both viewports have zero horizontal overflow. The card change adds no browser error; visiting the existing Webstore destination still emits its pre-existing Remotion licence notice. All 69 tests pass. No card copy, graphic, connector, destination, section layout, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — Homepage hero conversation aligned to the header rail

Fidelity correction scoped to the homepage hero conversation's desktop horizontal anchor. The conversation now remains inside the shared 1280px header rail, so its outer right edge aligns with the Book a Demo utility edge instead of extending towards the viewport edge. The lower-right composition, 470px conversation frame, glass bubbles, speaker sides, message sequence and animation remain unchanged.

Browser-measured at 1553×1091 and 1440×900: the conversation and Book a Demo now share the exact same right coordinate at both widths. At 1024×768 the compact header and conversation likewise end at the same coordinate; the 390×844 mobile layout remains contained with zero horizontal overflow. All 69 tests, targeted ESLint, `git diff --check` and the production build pass.

## 2026-08-30 — Homepage hero buyer uses an Asian industrial portrait

Fidelity refinement scoped only to the buyer identity in the homepage hero conversation. Replaced the former buyer photograph with a new realistic Asian male industrial-buyer portrait in a navy work shirt and softly blurred warehouse setting. Emma's portrait, avatar size and crop, buyer-right / Agent-left speaker alignment, glass bubbles, message sequence, animation, hero composition and header alignment remain unchanged.

Browser-inspected at 1440×900 and 390×844. The 512px portrait loads successfully, remains centred and recognisable inside the existing 24px circular avatar, and both viewports retain zero horizontal overflow. All 69 tests, targeted ESLint, `git diff --check` and the production build pass.

## 2026-08-30 — Inventory Agent card uses a shorter connected-data promise

Copy refinement scoped to the homepage inventory Agent card. The heading is now `An AI Agent That Understands Your Inventory`. Its 16-word description reads: `With connected inventory data, it understands your industry and guides buyers using current, approved product information.` This preserves the user's live-information intent while avoiding an unsupported real-time availability promise. The image, CTA, badge, panel layout and typography remain unchanged.

Browser-inspected at 1440×900 and 390×844. The shorter copy remains readable over the established photograph, the description is 16 words at both widths and neither viewport has horizontal overflow. All 69 tests, targeted ESLint, `git diff --check` and the production build pass.

## 2026-08-30 — AI Sales Agent hero gains consistent header breathing room

Fidelity correction scoped only to the top inset of the AI Sales Agent hero. The hero background still extends behind the transparent header, and the header still restores its glass surface after scrolling. The tall Agent phone now begins 64px below the desktop header instead of 15px, matching the visual breathing room used by the other public product heroes; the gap scales to 56px on compact layouts and 48px on mobile.

The title, description, actions, phone graphic, animation, content width, column layout and responsive stacking remain unchanged.

Browser-inspected at 1440×900, 1024×768 and 390×844. The top-state header remains transparent, the scrolled header restores its canvas-and-glass surface, and all three viewports retain zero horizontal overflow. All 69 tests, `git diff --check` and the production build pass.
