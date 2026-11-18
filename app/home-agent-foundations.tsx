/* Illustrative product and process scenes, not live settings or inventory. */
/* eslint-disable @next/next/no-img-element -- Reuse local industrial product assets without an image service. */
import { EmmaAvatar } from './emma-avatar';
import { GraphicIcon } from './home-graphics';
import styles from './home-agent-foundations.module.css';

export const AGENT_FOUNDATIONS = [
  { id: 'brand', title: 'Your brand and voice', description: 'Keep sales, rental and support conversations aligned with your company voice and approved guidance.' },
  { id: 'inventory', title: 'Products and connected inventory', description: 'Connect AI Webstore Suite, your inventory or supported sources so the Agent can use approved product and availability data.' },
  { id: 'specifications', title: 'Product and technical knowledge', description: 'Ground answers in approved specifications, manuals, policies and application guidance. Ask for missing requirements before suggesting a fit.' },
  { id: 'processes', title: 'Sales, rental and support workflows', description: 'Follow approved sales and rental rules, qualification steps and support procedures, with clear handover when your team needs to step in.' },
] as const;

const inventory = [
  ['/images/verified-equipment/linde-e16-p.png', 'Equipment', 'Product details'],
  ['/images/verified-equipment/bosch-gbh-2-26-dre.png', 'Tools', 'Specifications'],
  ['/images/verified-equipment/nsk-6205-catalogue.jpg', 'Parts', 'Model references'],
];

function BrandScene() {
  return <div className={`${styles.scene} ${styles.brandScene}`} aria-hidden="true">
    <div className={styles.guidancePanel}>
      <div className={styles.panelHeader}><span className={styles.companyMark}>YC</span><strong>Your company</strong></div>
      <span className={styles.panelCaption}>Brand &amp; guidance</span>
      <dl className={styles.guidanceFields}>
        <div><dt>Voice</dt><dd>Clear and practical</dd></div>
        <div><dt>Knowledge</dt><dd>Approved business guidance</dd></div>
      </dl>
      <span className={styles.guidanceNote}><GraphicIcon kind="review" />Your sales approach</span>
    </div>
    <div className={styles.chatPanel}>
      <div className={styles.panelHeader}><EmmaAvatar size={32} decorative /><span><strong>Emma</strong><small>Your AI Agent</small></span></div>
      <div className={styles.chatMessages}>
        <span className={styles.buyerMessage}>Can you help me choose?</span>
        <span className={styles.agentMessage}>Tell me what you need the equipment to do.</span>
      </div>
    </div>
  </div>;
}

function InventoryScene() {
  return <div className={`${styles.scene} ${styles.inventoryScene}`} aria-hidden="true">
    <div className={styles.inventoryPanel}>
      <div className={styles.panelHeader}><GraphicIcon kind="dealer" /><strong>Product catalogue</strong></div>
      <div className={styles.inventoryRows}>{inventory.map(([src, name, detail]) => <div key={name}>
        <img src={src} alt="" width="64" height="56" loading="lazy" />
        <span><strong>{name}</strong><small>{detail}</small></span>
        <GraphicIcon kind="catalogue" />
      </div>)}</div>
    </div>
  </div>;
}

function SpecificationsScene() {
  return <div className={`${styles.scene} ${styles.specScene}`} aria-hidden="true">
    <div className={styles.specPanel}>
      <div className={styles.specHeading}><GraphicIcon kind="catalogue" /><span><strong>Technical specification</strong><small>Approved source</small></span></div>
      <dl className={styles.specFields}>
        <div><dt>Capacity</dt><dd>Product data</dd></div>
        <div><dt>Dimensions</dt><dd>Product data</dd></div>
        <div><dt>Application</dt><dd>Usage guidance</dd></div>
      </dl>
      <span className={styles.specNote}><GraphicIcon kind="clarify" />Missing details? Ask first.</span>
    </div>
  </div>;
}

function ProcessScene() {
  return <div className={`${styles.scene} ${styles.recommendationScene}`} aria-hidden="true">
    <div className={styles.requirementPanel}>
      <span className={styles.panelCaption}>Approved SOP</span>
      <strong>Warehouse equipment enquiry</strong>
      <span>Qualify · Escalate · Handover</span>
    </div>
    <div className={styles.shortlistPanel}>
      <div className={styles.shortlistProduct}>
        <img src="/images/verified-equipment/linde-e16-p.png" alt="" width="124" height="108" loading="lazy" />
        <span><strong>Approved next step</strong><span className={styles.matchTag}><GraphicIcon kind="review" />Following your SOP</span></span>
      </div>
      <div className={styles.reviewNote}><GraphicIcon kind="review" /><span>Capture the required details and hand over for team approval.</span></div>
    </div>
  </div>;
}

const scenes = [BrandScene, InventoryScene, SpecificationsScene, ProcessScene];

export function HomeAgentFoundations() {
  return <section className={styles.section} aria-labelledby="home-agent-foundations">
    <div className={styles.introFrame}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Built around your business</p>
        <h2 id="home-agent-foundations">One AI Agent. <span>Built Around Your Products.</span></h2>
        <p>Antbuildz AI uses your products, inventory, company knowledge and workflows to understand customer requirements and guide each conversation. From sales and rental to product recommendations, technical questions and after-sales support, your team controls its knowledge and handover rules.</p>
      </div>
    </div>
    <div className={styles.frame}>
      <div className={styles.grid}>
        {AGENT_FOUNDATIONS.map(({ id, title, description }, index) => {
          const Scene = scenes[index];
          return <article key={id} className={`${styles.card} ${styles[id]}`} data-foundation={id}>
            <div className={styles.cardCopy}><h3>{title}</h3><p>{description}</p></div>
            <Scene />
          </article>;
        })}
      </div>
    </div>
  </section>;
}
