import { RolesOverview } from './role-view';
import { roleMetadata, RoleSchema } from './metadata';
import { AI_ROLES_OVERVIEW_COPY as copy } from '@/lib/ai-role-copy';

export const metadata = roleMetadata(copy.seoTitle, copy.metaDescription, '/ai-roles');

export default function AiRolesPage() {
  return <><script id="route-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: RoleSchema({ name: copy.title, description: copy.metaDescription, path: '/ai-roles' }) }} /><RolesOverview /></>;
}
