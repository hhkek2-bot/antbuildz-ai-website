'use client';

import { createRoot, type Root } from 'react-dom/client';
import { type CSSProperties, type ReactNode, useRef, useState } from 'react';
import styles from './store-profile-demo.module.css';

const STORE_PROFILE_STORAGE_KEY = 'antbuildz-dashboard:store-profile:v1';
const STORE_PROFILE_ROUTE = '/main-dashboard/store-builder/store-profile';
const contactChannels = [
  { key: 'whatsapp', label: 'WhatsApp', placeholder: 'Enter your number with country code, e.g. +65 1234 5678', inputMode: 'tel' },
  { key: 'telegram', label: 'Telegram', placeholder: 'Enter your username or t.me link' },
  { key: 'wechat', label: 'WeChat', placeholder: 'Enter your WeChat ID' },
  { key: 'messenger', label: 'Messenger', placeholder: 'Enter your page name or m.me link' },
  { key: 'line', label: 'LINE', placeholder: 'Enter your LINE ID or add-friend link' },
  { key: 'zalo', label: 'Zalo', placeholder: 'Enter your number or zalo.me link' },
] as const;
type ContactKey = (typeof contactChannels)[number]['key'];

type StoreProfile = {
  storeName: string;
  logo: string;
  subdomain: string;
  webStoreName: string;
  primaryText: string;
  primaryBg: string;
  secondaryText: string;
  secondaryBg: string;
  whatsapp: string;
  telegram: string;
  wechat: string;
  messenger: string;
  line: string;
  zalo: string;
  enabledContacts: Record<ContactKey, boolean>;
  defaultHomePage: 'Rental' | 'Sales';
  showStoreNameInHeader: boolean;
  announcementTitle: string;
  showAnnouncement: boolean;
  blog: boolean;
  faqs: boolean;
  agreement: boolean;
};

const defaultAnnouncement = (storeName: string) => `This is the official store of ${storeName || 'your store'}.`;

const initialProfile: StoreProfile = {
  storeName: 'KEK',
  logo: '',
  subdomain: 'kekheanhooi',
  webStoreName: 'Antbuildz Store',
  primaryText: '#ffffff',
  primaryBg: '#6464e1',
  secondaryText: '#2a088b',
  secondaryBg: '#bce414',
  whatsapp: '+65 96169934',
  telegram: '',
  wechat: '',
  messenger: '',
  line: '',
  zalo: '',
  enabledContacts: { whatsapp: true, telegram: false, wechat: false, messenger: false, line: false, zalo: false },
  defaultHomePage: 'Rental',
  showStoreNameInHeader: false,
  announcementTitle: defaultAnnouncement('Antbuildz Store'),
  showAnnouncement: true,
  blog: true,
  faqs: true,
  agreement: true,
};

function readProfile(): StoreProfile {
  try {
    const stored = window.localStorage.getItem(STORE_PROFILE_STORAGE_KEY);
    if (!stored) return initialProfile;
    const saved = JSON.parse(stored) as Partial<StoreProfile> | null;
    if (!saved || typeof saved !== 'object') return initialProfile;
    if (saved.webStoreName === 'Antbuildz Demo') saved.webStoreName = 'Antbuildz Store';
    if (saved.announcementTitle === 'Welcome to our online store.' || saved.announcementTitle === 'This is the official online store of Antbuildz Demo.') {
      saved.announcementTitle = defaultAnnouncement(saved.webStoreName || initialProfile.webStoreName);
    }
    const enabledContacts = Object.fromEntries(contactChannels.map(({ key }) => [
      key,
      saved.enabledContacts?.[key] ?? Boolean(String(saved[key] ?? initialProfile[key]).trim()),
    ])) as Record<ContactKey, boolean>;
    return { ...initialProfile, ...saved, enabledContacts };
  } catch {
    return initialProfile;
  }
}

function isHexColour(value: string) {
  return /^#[0-9a-f]{6}$/i.test(value);
}

function safeColour(value: string) {
  return isHexColour(value) ? value : '#0f172a';
}

function sameProfile(left: StoreProfile, right: StoreProfile) {
  return JSON.stringify(left) === JSON.stringify(right);
}

function StoreProfileDemo() {
  const [savedProfile, setSavedProfile] = useState<StoreProfile>(readProfile);
  const [profile, setProfile] = useState<StoreProfile>(savedProfile);
  const [notice, setNotice] = useState('');
  const logoInput = useRef<HTMLInputElement>(null);
  const homePageDropdown = useRef<HTMLDetailsElement>(null);
  const isDirty = !sameProfile(profile, savedProfile);
  const storeUrl = `https://${profile.subdomain || 'your-store'}.antbuildz.com`;

  const update = <Key extends keyof StoreProfile>(key: Key, value: StoreProfile[Key]) => {
    setProfile((current) => ({ ...current, [key]: value }));
    setNotice('');
  };

  const updateWebStoreName = (value: string) => {
    setProfile((current) => ({
      ...current,
      webStoreName: value,
      announcementTitle: current.announcementTitle === defaultAnnouncement(current.webStoreName)
        ? defaultAnnouncement(value)
        : current.announcementTitle,
    }));
    setNotice('');
  };

  const setContactEnabled = (key: ContactKey, enabled: boolean) => {
    setProfile((current) => ({ ...current, enabledContacts: { ...current.enabledContacts, [key]: enabled } }));
    setNotice('');
  };

  const save = () => {
    if (!profile.storeName.trim() || !profile.webStoreName.trim() || !/^[a-z0-9-]+$/i.test(profile.subdomain)) {
      setNotice('Add a business name, storefront name and a subdomain using letters, numbers or hyphens.');
      return;
    }
    try {
      window.localStorage.setItem(STORE_PROFILE_STORAGE_KEY, JSON.stringify(profile));
      setSavedProfile(profile);
      setNotice('Store profile saved in this browser.');
    } catch {
      setNotice('Store profile could not be saved. Try using a smaller logo.');
    }
  };

  const uploadLogo = (file?: File) => {
    if (!file) return;
    if (!file.type.startsWith('image/') || file.size > 500_000) {
      setNotice('Choose an image logo under 500 KB.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') update('logo', reader.result);
    };
    reader.readAsDataURL(file);
  };

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(storeUrl);
      setNotice('Store URL copied.');
    } catch {
      setNotice(`Copy this URL: ${storeUrl}`);
    }
  };

  return (
    <div className={styles.page} style={{ '--store-primary': safeColour(profile.primaryBg) } as CSSProperties}>
      <div className={styles.layout}>
        <main className={styles.form}>
          <div className={styles.profileHeader}>
            <div className={styles.logoControl}>
              <div className={styles.logoPreview} aria-label="Store logo preview">
                {/* A local upload replaces the default logo preview. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={profile.logo || '/antbuildz-logo.png'} alt={profile.logo ? 'Store logo' : 'Antbuildz logo'} />
              </div>
              <button className={styles.uploadButton} type="button" onClick={() => logoInput.current?.click()} aria-label="Upload a new logo" title="Upload a new logo">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
              </button>
            </div>
            <div><h2>{profile.storeName || 'Your store'}</h2><span>Logo preview</span></div>
            <input ref={logoInput} className={styles.srOnly} type="file" accept="image/*" onChange={(event) => uploadLogo(event.target.files?.[0])} />
          </div>

          <div className={styles.formBody}>
            <div className={styles.fieldGrid}>
              <div className={styles.fieldColumn}>
                <div className={styles.fieldGroup}>
                  <Field label="Store subdomain"><input value={profile.subdomain} onChange={(event) => update('subdomain', event.target.value)} autoCapitalize="none" /></Field>
                  <div className={styles.storeUrl}><span>{profile.subdomain || 'your-store'}.antbuildz.com</span><button type="button" onClick={copyUrl} aria-label="Copy store URL" title="Copy store URL"><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></svg></button></div>
                </div>
                <ColourControl textValue={profile.primaryText} backgroundValue={profile.primaryBg} onTextChange={(value) => update('primaryText', value)} onBackgroundChange={(value) => update('primaryBg', value)} />
                <div className={styles.homePageControl}>
                  <span>Default home page</span>
                  <details className={styles.homePageDropdown} ref={homePageDropdown}>
                    <summary><span>{profile.defaultHomePage}</span><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></summary>
                    <div className={styles.homePageOptions} role="listbox" aria-label="Default home page">
                    {(['Rental', 'Sales'] as const).map((page) => (
                      <button className={`${styles.homePageOption} ${profile.defaultHomePage === page ? styles.homePageOptionActive : ''}`} type="button" role="option" aria-selected={profile.defaultHomePage === page} onClick={() => { update('defaultHomePage', page); homePageDropdown.current?.removeAttribute('open'); }} key={page}>{page}</button>
                    ))}
                    </div>
                  </details>
                </div>
              </div>
              <div className={styles.fieldColumn}>
                <div className={styles.fieldGroup}>
                  <Field label="Web store name"><input value={profile.webStoreName} onChange={(event) => updateWebStoreName(event.target.value)} /></Field>
                  <CheckOption label="Show web store name in the header" subtle checked={profile.showStoreNameInHeader} onChange={(checked) => update('showStoreNameInHeader', checked)} />
                </div>
              </div>
            </div>

            <div className={styles.announcement}>
              {profile.showAnnouncement && <label className={styles.announcementField}><span>Store announcement</span><p>Shown as a small strip at the top of your web store. Use it to help visitors recognise your official store.</p><input value={profile.announcementTitle} onChange={(event) => update('announcementTitle', event.target.value)} /></label>}
              <CheckOption label="Show announcement" checked={profile.showAnnouncement} onChange={(checked) => update('showAnnouncement', checked)} />
            </div>
            <div className={styles.contentOptions}>
              <p>Show content sections</p>
              <CheckOption label="Blog" checked={profile.blog} onChange={(checked) => update('blog', checked)} />
              <CheckOption label="FAQs" checked={profile.faqs} onChange={(checked) => update('faqs', checked)} />
              <CheckOption label="Agreement" checked={profile.agreement} onChange={(checked) => update('agreement', checked)} />
            </div>
            <details className={styles.contacts}>
              <summary><span><strong>Equipment page contact channels</strong><small>Choose which contact channels are available on equipment pages.</small></span><b>Manage</b></summary>
              <div className={styles.fieldGrid}>
                {contactChannels.map(({ key, label, placeholder, ...options }) => (
                  <div className={styles.fieldGroup} key={key}>
                    <CheckOption label={label} icon={`/store-profile-icons/${key}.svg`} checked={profile.enabledContacts[key]} onChange={(checked) => setContactEnabled(key, checked)} />
                    {profile.enabledContacts[key] && <input className={styles.contactInput} aria-label={label} value={profile[key]} onChange={(event) => update(key, event.target.value)} placeholder={placeholder} inputMode={'inputMode' in options ? options.inputMode : undefined} />}
                  </div>
                ))}
              </div>
            </details>
          </div>

          <footer className={styles.actions}>
            <div aria-live="polite" className={styles.notice}>{notice}</div>
            <div>
              <button className={styles.cancelButton} type="button" disabled={!isDirty} onClick={() => { setProfile(savedProfile); setNotice('Changes discarded.'); }}>Cancel</button>
              <button className={styles.saveButton} type="button" disabled={!isDirty} onClick={save}>Save changes</button>
            </div>
          </footer>
        </main>

      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return <label className={styles.field}><span>{label}</span>{children}</label>;
}

function CheckOption({ label, icon, subtle = false, checked, onChange }: { label: string; icon?: string; subtle?: boolean; checked: boolean; onChange: (checked: boolean) => void }) {
  return <label className={`${styles.checkOption} ${subtle ? styles.checkOptionSubtle : ''}`}><input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} />{icon && (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={styles.channelLogo} src={icon} alt="" aria-hidden="true" />
  )}<span>{label}</span></label>;
}

function ColourControl({ textValue, backgroundValue, onTextChange, onBackgroundChange }: { textValue: string; backgroundValue: string; onTextChange: (value: string) => void; onBackgroundChange: (value: string) => void }) {
  return <div className={styles.colourControl}><span>Primary colour</span><small>Used for buttons, headers and primary highlights.</small><div className={styles.colourOptions}>
    <label className={styles.colourOption}><span>Text</span><div><input type="color" value={safeColour(textValue)} onChange={(event) => onTextChange(event.target.value)} aria-label="Primary text colour" /><input value={textValue} onChange={(event) => onTextChange(event.target.value)} aria-label="Primary text colour hex value" spellCheck="false" /></div></label>
    <label className={styles.colourOption}><span>Background</span><div><input type="color" value={safeColour(backgroundValue)} onChange={(event) => onBackgroundChange(event.target.value)} aria-label="Primary background colour" /><input value={backgroundValue} onChange={(event) => onBackgroundChange(event.target.value)} aria-label="Primary background colour hex value" spellCheck="false" /></div></label>
  </div></div>;
}

type MountedProfile = { host: HTMLElement; legacy: HTMLElement; layout: HTMLElement | null; root: Root };
let mountedProfile: MountedProfile | null = null;

function getLegacyProfile(root: HTMLElement) {
  const subdomainInput = root.querySelector<HTMLInputElement>('input[aria-label="Store subdomain"]');
  if (!subdomainInput) return null;
  let candidate: HTMLElement | null = subdomainInput.parentElement;
  while (candidate && candidate !== root) {
    if (candidate.textContent?.includes('Store Subdomain') && candidate.textContent?.includes('Save Changes')) return candidate.parentElement || candidate;
    candidate = candidate.parentElement;
  }
  return null;
}

function unmountProfile() {
  if (!mountedProfile) return;
  mountedProfile.root.unmount();
  mountedProfile.host.remove();
  mountedProfile.layout?.removeAttribute('data-antbuildz-store-profile-layout');
  if (mountedProfile.legacy.isConnected) {
    mountedProfile.legacy.hidden = false;
    mountedProfile.legacy.removeAttribute('aria-hidden');
    mountedProfile.legacy.removeAttribute('inert');
  }
  mountedProfile = null;
}

function syncSubscriptionProgress(root: HTMLElement) {
  const heading = Array.from(root.querySelectorAll('h3')).find((item) => item.textContent?.trim() === 'Subscription Snapshot');
  const snapshot = heading?.parentElement?.parentElement;
  if (!snapshot) return;
  const copyCorrections: Record<string, string> = {
    'Subscription For Yearly Full': 'Yearly subscription',
    '(Rental - Sell)': '(Rental and Sales)',
    'Start at': 'Start date',
    'End at': 'End date',
    'Rental Web Store Listing': 'Rental listings',
    'Sales Web Store Listing': 'Sales listings',
    '1 Listing': '1 listing',
  };
  snapshot.querySelectorAll('p, span').forEach((item) => {
    if (item.childElementCount === 0 && item.textContent && copyCorrections[item.textContent]) {
      item.textContent = copyCorrections[item.textContent];
    }
  });
  const percentage = Array.from(snapshot.querySelectorAll('span')).find((item) => /^\d+(?:\.\d+)?%$/.test(item.textContent?.trim() || ''));
  const progressLabel = snapshot.querySelector<HTMLElement>('[data-demo-progress-label]')
    || Array.from(snapshot.querySelectorAll('p')).find((item) => item.textContent?.trim() === 'Demonstration status');
  const remainingLabel = Array.from(snapshot.querySelectorAll('span')).find((item) => item.textContent?.includes('of 30 Days Remaining') || item.textContent?.includes('of 30 days remaining'));
  const remainingCount = remainingLabel?.previousElementSibling;
  if (!percentage || !progressLabel || !remainingLabel || !remainingCount) return;
  const percent = Math.min(100, Math.max(0, Number.parseFloat(percentage.textContent || '0')));
  const daysPassed = Math.round(percent * 30 / 100);
  const daysRemaining = 30 - daysPassed;
  const label = `${daysPassed} of 30 days passed`;
  progressLabel.dataset.demoProgressLabel = 'true';
  if (progressLabel.textContent !== label) progressLabel.textContent = label;
  if (remainingCount.textContent !== String(daysRemaining)) remainingCount.textContent = String(daysRemaining);
  if (remainingLabel.textContent !== 'of 30 days remaining') remainingLabel.textContent = 'of 30 days remaining';
}

export function syncStoreProfileDemo(root: HTMLElement) {
  const legacy = window.location.pathname === STORE_PROFILE_ROUTE ? getLegacyProfile(root) : null;
  if (!legacy) {
    unmountProfile();
    return;
  }
  const browserStorageNote = Array.from(root.querySelectorAll('div')).find((item) =>
    item.childElementCount === 0 && item.textContent?.trim().startsWith('Demo workspace: profile settings and the logo are saved in this browser'));
  if (browserStorageNote) browserStorageNote.textContent = 'Changes to this page are saved in this browser.';
  syncSubscriptionProgress(root);
  if (mountedProfile?.legacy === legacy && mountedProfile.host.isConnected) {
    legacy.hidden = true;
    return;
  }
  unmountProfile();
  const host = document.createElement('div');
  host.dataset.antbuildzStoreProfile = 'true';
  host.style.minWidth = '0';
  const layout = legacy.parentElement;
  layout?.setAttribute('data-antbuildz-store-profile-layout', 'true');
  legacy.insertAdjacentElement('beforebegin', host);
  legacy.hidden = true;
  legacy.setAttribute('aria-hidden', 'true');
  legacy.setAttribute('inert', '');
  const mountedRoot = createRoot(host);
  mountedRoot.render(<StoreProfileDemo />);
  mountedProfile = { host, legacy, layout, root: mountedRoot };
}
