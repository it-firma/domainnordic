export const SITE_CONFIG = {
  name: 'DomainNordic',
  legalName: 'DomainNordic Advisory Group',
  url: 'https://domainnordic.com',
  description:
    'DomainNordic is an independent advisory group serving the Nordic markets through four local brands. Strategic domain advisory for businesses that view domains as long-term assets.',
  email: 'hello@domainnordic.com',
  tagline: 'Strategic domain advisory, built for the Nordics.',
  brands: [
    { name: 'domene.io', country: 'Norway', url: 'https://domene.io' },
    { name: 'domän.io', country: 'Sweden', url: 'https://domän.io' },
    { name: 'domæne.io', country: 'Denmark', url: 'https://domæne.io' },
    { name: 'verkkotunnus.io', country: 'Finland', url: 'https://verkkotunnus.io' },
  ],
}

export const SERVICES = [
  {
    category: 'Acquire',
    categoryNum: 'I',
    description: 'Securing the right domains',
    items: [
      { slug: 'domain-acquisition', name: 'Domain Acquisition', short: 'Premium and off-market opportunities' },
      { slug: 'stealth-acquisition', name: 'Stealth Acquisition', short: 'Confidential, privacy first deals' },
      { slug: 'domain-brokerage', name: 'Domain Brokerage', short: 'Buyer and seller representation' },
      { slug: 'local-presence-service', name: 'Local Presence Service', short: 'Trustee solutions for international clients' },
    ],
  },
  {
    category: 'Manage',
    categoryNum: 'II',
    description: 'Portfolio operations',
    items: [
      { slug: 'portfolio-strategy', name: 'Portfolio Strategy', short: 'Structure, optimise and grow' },
      { slug: 'cost-optimization', name: 'Cost Optimization', short: 'Eliminate hidden renewal costs' },
      { slug: 'domain-leasing', name: 'Domain Leasing', short: 'Flexible alternatives to ownership' },
      { slug: 'registrar-advisory', name: 'Registrar Advisory', short: 'Right setup for security and control' },
      { slug: 'domain-audit', name: 'Domain Audit', short: 'Portfolio health check' },
    ],
  },
  {
    category: 'Protect',
    categoryNum: 'III',
    description: 'Defending against threats',
    items: [
      { slug: 'brand-protection', name: 'Brand Protection', short: 'Defensive registrations and monitoring' },
      { slug: 'domain-recovery', name: 'Domain Recovery', short: 'UDRP and dispute resolution' },
      { slug: 'privacy-whois', name: 'Privacy and WHOIS', short: 'GDPR compliant data protection' },
    ],
  },
  {
    category: 'Advise',
    categoryNum: 'IV',
    description: 'Strategic insight',
    items: [
      { slug: 'domain-valuation', name: 'Domain Valuation', short: 'Data driven valuations' },
      { slug: 'naming-advisory', name: 'Naming Advisory', short: 'Naming strategy for new ventures' },
      { slug: 'market-intelligence', name: 'Market Intelligence', short: 'Trends, pricing, opportunities' },
    ],
  },
]

export const INSIGHTS = [
  {
    slug: 'nordic-domain-market-2026',
    category: 'Market Report',
    date: '12 May 2026',
    title: 'The Nordic domain market in 2026',
    excerpt: 'Key trends, pricing movements, and opportunities across the Nordic region.',
  },
  {
    slug: 'domain-portfolio-management',
    category: 'Guide',
    date: '28 April 2026',
    title: 'Domain portfolio management',
    excerpt: 'Best practices for structuring, securing, and optimising your domain portfolio at scale.',
  },
  {
    slug: 'why-domain-strategy-matters',
    category: 'Strategy',
    date: '15 April 2026',
    title: 'Why domain strategy matters',
    excerpt: 'How the right domain strategy strengthens brand equity and drives long term business growth.',
  },
]
