import type { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/site-config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      // Search engines
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
      // Social media crawlers (for link previews)
      { userAgent: 'facebookexternalhit', allow: '/' },
      { userAgent: 'Facebot', allow: '/' },
      { userAgent: 'Twitterbot', allow: '/' },
      { userAgent: 'LinkedInBot', allow: '/' },
      { userAgent: 'WhatsApp', allow: '/' },
      { userAgent: 'Slackbot', allow: '/' },
      { userAgent: 'TelegramBot', allow: '/' },
      { userAgent: 'Discordbot', allow: '/' },
      { userAgent: 'redditbot', allow: '/' },
      { userAgent: 'Pinterest', allow: '/' },
      // AI crawlers
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Perplexity-User', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Applebot', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'YouBot', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
      { userAgent: 'Bytespider', allow: '/' },
      { userAgent: 'meta-externalagent', allow: '/' },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    host: SITE_CONFIG.url,
  }
}
