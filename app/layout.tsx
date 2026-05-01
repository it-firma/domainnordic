import type { Metadata, Viewport } from 'next'
import './globals.css'
import { SITE_CONFIG } from '@/lib/site-config'

export const viewport: Viewport = {
  themeColor: '#0F1A3D',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'DomainNordic · Strategic Domain Advisory',
    template: '%s · DomainNordic',
  },
  description: SITE_CONFIG.description,
  keywords: [
    'domain advisory',
    'domain brokerage',
    'domain acquisition',
    'premium domains',
    'Nordic domains',
    'domain strategy',
    'domain portfolio',
    'brand protection',
    'domain valuation',
    'stealth acquisition',
    'domain leasing',
    'UDRP',
  ],
  authors: [{ name: SITE_CONFIG.legalName }],
  creator: SITE_CONFIG.legalName,
  publisher: SITE_CONFIG.legalName,
  applicationName: SITE_CONFIG.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: 'DomainNordic · Strategic Domain Advisory',
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DomainNordic · Strategic Domain Advisory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DomainNordic · Strategic Domain Advisory',
    description: SITE_CONFIG.description,
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  category: 'business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.legalName,
    alternateName: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo-header.png`,
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.email,
    contactPoint: {
      '@type': 'ContactPoint',
      email: SITE_CONFIG.email,
      contactType: 'Customer Support',
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://domene.io',
      'https://xn--domn-noa.io',
      'https://xn--domne-ura.io',
      'https://verkkotunnus.io',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.legalName,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_CONFIG.url}/insights?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_CONFIG.legalName,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    serviceType: 'Domain Advisory Services',
    areaServed: [
      { '@type': 'Country', name: 'Norway' },
      { '@type': 'Country', name: 'Sweden' },
      { '@type': 'Country', name: 'Denmark' },
      { '@type': 'Country', name: 'Finland' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Domain Advisory Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Domain Acquisition' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Stealth Acquisition' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Domain Brokerage' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Portfolio Strategy' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Protection' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Domain Recovery' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Domain Valuation' } },
      ],
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
