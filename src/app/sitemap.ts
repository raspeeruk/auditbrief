import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://auditpdf.com'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/app`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/guides`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guides/how-to-do-seo-audit`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guides/seo-audit-checklist`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guides/seo-audit-for-clients`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guides/seo-audit-report-template`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guides/technical-seo-guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/website-content-audit-guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guides/local-seo-audit-guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/ecommerce-seo-audit`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
