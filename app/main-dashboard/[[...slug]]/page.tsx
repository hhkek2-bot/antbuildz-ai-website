import type { Metadata } from 'next';
import { OriginalAntbuildzApp } from '../../original-antbuildz-app';

export const metadata: Metadata = {
  title: 'Antbuildz AI Workspace',
  description: 'Restricted Antbuildz AI account workspace.',
  robots: { index: false, follow: false },
};

export default function MainDashboardPage() {
  return <OriginalAntbuildzApp />;
}
