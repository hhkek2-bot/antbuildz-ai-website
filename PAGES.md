# Antbuildz.AI Page Register

This register preserves route intent and design status between sessions. Read it before page work and update it when a route, primary CTA, source relationship or QA status materially changes.

## 2026-09-04 — AI Roles overview and five role pages

### Follow-up — Industry-matched section descriptions

The centred descriptions below AI role section headings now use `#66758B`,
matching the computed description colour on the Who We Serve industry pages.
This shared rule covers the AI Roles overview and all five role pages. Hero
banner descriptions remain white directly over their photographs.

### Follow-up — White hero descriptions without containers

Fidelity correction across the AI Roles overview and all five role pages. The
temporary translucent description box is removed, and hero descriptions return
to white text directly over the photograph. A restrained dark text shadow keeps
the copy readable without adding a visible container.
Browser-inspected across the overview and all five role pages at 1440px and
390px. The white text, transparent background and zero padding render
consistently, and every checked route retains zero horizontal overflow.
Typography, wording, title colour and image treatment remain unchanged.

### Follow-up — Inventory-led product recommendations

Copy refinement across the five AI role pages removes `qualified handover` and
other sales-style handover language. Sales Specialist and Product Specialist
now lead with matching buyer requirements to suitable products using approved
catalogue knowledge and connected inventory data. Inventory wording remains
conditional because current stock and rental availability depend on the
customer's configured data connection. Customer Support, Technical Support and
After-Sales Service use plain team follow-up wording only where a person must
confirm an exception, safety issue, price, delivery, warranty or compatibility.
Browser QA across all five role pages at 1440px and 390px confirms complete
hero copy, two-line desktop descriptions, two-line titles and no horizontal
overflow. Scoped ESLint and diff whitespace checks pass.

### Follow-up — Conversation-led AI role photography

System-mode image update across the overview and five role pages. Following
review, the final set deliberately mixes three conversation-led heroes with
three role-specific industrial heroes. The overview, Sales Specialist and
Customer Support retain the new online-enquiry scenes. Product Specialist,
Technical Support and After-Sales Service use the preserved product,
documentation, parts and service photographs because those actions clarify the
roles. The mix presents Antbuildz as an AI Agent platform while retaining
credible industrial context and Asian representation.

Six versioned `*-conversations-v2.png` assets remain stored in
`public/images/ai-roles/`; three are selected in the final page mapping and all
previous images remain preserved. The shared old-film grain, soft-focus
treatment and lower canvas fade remain in place.
Exact prompts are recorded in
`artifacts/ai-role-images-20260905/conversation-workspace-prompts.md`.

### Follow-up — Incoming conversations and shareable AI Terminal

Copy refinement follows the user's current product clarification: the Agent
handles incoming conversations, and the dedicated AI Terminal is a shareable
conversation page anyone with the link can use. The overview and five role
pages now explain website, advertising and campaign entry points in their
When and How sections, with role-specific examples. Customer Support no longer
promotes connected order actions. Preparation copy keeps quotations, order
changes, approvals and service arrangements with the business team. The
overview's contextual product link now opens AI Sales Agent; hero CTAs remain
unchanged. Overview hero copy and metadata reflect the same positioning.

QA: targeted ESLint and diff whitespace checks passed. All six routes rendered
at 1440px and 390px without horizontal overflow; overview and Sales Specialist
section screenshots were visually inspected in `artifacts/role-banner-qa/`.

### Follow-up — Complete two-line desktop hero copy

System-mode refinement: all five detail banners keep `AI Agent for` on the
first title line and the complete role name on the second. The shared copy
container now spans the image's inner width; descriptions use a balanced
96ch maximum measure without line clamping, clipping or ellipses. All original
wording remains visible. Browser measurements confirm two title and description
lines for all five roles at 1024px, 1440px and 1920px. At narrow tablet and phone
widths descriptions wrap naturally to preserve readable text and complete copy;
titles remain two lines. Checked all five at 390px with no horizontal overflow,
and inspected representative desktop/mobile screenshots in
`artifacts/role-banner-qa/`. Existing colours and hero actions are preserved.

### Follow-up — Readable resource URLs

The 44 formerly run-together Resource article paths now use concise, lowercase,
hyphen-separated canonical URLs, such as
`/resources/what-is-an-ai-sales-agent`. Each former address permanently
redirects directly to its matching canonical page, while the sitemap and
copied-app navigation point to the new URL. This preserves existing links and
avoids redirect chains.

### Follow-up — Balanced role-card grids

System-mode layout update for the shared role cards. The `Explore the other
roles` section now uses a balanced 2 × 2 grid on every role-detail page,
instead of a three-card row followed by one orphaned card. The five-role
overview uses one row at wide desktop, two complete pairs and a full-width final
card at compact desktop, and a single column on mobile.

The card content, destinations, numbering, focus states and responsive touch
targets are unchanged. Shared rendering covers the overview and all five detail
pages.

### Follow-up — Hero CTA simplification for AI role pages

The hero image overlay on the AI Roles overview and detail pages now uses one
`Learn More` action instead of the previous two-button set. This call-to-action
links directly to `/ai-sales-agent` on the overview and all five detail pages,
following the latest user correction. Final section CTAs remain unchanged.

### Follow-up — Inclusive hero photography and lower image fade

System-mode visual update for the role-detail hero treatment. Sales and Product
Guidance already include Asian industrial professionals; Technical Support and
After-Sales Service now use role-specific workshop photography with Asian
technicians. The original image files remain preserved and the new versioned
assets are `technical-support-asian-v2.jpg` and
`after-sales-service-asian-v2.jpg` in `public/images/ai-roles/`.

Every role hero now uses the same lower canvas fade, so its photography recedes
into the page from below while the role actions remain legible. Desktop and
mobile visual checks cover the new Technical Support and After-Sales Service
scenes. Local-only; nothing deployed.

### Follow-up — Standard role titles and What / When / How flow

System-mode update across the AI Roles overview and all five detail pages.
Detail-page H1s and metadata now use the consistent `AI Agent for [role]`
format: Sales, Product Guidance, Customer Support, Technical Support and
After-Sales Service. Navigation, role-card and breadcrumb labels retain their
established human-readable role names.

The overview now helps visitors understand what one Agent can do, when to
deploy it across their customer channels and how to configure it. Every detail
page follows the same `What` (capabilities), `When` (role-specific deployment
uses) and `How` (knowledge, rules, testing, publishing and review) order,
before its preparation checklist. Existing role photos, actions, navigation,
footer, canonical routes and human handover boundaries remain in place.

Desktop inspection covered the Technical Support detail page and overview;
mobile verification at 390px confirms the Technical Support title and full
section order with zero horizontal overflow. The role-copy regression suite,
targeted ESLint and diff checks pass. Local-only; nothing deployed.

### Follow-up — Simplified public header

Following the header crowding audit, desktop navigation now reads Products,
AI Roles, Industries, Resources, Pricing. Products contains AI Sales Agent,
AI Webstore Suite and AI Agent Console with descriptive links. Existing
Industries, Resources and AI Roles panels retain their grouped design; the new
Products panel reuses it. Sign in and Book a Demo remain separate utilities.
Mobile direct links and all footer destinations are preserved.

System mode implementation is shared by the copied public runtime and source
role/legal pages. Original router-owned product links stay mounted but hidden;
DOM ordering is idempotent and matches keyboard ordering. Products and AI Roles
show selected-route and open-menu indicators. No configuration, pricing, route
or page-content changes.

Browser checks: 1440px and 1024px public headers, 390px source mobile header and
menu; Products panel in both source and copied shells; all three product links,
selected-route markers, Enter/Escape, focus return and exclusive menu opening.
Resources styling preserved. All 106 tests, targeted ESLint, production build
and diff checks pass. Local-only, no deployment.

### Follow-up — Industrial role photography

Reviewed all five role photographs. Replaced four consumer-retail scenes with
generated industrial editorial images: pallet-stacker sales, industrial valve
selection, a tool distributor's trade counter, and hydraulic-cylinder/seal
inspection in an equipment service workshop. Retained the relevant Technical
Support pump photograph and the overview's industrial showroom photograph.

Built-in image generation and design-fidelity review were used. Four new
`*-industrial.jpg` assets are stored in `public/images/ai-roles/`, with matching
descriptive alt text in `lib/ai-role-images.ts`. Original assets are preserved.
Exact prompts: `artifacts/ai-role-images-20260904/industrial-prompts.md`.
No conversation overlays, layout, background, copy or CTA changes.

All four new heroes visually checked at 1440px and 390px, plus Product
Specialist at 1024px. All 105 tests pass, including referenced asset existence
and industrial-image descriptions. Local-only; no deployment.

### Follow-up — Deployment-first role copy

The user prioritised explaining how businesses deploy each role. Hero copy now
introduces setup and placement. The existing four-step section is first after
the photograph and explains adding knowledge, setting rules, Playground tests,
and publishing/reviewing. Each detail has its own source examples, test cases,
handover boundaries and website/link placements. Knowledge checklists are now
labelled “What to prepare for this role”. The overview explains embedding,
shareable links and plan/setup-dependent catalogue connections.

Copywriting and copy-editing guided the practical customer actions. Fidelity
mode preserves white surfaces, photographs, typography, layout components,
shared navigation/footer and primary CTA destinations. No actual Agent was
deployed and no automatic external integration or launch-time promise added.
Copy rationale and alternatives: `artifacts/ai-roles-deployment-copy-20260904.md`.

Verified all six rendered mobile routes have one H1 and no horizontal overflow.
Visual checks: overview at 1440px, After-Sales at 2016px and 390px, Technical
Support at 1024px. The new workflow Console link opens `/ai-agent-console`.
All 105 tests, targeted ESLint, production build and diff checks pass.

### Follow-up — White page backgrounds

Applied the existing clean white surface to the shared page, every narrative
section and the closing CTA panel across the overview and five role pages.
Removed the CTA panel's decorative gradient. Photos, photo overlays, buttons,
shared header/footer, content and spacing are unchanged. This is scoped to AI
Roles, not a global design-system change.

Desktop overview (1440px), mobile detail (390px) and tablet detail (1024px)
visually checked; white section backgrounds confirmed with no horizontal
overflow. All 105 tests and diff checks pass. Local-only; nothing deployed.

### Follow-up — Global-English SEO and focused role copy

Used seo-audit and copywriting, with a copy-editing pass and design-fidelity
checks. The six pages now have clear AI-focused titles, unique descriptions,
descriptive H1s with explicit word separation, specific role introductions and
five distinct workflows. Contextual links include AI Agent setup FAQs. Route
WebPage schema matches the descriptive metadata and identifies English content.
The existing photos, navigation, footer, CTA destinations, CSS and section
structure are unchanged; no conversation overlay was restored.

Global scope currently means English content without artificial country pages
or unsupported translated alternates. No hreflang, locale routes, pricing,
ratings, offers, configuration or production deployment were added. The footer
language preference is not treated as a separate crawlable translation.

Verified all six local routes return 200 with server-rendered H1s, correct
canonical URLs and index/follow; all eight aliases redirect directly with 308;
an unknown role returns 404. Robots and the XML sitemap are consistent. Rendered
JSON-LD checked in the browser. Visual QA: all six pages at 1440px and 390px,
plus 1024px workflow checks; no overflow. The setup FAQ link was exercised.
All 105 tests, targeted ESLint, production build and diff checks pass.

Audit, exact revised copy, alternatives, keyword hypotheses, source links and
post-launch priorities: `artifacts/ai-roles-seo-20260904.md`. Live indexing,
Search Console query data, backlinks and production Core Web Vitals have not
been verified; this is not a ranking guarantee.

### Follow-up — Five distinct photos, no conversation overlays

The latest imagery request supersedes the photo-and-conversation treatment
described below. All five detail pages now use distinct generated editorial
photographs: furniture sales, appliance guidance, a customer service counter,
industrial pump inspection and coffee-machine after-sales service. Assets are
local JPEGs in `public/images/ai-roles/`; prompts and provenance are recorded in
`artifacts/ai-role-images-20260904/prompts.md`.

Removed the complete conversation overlay, avatar, example badge and supporting
conversation caption from the shared hero. The overview retains its showroom
photo without the overlay. Existing headings, CTA destinations, content sections,
navigation dropdowns and footer are unchanged. Desktop crops prioritise faces;
mobile retains visible products and stacked 54px actions.

Visual checks covered all five photos at 1440px and 390px, plus a 1024px tablet
check. No horizontal overflow or remaining hero chat elements. All 103 tests,
targeted ESLint and production build pass. Local-only; nothing deployed.

### Follow-up — Who We Serve design fidelity

Overview photo update: `/ai-roles` now uses the existing product-showroom
photograph (`solution-dealers.jpg`) instead of the Emma consultation portrait.
The five detail-page photos, conversation overlay, layout and actions remain
unchanged. Desktop (1440px) and mobile (390px) image loading/crop checks passed
with no overflow; all 103 tests pass.

The overview and five role pages now follow the Who We Serve editorial
composition: centred two-line headings, the reference heading scale and
96/80/64px rhythm, a wide rounded photograph with a right-aligned conversation,
and open, divider-led feature and audience sections. The existing approved Emma
consultation photograph is reused; each detail retains its own four-message
example, capabilities, knowledge sources and business contexts. The overview
uses Sales Specialist as its representative example. Examples are static,
labelled as examples, and do not imply a live chat.

The four-step workflow, knowledge section and closing CTA retain existing
destinations and commercial boundaries. Mobile reflows the complete chat and
actions without clipping; no fixed-height crop hides the messages. Existing
header dropdowns, footer, route metadata, pricing and legal content are unchanged.

Browser inspection covered the overview and representative detail layouts at
1440px, 1024px and 390px. All five details were checked at desktop and mobile
widths for one H1 and zero horizontal overflow. Role-card navigation and the
Build Your AI Agent action were exercised. 103 tests, targeted ESLint,
production build and diff checks pass. Local-only; nothing deployed.

Fidelity correction: source-rendered AI Roles and legal pages now mount the
same Industries and Resources dropdown factories used by the main site,
replacing the separate small Industries menu and plain Resources link.
AI Roles uses the same introduction, grouped labelled links, descriptions,
canvas glass, spacing and menu interactions. No page body or footer changed.
Desktop comparison confirms identical Resources panel metrics: 1120px width,
88px top, 28px padding, 24px corners and Inter 14px/600 link titles.
Browser checks at 1440px, 1024px and 390px verified menu switching, Escape,
role navigation, 44px mobile targets and zero horizontal overflow.

Design mode with the Who We Serve editorial hero, shared typography, public
content rail, pill actions and main-site footer. `/ai-roles` introduces one
AI Agent performing multiple jobs, not five products or subscriptions. Five
source-rendered pages share one template and distinct capabilities, illustrative
conversations, data sources and suitable business examples:

- `/ai-roles/sales-specialist`
- `/ai-roles/product-specialist`
- `/ai-roles/customer-support`
- `/ai-roles/technical-support`
- `/ai-roles/after-sales-service`

Primary action: `Build Your AI Agent` → existing `/signup`; secondary action:
`Book a Demo`. No new signup, billing or integration behaviour is implied.
Consumer-product and industrial examples coexist; safety-critical, warranty
and commercial decisions retain human review.

`AI Roles` is a primary desktop disclosure with the overview and five roles.
Both mobile navigation implementations expose every role. The footer on
marketing, legal and role pages uses the same ordered names and destinations.
Resources retains only its educational collections; the old role collection is
hidden without removing React-owned files/nodes. AI Roles remains available
through its dedicated page and the global AI Roles navigation.
The Resources-only closing conversion panel is also hidden, so the library
ends with its educational content and shared footer.
All five old role articles and three legacy role aliases permanently redirect
directly to the new destinations. The old Resources hash enters the new hub.
Metadata, canonical URLs, breadcrumbs, sitemap and llms.txt reflect the new
structure. Unknown role slugs return 404.

Browser QA covers all six pages at 1440×900 and 390×844, plus compact layout
and navigation checks at 1024×768. Checked layouts have no horizontal overflow;
desktop/mobile role navigation, Escape/focus return, footer links and the
signup entry action work. The eight legacy URLs return 308 redirects; all six
new pages return 200 and one H1. 101 regression tests, targeted ESLint and the
production build pass. Local-only implementation; nothing deployed.

## 2026-09-04 — Dedicated AI legal framework

### Follow-up — Lean legal document directory

Design-mode update for `/agreements`. The hub now has a concise legal-document
introduction followed by one balanced four-document directory: a two-by-two
grid on desktop and compact screens, and a single-column list on mobile. Each
document has a short functional label, its full title, a plain-language summary
and a descriptive destination link. A single support contact sits below the
directory.

Terms of Service, Privacy Policy, Data Processing Addendum and Acceptable Use
Policy keep their existing routes and wording. The shared header, footer,
metadata and legal article templates are unchanged. Desktop review at 1440px,
compact review at 1024px and mobile review at 390px found no horizontal
overflow; all four document destinations remain present. The regression suite
and production build pass. Local-only; nothing deployed.

### Follow-up — Terms & Policy footer entry

The Company-column directory link is now `Terms & Policy` on both transferred
marketing pages and source-rendered legal pages. It opens `/agreements` through
a document navigation, bypassing the transferred SPA's outdated directory.
The destination lists Terms of Service, Privacy Policy, Data Processing
Addendum and Acceptable Use Policy. The redundant bottom-footer legal stripe is
removed, leaving this single clear route to the directory. No document wording
changes.
Desktop and mobile clicks from the marketing/legal footers open the correct
four-document directory, with no horizontal overflow. All 99 tests and
targeted ESLint pass.

### Follow-up — Plain DPA article and main-site footer fidelity

Fidelity-mode correction: all three DPA schedules now use the same plain
article sections as the body, without card borders, surfaces or inset padding.
The legal wording, section IDs and contents navigation are unchanged.

The hub and all four documents now render the main public footer's structure,
wordmark, four link columns, social icons, copyright, language preference
control and compact legal links. The former legal-only footer styles are
removed. `app/public-footer.css` preserves the transferred footer's source
rules and breakpoints; the production bundle remains untouched. The native
language dialog shares the main selector's preference key/event, supports
Escape and focus return, and does not mislabel English legal text as translated.

Browser comparisons at 1440×900, 1024×768 and 390×844 confirm matching footer
content, column/link geometry and main-area heights, with no horizontal
overflow. All four footer document links were exercised on mobile. The hub
and four documents return 200 with one H1 and the same footer; all three
schedules retain plain article styling. 99 regression tests, targeted ESLint
and the production build pass.

Audit-to-System update following the approved legal brief. Existing Terms,
Privacy and DPA routes are amended in place; `/agreements/acceptable-use` is
new. The four documents use Antbuildz Pte. Ltd., UEN 202007699D and
help@antbuildz.ai. Cookies are integrated into Privacy, with permanent redirects
from former cookie routes. The footer uses four compact inline legal links,
not a new column. Signup and the subscription prototype display linked
acknowledgements; the prototype is explicitly identified as non-live checkout.

The new brief supersedes earlier six-month credit-expiry copy: purchased credits
now have no expiry in public pricing and legal wording. No real ledger,
payment authorisation, trial conversion, acceptance-record system or production
data-access controls were implemented or represented as verified.

98 regression tests, targeted ESLint and the production build pass. HTTP checks
confirm the hub/four documents and twelve local redirects. Browser review at
1440×900, 1024×768 and 390×844 found no overflow in checked layouts; signup
acknowledgement, legal navigation and compact mobile footer were reviewed.
See `LEGAL-IMPLEMENTATION-REVIEW.md` for the nineteen-point verification matrix,
changed files, sources, unresolved launch gates and required legal review.

## Status language

- **Reference matched** — transferred from an approved 8080 reference and previously compared.
- **Project original** — designed specifically for Antbuildz.AI rather than copied from 8080.
- **Review required** — route exists, but a new visual/responsive audit is needed after recent or future changes.
- **Planned** — required route is not yet complete.

## Core pages

| Route | Primary visitor job | Preferred primary CTA | Design source | Current status |
| --- | --- | --- | --- | --- |
| `/` | Understand industrial product selection and explore the Agent or Webstore | Book a Demo | Protected industrial hero and Emma component, with source-owned educational body | Hero uses the approved static mountain-logistics photograph. The Agent conversations are visible on the first frame and no longer depend on page scrolling. Initial HTML still lacks visible content/links; server-rendering migration and production performance/indexing checks remain open. Details and evidence below |
| `/ai-webstore-suite` | Understand the Webstore product and industrial catalogue workflows | Book a Demo | Selected Webstore listing workflow formerly reviewed at `/webstore-2-ai-webstore-preview` | Canonical product page uses the approved dusty-ochre listing workflow, mixed-category catalogue enrichment, product-page handoff and Emma recommendation experience. At 767px and below, the complete hero ends exactly at the phone viewport boundary throughout all three animated stages. The final conversation stage now uses a larger, deliberately cropped phone with a lower fade on mobile and desktop. Canonical metadata remains indexable at `https://antbuildz.ai/ai-webstore-suite`; the former preview URL redirects here |
| `/ai-sales-agent` | Understand standalone AI-guided qualification and handover | Book a Demo | `/aiagent` on 8080 | Desktop retains the reference split composition. Its repeated actions now use the shared destination-owned CTA contract: Book a Demo is primary and View Pricing is secondary. At 767px and below, the hero fits exactly one small viewport, places the animated phone before both actions and keeps the persistent Agent launcher clear of the secondary action. Responsive QA details are recorded below |
| `/ai-agent-console` | Understand how teams control knowledge, instructions and conversations | Book a Demo | `/app` on 8080 | Reference matched; operational typography unchanged against baseline |
| `/pricing` | Compare approved product plans and choose a next step | Start 14-Day Free Trial or Talk to Sales | Transferred content; Gorgias-inspired wider plan layout | Standard plans present one cumulative Agent → Sales → Rental+ path, with one side-by-side comparison table. Current approved prices, allowances, billing mechanics, Custom panel and commercial terms are recorded below |
| `/resources` | Discover practical industrial AI education | Explore a Guide | `/resources` on 8080 | Transferred composition retained; shared typography passed 1440px/390px QA; grouped header dropdown, all topic destinations and mobile access verified |
| `/ai-roles` | Choose a role for your AI Agent | Build Your AI Agent | Source-owned Who We Serve-style overview | Overview plus five detail pages; canonical replacement for the former Resources role collection. Desktop/mobile navigation and redirects verified |
| `/help/ai` | Resolve Antbuildz AI product and setup questions | Browse AI FAQs | Transferred AI Help Centre | AI-only FAQ library; Marketplace-specific questions are excluded. `/help` and `/faqs` redirect here; Marketplace help routes leave this website for antbuildz.com |
| `/about` | Understand the industrial history and reason Antbuildz AI exists | Book a Demo | `/about` on 8080 | Transferred composition retained; shared typography passed 1440px/390px QA |
| `/book-a-demo` | Share contact details, then choose a demo time | Continue to Calendly | Existing transferred demo-request form | Uses the lean shared account-entry form system with decorative eyebrows removed and consistent field, label and action typography. Responsive QA is recorded below. No separate lead storage or booking confirmation implemented |
| `/agreements` | Find the terms and privacy documents governing Antbuildz AI | View Terms | Project-original Antbuildz AI legal suite | Source-rendered AI-only hub linking Terms of Service, Privacy Policy, Data Processing Addendum and Acceptable Use Policy. Cookies are incorporated into Privacy and the old Cookie URL redirects there. Antbuildz Pte. Ltd., UEN 202007699D; contact help@antbuildz.ai. Operational/legal launch checks remain open in LEGAL-IMPLEMENTATION-REVIEW.md |

## 2026-09-03 — Webstore hero follows the established title gap

Audit-to-Fidelity spacing correction for the `/ai-webstore-suite` hero. At
1440px wide, its H1 previously began about 41px below the 76px fixed header,
while Pricing, Resources and About consistently use a 96px gap. The desktop
Webstore H1 now derives the same 96px wide-screen and 80px compact-desktop gap
from `--public-hero-title-gap`; the eyebrow remains immediately above it. The
existing one-viewport hero redistributes the remaining height to its storyboard
rather than extending the page. Mobile retains its already comfortable
component-owned spacing.

Rendered QA at 1440×900, 1024×768 and 390×844 confirms respective desktop H1
gaps of about 96px and 80px, the unchanged mobile gap, a complete one-viewport
hero and zero horizontal overflow. The listing and conversation storyboard
states remain visible. All 96 regression tests, targeted ESLint, the production
build and `git diff --check` pass.

## 2026-09-05 — AI Roles overview uses a grainy film image

Design-mode image update scoped to the `/ai-roles` overview hero. Replaced the
reused Dealers & Distributors showroom photograph with a new generated 35mm
documentary-style industrial scene: two Asian industrial specialists reviewing
product information on a tablet among pumps and parts. Visible fine grain,
muted colour, soft halation and candid available light distinguish AI Roles
from the polished Who We Serve photography. The five role-detail photographs,
hero layout, copy, actions and Who We Serve assets are unchanged.

The versioned PNG is
`public/images/ai-roles/ai-roles-overview-film-v1.png`; the exact prompt is in
`artifacts/ai-roles-film-hero-20260905/prompt.md`. Browser checks at 1280×720
and 390×844 confirm the new asset loads, the white overlay copy remains
readable, the mobile crop retains the people and tablet, and there is no
horizontal overflow.

## 2026-09-05 — Pricing plans share the title centreline

Fidelity-mode layout correction scoped to `/pricing`. The original wider
three-plan rail is preserved but now centres independently of the narrower
transferred container. Its outer left and right gutters are equal and its
centreline matches the hero title and Monthly/Annual control. Rendered checks
at 3600px and 1440px confirm equal desktop gutters; 390px retains equal 16px
gutters, one-column stacking and zero horizontal overflow. Annual switching
continues to display `US$39`, `US$119` and `US$239`. Pricing, copy, card
content, CTA destinations and other routes are unchanged.

## 2026-09-04 — Pricing trial actions

Design-mode CTA refinement using the existing pill buttons and featured Sales
treatment. Agent, Sales and Rental+ now say `Start 14-Day Free Trial`, with
`Credit card required` beneath each action and linked accessible descriptions.
Custom remains `Talk to Sales`. Standard-plan actions open the existing `/signup`
page with the selected plan and `trial=14-day` in the URL. This is a marketing
entry-point change only: signup consumption of these parameters, credit-card
collection and trial billing enforcement are not implemented by this change.

Rendered checks at 1440×900, 1024×768 and 390×844 confirm readable labels,
54px actions, aligned notes and no horizontal overflow. All three trial links
were exercised and reached signup with the correct plan. Prices, allowances,
features, legal documents and backend billing are unchanged.

### Follow-up: hero graphic sits closer to its description

The `/ai-webstore-suite` storyboard now moves progressively closer to the hero
description on taller desktop screens, where its 608px maximum height formerly
left an oversized centred gap. The adjustment reaches 34px on the tallest
checked viewport, keeps the graphic at its authored size and leaves short
laptops, compact desktop and mobile unchanged.

Rendered QA at 2560×1148, 1920×1080, 1440×900, 1024×768 and 390×844 confirms
description-to-graphic gaps of approximately 72px, 50px, 26px, 23px and 18px,
respectively. The approved H1/header spacing, one-viewport hero boundary and
zero horizontal overflow remain intact, and all three storyboard tabs still
activate normally. All 96 regression tests, targeted ESLint, the production
build and `git diff --check` pass.

### Follow-up: final-stage summary uses one centred copy group

The final `/ai-webstore-suite` conversation stage no longer shows the
`Catalogue connected` eyebrow. Its headline, supporting sentence, three proof
points and directional arrow now form one vertically centred group beside the
phone. The compact mobile composition continues to prioritise the phone and
hides this supplementary desktop copy.

Rendered QA at 2560×1148, 1440×900 and 390×844 confirms exact vertical
centering at both desktop sizes, no remaining eyebrow text, the unchanged
one-viewport mobile frame and zero horizontal overflow. All 97 regression
tests, targeted ESLint, the production build and `git diff --check` pass.

### Follow-up: resources use long-form blog articles — 2026-09-05

The short repeated training-template body has been replaced across all 44
resource articles with locally stored long-form editorial content derived from
the corresponding Antbuildz marketplace resources. Explanatory articles now
use connected paragraphs, descriptive subheadings, examples, comparisons and
FAQs. Dense fragment lists are converted into prose and ordinary educational
articles keep no more than two useful lists; procedural AI Agent Console guides
retain step and feature lists where scanning is clearer.

The generated library contains about 92,700 words. Each article opens with a
concise direct answer for search and answer engines, while Article structured
data now includes the full article body, word count, topic section, keywords and
explicit AI Sales Agent/Webstore entities. Unsupported performance statistics
were removed. Agent-first corrections are applied in both visible and
machine-readable content: the AI Sales Agent remains the core product, Webstore
is an optional product and inventory layer, and Marketplace is an optional
discovery channel.

Browser QA on the representative Webstore-support article confirmed 2,800+
words, 26 explanatory headings, zero bullet lists, the readable canonical URL,
no stale product-positioning phrases, no persistent route loader and zero
horizontal overflow at desktop and 390×844. All 110 regression tests, targeted
ESLint, Python compilation, the production build and `git diff --check` pass.

### Follow-up: footer opens the AI FAQ library directly

The shared footer's `AI Help Centre` and `AI FAQs` links now bypass the
transferred React Router's obsolete `/help` directory state and perform a clean
navigation to `/help/ai`. Visitors land immediately on the final FAQ library,
where the AI Sales Agent and AI Webstore Suite tabs are available. The former
`/help` and `/faqs` URLs continue to redirect to the same canonical library.
Live footer navigation from `/pricing` reached `/help/ai` without rendering the
directory card. Both product tabs remain operable. Rendered QA at 1280×720 and
390×844 confirms one H1, two tabs and zero horizontal overflow. All 96
regression tests, targeted ESLint, the production build and `git diff --check`
pass.

## 2026-09-02 — Complete Antbuildz AI legal suite

Design-mode legal-document implementation for Antbuildz.ai. `/agreements` is now
a source-rendered, AI-only legal hub containing exactly four core documents:
Terms of Service, Privacy Policy, Data Processing Addendum and Cookie Policy.
The documents are available at `/agreements/terms`, `/agreements/privacy`,
`/agreements/dpa` and `/agreements/cookies`; the former `/legal/*` paths
permanently redirect to their canonical counterparts.

The suite consistently identifies Antbuildz Pte. Ltd., Singapore, as the service
provider and keeps the Antbuildz.ai B2B SaaS service legally separate from the
antbuildz.com Marketplace. The signup acceptance links now lead to the canonical
Terms and Privacy documents, while the shared Company footer column links once
to the `/agreements` master page. Legal pages use one H1, unique metadata and canonical URLs,
a narrow reading column, a sticky desktop contents list and a native collapsible
mobile contents list.

Rendered QA at 1440×900 and 390×844 confirms readable hierarchy, working mobile
navigation, correct desktop/mobile contents behaviour and zero horizontal
overflow. HTTP checks confirm five canonical 200 responses, unknown-document
404 handling and four permanent legacy redirects. All 96 regression tests,
targeted ESLint, the production build and `git diff --check` pass. Publication
still requires founder confirmation of company registration/contact details,
the appointed DPO contact, commercial terms, subprocessor and international
transfer information, actual cookie/provider inventory, model-training policy,
and supportable security and retention statements, followed by Singapore legal
counsel review.

### Follow-up: legal access stays in the Company footer column

The separately added Legal footer column is removed from every public page.
`AI Agreements & Policies` remains the single Company-column link and opens the
`/agreements` master page, where the four individual documents are listed. The
source-rendered legal pages now mirror the shared top-level header order and the
same five footer categories: brand, AI Products, Who We Serve, AI Agent Roles
and Company. Individual document links are not repeated in the footer.

Rendered QA at 1440×900 and 390×844 confirms zero separate Legal columns,
exactly one `/agreements` link under Company, matching top-level header order
and footer categories, functioning Industries and mobile menus, the corrected
`antbuildz.ai` wordmark and no horizontal overflow. All 96 regression tests,
targeted ESLint, the production build and `git diff --check` pass.

Fidelity follow-up restores the legal footer's link density to the earlier
shared footer rhythm. Desktop link rows are 32px apart rather than 41px, while
mobile retains 44px touch targets. Rendered checks at 1280×720 and 390×844
confirm the tighter hierarchy and zero horizontal overflow.

The shared and source-rendered legal footers no longer display the `Sales
enquiries` label or `help@antbuildz.ai` address. Purposeful email actions in
the product and Pricing conversion sections remain unchanged.

System-mode logo correction aligns the source-rendered agreement header and
footer wordmarks with the shared public-header geometry. The legal shell had
aligned its separately rendered yellow `.ai` suffix to the text baseline, which
placed it visibly lower than the cropped Antbuildz mark. Both parts now share a
fixed-height, vertically centred, non-wrapping wordmark; the suffix cannot shrink
away from the brand. The responsive wordmark scale now also matches the public
header at desktop, tablet, mobile and narrow-mobile widths.

Rendered checks on `/agreements/dpa` at 1280×720, 1024×768 and 390×844 confirm
aligned header and footer suffixes and zero horizontal overflow. All 97
regression tests, targeted ESLint, the production build and `git diff --check`
pass.

## 2026-09-02 — Pricing comparison uses one title

### Follow-up: approved plan content and allowances updated

Fidelity-mode content update scoped to `/pricing`; the existing card structure,
layout, typography, colours, spacing, responsive behaviour, navigation and
footer are unchanged. Agent remains `US$49/month` with 50 AI conversations;
Sales is now `US$149/month` with 75 AI conversations and 100 active Sales
listings; Rental+ is now `US$299/month` with 100 AI conversations and one
combined allowance of 300 active Sales + Rental listings. The unchanged annual
selector derives `US$39`, `US$119` and `US$239` monthly equivalents from its
existing 20% saving rule.

The cards now use the supplied product names, descriptions, feature wording and
actions: `Start with AI`, `Build My AI Sales Store`,
`Build My Rental & Sales Store` and `Talk to Sales`. `Free Custom Domain Setup`
is used consistently without implying that Antbuildz pays the customer's domain
registration fee. Agent includes AI Product Recommendations but makes no claim
about Webstore URLs or inventory. The comparison and allowance FAQ use the same
approved terminology and limits. This supplied specification restores the
product-name line on Agent, Sales and Rental+, superseding the earlier request
below that removed those three subtitles.

Rendered QA at 1280×720 and 390×844 confirms all supplied product names,
monthly prices, allowances, actions and complete feature lists are visible with
zero horizontal overflow. The Annual state displays `US$39`, `US$119` and
`US$239` per month with exact annual totals of `US$468`, `US$1,428` and
`US$2,868`, then returns cleanly to Monthly. All 96 regression tests pass.

Fidelity follow-up aligns the comparison rails within each pricing-card row
without changing any approved pricing content or card styling. Product copy,
prices, allowances, action buttons and feature introductions now begin on the
same horizontal rails at 1440×900, 1100×800, 1024×768 and 768×1024. The
single-column 390×844 layout remains content-driven, without artificial blank
space or horizontal overflow. Monthly and Annual states use the same alignment.

Copy-only follow-up replaces the three standard-plan `Best for` statements with
the approved team-focused wording: enquiry answering, product recommendations
and customer support for Agent; product discovery, enquiries and sales for
Sales; and sales, rental, availability and bookings for Rental+. Prices,
allowances, product names, actions, features and plan structure are unchanged.
Rendered checks at 1440×900, 1024×768 and 390×844 confirm the revised copy,
aligned desktop and tablet comparison rails, content-driven mobile cards and
zero horizontal overflow.

Fidelity follow-up removes the repeated summary paragraph below each plan CTA,
including Custom. The included-feature heading and list now follow the action
directly. `Best for` remains the single plan summary above the price; all
product names, prices, allowances, actions and feature content are unchanged.
Rendered checks at 1440×900, 1024×768 and 390×844 confirm zero summary nodes,
an aligned 23px CTA-to-feature-label gap and no horizontal overflow. All 96
regression tests, targeted ESLint, the production build and `git diff --check`
pass.

Copy-audit follow-up tightens every plan's included-feature list and mirrors the
same terminology in the comparison table. Agent now opens with `Includes:` and
uses shorter labels such as `Agent Instructions` and `Website Embed`. Sales
removes duplicated search-readiness wording, adds the confirmed `Multilingual
Webstore` capability and replaces internal terms such as product ingestion with
plain-language `Catalogue Import`. Rental+ and Custom retain all capabilities
with shorter booking, inventory, integration and deployment labels. Prices,
allowances, feature counts and cumulative plan inheritance are unchanged.

Rendered checks at 1440×900, 1024×768 and 390×844 confirm every card retains its
8, 12, 11 or 8 visible features, all feature labels remain on one line at
tablet and mobile widths, and the page has no horizontal overflow.

Pricing-card allowances use compact values because their column labels already
provide the context. Agent, Sales and Rental+ now show `50 / month`,
`75 / month` and `100 / month` under `Included AI conversations`; listing
values are `—`, `100 (Sales)` and `300 (Sales + Rental)`. Custom allowances and
the fuller explanatory usage wording elsewhere on the page remain unchanged.
Rendered checks at 1440×900, 1024×768 and 390×844 confirm aligned allowance and
action rails, readable values and zero horizontal overflow.

Fidelity follow-up changes the standard-plan allowance strip from two side-by-
side columns to a vertical `Plan allowances` list inspired by the referenced
Square pricing treatment. `Included AI conversations` and `Listings` now occupy
separate ruled rows with their values aligned on the right. The approved values,
regular weight, card order and pricing remain unchanged.

Rendered checks at 1280×720, 1024×768 and 390×844 confirm two readable ruled
rows per standard plan, aligned desktop actions, an unclipped Rental+ value and
zero horizontal overflow. All 97 regression tests, targeted ESLint, the
production build and `git diff --check` pass.

The three standard plans give their allowance values a clearer hierarchy at
16px, up from the 12px label scale. The values now use regular 400 weight so
conversation and listing allowances do not receive unnecessary bold emphasis.
Labels and the descriptive Custom allowances retain their existing size.
Rendered checks at 1440×900, 1024×768 and 390×844 confirm aligned rails,
natural Rental+ wrapping and zero horizontal overflow.

Fidelity-mode follow-up adapts the top of each standard plan card from Square's
pricing hierarchy: a stronger plan title shares the first row with its badge,
followed by one concise `Best for` statement and a quiet divider before the
price. The repeated `AI Sales Agent`, `AI Sales Webstore` and `AI Rental & Sales
Suite` subtitle lines are removed because the suitability copy already explains
each plan. Antbuildz colours, card surfaces, prices, allowances, actions and
comparison content remain unchanged. Rendered checks at 1440×900, 1024×768 and
390×844 confirm zero standard-plan subtitle nodes, aligned desktop and tablet
rails, clear mobile wrapping and zero horizontal overflow.

Design and copy-editing follow-up makes each standard card a concise plan
summary instead of a second comparison table. Agent, Sales and Rental+ now show
five decision-making capabilities each at a larger 16px scale, with their
group labels raised to 15px. The full 30-row Agent–Sales–Rental+ feature
comparison remains unchanged below for detailed evaluation. Custom retains all
eight capabilities because it is not represented in that comparison.
Rendered QA at 1440×900, 1024×768 and 390×844 confirms 5/5/5/8 visible
features, equal standard-card heights on wide desktop, readable wrapping and
zero horizontal overflow. All 96 regression tests, targeted ESLint, the
production build and `git diff --check` pass.

The repeated custom-enterprise contact strip between the Pricing FAQ and final
CTA is removed. Higher-volume and tailored requirements remain covered by the
dedicated Custom plan and its `Talk to Sales` action, so the page no longer
presents the same enterprise route twice.
Rendered QA at 1280×720 and 390×844 confirms the FAQ now leads directly into
the closing CTA, with no enterprise-strip node and no horizontal overflow. All
96 regression tests, targeted ESLint, the production build and
`git diff --check` pass.

The four generic assurance boxes beneath the closing Pricing CTA are removed.
The page now transitions directly from the `Book a Demo` and `Email Sales`
conversion card to the shared footer, while the CTA content and footer remain
unchanged. Rendered checks at 1280×720 and 390×844 confirm zero assurance
boxes, no horizontal overflow and one intentional CTA-to-footer gap: 96px on
desktop and 72px on mobile.

The smallest Buyer Enquiry Credit pack now establishes the non-PAYG entry rate
at `$0.99` per credit: 25 credits cost `$24.75`. The larger 50-, 100- and
500-credit packs retain their existing approved totals and volume discounts.
This remains pricing-page presentation only; no payment or metering backend is
implemented by the website.

Rendered desktop and 390×844 mobile checks confirm the `$24.75 · $0.99/credit`
row, no PAYG wording and no table or page overflow. All 96 regression tests,
targeted ESLint, the production build and `git diff --check` pass.

The purchased-credit validity period is now six months from purchase, replacing
the former 12-month period in both the add-on card and its related FAQ guidance.
Rollover remains available only until each credit's six-month expiry, and use
still requires an active Antbuildz subscription. Credit quantities, prices and
consumption order are unchanged.

The add-on is now consistently named `AI Conversation Credits`, matching the
usage unit shown in the plan cards. Copy explains that credits may be purchased
manually or replenished through Auto Top-Up. The table displays the approved
unit rates as whole cents—`99¢`, `84¢`, `79¢` and `70¢` per credit—so it uses no
decimal places while preserving the underlying rates and pack data. The FAQ and
usage-order guidance use the same terminology.

Rendered QA at 1440×900 and 390×844 confirms the table remains contained, the
credit card stacks cleanly on mobile and the expanded Auto Top-Up FAQ states the
six-month validity without legacy credit terminology. All 97 regression tests,
targeted ESLint, the production build and `git diff --check` pass.

Copy and pricing-display follow-up reframes the add-on as `AI Conversation
Credit Top-Ups` and makes the bulk purchase model explicit. The table now uses
`Credit pack` and `Bulk top-up price` columns and displays only the approved pack
totals: `US$24.75`, `US$42`, `US$79` and `US$349`. Per-credit prices are no
longer shown. The supporting copy and related FAQ state that credits are sold in
packs rather than individually and that the same packs can be added through
Auto Top-Up. Credit quantities, total prices, validity and usage order are
unchanged.

Rendered QA at 1280×720, 1024×768 and 390×844 confirms readable pack totals,
an unclipped table, clean mobile stacking and zero horizontal overflow. The
expanded Auto Top-Up FAQ repeats the bulk-pack rule. All 97 regression tests,
targeted ESLint, the production build and `git diff --check` pass.

The latest whole-dollar pricing follow-up supersedes the former `$0.99` entry
rate for the smallest credit pack. The 25-credit pack is now `US$25`, so all
bulk top-up totals display without decimal places. The approved `US$42`,
`US$79` and `US$349` totals remain unchanged; the sequence is not artificially
repriced to force every pack to end in nine. The smallest pack is therefore
exactly `$1` per credit while the larger packs retain their volume discounts.
Rendered QA at 1280×720 and 390×844 confirms all four totals use whole dollars,
the table remains contained and the page has no horizontal overflow. All 97
regression tests, targeted ESLint, the production build and `git diff --check`
pass. Repository-wide lint still reports pre-existing errors in generated
`public/assets` bundles; the edited source and test files lint cleanly.

The pricing usage note is tightened without changing its commercial meaning:
`One AI conversation covers one buyer enquiry with up to five message
exchanges. Test prompts and unrelated interactions do not count. Monthly
allowances reset and never roll over—even on annual plans.` This replaces the
longer duplicated test-prompt and allowance-cycle wording in both the visible
pricing note and the relevant FAQ answer.
Rendered QA at 1280×720 and 390×844 confirms the note remains within its
content rail, uses two desktop lines and produces no horizontal overflow. All
97 regression tests, targeted ESLint, the production build and
`git diff --check` pass.

Market-language and copy-density follow-up removes `bulk` from the AI credit
card. Following the concise patterns used by OpenAI, Lovable and Descript, the
card is now titled `AI Conversation Credits`, introduces the option as `Add
credits when you need more conversations`, and says only `Choose a credit pack
or use Auto Top-Up. Credits are valid for 6 months.` The table headings are
reduced to `Credit pack` and `Price`. The fuller FAQ uses `fixed packs` and
retains the enquiry definition, rollover, expiry and active-subscription rules.
Rendered QA at 1280×720, 1024×768 and 390×844 confirms the shorter copy, table
and card remain contained with no horizontal overflow. All 97 regression tests,
targeted ESLint, the production build and `git diff --check` pass.

The Custom plan is reduced from a second feature-comparison card to one compact
enterprise row inspired by the referenced Square pattern. It now asks `Need
More Than a Standard Plan?`, keeps one `Talk to Sales` action and explains that
the custom route is for higher conversation or listing volumes, specialised
deployments, multiple Webstores, or ERP, CRM and other third-party connections.
The duplicate price label, allowance strip and eight-item checklist are removed;
the detailed standard-plan comparison remains unchanged.
Rendered checks at 1280×720 and 390×844 confirm the compact two-column desktop
row, natural mobile stack, readable copy and zero horizontal overflow. All 97
regression tests and targeted ESLint pass.

The Agent, Sales and Rental+ cards no longer repeat their product-stack subtitle
directly beneath the plan name. Each card now moves straight into a shorter,
more specific `Best for` statement: existing-channel enquiries for Agent,
online catalogue and sales-enquiry workflows for Sales, and rates, availability
and booking workflows alongside sales for Rental+. The detailed plan
descriptions remain beside their feature lists.

QA rendered `/pricing` at 1280×720, 1024×768 and 390×844. The three standard
plans expose no subtitle node, keep their price rows aligned on the shared
64px positioning rail, retain their detailed feature introductions and produce
no horizontal overflow. Monthly and Annual states remain functional. The full
96-test content suite, targeted ESLint, production build and diff check pass.

Fidelity-mode hierarchy correction for the comparison section on `/pricing`.
The large `Compare Features Side by Side` heading is the section's only title;
the repeated smaller `Agent, Sales and Rental+` title is removed. One supporting
sentence now explains the cumulative Agent, Sales and Rental+ plan relationship
before the unchanged comparison table.

Rendered QA at 1440×900 and 390×844 confirms the single title, zero repeated
small-title matches and no horizontal overflow. All 96 regression tests,
targeted ESLint, the production build and `git diff --check` pass.

## 2026-09-02 — Webstore journey colours follow one continuous sequence

Fidelity-mode colour correction for “From Product Discovery to Enquiry” on
`/ai-webstore-suite`. The former step order—purple, blue, orange, yellow, green,
red—created abrupt hue jumps, while the desktop spine omitted three of those
colours. The complete journey now progresses purple → blue → green → yellow →
orange → red. Step numbers, interface examples, actor labels, progress bars and
the desktop spine all use the same order. Content, layout, animation, card
structure and mobile stacking remain unchanged.

Rendered QA at 1440×900 and 390×844 confirms all six step accents, a matching
six-stop desktop gradient, the intentionally hidden mobile spine and zero
horizontal overflow. All 95 regression tests, targeted ESLint, the production
build and `git diff --check` pass.

## 2026-09-02 — Webstore benefit cards use borderless fading colour surfaces

Fidelity-mode finish refinement for the six cards beneath “Make Every Product
Discoverable and Sales-Ready” on `/ai-webstore-suite`. The background grid and
coloured top hairline are removed, and the card border is eliminated. Each card
retains its existing blue, green, purple, orange, red or yellow identity through
a very light two-accent surface that fades to the clean white base at the bottom
of the frame. Card content, illustrations, order, dimensions, typography and
responsive grid remain unchanged.

Rendered QA at 1440×900, 768×1024 and 390×844 confirms six distinct card
backgrounds, zero card borders, no grid layer and zero horizontal overflow. All
95 regression tests, the production build and `git diff --check` pass.

## 2026-09-02 — Global-reach section no longer repeats page actions

Fidelity-mode cleanup scoped to the multilingual globe section on
`/ai-sales-agent`. The duplicated `Book a Demo` and `View Pricing` buttons are
removed from both desktop and mobile render paths. The section heading,
description, globe, language chips, motion, responsive layout and actions
elsewhere on the page remain unchanged. This supersedes the global-reach action
placement described in the CTA-order note below.

Rendered QA at 1440×900 and 390×844 confirms zero links or buttons inside the
section, a loaded globe, readable copy and zero horizontal overflow. All 95
regression tests, targeted ESLint, the production build and `git diff --check`
pass.

## 2026-09-02 — Webstore buyer conversation keeps a continuous cadence

Design-mode motion refinement scoped to stage 03, `Guide buyers in chat`, in
the `/ai-webstore-suite` hero. The existing recommendations, buyer questions,
Emma replies, product details, copy and layout remain unchanged. The three
conversation exchanges now use shorter buyer and Agent typing beats, followed
by 1.25–1.4-second reading holds instead of the former 2.1–3.4-second visible
stalls. Brief dropped frames can be absorbed without making the conversation
clock appear to stop, and the transcript uses a faster composited easing when
bringing the latest exchange into view. The reduced-motion path remains a
stable recommendation state.

A live desktop trace at 1440×900 reached every expected state in order with no
pause flag. Rendered QA at 1024×768 and 390×844 confirms the final reply remains
visible, the hero stays exactly one viewport tall and both layouts retain zero
horizontal overflow. All 95 regression tests, targeted ESLint, the production
build and `git diff --check` pass.

## 2026-09-02 — Demo precedes pricing in shared CTA groups

System-mode CTA-order refinement across the public marketing pages. Whenever
`Book a Demo` and `View Pricing` appear in the same action group, the primary
yellow demo action now appears first in DOM and visual reading order, followed
by the outlined pricing action. The change covers the AI Sales Agent hero,
closing action, global-reach section and transferred Webstore action groups on
desktop and stacked mobile layouts. Labels, destinations, button dimensions,
other CTA combinations, page copy and section layouts remain unchanged.

Rendered QA at 1440×900 and 390×844 covers the Sales Agent hero and the
Webstore closing action. Both routes retain 54px controls, the mobile Webstore
pair remains 300px wide, and all checked views have zero horizontal overflow.
Live clicks from the Sales Agent hero reached `/book-a-demo` and `/pricing`.
All 95 regression tests, targeted ESLint, the production build and
`git diff --check` pass.

## 2026-09-01 — Sales Agent brand strip closes the page

Fidelity-mode relocation on `/ai-sales-agent`. The existing 12 approved equipment-brand marks move from directly beneath the hero to the final position after the closing CTA and immediately before the shared footer. The presentation now follows the AI Webstore Suite treatment: a compact continuous row on the clean white surface, restrained outlined logo tiles and no heading or visible section dividers. The original brand marks are unchanged; an `aria-hidden` duplicate set creates the seamless loop, while reduced-motion users receive a static row. Browser inspection at the available 1280×720 viewport confirms the CTA → logo strip → footer order and clean visual transition. All 95 regression tests, targeted ESLint, the production build and `git diff --check` pass.

## 2026-09-01 — Sales Agent globe uses a lighter blue ocean

Fidelity-mode colour refinement scoped to the globe in the `/ai-sales-agent` global-reach section. The existing globe artwork, green land, route lines, market points, language chips, orbit, layout and motion remain unchanged. Only the near-black navy ocean stops are raised to softer mid/deep blues, and the globe's drop shadow is reduced slightly so the illustration feels lighter against the soft violet section without losing spherical depth. The updated 480×480 SVG was rendered directly at 600×600 for visual inspection; its authored geometry and responsive dimensions are unchanged. All 95 regression tests, targeted ESLint, the production build and `git diff --check` pass.

## 2026-09-01 — Webstore logo strip blends into the clean footer transition

Fidelity-mode cleanup scoped to the logo marquee beneath the final AI Webstore Suite CTA. The inherited `Trusted Partners` label is removed, while all 28 moving logo placeholders and the marquee behaviour remain intact. The strip now uses the clean white surface with transparent top and bottom dividers so it blends into the surrounding page instead of appearing as a separate grey band. Browser inspection at the available 1280×720 viewport confirms a hidden label, white surface, transparent dividers, all 28 tiles, unchanged 186px strip height and zero horizontal overflow.

## 2026-09-01 — Pricing uses Purchased Credits instead of PAYG

The pricing cards now keep only the two plan-specific capacity details visitors need to compare: included AI conversations and listings. The repeated `Extra conversations` row and all Pay-As-You-Go wording are removed because the Purchased Credits section immediately below already provides the approved route for additional conversation capacity. The usage FAQ now points customers to Purchased Credits after their monthly allowance, and the two remaining plan details use a shorter two-column layout.

Plan prices, monthly usage allowances, listing limits, annual discount, Purchased Credit pack prices and the Additional AI Agent option are unchanged. Browser QA at 1440×900, 1024×900 and 390×844 confirms two details per plan, no redundant wording and zero horizontal overflow; the Annual selector still updates the three standard prices while every Purchased Credit pack remains unchanged. All 93 regression tests, targeted ESLint, the production build and `git diff --check` pass.

### Follow-up: usage is expressed as AI Enquiry Sessions — 2026-09-01

Customer-facing pricing now uses `AI Enquiry Session` instead of `conversation` as the measurable usage unit. One session is defined as one relevant buyer enquiry with up to five message exchanges; unrelated or irrelevant interactions do not count. Plan allowances, the usage note, Purchased Credit table and related FAQs use the same terminology. One Purchased Credit adds one AI Enquiry Session. The quantities and prices are unchanged. Rendered QA at 1440×900, 1024×900 and 390×844 confirms the longer labels wrap without clipping and retain zero horizontal overflow.

### Follow-up: listing values avoid the repeated label — 2026-09-01

The pricing-card detail label remains `Listings`; the Sales and Rental+ values are shortened to `100 active Sales` and `500 combined Sales + Rental` so the word `listings` is not repeated inside the same field. Numeric limits, plan structure, comparison content and pricing remain unchanged. Browser QA at 1440×900, 1024×900 and 390×844 confirms the values remain aligned and unclipped with zero field or page-level horizontal overflow.

### Follow-up: listing values are numbers only — 2026-09-01

The Sales and Rental+ `Listings` values are further simplified to `100` and `500` for faster plan scanning. Their feature introductions now explain that Sales includes up to 100 active sales listings and Rental+ includes up to 500 active sales and rental listings. This supersedes the longer values recorded above without changing either approved limit, plan capability or price.

Browser QA at 1440×900, 1024×900 and 390×844 confirms the numeric values scan cleanly, both explanations remain contained above their feature lists and every pricing card retains zero horizontal overflow.

### Follow-up: add-on capacity uses a buyer-outcome name — 2026-09-01

The former `Purchased Credits` presentation is renamed `Buyer Enquiry Credits`, replacing the abstract `AI Enquiry Sessions` wording inside the add-on card. The supporting copy now leads with handling more product, sales and rental enquiries, while each credit remains transparently defined as one relevant buyer enquiry with up to five message exchanges. Pack quantities, prices, 12-month validity, rollover, consumption order and active-subscription requirement remain unchanged.

Browser QA at 1440×900, 1024×900 and 390×844 confirms the outcome-led title, supporting copy and all four credit rows remain readable, contained and free of horizontal overflow.

### Follow-up: comparison introduction consolidated — 2026-09-01

The pricing comparison now has one introduction instead of repeating the plan names above the table. The eyebrow is `Plan Comparison`, the single heading is `Compare Agent, Sales and Rental+`, and one sentence explains the cumulative relationship: every plan includes the AI Sales Agent, Sales adds a Sales Store and Rental+ adds rental capabilities. The duplicate inner title and paragraph are removed, while the table region remains labelled by the visible heading.

Desktop browser inspection confirms the heading, description and table form one compact reading sequence with no page overflow. The in-app browser's temporary mobile viewport override did not take effect during this pass, so mobile containment is covered by the unchanged responsive table shell and regression checks rather than a new rendered mobile capture.

### Follow-up: annual prices use exact 9-ending monthly equivalents — 2026-09-01

Annual billing now displays `$39`, `$159` and `$319` per month for Agent, Sales and Rental+, with exact annual charges of `$468`, `$1,908` and `$3,828`. Each annual total is calculated directly from the monthly equivalent shown on the card, removing the former mismatch between rounded monthly displays and annual charges. The standard monthly prices remain `$49`, `$199` and `$399`; the annual selector continues to communicate a 20% saving.

Desktop browser QA exercised both billing states: Annual displays the three approved 9-ending equivalents and matching annual totals, while Monthly restores the original prices. Both states retain zero horizontal overflow. The in-app browser's temporary mobile viewport override remains unavailable; the unchanged responsive card structure and shorter price strings are covered by the pricing regression suite rather than a new mobile capture.

## 2026-09-01 — Public page loading uses the Antbuildz.AI wordmark

System-mode transition refinement across the transferred public application. The copied generic spinner and visible `Loading workspace…` message are replaced at source level with the established Antbuildz.AI wordmark progressively revealing from left to right on the canvas surface. The fallback retains a polite `Loading Antbuildz AI` assistive status, while `prefers-reduced-motion` presents the complete static logo. Route timing, lazy loading, destinations and operational Console behaviour remain unchanged.

The actual transition component was rendered at 1440×900 and 390×844: it fills the viewport, keeps the complete mark centred and legible, exposes two aligned wordmark layers, runs the 1.8-second reveal and has zero horizontal overflow. Normal Pricing and About loads were rechecked after removing the temporary local preview hook; both render one H1 with no loader residue or workspace wording. All 93 regression tests, targeted ESLint, the production build and `git diff --check` pass.

## 2026-09-01 — Public header navigation uses a lighter weight

System-mode typography refinement for the shared public header. AI Sales Agent, AI Webstore Suite, Pricing, Industries, Resources and Sign in now use Inter 600 instead of 750, reducing the visual heaviness while retaining the established 14px desktop / 13px compact sizing, 1.65 line-height, alignment, yellow selected underline and destinations. The Book a Demo action, dropdown content, mobile drawer, language selector and operational AI Agent Console are unchanged.

Browser QA on the dark AI Webstore Suite hero at 1440×900, the light Pricing header and open Industries menu at 1024×768, and the mobile Webstore header and drawer at 390×844 confirms the intended 600 desktop weight, the drawer's existing 500 weight and zero horizontal overflow. All 92 regression tests, targeted ESLint, the production build and `git diff --check` pass.

## 2026-09-01 — Demo and account-entry pages use one lean form system

System-mode refinement across `/book-a-demo`, `/signup`, `/sign-in`, `/forgot-password` and `/reset-password`. Decorative eyebrow labels, atmospheric background blobs and duplicate in-card logos are removed, while useful field labels, progress information, industrial benefits and every form control remain. Account-page introductions now use one centred 28–34px heading scale; field labels use 13px, field content uses 15px, supporting copy uses 13–15px and all primary actions retain a 54px touch target with a 16px/700 label. Cards use the shared clean surface, restrained line, 22–24px radius and a quieter shadow. Book a Demo keeps its explanatory story left aligned and adopts the same field and action language inside its form.

The registration, sign-in and password routes remain non-indexable account utilities. No form logic, validation, Calendly handoff, destination, data handling, route, configuration or service behaviour changed. Browser QA at 390×844, 768×1024 and 1440×900 covers Book a Demo and the account-entry system; every measured page has zero horizontal overflow, hidden decorative eyebrows, aligned controls and a 54px primary action. All 91 regression tests, targeted ESLint, the production build and `git diff --check` pass.

## 2026-09-01 — Webstore discovery cards reduced in height

Fidelity-mode density refinement for the six cards beneath “Make Every Product Discoverable and Sales-Ready.” At 768px and above, the equal card frame is reduced from 578px to 462px—almost exactly 20%—by tightening internal padding, the interface-graphic area and the reserved copy area. Mobile retains content-driven card heights with smaller padding and graphic margins so its labels remain readable. The title, descriptions, graphics, card order, responsive grid and interactions are unchanged. Browser QA at 1440×900, 768×1024 and 390×844 confirms contained graphics and copy, equal desktop/tablet rows and zero horizontal overflow. All 91 regression tests, targeted ESLint, the production build and `git diff --check` pass.

### Follow-up: hero-style line and colour finish — 2026-09-01

The same six cards retain their approved layout, content, dimensions and interface illustrations. Their finish now borrows the hero storyboard's visual language through a restrained two-colour hairline, softly tinted grid lines, clearer colour saturation and two-tone glass icon tiles. Each card keeps its original blue, green, purple, orange, red or yellow identity, with a neighbouring brand accent adding depth rather than introducing a new graphic style.

## 2026-09-01 — Webstore closing CTA uses a photographic catalogue action

Design-mode refinement scoped to the final “Give Your AI Sales Agent a Connected Catalogue” section on `/ai-webstore-suite`. The former full-width grid and six floating labels are replaced visually by the homepage CTA's contained warm photographic-card language. A newly generated Emma scene shows her scanning a labelled industrial component bin in an organised parts warehouse, making the physical-inventory-to-catalogue connection specific and distinct from the homepage tablet action. A soft warm gradient blends the photograph into the left-aligned copy surface without a hard split.

The existing Book a Demo, View Pricing and Explore AI Sales Agent destinations and standardised treatments remain intact. Desktop and tablet use the photograph as a right-side action scene; mobile crops it above the copy, stacks the two main actions and preserves the lighter Agent link. Browser QA at 1440×900, 768×1024 and 390×844 confirms the intended fade, readable type, 54px actions and zero horizontal overflow. All 92 regression tests, targeted ESLint, the production build and `git diff --check` pass.

### Follow-up: closing message and text alignment refined — 2026-09-01

The photographic closing card now asks “Want to See How the AI Webstore Suite Works?” and invites visitors to book a demo to understand how their catalogue, inventory and AI Sales Agent work together. The inherited centred alignment on the heading's internal line spans is removed so every title line shares the description's left edge. The existing Book a Demo, View Pricing and Explore AI Sales Agent actions and destinations remain unchanged.

### Follow-up: duplicate journey actions removed — 2026-09-01

The transferred `See it in action` and `Talk to sales` action row is removed from the end of the six-step “From Product Discovery to Enquiry” section. Its title, introduction, six journey steps, graphics and surrounding section order remain unchanged. The actions remain available elsewhere through the page's canonical CTA system. Browser QA at 1440×900 and 390×844 confirms the section closes naturally after `Submit Enquiry`, with zero rendered duplicate buttons and no horizontal overflow. All 91 regression tests, targeted ESLint, the production build and `git diff --check` pass.

## 2026-09-01 — Pricing billing toggle follows the title centre

Fidelity-mode alignment correction for the monthly/annual billing selector on `/pricing`. The selector now centres on the pricing hero title's 1152px inner rail instead of the wider standard-plan grid, correcting a 49px rightward offset on wide desktop. The existing billing controls, wording, annual discount, prices, cards and interaction remain unchanged. Browser measurements at 1440×900, 1024×900, 768×1024, 390×844 and 320×740 confirm a 0px title-to-toggle centre offset and no horizontal overflow; the Annual state remains interactive. All 91 regression tests, targeted ESLint, the production build and `git diff --check` pass.

### Follow-up: billing selector uses a blue selected state — 2026-09-01

System-mode colour refinement informed by current Carbon and Atlassian guidance for selected controls: a state colour and shape provide the selection signal, while focus remains separately visible. The former black selected segment is replaced with a deeper Antbuildz blue mixed from the existing blue and ink tokens, with white text and a restrained shadow. `Save 20%` is no longer a yellow mini-button; it is plain supporting text separated by a fine rule inside the Annual segment. Yellow remains reserved for primary commercial actions and the Sales plan's established `Most Popular` tag. Monthly and Annual states were rendered at 1440×900, with the default composition also inspected at 390×844; the billing interaction and approved prices remain unchanged.

## 2026-09-01 — Core-page CTAs standardised by destination

System-mode CTA update across Home, AI Sales Agent and AI Webstore Suite. Repeated actions now derive their wording and visual priority from one source-level destination contract: `/book-a-demo` is always `Book a Demo` in the yellow primary pill; `/pricing` is always `View Pricing` in the clean outlined pill; product buttons use `Explore AI Sales Agent` or `Explore AI Webstore Suite` in the same outlined treatment. The former Sales Agent variants (`Build Your AI Sales Agent`, `Build Your Agent`, and `Build Your AI Agent`) all led to Pricing and are therefore consolidated to `View Pricing`. The closing Sales Agent `/contact` demo action and Webstore `/trial` demo action now point to the canonical `/book-a-demo` route. Webstore text CTAs retain their lighter link treatment but now use the same `Explore AI Sales Agent` wording.

Every mapped desktop button now measures 54px high with the same 999px radius, 16px/700 label, padding, colour, border and icon-free treatment. At 767px and below, content CTAs share a 300px width while the header action remains content-sized; the 320px header uses the documented compact-label exception so its wordmark, demo action and menu trigger remain visible. Rendered QA at 1440px, 1024px, 390px and 320px covers the three routes, button destinations, styling fingerprints and horizontal containment. Live clicks from the Sales Agent hero reached `/pricing` and `/book-a-demo`. All 88 regression tests, targeted ESLint, the production build and `git diff --check` pass. The Webstore hero's previously removed duplicate actions remain removed.

## 2026-09-01 — Mobile header demo action uses a quieter scale

System-mode refinement of the shared `Book a Demo` header action across Home, AI Sales Agent and AI Webstore Suite. The normal mobile control is reduced from 54px to 48px high, from a 16px to 15px label and from 28px to 24px horizontal padding. This keeps the established yellow primary treatment and canonical destination while reducing its visual weight beside the 44px menu trigger. At 359px and below, the existing compact exception now explicitly uses a 44px height, 13px label and 18px horizontal padding.

Browser-measured on all three routes at 602×1061, 390×844, 320×740, 1024×900 and 1440×900. The three mobile headers resolve to identical dimensions, retain zero horizontal overflow, keep the wordmark, action and menu contained, and preserve the desktop 54px/16px button. The drawer opens normally and the resized action still reaches `/book-a-demo`. All 88 regression tests, targeted ESLint, the production build and `git diff --check` pass. No content CTA, wording, destination, hero, route, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Obsolete copied routes retired

System-mode route cleanup following a live indexing audit. The internal previews `/aiagent-homepage-preview`, `/antbuildz-main-clone`, `/main-dashboard-navigation-preview`, `/aiagent-sales-agent-preview` and `/chat-theme-studio`, together with the unused copied routes `/product`, `/use-cases`, `/integrations`, `/security` and `/insurance`, now use the genuine site-wide 404 response instead of rendering indexable transferred pages. `/marketplace` permanently redirects to `https://antbuildz.com`, while `/blogs` permanently redirects to the canonical `/resources` library.

The underlying copied source and assets remain intact; only public route exposure changed. These routes were already absent from the canonical sitemap. Account, authentication, operational Console, demonstration-product and approved compatibility routes remain unchanged. Local HTTP checks confirm ten 404 responses, the two intended permanent redirects, retained 200 responses for canonical pages and no retired sitemap entries. The useful `noindex` 404 page passed rendered checks at 1440 × 900 and 390 × 844 with no overflow and 54px mobile actions. All 82 tests, targeted ESLint, diff validation and the production build pass. Deployment remains a separate authorised step.

## 2026-08-31 — Homepage conversation aligned nearer the hero title

Fidelity-mode position refinement only. On wide and compact desktop layouts, the primary Agent conversation now sits higher and slightly further inside the right rail so it reads alongside the hero title instead of at the bottom of the image. The industrial photograph, headline, conversation dimensions, copy, animation timing, speaker alignment and mobile bottom anchor remain unchanged.

Rendered checks at 1440 × 900, 1024 × 900 and 390 × 844 confirm a clear title-to-conversation relationship, no overlap and no horizontal overflow. Mobile retains its existing 32px bottom anchor and full-width readable composition.

## 2026-08-31 — Mobile homepage conversation gap reduced

Fidelity-mode spacing refinement scoped only to the primary homepage conversation at 640px and below. Replaced its lower-screen anchor with a responsive top position so the first animated exchange follows the headline more closely, while retaining a safe minimum gap on narrow phones. This supersedes the previous 32px mobile bottom anchor; the headline, conversation content, timing, glass treatment, industrial photograph, hero height and desktop/compact anchors are unchanged.

Browser-measured at 390 × 844 and 320 × 740: the title-to-conversation gap is now approximately 57px and 32px respectively, reduced from 227px at the supplied 390px mobile view. The later multi-message conversation state remains contained in its transcript. Visual checks at 1440 × 900 and 1024 × 900 confirm their existing compositions are unchanged; all four viewports retain zero horizontal overflow. Targeted ESLint, all 85 regression tests, the production build and `git diff --check` pass.

## 2026-08-31 — Mobile public descriptions use justified full rows

System-mode typography update across all 17 public marketing routes. At 767px and below, every visible hero or section description carrying the shared `major-intro` role now fills its component content row, uses justified inter-word alignment and keeps its final line left-aligned. The semantic scope includes Home, product, Pricing, Resources, AI Help, About, demo, agreements and all eight Who We Serve routes.

Card copy, FAQ answers, pricing data, buttons, labels, embedded interface demonstrations and the operational AI Agent Console retain their authored alignment. The supplied AI Sales Agent view was inspected at 602 × 1061 and 390 × 844; AI Webstore Suite, Resources and Rental & Leasing were also visually sampled at 390 × 844. A route-wide mobile check found no unhandled visible major descriptions and zero horizontal overflow on every public route. Checks at 768 × 900 and 1440 × 900 confirm the existing non-mobile alignment returns at the breakpoint. Targeted ESLint, all 85 regression tests, the production build and `git diff --check` pass.

## 2026-08-31 — AI Sales Agent mobile hero fits one screen

Fidelity-mode mobile composition update scoped to `/ai-sales-agent` at 767px and below. The hero now uses exactly `100svh`, so its lower boundary is visible at the bottom of the phone screen without scrolling. The existing animated phone follows the title and description, while the unchanged `Build Your AI Sales Agent` and `Book a Demo` actions follow the animation. The phone's inherited 60px trailing pad and decorative ambient overflow are removed only in this compact layout.

The action group retains the established 54px touch targets and reserves enough space for the persistent Agent launcher, preventing it from covering `Book a Demo`. Narrow-phone typography is compacted only at 360px and below so the animation remains visible. Browser measurements at 320 × 740, 390 × 844 and 602 × 1061 confirm that the hero and following section meet exactly at the viewport edge, the animation precedes the actions and horizontal overflow remains zero. The 768px and desktop compositions remain outside this mobile override.

## 2026-08-31 — AI Webstore Suite mobile hero fits one screen

Fidelity-mode mobile sizing correction scoped to `/ai-webstore-suite` at 767px and below. The dusty-ochre hero now uses exactly `100svh`; its heading and description retain their current content, while the existing three-stage Webstore storyboard flexes into the remaining space. The stage navigation, animated canvas, explanatory footer and native 44px playback controls remain inside the banner instead of extending beyond the phone viewport.

Browser measurements at 320 × 740, 390 × 844 and the supplied 602 × 1061 viewport confirm that the hero ends exactly at the viewport boundary with zero horizontal overflow. At 602 × 1061, all three manually selected workflow stages keep the same 1061px hero boundary and retain visible footer controls. The 768px compact and 1440px desktop compositions remain outside this mobile rule and retain their authored, content-driven storyboard height.

### Follow-up: mobile storyboard clears the hero boundary — 2026-09-01

Fidelity-mode spacing correction scoped to `/ai-webstore-suite` at 767px and below. Reserved a 24px footer gap beneath the complete Webstore storyboard so its rounded control footer no longer touches the bottom edge of the dusty-ochre hero. The storyboard continues to flex within the remaining height; the hero itself remains exactly `100svh`, keeping the following Product Discovery section below the first phone viewport.

Browser-measured at 602×1061, 390×844 and 320×740. All three manually selected workflow stages retain the full 24px internal gap, visible playback controls and zero horizontal overflow. The 1440×900 desktop composition remains outside the mobile rule and preserves its authored 1248×760 storyboard.

### Follow-up: conversation phone enlarged with a soft crop — 2026-09-01

Fidelity-mode visual refinement scoped to the third `Guide buyers in chat` stage. The Emma conversation phone is enlarged from a small inset to the dominant workflow graphic, while the same stage variables continue to position all three moving product cards inside the frame. Its lower portion now extends beyond the visible animation canvas and fades gradually into the storyboard surface instead of ending at a hard horizontal cut.

Rendered checks at 1440×900, 602×1061 and 390×844 confirm the larger phone, readable conversation state, intentional lower fade, contained stage footer and zero horizontal overflow. The 390×844 composition keeps the entire dusty-ochre hero within one phone viewport and retains the 24px gap below the storyboard. The listing-enrichment and Webstore stages, animation copy, timing, buttons and destinations are unchanged.

### Follow-up: hero storyboard colour and fade refined — 2026-09-01

Fidelity-mode visual refinement scoped to the AI Webstore Suite hero animation. All three workflow stages now sit over restrained violet, blue, gold and red light fields drawn from the approved Antbuildz palette. The visual begins a broad lower dissolve after the primary content area so the graphic fades gradually into the glass footer rather than ending on a hard edge. Increased-contrast and reduced-transparency preferences retain a solid canvas without the decorative fade.

Rendered checks at 1440×900 and 390×844 cover the enlarged conversation stage and the catalogue workflow. Both retain the gradual fade, readable content, the existing one-screen mobile boundary and zero horizontal overflow. All 92 regression tests, targeted ESLint, the production build and `git diff --check` pass.

### Follow-up: hero animation footer removed — 2026-09-01

Fidelity-mode cleanup scoped to the AI Webstore Suite hero storyboard. Removed the full lower strip beneath the animated graphic, including each stage's explanatory sentence and the pause/replay controls. The three selectable workflow tabs, automatic animation, colourful visual treatment and gradual lower fade remain; the released space is returned to the illustration on desktop and mobile.

Rendered checks at 1440×900 and 390×844 confirm the footer and controls are absent, all three stage tabs remain available, the mobile hero still ends at exactly one viewport and horizontal overflow remains zero. All 92 regression tests, targeted ESLint, the production build and `git diff --check` pass.

### Follow-up: conversation remains anchored in the phone — 2026-09-01

Fidelity-mode motion correction scoped to the third AI Webstore Suite hero stage. Replaced the excessive 360–600px transcript jumps with smaller 80–224px staged offsets. Questions and replies still move upward as the conversation grows, but the newest completed exchange remains in the phone's lower reading area instead of being pushed to the top and leaving an empty lower half.

Rendered the completed second reply at 1440×900 and 390×844. The final exchange remains grouped above the composer with a natural 103–129px gap, the faded phone crop remains intact and horizontal overflow is zero. All 92 regression tests, targeted ESLint, the production build and `git diff --check` pass.

### Follow-up: product handoff becomes a simulated live chat — 2026-09-01

Fidelity-mode interaction refinement scoped to the third AI Webstore Suite hero stage. After the three product cards synchronise into the phone, the chat now proceeds through a buyer typing indicator, buyer message, Emma typing indicator and Emma reply for the initial enquiry and both qualification follow-ups. Messages no longer appear before their turn. The same technical, rental, quantity, delivery and handover meaning is retained in shorter wording so complete sentences remain readable inside the cropped phone.

Rendered at 1440×900, 768×1024 and 390×844. The initial typing state appears above the recommendations, each sent message is followed by Emma's typing state, and the completed rental and sales exchanges remain fully readable. Responsive scroll compensation keeps the latest exchange above the intentional lower fade without changing the desktop/tablet composition or leaving an empty phone. All 92 regression tests, targeted ESLint, the production build and `git diff --check` pass.

### Follow-up: desktop hero fits the first laptop viewport — 2026-09-01

Fidelity-mode sizing refinement scoped to the AI Webstore Suite hero at 980px and above. The complete dusty-ochre banner now ends at exactly `100svh`, so the next section begins below the first laptop view without requiring a scroll to find the hero boundary. The storyboard starts at approximately 80% of its former authored desktop size and scales down further only when a short laptop viewport needs the extra clearance.

The three stage tabs, animation content, conversation sequence, lower fade, title and description remain unchanged. Mobile retains its separately approved one-screen composition.

Browser QA at 1440×900, 1280×720, 1024×768 and 390×844 confirms an exact viewport-height hero boundary, one H1 and zero horizontal overflow. The three desktop workflow stages remain selectable and contained; the compact desktop storyboard is approximately 24% smaller than the former authored frame, while the short 720px laptop view scales further to preserve the first-view boundary. All 92 regression tests, targeted ESLint, the production build and `git diff --check` pass.

### Follow-up: Webstore title highlights removed — 2026-09-01

Fidelity-mode colour correction scoped to `/ai-webstore-suite`. All visible section-title and animated feature-card title gradients now resolve to their surrounding solid heading colour, including `Recommendations`, `Discoverable and Sales-Ready` and the other lower-page highlighted phrases. Gradient accents inside interface graphics, labels and controls remain unchanged.

Browser-inspected at 1440×900 and 390×844. No visible H2 or H3 retains a text-gradient background, the responsive heading wraps remain readable and both checked viewports retain zero horizontal overflow. Wording, typography, spacing, cards, animation behaviour, CTA styling and other routes are unchanged.

## 2026-08-31 — Project-wide technical SEO audit and remediation

Completed a full source, local HTTP and rendered-browser audit of public routes, metadata, crawl controls, redirects, structured data and internal links. The canonical sitemap now contains 67 unique indexable URLs: the homepage, canonical product/support/company and Who We Serve pages, plus all 49 resource articles. Sitemap modification dates are stable and truthful; redirect aliases, fragments, previews and operational pages are excluded.

Every resource article now emits its approved title, description, self-canonical, Open Graph/Twitter metadata and Article/Breadcrumb JSON-LD in the initial HTML. Public pages emit route-specific WebPage/Breadcrumb data, the homepage emits its WebPage data before hydration, unknown public URLs return a true 404 with `noindex`, and known operational/conversion routes remain functional with `noindex`. Internal legacy aliases and duplicate solution paths use permanent redirects. The transferred app's post-hydration metadata is guarded so it cannot replace the correct Antbuildz.AI canonical, social URL or route schema with localhost or the retired `antbuildzai.com` domain.

Verification passes: 82 content/regression tests, targeted ESLint, production build, a 67-URL canonical crawl and rendered Chrome checks for Home, Webstore, Resources, a resource article, Who We Serve and AI Help. The canonical crawl found no failed URLs, missing titles/descriptions/canonicals, duplicate titles/descriptions or invalid route JSON-LD after the one duplicate title found during QA was corrected. Rendered pages retain one H1, valid JSON-LD and image alt attributes in the representative browser sample. Demonstration product links and the account workspace now resolve on explicit `noindex` routes; the legacy Marketplace How It Works link leaves this AI website via a permanent redirect.

Open launch work remains: the transferred marketing app still supplies most visible headings and links only after JavaScript hydration, so server-rendering the visible page content is the highest remaining technical SEO improvement. The homepage hero image and several transferred assets also remain large enough to threaten production Core Web Vitals. The approved `next.config.ts` host-normalisation and baseline security headers are implemented and production-tested locally; deployment is still required before live `http://antbuildz.ai` and `https://www.antbuildz.ai` behaviour changes. No deployment, Search Console account, external service or paid integration was changed in this audit.

## 2026-08-31 — Social sharing uses one clean industrial story

Design-mode social-preview update for WhatsApp, Facebook, LinkedIn and other Open Graph consumers. Replaced the crowded default artwork with a cache-busting 1200 × 630 JPEG inspired by the restraint of Sierra's public share card: one full-bleed mountain-logistics photograph, the short two-part statement `Make industrial buying better. Built with Antbuildz AI.`, and one transparent Antbuildz.AI wordmark at the lower left.

The new artwork removes the former white logo plate, eyebrow, paragraph, URL strip and repeated branding. All default Open Graph and Twitter references use the new absolute `/images/antbuildz-ai-social-share-v2.jpg` URL so platforms do not keep serving the previously cached artwork. The homepage social description is now one concise sentence covering complex industrial products, suitable options, qualified sales or rental enquiries, and approved product and inventory data; visible page copy remains unchanged.

## 2026-08-31 — Browser-tab `ai` mark uses a transparent canvas

Fidelity-mode favicon correction preserving the exact previously approved red `a` and yellow `i` glyphs while removing only their dark rounded-square backing. Browser metadata now references the transparent 512 × 512 PNG and a regenerated seven-size transparent ICO fallback with a `v=3` cache key. Header/footer wordmarks, social-share artwork and the glyph shapes/colours remain unchanged.

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

### Webstore catalogue pricing cards — 2026-08-31

- **Fidelity mode:** Reworked the three featured cards around the supplied rental and sale references. Jungheinrich ETV 216i remains the sole rental example with separate daily, weekly and monthly cells; Bosch GBH 2-26 DRE and NSK 6205 are sale listings with one prominent sale-price row each. Ratings and verified badges remain absent.
- The rental figures are visibly qualified as an example 1.6-ton, tax-exclusive rate because the public source is a comparable Hyster R1.6 rather than the pictured model. Exact-model Singapore listings provide the Bosch and NSK figures. Source URLs, tax context and the 31 August 2026 check date are recorded in `app/webstore-2-ai-webstore-preview/PRODUCT-SOURCES.md`; the animation does not claim live stock, availability or a quotation.
- Updated the follow-on Emma dialogue and recommendation summaries so the rotary hammer is treated as a purchase rather than a rental. Desktop 1440×1000, compact 1024×900 and mobile 390×844 browser checks pass with no card or page horizontal overflow; all three cards remain inside the Webstore frame after responsive transitions settle. Targeted ESLint, all 85 regression tests and the production build pass.

### Webstore FAQ and closing CTA order — 2026-08-31

- **Fidelity mode:** Moved the existing “Give Your AI Sales Agent a Connected Catalogue” section intact from immediately before to immediately after the AI Webstore Suite FAQ. It remains the final conversion section before Trusted Partners and the footer; its content, buttons, destinations and responsive design are unchanged.
- The source-level correction uses the existing closing-CTA grid and native FAQ details section, and only moves the CTA when their order is stale. Opening and closing a FAQ does not duplicate or displace it.
- Browser QA at 1440×1000, 1024×900 and 390×844 passes with FAQ → CTA → Trusted Partners order and no page or CTA horizontal overflow. The FAQ interaction was verified at desktop and mobile widths; targeted ESLint, all 85 regression tests and the production build pass.

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

## 2026-08-30 — Pricing cards use a tighter comparison rhythm

Design-mode refinement scoped to the Launch, Growth and Enterprise pricing cards. Reduced the artificial height reserved around the plan description, price and three allowance rows, then tightened the divider and included-feature spacing. The approved prices, allowances, listing limits, features, card order, aligned comparison rows, hover treatment and 54px actions remain unchanged.

At 1440px, each standard monthly card is now 784px tall instead of 905px, a 121px reduction. Annual cards remain aligned at 812px. Browser-inspected at 1440×1000, 1024×900 and 390×844; monthly/annual switching works, all actions remain 54px high, there is no horizontal overflow and the browser console has no warnings or errors. All 69 tests and `git diff --check` pass. No pricing data, copy, entitlement, CTA destination, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — Conventional public heroes share one title-to-header gap

System-mode spacing correction across Pricing, Resources, Antbuildz AI Help, About, Agreements and all eight Who We Serve pages. Their visible H1 now begins 96px below the shared header at 1180px and above, 80px from 768–1179px, and 64px at 767px and below. The rule accounts for the existing Help and About pre-title labels so the title itself, rather than only the hero container, lands on the common line.

Home, AI Sales Agent, AI Webstore Suite, the operational AI Agent Console and the Book a Demo authentication layout retain their approved component-owned header relationships. Browser-measured across every affected route at 1440×900 and across representative page types at 1024×768 and 390×844. Each measured target is exact apart from the Help page's 0.2px font-rendering rounding, every checked page retains one H1 and zero horizontal overflow, and the corrected Pricing hero was visually inspected at desktop and mobile sizes. All 69 tests, the production build and `git diff --check` pass. No title copy, typography, CTA, route, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — Recommendation graphic adopts the cropped Agent-phone treatment

Fidelity-mode refinement scoped only to graphic 04 inside the locked homepage `From your inventory to recommendation` section. Replaced its flat recommendation stack with the approved compact phone language used by the connected-workflow Agent visual: centred device frame, Emma identity header, role-coloured conversation bubbles, supported-record evidence and a softly faded lower edge. The surrounding four-row composition, alternating placement, step copy, typography, spacing and the other three graphics remain unchanged.

The phone uses distinct content rather than repeating the connected-workflow forklift example. It now explains a compact electric scissor-lift option for a 10 m indoor working height and 900 mm access, then flags the 230 kg platform load, availability and hire terms for team confirmation before quotation. Browser-inspected at 1440×900, 1024×768 and 390×844. The phone remains contained inside the established 582×410px, 477×360px and 351×310px process panels; mobile still places the explanation before its graphic, the route retains one H1, every viewport has zero horizontal overflow and the browser console has no warnings or errors. All 69 tests, the production build and `git diff --check` pass. No route, CTA, section layout, shared design token, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — Ingestion graphic shows a readable PDF-to-Markdown handoff

Fidelity-mode refinement scoped only to graphic 01 inside the locked homepage `From your inventory to recommendation` section. The panel now presents a literal three-part ingestion story: an approved Teupen LEO 23GT catalogue PDF, a labelled ingestion handoff and a wider `teupen-leo-23gt.md` knowledge file. The Markdown output visibly preserves a product heading, document type, measurements heading and three pipe-delimited specification rows so visitors can understand what the AI Sales Agent receives after ingestion.

The output ends with `Ready for Agent retrieval`; the former generic mapped-field list has been removed. The supplied Teupen specification reference informed the example values for working height, horizontal outreach and minimum width, without implying a live ingestion or connected catalogue. The surrounding alternating layout, step copy and other three graphics remain unchanged. Browser-inspected at 1440×900, 1024×768 and 390×844. The PDF and Markdown cards fit the established 582×410px, 477×360px and 351×310px panels, all Markdown lines remain unclipped, mobile still places the explanation before the graphic, the route retains one H1, every viewport has zero horizontal overflow and the browser console has no warnings or errors. All 69 tests, the production build and `git diff --check` pass. No route, CTA, section layout, shared design token, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — Reasoning graphic qualifies a vague boom-lift request

Fidelity-mode refinement scoped only to graphic 02 inside the locked homepage `From your inventory to recommendation` section. The buyer now begins with the incomplete request `I need a boom lift.` Instead of presenting an immediate product result, Emma asks for the required platform height and whether the buyer needs a telescopic or articulating boom. The final state remains `Clarify before matching` and explicitly shows that no product has been recommended yet.

This makes the Agent's qualification behaviour visible without making a broad claim about RAG or other AI systems. The surrounding alternating layout, stage copy, spacing and other three graphics remain unchanged.

Browser-inspected at 1440×900, 1024×768 and 390×844. The revised conversation fits the established 582×410px, 477×360px and 351×310px panels, both clarification questions remain readable, mobile still places the explanation before its graphic, the route retains one H1, every viewport has zero horizontal overflow and the browser console has no warnings or errors. All 69 tests, the production build and `git diff --check` pass. No route, CTA, section layout, shared design token, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — Retrieval graphic scans approved listings in sequence

Fidelity-mode refinement scoped only to graphic 03 inside the locked homepage `From your inventory to recommendation` section. The former three generic option rows are now a compact five-record table connected to the preceding boom-lift qualification. It searches by boom type, confirmed platform-height requirement and approved-record status, then scans Toyota 8FBMT50, JCB 540-180, Genie GS-4047, JLG E450AJ and LGMG AR20JE-2 in sequence. The final LGMG row remains visibly identified as the closest supported record and is handed forward as ready to explain.

The example uses the manufacturer/category records already documented in `app/HOME-EQUIPMENT-SOURCES.md`; it does not claim live inventory, availability or final site suitability. The short seven-second native CSS loop highlights one listing at a time and stops under `prefers-reduced-motion`, where the complete table and final outcome remain visible. The surrounding alternating section layout, stage copy and other three graphics remain unchanged.

Browser-watched through a complete scan cycle and inspected at 1440×900, 1024×768 and 390×844. The table and final outcome fit the established 582×410px, 477×360px and 351×310px panels, mobile still places the explanation before its graphic, the route retains one H1, every viewport has zero horizontal overflow and the browser console has no warnings or errors. All 69 tests, the production build and `git diff --check` pass. No route, CTA, section layout, shared design token, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — Process graphics use borderless colour fades

Fidelity-mode refinement scoped only to the four outer graphic panels in the locked homepage `From your inventory to recommendation` section. Removed their former one-pixel outlines and replaced the flat pale fills with stronger stage-colour washes at the top that gradually fade to transparent at the bottom. The existing violet, blue, gold and red stage identities, rounded geometry, inner interface graphics, copy and alternating composition remain unchanged.

Browser-inspected at 1440×900, 1024×768 and 390×844. All four panels report zero-width borders and retain their established 582×410px, 477×360px and 351×310px sizes. Mobile still places every explanation before its matching graphic, the route retains one H1, every viewport has zero horizontal overflow and the browser console has no warnings or errors. All 69 content tests, the production build and `git diff --check` pass. No route, CTA, content, section layout, shared design token, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — Who We Serve process descriptions reduced to four lines

Design and copy-editing refinement applied consistently across all eight Who We Serve routes. Condensed each audience-specific Ingest, Retrieve, Reason and Act description by removing repeated long lists while preserving the industrial criteria, approved-source boundaries, technical review language and route-specific handover outcome. The section headings, four-stage graphics, card order, typography, spacing and responsive composition remain unchanged.

All 32 descriptions were measured at 1440×1000: each now occupies three or four lines instead of the former six, while the supplied Parts & Aftermarket example uses four lines for every card. Parts & Aftermarket was also browser-inspected at 1024×768 and 390×844 with all four cards present, no clipped descriptions, one H1, zero horizontal overflow and clear browser logs. All 70 content tests, targeted ESLint, the production build and `git diff --check` pass. No route, CTA, graphic, shared design token, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — Who We Serve inventory heading uses plain ink

Fidelity-mode refinement applied to the shared `Live inventory intelligence` section across all eight Who We Serve routes. Removed the violet-to-blue-to-gold treatment from the single word `inventory`, so the complete `An AI Sales Agent that knows your inventory` heading now uses one consistent dark heading colour. The route-scoped override leaves the global gradient utility and its use on other public pages unchanged; wording, typography, line breaks, section layout, graphic and supporting copy are unchanged.

Browser-inspected every Who We Serve route at 1440px and the Parts & Aftermarket section at 1440×900, 1024×768 and 390×844. Every route reports a `none` background on the former highlight, `rgb(16, 24, 40)` heading ink and zero horizontal overflow. The representative responsive views retain one H1 and the browser reported no page errors; the existing development-only Remotion licence notice is unrelated to this change. All 71 content tests, targeted ESLint, the production build and `git diff --check` pass.

## 2026-08-30 — Annual pricing rounds upward to whole dollars

Fidelity-mode pricing correction applying the approved display rule that any decimal result in the Annual billing state rounds upward to the next whole US dollar. The discounted monthly equivalents now display as Launch `$40`, Growth `$160` and Enterprise `$320`; the corresponding billed-annually totals display as `$471`, `$1,911` and `$3,831`. Monthly plan prices remain `$49`, `$199` and `$399`, and fixed usage pricing such as `$0.99` per extra conversation remains unchanged because it is not an annual-plan calculation.

Browser-inspected Monthly and Annual switching at 1440×1000, Annual at 1024×900 and Annual at 390×844. The Annual plan price blocks contain no decimal values, retain aligned cards and controls, preserve one H1 and introduce no horizontal overflow. All 71 content tests, targeted ESLint, the production build and `git diff --check` pass. No entitlement, discount percentage, allowance, CTA, layout, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — Retrieval graphic selects the highest confidence score

Fidelity-mode refinement scoped only to graphic 03 inside the locked homepage `From your inventory to recommendation` section. Replaced the former categorical results with a visible `Confidence` column so every scanned listing now returns a numeric match score: 8%, 14%, 21%, 78% and 94%. The LGMG AR20JE-2 row remains the supported result and is now explicitly identified as the highest-confidence record, with the final state reading `94% · highest score selected`.

The seven-second row-by-row scan animation, reduced-motion fallback, five approved example records, surrounding alternating section layout, stage copy and other three graphics remain unchanged. The score represents the graphic's relative match confidence and does not claim live availability or final site suitability.

Browser-inspected at 1440×900, 1024×768 and 390×844. The confidence header, tabular score pills and selected result fit the established 582×410px, 477×360px and 351×310px panels with zero horizontal overflow. All 71 content tests, targeted ESLint, the production build and `git diff --check` pass. No route, CTA, section layout, shared design token, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — Reason stage adopts a distinct industrial teal

Fidelity-mode colour refinement scoped to Step 02 inside the locked homepage `From your inventory to recommendation` section. Replaced the former pale-blue Reason identity with a muted industrial teal (`#0F8F87`) so it is immediately distinguishable from Step 01's violet. The four-stage sequence now reads violet → teal → gold → red across the numbered marker, label, panel fade and inner interface accents.

The stage order, copy, graphic content, borderless fade treatment, alternating composition and responsive order remain unchanged. Browser-inspected at 1440×900, 1024×768 and 390×844. The teal remains visibly separate at every width, the mobile explanation still precedes its graphic and all checked viewports retain zero horizontal overflow. All 71 content tests, targeted ESLint, the production build and `git diff --check` pass. No route, CTA, animation, configuration, service restart, reference-project or deployment change was made.

## 2026-08-30 — Webstore header links open the selected page on first click

Fidelity-mode route correction for the canonical AI Webstore Suite experience. The copied client router was still handling the first click from the public header and rendering its superseded mint `Not Just an AI Sales Agent` page, even though refreshing `/ai-webstore-suite` loaded the selected dark industrial Webstore experience. Added an early native-navigation guard for `/ai-webstore-suite` and its legacy `/webstore` and `/webstore-2` aliases so the canonical product document now loads before the copied router can render the retired page.

Browser-reproduced the failure before the fix, then verified first-click navigation from the 1440×900 desktop header and the 390×844 mobile drawer. Both now show `Extend Your AI Sales Agent with a Connected Webstore`, retain one H1, preserve the canonical `https://antbuildz.ai/ai-webstore-suite` URL and have zero horizontal overflow; the old mint hero is absent. Modified clicks and external destinations retain their native behaviour. All 72 content tests, targeted ESLint, the production build and `git diff --check` pass. No Webstore content, visual, CTA, metadata, route catalogue, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Branded social link previews

Design-mode social-sharing correction across the public site. Replaced the generic 1672 × 941, 2.36 MB industrial illustration previously referenced by homepage sharing metadata with a purpose-built 1200 × 630, 96 KB JPEG. The card uses the approved mountain-logistics hero, Antbuildz.AI wordmark, industrial-sales eyebrow and homepage message, with high-contrast safe-area text for WhatsApp, Facebook, LinkedIn and other large-card previews.

Open Graph now exposes one absolute HTTPS image URL plus the correct 1200 × 630 dimensions, `image/jpeg` MIME type and descriptive alternative text. Twitter/X uses `summary_large_image`. The branded fallback applies to the homepage, product, pricing, resource, About, agreement and AI Help routes; the eight Who We Serve pages retain their more relevant audience photographs. The copied Webstore metadata adapter points to the same current asset.

Local crawler-facing HTML and the served image were verified at `/`, `/ai-sales-agent`, `/ai-webstore-suite` and `/help/ai`. The homepage was browser-inspected at 1440×900 and 390×844 with one H1, the expected metadata and zero horizontal overflow. All 73 content tests, targeted ESLint, the production build and `git diff --check` pass. No page layout, CTA, route, configuration, service restart, reference-project or deployment change was made. The live domain will continue serving its previously deployed preview until this build is published; social platforms may then require their normal cache refresh before an old chat preview changes.

## 2026-08-31 — Homepage hero focuses on better industrial buying

Fidelity-mode copy update scoped to the homepage hero. The two-line title now reads `Make Industrial Buying Better` / `With Antbuildz AI`. The supporting copy uses the user-supplied Industrial AI Sales Agent positioning, covering complex-product understanding, suitable options, qualified enquiries, approved product and inventory data, and a clear handover to the customer's team.

The industrial mountain-logistics image, eyebrow, typography, yellow second line, header, conversation position and animation remain unchanged. The compatibility layer now corrects both existing and newly mounted hero descriptions idempotently, and the source-owned fallback hero plus homepage description metadata use the same approved wording. The 1200 × 630 social card was regenerated to keep the shared link preview consistent with the visible homepage message.

Browser-inspected at 1440×900, 1024×768 and 390×844. The hero retains one H1, exact supporting copy, no visible conversation collision and zero horizontal overflow at each viewport; the mobile hero remains within its established 844px frame. All 73 content tests pass. No CTA, route, pricing, interaction, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Homepage hero reduced to eyebrow and headline

Fidelity-mode copy refinement scoped to the visible homepage hero. The eyebrow now reads `Industrial AI Sales Agent for product-led B2B`; the established two-line title remains `Make Industrial Buying Better` / `With Antbuildz AI`; and the visible supporting paragraph is removed. Homepage SEO and social-sharing descriptions remain available to crawlers and link previews rather than being removed with the on-page paragraph.

The mountain-logistics image, header, conversation, title typography, yellow brand line and existing actions remain unchanged. The compatibility layer updates the eyebrow idempotently and removes any previously mounted hero description. No shared design-system rule, route, CTA, interaction, configuration, service restart, reference-project or deployment change was made.

Browser-inspected at 1440×900, 1024×768 and 390×844. Each viewport shows the exact eyebrow and headline, no visible description, one unclipped H1, the conversation below the title and zero horizontal overflow. Homepage metadata remains present. All 73 content tests and targeted ESLint pass.

## 2026-08-31 — Homepage business-configuration section wording

Fidelity-mode copy update scoped to the four-card section immediately after the homepage hero. The eyebrow remains `Built around your business`; the headline now reads `Your AI Sales Agent` / `Configured Around Your Business`; and the introduction explains how brand, product data, business knowledge, approved processes, Antbuildz Webstore, inventory and supported third-party systems can inform buyer conversations while the team controls Agent use and handover.

The four cards now cover `Brand and sales voice`, `Products and connected inventory`, `Technical and business knowledge`, and `Business knowledge and SOPs`. Their descriptions use the user-supplied approved-source, clarification, business-rule, escalation and human-approval wording. The existing four-card composition and illustrative scenes remain unchanged.

Browser-inspected at 1440×1000, 1024×900 and 390×844. The exact eyebrow, headline, introduction and four card descriptions render without visible clipping; all four cards remain present, the longer title wraps naturally and every viewport has zero horizontal overflow. All 73 content tests, targeted ESLint and `git diff --check` pass.

## 2026-08-31 — Second-section description widened

Fidelity-mode spacing correction scoped to the `Built around your business` homepage introduction. Increased the introduction's desktop maximum width from 940px to 1120px and removed the paragraph's separate 760px cap, allowing the description to use the full introduction frame without changing its type size, line-height, wording or alignment.

At 1440×1000 the description now measures 952px and renders in exactly two lines instead of three. At 1024px and 390px it continues to wrap naturally for readability. Browser inspection reports no text clipping or horizontal overflow at any checked viewport; the four-card layout and all other section styling remain unchanged.

## 2026-08-31 — Business-configuration graphic contained on ultrawide screens

Fidelity-mode containment correction scoped to the homepage's four-card `Built around your business` graphic. Its existing 85% desktop scale and normal desktop/tablet proportions remain unchanged, but the previously uncapped percentage frame now stops at the rendered 1250px content rail instead of continuing to grow beyond the section introduction on ultrawide displays.

Browser-measured at 4904px, 2452px, 1440px, 1024px and 390px widths. At both ultrawide widths the graphic and introduction share the same left and right edges; all four scenes remain inside their cards at every checked width and the document has zero horizontal overflow. All 82 content tests, targeted ESLint, `git diff --check` and the production build pass. No copy, card order, illustration content, interaction, shared design token, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Antbuildz approach copy follows data-to-enquiry flow

Fidelity-mode copy update scoped to the locked four-row homepage process section. The eyebrow remains `The Antbuildz approach`; the headline now reads `From Data to a Recommendation`; and the introduction summarises the path from approved product data through clarification and closest-match identification to a qualified enquiry.

The four steps now read `Ingest — Structure product data`, `Reason — Clarify buyer needs`, `Retrieve — Identify closest match`, and `Recommend — Capture buyer intent`, with the user-supplied descriptions. The accessible ordered-list label follows the same data-to-recommendation narrative. The existing alternating layout, stage order, colours, graphics, confidence-score sequence and responsive composition remain unchanged.

Browser-inspected at 1440×1000, 1024×900 and 390×844. The exact eyebrow, headline, introduction and four step descriptions render with visible overflow rather than clipping, mobile continues to place each explanation before its matching graphic, and all three viewports retain zero horizontal overflow. The longer Retrieve and Recommend descriptions wrap naturally without changing the locked process layout.

## 2026-08-31 — Agent and Webstore section emphasises recommendation accuracy

Fidelity-mode copy update scoped to the homepage's existing connected Agent-and-Webstore section. The eyebrow now reads `AI Sales Agent + Antbuildz Webstore`; the two-line headline reads `Accuracy Matters` / `In Industrial Sales`; and the introduction explains why approved specifications, buyer requirements and connected inventory data matter for the closest supported product match.

The primary card now presents `AI Sales Agent — The core` with the role `Understand and qualify buyers`. The secondary card presents `Antbuildz Webstore — Available as an add-on` with the role `Strengthen product recommendations`. A closing line makes human confirmation explicit: the team confirms technical suitability, availability and commercial terms before quotation. The existing Agent-first card proportions, connector, graphics, destination links and responsive stacking remain unchanged.

Browser-inspected at 1440×1000, 1024×900 and 390×844. All supplied wording renders without text clipping, the Webstore description wraps naturally at each width, the supporting line remains readable and all three viewports retain zero horizontal overflow. No route, CTA destination, pricing, graphic, configuration, service restart, reference-project or deployment change was made.

### Follow-up: supporting sentence removed — 2026-09-01

Fidelity-mode removal scoped to the connected AI Sales Agent and Webstore section on the homepage. Removed the sentence `Your team confirms technical suitability, availability and commercial terms before quotation.` beneath the two product cards, together with its now-unused top-margin style. The cards, descriptions, graphics, connector, links and normal section padding remain unchanged.

Browser-inspected at 1440×900 and 390×844. The sentence is absent from rendered text and the DOM, the next Who We Serve section follows with the normal responsive section spacing, and both viewports retain zero horizontal overflow.

## 2026-08-31 — Who We Serve heading focuses on complex industrial sales

Fidelity-mode copy update scoped to the homepage Who We Serve carousel introduction. The eyebrow remains `Who we serve`; the headline now reads `Built for Complex Industrial Sales`, replacing `Built around the way industrial businesses sell`. The eight audience cards, carousel controls, photography, destinations and responsive behaviour remain unchanged.

Browser-inspected at 1440×1000, 1024×900 and 390×844. The new headline occupies one line at desktop and tablet widths and two balanced lines on mobile, with visible overflow, unchanged carousel geometry and zero horizontal page overflow at every checked viewport. No route, CTA, card copy, graphic, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Homepage hero title aligns with the wordmark rail

Fidelity-mode grid correction scoped to the homepage hero copy column. Its left edge now uses the same responsive rail as the Public Header wordmark: the shared 1280px wide-desktop frame, the 24px compact-desktop inset and the 12px mobile inset. The eyebrow and both title lines move together; their vertical position, typography, wording, background image and lower-right Agent conversation remain unchanged.

Browser-measured at 1440×1000, 1024×900 and 390×844. The logo and hero copy left edges now differ by exactly 0px at all three sizes: 80px, 24px and 12px respectively. The title remains unclipped, the conversation retains its established position, and every viewport has zero horizontal overflow. No route, CTA, copy, image, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Data-to-recommendation heading uses two plain lines

Fidelity-mode typography correction scoped to the homepage `The Antbuildz approach` introduction. Removed the violet-to-blue-to-gold treatment from `Recommendation` so the complete heading uses the standard dark heading colour, and arranged the wording as two intentional lines: `From Data` / `To Recommendation`.

The centred introduction, body copy, four-step alternating composition, graphics, colours and responsive order remain unchanged. The accessible process label now uses the same `from data to recommendation` wording.

## 2026-08-31 — Data protection panel becomes text-only control guidance

Fidelity-mode copy and presentation update scoped to the homepage panel immediately before the FAQ. The eyebrow now reads `Data protection & control`; the headline reads `Control What Your Agent Knows and Uses`; and the body explains approved product data, company knowledge, access, response control and team handover using the user-supplied wording.

The three text-only principles are `Protected Business Information`, `Authorised Access` and `Human Oversight`. Removed the leading shield, all three principle icons and the `Read our privacy policy` action. The existing restrained blue surface, three-column desktop hierarchy, single-column mobile stack and section placement remain unchanged.

## 2026-08-31 — Second-section introduction aligns with the wordmark rail

Fidelity-mode alignment correction scoped to the homepage `Built around your business` introduction. Moved its eyebrow, two-line heading and description out of the narrowed card-grid wrapper and onto the same responsive rail as the Public Header wordmark: the 1280px wide-desktop frame, 24px compact-desktop inset and 12px mobile inset.

The introduction's established type scale, maximum width and wording remain unchanged. The four-card grid retains its compact desktop width, scale, composition, illustrations and responsive stacking.

## 2026-08-31 — Browser tab uses exact extracted Antbuildz letters

Fidelity correction replacing the temporary typed `ai` favicon with glyphs taken from the existing rendered Antbuildz.AI wordmark. The first stylised red `a`, including its original internal detail, and the existing final yellow `i` from the `.ai` suffix are extracted unchanged; neither letterform is typed, traced, recoloured or redrawn.

The extracted mark is presented on the canonical dark surface in a 512 × 512 PNG so both letters remain readable in browser chrome. Shared metadata now declares this exact asset as the site icon and shortcut icon; page titles, social preview artwork, header/footer wordmarks and other product icons remain unchanged.

Chrome's legacy root `favicon.ico` fallback now contains seven exact resized variants of that same approved PNG, from 16px through 256px. The explicit icon and shortcut URLs use a versioned query so Chrome refreshes its cached tab artwork instead of retaining the previous single-letter icon.

Rendered inspection passed at 512 × 512 and the actual 32 × 32 favicon size. The stylised `a` detail remains recognisable, the yellow `i` remains distinct and the live homepage emits the versioned ICO and PNG links. All 74 content tests, targeted ESLint, the production build and `git diff --check` pass. No route, page layout, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Product hero titles align with the Public Header rail

Fidelity-mode alignment correction applied to the AI Sales Agent and canonical AI Webstore Suite heroes. Both hero frames now use the Public Header's responsive outer rail: 1280px centred on wide desktop, 24px side insets on compact desktop and 12px side insets on mobile. The Sales Agent title begins at the wordmark edge while its phone ends at the Book a Demo edge; the centred Webstore H1 frame follows both header edges.

The Sales Agent's generic header spacer was also removed only inside that horizontal flex hero because its 81px height was becoming an unintended 81px side column. The hero's existing route-scoped top padding continues to preserve the approved header breathing room. Typography, wording, vertical positions, phone and Webstore graphics, actions and animation remain unchanged.

Browser-measured and visually inspected at 1440×1000, 1024×900 and 390×844. The hero frames and header rails resolve exactly to 80–1360px, 24–1000px and 12–378px respectively on both routes. Each viewport retains one H1 and zero horizontal overflow.

All 74 content tests, targeted ESLint, the production build and `git diff --check` pass. No copy, CTA, route, graphic, animation, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — AI Sales Agent hero focuses on industrial sales

Fidelity-mode copy update scoped to the `/ai-sales-agent` hero. The two-line headline now reads `The AI Sales Agent` / `Built for Industrial Sales`; the description explains how Antbuildz AI uses catalogue, specification and business knowledge to understand buyer needs, recommend suitable products and prepare quote-ready details; and the primary action now reads `Build Your AI Sales Agent`. The secondary action remains `Book a Demo`.

The existing CTA destinations (`/pricing` and `/book-a-demo`), responsive header rail, phone demonstration, background, animation, typography and layout remain unchanged.

Browser-inspected at 1440×1000, 1024×900 and 390×844. The hero retains one H1, the supplied wording and CTA labels render without clipping, and all three viewports have zero horizontal overflow. All 74 content tests, targeted ESLint, the production build and `git diff --check` pass. No deployment, configuration, service restart or reference-project change was made.

## 2026-08-31 — Sales Agent capabilities move enquiries forward

Fidelity-mode copy update scoped to the second section of `/ai-sales-agent`. Its two-line heading now reads `More Than Answers` / `It Moves Enquiries Forward`, with only `Moves Enquiries Forward` using the established gradient. The introduction now describes clarification, closest-supported-product recommendations and qualified sales or rental enquiries.

The existing six cards retain their layout, graphics, colours, spacing and animation while the progression now reads `Grounded → Connected → Reasoning → Insightful → Controlled → Qualified`. Card titles, descriptions and embedded labels use the supplied approved-product, business-knowledge, closest-match, buyer-intent, response-control and qualified-enquiry wording. Unsupported display scores were replaced with `Closest match`, `Strong alternative`, `Alternative` and `High intent`; the final graphic progresses through confirmed requirements, recommended products, captured intent and qualified enquiry.

Browser-inspected at 1440×1000, 1024×900 and 390×844. The exact headline emphasis, description, six-card progression and revised graphic labels remain legible in the existing composition, and all three viewports retain zero horizontal overflow. All 74 content tests, targeted ESLint, the production build and `git diff --check` pass. No route, CTA, layout, colour, spacing, animation, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — AI Agent Features reflect the customer's sales process

Fidelity-mode copy update scoped to the existing AI Agent Features section on `/ai-sales-agent`. Added the eyebrow `AI AGENT FEATURES`; the two-line headline now reads `Built Around` / `The Way You Sell`, with only the second line using the established gradient; and the description explains the Agent's knowledge, controls, connections, product recommendations, enquiry qualification and multilingual buyer support.

The existing feature-card structure, graphics, wording, order, colours, spacing, animation and responsive behaviour remain unchanged. Browser-inspected at 1440×1000, 1024×900 and 390×844. The eyebrow and headline hierarchy remain centred, the supplied description wraps naturally, and all three viewports retain zero horizontal overflow. All 74 content tests, targeted ESLint, the production build and `git diff --check` pass. No route, CTA, card content, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Enquiry friction focuses on lost momentum

Fidelity-mode copy update scoped to the existing `Why Enquiries Still Slip Through` section on `/ai-sales-agent`. The headline remains unchanged with only `Slip Through` using the established gradient. The revised introduction explains how delayed answers, scattered information and missed requirements cause valuable industrial enquiries to lose momentum.

The existing six cards now cover `Slow First Response`, `Unanswered Product Questions`, `Enquiries Across Channels`, `Scattered Product Knowledge`, `Incomplete Buyer Requirements` and `Follow-Up Without Context`. Their wording focuses on response speed, unresolved product questions, channel fragmentation, dispersed knowledge, incomplete requirements and repeated qualification. The section's six-card layout, graphics, colours, spacing and animation remain unchanged.

Browser-inspected at 1440×1000, 1024×900 and 390×844. The exact supplied copy remains legible within the existing cards, the heading emphasis is limited to `Slip Through`, and all three viewports retain zero horizontal overflow. All 74 content tests, targeted ESLint, the production build and `git diff --check` pass. No route, CTA, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Console section focuses on business configuration

Fidelity-mode copy update scoped to the existing AI Agent Console section on `/ai-sales-agent`. The eyebrow remains `AI AGENT CONSOLE`; the two-line headline now reads `Build an Agent` / `That Knows Your Business`, with only `Knows Your Business` using the established gradient. The revised description explains how customers configure a dedicated AI Sales Agent using product data, business knowledge and sales instructions, including control over answers, recommendations and enquiry handling.

The existing Console demonstration, tab sequence, interface copy, layout, colours, spacing and animation remain unchanged. Browser-inspected at 1440×1000, 1024×900 and 390×844. The supplied copy remains legible, its partial-line gradient is preserved, mobile wraps naturally and all three viewports retain zero horizontal overflow. All 74 content tests, targeted ESLint, the production build and `git diff --check` pass. No route, CTA, tab content, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Connected inventory section uses current-data positioning

Fidelity-mode copy update scoped only to the connected inventory section on `/ai-sales-agent`. The eyebrow now reads `CONNECTED INVENTORY DATA`; the headline is intentionally arranged as `Every Recommendation` / `Backed by Current Inventory`, with only `Current Inventory` using the existing gradient; and the description names Antbuildz Webstore inventory, Google Sheets, Excel and supported third-party systems as sources for current stock and rental availability.

The existing connection graphic, cards, tabular labels, animation, section layout, spacing and typography remain unchanged. Browser-inspected at 1440×1000, 1024×900 and 390×844. The exact supplied copy remains legible, compact and mobile widths wrap naturally, the connection graphic stays present and all three viewports retain zero horizontal overflow. All 74 content tests, targeted ESLint, the production build and `git diff --check` pass. No other page section, route, CTA, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Sales Agent narrative sections gain missing eyebrows

Audit followed by Fidelity-mode completion of the section-introduction hierarchy on `/ai-sales-agent`. Added eyebrows only where a major narrative introduction previously had none: `INDUSTRIAL AI SALES AGENT` for the hero, `AI SALES AGENT CAPABILITIES`, `ENQUIRY CHALLENGES`, `BUYER TOUCHPOINTS`, `QUALIFIED ENQUIRIES` and `AI SALES AGENT FAQS`.

The existing `AI AGENT FEATURES`, `AI AGENT CONSOLE` and `CONNECTED INVENTORY DATA` eyebrows remain unchanged. The closing CTA and footer headings remain action/navigation components rather than receiving narrative eyebrows. All added labels reuse the established red, uppercase 12.16px product-eyebrow treatment and retain each section's original heading, description, graphic, cards, layout, spacing and animation.

Browser-inspected at 1440×1000, 1024×900 and 390×844. All six added eyebrows remain visible, mobile labels fit their section frames and every checked viewport retains zero horizontal overflow. All 74 content tests, targeted ESLint, the production build and `git diff --check` pass. No route, CTA, section copy, graphic, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Sales Agent touchpoints become one connected conversation

Fidelity-mode copy update scoped only to the existing `One AI Sales Agent` touchpoint section on `/ai-sales-agent`. Its eyebrow now reads `ONE AI SALES AGENT`; the two-line headline reads `Turn Every Marketing Touchpoint` / `Into a Conversation`, with only the second line using the established gradient; and the introduction explains how websites, webstores, ads, emails, social posts and QR codes lead buyers into the same AI Sales Agent conversation.

The six existing interactive cards now cover Website & Webstore, Campaigns & QR Codes, Messaging Channels, Email & Sales Outreach, International Enquiries and Shared Business Knowledge using the supplied wording. The editable Website & Webstore illustration now identifies the `AI Sales Agent` as `Online` and uses the supplied three-message forklift qualification exchange. The Knowledge Brain illustration and its Sales Rep, Branch Team, Sales Admin and Manager labels remain unchanged. The existing grid, illustrations, tab behaviour, animation, spacing and responsive composition remain intact.

Browser-inspected at 1440×1000, 1024×900 and 390×844. All six tabs remain interactive and single-select, both desktop and mobile illustration copies update correctly, card text remains unclipped and every checked viewport retains zero horizontal overflow. All 74 content tests, targeted ESLint, the production build and `git diff --check` pass. No other page section, route, CTA, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Qualified-enquiry summary removed from Sales Agent page

Fidelity-mode removal scoped only to the `Help Your Team Take the Next Step` section on `/ai-sales-agent`. The complete section—its `QUALIFIED ENQUIRIES` eyebrow, introduction and Answer / Qualify / Match / Prepare summary—is hidden at the route correction hook and excluded from accessibility navigation without deleting React-owned transferred markup. The preceding touchpoint section now flows directly into the existing FAQ.

Browser-inspected at 1440×1000, 1024×900 and 390×844. The removed section has zero rendered height at every checked size, the touchpoint-to-FAQ transition has no added layout gap and all three viewports retain zero horizontal overflow. All 74 content tests, targeted ESLint, the production build and `git diff --check` pass. No other section, copy, illustration, interaction, CTA, route, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Homepage section titles share the hero rail

Fidelity-mode alignment correction scoped to the source-owned homepage education sections. Their shared outer frame now follows the same responsive rail as the Public Header wordmark and homepage hero title: a centred 1280px frame on wide desktop, 24px side insets on compact desktop and 12px side insets on mobile. This aligns the left edges of `Accuracy Matters In Industrial Sales` and `Built for Complex Industrial Sales` with the hero title while keeping the centred process introduction, section copy, cards, carousel, spacing and responsive behaviour unchanged.

Browser-measured at 1440×1000, 1024×900 and 390×844. The wordmark, hero H1 and both corrected section headings now share exact left positions of 80px, 24px and 12px respectively; every checked viewport retains zero horizontal overflow. All 75 content tests, targeted ESLint, the production build and `git diff --check` pass. No copy, image, CTA, route, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Console introduction uses standard title spacing

Fidelity-mode spacing correction scoped only to the `AI AGENT CONSOLE` introduction on `/ai-sales-agent`. Added the established 18px title-to-description gap used by neighbouring Sales Agent sections while retaining the Console heading's descender clearance, supplied copy, centred alignment, demonstration, animation and responsive composition.

Browser-measured at 1440×1000, 1024×900 and 390×844. The title-to-description gap computes to exactly 18px at every size, the copy remains unclipped and every checked viewport retains zero horizontal overflow. All 75 content tests, targeted ESLint, the production build and `git diff --check` pass. No wording, graphic, animation, CTA, route, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Touchpoint introduction uses two desktop lines

Fidelity-mode width correction scoped only to the `Turn Every Marketing Touchpoint Into a Conversation` description on `/ai-sales-agent`. Increased its centred desktop text frame from the shared 800px cap to 1000px so the approved sentence forms two balanced lines, while preserving its wording, typography, heading, cards, interactions and natural mobile wrapping.

Browser-measured at 1440×1000, 1024×900 and 390×844. The description renders in exactly two lines at both desktop sizes, remains naturally readable on mobile and every checked viewport retains zero horizontal overflow. All 76 content tests, targeted ESLint, the production build and `git diff --check` pass. No wording, card, graphic, animation, CTA, route, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Webstore hero restores its storyboard proportions

Fidelity-mode hero correction scoped to `/ai-webstore-suite`. Restored the animated listing storyboard to its authored 1248 × 760 desktop proportion instead of compressing it into the previous shallow viewport-fitted frame. Reduced the route's H1 maximum from 64px to 56px with a 34px mobile floor, and removed only the duplicate hero CTA row; the shared-header `Book a Demo` action remains available.

Browser-inspected at 1440×1000, 1024×900 and 390×844. The storyboard measures 1248×760px on wide desktop and 976×594px at compact desktop; all three Enrich, Webstore and Agent stages retain the same stable frame. The mobile-specific 366×735px composition remains intact, the hero CTA row has zero rendered size, the page retains one H1 and every checked viewport has zero horizontal overflow. All 77 content tests, targeted ESLint, the production build and `git diff --check` pass. No hero wording, storyboard content, animation timing, header CTA, lower-page CTA, route, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Webstore hero leads with inventory-backed recommendations

Fidelity-mode copy update scoped to the hero on `/ai-webstore-suite`. The eyebrow remains `AI WEBSTORE SUITE`; the two-line headline now reads `Better Recommendations` / `Start With Your Inventory`; and the description explains that structured product and inventory data gives the Agent more accurate recommendations. The complete headline uses one white treatment, with no highlighted or gradient phrase.

The latest approved hero specification explicitly retains `Book a Demo` and `View Pricing`, so the existing two-button row is visible again with its original labels and destinations. The industrial background, reduced 56px title maximum, interactive three-stage workflow, animation timing and restored storyboard dimensions remain unchanged.

Browser-inspected at 1440×1000, 1024×900 and 390×844. The headline keeps its intended two-line structure at every size; both CTA buttons remain visible and touch-friendly; the storyboard continues to measure 1248×760px, 976×594px and 366×735px respectively; the page retains one H1 and every checked viewport has zero horizontal overflow. All 77 content tests, targeted ESLint, the production build and `git diff --check` pass. No other section, navigation item, workflow content, route, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Webstore discovery gap focuses on product identity

Fidelity-mode copy update scoped only to the second section on `/ai-webstore-suite`. Its eyebrow now reads `THE PRODUCT DISCOVERY GAP`; the heading reads `Every Product Needs a Discoverable Identity`, retaining the section's existing emphasis treatment on `Discoverable Identity`; and the description explains how structured product pages help search engines and AI platforms understand, surface and connect products with relevant buyers.

The existing six-card progression retains its Product Pages, SEO & AI Search, Product Data, Buyer Action, Manual Sales and Buyer Speed labels. Card titles and descriptions now cover weak product identity, hidden specifications, fragmented product information, missing enquiry paths, sales-dependent discovery and a slow path to enquiry using the exact supplied wording.

Browser-inspected at 1440×1000, 1024×900 and 390×844. The established three-column desktop grid and one-column mobile stack remain unchanged; every card remains unclipped, the page retains one H1 and all checked viewports have zero horizontal overflow. All 77 content tests, targeted ESLint, the production build and `git diff --check` pass. No illustration, animation, layout, spacing, colour, CTA, navigation, route, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Webstore Market Shift reflects AI-era buyer expectations

Fidelity-mode copy update scoped only to the existing four-card Market Shift section on `/ai-webstore-suite`. Its eyebrow now reads `THE AI-ERA BUYER`; the unhighlighted headline reads `AI Has Changed What Buyers Expect`; and the description states that modern buyers expect searchable products, instant answers and AI-assisted comparison.

The existing numbered cards and their original graphics remain paired in place while the titles now read `Research Starts Online`, `Fast Answers Expected`, `Buyers Compare Independently` and `AI Shapes Shortlists`. Each title contains exactly three words. The supplied card descriptions contain 9, 9, 11 and 9 words respectively, keeping every one below the requested 12-word maximum.

Browser-inspected at 1440×1000, 1024×900 and 390×844. The established four-column desktop composition and one-column mobile stack remain unchanged; the former heading-highlight span contains no visible text; all cards remain unclipped; the page retains one H1 and all checked viewports have zero horizontal overflow. All 77 content tests, targeted ESLint, the production build and `git diff --check` pass. No numbering, graphic, animation, colour, typography, spacing, CTA, navigation, route, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Webstore and Agent turn discovery into recommendations

Fidelity-mode copy update scoped only to the existing connected Agent section on `/ai-webstore-suite`. Its eyebrow now reads `WEBSTORE + AI SALES AGENT`; the headline reads `Turn Discovery Into Recommendations`, retaining the section's established gradient treatment only on `Recommendations`; and the description explains how structured product data supports suitable recommendations and buyer-intent capture.

The existing sales-cycle graphic, three stage controls, `See How the AI Sales Agent Works` link, layout, spacing, typography and animation remain unchanged. Browser-inspected at 1440×1000, 1024×900 and 390×844. The supplied copy remains unclipped in the desktop two-column and mobile stacked compositions; the page retains one H1 and all checked viewports have zero horizontal overflow. All 77 content tests, targeted ESLint, the production build and `git diff --check` pass. No other section, graphic, interaction, CTA, navigation, route, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Webstore benefits connect discovery to enquiry

Fidelity-mode copy update scoped only to the existing six-card benefits section on `/ai-webstore-suite`. Its eyebrow now reads `DISCOVERY TO ENQUIRY`; the headline reads `Make Every Product Discoverable and Sales-Ready`, retaining the established gradient treatment on `Discoverable and Sales-Ready`; and the description explains that structured product pages help buyers discover, compare and enquire.

The six existing cards retain their graphics, numbering, colours, layout, spacing and animation while their copy now covers greater product visibility, higher enquiry conversion, wider multilingual reach, more accurate recommendations, less manual work and lasting organic presence. The description receives a section-scoped 1000px desktop frame and renders in one line at both checked desktop sizes, remaining within the requested two-line maximum without truncation. Browser-inspected at 1440×1000, 1024×900 and 390×844. All six card titles and descriptions remain inside their cards, the mobile stack remains 342px wide, the page retains one H1 and every checked viewport has zero horizontal overflow. All 78 content tests, targeted ESLint, the production build and `git diff --check` pass. No other section, graphic, interaction, CTA, navigation, route, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Redundant Webstore inventory section removed

Fidelity-mode removal scoped only to the `An AI Sales Agent that knows your inventory` section on `/ai-webstore-suite`. The complete shared inventory block—its eyebrow, heading, description and animated connection graphic—is hidden from rendering and accessibility navigation without deleting the transferred source component.

The preceding `Make Every Product Discoverable and Sales-Ready` benefits section now flows directly into `From Search to Sales-Ready Enquiry`. Browser-inspected at 1440×1000, 1024×900 and 390×844. The removed section has zero rendered height and no client rectangles at every checked size; the remaining transition keeps only its normal adjacent-section rhythm, the page retains one H1 and every checked viewport has zero horizontal overflow. All 78 content tests, targeted ESLint, the production build and `git diff --check` pass. No other section, copy, graphic, interaction, CTA, navigation, route, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Webstore workflow follows discovery through enquiry

Fidelity-mode copy update scoped only to the existing six-step `HOW IT WORKS` section on `/ai-webstore-suite`. Its headline now reads `From Product Discovery to Enquiry`, retaining the established emphasis treatment on `Enquiry`, and its introduction explains how structured product data supports discovery, comparison, recommendations and enquiries.

The original alternating timeline, numbered markers, animated illustrations, colours, spacing and CTA row remain unchanged. Its six steps now progress through Discover Products, Ask Questions, Understand Needs, Match Products, Recommend Products and Submit Enquiry, with the supplied Webstore, AI Sales Agent and Sales Team ownership labels retained on their appropriate stages. Browser-inspected at 1440×1000, 1024×900 and 390×844. All six cards and ownership chips remain unclipped, the page retains one H1 and every checked viewport has zero horizontal overflow. All 78 content tests, targeted ESLint, the production build and `git diff --check` pass. No other section, graphic, interaction, CTA, navigation, route, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Webstore features use one clear description

Fidelity-mode copy update scoped only to the existing `AI WEBSTORE SUITE FEATURES` section on `/ai-webstore-suite`. The section now uses the approved `What the Webstore Includes` headline, concise introduction and six supplied feature titles and descriptions. Each feature's former secondary mini-title is hidden from rendering and accessibility navigation, leaving one main title and one description per card. The supplied plan-and-setup availability note is shown beneath the existing feature sequence.

The original six-card order, numbering, SVG source paths, graphic pairings, dimensions, cropping, colours, typography, animation wrappers, desktop alternating composition and mobile stack remain unchanged. Browser-inspected at 1440×1000, 1024×900 and 390×844. All copy blocks remain unclipped, removed mini-titles occupy zero space, every checked viewport retains zero horizontal overflow and the page retains one H1. All 78 content tests, targeted ESLint, the production build and `git diff --check` pass. No other section, graphic, asset, interaction, CTA, navigation, route, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Public page rails follow Antbuildz.com

System-mode alignment update across the public Antbuildz AI site. The live Antbuildz.com header and content edges establish a centred 1250px maximum rail with 5vw side gutters below that maximum. The shared Public Header, homepage hero and source-owned sections, AI Sales Agent hero, canonical AI Webstore Suite hero and outer sections, pricing cards, Who We Serve pages and source-owned public containers now use that same `min(1250px, 90vw)` contract.

Narrow reading columns, internal card padding, dropdown panels, product demonstration dimensions and the operational AI Agent Console remain component-owned. At the local 1280px rendered viewport, the wordmark, Book a Demo utility, homepage H1, Sales Agent hero, Webstore hero, pricing frame and Who We Serve hero now share exact 64px outer anchors with no horizontal overflow. The responsive CSS contract keeps 5vw gutters at tablet and mobile sizes. All 79 content tests, targeted ESLint, the production build and `git diff --check` pass. No copy, graphic, animation, CTA destination, route, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Webstore comparison distinguishes the Agent from the connected Suite

Fidelity-mode copy update scoped only to the existing comparison section on `/ai-webstore-suite`. The section now uses the supplied `SEE THE DIFFERENCE` eyebrow, `Start With the Agent. Expand With the Webstore.` headline, supporting description and closing note. The first product column is `AI Sales Agent`; the second is `+ AI Webstore Suite`, making the additive product relationship explicit without a secondary label.

The existing desktop grid and mobile comparison-card component now carry the same eight supplied rows: Best For, Knowledge Source, Buyer Experience, Product Recommendations, Online Discovery, Marketplace Exposure, Sales Workflows and Long-Term Value. One existing row shell is cloned to accommodate the additional supplied row, preserving its inherited classes, spacing and responsive treatment. The existing Webstore emphasis stays paired with the `+ AI Webstore Suite` column after repeated copy passes and remounts.

Browser-inspected at the available 1280×720 desktop viewport. The complete table and closing note remain aligned and unclipped with zero horizontal page overflow. The hidden responsive DOM was also checked: all eight mobile cards use the same row order and place `AI Sales Agent` before `+ AI Webstore Suite`; no responsive CSS was changed. All 79 content tests, targeted ESLint, the production build and `git diff --check` pass. No graphic, animation, colour, typography, CTA, navigation, route, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Sales Agent hero description uses two desktop lines

Fidelity-mode copy refinement scoped only to the `/ai-sales-agent` hero description. The shorter sentence retains the core path from product questions to qualified sales or rental enquiries, suitable product matches and quote-ready details, while removing the longer supporting explanation.

Browser-measured at 1440×1000, 1024×900 and 390×844. The description renders in exactly two lines at both desktop sizes and wraps naturally to three lines on mobile, with no horizontal overflow. The hero heading, CTAs, image, conversation, typography and layout remain unchanged.

## 2026-08-31 — Sales Agent hero cycles through five restrained themes

Fidelity-mode animation refinement scoped to the `/ai-sales-agent` hero conversation. Removed the transferred neon four-corner rainbow treatment and replaced it with five light, single-accent themes drawn from the approved Antbuildz palette: slate, violet, blue, gold and brand red. The themes advance every two seconds with the existing smooth colour transition; users who prefer reduced motion receive a stable slate treatment.

Browser-exercised through the complete theme sequence at 1440×1000 and inspected at 1024×900 and 390×844. Each transition after the initial partial interval occurred at approximately two seconds, product cards and conversation text remained readable in every treatment, reduced-motion mode stayed fixed on slate and all three viewports retained zero horizontal overflow. All 83 content tests, targeted ESLint, the production build and `git diff --check` pass. No conversation copy, product card, CTA, layout, route, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Sales Agent touchpoint cards align to one content rail

Fidelity-mode refinement scoped to the six interactive touchpoint cards on `/ai-sales-agent`. Every card now anchors its icon, title and description to the same top position instead of vertically centring shorter copy, so the icon rows remain aligned across each two-card pair. Card descriptions use a more compact 14px size with a readable 1.55 line-height.

The existing grid, titles, descriptions, icon artwork and colours, selected state, preview illustration and interaction remain unchanged. Browser-inspected at 1440×1000, 1024×900 and 390×844: every icon uses the same 21px card-top offset at all three sizes, all descriptions resolve to the intended 14px scale, the active-card preview still updates and every viewport retains zero horizontal overflow. All 84 content tests, targeted ESLint, the production build and `git diff --check` pass. No copy, illustration, animation, CTA, navigation, route, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Sales Agent closes with a contained industrial CTA

Design-mode redesign scoped to the final CTA on `/ai-sales-agent`. The former full-width animated grid and six scattered capability cards are replaced by one contained editorial composition inspired by the supplied reference: the established tablet-and-inventory photograph leads on the left, while the action panel sits on the right. Reversing the reference's image position and adding a compact `Catalogue → Qualification → Handover` cue gives the section its own industrial-sales presentation.

The headline remains `Build Your AI Sales Agent`; the existing `Build Your AI Agent` and `Book a Demo` actions keep their original destinations. The new supporting sentence is limited to the approved product, qualification and handover workflow. Desktop uses the shared 1250px public rail; compact and mobile layouts stack the image above the action panel with touch-friendly buttons.

Browser-inspected at 1440×1000, 1024×900 and 390×844. The image loads at its full 1672×941 source size with useful alternative text, the inserted media remains idempotently singular, both actions retain 56px touch height, native destinations and a visible 2px focus outline, and every viewport retains one H1 with zero horizontal overflow. All 85 content tests, targeted ESLint, the production build and `git diff --check` pass. No header, FAQ, footer, route, configuration, service restart, reference-project or deployment change was made.

## 2026-08-31 — Webstore hero actions removed

Fidelity-mode removal scoped only to the two-button action row in the `/ai-webstore-suite` hero. `Book a Demo` and `View Pricing` no longer render beneath the hero description. The shared-header `Book a Demo` utility and `Pricing` navigation item remain available, while the hero heading, description, background and interactive Webstore storyboard retain their existing composition.

Browser-inspected at 1440×1000, 1024×900 and 390×844. The removed action wrapper has zero width, height and visible links at every size; the storyboard closes the former gap naturally, each viewport retains one H1 with zero horizontal overflow, and desktop keeps both shared-header destinations visible. All 85 content tests, targeted ESLint, the production build and `git diff --check` pass. No header, storyboard content, animation, lower-page CTA, route, configuration, service restart, reference-project or deployment change was made.

## 2026-09-01 — Sales Agent closing CTA uses an active consultation photograph and continuous fade

Design-mode refinement scoped to the final CTA on `/ai-sales-agent`. Replaced the passive tablet-review photograph with a purpose-built industrial consultation scene: the sales specialist now points to a product option while guiding a buyer in a parts warehouse. The new 1672×941 JPEG retains the established warm industrial photography and restrained red clothing accent, includes useful alternative text and is compressed to approximately 320 KB.

The former straight image-to-copy boundary is replaced by one continuous pale-soft surface. Desktop and compact layouts extend the photograph beneath the action panel and fade it horizontally into the shared background; mobile stacks the same composition and fades vertically into the copy. The workflow caption moves into the lower faded area on mobile so it does not cover the specialist's face. The headline, description, CTA wording and destinations remain unchanged.

Browser-inspected at 1440×900, 1024×900 and 390×844. The subject, buyer and tablet remain readable, both fade directions resolve without a hard seam, the final JPEG loads at its authored dimensions and every checked viewport retains zero horizontal overflow. All 88 content tests, targeted ESLint, the production build and `git diff --check` pass. No header, FAQ, footer, route, configuration, service restart, reference-project or deployment change was made.

## 2026-09-01 — Webstore conversation qualifies one realistic mixed-product enquiry

Fidelity-mode copy refinement scoped to the animated phone conversation in the `/ai-webstore-suite` hero. The buyer now asks for a warehouse reach truck, a rotary hammer and 6205 bearings. Emma distinguishes one rental option from two sale products, qualifies the truck's load capacity, lift height, aisle width and hire period, then records the Jurong delivery request and purchase quantities before handing configuration, availability, delivery and final pricing to the sales team.

All dialogue now uses complete, natural sentences and keeps commercial boundaries explicit: the illustrated truck may suit the requirements subject to mast configuration and availability, while the sales team retains final confirmation. Product-card wording also uses the grammatically correct singular `Sale` label. The animation's staged scroll positions were adjusted so the longer qualification and handover replies remain inside the phone at each beat.

Browser-inspected at 1440×900, 1024×900 and 390×844. The rental and final sales replies remain visible inside the phone, the mobile page retains zero horizontal overflow and no other section changes. All 88 content tests, targeted ESLint and the production build pass. No route, configuration, service restart, reference-project or deployment change was made.

## 2026-09-01 — Final phone and tablet graphic audit

Audit mode covered the 18 core public route types at 390×844 and 768×1024: Home, AI Webstore Suite, AI Sales Agent, AI Agent Console, Pricing, Resources, AI FAQs, About, Book a Demo, Agreements and all eight Who We Serve pages. The graphic-heavy Home, Agent, Webstore, Pricing, Rental and Console layouts also received representative 1024×900 checks. Every route retained one H1 and zero document-level horizontal overflow; no visible graphic failed after lazy-loaded media was brought into view. The Webstore audit exercised its full 23,279px mobile page and loaded all 35 images. Intentional carousel continuation and the collapsed Console sidebar remain the only off-canvas media.

The persistent AI Agent launcher was the only shared obstruction found. Its transferred 252–304px label covered mobile and tablet card content, so it now compacts below the established 980px navigation breakpoint to a 56px circular Emma control anchored 16px from the right edge. The accessible `Open AI Agent` name remains intact, the control opens the existing full-screen mobile Agent panel, and the labelled 252px launcher returns at 1024px and above. Browser rechecks at 390×844, 768×1024 and 1024×900 confirmed the breakpoint, touch target and zero overflow.

All 89 content tests, targeted ESLint, the production build and `git diff --check` pass. No route, copy, product graphic, pricing data, configuration, service restart, reference-project or deployment change was made.

## 2026-09-01 — Header demo action is smaller and lighter

Fidelity-mode refinement of the shared Public Header `Book a Demo` action. The header utility now uses a consistent 44px height, 14px label and 18px horizontal padding on desktop and standard mobile widths, instead of inheriting the 54px content-CTA scale or the former 48px mobile exception. Its fill is a pale mix of the approved Antbuildz yellow and clean surface, with a slightly stronger yellow hover state and unchanged dark text, focus outline, wording and `/book-a-demo` destination.

At 359px and below, the action retains the accessible 44px touch height while using a 13px label and 14px horizontal padding so the wordmark, action and menu trigger remain contained. Content CTAs keep their existing 54px primary treatment.

Browser-inspected on Home at 1440×900, 1024×900, 390×844 and 320×740, plus both product pages at 390×844. The action measures 44px at every checked size, retains its canonical destination, remains clear on dark image surfaces and introduces no horizontal overflow. The 320px header retains 8px between the wordmark and action and 4px before the menu trigger. All 89 regression tests, targeted ESLint, the production build and `git diff --check` pass.

## 2026-09-01 — Sales Agent closing CTA uses one uninterrupted action panel

Fidelity-mode refinement scoped to the final CTA on `/ai-sales-agent`. The floating `Approved Product Knowledge` caption has been removed from the photograph so the consultation scene remains uncluttered. At wide desktop sizes, the action panel begins further left and has a wider text rail, allowing `Build Your AI Sales Agent` to remain on one line inside the card.

The established horizontal image fade, supporting description, `View Pricing` and `Book a Demo` actions and their destinations remain unchanged. Tablet and mobile retain the existing stacked composition and natural heading wrapping.

Browser-inspected at 1440×900, 1180×900 and 390×844. The heading remains one line at both desktop widths, the smallest wide-desktop frame has no text overflow, the mobile image and copy remain correctly stacked and all checked viewports retain zero horizontal overflow. All 90 regression tests, targeted ESLint, the production build and `git diff --check` pass.

## 2026-09-01 — Direct email enquiry path across public pages

System-mode contact-path addition across the public site. `Book a Demo` remains the primary conversion action, while the closing AI Sales Agent and AI Webstore Suite action panels now provide a restrained direct-email alternative. The shared footer displays the verified `help@antbuildz.ai` address on every public page, so buyers who are not ready to schedule can still contact the team directly.

The email action uses a prefilled `Antbuildz AI sales enquiry` subject, a 44px accessible link target and a tertiary underlined treatment rather than a competing third pill button. No new inbox, form, external service, header control, route, configuration or deployment was introduced.

Browser-inspected at 390×844 on both product pages and on Home, Pricing, Resources and About. Each route renders one footer email, each product closing panel renders one direct-email alternative, and every checked page retains zero horizontal overflow. All 92 regression tests, targeted ESLint, the production build and `git diff --check` pass. The full-repository lint command remains unsuitable because it scans the transferred minified bundles under `public/`, which contain unrelated pre-existing generated-code violations.

### Follow-up: direct email uses a recognisable contact pattern — 2026-09-02

System-mode refinement of the shared direct-email alternative on the AI Sales Agent and AI Webstore Suite closing panels. The awkward `Prefer email?` prompt and underlined text are replaced by one compact contact link containing a decorative envelope icon, the clear `Email Us` label and the visible verified `help@antbuildz.ai` address. The whole component is interactive, retains the prefilled enquiry subject, a 52px target and a visible keyboard focus state, while its pale surface remains subordinate to `Book a Demo` and `View Pricing`.

The pattern follows accessibility guidance to use descriptive link text, keep a supporting icon decorative when adjacent text already supplies its meaning, and expose the actual email address as an alternative contact channel. Browser inspection on AI Webstore Suite at 1440×900, 1024×768 and 390×844, plus AI Sales Agent at 1440×900, confirms one correctly labelled email link per closing panel, a 52px target, the canonical prefilled destination and zero horizontal overflow. All 95 regression tests, targeted ESLint, the production build and `git diff --check` pass. No inbox, commercial wording, route, integration, configuration or deployment was changed.

## 2026-09-01 — Pricing plans follow one cumulative product path

Copy-only pricing refinement scoped to `/pricing`. The three standard plans are now named `Agent`, `Sales` and `Rental+`, with subtitles that state the included product clearly. Card descriptions, best-fit guidance, features and actions now explain a cumulative upgrade path: Sales contains Agent plus a Sales Store, while Rental+ contains Sales plus rental inventory, rates, availability and booking workflows. Existing monthly and annual prices, AI-conversation allowances, listing allowances, billing behaviour, purchased credits, the Custom option and the pricing hero title and description are unchanged.

The former split comparison is consolidated into one continuous 21-row table with `Feature`, `Agent`, `Sales` and `Rental+` columns. Checkmarks and dashes make the package inheritance visible without introducing new claims. Desktop browser QA at 1440×900 confirms all standard-card copy is visible, the comparison has one visible table with the expected 21 rows and the document has no horizontal overflow. The Annual selector still displays the approved annual totals and savings before returning cleanly to Monthly. Mobile/tablet card and table containment remain covered by the existing responsive rules and updated regression assertions. All 92 regression tests, targeted ESLint, the production build and `git diff --check` pass.

### Follow-up: pricing cards and comparison made easier to scan — 2026-09-01

Each standard-plan card now uses one concise outcome-led description. Detailed product knowledge, Sales Store and rental capabilities remain in the existing feature lists, best-fit guidance, FAQs and comparison instead of being repeated in the opening paragraph. The shorter content rail reduces the aligned positioning area from 218px to 150px without changing pricing, allowances, billing or actions.

The comparison retains one table and the same 21 rows. Feature names now form a left-aligned reading rail, Sales and Rental+ receive restrained blue and yellow column tints, and subtle rules mark where Sales Store and rental capabilities begin. The treatment follows the existing clean surface, semantic colour tokens and responsive scroll container. Browser inspection at 1280×720 confirms aligned 150px card-copy rails, unclipped wording, left-aligned 24px feature cells, visible tier separators and zero page overflow. All 92 regression tests, targeted ESLint, the production build and `git diff --check` pass.

### Follow-up: package descriptions moved to the feature area — 2026-09-01

The upper positioning area of every pricing card now contains only the product subtitle and `Best for` guidance. Each concise package description appears after the price, allowance details and action, immediately before its included-feature heading and feature list. This keeps plan suitability prominent at the top while placing capability explanation beside the detailed inclusions. The aligned standard-plan top rail is reduced to 92px; pricing, allowances, actions and feature wording remain unchanged. Browser inspection at 1280×720 confirms the requested order on Agent, Sales, Rental+ and Custom, no clipped positioning text and zero horizontal overflow. All 92 regression tests, targeted ESLint, the production build and `git diff --check` pass.

### Follow-up: Best-for guidance uses the full card rail — 2026-09-01

Fidelity-mode correction scoped to the pricing cards. Removed balanced wrapping from the `Best for` guidance and explicitly kept its text rail at the full available card width, so the wording now continues towards the right edge before wrapping naturally. Plan copy, card heights, prices, allowances, actions and comparison content remain unchanged. Browser inspection at 1280px confirms full-width wrapping on Agent, Sales, Rental+ and Custom with no page overflow.

### Follow-up: plan allowances use one horizontal strip — 2026-09-01

Fidelity-mode pricing-card refinement. The three details below each price—Included AI conversations, Listings and Extra conversations—now share one equal three-column row, with each label stacked above its value and subtle separators between columns. The strip keeps natural word wrapping at narrow widths and does not change any approved price, allowance, listing limit or commercial wording. Browser inspection at 1280px confirms aligned columns across Agent, Sales, Rental+ and Custom with zero horizontal overflow.

### Follow-up: pricing closes with a light conversion card — 2026-09-01

Design-mode refinement scoped to the final Pricing CTA. The former black panel is replaced by a clean-to-soft Antbuildz surface with a restrained violet–blue–yellow top accent, subtle border and soft depth. Its primary action now uses the canonical yellow `Book a Demo` treatment and `/book-a-demo` destination; the secondary clean outline is `Email Sales` and opens the existing sales-enquiry address. Agent retains `Start Here`, Sales retains the yellow `Most Popular` tag and Rental+ retains `Best Value`. Browser inspection at 1280px confirms the light panel, 54px pill actions, all three visible plan tags and zero horizontal overflow; the demo action was exercised successfully.
## 2026-09-03 — Pricing feature inclusions reflect the approved package contents

Copy-only pricing update scoped to the included-feature lists on `/pricing`.
Agent now lists its dedicated AI terminal, website chat embed, knowledge,
recommendation, lead monitoring, multilingual, setup and spreadsheet features.
Sales and Rental+ use the approved concise Webstore, listing, domain, search,
translation, product-link and inventory wording; Rental+ also includes its
rental booking system. Both upgrade cards now use `Everything in Agent, plus:`
as supplied. Prices, allowances, actions, Custom, usage notes and the detailed
feature-comparison table are unchanged.

Rendered QA at 2048×1152, 1024×768 and 390×844 confirms all 8/7/8 supplied
features render, the standard cards remain aligned at tablet width, the mobile
cards stack without clipped copy, and every checked viewport has zero
horizontal overflow. All 97 regression tests, targeted ESLint, the production
build and `git diff --check` pass.

### Sales Agent capabilities — white surface

The AI Sales Agent capabilities section (`.bright-features.bento-section`)
uses the clean white token, as requested. Scoped source CSS preserves the
existing cards, copy and spacing. Browser checks at 1440px and 390px confirmed
`rgb(255, 255, 255)`; screenshots inspected at both widths.

The Sales Agent Enquiry Challenges section (`.pain-bento-section`) also uses
solid clean white, replacing its gradient. Verified white with no background
image at 1440px and 390px and visually inspected both layouts.

Connected Inventory Data (`.flexible-ai-platform`) and Marketing Touchpoints
(`.dt-section-embedded`) on AI Sales Agent also use solid clean white, per the
user request. Both section gradients are removed via scoped source CSS.
Verified computed white surfaces without background images and inspected
both sections at 1440px and 390px; illustrations and content are preserved.

### Shared footer contact action — 2026-09-05

The direct `Email Sales` contact card has been removed from the final AI Sales
Agent and AI Webstore Suite CTA panels. The shared footer now presents one
compact `Email Us` button beneath the Antbuildz AI brand statement. It opens a
prefilled `help@antbuildz.ai` enquiry email and preserves the existing primary
CTA hierarchy in the product closing sections.

Desktop and mobile browser checks confirm one footer action, no remaining CTA
email cards and no horizontal overflow on both product pages.

## 2026-09-05 — Resources follow the Agent-first product model

Audit-to-design update scoped to `/resources` and its educational articles. The
library now presents the AI Sales Agent as the core product for buyer
conversations, qualification, recommendations and handover. Antbuildz Webstore
is explained as an optional supporting system that adds structured product
pages, specifications and inventory context; its dedicated product URLs also
support SEO and AI search discovery.

The resource hero, product-model explainer, Webstore collection, selected
article titles and descriptions, conflicting article passages, related-reading
labels and closing actions now use that hierarchy. Search metadata and
`llms.txt` use the same positioning. Readable canonical article URLs are bridged
to the transferred resource content during startup, then restored after the
article renders without leaving the route transition layer visible. Visible
resource collections are numbered 01–05.

Browser-inspected at 2560px and 390×844 on the library and a representative
Webstore-support article. Canonical direct loading, rewritten copy, responsive
containment and zero horizontal overflow were verified. All 109 regression
tests, targeted ESLint, the production build and `git diff --check` pass.
