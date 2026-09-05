import type { Metadata } from 'next';
import { OriginalAntbuildzApp } from '../../original-antbuildz-app';

export const metadata: Metadata = {
  title: 'Marketplace Product Preview',
  description: 'A product preview opened from an Antbuildz AI demonstration.',
  robots: { index: false, follow: true },
};

export default function EquipmentPreviewPage() {
  return <OriginalAntbuildzApp />;
}
