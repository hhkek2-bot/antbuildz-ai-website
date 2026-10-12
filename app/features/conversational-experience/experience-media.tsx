/* eslint-disable @next/next/no-img-element -- Local images inside labelled static conversation illustrations. */
import type { ReactNode } from 'react';
import styles from './experience.module.css';

type DemonstrationId = 'technical-comparison' | 'visual-references' | 'product-recommendations' | 'structured-explanations' | 'interactive-actions';

type Demonstration = {
  id: DemonstrationId;
  title: string;
  description: string;
  alt: string;
};

const demonstrations: Demonstration[] = [
  {
    id: 'technical-comparison',
    title: 'Compare complex product specifications in the conversation.',
    description: 'When a customer asks how two models differ, present approved specification data in a concise comparison table so capacity, outreach and configuration details are easier to assess.',
    alt: 'Illustrative Antbuildz AI Agent conversation comparing LEO30Tplus and LEO35Tplus specifications, then asking about height, outreach and load.',
  },
  {
    id: 'visual-references',
    title: 'Show the relevant technical diagram in the conversation.',
    description: 'Surface the reach envelope, wiring schematic or document snapshot that answers the question, alongside a plain-English explanation and the documented figures that matter.',
    alt: 'Illustrative Antbuildz AI Agent conversation showing the E450 reach diagram and asking about the height and horizontal distance required.',
  },
  {
    id: 'product-recommendations',
    title: 'Guide product discovery with useful next steps.',
    description: 'Surface approved options, relevant product references and focused follow-up questions that help customers narrow an enquiry without searching through a long catalogue.',
    alt: 'Illustrative Antbuildz AI Agent conversation clarifying working height before showing a scissor lift comparison table and catalogue reference. Rates, suitability and availability require confirmation.',
  },
  {
    id: 'structured-explanations',
    title: 'Explain technical choices in a structured response.',
    description: 'Use headings and comparison tables when they make dense product knowledge easier to understand, while keeping the customer in the same conversation.',
    alt: 'Illustrative Antbuildz AI Agent phone conversation using a concise comparison to explain two approaches.',
  },
  {
    id: 'interactive-actions',
    title: 'Offer a relevant action when the customer is ready.',
    description: 'After a question is understood, show one configured action, such as booking a meeting, so the customer can move forward without an unnecessary detour.',
    alt: 'Illustrative Antbuildz AI Agent conversation offering a meeting link to discuss lift suitability with the equipment team. No meeting is booked by this illustration.',
  },
];

function ExternalArrow() {
  return <svg aria-hidden="true" viewBox="0 0 18 18" fill="none"><path d="M7 4h7v7M14 4 7 11M12 10v3.2c0 .44-.36.8-.8.8H4.8a.8.8 0 0 1-.8-.8V6.8c0-.44.36-.8.8-.8H8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function PhoneHeader() {
  return <>
    <div className={styles.phoneHeader}>
      <img src="/images/emma-sales-agent.jpg" alt="" width="38" height="38" />
      <span><strong>Emma</strong><small>AI Sales Agent</small></span>
      <em>•••</em>
    </div>
  </>;
}

function Message({ children, buyer = false }: { children: ReactNode; buyer?: boolean }) {
  return <p className={buyer ? styles.buyerMessage : styles.agentMessage}>{children}</p>;
}

function AgentIdentity() {
  return <div className={styles.agentIdentity}>
    <img src="/images/emma-sales-agent.jpg" alt="" width="28" height="28" />
    <span>AI</span>
  </div>;
}

function ConversationHeading({ children }: { children: ReactNode }) {
  return <h4 className={styles.conversationHeading}>{children}</h4>;
}

function TechnicalContent() {
  return <>
    <Message buyer>How do the LEO30Tplus and LEO35Tplus compare?</Message>
    <AgentIdentity />
    <p className={styles.agentLine}>Here are the key specifications.</p>
    <p className={styles.agentCopy}>The LEO35Tplus has a higher maximum working height, but is longer and heavier.</p>
    <ConversationHeading>Key Specifications</ConversationHeading>
    <div className={styles.tableCard}>
      <table className={styles.technicalTable}>
        <thead><tr><th>Specification</th><th>LEO30Tplus</th><th>LEO35Tplus</th></tr></thead>
        <tbody>
          <tr><th>Max. working height</th><td>30 m</td><td>35 m</td></tr>
          <tr><th>Max. platform capacity</th><td>400 kg</td><td>400 kg</td></tr>
          <tr><th>Length with platform</th><td>7.70 m</td><td>8.00 m</td></tr>
          <tr><th>Stowed width</th><td>1.58 m</td><td>1.58 m</td></tr>
          <tr><th>Stowed height</th><td>1.98 m</td><td>1.99 m</td></tr>
          <tr><th>Total weight</th><td>4,550 kg</td><td>5,500 kg</td></tr>
        </tbody>
      </table>
    </div>
    <p className={styles.agentCopy}>Height and capacity maxima are not simultaneous. Check the model’s load chart.</p>
    <p className={styles.agentCopy}>What working height, outreach and platform load does your job require?</p>
  </>;
}

function VisualReferenceContent() {
  return <>
    <Message buyer>What is the outreach chart for the E450 boom lift?</Message>
    <AgentIdentity />
    <p className={styles.agentLine}>Here is the E450 reach diagram.</p>
    <p className={styles.agentCopy}>It shows how horizontal reach changes with height. The team will need to confirm the chart for your exact model and configuration.</p>
    <p className={styles.compactLabel}>Details to check</p>
    <div className={styles.tableCard}>
      <table className={styles.reachTable}>
        <thead><tr><th>Requirement</th><th>What to confirm</th></tr></thead>
        <tbody>
          <tr><th>Required height</th><td>Target working level</td></tr>
          <tr><th>Horizontal reach</th><td>Distance from setup</td></tr>
          <tr><th>Exact model</th><td>Matching reach chart</td></tr>
        </tbody>
      </table>
    </div>
    <div className={styles.visualReference}>
      <img src="/images/conversational-experience/e450-reach-diagram.png" alt="E300, E400 and E450 reach diagrams; the E450 is on the right" />
    </div>
    <p className={styles.agentCopy}>What height do you need to reach, and how far is the work area from where the machine can stand?</p>
  </>;
}

function RecommendationsContent() {
  return <>
    <Message buyer>I need a 6 m scissor lift to rent.</Message>
    <AgentIdentity />
    <p className={styles.agentLine}>Is 6 m the working or platform height?</p>
    <Message buyer>Working height. Indoors, on a level floor.</Message>
    <p className={styles.agentCopy}>These are examples to review.</p>
    <ConversationHeading>Example Rental Options</ConversationHeading>
    <div className={styles.tableCard}>
      <table className={styles.recommendationTable}>
        <thead><tr><th>Equipment</th><th>Daily<br />Rate</th><th>Weekly<br />Rate</th><th>Monthly<br />Rate</th><th>Delivery</th></tr></thead>
        <tbody>
          <tr><th>JLG 1930ES Electric Scissor Lift</th><td>SGD 350</td><td>SGD 350</td><td>SGD 350</td><td>SGD 0</td></tr>
          <tr><th>XCMG XG0807HD Electric Scissor Lift</th><td>SGD 350</td><td>SGD 350</td><td>SGD 350</td><td>SGD 0</td></tr>
          <tr><th>Manitou SE0808 Electric Scissor Lift</th><td>SGD 350</td><td>SGD 350</td><td>SGD 350</td><td>SGD 0</td></tr>
        </tbody>
      </table>
    </div>
    <div className={styles.productLink} aria-label="Illustrative product catalogue link"><ExternalArrow /><span>Explore scissor lift options</span></div>
    <p className={styles.agentCopy}>What dates and platform load do you need? The team will confirm suitability, availability and rates.</p>
  </>;
}

function ExplanationContent() {
  return <>
    <Message buyer>How is an AI Agent different from a chatbot?</Message>
    <AgentIdentity />
    <p className={styles.agentLine}>Here is a practical comparison.</p>
    <p className={styles.agentCopy}>A chatbot usually follows a fixed path. An AI Agent can use approved knowledge and the customer’s context to clarify needs and guide the next useful step.</p>
    <ConversationHeading>AI Agent vs Chatbot: Comparison</ConversationHeading>
    <div className={styles.tableCard}>
      <table className={styles.explanationTable}>
        <thead><tr><th>Capability</th><th>Traditional Chatbot</th><th>AI Agent</th></tr></thead>
        <tbody>
          <tr><th>Conversation approach</th><td>Predefined paths</td><td>Uses context to guide the conversation</td></tr>
          <tr><th>Handling ambiguous questions</th><td>Often falls back or routes</td><td>Can ask relevant follow-up questions</td></tr>
          <tr><th>Understanding requirements</th><td>Usually needs structured input</td><td>Can work from natural-language requirements</td></tr>
          <tr><th>Multi-step conversations</th><td>Linear flow</td><td>Can guide several connected next steps</td></tr>
        </tbody>
      </table>
    </div>
    <p className={styles.agentCopy}>This helps the customer move from a question to a useful next action.</p>
  </>;
}

function ActionContent() {
  return <>
    <Message buyer>Can I speak to someone about which lift suits our site?</Message>
    <AgentIdentity />
    <p className={styles.agentLine}>Yes — the equipment team can review your requirements with you.</p>
    <p className={styles.agentCopy}>Use the meeting link below to choose a time. Your booking is confirmed when you receive confirmation from the booking service.</p>
    <div className={styles.actionPanel}><div className={styles.demoAction} aria-label="Illustrative Arrange a product discussion action">Arrange a product discussion</div></div>
    <Message buyer>What should I prepare?</Message>
    <p className={styles.agentCopy}>Bring site photos, access dimensions, the height and reach you need, and the expected platform load.</p>
  </>;
}

function ConversationContent({ id }: { id: DemonstrationId }) {
  if (id === 'technical-comparison') return <TechnicalContent />;
  if (id === 'visual-references') return <VisualReferenceContent />;
  if (id === 'product-recommendations') return <RecommendationsContent />;
  if (id === 'structured-explanations') return <ExplanationContent />;
  return <ActionContent />;
}

function ConversationPhone({ item }: { item: Demonstration }) {
  const isVisualReference = item.id === 'visual-references';
  return <div className={styles.phoneStage} role="img" aria-label={item.alt}>
    <div className={styles.phone}>
      <PhoneHeader />
      <div className={`${styles.phoneTranscript} ${item.id === 'interactive-actions' ? styles.phoneTranscriptAction : ''} ${isVisualReference ? styles.phoneTranscriptVisual : ''}`}>
        <ConversationContent id={item.id} />
      </div>
      <div className={styles.messageBar} aria-hidden="true"><span>Ask a question…</span><b>↑</b></div>
    </div>
  </div>;
}

export function ExperienceGallery() {
  return <div className={styles.galleryList} aria-label="Conversation features demonstrations">
    {demonstrations.map((item, index) => <article className={styles.galleryRow} key={item.id}>
      <div className={styles.galleryCopy}><span className={styles.galleryNumber}>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.description}</p></div>
      <ConversationPhone item={item} />
    </article>)}
  </div>;
}
