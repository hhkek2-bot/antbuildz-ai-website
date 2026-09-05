'use client';
import { useEffect } from 'react';
import { syncPublicHeaderDropdowns } from './original-antbuildz-app';

export function PublicHeaderBehaviour() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>('[data-source-public-header]');
    if (!header) return;
    syncPublicHeaderDropdowns(header);
    const menus = Array.from(header.querySelectorAll('details'));
    const closeOutside = (event: PointerEvent) => menus.forEach(menu => {
      if (event.target instanceof Node && !menu.contains(event.target)) menu.open = false;
    });
    const escape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      menus.filter(menu => menu.open).forEach(menu => { menu.open = false; menu.querySelector('summary')?.focus(); });
    };
    const sync = (event: Event) => {
      const menu = event.currentTarget as HTMLDetailsElement;
      if (menu.open) menus.forEach(other => { if (other !== menu) other.open = false; });
    };
    menus.forEach(menu => menu.addEventListener('toggle', sync));
    header.querySelectorAll<HTMLAnchorElement>('a').forEach(link => {
      if (link.pathname === window.location.pathname) link.setAttribute('aria-current', 'page');
    });
    document.addEventListener('pointerdown', closeOutside);
    header.addEventListener('keydown', escape);
    return () => {
      menus.forEach(menu => menu.removeEventListener('toggle', sync));
      document.removeEventListener('pointerdown', closeOutside);
      header.removeEventListener('keydown', escape);
    };
  }, []);
  return null;
}
