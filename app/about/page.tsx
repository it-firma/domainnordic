import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'About',
  description: 'DomainNordic is an independent advisory group serving the Nordic markets through four local brands. Built for businesses that view domains as long term assets.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
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
            <span className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-white/60">About</span>
            <span className="h-px w-12 bg-white/30" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">Independent Nordic Advisory</span>
          </div>
          <h1 className="text-white max-w-4xl" style={{ fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 500, lineHeight: 0.98, letterSpacing: '-0.025em' }}>
            A new standard
          </h1>
          <h1 className="serif-italic mt-1 max-w-4xl" style={{ fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 400, lineHeight: 1, letterSpacing: '-0.02em', color: '#7AA0F0' }}>
            for domain advisory.
          </h1>
          <p className="mt-10 max-w-2xl text-[16px] leading-[1.65] text-white/75">
            DomainNordic exists for businesses that view domains as long term strategic assets, not commodity registrations. We provide independent advisory services across the Nordic markets through four locally rooted brands and one shared standard.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid grid-cols-12 gap-8 mb-32">
            <div className="col-span-12 lg:col-span-4">
              <div className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-[#6B7591] mb-6">Who we are</div>
              <h2 className="serif-italic text-[40px] leading-tight text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>
                Operators, not resellers.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-6">
              <p className="text-[16px] leading-[1.7] text-[#1A2447]">
                DomainNordic is an advisory group, not a registrar. We do not sell domain registrations, we do not earn commission on registry fees, and we do not have inventory we are trying to clear. The services we recommend are the services we believe will produce the best outcome for the client. Nothing else.
              </p>
              <p className="text-[16px] leading-[1.7] text-[#1A2447]">
                The team behind DomainNordic has spent years building, owning, transacting, and advising on domain assets across the Nordic region and internationally. The work has been quiet, the relationships are real, and the standards are professional. We believe domain advisory should be held to the same bar as legal, financial, and strategic advisory work, and we operate accordingly.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8 mb-32">
            <div className="col-span-12 lg:col-span-4">
              <div className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-[#6B7591] mb-6">Why anonymous</div>
              <h2 className="serif-italic text-[40px] leading-tight text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>
                Discretion is the work.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-6">
              <p className="text-[16px] leading-[1.7] text-[#1A2447]">
                Many of our engagements involve sensitive negotiations where any leak of buyer identity, intended use, or strategic direction would damage value. Some clients prefer that even the existence of an engagement remains private. Public profile is rarely an asset in this work, and is often a liability.
              </p>
              <p className="text-[16px] leading-[1.7] text-[#1A2447]">
                For those reasons, we keep our public footprint deliberately small. The team operates through DomainNordic and its four regional brands. Clients receive the names, credentials, and references they need during engagement onboarding. Beyond that, our work speaks through outcomes, not press releases.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8 mb-32">
            <div className="col-span-12 lg:col-span-4">
              <div className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-[#6B7591] mb-6">How we operate</div>
              <h2 className="serif-italic text-[40px] leading-tight text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>
                Senior, end to end.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-6">
              <p className="text-[16px] leading-[1.7] text-[#1A2447]">
                Every engagement is led by a senior advisor from start to finish. There are no hand offs to junior staff, no opaque escalation paths, and no situations where you are passed between unfamiliar contacts. The person who designs the strategy is the person who delivers the outcome.
              </p>
              <p className="text-[16px] leading-[1.7] text-[#1A2447]">
                We deliberately limit the number of engagements we accept at any one time. Capacity is the constraint that protects quality. When we are full, we say so, and we recommend alternative advisors where appropriate.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-4">
              <div className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-[#6B7591] mb-6">Where we work</div>
              <h2 className="serif-italic text-[40px] leading-tight text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>
                Across the Nordic region.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-6">
              <p className="text-[16px] leading-[1.7] text-[#1A2447]">
                Through our four brands, we serve clients across Norway, Sweden, Denmark, and Finland. Each brand has deep local market knowledge, and the group as a whole coordinates on cross border engagements where multi market presence matters.
              </p>
              <p className="text-[16px] leading-[1.7] text-[#1A2447]">
                We also work with international clients seeking premium Nordic country code domains, where local presence requirements or market specific knowledge make local representation essential.
              </p>
            </div>
          </div>

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
                Contact us
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
