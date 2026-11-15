import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each case study is a card on the home page. When `writeup: true` it also gets a
// detail page, and the detail fields (problem, approach, results...) become required.
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z
    .object({
      // Card fields
      title: z.string(),
      category: z.string(), // eyebrow label, e.g. "SEO + AI Search"
      summary: z.string().max(450),
      cardResult: z.string().optional(), // one-line result shown on the card
      order: z.number().default(99),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      // Drafts render in `npm run dev` only and are excluded from production builds.
      draft: z.boolean().default(false),
      // true = build a detail page. false = card only, marked "write-up coming soon".
      writeup: z.boolean().default(false),

      // Detail page fields
      lede: z.string().optional(),
      role: z.string().optional(),
      timeline: z.string().optional(),
      tools: z.string().optional(),
      headline: z.string().optional(), // headline result in the meta strip
      problem: z.string().optional(),
      approach: z.array(z.string()).optional(),
      results: z.array(z.object({ metric: z.string(), label: z.string() })).optional(),
      learned: z.string().optional(),
    })
    .superRefine((d, ctx) => {
      if (!d.writeup) return;
      for (const key of ['lede', 'role', 'timeline', 'problem', 'approach', 'results'] as const) {
        const v = d[key];
        if (v === undefined || (Array.isArray(v) && v.length === 0)) {
          ctx.addIssue({ code: 'custom', path: [key], message: `"${key}" is required when writeup is true` });
        }
      }
    }),
});

export const collections = { 'case-studies': caseStudies };
