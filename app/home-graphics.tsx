/* Static, illustrative homepage graphics. No controls or live product claims. */
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

export function SelectionGraphic({ step }: { step: number }) {
  return <div className={styles.selectionScene} aria-hidden="true">
    {step === 0 && <div className={styles.ingestionScene}>
      <div className={styles.reachSource}>
        <span className={styles.ingestionTitle}><GraphicIcon kind="catalogue" />Reach diagram</span>
        <svg viewBox="0 0 112 58" fill="none" aria-hidden="true" focusable="false">
          <path className={styles.reachGrid} d="M15 8v40h88M15 38h88M15 28h88M15 18h88M35 8v40M55 8v40M75 8v40M95 8v40" />
          <path className={styles.reachCurve} d="M18 46c19-1 34-6 45-16 9-8 15-15 24-20" />
          <path className={styles.reachBoom} d="m27 44 34-17 25-17M22 47l8-3" />
          <circle className={styles.reachPoint} cx="43" cy="39" r="2.5" /><circle className={styles.reachPoint} cx="64" cy="29" r="2.5" /><circle className={styles.reachPoint} cx="86" cy="10" r="2.5" />
          <text x="4" y="11">H</text><text x="101" y="56">R</text>
        </svg>
      </div>
      <span className={styles.ingestionArrow}>→</span>
      <div className={styles.coordinateTable}>
        <span className={styles.ingestionTitle}>Structured coordinates</span>
        <div className={styles.coordinateHead}><span>Point</span><span>Height</span><span>Reach</span></div>
        {['A', 'B', 'C'].map((point, index) => <div className={styles.coordinateRow} key={point}><b>{point}</b><span>H<sub>{index + 1}</sub></span><span>R<sub>{index + 1}</sub></span></div>)}
      </div>
    </div>}
    {step === 1 && <div className={styles.selectionChat}>
      <span className={styles.selectionQuestion}>Application &amp; requirements</span>
      <span className={styles.selectionReply}><GraphicIcon kind="clarify" />Clarify missing details</span>
    </div>}
    {step === 2 && <div className={styles.selectionDocuments}>
      <span className={styles.selectionRow}><GraphicIcon kind="requirement" />Search catalogue &amp; inventory</span>
      <span className={styles.selectionRow}><GraphicIcon kind="catalogue" />Relevant specifications</span>
    </div>}
    {step === 3 && <div className={styles.selectionReview}>
      <GraphicIcon kind="review" />
      <div><span className={styles.selectionRow}>Why it fits</span><span className={styles.selectionRow}>Confirm with your team</span></div>
    </div>}
  </div>;
}

export function AgentGraphic() {
  return <div className={`${styles.productScene} ${styles.agentScene}`} role="img" aria-label="Illustrative handover from a buyer requirement brief to the sales team's review">
    <div className={styles.briefSheet}><span className={styles.documentTitle}><GraphicIcon kind="requirement" /> Buyer requirement</span><div className={styles.documentRules}><i /><i /><i /></div><span className={styles.briefTag}>Product context</span></div>
    <svg className={styles.handoverArrow} viewBox="0 0 48 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false"><path d="M2 12h42M36 5l8 7-8 7" /></svg>
    <div className={styles.reviewSheet}><GraphicIcon kind="review" /><span>Sales review</span><div className={styles.documentRules}><i /><i /></div></div>
    <span className={styles.sceneCaption}>Illustrative handover</span>
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
      <div className={styles.storeProducts}>{catalogueImages.map(([src, label]) => <div key={src}><img src={src} alt="" loading="lazy" width="120" height="96" /><span>{label}</span></div>)}</div>
      <div className={styles.productUrl}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="m9 15 6-6M8 16l-1 1a4 4 0 0 1-6-6l5-5a4 4 0 0 1 6 0m0 12a4 4 0 0 0 6 0l5-5a4 4 0 0 0-6-6l-1 1" /></svg><span>/products/your-product</span></div>
    </div>
    <span className={styles.sceneCaption}>Illustrative storefront</span>
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
