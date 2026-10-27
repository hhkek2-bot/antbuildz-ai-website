'use client';

import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import s from './console-mockup.module.css';

type View = 'Overview' | 'Agent Setup' | 'Knowledge Base' | 'Inventory' | 'Conversations' | 'Test Agent' | 'Deploy';
const groups: { title: string; items: View[] }[] = [
  { title: '', items: ['Overview', 'Test Agent'] },
  { title: 'BUILD', items: ['Agent Setup', 'Knowledge Base', 'Inventory'] },
  { title: 'OPERATE', items: ['Conversations', 'Deploy'] },
];
const paths: Record<string, ReactNode> = {
  Overview: <><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></>,
  'Test Agent': <path d="m8 4 12 8-12 8Z"/>,
  'Agent Setup': <><path d="M12 3v3M9 3h6M3 12H1m22 0h-2"/><rect x="3" y="6" width="18" height="15" rx="4"/><path d="M8 11v2m8-2v2m-8 4h8"/></>,
  'Knowledge Base': <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0"/></>,
  Inventory: <><path d="m12 2 9 5v10l-9 5-9-5V7Zm0 10v10M3 7l9 5 9-5M7 4l10 6"/></>,
  Conversations: <path d="M21 11a9 9 0 0 1-9 9H4l-3 3 1-8a9 9 0 1 1 19-4ZM7 10h10M7 14h6"/>,
  Deploy: <><path d="M14 4c3-2 6-2 7-1 1 3-1 7-4 10l-6 4-4-4ZM7 13H3l3-6 5-1m6 7 1 5-5 3v-4M4 17l-2 5 5-2"/><circle cx="16" cy="7" r="1"/></>,
  arrow: <path d="M5 12h14m-5-5 5 5-5 5"/>,
  check: <path d="m5 12 4 4L19 6"/>,
  search: <><circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/></>,
  menu: <path d="M4 6h16M4 12h16M4 18h16"/>,
  close: <path d="m6 6 12 12M6 18 18 6"/>,
  help: <><circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 1 1 4 3v2m0 3h.01"/></>,
};
function Icon({ name }: { name: string }) { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] ?? paths.Overview}</svg>; }
const enquiries = [
  { initials: 'JL', name: 'Jordan Lee', company: 'Example contractor', subject: 'Scissor lift for indoor works', message: 'We need a scissor lift for indoor maintenance. Working height is around 10 metres, for two weeks.', time: '12 min ago', status: 'Needs handover', kind: 'Rental', response: 'I can help narrow down the options. What is the required platform capacity, and are there any doorway or floor-loading restrictions? Availability and the final rental quote will need confirmation from our team.' },
  { initials: 'AT', name: 'Alex Tan', company: 'Example manufacturer', subject: 'Electric forklift specifications', message: 'Can you help compare electric forklifts for a warehouse with narrow aisles?', time: '38 min ago', status: 'In progress', kind: 'Sales', response: 'What load capacity, lift height and aisle width do you need? I can use those requirements to compare the specifications in our catalogue.' },
  { initials: 'SM', name: 'Sam Morgan', company: 'Example distributor', subject: 'Replacement filter compatibility', message: 'I am looking for a replacement hydraulic filter. How do I check compatibility?', time: '1 hour ago', status: 'Answered', kind: 'Parts', response: 'Please share the equipment model and the existing filter part number. The team can verify compatibility before recommending a replacement.' },
];
const sources = [ ['Product catalogue.pdf', 'File', '24 pages', 'Trained'], ['Rental terms & delivery', 'Text', '8 sections', 'Trained'], ['Equipment specifications.csv', 'File', '36 products', 'Trained'], ['Service & maintenance FAQs', 'Text', '12 answers', 'Needs review'] ];
export default function ConsoleMockup() {
  const [view, setView] = useState<View>('Overview');
  const [menu, setMenu] = useState(false);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const [filter, setFilter] = useState('All conversations');
  const [setupTab, setSetupTab] = useState('Instructions');
  const [notice, setNotice] = useState('');
  const [reviewed, setReviewed] = useState(false);
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [rule, setRule] = useState(true);
  const [agentName, setAgentName] = useState('Emma');
  const [role, setRole] = useState('Industrial sales & rental specialist');
  const [instructions, setInstructions] = useState('Help customers find suitable industrial equipment using the approved product catalogue. Ask about application, working height, capacity and site constraints. For rental enquiries, collect the rental period and delivery requirements. Never confirm availability, final prices or technical suitability without approved information. Hand over to the team when confirmation is needed.');
  const [handover, setHandover] = useState('When a customer requests a final quote, collect the product, quantity, rental dates (if relevant) and preferred contact details. Explain that the team needs to confirm the quote. Do not invent a response time.');
  function go(next: View) { setView(next); setMenu(false); setNotice(''); setQuery(''); }
  function send(text: string) {
    if (!text.trim()) return;
    setMessages(m => [...m, { role: 'You', text }, { role: 'Emma · scripted preview', text: 'To find suitable equipment, could you share the working height, required capacity and rental dates? I would check the approved catalogue, then pass availability and pricing to your team for confirmation.' }]);
    setDraft('');
  }
  function heading(title: string, description: string, action?: ReactNode) { return <div className={s.pageHeading}><div><h1>{title}</h1><p>{description}</p></div>{action}</div>; }
  const testButton = <button className={s.primary} onClick={() => go('Test Agent')}><Icon name="Test Agent"/>Test your agent</button>;
  return <div className={s.console} onKeyDown={e => { if (e.key === 'Escape') setMenu(false); }}>
    <a className={s.skip} href="#mockup-content">Skip to content</a>
    <aside className={`${s.sidebar} ${menu ? s.sidebarOpen : ''}`} aria-label="Console sidebar">
      <div className={s.brand}><Link href="/" aria-label="Antbuildz AI home"><span className={`antbuildz-ai-wordmark ${s.wordmark}`} aria-hidden="true"><span className="antbuildz-ai-wordmark__brand"><Image src="/images/antbuildz-wordmark.png" alt="" width={1471} height={225} unoptimized/></span><span className="antbuildz-ai-wordmark__ai">.ai</span></span></Link><button className={s.mobileClose} onClick={() => setMenu(false)} aria-label="Close navigation"><Icon name="close"/></button></div>
      <div className={s.workspace}><span className={s.workspaceIcon}>A</span><div><strong>Antbuildz workspace</strong><span>AI Agent Console</span></div></div>
      <label className={s.agentSelect}><span className={s.avatar}>{agentName.charAt(0)}</span><span><small>ACTIVE AGENT</small><select aria-label="Active demo agent" value={agentName} onChange={e => setAgentName(e.target.value)}><option>Emma</option><option>Atlas</option></select></span></label>
      <nav aria-label="Mockup navigation">{groups.map(group => <div className={s.navGroup} key={group.title}>{group.title && <p>{group.title}</p>}{group.items.map(item => <button key={item} className={view === item ? s.active : ''} aria-current={view === item ? 'page' : undefined} onClick={() => go(item)}><Icon name={item}/>{item}{item === 'Conversations' && <span className={s.navCount}>3</span>}</button>)}</div>)}</nav>
      <div className={s.sidebarBottom}><div className={s.setupProgress}><div><strong>Get your agent ready</strong><span>3 / 5</span></div><div className={s.progress}><i/></div><button onClick={() => go('Agent Setup')}>Continue setup <Icon name="arrow"/></button></div><Link href="/resources/getting-started"><Icon name="help"/>Help & documentation <span>↗</span></Link><Link href="/ai-agent-console"><Icon name="Overview"/>Open current console <span>↗</span></Link><div className={s.profile}><span className={s.profileAvatar}>KH</span><div><strong>Kek Hean</strong><span>Workspace owner</span></div><span className={s.previewPill}>Demo</span></div></div>
    </aside>
    <div className={s.main}>
      <header className={s.topbar}><div><button className={s.mobileMenu} onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label="Toggle navigation"><Icon name="menu"/></button><span className={s.breadcrumb}>Workspace <span>/</span> {agentName} <span>/</span></span><strong>{view}</strong></div><span className={s.previewPill}>Design preview</span></header>
      <main id="mockup-content" className={s.content} inert={menu}>
        <div className={s.previewNote}><span><i/>Interactive concept · All data is illustrative</span><span>No live connections</span></div>
        {view === 'Overview' && <>
          {heading('Your agent, at a glance', 'Keep knowledge current, review enquiries and guide the next conversation.', testButton)}
          <div className={s.agentBanner}><div className={s.largeAvatar}>{agentName.charAt(0)}<span/></div><div><div className={s.inline}><h2>{agentName}</h2><span className={s.badge}>Sales & rental</span></div><p>Your industrial product specialist</p></div><button className={s.secondary} onClick={() => go('Agent Setup')}>Manage agent <Icon name="arrow"/></button></div>
          <div className={s.sectionHeading}><h2>Workspace activity</h2><span>Sample period · Last 7 days</span></div>
          <div className={s.metrics}>{[['Conversations', '128', 'Product questions and enquiries', 'Conversations'], ['Qualified enquiries', '24', 'Ready for your team to review', 'Conversations'], ['Needs handover', '1', 'Availability or quotation checks', 'Conversations'], ['Knowledge sources', '4', reviewed ? 'All sample sources reviewed' : '1 source awaiting review', 'Knowledge Base']].map(([label, value, hint, target]) => <button key={label} onClick={() => go(target as View)}><span>{label}<Icon name="arrow"/></span><strong>{value}</strong><small>{hint}</small></button>)}</div>
          <div className={s.overviewGrid}><section className={s.panel}><div className={s.panelHeading}><div><h2>Recent conversations</h2><p>A clear next step for every enquiry.</p></div><button className={s.textButton} onClick={() => go('Conversations')}>View all <Icon name="arrow"/></button></div><div className={s.conversationRows}>{enquiries.map((row, i) => <button key={row.name} onClick={() => { setSelected(i); setFilter('All conversations'); go('Conversations'); }}><span className={s.contactAvatar}>{row.initials}</span><span className={s.conversationText}><strong>{row.subject}</strong><small>{row.name} · {row.kind}</small></span><span className={s.rowEnd}><span className={i === 0 ? s.attention : s.badge}>{row.status}</span><small>{row.time}</small></span></button>)}</div></section>
          <section className={s.panel}><div className={s.panelHeading}><div><h2>Ready for better answers</h2><p>Build a reliable product specialist.</p></div><span className={s.badge}>3 of 5</span></div><div className={s.checklist}>{[['Define your agent', 'Agent Setup', true], ['Add product knowledge', 'Knowledge Base', true], ['Set commercial boundaries', 'Agent Setup', true], ['Test a rental enquiry', 'Test Agent', false], ['Choose your channels', 'Deploy', false]].map(([label, target, done], i) => <button key={String(label)} onClick={() => go(target as View)}><span className={done ? s.done : s.step}>{done ? <Icon name="check"/> : i + 1}</span><span>{label}</span><Icon name="arrow"/></button>)}</div></section></div>
          <section className={s.knowledgeStrip}><span className={s.stripIcon}><Icon name="Knowledge Base"/></span><div><h3>Good conversations start with good knowledge.</h3><p>Keep specifications, rental terms and handover instructions up to date.</p></div><button className={s.secondary} onClick={() => go('Knowledge Base')}>Review knowledge <Icon name="arrow"/></button></section>
        </>}
        {view === 'Agent Setup' && <>
          {heading('Agent setup', 'Give your agent the context and boundaries to represent your business.', testButton)}
          <div className={s.tabs} aria-label="Agent setup sections">{['Instructions', 'AI rules'].map(tab => <button key={tab} aria-pressed={setupTab === tab} className={setupTab === tab ? s.selectedTab : ''} onClick={() => setSetupTab(tab)}>{tab}</button>)}</div>
          <form className={s.formPanel} onSubmit={e => { e.preventDefault(); setNotice('Draft saved for this preview session only. No live agent was changed.'); }}>
            <div className={s.formIntro}><h2>{setupTab === 'Instructions' ? 'Who your agent is' : 'Commercial boundaries'}</h2><p>{setupTab === 'Instructions' ? 'A clear role helps your agent ask the right questions.' : 'Define when the agent should defer to your team.'}</p></div>
            <div className={s.formBody}>{setupTab === 'Instructions' ? <><label>Agent name<input maxLength={40} value={agentName} onChange={e => setAgentName(e.target.value)} required/></label><label>Role<input value={role} onChange={e => setRole(e.target.value)}/></label><label>Instructions<textarea rows={8} value={instructions} onChange={e => setInstructions(e.target.value)}/></label></> : <><div className={s.ruleRow}><div><strong>Confirm availability with the team</strong><p>Do not promise stock or delivery dates based on assumptions.</p></div><input aria-label="Confirm availability with the team" type="checkbox" checked={rule} onChange={e => setRule(e.target.checked)}/></div><label>Handover guidance<textarea rows={6} value={handover} onChange={e => setHandover(e.target.value)}/></label></>}</div><div className={s.formFooter}><span>Changes apply to this mockup only.</span><button className={s.primary} type="submit">Save draft</button></div>
          </form>
        </>}
        {view === 'Knowledge Base' && <>
          {heading('Knowledge base', 'The product information behind every useful answer.', <button className={s.primary} onClick={() => { setReviewed(true); setNotice('Sample review completed for this session. No files were uploaded or trained.'); }}><Icon name="check"/>Review sample sources</button>)}
          <div className={s.tabs}><span className={s.selectedTab}>All sources <b>4</b></span></div>
          <div className={s.searchRow}><label className={s.search}><Icon name="search"/><input aria-label="Search knowledge sources" placeholder="Search sources…" value={query} onChange={e => setQuery(e.target.value)}/></label><span className={s.subtle}>Illustrative catalogue</span></div>
          <div className={s.tableWrap}><table><thead><tr><th>Source name</th><th>Type</th><th>Content</th><th>Status</th></tr></thead><tbody>{sources.filter(row => row[0].toLowerCase().includes(query.toLowerCase())).map(([name,type,size,status]) => <tr key={name}><td><span className={s.sourceName}><Icon name="Knowledge Base"/>{name}</span></td><td>{type}</td><td>{size}</td><td><span className={status === 'Needs review' && !reviewed ? s.attention : s.badge}>{reviewed ? 'Trained' : status}</span></td></tr>)}</tbody></table>{!sources.some(row => row[0].toLowerCase().includes(query.toLowerCase())) && <p className={s.empty}>No sources match “{query}”.</p>}</div>
          <div className={s.infoNote}><Icon name="help"/><p>Use approved product specifications and commercial terms. Your agent should ask for clarification when the knowledge does not contain an answer.</p></div>
        </>}
        {view === 'Inventory' && <>
          {heading('Product inventory', 'Give conversations the context of your equipment catalogue.', <button className={s.secondary} onClick={() => go('Knowledge Base')}>View knowledge sources <Icon name="arrow"/></button>)}
          <div className={s.searchRow}><label className={s.search}><Icon name="search"/><input aria-label="Search sample inventory" placeholder="Search products…" value={query} onChange={e => setQuery(e.target.value)}/></label><span className={s.badge}>Sample catalogue · 3 products</span></div>
          <div className={s.tableWrap}><table><thead><tr><th>Product</th><th>Category</th><th>Key specification</th><th>Availability</th></tr></thead><tbody>{[['Electric scissor lift', 'Access equipment', '10 m working height'], ['Electric forklift', 'Material handling', '2.5 t rated capacity'], ['Diesel generator', 'Power equipment', '45 kVA rated output']].filter(row => row.join(' ').toLowerCase().includes(query.toLowerCase())).map(([name,category,spec]) => <tr key={name}><td><span className={s.sourceName}><Icon name="Inventory"/>{name}</span></td><td>{category}</td><td>{spec}</td><td><span className={s.attention}>Confirm with team</span></td></tr>)}</tbody></table></div><div className={s.infoNote}><Icon name="help"/><p>Example products only. No stock, pricing or availability is connected to this preview.</p></div>
        </>}
        {view === 'Conversations' && <>
          {heading('Conversations', 'Understand what customers need and where your team can help.')}
          <div className={s.tabs}>{['All conversations', 'Needs handover'].map(tab => <button key={tab} aria-pressed={filter === tab} className={filter === tab ? s.selectedTab : ''} onClick={() => { setFilter(tab); if (tab === 'Needs handover') setSelected(0); }}>{tab}{tab === 'Needs handover' && <b>1</b>}</button>)}</div>
          <div className={s.inbox}><div className={s.inboxList}>{enquiries.map((row, i) => (filter === 'All conversations' || i === 0) && <button key={row.name} className={selected === i ? s.selectedConversation : ''} onClick={() => setSelected(i)}><div><strong>{row.name}</strong><small>{row.time}</small></div><p>{row.subject}</p><span className={i === 0 ? s.attention : s.badge}>{row.status}</span></button>)}</div><section className={s.transcript}><div className={s.transcriptHead}><span className={s.contactAvatar}>{enquiries[selected].initials}</span><div><h2>{enquiries[selected].name}</h2><p>{enquiries[selected].company} · Website</p></div></div><div className={s.messages}><div className={s.date}>Sample conversation</div><div className={s.customerMessage}>{enquiries[selected].message}</div><div className={s.agentMessage}><strong>{agentName} · AI Agent</strong><p>{enquiries[selected].response}</p></div><div className={s.handover}><Icon name="check"/><span>{selected === 0 ? 'Handover requested · Confirm availability and quotation' : 'Requirements captured · Continue reviewing this enquiry'}</span></div></div><div className={s.inboxFooter}><Icon name="help"/>Read-only transcript for design review. No customer messages are sent.</div></section></div>
        </>}
        {view === 'Test Agent' && <>
          {heading('Test your agent', 'Try an industrial enquiry before bringing your agent to customers.')}
          <div className={s.playground}><aside><span className={s.eyebrow}>TEST CONTEXT</span><h2>{agentName}</h2><p>Sales & rental specialist</p><hr/><h3>Try a common enquiry</h3>{['I need a scissor lift for two weeks.', 'Help me compare electric forklifts.', 'Can you confirm the rental price?'].map(prompt => <button key={prompt} onClick={() => send(prompt)}>{prompt}<Icon name="arrow"/></button>)}<div className={s.infoNote}><p>Scripted demonstration. Responses illustrate the proposed layout, not live AI behaviour.</p></div></aside><section className={s.testChat}><div className={s.transcriptHead}><span className={s.avatar}>{agentName.charAt(0)}</span><div><h2>{agentName}</h2><p>Agent preview</p></div><button className={s.textButton} onClick={() => setMessages([])}>Reset</button></div><div className={s.testMessages} aria-live="polite">{messages.length === 0 ? <div className={s.welcome}><span className={s.welcomeIcon}><Icon name="Conversations"/></span><h2>Start with a real product question</h2><p>See how a clear conversation can turn an enquiry into the next useful step.</p></div> : messages.map((message,i) => <div className={message.role === 'You' ? s.customerMessage : s.agentMessage} key={i}><strong>{message.role}</strong><p>{message.text}</p></div>)}</div><form className={s.composer} onSubmit={e => { e.preventDefault(); send(draft); }}><input aria-label="Test message" placeholder="Ask about a product or rental requirement…" value={draft} onChange={e => setDraft(e.target.value)}/><button className={s.primary} disabled={!draft.trim()} aria-label="Send test message"><Icon name="arrow"/></button></form></section></div>
        </>}
        {view === 'Deploy' && <>
          {heading('Deploy your agent', 'Preview how your agent could meet customers across your channels.', testButton)}
          <div className={s.channelGrid}>{[['Website chat', 'Help visitors ask product questions directly on your website.', 'Conversations'], ['AI Webstore Suite', 'Bring product discovery and conversations together.', 'Inventory']].map(([name,description,icon]) => <section className={s.channel} key={name}><span className={s.channelIcon}><Icon name={icon}/></span><span className={s.badge}>Not connected</span><h2>{name}</h2><p>{description}</p><button className={s.secondary} onClick={() => setNotice(`${name}: preview only. No channel has been connected and no embed code has been installed.`)}>Preview channel details <Icon name="arrow"/></button></section>)}</div><div className={s.infoNote}><Icon name="help"/><p>Deployment controls are illustrative. Use the current console to manage actual channels.</p></div>
        </>}
        {notice && <div className={s.notice} role="status"><Icon name="check"/><span>{notice}</span><button onClick={() => setNotice('')} aria-label="Dismiss notification"><Icon name="close"/></button></div>}
        <footer className={s.footer}>Antbuildz AI Agent Console <span>Concept 02 · Chatbase-inspired interface</span></footer>
      </main>
    </div>
  </div>;
}
