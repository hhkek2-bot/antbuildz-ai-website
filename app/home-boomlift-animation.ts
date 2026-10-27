import turns from './home-boomlift-turns.json';

const prompts = ['Would you like the full specifications for this model?', 'Would you like to see the reach diagram?', 'What platform height and horizontal outreach do you need?', 'Would you like to explore a larger boom lift for this position?', 'Do you need rental pricing and availability for your project?', 'What dates do you need it, and where is the project?'];
const progress = (age: number, from: number, duration = .4) => Math.max(0, Math.min(1, (age - from) / duration));
const append = (parent: Node, ...children: Node[]) => children.forEach(child => parent.appendChild(child));
const element = (tag: string, className: string, text = '') => {
  const el = document.createElement(tag); el.className = className; el.textContent = text; return el;
};

/** Reuses the approved BoomLiftChat transcript and its 12-unit reveal timeline. */
export function mountBoomliftAnimation(container: HTMLElement) {
  container.classList.add('home-boomlift-floating');
  container.setAttribute('aria-label', 'Illustrative boom lift conversation: specifications, reach diagram, catalogue and rental options');
  const viewport = element('div', 'home-boom-viewport');
  const thread = element('div', 'home-boom-thread');
  append(viewport, thread);
  const zoom = element('div', 'home-boom-zoom');
  const zoomImage = document.createElement('img');
  zoomImage.src = '/images/home-jlg-1250ajp-reach.png';
  zoomImage.alt = 'JLG 1250AJP reach diagram';
  append(zoom, zoomImage);
  append(container, viewport, zoom);
  const nodes = turns.map((turn, index) => {
    const block = element('div', 'home-boom-turn');
    const question = element('div', 'home-boom-question');
    const answer = element('div', 'home-boom-answer');
    const working = element('small', 'home-boom-working');
    const copy = element('p', '');
    append(answer, working, copy);
    const details = element('div', 'home-boom-details');
    const rows: HTMLElement[] = [];
    if (turn.rows) {
      const table = document.createElement('table');
      const head = document.createElement('thead');
      const tr = document.createElement('tr');
      const headers = turn.tableHeaders || (/[\u3040-\u30ff]/.test(turn.q) ? ['項目', '詳細'] : /[\u4e00-\u9fff]/.test(turn.q) ? ['项目', '详情'] : ['Specification', 'Details']);
      headers.forEach(label => { const th = document.createElement('th'); th.textContent = label; th.scope = 'col'; append(tr, th); });
      append(head, tr); append(table, head);
      const body = document.createElement('tbody');
      turn.rows.forEach(row => { const tr = document.createElement('tr'); row.forEach(value => { const td = document.createElement('td'); td.textContent = value; append(tr, td); }); append(body, tr); rows.push(tr); });
      append(table, body); append(details, table);
      if (turn.fullSpecifications) details.classList.add('is-full-specifications');
    }
    if (turn.catalogue) {
      const link = document.createElement('a'); link.href = turn.catalogue.url; link.target = '_blank'; link.rel = 'noopener noreferrer';
      link.textContent = `${turn.catalogue.title} · ${turn.catalogue.detail} — Open catalogue ↗`; append(details, link);
    }
    const picture = element('div', 'home-boom-picture');
    if (turn.image) {
      const table = element('div', 'home-boom-reach-values', 'Unrestricted: 230 kg · 19.3 m reach | Restricted: 450 kg · 16.2 m reach. Maximum platform height: 38.1 m.');
      append(details, table);
      const img = document.createElement('img'); img.src = zoomImage.src; img.alt = zoomImage.alt;
      append(picture, img, element('span', 'home-boom-expand', '⤢')); append(answer, picture);
    }
    const outcome = element('p', 'home-boom-outcome', turn.outcome || '');
    const note = element('small', 'home-boom-note');
    const next = element('p', 'home-boom-next', prompts[index]);
    answer.insertBefore(details, picture.parentNode ? picture : null);
    append(answer, outcome, note, next); append(block, question, answer); append(thread, block);
    return {block, question, answer, working, copy, details, rows, picture, outcome, note, next};
  });
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let elapsed = 0, previous = performance.now(), paused = reduced.matches, frame = 0;
  const duration = 1.4 + turns.length * 12 / 2.1 + 2;
  const visible = (el: HTMLElement, show: boolean) => { el.hidden = !show; };
  const type = (el: HTMLElement, text: string, amount: number) => { const value = text.slice(0, Math.floor(text.length * amount)); if (el.textContent !== value) el.textContent = value; };
  const render = () => {
    const t = reduced.matches ? turns.length * 12 : elapsed < 1.4 ? elapsed * (1.7 / 1.4) : 1.7 + (elapsed - 1.4) * 2.1;
    nodes.forEach((node, i) => {
      const turn = turns[i], age = t - i * 12;
      visible(node.block, age >= 0); if (age < 0) return;
      type(node.question, turn.q, progress(age, 0, .85));
      visible(node.answer, age >= 2.05);
      type(node.working, age < 4.2 ? 'Working…' : 'Worked for 1s', 1);
      type(node.copy, turn.a, progress(age, 4.2, .8));
      visible(node.details, age >= 5.95); node.details.style.opacity = String(progress(age, 5.95, .65));
      node.rows.forEach((row,j) => { row.style.opacity = String(progress(age, 6 + j * .15)); });
      if (turn.fullSpecifications) node.details.scrollTop = (node.details.scrollHeight - node.details.clientHeight) * progress(age, 7.2, 3.6);
      visible(node.picture, !!turn.image && age >= 7.2);
      node.picture.classList.toggle('is-pressing', age >= 8.35 && age < 9.05);
      visible(node.outcome, !!turn.outcome && age >= 7.3);
      type(node.note, turn.note || '', progress(age, 7.75, 1.05));
      visible(node.next, age >= 9.5);
    });
    const index = Math.floor(t / 12);
    const chartAge = t - 24;
    visible(zoom, !reduced.matches && chartAge >= 8.6 && chartAge < 11.6);
    zoom.style.opacity = String(Math.min(progress(chartAge, 8.6, .7), 1 - progress(chartAge, 10.8, .8)));
    if (!reduced.matches && !paused) viewport.scrollTop = Math.max(0, thread.offsetHeight - viewport.clientHeight);
    container.dataset.turn = String(Math.min(index + 1, turns.length));
  };
  const motionChange = () => { paused = reduced.matches; render(); };
  reduced.addEventListener('change', motionChange);
  const tick = (now: number) => { if (!paused && !document.hidden) elapsed = (elapsed + Math.min((now - previous) / 1000, .1)) % duration; previous = now; render(); frame = requestAnimationFrame(tick); };
  render(); frame = requestAnimationFrame(tick);
  return () => { cancelAnimationFrame(frame); reduced.removeEventListener('change', motionChange); container.replaceChildren(); };
}
