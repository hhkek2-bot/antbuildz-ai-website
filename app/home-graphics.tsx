/* Static homepage graphics. No controls or live product claims. */
/* eslint-disable @next/next/no-img-element -- Small local product assets inside a labelled illustration; no image service required. */
import type { ReactNode } from 'react';
import styles from './home-graphics.module.css';

type IconKind = 'catalogue' | 'requirement' | 'filter' | 'review' | 'rental' | 'factory' | 'dealer' | 'maintenance' | 'tools' | 'building' | 'parts' | 'vehicle' | 'excluded' | 'shortlisted' | 'clarify';

const iconPaths: Record<IconKind, ReactNode> = {
  catalogue: <><path d="M9 5h14l4 4v19H9zM23 5v5h4M5 23V2h14M13 15h10M13 20h10M13 25h6" /></>,
  requirement: <><circle cx="14" cy="14" r="9" /><path d="m21 21 7 7M10 11h8M10 15h5M10 19h3" /><path d="M24 4h4v4" /></>,
  filter: <><path d="M3 5h26L19 17v9l-6 3V17z" /><path d="M10 10h12" /></>,
  review: <><path d="M11 6H6v23h21V6h-5M12 3h9v6h-9zM11 15h11M11 20h6M11 25h4" /><path d="m21 23 2 2 5-6" /></>,
  rental: <><circle cx="9" cy="25" r="3" /><circle cx="21" cy="25" r="3" /><path d="M3 24V14h10l4 6h6V5M13 14V6H5v8M27 4v21h4M16 6h7M17 20v-7" /></>,
  factory: <><path d="M3 28V13l9-5v8l9-5v17zM23 28V4h5v24M3 28h27M7 21h2M15 21h2" /></>,
  dealer: <><path d="m3 11 13-8 13 8v18H3zM8 29V15h16v14M9 20h14M9 25h14M12 8h8" /></>,
  maintenance: <><path d="m18 6 3-3 5 5-3 3M5 26l12-12M17 8l7 7M8 22l3 3M4 27l2 2 5-4-3-3z" /><circle cx="10" cy="9" r="4" /><path d="m6 12-3 3M25 19l4 4-6 6-4-4" /></>,
  tools: <><path d="m19 4-3 6 6 6 6-3c1 7-6 11-11 7L7 30l-5-5 11-10C8 9 12 2 19 4Z" /></>,
  building: <><path d="M8 29V4h5v25M3 29h15M2 8h28l-9-5H8M25 8v9M22 17v4h6v-4M8 14l5 5-5 5M19 29V25h12v4" /></>,
  parts: <><circle cx="16" cy="16" r="12" /><circle cx="16" cy="16" r="5" /><circle cx="16" cy="7" r="1" /><circle cx="25" cy="16" r="1" /><circle cx="16" cy="25" r="1" /><circle cx="7" cy="16" r="1" /><path d="m10 9-1 1m14 0-1-1m0 14 1-1M9 22l1 1" /></>,
  vehicle: <><circle cx="8" cy="25" r="3" /><circle cx="25" cy="25" r="3" /><path d="M2 24V14h10l4 5h13v5M6 14V6h19M17 6l3 13M8 18h5M24 19v-6h5M3 6h25" /></>,
  excluded: <><circle cx="16" cy="16" r="11" /><path d="m12 12 8 8m0-8-8 8" /></>,
  shortlisted: <><circle cx="16" cy="16" r="11" /><path d="m10 16 4 4 8-9" /></>,
  clarify: <><circle cx="16" cy="16" r="11" /><path d="M12 12a4 4 0 0 1 8 0c0 3-4 3-4 6M16 23h.01" /></>,
};

export function GraphicIcon({ kind, className = '' }: { kind: IconKind; className?: string }) {
  return <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{iconPaths[kind]}</svg>;
}

function EquipmentDrawing() {
  return <svg viewBox="0 0 220 130" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M36 98V67h42l26 24h40V18M77 67V27H47v40M92 27h51M105 90V58M161 15v90h36" />
    <circle cx="58" cy="103" r="14" /><circle cx="131" cy="103" r="14" /><circle cx="58" cy="103" r="5" /><circle cx="131" cy="103" r="5" />
    <path d="M30 123h170M21 28v80M17 32l4-4 4 4M17 104l4 4 4-4" strokeWidth="1" opacity=".45" />
    <path d="M28 27h7M28 108h7M179 18v64M173 24l6-6 6 6M173 76l6 6 6-6" strokeWidth="1" opacity=".45" />
  </svg>;
}

export function CatalogueGraphic() {
  return <div className={styles.catalogueScene} role="img" aria-label="Illustration of an equipment catalogue and specification sheets">
    <div className={styles.rearSheet}><span className={styles.documentTitle}><GraphicIcon kind="catalogue" /> Product catalogue</span><EquipmentDrawing /><div className={styles.documentRules}><i /><i /></div></div>
    <div className={styles.frontSheet}><span className={styles.documentTitle}>Specifications</span><div className={styles.specSketch}><span /><span /><span /><span /><span /><span /></div><div className={styles.specRow}><i /><b /></div><div className={styles.specRow}><i /><b /></div><div className={styles.specRow}><i /><b /></div><span className={styles.paperTab}>Product knowledge</span></div>
  </div>;
}

/**
 * A compact, customer-facing summary of the four selection stages.
 * The detailed technical scenes below remain available for future product-detail use,
 * while the homepage keeps one simple idea per panel.
 */
export function SelectionOverviewGraphic({ step }: { step: number }) {
  return <div className={styles.selectionOverview} aria-hidden="true">
    {step === 0 && <div className={`${styles.overviewFlow} ${styles.overviewIngest}`}>
      <div className={`${styles.overviewCard} ${styles.overviewSource}`}>
        <span className={styles.overviewLabel}>Approved knowledge</span>
        <strong>Product catalogue</strong>
        <small>Specifications · diagrams · rules</small>
        <div className={styles.overviewDocumentRows}>
          <span><b>Category</b><small>Electric forklift</small></span>
          <span><b>Rated load</b><small>Approved field</small></span>
          <span><b>Power</b><small>Approved field</small></span>
        </div>
      </div>
      <span className={styles.overviewArrow}><i /></span>
      <div className={`${styles.overviewCard} ${styles.overviewRecord}`}>
        <span className={styles.overviewLabel}>Structured data</span>
        <strong>Product record</strong>
        <div className={styles.overviewList}>
          <span><b>Product details</b><i>Mapped</i></span>
          <span><b>Technical fields</b><i>Mapped</i></span>
          <span><b>Availability rules</b><i>Mapped</i></span>
        </div>
        <small className={styles.overviewStatus}>Ready for approved use</small>
      </div>
    </div>}

    {step === 1 && <div className={`${styles.overviewStack} ${styles.overviewReason}`}>
      <div className={styles.overviewQuestion}>
        <span className={styles.overviewLabel}>Buyer need</span>
        <strong>5 t electric forklift for warehouse use</strong>
      </div>
      <div className={styles.overviewSplit}>
        <span><small>Known</small><b>Rated load · power</b><i>2 requirements captured</i></span>
        <span><small>Still needed</small><b>Lift · aisle · load</b><i>3 constraints to clarify</i></span>
      </div>
      <div className={styles.overviewOutcome}>
        <span><small>Next action</small><strong>Clarify before matching</strong></span>
        <b>Ask for site constraints</b>
      </div>
    </div>}

    {step === 2 && <div className={`${styles.overviewStack} ${styles.overviewRetrieve}`}>
      <div className={styles.overviewSearch}>
        <span><span className={styles.overviewLabel}>Search</span><strong>Approved catalogue + supported inventory</strong></span>
        <small>Approved sources only</small>
      </div>
      <div className={styles.overviewFilters}><span>Category</span><span>Power</span><span>Rated load</span></div>
      <div className={styles.overviewOptions}>
        <span><b>Electric forklift</b><small>Relevant category</small><i>Included</i></span>
        <span className={styles.overviewOptionActive}><b>Closest supported option</b><small>Ready to compare</small><i>Review</i></span>
        <span><b>Other equipment</b><small>Outside the need</small><i>Excluded</i></span>
      </div>
    </div>}

    {step === 3 && <div className={`${styles.overviewStack} ${styles.overviewRecommend}`}>
      <div className={styles.overviewAgent}>
        <img src="/images/emma-sales-agent.jpg" alt="" loading="lazy" width="32" height="32" />
        <span><strong>Emma</strong><small>AI Sales Agent</small></span>
        <i>For team review</i>
      </div>
      <div className={styles.overviewBuyer}>Which option best fits?</div>
      <div className={styles.overviewAnswer}>
        <span className={styles.overviewLabel}>Recommendation</span>
        <strong>Closest supported option</strong>
        <small>Explained against the buyer’s stated requirements</small>
        <div className={styles.overviewRecommendationFacts}><span>Rated load</span><span>Power</span><span>Application</span></div>
      </div>
      <div className={styles.overviewReview}><span>Sales review</span><strong>Team confirms suitability, availability and terms</strong></div>
    </div>}
  </div>;
}

export function SelectionGraphic({ step }: { step: number }) {
  return <div className={styles.selectionScene} aria-hidden="true">
    {step === 0 && <div className={styles.ingestionScene}>
      <div className={styles.reachSource}>
        <span className={styles.visualEyebrow}><GraphicIcon kind="catalogue" />AR20JE-2 working range</span>
        <span className={styles.sourceFile}>LGMG catalogue · Metric</span>
        <svg className={styles.reachChart} viewBox="0 0 150 132" fill="none" aria-hidden="true" focusable="false">
          <path className={styles.reachGrid} d="M25 12v108h112M25 102h112M25 84h112M25 66h112M25 48h112M25 30h112M43.5 12v108M62 12v108M80.5 12v108M99 12v108M117.5 12v108M136 12v108" />
          <path className={styles.reachAxis} d="M25 9v111h115M22 12l3-3 3 3M137 117l3 3-3 3" />
          <path className={styles.reachEnvelopeOuter} d="M68 14C91 17 118 40 128 67C134 83 133 101 126 116L111 120" />
          <path className={styles.reachEnvelopeInner} d="M68 14C82 25 101 45 109 67C112 76 112 86 109 94" />
          <path className={styles.reachBoom} d="M34 108L43 80L38 70L52 39L68 14L78 16M43 80L61 79L105 79L123 81" />
          <path className={styles.reachChassis} d="M28 108h20l4 6H27zM29 104h16v4H29z" />
          <circle className={styles.reachWheel} cx="32" cy="116" r="4" /><circle className={styles.reachWheel} cx="46" cy="116" r="4" />
          <circle className={styles.reachJoint} cx="43" cy="80" r="2.4" /><circle className={styles.reachJoint} cx="38" cy="70" r="2.4" /><circle className={styles.reachJoint} cx="52" cy="39" r="2.4" /><circle className={styles.reachJoint} cx="68" cy="14" r="2.4" />
          <path className={styles.reachPlatform} d="M121 75h10v11h-10zM123 75v-4h6v4" />
          <text className={styles.reachTick} x="18" y="121">0</text><text className={styles.reachTick} x="14" y="104">4</text><text className={styles.reachTick} x="14" y="86">8</text><text className={styles.reachTick} x="10" y="68">12</text><text className={styles.reachTick} x="10" y="50">16</text><text className={styles.reachTick} x="10" y="32">20</text>
          <text className={styles.reachTick} x="23" y="130">0m</text><text className={styles.reachTick} x="60" y="130">4m</text><text className={styles.reachTick} x="97" y="130">8m</text><text className={styles.reachTick} x="130" y="130">12m</text>
          <text className={styles.reachAxisLabel} x="2" y="72" transform="rotate(-90 2 72)">z height</text><text className={styles.reachAxisLabel} x="104" y="127">x radius</text>
          <text className={styles.reachCapacity} x="104" y="47">260kg</text><text className={styles.reachCapacity} x="87" y="61">350kg</text>
          <text className={styles.reachMaximum} x="72" y="10">21.58m max</text>
        </svg>
        <i className={styles.scanLine} />
        <span className={styles.sourceMeta}><b>Source: LGMG AR20JE-2</b><small>Working envelope and rated capacity bands</small></span>
      </div>
      <span className={styles.ingestionArrow}><i />→<small>Extract</small></span>
      <div className={styles.coordinateTable}>
        <span className={styles.visualEyebrow}>AR20JE-2 reach coordinates</span>
        <span className={styles.dataType}>Estimated from diagram · 260 kg</span>
        <div className={styles.coordinateHead}><span>Chart height (z)</span><span>Max. radius (x)</span></div>
        {[
          ['0.0 m', '11.4 m'],
          ['4.0 m', '11.7 m'],
          ['8.0 m', '11.9 m'],
          ['12.0 m', '11.3 m'],
          ['16.0 m', '9.5 m'],
          ['20.0 m', '6.9 m'],
        ].map(([height, radius]) => <div className={styles.coordinateRow} key={height}><b>{height}</b><span>{radius}</span></div>)}
        <span className={styles.readyState}><i />Six preliminary coordinates extracted</span>
      </div>
    </div>}
    {step === 1 && <div className={styles.reasonScene}>
      <div className={styles.reasonQuestion}><small>Buyer question</small><strong>We need a 5 t electric forklift for a narrow warehouse aisle</strong></div>
      <div className={styles.requirementFacts}>
        <span><small>Confirmed</small><b>5 t requested · electric · indoor use</b></span>
        <span><small>Required to qualify</small><b>Lift · load centre + geometry · clear aisle · hire</b></span>
      </div>
      <div className={styles.reasonFlow}>
        <div className={styles.decisionHeader}><small>Reasoning + decision layer</small></div>
        <div className={styles.decisionStages}>
          <span><small>1 · Understand need</small><b>Equipment · task · power</b></span><i>→</i>
          <span><small>2 · Check constraints</small><b>Rated load · load centre · mast · aisle</b></span><i>→</i>
          <span><small>3 · Choose action</small><b>Clarify · retrieve · review</b></span>
        </div>
        <div className={styles.decisionOutcome}>
          <span><small>Decision now</small><b>Clarify before matching</b></span>
          <em>Lift · geometry · aisle clearance missing</em>
        </div>
      </div>
      <div className={styles.nextQuestion}>
        <img src="/images/emma-sales-agent.jpg" alt="" loading="lazy" width="40" height="40" />
        <span><small>Emma asks next</small><strong>What lift height, load dimensions, available aisle width and hire period do you need?</strong></span>
      </div>
    </div>}
    {step === 2 && <div className={styles.retrieveScene}>
      <span className={styles.selectionSearch}><GraphicIcon kind="requirement" /><span><small>Requirement query</small><strong>≈ 5 t rated load · electric counterbalance forklift</strong></span></span>
      <div className={styles.filterChips}><span>Category</span><span>Power</span><span>Rated load</span><span>Fleet year</span></div>
      <div className={styles.inventoryConsole}>
        <div className={styles.inventoryHeader}>
          <span><GraphicIcon kind="catalogue" />Approved catalogue + example fleet</span>
          <b><i />7 mixed equipment records</b>
        </div>
        <div className={styles.inventoryColumns}><span>Brand + model</span><span>Category</span><span>Key rating</span><span>Year / age*</span><span>Result</span></div>
        <div className={styles.inventoryTable}>
          {[
            ['Toyota 8FBMT50', 'Elec. forklift', '4,990 kg rated', '2022 / ~4 yr', 'Closest match'],
            ['Hyster J3.5XN', 'Elec. forklift', '3,500 kg rated', '2021 / ~5 yr', 'Capacity gap'],
            ['Linde H50D', 'Diesel forklift', '5,000 kg rated', '2020 / ~6 yr', 'Power mismatch'],
            ['JCB 540-180', 'Telehandler', '4,000 kg max', '2019 / ~7 yr', 'Category gap'],
            ['JLG E450AJ', 'Artic. boom', '227 kg platform', '2023 / ~3 yr', 'Category gap'],
            ['Genie GS-4047', 'Scissor lift', '350 kg platform', '2022 / ~4 yr', 'Category gap'],
            ['Bobcat E50z', 'Mini excavator', '4,819 kg operating', '2021 / ~5 yr', 'Category gap'],
          ].map(([record, category, rating, age, result]) => <span className={result === 'Closest match' ? styles.inventoryMatch : ''} key={record}>
            <b>{record}</b><span>{category}</span><span>{rating}</span><span>{age}</span><em>{result}</em>
          </span>)}
          <i className={styles.inventoryScan} />
        </div>
      </div>
      <div className={styles.filterFunnel} aria-label="Example inventory filtering progress">
        <span><small>Fleet</small><b>7</b></span><i>→</i>
        <span><small>Forklifts</small><b>3</b></span><i>→</i>
        <span><small>Electric</small><b>2</b></span><i>→</i>
        <span><small>Review</small><b>1</b></span>
      </div>
      <span className={styles.queryProgress}><i />Comparing manufacturer-rated specifications</span>
      <span className={styles.inventoryNote}>*Example fleet year/age · confirm asset, mast, load centre and availability</span>
    </div>}
    {step === 3 && <div className={styles.recommendScene}>
      <div className={styles.recommendPhone}>
        <span className={styles.selectionAgent}><img src="/images/emma-sales-agent.jpg" alt="" loading="lazy" width="40" height="40" /><span><strong>Emma</strong><small>AI Sales Agent</small></span></span>
        <div className={styles.recommendBuyerMessage}>Show me the best options for a 5 t electric forklift.</div>
        <div className={styles.answerBubble}>I found one close catalogue match for review. Toyota 8FBMT50 is rated at 4,990 kg; mast, load centre and site suitability still need confirmation.</div>
        <div className={styles.recommendTable}>
          <div className={styles.recommendTableTitle}><span>Closest catalogue options</span><small>3 records reviewed</small></div>
          <div className={styles.recommendTableHead}><span>Model</span><span>Rating</span><span>Power</span><span>Review</span></div>
          {[
            ['Toyota 8FBMT50', '4,990 kg', 'Electric', 'Closest rating'],
            ['Hyster J3.5XN', '3,500 kg', 'Electric', 'Capacity gap'],
            ['Linde H50D', '5,000 kg', 'Diesel', 'Power mismatch'],
          ].map(([model, rating, power, review], index) => <div className={`${styles.recommendTableRow} ${index === 0 ? styles.recommendTableMatch : ''}`} key={model}>
            <strong>{model}</strong><span>{rating}</span><span>{power}</span><em>{review}</em>
          </div>)}
        </div>
        <div className={styles.reviewBoundary}><GraphicIcon kind="review" /><span><strong>Sales review</strong><small>Confirm availability, site suitability and commercial terms</small></span></div>
      </div>
    </div>}
  </div>;
}

export function AgentGraphic() {
  return <div className={`${styles.productScene} ${styles.agentScene}`} role="img" aria-label="Upper portion of a phone conversation showing Emma using connected Webstore catalogue information to identify that no listed electric forklift is confirmed for a buyer's five-tonne requirement and prepare the enquiry for team review">
    <div className={styles.agentPhoneCrop}>
      <div className={styles.agentPanel}>
        <div className={styles.agentHeader}>
          <img src="/images/emma-sales-agent.jpg" alt="" loading="lazy" width="40" height="40" />
          <span><strong>Emma</strong><small>AI Sales Agent</small></span>
          <i aria-hidden="true" />
        </div>
        <div className={styles.agentConversation}>
          <span className={styles.agentBuyerMessage}>We need a 5 t electric forklift.</span>
          <span className={styles.agentReply}>What lift height, aisle width and hire period do you need?</span>
          <span className={styles.agentBuyerMessage}>6 m lift · 3.4 m aisle · 12-week hire</span>
          <span className={styles.agentInventoryCheck}><span><small>Webstore catalogue checked</small><strong>No confirmed 5 t match</strong></span><b>2 models reviewed</b></span>
          <span className={`${styles.agentReply} ${styles.agentAnswer}`}>Your listed electric forklifts do not meet the 5 t requirement. I’ll prepare this enquiry for your team to confirm a suitable model and availability.</span>
        </div>
        <div className={styles.enquirySummary}>
          <GraphicIcon kind="review" />
          <span><small>Requirement profile</small><strong>5 t electric · 6 m lift · 3.4 m aisle · 12-week hire</strong></span>
          <b>Ready for review</b>
        </div>
      </div>
    </div>
  </div>;
}

const catalogueImages = [
  ['/images/verified-equipment/bosch-gbh-2-26-dre.png', 'Tools'],
  ['/images/verified-equipment/nsk-6205-catalogue.jpg', 'Parts'],
  ['/images/verified-equipment/linde-e16-p.png', 'Equipment'],
];

export function WebstoreGraphic() {
  return <div className={`${styles.productScene} ${styles.storeScene}`} role="img" aria-label="Illustrative branded industrial storefront with tools, parts, equipment and a dedicated product URL">
    <div className={styles.storeWindow}>
      <div className={styles.storeBar}><span className={styles.windowDots} aria-hidden="true"><i /><i /><i /></span><span>Your industrial store</span></div>
      <div className={styles.storeProducts}>{catalogueImages.map(([src, label]) => <div key={src}><span className={styles.storeProductMedia}><img src={src} alt="" loading="lazy" width="120" height="96" /></span><span>{label}</span></div>)}</div>
      <div className={styles.productUrl}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="m9 15 6-6M8 16l-1 1a4 4 0 0 1-6-6l5-5a4 4 0 0 1 6 0m0 12a4 4 0 0 0 6 0l5-5a4 4 0 0 0-6-6l-1 1" /></svg><span>/products/your-product</span></div>
    </div>
  </div>;
}

export function IndustryGraphic({ index }: { index: number }) {
  const kinds: IconKind[] = ['rental', 'factory', 'dealer', 'maintenance', 'tools', 'building', 'parts', 'vehicle'];
  return <span className={styles.industryIcon}><GraphicIcon kind={kinds[index]} /></span>;
}

export function QuestionsGraphic() {
  return <svg className={styles.questions} viewBox="0 0 136 92" fill="none" aria-hidden="true" focusable="false">
    <path d="M16 30c17-6 32-4 48 4v46c-16-8-31-10-48-4V30Z" fill="white" stroke="currentColor" strokeWidth="1.5" />
    <path d="M64 34c16-8 31-10 48-4v46c-17-6-32-4-48 4V34Z" fill="white" stroke="currentColor" strokeWidth="1.5" />
    <path d="M26 43c10-2 18-1 28 3M26 53c10-2 18-1 28 3M26 63c10-2 18-1 28 3M74 46c10-4 18-5 28-3M74 56c10-4 18-5 28-3M74 66c10-4 18-5 28-3" stroke="currentColor" opacity=".25" />
    <circle cx="108" cy="22" r="19" fill="var(--yellow)" /><path d="M103 18a5 5 0 0 1 10 0c0 4-5 4-5 8M108 31h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>;
}
