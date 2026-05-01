import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import { SERVICE_DETAILS } from '@/lib/service-details'
import { SITE_CONFIG } from '@/lib/site-config'

export function generateStaticParams() {
  return SERVICE_DETAILS.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = SERVICE_DETAILS.find((s) => s.slug === params.slug)
  if (!service) return {}
  const description = service.tagline + ' ' + service.intro[0].slice(0, 130)
  return {
    title: service.name,
    description,
    keywords: [
      service.name,
      service.category + ' domain advisory',
      ...service.glossary.map((g) => g.term),
    ],
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} · DomainNordic`,
      description: service.tagline,
      url: `/services/${service.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.name} · DomainNordic`,
      description: service.tagline,
    },
  }
}

const Arrow = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = SERVICE_DETAILS.find((s) => s.slug === params.slug)
  if (!service) notFound()

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.intro[0],
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.legalName,
      url: SITE_CONFIG.url,
    },
    serviceType: service.category,
    url: `${SITE_CONFIG.url}/services/${service.slug}`,
    areaServed: [
      { '@type': 'Country', name: 'Norway' },
      { '@type': 'Country', name: 'Sweden' },
      { '@type': 'Country', name: 'Denmark' },
      { '@type': 'Country', name: 'Finland' },
    ],
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        description: 'Custom advisory engagement, fees agreed in writing before work begins.',
      },
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How DomainNordic delivers ${service.name}`,
    description: `The structured process for ${service.name} engagements.`,
    step: service.process.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.title,
      text: step.detail,
    })),
  }

  const definedTermSetSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: `${service.name} Glossary`,
    hasDefinedTerm: service.glossary.map((g) => ({
      '@type': 'DefinedTerm',
      name: g.term,
      description: g.definition,
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_CONFIG.url}/services` },
      { '@type': 'ListItem', position: 3, name: service.name, item: `${SITE_CONFIG.url}/services/${service.slug}` },
    ],
  }

  const relatedServices = SERVICE_DETAILS.filter(
    (s) => s.category === service.category && s.slug !== service.slug
  ).slice(0, 3)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: '#0F1A3D' }}>
        <div className="absolute inset-0">
          <Image src="/images/hero-banner.png" alt="" fill priority className="object-cover opacity-25" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(15,26,61,0.7) 0%, rgba(15,26,61,0.95) 100%)' }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(33,82,232,0.4), transparent)' }} />

        <SiteHeader variant="dark" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8 pt-20 pb-32">
          <div className="flex items-center gap-4 mb-12">
            <span className="serif text-[20px] text-[#7AA0F0]">{service.categoryNum}.</span>
            <Link href="/services" className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60 hover:text-white transition">
              {service.category}
            </Link>
            <span className="h-px w-12 bg-white/30" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">Service</span>
          </div>
          <h1 className="text-white max-w-4xl" style={{ fontSize: 'clamp(44px, 6vw, 84px)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em' }}>
            {service.name}
          </h1>
          <p className="serif-italic mt-4 max-w-3xl text-[24px] leading-[1.3]" style={{ color: '#7AA0F0' }}>
            {service.tagline}
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid grid-cols-12 gap-8 mb-20">
            <div className="col-span-12 lg:col-span-7 space-y-6">
              {service.intro.map((para, i) => (
                <p key={i} className="text-[18px] leading-[1.7] text-[#1A2447]" style={{ fontWeight: 400 }}>
                  {para}
                </p>
              ))}
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex items-end">
              <Link href="/contact" className="btn-primary">
                Discuss this service
                <Arrow />
              </Link>
            </div>
          </div>

          {/* CORE BLOCKS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
            <DetailBlock title="What it is" items={service.whatItIs} />
            <DetailBlock title="Who it is for" items={service.whoItIsFor} />
            <DetailBlock title="How we deliver" items={service.howWeDeliver} />
            <DetailBlock title="Outcomes" items={service.outcomes} />
          </div>

          {/* WHEN IT MATTERS */}
          <div className="border-t border-[#DEE3F0] pt-20 mb-32">
            <div className="grid grid-cols-12 gap-8 mb-12">
              <div className="col-span-12 lg:col-span-7">
                <div className="flex items-center gap-4 mb-8">
                  <span className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-[#6B7591]">When it matters</span>
                  <span className="h-px w-12 bg-[#DEE3F0]" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7591]">Common scenarios</span>
                </div>
                <h2 className="serif-italic text-[40px] leading-tight text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>
                  When this work pays off most.
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-[#DEE3F0]">
              {service.whenItMatters.map((item, i) => {
                const numerals = ['i.', 'ii.', 'iii.', 'iv.', 'v.']
                return (
                  <div key={i} className="bg-white p-6 lg:p-8">
                    <div className="serif text-[28px] leading-none mb-4 text-[#2152E8]">{numerals[i]}</div>
                    <h3 className="text-[14.5px] font-semibold tracking-tight mb-3 text-[#0F1A3D]">{item.situation}</h3>
                    <p className="text-[12.5px] leading-relaxed text-[#6B7591]">{item.detail}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* PROCESS */}
          <div className="border-t border-[#DEE3F0] pt-20 mb-32">
            <div className="grid grid-cols-12 gap-8 mb-12">
              <div className="col-span-12 lg:col-span-7">
                <div className="flex items-center gap-4 mb-8">
                  <span className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-[#6B7591]">Process</span>
                  <span className="h-px w-12 bg-[#DEE3F0]" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7591]">Six stages, end to end</span>
                </div>
                <h2 className="serif-italic text-[40px] leading-tight text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>
                  How the engagement runs.
                </h2>
              </div>
            </div>
            <div className="space-y-12">
              {service.process.map((step, i) => (
                <div key={i} className="grid grid-cols-12 gap-8 pb-12 border-b border-[#DEE3F0] last:border-b-0">
                  <div className="col-span-12 lg:col-span-3">
                    <div className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-[#2152E8] mb-2">Step {step.step}</div>
                    <h3 className="serif text-[32px] leading-none text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>{step.title}</h3>
                  </div>
                  <div className="col-span-12 lg:col-span-8 lg:col-start-5">
                    <p className="text-[16px] leading-[1.7] text-[#1A2447]">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GLOSSARY */}
          <div className="border-t border-[#DEE3F0] pt-20 mb-32">
            <div className="grid grid-cols-12 gap-8 mb-12">
              <div className="col-span-12 lg:col-span-7">
                <div className="flex items-center gap-4 mb-8">
                  <span className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-[#6B7591]">Glossary</span>
                  <span className="h-px w-12 bg-[#DEE3F0]" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7591]">Key terms</span>
                </div>
                <h2 className="serif-italic text-[40px] leading-tight text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>
                  Terms used in this work.
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {service.glossary.map((g, i) => (
                <div key={i} className="flex gap-4">
                  <span className="serif text-[20px] leading-none flex-shrink-0 text-[#2152E8] mt-1">{['i', 'ii', 'iii', 'iv'][i]}.</span>
                  <div>
                    <dt className="text-[15px] font-semibold text-[#0F1A3D] mb-1">{g.term}</dt>
                    <dd className="text-[13.5px] leading-[1.6] text-[#6B7591]">{g.definition}</dd>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="border-t border-[#DEE3F0] pt-20">
            <div className="grid grid-cols-12 gap-8 mb-12">
              <div className="col-span-12 lg:col-span-7">
                <div className="flex items-center gap-4 mb-8">
                  <span className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-[#6B7591]">FAQ</span>
                  <span className="h-px w-12 bg-[#DEE3F0]" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7591]">Common questions</span>
                </div>
                <h2 className="serif-italic text-[40px] leading-tight text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>
                  Common questions, answered.
                </h2>
              </div>
            </div>
            <div className="space-y-px bg-[#DEE3F0]">
              {service.faq.map((item, i) => (
                <div key={i} className="bg-white p-8">
                  <h3 className="text-[16px] font-semibold text-[#0F1A3D] mb-3">{item.q}</h3>
                  <p className="text-[14px] leading-[1.7] text-[#6B7591]">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RELATED SERVICES */}
          <div className="mt-32 pt-16 border-t border-[#DEE3F0]">
            <div className="flex items-center gap-4 mb-8">
              <span className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-[#6B7591]">Related</span>
              <span className="h-px w-12 bg-[#DEE3F0]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7591]">Other services in {service.category}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
              {relatedServices.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="service-link block">
                  <h4 className="text-[16px] font-semibold leading-tight mb-2 text-[#0F1A3D]">{s.name}</h4>
                  <p className="text-[13px] leading-relaxed text-[#6B7591]">{s.tagline}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-32 pt-16 border-t border-[#DEE3F0] grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="serif-italic text-[36px] leading-tight text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>
                Ready to start a conversation?
              </h2>
              <p className="mt-4 text-[15px] text-[#6B7591] max-w-xl leading-relaxed">
                The first conversation is private, costs nothing, and commits to nothing. We respond within one business day.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex items-end">
              <Link href="/contact" className="btn-primary">
                Discuss {service.name.toLowerCase()}
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  const numerals = ['i.', 'ii.', 'iii.', 'iv.', 'v.', 'vi.']
  return (
    <div>
      <h2 className="text-[20px] font-semibold uppercase tracking-[0.08em] mb-8 pb-4 text-[#0F1A3D]" style={{ borderBottom: '1px solid #0F1A3D' }}>
        {title}
      </h2>
      <div className="space-y-7">
        {items.map((item, i) => (
          <div key={i} className="flex gap-4">
            <span className="serif text-[24px] leading-none flex-shrink-0 text-[#2152E8]">{numerals[i]}</span>
            <p className="text-[14.5px] leading-[1.7] text-[#1A2447]">{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
