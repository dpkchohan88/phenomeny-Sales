import { siteConfig } from '@/config/siteConfig';

/**
 * Generates breadcrumb schema based on current path
 * @param {string} pathname - Current URL path (e.g., /resources/blog)
 * @returns {object} BreadcrumbList schema object
 */
export const generateBreadcrumbSchema = (pathname) => {
  const pathSegments = pathname.split('/').filter(Boolean);
  
  const breadcrumbs = [
    {
      name: 'Home',
      item: siteConfig.siteUrl
    }
  ];

  let currentPath = '';

  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    
    // Capitalize and format segment name
    const name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    breadcrumbs.push({
      name: name,
      item: `${siteConfig.siteUrl}${currentPath}`
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.item
    }))
  };
};