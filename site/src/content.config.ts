import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every case study follows the same shape: Challenge / Approach / Result / Artifact.
// The schema enforces it so no case study ships missing a section.
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().max(200),
    role: z.string(),
    context: z.string(), // e.g. "Simpson Door, 2025" or "Spec project"
    date: z.coerce.date(),
    order: z.number().default(99),
    featured: z.boolean().default(false),
    // Drafts render in `npm run dev` only and are excluded from production builds.
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    challenge: z.string(),
    approach: z.array(z.string()).min(1),
    results: z
      .array(
        z.object({
          metric: z.string(), // the hard number, rendered bold: "38%"
          label: z.string(), // what it measures: "faster lead routing"
        }),
      )
      .min(1),
    artifact: z.object({
      title: z.string(),
      description: z.string(),
      href: z.string().optional(),
    }),
  }),
});

export const collections = { 'case-studies': caseStudies };
