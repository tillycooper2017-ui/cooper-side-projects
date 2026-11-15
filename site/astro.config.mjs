// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project site: https://<user>.github.io/<repo>/
// The base path follows the repo name automatically in GitHub Actions
// (GITHUB_REPOSITORY = "owner/repo"), so renaming the repo never breaks links.
// Override both with env vars when a custom domain is added (then SITE_BASE=/).
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'portfolio';
const site = process.env.SITE_URL ?? 'https://tillycooper2017-ui.github.io';
const base = process.env.SITE_BASE ?? `/${repoName}`;

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: {
    // Inline small stylesheets to avoid a render-blocking request.
    inlineStylesheets: 'auto',
  },
});
