// Single source of truth for identity, links, and positioning copy.
// TODO(cooper): replace every value marked TODO before the first deploy.

export const SITE = {
  name: 'Cooper Tillotson',
  jobTitle: 'Marketing Coordinator',
  positioning:
    'I implement CRMs, run competitive intelligence, and own SEO and analytics. Then I automate the reporting.',
  targetRoles: ['Marketing Operations', 'RevOps', 'Product Marketing'],
  description:
    'Cooper Tillotson: marketing coordinator moving into Marketing Ops, RevOps, and Product Marketing. Case studies in CRM implementation, competitive intelligence, and SEO.',
  email: 'you@example.com', // TODO(cooper)
  linkedin: 'https://www.linkedin.com/in/TODO', // TODO(cooper)
  // Drop the PDF at site/public/resume.pdf.
  resumePath: 'resume.pdf',
  locale: 'en_US',
} as const;
