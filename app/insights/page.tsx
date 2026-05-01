import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import { INSIGHTS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Market reports, strategic guides and analysis from the DomainNordic advisory team. Knowledge that drives smarter decisions.',
  alternates: { canonical: '/insights' },
}

export default function InsightsPage() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: '#0F1A3D' }}>
        <div className="absolute inset-0">
          <Image src="/images/hero-banner.png" alt="" fill priority className="object-cover opacity-30" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(15,26,61,0.7) 0%, rgba(15,26,61,0.95) 100%)' }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(33,82,232,0.4), transparent)' }} />

        <SiteHeader variant="dark" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8 pt-20 pb-32">
          <div className="flex items-center gap-4 mb-12">
            <span className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-white/60">Insights</span>
            <span className="h-px w-12 bg-white/30" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">Market intelligence</span>
          </div>
          <h1 className="text-white" style={{ fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 500, lineHeight: 0.98, letterSpacing: '-0.025em' }}>
            Knowledge that drives
          </h1>
          <h1 className="serif-italic mt-1" style={{ fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 400, lineHeight: 1, letterSpacing: '-0.02em', color: '#7AA0F0' }}>
            smarter decisions.
          </h1>
          <p className="mt-10 max-w-2xl text-[16px] leading-[1.65] text-white/75">
            Market reports, strategic guides, and analysis from our advisory team. Selectively published, intentionally substantive, written for operators and decision makers who want signal rather than noise.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#DEE3F0]">
            {INSIGHTS.map((article) => (
              <Link key={article.slug} href={`/insights/${article.slug}`} className="brand-card group block bg-white p-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="num-tick text-[10px] font-medium uppercase tracking-[0.24em] text-[#2152E8]">{article.category}</span>
                  <span className="text-[10.5px] text-[#6B7591]">·</span>
                  <span className="text-[10.5px] text-[#6B7591]">{article.date}</span>
                </div>
                <h3 className="serif text-[28px] leading-[1.15] mb-4 text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>
                  {article.title}
                </h3>
                <p className="text-[14px] leading-relaxed mb-6 text-[#6B7591]">{article.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-[12.5px] font-medium text-[#2152E8]">
                  Read article
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-32 pt-16 border-t border-[#DEE3F0] grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="serif-italic text-[36px] leading-tight text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>
                Receive future insights directly.
              </h2>
              <p className="mt-4 text-[15px] text-[#6B7591] max-w-xl leading-relaxed">
                Quarterly briefings on Nordic and international domain markets are sent to a small list of operators, investors, and advisors. Email us if you would like to be added.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex items-end">
              <a href="mailto:hello@domainnordic.com?subject=Insights%20briefing%20list" className="btn-primary">
                Request inclusion
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
