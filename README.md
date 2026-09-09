# cooper-portfolio
 
Personal portfolio site and side projects. Built and maintained with Claude Code.
 
## What's here
| Path | What it is |
|---|---|
| `/site` | Portfolio site source (stack decided in the first build session) |
| `/projects` | Source material for case studies / spec projects featured on the site |
| `CLAUDE.md` | Project conventions + positioning guardrails for Claude Code — read this first |
 
## Working across machines
- **Home machine (Claude Code):** build, run locally, commit and push.
- **Work browser (GitHub connector):** read and light edits only. No local build.
- **Mobile:** drive Claude Code remotely, or edit via the connector.
## Local dev

**Stack:** Astro 5 (static output, zero JS shipped to the browser).

```bash
cd site
npm install        # install dependencies
npm run dev        # start dev server at localhost:4321
npm run build      # production build to site/dist/
npm run preview    # preview the production build locally
```

## Deploy

Target: free static host (GitHub Pages, Netlify, or Vercel). Deploy the `site/dist/` directory.
 
