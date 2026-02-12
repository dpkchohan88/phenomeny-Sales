import { siteConfig } from '@/config/siteConfig';
import { seoMetadata } from '@/config/seoMetadata';

const formatDate = (date) => date.toISOString().split('T')[0];

const generateSitemap = () => {
  const currentDate = formatDate(new Date());
  
  // Base URLs from seoMetadata keys
  const routes = Object.keys(seoMetadata).filter(route => route !== '/404');

  const sitemapItems = routes.map(route => {
    let priority = '0.5';
    let changefreq = 'monthly';

    if (route === '/') {
      priority = '1.0';
      changefreq = 'weekly';
    } else if (route.split('/').filter(Boolean).length === 1) {
      // Main pages (e.g. /platform, /contact)
      priority = '0.9';
      changefreq = 'weekly';
    } else {
      // Sub pages
      priority = '0.8';
      changefreq = 'monthly';
    }

    return `
  <url>
    <loc>${siteConfig.siteUrl}${route === '/' ? '' : route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapItems.join('')}
</urlset>`;
};

export { generateSitemap };