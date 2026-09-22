// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project site: https://<user>.github.io/<repo>/
// Override both with env vars when a custom domain is added (then SITE_BASE=/).
const site = process.env.SITE_URL ?? 'https://tillycooper2017-ui.github.io';
const base = process.env.SITE_BASE ?? '/cooper-side-projects';

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
