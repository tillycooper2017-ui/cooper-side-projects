# cooper-portfolio
 
Personal portfolio site and side projects. Built and maintained with Claude Code.
 
## What's here
| Path | What it is |
|---|---|
| `/site` | Portfolio site source (Astro, static output) |
| `/projects` | Source material for case studies / spec projects featured on the site |
| `CLAUDE.md` | Project conventions + positioning guardrails for Claude Code — read this first |
 
## Working across machines
- **Home machine (Claude Code):** build, run locally, commit and push.
- **Work browser (GitHub connector):** read and light edits only. No local build.
- **Mobile:** drive Claude Code remotely, or edit via the connector.
## Local dev
Stack: **Astro 7** (static output, zero client JS), `@astrojs/sitemap`, JSON-LD structured data. Requires **Node 22.12+**.

```bash
cd site
npm install        # first time only
npm run dev        # http://localhost:4321/cooper-side-projects/
npm run check      # type-check .astro files and the case-study schema
npm run build      # production build to site/dist
npm run preview    # serve the production build locally
```

- **Case studies:** one Markdown file each in `site/src/content/case-studies/`. The schema in `site/src/content.config.ts` requires Challenge / Approach / Result / Artifact.
- **Drafts:** `draft: true` shows in `npm run dev` only and is left out of production builds. Flip to `false` to publish.
- **Identity and links:** name, email, LinkedIn, and resume path live in `site/src/data/site.ts`. Resume PDF goes at `site/public/resume.pdf`.
 
## Deploy
Target: **GitHub Pages**, via GitHub Actions (`.github/workflows/deploy.yml`).
Live URL: https://tillycooper2017-ui.github.io/cooper-side-projects/

One-time setup: repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.

After that, every push to `main` that touches `site/` builds and deploys automatically:

```bash
git push origin main                 # triggers the deploy workflow
```

Manual redeploy: **Actions → Deploy site to GitHub Pages → Run workflow**.

Custom domain later: set `SITE_URL` (e.g. `https://example.com`) and `SITE_BASE=/` as env vars on the build step, and add the domain under Settings → Pages.
