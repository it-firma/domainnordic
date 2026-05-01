import type { Metadata } from 'next'
import Image from 'next/image'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a confidential conversation with DomainNordic. We respond to every enquiry within one business day.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: '#0F1A3D', minHeight: '100vh' }}>
        <div className="absolute inset-0">
          <Image src="/images/hero-banner.png" alt="" fill priority className="object-cover opacity-30" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(15,26,61,0.7) 0%, rgba(15,26,61,0.95) 100%)' }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(33,82,232,0.4), transparent)' }} />

        <SiteHeader variant="dark" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8 pt-20 pb-32">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-4 mb-12">
                <span className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-white/60">Contact</span>
                <span className="h-px w-12 bg-white/30" />
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">Confidential by default</span>
              </div>
              <h1 className="text-white" style={{ fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 500, lineHeight: 0.98, letterSpacing: '-0.025em' }}>
                Start the
              </h1>
              <h1 className="serif-italic mt-1" style={{ fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 400, lineHeight: 1, letterSpacing: '-0.02em', color: '#7AA0F0' }}>
                conversation.
              </h1>
              <p className="mt-10 max-w-xl text-[16px] leading-[1.7] text-white/75">
                Every engagement begins with a private conversation. Tell us about your business, your domain situation, and what you are trying to achieve. We respond within one business day.
              </p>
              <p className="mt-6 max-w-xl text-[14px] leading-[1.7] text-white/55">
                All communication is confidential. We do not share enquiries with third parties, do not maintain marketing lists, and do not retain identifying information beyond what is necessary to respond.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
                <div className="num-tick text-[10.5px] font-medium uppercase tracking-[0.24em] text-white/50 mb-5">Direct Contact</div>
                <a href="mailto:hello@domainnordic.com" className="block text-[24px] font-medium text-white hover:text-white/80 transition mb-6">
                  hello@domainnordic.com
                </a>
                <a href="mailto:hello@domainnordic.com" className="btn-primary w-full justify-center mb-3">
                  Compose email
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
                  <div>
                    <div className="num-tick text-[10px] font-medium uppercase tracking-[0.18em] text-white/50 mb-1">Response time</div>
                    <div className="text-[13.5px] text-white/85">Within one business day</div>
                  </div>
                  <div>
                    <div className="num-tick text-[10px] font-medium uppercase tracking-[0.18em] text-white/50 mb-1">Languages</div>
                    <div className="text-[13.5px] text-white/85">English, Norwegian, Swedish, Danish, Finnish</div>
                  </div>
                  <div>
                    <div className="num-tick text-[10px] font-medium uppercase tracking-[0.18em] text-white/50 mb-1">Confidentiality</div>
                    <div className="text-[13.5px] text-white/85">All enquiries handled in absolute confidence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-32 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="serif text-[28px] mb-3" style={{ color: '#7AA0F0' }}>i.</div>
              <h3 className="text-[15px] font-medium text-white mb-2">What to include</h3>
              <p className="text-[13px] leading-relaxed text-white/55">A brief description of your business, the situation you are trying to address, and any timeline considerations.</p>
            </div>
            <div>
              <div className="serif text-[28px] mb-3" style={{ color: '#7AA0F0' }}>ii.</div>
              <h3 className="text-[15px] font-medium text-white mb-2">What happens next</h3>
              <p className="text-[13px] leading-relaxed text-white/55">A senior advisor reviews your enquiry personally and responds with next steps, usually within hours.</p>
            </div>
            <div>
              <div className="serif text-[28px] mb-3" style={{ color: '#7AA0F0' }}>iii.</div>
              <h3 className="text-[15px] font-medium text-white mb-2">No commitment</h3>
              <p className="text-[13px] leading-relaxed text-white/55">The first conversation costs nothing and commits to nothing. If we are not the right fit, we will say so.</p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
