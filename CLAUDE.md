# CLAUDE.md — project guide for Claude Code

## What this is
Cooper Tillotson's personal portfolio site. Purpose: support a job search moving from
Marketing Coordinator into Marketing Manager, Marketing Ops, or Product Marketing roles.
The approved design is the "Portfolio Wireframe" canvas on claude.ai. Follow it.
The site is interview ammo and a credibility signal, not the primary hiring lever
(warm intros are). Keep it sharp, fast, and low-maintenance.

## Positioning guardrails (do not violate)
- **Lead with what's defensible today:** CRM implementation, competitive intelligence,
  SEO / analytics.
- **"Builds automation"** is a supporting differentiator, not the headline.
- **Do NOT claim Python or SQL fluency** anywhere in headlines or skills.
  "Learning SQL" as a direction signal is the only acceptable framing.
- **Anonymize employer details on the public site.** Say "a national wood door manufacturer".
  No employer name, distributor or competitor names, internal product or program names,
  or named trade shows. Percentages and rounded figures are fine.
- Frame Simpson work as dual-use: positioning/enablement (PMM) and
  automation/CRM/process (Ops).

## Voice
- Direct, concrete, results-first. Lead with outcomes, not adjectives.
- **No em dashes** in site copy — reads as AI-generated. Use periods or commas.
- No filler or clichés ("results-driven professional", "passionate about").

## Tech preferences
- Keep it simple and static-friendly. Recommended: **Astro** or plain HTML/CSS.
  Avoid heavy frameworks for a content site.
- Free hosting target: GitHub Pages, Netlify, or Vercel.
- Prioritize load speed, accessibility, and clean semantic HTML. This also demonstrates
  the SEO competence the site is meant to signal.
- Mobile-first responsive.

## Site sections (v2, matches the wireframe)
1. **Hero** + **stat row** (`site/src/data/site.ts`).
2. **Case studies**: cards on the home page. `writeup: true` adds a detail page.
3. **Tools I built** (`site/src/data/tools.ts`). After case studies, never the headline.
4. **Toolkit**: Marketing / Operations / Platforms.
5. **About** and **Contact**.
No placeholder text ([RESULT], [ADD], TODO) on the live site: leave a field out instead.

## First session TODO
- [x] Pick the stack and scaffold it in `/site`.
- [x] Fill in the README local-dev and deploy commands once the stack is set.
- [x] Rebuild the site to match the wireframe.
- [ ] Write up the remaining case studies (CRM, launches, partner enablement, booth).
- [ ] Add sanitized screenshots for case studies and tools.
- [ ] Draft the spec GTM project (draft, hidden until done).
