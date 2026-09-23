// Prefix an internal path with the configured base so links work on
// GitHub Pages project sites (/repo/) and custom domains (/) alike.
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return `${base}/${clean}`;
}

export function absoluteUrl(path = ''): string {
  return new URL(url(path), import.meta.env.SITE).href;
}
