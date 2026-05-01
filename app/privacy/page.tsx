import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How DomainNordic collects, uses, and protects information. We respect your privacy and limit data collection to what is necessary.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <>
      <div style={{ background: '#0F1A3D' }}>
        <SiteHeader variant="dark" />
      </div>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[760px] px-5 sm:px-8">
          <div className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-[#6B7591] mb-6">Legal</div>
          <h1 className="text-[#0F1A3D] mb-4" style={{ fontSize: 'clamp(40px, 5.5vw, 64px)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em' }}>
            Privacy Policy
          </h1>
          <p className="text-[14px] text-[#6B7591] mb-12">Last updated 1 May 2026</p>

          <div className="space-y-6 text-[16px] leading-[1.75] text-[#1A2447]">
            <p>
              DomainNordic respects your privacy and is committed to protecting the personal information you share with us. This policy explains what we collect, how we use it, and the choices you have. We aim to keep this short, clear, and honest.
            </p>

            <h2 className="serif-italic text-[28px] mt-12 mb-3 text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>What we collect</h2>
            <p>
              When you contact us by email, we receive whatever information you choose to share, typically your name, email address, and the content of your message. We do not require additional information to begin a conversation.
            </p>
            <p>
              When you visit our website, our hosting infrastructure logs standard request information such as IP address, browser type, and pages visited. This is used to maintain the site, prevent abuse, and produce aggregate analytics. We do not use this information to build profiles of individual visitors.
            </p>
            <p>
              We use privacy preserving analytics where possible and avoid third party tracking scripts that profile visitors across sites.
            </p>

            <h2 className="serif-italic text-[28px] mt-12 mb-3 text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>How we use your information</h2>
            <p>
              We use the information you provide to respond to your enquiry, deliver any services you engage us for, and maintain records as required by applicable law. We do not sell your information, share it with marketing partners, or add you to mailing lists you did not request.
            </p>
            <p>
              When an engagement ends, we retain only the records necessary to demonstrate the work that was performed, comply with legal obligations, and enable future references if you request them.
            </p>

            <h2 className="serif-italic text-[28px] mt-12 mb-3 text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>Confidentiality</h2>
            <p>
              All client communication is treated as confidential by default. Information you share during enquiries, consultations, and engagements is not disclosed to third parties without your explicit consent, except where disclosure is required by law or court order.
            </p>
            <p>
              For sensitive engagements, we are happy to enter into formal non disclosure agreements before any substantive conversation takes place.
            </p>

            <h2 className="serif-italic text-[28px] mt-12 mb-3 text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>Your rights</h2>
            <p>
              Under applicable data protection law, you have the right to access information we hold about you, to correct inaccuracies, to request deletion in defined circumstances, and to object to certain processing. To exercise any of these rights, email us at hello@domainnordic.com and we will respond within statutory time frames.
            </p>

            <h2 className="serif-italic text-[28px] mt-12 mb-3 text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>Cookies</h2>
            <p>
              Our website uses only the minimum cookies necessary for functionality. We do not use cookies for behavioural advertising or cross site tracking. Your browser settings allow you to refuse or delete cookies at any time.
            </p>

            <h2 className="serif-italic text-[28px] mt-12 mb-3 text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>Changes to this policy</h2>
            <p>
              We may update this policy from time to time. Material changes will be reflected in the last updated date at the top of this page. Where required by law, we will notify affected individuals directly.
            </p>

            <h2 className="serif-italic text-[28px] mt-12 mb-3 text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>Contact</h2>
            <p>
              For any privacy related question, please email hello@domainnordic.com. We respond to privacy enquiries within five business days.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
