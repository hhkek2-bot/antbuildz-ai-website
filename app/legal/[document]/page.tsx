import { notFound, permanentRedirect } from 'next/navigation';

const legacyLegalRoutes: Record<string, string> = {
  terms: '/agreements/terms',
  privacy: '/agreements/privacy',
  dpa: '/agreements/dpa',
  cookies: '/agreements/privacy#cookies',
  'acceptable-use': '/agreements/acceptable-use',
};

export default async function LegacyLegalRedirect({ params }: { params: Promise<{ document: string }> }) {
  const { document } = await params;
  const destination = legacyLegalRoutes[document];
  if (!destination) notFound();
  permanentRedirect(destination);
}
