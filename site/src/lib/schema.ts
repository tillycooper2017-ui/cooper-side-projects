import { SITE } from '../data/site';
import { absoluteUrl } from './url';

// Stable @ids let every page reference the same Person / WebSite nodes.
export const PERSON_ID = () => `${absoluteUrl()}#person`;
export const WEBSITE_ID = () => `${absoluteUrl()}#website`;

export function personNode() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID(),
    name: SITE.name,
    jobTitle: SITE.jobTitle,
    url: absoluteUrl(),
    sameAs: [SITE.linkedin],
    knowsAbout: [
      'B2B marketing',
      'Marketing operations',
      'Product marketing',
      'Channel and partner marketing',
      'CRM implementation',
      'Search engine optimization',
      'Answer engine optimization',
      'Web analytics',
      'Marketing automation',
    ],
  };
}

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID(),
    url: absoluteUrl(),
    name: SITE.name,
    description: SITE.description,
    inLanguage: 'en-US',
    publisher: { '@id': PERSON_ID() },
  };
}

export function breadcrumbNode(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function graph(...nodes: Record<string, unknown>[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
