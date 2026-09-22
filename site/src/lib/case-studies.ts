import { getCollection } from 'astro:content';

export async function getCaseStudies() {
  const entries = await getCollection(
    'case-studies',
    ({ data }) => import.meta.env.DEV || !data.draft,
  );
  return entries.sort((a, b) => a.data.order - b.data.order);
}
