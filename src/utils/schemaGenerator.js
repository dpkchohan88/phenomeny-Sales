import { siteConfig } from '@/config/siteConfig';

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": siteConfig.siteName,
  "url": siteConfig.siteUrl,
  "logo": `${siteConfig.siteUrl}/logo.png`,
  "sameAs": [
    siteConfig.social.twitter,
    siteConfig.social.linkedin,
    siteConfig.social.github,
    siteConfig.social.youtube
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": siteConfig.contact.phone,
    "contactType": "sales",
    "email": siteConfig.contact.email
  },
  "address": {
    "@type": "PostalAddress",
    ...siteConfig.contact.address
  }
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": siteConfig.siteName,
  "url": siteConfig.siteUrl,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${siteConfig.siteUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
});

export const articleSchema = ({ title, description, image, datePublished, dateModified, author }) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "image": image,
  "datePublished": datePublished,
  "dateModified": dateModified || datePublished,
  "author": {
    "@type": "Person",
    "name": author
  },
  "publisher": {
    "@type": "Organization",
    "name": siteConfig.siteName,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteConfig.siteUrl}/logo.png`
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": typeof window !== 'undefined' ? window.location.href : siteConfig.siteUrl
  }
});

export const breadcrumbSchema = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.item ? (crumb.item.startsWith('http') ? crumb.item : `${siteConfig.siteUrl}${crumb.item}`) : undefined
  }))
});

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});