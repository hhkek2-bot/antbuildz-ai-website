import type { CSSProperties, ReactNode } from 'react';
import { AbsoluteFill, Easing, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';

export type ExperienceKind = 'hero' | 'technical' | 'recommendations' | 'explanations' | 'actions';

type Props = { kind: ExperienceKind; compact?: boolean; poster?: boolean };

const palette = {
  canvas: '#F8F7FF', clean: '#FFFFFF', soft: '#F1EFF8', ink: '#0F172A', body: '#475569', muted: '#64748B', yellow: '#FFC501', red: '#E3180A', blue: '#3B82F6', violet: '#7C3AED', line: '#DDE3EE',
};

const titles: Record<ExperienceKind, { eyebrow: string; title: string; final: string }> = {
  hero: { eyebrow: 'AI AGENT CONVERSATIONS', title: 'AI conversations that go beyond text', final: 'From product question to the next step.' },
  technical: { eyebrow: 'TECHNICAL COMPARISON', title: 'Complex information. Clear comparisons.', final: 'Complex specifications, made easier to understand.' },
  recommendations: { eyebrow: 'PRODUCT DISCOVERY', title: 'From questions to product discovery.', final: 'Discover. Compare. Explore.' },
  explanations: { eyebrow: 'STRUCTURED EXPLANATIONS', title: 'Better explanations. Easier understanding.', final: 'Information presented the way it should be.' },
  actions: { eyebrow: 'NEXT ACTIONS', title: 'Turn conversations into action.', final: 'From conversation to the next step.' },
};

const emphasis = (frame: number, from: number, fps: number) => spring({ frame: frame - from, fps, config: { damping: 21, stiffness: 120, mass: 0.8 } });
const fade = (frame: number, from: number, fps: number) => interpolate(emphasis(frame, from, fps), [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
const slide = (frame: number, from: number, fps: number, y = 28) => interpolate(emphasis(frame, from, fps), [0, 1], [y, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

function Revealed({ from, children, style, y = 28 }: { from: number; children: ReactNode; style?: CSSProperties; y?: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return <div style={{ opacity: fade(frame, from, fps), translate: `0 ${slide(frame, from, fps, y)}px`, ...style }}>{children}</div>;
}

function AgentMark({ small = false }: { small?: boolean }) {
  const size = small ? 34 : 44;
  return <span style={{ width: size, height: size, overflow: 'hidden', display: 'block', borderRadius: '50%', border: `2px solid ${palette.clean}`, boxShadow: '0 7px 16px rgb(15 23 42 / 16%)', background: palette.red, flex: '0 0 auto' }}><Img src={staticFile('emma-sales-agent.jpg')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></span>;
}

function ChatBubble({ from, side, children, compact = false }: { from: number; side: 'agent' | 'buyer'; children: ReactNode; compact?: boolean }) {
  const isAgent = side === 'agent';
  return <Revealed from={from} y={18} style={{ display: 'flex', gap: 10, alignItems: 'flex-end', alignSelf: isAgent ? 'flex-start' : 'flex-end', maxWidth: compact ? '94%' : '76%', flexDirection: isAgent ? 'row' : 'row-reverse' }}>
    {isAgent && <AgentMark small />}
    <div style={{ padding: compact ? '12px 14px' : '13px 16px', borderRadius: isAgent ? '17px 17px 17px 5px' : '17px 17px 5px 17px', background: isAgent ? '#EAF3FF' : '#FFF3C8', color: palette.ink, fontSize: compact ? 16 : 18, lineHeight: 1.42, boxShadow: '0 10px 20px rgb(15 23 42 / 7%)' }}>{children}</div>
  </Revealed>;
}

function ChatChrome({ children, compact }: { children: ReactNode; compact: boolean }) {
  return <div style={{ width: '100%', borderRadius: compact ? 26 : 30, overflow: 'hidden', background: palette.clean, border: `1px solid ${palette.line}`, boxShadow: '0 34px 70px rgb(15 23 42 / 17%)' }}>
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: compact ? '15px 18px' : '17px 22px', borderBottom: `1px solid ${palette.line}` }}>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}><AgentMark small /><div><strong style={{ display: 'block', color: palette.ink, fontSize: compact ? 15 : 17 }}>Emma</strong><small style={{ color: palette.muted, fontSize: compact ? 12 : 13 }}>AI Sales Agent</small></div></div>
      <span style={{ color: palette.muted, fontSize: compact ? 11 : 12, fontWeight: 800, letterSpacing: '0.13em' }}>DEMO</span>
    </header>
    <div style={{ display: 'flex', minHeight: compact ? 500 : 420, padding: compact ? 18 : 22, gap: 14, flexDirection: 'column', background: 'linear-gradient(180deg, #ffffff, #F8FAFD)' }}>{children}</div>
  </div>;
}

function Table({ rows, from, compact, highlight }: { rows: readonly [string, string, string][]; from: number; compact: boolean; highlight?: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return <div style={{ overflow: 'hidden', marginTop: 2, border: `1px solid ${palette.line}`, borderRadius: 16, background: palette.clean, boxShadow: '0 9px 20px rgb(15 23 42 / 6%)' }}>
    <div style={{ display: compact ? 'none' : 'grid', gridTemplateColumns: '1.1fr 1fr 1fr', gap: 12, padding: '11px 14px', background: palette.soft, color: palette.muted, fontSize: 11, fontWeight: 800, letterSpacing: '0.08em' }}><span>SPECIFICATION</span><span>TOYOTA 8FBMT50</span><span>HYSTER J3.5XN</span></div>
    {rows.map(([label, left, right], index) => {
      const show = fade(frame, from + index * 16, fps);
      const active = highlight === index;
      return <div key={label} style={{ opacity: show, translate: `0 ${interpolate(show, [0, 1], [16, 0])}px`, display: compact ? 'grid' : 'grid', gridTemplateColumns: compact ? '1fr 1fr' : '1.1fr 1fr 1fr', gap: compact ? 7 : 12, padding: compact ? '11px 13px' : '12px 14px', borderTop: index ? `1px solid ${palette.line}` : 0, background: active ? '#FFF8D9' : palette.clean, color: palette.body, fontSize: compact ? 13 : 14, lineHeight: 1.35 }}>
        <strong style={{ gridColumn: compact ? '1 / -1' : undefined, color: palette.ink, fontSize: compact ? 12 : 14 }}>{label}</strong><span>{left}</span><span>{right}</span>
      </div>;
    })}
  </div>;
}

function FeatureHeader({ kind, compact }: { kind: ExperienceKind; compact: boolean }) {
  const title = titles[kind];
  return <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 22, marginBottom: compact ? 22 : 28 }}>
    <div><p style={{ margin: 0, color: palette.red, fontSize: compact ? 11 : 12, fontWeight: 850, letterSpacing: '0.16em' }}>{title.eyebrow}</p><h2 style={{ margin: '8px 0 0', maxWidth: compact ? 430 : 560, color: palette.ink, fontSize: compact ? 29 : 38, lineHeight: 1.06, letterSpacing: '-0.045em' }}>{title.title}</h2></div>
    {!compact && <span style={{ padding: '9px 12px', border: `1px solid ${palette.line}`, borderRadius: 999, color: palette.muted, fontSize: 11, fontWeight: 750 }}>Illustrative conversation</span>}
  </div>;
}

function Technical({ compact }: { compact: boolean }) {
  return <ChatChrome compact={compact}>
    <ChatBubble from={10} side="buyer" compact={compact}>Can you compare two electric forklifts for a 5 t requirement?</ChatBubble>
    <ChatBubble from={45} side="agent" compact={compact}>Here is a clear comparison of the approved specification records. Final configuration still depends on the load, lift height and aisle conditions.</ChatBubble>
    <Revealed from={84}><Table compact={compact} from={94} highlight={0} rows={[
      ['Rated load', '4,990 kg at 600 mm load centre', '3,500 kg at 500 mm load centre'],
      ['Power', 'Electric counterbalance', 'Electric counterbalance'],
      ['What needs review', 'Mast, load centre, attachment and aisle', 'Capacity gap for the stated requirement'],
    ]} /></Revealed>
    <Revealed from={212} style={{ alignSelf: 'flex-start', color: palette.body, fontSize: compact ? 14 : 15, fontWeight: 650 }}>The 5 t requirement needs configuration and site review before a team recommendation.</Revealed>
  </ChatChrome>;
}

function RecommendationCard({ from, title, body, primary }: { from: number; title: string; body: string; primary?: boolean }) {
  return <Revealed from={from} y={18} style={{ padding: '13px 15px', borderRadius: 15, border: `1px solid ${primary ? '#EAC500' : palette.line}`, background: primary ? '#FFFBE5' : palette.clean, boxShadow: '0 8px 18px rgb(15 23 42 / 5%)' }}><strong style={{ color: palette.ink, display: 'block', fontSize: 15 }}>{title}</strong><span style={{ color: palette.body, display: 'block', marginTop: 4, fontSize: 13, lineHeight: 1.4 }}>{body}</span></Revealed>;
}

function Recommendations({ compact }: { compact: boolean }) {
  return <ChatChrome compact={compact}>
    <ChatBubble from={10} side="buyer" compact={compact}>We need an electric forklift close to 5 t for an indoor warehouse.</ChatBubble>
    <ChatBubble from={43} side="agent" compact={compact}>I can narrow this to approved product records. I’ll keep the final choice with your equipment team.</ChatBubble>
    <Revealed from={80} style={{ display: 'grid', gap: 10 }}>
      <RecommendationCard from={86} primary title="Toyota 8FBMT50" body="4,990 kg rated load at a 600 mm load centre. Confirm mast, load geometry and aisle clearance." />
      <RecommendationCard from={112} title="Hyster J3.5XN" body="3,500 kg rated load at a 500 mm load centre. Below the stated 5 t requirement." />
    </Revealed>
    <Revealed from={158} style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 8, padding: '10px 13px', borderRadius: 999, color: palette.ink, background: '#EAF3FF', fontSize: compact ? 13 : 14, fontWeight: 750 }}>View approved product information <span style={{ color: palette.blue }}>↗</span></Revealed>
    <Revealed from={215} style={{ color: palette.body, fontSize: compact ? 14 : 15, fontWeight: 650 }}>Product details guide the shortlist. The team confirms suitability and commercial terms.</Revealed>
  </ChatChrome>;
}

function Explanations({ compact }: { compact: boolean }) {
  return <ChatChrome compact={compact}>
    <ChatBubble from={10} side="buyer" compact={compact}>Why is rated capacity not enough to choose a forklift?</ChatBubble>
    <ChatBubble from={42} side="agent" compact={compact}>The rating is a starting point. The working configuration and the operating space can change what is suitable.</ChatBubble>
    <Revealed from={82} style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : 'repeat(3, 1fr)', gap: 10 }}>
      {[
        ['Rated load', 'Check the stated load and load centre.'],
        ['Working configuration', 'Mast, attachment and load geometry affect capacity.'],
        ['Site conditions', 'Aisle geometry needs its own review.'],
      ].map(([title, body], index) => <Revealed key={title} from={92 + index * 20} y={15} style={{ padding: '14px', borderRadius: 15, border: `1px solid ${palette.line}`, background: palette.clean }}><strong style={{ display: 'block', color: palette.ink, fontSize: 14 }}>{title}</strong><span style={{ display: 'block', marginTop: 6, color: palette.body, fontSize: 13, lineHeight: 1.38 }}>{body}</span></Revealed>)}
    </Revealed>
    <Revealed from={188} style={{ padding: '13px 15px', borderRadius: 16, borderLeft: `4px solid ${palette.yellow}`, background: '#FFFBEA', color: palette.ink, fontSize: compact ? 14 : 15, lineHeight: 1.4, fontWeight: 700 }}>Main takeaway: collect the remaining requirements before your team confirms a supported option.</Revealed>
  </ChatChrome>;
}

function Actions({ compact }: { compact: boolean }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const ring = interpolate(Math.sin(Math.max(0, frame - 132) / fps * 4), [-1, 1], [0.02, 0.26], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return <ChatChrome compact={compact}>
    <ChatBubble from={10} side="buyer" compact={compact}>This is helpful. Can I talk through our catalogue and customer questions?</ChatBubble>
    <ChatBubble from={42} side="agent" compact={compact}>Yes. A short demo is the best next step to map your products, knowledge and handover process.</ChatBubble>
    <Revealed from={98} style={{ display: 'flex', justifyContent: 'center', position: 'relative', padding: compact ? '26px 0' : '32px 0' }}>
      <span style={{ position: 'absolute', width: compact ? 270 : 300, height: 72, borderRadius: 999, background: `rgb(255 197 1 / ${ring})`, scale: 1 + ring }} />
      <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: compact ? 235 : 270, height: 58, padding: '0 24px', borderRadius: 999, background: palette.yellow, color: palette.ink, boxShadow: '0 16px 28px rgb(198 147 0 / 22%)', fontSize: 16, fontWeight: 800 }}>Book a Demo <span style={{ marginLeft: 10 }}>→</span></span>
    </Revealed>
    <Revealed from={180} style={{ padding: '12px 14px', borderRadius: 15, background: palette.soft, color: palette.body, fontSize: compact ? 13 : 14, lineHeight: 1.4 }}>The demonstration shows a next action only. A booking is confirmed after a time is chosen and submitted.</Revealed>
  </ChatChrome>;
}

function Hero({ compact }: { compact: boolean }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const phase = Math.min(3, Math.floor(frame / (3 * fps)));
  const label = ['Ask', 'Compare', 'Explore', 'Act'][phase];
  return <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : '0.78fr 1.22fr', alignItems: 'center', gap: compact ? 24 : 42, height: '100%' }}>
    <div>
      <p style={{ margin: 0, color: palette.red, fontSize: compact ? 11 : 12, fontWeight: 850, letterSpacing: '0.16em' }}>AI AGENT CONVERSATIONS</p>
      <h1 style={{ margin: '12px 0 0', maxWidth: 480, color: palette.ink, fontSize: compact ? 45 : 62, lineHeight: 0.98, letterSpacing: '-0.055em' }}>Beyond a<br /><span style={{ background: 'linear-gradient(90deg, #7C3AED, #3B82F6, #D4A002)', color: 'transparent', backgroundClip: 'text' }}>simple answer</span></h1>
      <p style={{ margin: '20px 0 0', maxWidth: 405, color: palette.body, fontSize: compact ? 17 : 19, lineHeight: 1.52 }}>Show product knowledge in a way that helps buyers understand their next step.</p>
      <div style={{ display: 'flex', gap: 7, marginTop: 28 }}>{['Ask', 'Compare', 'Explore', 'Act'].map((item, index) => <span key={item} style={{ padding: '7px 10px', borderRadius: 999, background: index === phase ? palette.yellow : palette.soft, color: palette.ink, fontSize: 11, fontWeight: 800 }}>{item}</span>)}</div>
    </div>
    <ChatChrome compact={compact}>
      <ChatBubble from={5} side="buyer" compact={compact}>Can you help us compare electric forklift options?</ChatBubble>
      <ChatBubble from={36} side="agent" compact={compact}>I can structure the approved information and highlight what needs review.</ChatBubble>
      <Revealed from={90}><Table compact={compact} from={100} highlight={0} rows={[
        ['Rated load', '4,990 kg', '3,500 kg'],
        ['Power', 'Electric', 'Electric'],
      ]} /></Revealed>
      <Revealed from={184} style={{ display: 'inline-flex', alignSelf: 'flex-start', padding: '9px 12px', borderRadius: 999, background: '#EAF3FF', color: palette.ink, fontSize: 13, fontWeight: 750 }}>Explore approved product information ↗</Revealed>
      <Revealed from={260} style={{ alignSelf: 'flex-start', padding: '11px 16px', borderRadius: 999, background: palette.yellow, color: palette.ink, fontSize: 14, fontWeight: 800 }}>Book a Demo →</Revealed>
      <div style={{ color: palette.muted, fontSize: 11, fontWeight: 750, marginTop: 'auto' }}>Illustrative conversation flow · {label}</div>
    </ChatChrome>
  </div>;
}

function FeatureContent({ kind, compact }: { kind: ExperienceKind; compact: boolean }) {
  return kind === 'hero' ? <Hero compact={compact} /> : kind === 'technical' ? <Technical compact={compact} /> : kind === 'recommendations' ? <Recommendations compact={compact} /> : kind === 'explanations' ? <Explanations compact={compact} /> : <Actions compact={compact} />;
}

const posterMeta: Record<Exclude<ExperienceKind, 'hero'>, { number: string; label: string; note: string }> = {
  technical: { number: '01', label: 'Technical comparison', note: 'Organise approved specifications into a clear review.' },
  recommendations: { number: '02', label: 'Product discovery', note: 'Connect the conversation to approved product information.' },
  explanations: { number: '03', label: 'Structured explanation', note: 'Make complex requirements easier to understand.' },
  actions: { number: '04', label: 'Relevant next action', note: 'Present a configured action when the buyer is ready.' },
};

function Poster({ kind, compact }: { kind: Exclude<ExperienceKind, 'hero'>; compact: boolean }) {
  const meta = posterMeta[kind];
  return <AbsoluteFill style={{ background: palette.canvas, color: palette.ink, fontFamily: 'Inter, Arial, sans-serif', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 88% 8%, rgb(124 58 237 / 9%), transparent 31%), radial-gradient(circle at 8% 94%, rgb(255 197 1 / 12%), transparent 29%)' }} />
    <main style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%', padding: compact ? '34px 32px' : '48px 58px' }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: compact ? 34 : 38, height: compact ? 34 : 38, borderRadius: 999, background: palette.yellow, color: palette.ink, fontSize: compact ? 12 : 13, fontWeight: 850 }}>{meta.number}</span>
          <div><div style={{ color: palette.red, fontSize: compact ? 10 : 11, fontWeight: 850, letterSpacing: '0.16em' }}>RICH CONVERSATION</div><div style={{ marginTop: 3, color: palette.ink, fontSize: compact ? 14 : 16, fontWeight: 800 }}>{meta.label}</div></div>
        </div>
        <span style={{ padding: compact ? '7px 9px' : '8px 11px', border: `1px solid ${palette.line}`, borderRadius: 999, background: 'rgb(255 255 255 / 72%)', color: palette.muted, fontSize: compact ? 10 : 11, fontWeight: 750 }}>Illustrative interface</span>
      </header>
      <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', padding: compact ? '26px 0 20px' : '32px 0 24px' }}>
        <div style={{ width: '100%', maxWidth: compact ? 600 : 1030 }}><FeatureContent kind={kind} compact={compact} /></div>
      </div>
      <footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18, paddingTop: compact ? 0 : 4, color: palette.muted, fontSize: compact ? 11 : 12, lineHeight: 1.4 }}><span>{meta.note}</span><span style={{ color: palette.ink, fontWeight: 750, whiteSpace: 'nowrap' }}>Human review remains essential</span></footer>
    </main>
  </AbsoluteFill>;
}

export const ConversationExperience = ({ kind, compact = false, poster = false }: Props) => {
  if (poster && kind !== 'hero') return <Poster kind={kind} compact={compact} />;
  const feature = <FeatureContent kind={kind} compact={compact} />;
  return <AbsoluteFill style={{ background: palette.canvas, color: palette.ink, fontFamily: 'Inter, Arial, sans-serif', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 86% 8%, rgb(124 58 237 / 10%), transparent 32%), radial-gradient(circle at 14% 94%, rgb(255 197 1 / 13%), transparent 32%)' }} />
    <main style={{ position: 'relative', height: '100%', padding: compact ? '42px 38px' : '52px 64px' }}>
      {kind === 'hero' ? feature : <><FeatureHeader kind={kind} compact={compact} /><div style={{ maxWidth: compact ? 600 : 880, margin: '0 auto' }}>{feature}</div><Revealed from={224} style={{ marginTop: compact ? 22 : 26, textAlign: 'center', color: palette.ink, fontSize: compact ? 19 : 22, fontWeight: 800 }}>{titles[kind].final}</Revealed></>}
    </main>
  </AbsoluteFill>;
};
