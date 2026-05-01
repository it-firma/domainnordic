import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import { INSIGHT_DETAILS } from '@/lib/insight-details'
import { SITE_CONFIG } from '@/lib/site-config'

export function generateStaticParams() {
  return INSIGHT_DETAILS.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = INSIGHT_DETAILS.find((s) => s.slug === params.slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      title: `${article.title} · DomainNordic`,
      description: article.excerpt,
      url: `/insights/${article.slug}`,
      type: 'article',
      publishedTime: article.dateISO,
    },
  }
}

export default function InsightDetailPage({ params }: { params: { slug: string } }) {
  const article = INSIGHT_DETAILS.find((s) => s.slug === params.slug)
  if (!article) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.dateISO,
    author: { '@type': 'Organization', name: SITE_CONFIG.legalName },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.legalName,
      logo: { '@type': 'ImageObject', url: `${SITE_CONFIG.url}/images/logo-header.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_CONFIG.url}/insights/${article.slug}` },
  }

  const otherArticles = INSIGHT_DETAILS.filter((a) => a.slug !== article.slug).slice(0, 2)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="relative overflow-hidden" style={{ background: '#0F1A3D' }}>
        <div className="absolute inset-0">
          <Image src="/images/hero-banner.png" alt="" fill priority className="object-cover opacity-25" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(15,26,61,0.7) 0%, rgba(15,26,61,0.95) 100%)' }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(33,82,232,0.4), transparent)' }} />

        <SiteHeader variant="dark" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8 pt-20 pb-32">
          <div className="flex items-center gap-4 mb-12">
            <Link href="/insights" className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-white/60 hover:text-white transition">{article.category}</Link>
            <span className="h-px w-12 bg-white/30" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">{article.date}</span>
          </div>
          <h1 className="text-white max-w-4xl serif" style={{ fontSize: 'clamp(40px, 5.5vw, 76px)', fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            {article.title}
          </h1>
          <p className="mt-8 max-w-2xl text-[18px] leading-[1.65] text-white/75">{article.excerpt}</p>
        </div>
      </section>

      <article className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[760px] px-5 sm:px-8">
          <div className="space-y-6">
            {article.body.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <h2 key={i} className="serif-italic text-[32px] leading-tight mt-12 mb-2 text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>
                    {block.text}
                  </h2>
                )
              }
              return (
                <p key={i} className="text-[17px] leading-[1.75] text-[#1A2447]">{block.text}</p>
              )
            })}
          </div>

          <div className="mt-20 pt-12 border-t border-[#DEE3F0]">
            <h3 className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-[#6B7591] mb-6">Continue Reading</h3>
            <div className="space-y-6">
              {otherArticles.map((a) => (
                <Link key={a.slug} href={`/insights/${a.slug}`} className="service-link block">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="num-tick text-[10px] font-medium uppercase tracking-[0.24em] text-[#2152E8]">{a.category}</span>
                    <span className="text-[10.5px] text-[#6B7591]">·</span>
                    <span className="text-[10.5px] text-[#6B7591]">{a.date}</span>
                  </div>
                  <h4 className="serif text-[22px] leading-tight text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>{a.title}</h4>
                  <p className="mt-1 text-[13px] text-[#6B7591]">{a.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <SiteFooter />
    </>
  )
}
