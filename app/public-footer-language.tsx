'use client';

import { useEffect, useRef, useState } from 'react';

// Same preference key and change event as the main site's language selector.
const languages = [
  ['en', 'EN', 'English', 'English'], ['zh-CN', 'ZH', '简体中文', 'Chinese (Simplified)'],
  ['zh-TW', 'ZH', '繁體中文', 'Chinese (Traditional)'], ['ms', 'MS', 'Bahasa Melayu', 'Malay'],
  ['th', 'TH', 'ภาษาไทย', 'Thai'], ['es', 'ES', 'Español', 'Spanish'],
  ['ja', 'JA', '日本語', 'Japanese'], ['ko', 'KO', '한국어', 'Korean'],
  ['id', 'ID', 'Bahasa Indonesia', 'Indonesian'], ['tr', 'TR', 'Türkçe', 'Turkish'],
  ['ar', 'AR', 'العربية', 'Arabic'], ['fr', 'FR', 'Français', 'French'],
  ['de', 'DE', 'Deutsch', 'German'], ['pt', 'PT', 'Português', 'Portuguese'],
  ['hi', 'HI', 'हिन्दी', 'Hindi'], ['ru', 'RU', 'Русский', 'Russian'],
  ['vi', 'VI', 'Tiếng Việt', 'Vietnamese'], ['it', 'IT', 'Italiano', 'Italian'],
  ['sv', 'SV', 'Svenska', 'Swedish'], ['nl', 'NL', 'Nederlands', 'Dutch'],
  ['ta', 'TA', 'தமிழ்', 'Tamil'],
] as const;

export function PublicFooterLanguage() {
  const [locale, setLocale] = useState('en');
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const readPreference = () => {
      try {
        const saved = localStorage.getItem('antbuildz-language-preference');
        if (languages.some(([value]) => value === saved)) setLocale(saved!);
      } catch { /* Storage may be unavailable in private browsing. */ }
    };
    readPreference();
    window.addEventListener('antbuildz-language-change', readPreference);
    window.addEventListener('storage', readPreference);
    return () => {
      window.removeEventListener('antbuildz-language-change', readPreference);
      window.removeEventListener('storage', readPreference);
    };
  }, []);
  const selected = languages.find(([value]) => value === locale) ?? languages[0];
  function choose(value: string) {
    setLocale(value);
    try { localStorage.setItem('antbuildz-language-preference', value); } catch { /* Keep the session usable. */ }
    window.dispatchEvent(new CustomEvent('antbuildz-language-change', { detail: { locale: value } }));
    // The legal text remains English; choosing a preference must not mislabel it as translated.
    dialog.current?.close();
  }
  return <div className="antbuildz-footer-language">
    <button ref={trigger} type="button" className="antbuildz-language-trigger" aria-label={`Choose language. Current language: ${selected[3]}`} aria-haspopup="dialog" aria-expanded={open} aria-controls="public-footer-languages" onClick={() => { dialog.current?.showModal(); setOpen(true); }}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 8 6 6m-7 0 6-6 2-3M2 5h12M7 2h1m14 20-5-10-5 10m2-4h6" /></svg><span>{selected[1]}</span>
    </button>
    <dialog ref={dialog} id="public-footer-languages" className="public-footer-language-dialog" aria-labelledby="public-footer-language-title" aria-describedby="public-footer-language-description" onClose={() => { setOpen(false); trigger.current?.focus(); }} onClick={event => { if (event.target === dialog.current) dialog.current?.close(); }}>
      <div className="public-footer-language-content">
        <header><div><h2 id="public-footer-language-title">Languages</h2><p id="public-footer-language-description">Choose the language you prefer to use on Antbuildz.</p></div><button type="button" aria-label="Close language selector" onClick={() => dialog.current?.close()}>×</button></header>
        <div className="public-footer-language-grid" aria-label="Available languages">{languages.map(([value, , native, english]) => <button type="button" key={value} aria-pressed={value === locale} onClick={() => choose(value)}><span><strong lang={value}>{native}</strong>{native !== english && <small>{english}</small>}</span>{value === locale && <span aria-hidden="true">✓</span>}</button>)}</div>
        <p className="public-footer-language-note">AI translation may not be 100% accurate. Confirm important technical, safety, pricing, and contractual details.</p>
      </div>
    </dialog>
  </div>;
}
