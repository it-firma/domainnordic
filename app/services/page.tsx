import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import { SERVICES } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Services',
  description: 'End to end domain advisory across acquisition, management, protection and strategic counsel. Independent expert guidance for businesses that view domains as long term assets.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services · DomainNordic',
    description: 'End to end domain advisory across the full lifecycle.',
    url: '/services',
  },
}

export default function ServicesPage() {
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
            <span className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-white/60">Services</span>
            <span className="h-px w-12 bg-white/30" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">Fifteen disciplines, four categories</span>
          </div>
          <h1 className="text-white max-w-4xl" style={{ fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 500, lineHeight: 0.98, letterSpacing: '-0.025em' }}>
            End to end
          </h1>
          <h1 className="serif-italic mt-1 max-w-4xl" style={{ fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 400, lineHeight: 1, letterSpacing: '-0.02em', color: '#7AA0F0' }}>
            domain advisory.
          </h1>
          <p className="mt-10 max-w-2xl text-[16px] leading-[1.65] text-white/75">
            We provide independent expert guidance across the full domain lifecycle. From discreet acquisition and ongoing portfolio management to brand protection and strategic counsel, every service is delivered with the rigour of a senior advisor and the discretion of a private banker.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="space-y-24">
            {SERVICES.map((cat) => (
              <div key={cat.category} id={cat.category.toLowerCase()}>
                <div className="grid grid-cols-12 gap-8 mb-12 pb-8" style={{ borderBottom: '1px solid #DEE3F0' }}>
                  <div className="col-span-12 lg:col-span-5">
                    <div className="flex items-baseline gap-4">
                      <span className="serif text-[64px] leading-none text-[#2152E8]">{cat.categoryNum}.</span>
                      <div>
                        <h2 className="text-[32px] font-semibold tracking-tight text-[#0F1A3D]">{cat.category}</h2>
                        <p className="mt-2 text-[14px] text-[#6B7591]">{cat.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
                  {cat.items.map((item) => (
                    <Link key={item.slug} href={`/services/${item.slug}`} className="service-link block">
                      <h3 className="text-[18px] font-semibold leading-tight mb-2 text-[#0F1A3D]">{item.name}</h3>
                      <p className="text-[13.5px] leading-relaxed text-[#6B7591]">{item.short}</p>
                      <span className="mt-3 inline-flex items-center gap-2 text-[12px] font-medium text-[#2152E8]">
                        Read more
                        <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 pt-16 border-t border-[#DEE3F0] grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="serif-italic text-[36px] leading-tight text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>
                Not sure where to start?
              </h2>
              <p className="mt-4 text-[15px] text-[#6B7591] max-w-xl leading-relaxed">
                Most engagements begin with a confidential conversation. Tell us about your business, goals, and current domain situation, and we will recommend the right next step.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex items-end">
              <Link href="/contact" className="btn-primary">
                Book consultation
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
