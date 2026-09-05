import { notFound } from 'next/navigation';
import { AI_ROLES, getAiRole } from '@/lib/ai-roles';
import { AI_ROLE_COPY } from '@/lib/ai-role-copy';
import { RoleDetail } from '../role-view';
import { roleMetadata, RoleSchema } from '../metadata';

export function generateStaticParams() { return AI_ROLES.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const role = getAiRole(slug);
  if (!role) notFound();
  const copy = AI_ROLE_COPY[role.slug];
  return roleMetadata(copy.seoTitle, copy.metaDescription, `/ai-roles/${role.slug}`);
}

export default async function AiRolePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const role = getAiRole(slug);
  if (!role) notFound();
  const copy = AI_ROLE_COPY[role.slug];
  return <><script id="route-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: RoleSchema({ name: copy.title, description: copy.metaDescription, breadcrumbName: role.name, path: `/ai-roles/${role.slug}` }) }} /><RoleDetail role={role} /></>;
}
