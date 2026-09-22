import type { APIRoute } from 'astro';

// Note: crawlers only read robots.txt at the domain root, so this takes full
// effect once the site moves to a custom domain (SITE_BASE=/).
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(`${import.meta.env.BASE_URL.replace(/\/$/, '')}/sitemap-index.xml`, site);
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap.href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
