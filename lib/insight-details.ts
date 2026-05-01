export type InsightDetail = {
  slug: string
  category: string
  date: string
  dateISO: string
  title: string
  excerpt: string
  body: { type: 'p' | 'h2'; text: string }[]
}

export const INSIGHT_DETAILS: InsightDetail[] = [
  {
    slug: 'nordic-domain-market-2026',
    category: 'Market Report',
    date: '12 May 2026',
    dateISO: '2026-05-12',
    title: 'The Nordic domain market in 2026',
    excerpt: 'Key trends, pricing movements, and opportunities across the Nordic region.',
    body: [
      { type: 'p', text: 'The Nordic domain market in 2026 is shaped by three forces: continued consolidation of premium country code domains into long term institutional ownership, rising brand protection investment driven by phishing and impersonation threats, and the gradual maturation of secondary TLDs as legitimate alternatives for branded properties.' },
      { type: 'h2', text: 'Premium country code domains' },
      { type: 'p', text: 'Across the four Nordic markets, premium two and three letter country code domains continue to trade at meaningful premiums to comparable global TLDs. The pattern reflects local trust signals, regional search behaviour, and the relative scarcity of high quality short domains in any market.' },
      { type: 'p', text: 'Transactions in this segment are increasingly handled off market. Owners of premium short domains are typically institutional, multi domain, and patient. Public listings are rare. The result is a market that rewards relationships and informed outreach more than transactional volume.' },
      { type: 'h2', text: 'Brand protection and dispute activity' },
      { type: 'p', text: 'Defensive registration activity continues to grow, driven by visible incidents of brand impersonation, phishing, and customer fraud. Most enterprise programs have shifted from maximalist registration to risk weighted defensive coverage, supplemented by continuous monitoring.' },
      { type: 'p', text: 'UDRP and equivalent administrative dispute filings remain steady year over year. The most active categories are financial services, retail, and SaaS, reflecting both target attractiveness and brand protection program maturity.' },
      { type: 'h2', text: 'Secondary TLDs and the io effect' },
      { type: 'p', text: 'New gTLDs and the broader category of branded TLDs continue to gain acceptance for specific use cases, particularly in technology and creative industries. The persistent strength of io as a default for technology brands is now mirrored, in smaller volumes, by ai, dev, and similar category specific extensions.' },
      { type: 'p', text: 'For Nordic operators, the practical implication is that local country code domains remain the strongest trust signal, but a thoughtfully chosen alternative TLD can be acceptable when paired with strong brand investment and clear positioning.' },
      { type: 'h2', text: 'Outlook for the second half of 2026' },
      { type: 'p', text: 'We expect continued tightening of premium country code inventory, modest growth in brand protection spending, and steady professionalisation of portfolio management across the region. Operators with structured domain strategies will continue to outperform those treating domains as commodity registrations.' },
    ],
  },
  {
    slug: 'domain-portfolio-management',
    category: 'Guide',
    date: '28 April 2026',
    dateISO: '2026-04-28',
    title: 'Domain portfolio management',
    excerpt: 'Best practices for structuring, securing, and optimising your domain portfolio at scale.',
    body: [
      { type: 'p', text: 'A well managed domain portfolio is invisible. It does not generate alarms, surprise renewal invoices, or emergency calls about expired registrations. It does not get hijacked, leak personal data, or accumulate orphan domains nobody remembers registering. The work that produces this invisibility is what portfolio management is.' },
      { type: 'h2', text: 'The four pillars of portfolio management' },
      { type: 'p', text: 'Effective portfolio management addresses four areas continuously. Inventory and ownership ensures every domain is accounted for, properly owned, and accessible by authorised personnel. Security and access ensures registrar accounts, DNS, and transfer locks are configured to prevent both casual and targeted attacks.' },
      { type: 'p', text: 'Cost and renewal management ensures predictable, optimised spend with no surprise increases or accidental lapses. Strategic alignment ensures the portfolio actually supports business goals, with non strategic registrations released and missing strategic registrations identified and acquired.' },
      { type: 'h2', text: 'Common failure modes' },
      { type: 'p', text: 'The most common failure modes are remarkably consistent across organisations. Single point of failure registrar setups create catastrophic risk if the registrar account is compromised or the registrar fails commercially. Personal email addresses on critical domains create exposure when staff change roles or leave the organisation entirely.' },
      { type: 'p', text: 'Loss leader registrar pricing creates surprise renewal increases of three to five times first year rates. Inconsistent privacy settings expose personal addresses and phone numbers in WHOIS records. And undocumented registrations accumulate over years until nobody remembers what they were for or whether they should be renewed.' },
      { type: 'h2', text: 'Building a portfolio management practice' },
      { type: 'p', text: 'Start with an audit. Without complete visibility into what you have, where it is, and what it costs, every other improvement is guesswork. A proper audit produces an inventory, identifies risks, quantifies costs, and prioritises remediation.' },
      { type: 'p', text: 'Move to architecture. Decide which registrars hold which categories of domain, how access is controlled, what documentation is maintained, and who is accountable. Document the architecture in writing, and review it annually as the business evolves.' },
      { type: 'p', text: 'Add governance. Define renewal review cycles, registration approval processes, and incident response procedures. The goal is consistency, not bureaucracy: a small, documented set of rules that prevent the largest categories of failure.' },
      { type: 'p', text: 'Mature into strategy. Once operational fundamentals are stable, the portfolio can become a source of competitive advantage rather than a cost centre. This is where defensive registrations, strategic acquisitions, and brand protection programs deliver disproportionate value.' },
    ],
  },
  {
    slug: 'why-domain-strategy-matters',
    category: 'Strategy',
    date: '15 April 2026',
    dateISO: '2026-04-15',
    title: 'Why domain strategy matters',
    excerpt: 'How the right domain strategy strengthens brand equity and drives long term business growth.',
    body: [
      { type: 'p', text: 'Most businesses have a marketing strategy, a product strategy, and an operational strategy. Few have a domain strategy. The result is that domain decisions get made tactically, often by junior staff, often under time pressure, and rarely with reference to long term business priorities. This is a missed opportunity, and increasingly, a strategic risk.' },
      { type: 'h2', text: 'Why domains deserve strategic attention' },
      { type: 'p', text: 'A domain is the most persistent address a business has. Office locations change, phone numbers change, social media platforms rise and fall. The domain endures. For most businesses, the primary domain will outlast every other piece of digital infrastructure they own.' },
      { type: 'p', text: 'A domain is also a trust signal. Customers, partners, and search engines treat domains as proxies for legitimacy. A premium country code domain in your home market signals permanence, professionalism, and local commitment in ways no logo refresh can match.' },
      { type: 'p', text: 'And a domain is a defensive asset. The right portfolio of registrations protects against impersonation, phishing, and brand abuse. The wrong portfolio leaves obvious gaps that adversaries are increasingly sophisticated at exploiting.' },
      { type: 'h2', text: 'What strategic domain ownership looks like' },
      { type: 'p', text: 'Strategic domain ownership starts with clarity about which domains matter and why. The primary brand domain is obvious, but the strategic question extends further: which alternative spellings, which adjacent product names, which executive personal names, which geographic variants, which product categories.' },
      { type: 'p', text: 'It continues with clarity about what matters less. A strategic portfolio is not a maximalist portfolio. Many companies waste meaningful sums on defensive registrations that defend nothing real, while leaving genuine vulnerabilities unaddressed.' },
      { type: 'p', text: 'And it concludes with documentation, governance, and review cycles. A strategy that exists only in someone\'s head is not a strategy.' },
      { type: 'h2', text: 'When domain strategy starts to compound' },
      { type: 'p', text: 'The benefits of a deliberate domain strategy compound over time. Acquisition opportunities surface that would have been missed without an active watching brief. Defensive coverage prevents incidents that would otherwise have required expensive remediation. Cost optimisation produces savings that grow each year as the portfolio rationalises. Strategic alignment means digital infrastructure supports business strategy rather than constraining it.' },
      { type: 'p', text: 'None of this happens automatically. It happens because someone decided that domains deserved strategic attention, did the work, and kept doing it. That decision, and the discipline that follows from it, is what separates portfolios that quietly support the business from portfolios that quietly hold it back.' },
    ],
  },
]
