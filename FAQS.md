# Antbuildz AI FAQ ownership and audit

Audited locally on 6 September 2026. This document covers public Antbuildz AI
FAQs, article FAQs and retained fallback content. It is an editing guide, not a
new source of commercial terms.

## Approved terminology

- **AI Agent**: core product for complex product businesses.
- **AI Sales Agent**: sales use case, delivered by the **Sales Specialist** role.
- Other roles: **Product Specialist**, **Customer Service**, **Technical Support**
  and **After-Sales Support**.
- **Agent**, **Sales**, **Rental+**: subscription plans. Sales adds AI Webstore
  Suite sales capabilities; Rental+ includes sales plus rental capabilities.
- **AI Webstore Suite**: connected product, inventory and store layer.
- **AI Agent Console**: knowledge, instructions, testing, conversations and control.

Industrial equipment, B2B sales and rental remain the strongest specialisations.
Relevant examples also include instruments, electronics, components and technical
consumer products such as 3D printers. Keep specific industry FAQ examples;
avoid describing the entire product as industrial-only or sales-only.

## Where to edit

| Surface | Inventory | Editable source |
| --- | --- | --- |
| AI Help Centre `/help/ai` | 96 distinct questions, seven topic groups | `lib/help-faq-content.ts` |
| Homepage | Five questions | `HOME_QUESTIONS` in `app/home-education.tsx` |
| Core product `/ai-sales-agent` | Eight questions | `lib/core-agent-faqs.ts`, applied by `lib/ai-sales-agent-copy.ts` |
| AI Webstore Suite | Six questions; five answer overrides | `WEBSTORE_FAQS` in `lib/ai-webstore-copy.ts`; sixth setup answer retains existing wording |
| Pricing | Six questions | `PRICING_FAQS` and `PRICING_USAGE_COPY` in `app/original-antbuildz-app.tsx` |
| Eight industry pages | 77 placements, 34 shared question definitions | `lib/industry-faq-content.ts` |
| Learning articles | 229 questions across 29 articles | FAQ sections in `public/resource-articles/content/*.html` |
| Shared article fallback | 35 question definitions, used by transferred article templates | FAQ entries in `BODY_REPLACEMENTS` in `lib/resource-copy.ts` |
| Retained source fallback pages | Eight reusable questions plus three getting-started questions | `agentFaqs` in `lib/site-content.ts`; `FaqPage` in `app/site.tsx` |

The Help Centre UI (`app/help/ai/help-centre.tsx`) and FAQPage structured data
(`app/help/ai/page.tsx`) consume the same data. Search covers questions, answers
and reference labels across both tabs. Subscription questions appear under both
tabs but occur once in the data and schema. Preserve the stable question IDs.

The public Help Centre no longer depends on uneditable copied FAQ data. It
reuses the existing Help Centre stylesheet and shared public header/footer.
Other transferred pages retain their existing controls and use source-owned
wording corrections. Do not edit minified files in `public/assets`.

## Audit changes

Aligned core product, role, plan and Console names; clarified optional Webstore
use; included broader complex product examples; and kept industrial examples.
Support FAQs now allow resolution or human handover without sales qualification.
Article FAQs no longer promise automatic learning, guaranteed prevention of
repeat errors, a fixed improvement timeline or an unsupported 80% automation
figure. Existing non-FAQ article passages were not rewritten by this audit.

Help reference links point to existing canonical product, role, industry,
pricing, agreement and article URLs. All 18 distinct destinations returned 200.
The core product URL remains `/ai-sales-agent`. No route catalogue change was
needed, so sitemap, robots and llms entries remain valid.

Marketplace-only help entries belong on antbuildz.com and remain excluded from
the AI Help Centre UI and schema. The four formerly hidden AI/Marketplace crossover
entries are also excluded from its 96-entry source. Merchant-authored sample store
FAQs and marketplace insurance FAQs are not Antbuildz AI product statements.
Retired AI Platform FAQs remain in the read-only transferred bundle; that public
route redirects to the homepage. Console feature guides without dedicated FAQ
sections were checked as supporting context; no new FAQ sections were added.

## Commercial item requiring confirmation

The existing Pricing FAQ retains **S$49/month per additional Agent**. The main
plan display uses USD, so confirm the approved add-on price and currency before
changing this statement. No price or entitlement was inferred or converted.
Pricing remains the source of truth for allowances, purchased credits and
Auto Top-Up. Removed the contradictory reference to earliest-expiring credits:
purchased credits do not expire and follow the monthly included allowance.

## Maintenance and checks

When changing a product fact, search its wording across these sources and update
all applicable answers together. Keep original-string lookup keys intact on
transferred pages. Edit only replacement values unless the transferred source
itself changes. Commercial changes require an approved Pricing/terms source.

Keep answer claims within configured knowledge, supported connections and plan
limits. Route requests for people and unresolved technical or commercial
questions to the appropriate team. Use British English and useful internal links.

Validation includes the automated FAQ source, search, industry idempotence and
article naming/count checks in `tests/site-content.test.mjs`, plus browser checks
for accordion expansion, both Help tabs, keyboard selection, search, links,
metadata and responsive rendering. Run the project tests, lint and build after
editing; inspect representative desktop and mobile answers before publishing.
