# AI Agent Console design system

Established 27 October 2026 from the existing `/ai-agent-console` interface.
Mode: Audit → System. Keep the practical light workspace, industrial context,
yellow actions and existing task layouts. This is the operational Console's
system; public marketing pages and customer chat themes have their own systems.

## Typography

Use the locally loaded fonts. Headings use **Plus Jakarta Sans**; body text,
navigation, forms, tabs and buttons use **Inter**.

| Role | Size | Weight | Line-height | Application |
| --- | --- | --- | --- | --- |
| Section heading | 20px desktop; 18px mobile | 700 | 1.4 | Overview sections, workflow introduction, AI Rules sections, dialog titles |
| Card heading / mobile page title | 16px | 700 | 1.4 | Form panels, integration names, channel names, mobile top bar |
| Detail heading | 14px | 600 | 1.4 | Deal details, supporting subgroups |
| Body / field / button / tab | 14px | 400 body; 600 controls | 1.5 body; 1.4 controls | Operational UI |
| Table data | 13px | 400; 600 for emphasis | 1.5 | Desktop data tables |
| Helper / metadata / table header | 12px | 400; 600 for labels | 1.5 | Dates, source metadata, supporting copy, category chips |
| Overview metric | 32px | 700 | 1.2 | Conversation and lead totals; tabular numerals |

Headings use −0.02em tracking. Field labels and control labels use normal
tracking. Uppercase navigation groups and table headers may retain restrained
tracking. Keep labels left aligned and preserve intentional centred empty states.
Numeric plan prices and metric cards retain their own display hierarchy.

## Colour roles

| Role | Value | Usage |
| --- | --- | --- |
| Canvas | `#F8F7FF` | Workspace and field background |
| Surface | `#FFFFFF` | Cards, dialogs and selected tabs |
| Soft | `#F1EFF8` | Tab rails and subtle grouping |
| Ink | `#0F172A` | Headings, field values and primary action labels |
| Body | `#475569` | Supporting operational text |
| Muted | `#64748B` | Helper text and metadata |
| Border | `#E2E8F0` | Cards, fields and secondary buttons |
| Strong border | `#94A3B8` | Hover emphasis |
| Primary | `#FFC501` | Main actions and active navigation |
| Primary hover | `#F5B70A` | Enabled primary action hover |
| Focus | `#2563EB` | Keyboard focus outline |
| Danger | `#B91C1C` | Destructive actions and invalid fields |
| Success / warning / information | `#166534` / `#92400E` / `#1D4ED8` | Semantic foreground tokens for source-owned states |

Use dark text on yellow. Never use yellow as small text on white. Status
badges keep their meaningful wording, icons and existing state distinctions;
yellow must not replace error, success or lead-status meanings. The approved
blue and green Deploy illustrations remain product previews, not UI surfaces.

## Buttons and interaction states

| Role | Treatment |
| --- | --- |
| Primary | Solid yellow, dark label, 44px minimum height, 14px/600 label, pill radius |
| Secondary | White with subtle border, same geometry and label scale |
| Ghost | Transparent with body-colour label; soft surface on hover |
| Destructive | White with dark red border and label |
| Icon | 36px desktop; 44px mobile, useful accessible name retained |
| Dense action / suggestion chip | 36px minimum desktop, 12px label; 44px minimum mobile |

Standard button padding is 10px × 18px, with an 8px icon-to-label gap.
Primary buttons no longer lift or change to an orange gradient on hover.
Disabled actions have 50% opacity and remain disabled. Keyboard focus uses a
2px blue outline with a 3px offset. Native switches, checkboxes and tabs keep
their control semantics and geometry; checked states use the action yellow.
Avoid giving all buttons equal prominence: the screen's main action is primary.

## Fields, tabs and feedback

- Text fields, selects and comboboxes: 44px minimum height, 12px radius,
  canvas background, 1px border, 14px Inter and muted placeholder text.
- Textareas: the same type, colour and radius with 12px × 14px padding;
  retain task-specific height and resizing.
- Labels: 14px/600, normal tracking. Keep existing labels, help and validation.
- Invalid fields use the danger border through `aria-invalid="true"`.
  Disabled fields use the soft background and a disabled cursor.
- Tabs: soft rail with 12px radius, white selected tab, 14px/600 labels;
  36px desktop / 44px mobile tab targets. Preserve wrapping where it already
  exists; otherwise use horizontal scrolling without widening the document.
- Dialogs share the type, colour, field and focus roles even when rendered
  outside the Console DOM tree. Dialog corners use the 20px card radius.

## Space, shape and depth

- Spacing scale: **4, 8, 12, 16, 20, 24, 32px**.
- Main cards: **20px radius**. Controls and inset groups: **12px**.
  Pills and badges: **999px**. Selected tabs use an inset **8px** radius.
- Standard form panel padding: **24px desktop / 20px mobile**.
  Mobile workspace gutters: **16px**. Existing metric and illustration panels
  retain their functional padding and proportions.
- Cards use one restrained shadow:
  `0 1px 2px rgb(15 23 42 / 4%), 0 12px 32px -18px rgb(15 23 42 / 12%)`.
  Passive cards do not acquire a yellow border or elevated shadow on hover.
- Deploy choices stretch to matching row heights. At compact widths their
  action moves below the description to keep text readable and controls aligned.
- Keep the current responsive navigation and task-specific stacking. Data
  tables scroll within their own containers; mobile card alternatives remain.
- Honour reduced-motion preferences for CSS animations and transitions.

## Implementation contract

The canonical executable tokens and rules live in
[`app/console-design-system.css`](app/console-design-system.css).
[`app/console-design-system.ts`](app/console-design-system.ts) adds semantic
button roles and scopes open Console dialogs/popovers. The existing
`original-antbuildz-app.tsx` compatibility layer installs it.

New source-owned Console controls should reuse `--console-*` tokens and
`data-console-button="primary|secondary|ghost|danger|icon"`. Preserve native
button semantics, accessible names, labels, disabled states and validation.
Do not copy hard-coded colours from the transferred bundle into new components.

This standardises the existing runtime through a source-owned presentation
layer. It is not a migration of the copied production bundle into a React
component library. Customer chat previews keep their own theme and typography.

Audit screenshots and verification notes:
[`audit/console-system-2026-10-27/REPORT.md`](audit/console-system-2026-10-27/REPORT.md).
