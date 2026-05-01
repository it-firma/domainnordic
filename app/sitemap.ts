import type { MetadataRoute } from 'next'
import { SERVICE_DETAILS } from '@/lib/service-details'
import { INSIGHT_DETAILS } from '@/lib/insight-details'
import { SITE_CONFIG } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/brands`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/approach`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/insights`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const servicePages: MetadataRoute.Sitemap = SERVICE_DETAILS.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const insightPages: MetadataRoute.Sitemap = INSIGHT_DETAILS.map((a) => ({
    url: `${base}/insights/${a.slug}`,
    lastModified: new Date(a.dateISO),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...servicePages, ...insightPages]
}
