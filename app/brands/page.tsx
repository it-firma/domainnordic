import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Brands',
  description: 'Four local brands, one shared standard. domene.io, domän.io, domæne.io and verkkotunnus.io deliver advisory services across the Nordic markets.',
  alternates: { canonical: '/brands' },
}

const BRANDS = [
  {
    name: 'domene.io',
    country: 'Norway',
    image: '/images/norway.png',
    accent: '#2152E8',
    description: 'Premium domain advisory rooted in the Norwegian market, with regional and international reach.',
    href: 'https://domene.io',
  },
  {
    name: 'domän.io',
    country: 'Sweden',
    image: '/images/sweden.png',
    accent: '#EAB308',
    description: 'Strategic domain advisory for ambitious Swedish businesses and Nordic operators.',
    href: 'https://xn--domn-noa.io',
  },
  {
    name: 'domæne.io',
    country: 'Denmark',
    image: '/images/denmark.png',
    accent: '#E94B35',
    description: 'Discreet advisory for Danish enterprises and brands with long term digital presence.',
    href: 'https://xn--domne-ura.io',
  },
  {
    name: 'verkkotunnus.io',
    country: 'Finland',
    image: '/images/finland.png',
    accent: '#38BDF8',
    description: 'Local advisory expertise for the Finnish domain market and broader Nordic operations.',
    href: 'https://verkkotunnus.io',
  },
]

export default function BrandsPage() {
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
            <span className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-white/60">Brands</span>
            <span className="h-px w-12 bg-white/30" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">Four markets, one standard</span>
          </div>
          <h1 className="text-white" style={{ fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 500, lineHeight: 0.98, letterSpacing: '-0.025em' }}>
            Four brands.
          </h1>
          <h1 className="serif-italic mt-1" style={{ fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 400, lineHeight: 1, letterSpacing: '-0.02em', color: '#7AA0F0' }}>
            One Nordic vision.
          </h1>
          <p className="mt-10 max-w-2xl text-[16px] leading-[1.65] text-white/75">
            Each brand operates with deep local market knowledge while sharing a single advisory standard. The result is a coordinated approach that gives clients the best of both: regional expertise and consistent quality across markets.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="space-y-12">
            {BRANDS.map((brand, i) => (
              <a
                key={brand.name}
                href={brand.href}
                className="brand-card group block bg-white border border-[#DEE3F0] rounded-2xl overflow-hidden transition"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  <div className="relative h-[320px] lg:h-auto lg:min-h-[400px] overflow-hidden">
                    <Image src={brand.image} alt={`${brand.country} landscape`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                    <div className="absolute inset-0 lg:bg-gradient-to-r" style={{ background: 'linear-gradient(180deg, rgba(15,26,61,0.1) 0%, rgba(15,26,61,0.6) 100%)' }} />
                    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: brand.accent }} />
                  </div>
                  <div className="p-10 lg:p-14 flex flex-col justify-center">
                    <div className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] mb-3" style={{ color: brand.accent }}>{brand.country}</div>
                    <div className="text-[42px] font-medium leading-none mb-6 text-[#0F1A3D]" style={{ letterSpacing: '-0.02em' }}>
                      {brand.name.split('.io')[0]}<span className="text-[#6B7591]">.io</span>
                    </div>
                    <p className="text-[15px] leading-[1.65] text-[#6B7591] max-w-md mb-8">{brand.description}</p>
                    <span className="inline-flex items-center gap-2 text-[13px] font-medium" style={{ color: brand.accent }}>
                      Visit {brand.name}
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-32 pt-16 border-t border-[#DEE3F0] grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="serif-italic text-[36px] leading-tight text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>
                Wherever you operate, we are nearby.
              </h2>
              <p className="mt-4 text-[15px] text-[#6B7591] max-w-xl leading-relaxed">
                Engagements typically begin through one of our regional brands or directly through DomainNordic. Either way, you get the same advisory standard, the same discretion, and the same outcomes focus.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex items-end">
              <Link href="/contact" className="btn-primary">
                Start a conversation
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
