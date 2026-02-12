import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '@/config/siteConfig';
import { organizationSchema, websiteSchema } from '@/utils/schemaGenerator';
import { generateBreadcrumbSchema } from '@/utils/breadcrumbSchema';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  ogType = 'website', 
  canonical,
  jsonLd = []
}) => {
  const location = useLocation();
  const currentUrl = `${siteConfig.siteUrl}${location.pathname}`;
  const canonicalUrl = canonical || currentUrl;
  
  // Default Schemas
  const schemas = [
    organizationSchema(),
    websiteSchema(),
    generateBreadcrumbSchema(location.pathname),
    ...(Array.isArray(jsonLd) ? jsonLd : [jsonLd])
  ].filter(Boolean);

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title ? `${title} | ${siteConfig.siteName}` : siteConfig.siteName}</title>
      <meta name="description" content={description || siteConfig.siteDescription} />
      <meta name="keywords" content={keywords || siteConfig.siteKeywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title || siteConfig.siteName} />
      <meta property="og:description" content={description || siteConfig.siteDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage || siteConfig.openGraph.defaultImage} />
      <meta property="og:locale" content={siteConfig.locale} />

      {/* Twitter Card */}
      <meta name="twitter:card" content={siteConfig.twitter.cardType} />
      <meta name="twitter:site" content={siteConfig.twitter.site} />
      <meta name="twitter:creator" content={siteConfig.twitter.handle} />
      <meta name="twitter:title" content={title || siteConfig.siteName} />
      <meta name="twitter:description" content={description || siteConfig.siteDescription} />
      <meta name="twitter:image" content={ogImage || siteConfig.openGraph.defaultImage} />

      {/* Verification & Analytics */}
      {siteConfig.analytics.googleVerification && (
        <meta name="google-site-verification" content={siteConfig.analytics.googleVerification} />
      )}

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(schemas)}
      </script>
    </Helmet>
  );
};

export default SEOHead;