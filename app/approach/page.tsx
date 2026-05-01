import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Approach',
  description: 'A proven advisory process built around your goals. Discover, strategise, execute and optimise · every engagement structured for long term outcomes.',
  alternates: { canonical: '/approach' },
}

export default function ApproachPage() {
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
            <span className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-white/60">Approach</span>
            <span className="h-px w-12 bg-white/30" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">A proven process</span>
          </div>
          <h1 className="text-white" style={{ fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 500, lineHeight: 0.98, letterSpacing: '-0.025em' }}>
            How we work.
          </h1>
          <h1 className="serif-italic mt-1" style={{ fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 400, lineHeight: 1, letterSpacing: '-0.02em', color: '#7AA0F0' }}>
            Built around your goals.
          </h1>
          <p className="mt-10 max-w-2xl text-[16px] leading-[1.65] text-white/75">
            Every engagement follows the same structured process, regardless of size or scope. The discipline is what produces the outcomes. The flexibility within that discipline is what makes the work fit your situation, not a template.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="space-y-32">
            {[
              {
                num: 'i.',
                title: 'Discover',
                tagline: 'We understand before we recommend.',
                detail: [
                  'Every engagement begins with a private conversation and a structured discovery process. We map your business, your current digital footprint, your strategic priorities, and your risk profile before suggesting any direction.',
                  'For most clients, discovery takes one to three weeks. We come away with a written brief that summarises what we have learned, what we believe matters most, and what we recommend addressing first.',
                ],
              },
              {
                num: 'ii.',
                title: 'Strategize',
                tagline: 'Strategy first, action second.',
                detail: [
                  'A documented strategy is the difference between coordinated outcomes and accidental ones. We translate the discovery findings into a written strategy with prioritised actions, defined success metrics, and clear cost expectations.',
                  'The strategy is yours. You can engage us to execute it, take it elsewhere, or implement it internally. Most clients choose to continue with us, but the choice is always genuine.',
                ],
              },
              {
                num: 'iii.',
                title: 'Execute',
                tagline: 'Senior advisors, end to end.',
                detail: [
                  'Execution is where most domain advisory engagements lose value. Hand offs to junior staff, opaque processes, and inconsistent quality erode the strategy that was just paid for. We do it differently.',
                  'Every engagement is led by a senior advisor from start to finish. You speak with the same person who designed the strategy, negotiated the terms, and delivered the outcome. No account managers, no escalation paths.',
                ],
              },
              {
                num: 'iv.',
                title: 'Optimize',
                tagline: 'A portfolio is never finished.',
                detail: [
                  'The right portfolio in 2026 is the wrong portfolio in 2030. Markets shift, businesses evolve, and what was strategic three years ago becomes routine or obsolete. We build optimisation into every long term engagement.',
                  'For ongoing clients, this means quarterly reviews, annual portfolio assessments, and proactive flagging of opportunities and risks. The work compounds, and so do the outcomes.',
                ],
              },
            ].map((step) => (
              <div key={step.num} className="grid grid-cols-12 gap-8">
                <div className="col-span-12 lg:col-span-4">
                  <div className="serif text-[120px] leading-none mb-6 text-[#2152E8]" style={{ fontWeight: 400 }}>{step.num}</div>
                  <h2 className="text-[36px] font-semibold tracking-tight mb-3 text-[#0F1A3D]">{step.title}</h2>
                  <p className="serif-italic text-[20px] text-[#6B7591]" style={{ letterSpacing: '-0.005em' }}>{step.tagline}</p>
                </div>
                <div className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-6">
                  {step.detail.map((para, i) => (
                    <p key={i} className="text-[16px] leading-[1.7] text-[#1A2447]">{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 pt-16 border-t border-[#DEE3F0] grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="serif-italic text-[36px] leading-tight text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>
                Ready to begin?
              </h2>
              <p className="mt-4 text-[15px] text-[#6B7591] max-w-xl leading-relaxed">
                The first conversation costs nothing and commits to nothing. If we are the right fit, we will say so. If not, we will help you find someone better suited.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex items-end">
              <Link href="/contact" className="btn-primary">
                Schedule a discovery call
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
