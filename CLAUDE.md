# CLAUDE.md — project guide for Claude Code

## What this is
Cooper Tillotson's personal portfolio site. Purpose: support a job search moving from
Marketing Coordinator into Marketing Operations / RevOps or Product Marketing roles.
The site is interview ammo and a credibility signal, not the primary hiring lever
(warm intros are). Keep it sharp, fast, and low-maintenance.

## Positioning guardrails (do not violate)
- **Lead with what's defensible today:** CRM implementation, competitive intelligence,
  SEO / analytics.
- **"Builds automation"** is a supporting differentiator, not the headline.
- **Do NOT claim Python or SQL fluency** anywhere in headlines or skills.
  "Learning SQL" as a direction signal is the only acceptable framing.
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

## Site sections (v1)
1. **Hero** — name, one-line positioning, roles being targeted.
2. **Selected work** — 3–4 case studies. Feature the spec GTM project prominently.
3. **Skills** — grouped honestly (see guardrails). CRM/systems, competitive intel,
   SEO/analytics up top.
4. **About** — short, human, career arc.
5. **Contact** — email + LinkedIn.

## First session TODO
- [x] Pick the stack and scaffold it in `/site`.
- [x] Fill in the README local-dev and deploy commands once the stack is set.
- [ ] Draft the spec GTM project as the flagship case study.
