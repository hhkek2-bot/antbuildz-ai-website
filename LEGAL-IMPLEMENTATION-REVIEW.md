# Antbuildz AI legal implementation review — 4 September 2026

## Status and scope

Implemented locally, not deployed. This is a launch-oriented draft framework,
not a legal opinion or a guarantee of enforceability. Singapore counsel and
the product/data-protection owner should approve the terms and verify the
operational commitments below before publication or obtaining acceptance.
The production website could not be retrieved through the research browser;
verification here covers this repository and localhost:8081, not production.

## Documents and navigation

| Document | Action | Canonical route |
| --- | --- | --- |
| Terms of Service | Amended existing document | `/agreements/terms` |
| Privacy Policy | Amended; incorporates cookies and analytics | `/agreements/privacy` |
| Data Processing Addendum | Amended existing document | `/agreements/dpa` |
| Acceptable Use Policy | Added, with safety-critical restrictions | `/agreements/acceptable-use` |

The existing `/agreements` hub remains. No separate refund, billing, credit,
subscription, AI-disclaimer, SLA, security or subprocessor page was added.
The former Cookie Policy is consolidated, not duplicated: `/agreements/cookies`
and `/legal/cookies` permanently redirect to `/agreements/privacy#cookies`.
Existing `/legal/terms`, `/legal/privacy` and `/legal/dpa` redirects remain.
Short aliases and the former AI/platform legal categories redirect to the
canonical AI documents rather than creating duplicate documents.

The public and legal-page footers now contain Terms, Privacy, DPA and
Acceptable Use in a compact row; no extra footer column was added. The Company
hub link remains. The separately labelled Marketplace link still opens
antbuildz.com; it is not a policy destination. Old transferred/minified assets
are retained unmodified, but the public legal documents are source-rendered
and do not use their marketplace-policy inventory. Known legacy AI-policy
links in rendered content are normalised to local AI destinations.

Legal documents and current source-owned contact links use `help@antbuildz.ai`.
Transferred Antbuildz email links are normalised to the same address, including
the public footer. Historical notes and read-only/minified reference assets
are not represented as having been rewritten.

## Signup, checkout and top-ups

- Signup now displays linked Terms/Privacy acknowledgement before account
  entry actions. Subscription preview also displays the acknowledgement.
- This is disclosure, not a durable acceptance-record system. Production must
  store the accepted document version, time, customer and relevant order.
- `/subscribe` is a transferred prototype with old plans and optional test
  card fields. A prominent preview-only warning now explains that it does not
  activate a paid plan, states the real 14-day/card-required offer and warns
  against real card entry. Its trial action is labelled “Preview setup”.
- No payment method was entered, no account created and no charge authorised.
- The Terms make trial-to-paid conversion conditional on actual checkout
  disclosure and payment authorisation. Account creation alone is not consent
  to a recurring charge. No working production conversion is claimed.
- Top-up authorisation, threshold, total-balance calculation, repeated purchases
  and disable/change options are disclosed in Terms and the pricing FAQ.
  No payment toggle, spending cap or charge-authorisation mechanism was added.

## Technical verification and discrepancies

“Unverified” means a production backend, access policy, contract or job was not
available here. Contractual obligations in the documents must not be confused
with evidence that a control has already been implemented.

| Requested check | Evidence / outcome | Required follow-up |
| --- | --- | --- |
| Routine employee conversation access | Production access roles/logs unavailable | Verify least-privilege roles and access policy; documents prohibit routine unrestricted review, not technical access |
| Authorised support/admin access | Frontend admin/Console routes exist; authorisation is not proven | Verify support workflow, approvals and logging |
| Knowledge isolation | No production tenant-storage policy available | Verify tenant scoping, retrieval and cross-tenant tests before relying on the DPA commitment |
| External inference | AI-facing frontend exists; complete provider data flow unavailable | Verify what prompts, retrieved knowledge and metadata leave the platform |
| Provider training | Provider contracts/settings unavailable | Verify no unrelated training use, retention and applicable agreements; no universal no-provider-training claim made |
| Purchased credit expiry | Pricing previously said six months; new brief says no expiry. Browser-local runtime has a top-up balance without an observed expiry field | Pricing and documents now follow the new non-expiry instruction; verify production ledger and migrate any existing expiry rules with appropriate notice |
| Monthly reset | Approved marketing says monthly reset; no production reset scheduler available | Verify annual-plan monthly cycles, time zone and reset jobs |
| Consumption order | Browser-local runtime uses its included allowance before top-up balance | Verify the same ordering transactionally in production |
| Auto Top-Up threshold | Browser-local runtime tops up at exhaustion, not the new default total of five | Production must implement/configure the authorised threshold; local simulation was not treated as live billing |
| Total available balance | No verified production monthly-plus-purchased calculation | Verify consistent total and concurrency handling |
| Top-up authorisation | Prototype reads an auto-top-up preference and a stored test payment selection | Not proof of informed payment consent; implement auditable explicit opt-in and disabling |
| 14-day trial | Pricing advertises 14 days/card required; `/subscribe` remains a no-live-payment prototype | Complete actual card authorisation, trial clock, notice and conversion/cancellation handling |
| Manual invoice suspension | No production overdue-invoice job available | Terms permit suspension after more than 14 days overdue, not automatic termination; verify operational process |
| Five exchanges | Browser-local runtime meters stored conversation IDs, not verified five-exchange production increments | Verify meaningful-interaction classification and increments after five exchanges; support disputes |
| Public listing sync | UI depicts synchronisation, not evidence of production publication pipeline | Verify enabled/authorised public fields and destinations |
| Private data excluded from sync | No production publication allowlist available | Test that private knowledge and conversations cannot be included by default |
| Google Analytics | Brief states GA is used; no active GA loader or consent manager found in app/lib/public-assets scan or reviewed local page | Privacy says “where enabled”; do not enable consent-required analytics until consent gating and withdrawal are verified on deployment |
| Post-termination data | Production retention/deletion jobs unavailable | Define actual deletion/export/backups timetable and lawful billing/security retention |
| Contact details | Four documents use help@antbuildz.ai; source contact links updated and rendered email links normalised | Verify mailbox delivery, privacy-request ownership and external email templates |

The browser-local prototype also contains old top-up package amounts, including
a simulated 100-credit purchase for $18. These are not the approved public
prices. No minified runtime or live payment system was changed in this task.

## Deliberate wording decisions

- Individual subscribers are allowed; business focus no longer excludes all
  consumers. Mandatory local/consumer rights and non-excludable liability are
  reserved. The liability cap uses the greater of 12 months’ affected-customer
  fees or USD 100, subject to law and reasonableness.
- Prices and pack quantities are not hard-coded in the Terms. Existing paid
  periods cannot be retrospectively repriced.
- The old discretionary refund wording and provider IP-indemnity/refund promise
  were removed in favour of the requested billing-error/statutory refund rules.
  Counsel should review this change and notice requirements for existing users;
  do not apply it retrospectively to an already accepted agreement.
- No absolute security, certification, uptime, employee-inaccessibility or
  universal third-party no-training promise is made. Knowledge separation and
  restricted access are contractual obligations requiring operational sign-off.
- The DPA requires timely breach notice without waiting for a completed
  investigation, proportionate audits and lawful international-transfer
  safeguards. Region-specific transfer instruments may still be needed;
  this concise DPA is not a claim that all global transfers are already lawful.
- No separate cookie page/banner or GA integration was added where no local
  analytics loader was found. Production analytics consent remains a launch
  verification item, not a claimed completed consent implementation.

## Research basis

Original drafting was informed by primary guidance; no other company's terms
were copied:

- [Singapore PDPC — Data protection obligations](https://www.pdpc.gov.sg/overview-of-pdpa/the-legislation/personal-data-protection-act/data-protection-obligations)
- [Singapore PDPC — Data intermediaries](https://www.pdpc.gov.sg/the-distinction-between-organisations-and-data-intermediaries-and-why-it-matters)
- [Singapore Statutes Online — Unfair Contract Terms Act](https://sso.agc.gov.sg/Act/UCTA1977)
- [UK ICO — Cookies and similar technologies](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/)

## Files modified in this task

`app/agreements/legal-documents.tsx`, `app/agreements/page.tsx`,
`app/agreements/[document]/page.tsx`, `app/agreements/legal-shell.tsx`,
`app/agreements/legal-pages.module.css`, `app/legal/[document]/page.tsx`,
`app/[slug]/page.tsx`, `app/original-antbuildz-app.tsx`, `app/globals.css`,
`app/site.tsx`, `app/sitemap.ts`, `lib/public-cta-system.ts`,
`lib/legal-navigation.ts` (new), `public/llms.txt`,
`tests/site-content.test.mjs`, `PAGES.md` and this report (new).

No configuration files, external services, reference-project files or deployed
assets were changed. Pre-existing unrelated worktree edits were preserved.

## Verification

- 98 regression tests pass; targeted ESLint and production build pass.
- Hub and four documents return HTTP 200, one H1 each, and antbuildz.ai canonicals.
- Twelve tested legacy/short URLs return HTTP 308 to local documents.
- Browser QA covers desktop 1440×900, tablet 1024×768 and mobile 390×844;
  checked layouts have no horizontal overflow. Signup acknowledgement and the
  compact mobile pricing-footer legal links are visible and readable.
- No claim is made that production billing, privacy controls, consent recording
  or every unrelated route has been tested end-to-end.
