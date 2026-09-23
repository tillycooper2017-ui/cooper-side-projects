// Single source of truth for identity, links, and positioning copy.

export const SITE = {
  name: 'Cooper Tillotson',
  jobTitle: 'Marketing Coordinator',
  positioning:
    'I implement CRMs, run competitive intelligence, and own SEO and analytics. Then I automate the reporting.',
  targetRoles: ['Marketing Operations', 'RevOps', 'Product Marketing'],
  description:
    'Cooper Tillotson: marketing coordinator moving into Marketing Ops, RevOps, and Product Marketing. Case studies in CRM implementation, competitive intelligence, and SEO.',
  email: 'tillycooper2017@gmail.com',
  linkedin: 'https://www.linkedin.com/in/cooper-tillotson-marketing-expert',
  // Resume links stay hidden until this is set. To turn them on, drop the PDF at
  // site/public/resume.pdf and change this to 'resume.pdf'.
  resumePath: null as string | null,
  locale: 'en_US',
} as const;
