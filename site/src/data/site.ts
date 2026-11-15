// Single source of truth for identity, links, and positioning copy.

export const SITE = {
  name: 'Cooper Tillotson',
  jobTitle: 'Marketing Coordinator',
  eyebrow: 'B2B Marketing · Marketing Ops · Product Marketing',
  positioning: 'I run the marketing and build the systems behind it.',
  intro:
    'Nearly 4 years in B2B marketing. At a national door manufacturer selling through 30+ distributors, I turned around organic search, led a CRM rollout, and built AI-assisted tools the team uses every day.',
  targetRoles: ['Marketing Manager', 'Marketing Ops', 'Product Marketing'],
  description:
    'Cooper Tillotson: B2B marketer moving into Marketing Ops and Product Marketing. Case studies in SEO and AI search, CRM rollout, product launches, and partner enablement.',
  email: 'tillycooper2017@gmail.com',
  linkedin: 'https://www.linkedin.com/in/cooper-tillotson-marketing-expert',
  // Resume links stay hidden until this is set. To turn them on, drop the PDF at
  // site/public/resume.pdf and change this to 'resume.pdf'.
  resumePath: null as string | null,
  locale: 'en_US',
} as const;

// Headline numbers under the hero.
export const STATS = [
  { metric: '+13.3%', label: 'Organic traffic YoY, reversing a -20.6% decline' },
  { metric: '10', label: 'Straight months of organic growth' },
  { metric: '$1M+', label: 'Co-op program managed across 30+ distributors' },
  { metric: '1 to 2 hrs', label: 'Saved per CAD drawing by an app I built' },
];
