import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms governing use of the DomainNordic website and the engagement framework for advisory services.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <>
      <div style={{ background: '#0F1A3D' }}>
        <SiteHeader variant="dark" />
      </div>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[760px] px-5 sm:px-8">
          <div className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-[#6B7591] mb-6">Legal</div>
          <h1 className="text-[#0F1A3D] mb-4" style={{ fontSize: 'clamp(40px, 5.5vw, 64px)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em' }}>
            Terms of Service
          </h1>
          <p className="text-[14px] text-[#6B7591] mb-12">Last updated 1 May 2026</p>

          <div className="space-y-6 text-[16px] leading-[1.75] text-[#1A2447]">
            <p>
              These terms govern your use of the DomainNordic website. They do not constitute an engagement letter, advisory agreement, or service contract. Formal engagements are governed by separate written agreements signed by both parties.
            </p>

            <h2 className="serif-italic text-[28px] mt-12 mb-3 text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>Use of the website</h2>
            <p>
              The information on this website is provided for general informational purposes. While we make reasonable efforts to keep content accurate and current, we make no warranties regarding completeness, accuracy, or fitness for any specific purpose. Nothing on this website constitutes legal, financial, or professional advice for your specific situation.
            </p>
            <p>
              You may use this website for lawful purposes only. You may not attempt to disrupt the service, gain unauthorised access to systems, scrape content for redistribution, or use the website to send unsolicited communications to third parties.
            </p>

            <h2 className="serif-italic text-[28px] mt-12 mb-3 text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>Intellectual property</h2>
            <p>
              All content on this website, including text, design, graphics, and code, is owned by DomainNordic or licensed to it. You may view and quote brief excerpts for legitimate informational purposes with attribution. Reproduction, redistribution, or commercial use requires written permission.
            </p>

            <h2 className="serif-italic text-[28px] mt-12 mb-3 text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>No advisory relationship</h2>
            <p>
              Submitting a contact form or sending an email does not create an advisory or client relationship. A formal advisory relationship is established only after both parties have agreed terms in writing and any applicable conflict checks have been completed.
            </p>
            <p>
              Until that point, communications you send us are treated with confidentiality but do not benefit from the protections that apply to formal client engagements.
            </p>

            <h2 className="serif-italic text-[28px] mt-12 mb-3 text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>Limitation of liability</h2>
            <p>
              To the maximum extent permitted by applicable law, DomainNordic and its affiliates are not liable for any indirect, incidental, or consequential damages arising from use of this website. Our total liability for direct damages arising from website use is limited to the amount you paid us in the previous twelve months, which is typically zero for non clients.
            </p>

            <h2 className="serif-italic text-[28px] mt-12 mb-3 text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>Third party links</h2>
            <p>
              Our website includes links to third party websites, including those of our regional brands and external resources. We do not control these external sites and are not responsible for their content or practices.
            </p>

            <h2 className="serif-italic text-[28px] mt-12 mb-3 text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>Changes to these terms</h2>
            <p>
              We may update these terms from time to time. The current version is always available on this page, dated at the top. Continued use of the website after changes constitutes acceptance of the updated terms.
            </p>

            <h2 className="serif-italic text-[28px] mt-12 mb-3 text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>Governing law</h2>
            <p>
              These terms are governed by applicable Nordic data protection and consumer law. Disputes that cannot be resolved through good faith discussion will be subject to the courts of competent jurisdiction in the country where the relevant DomainNordic brand is established.
            </p>

            <h2 className="serif-italic text-[28px] mt-12 mb-3 text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>Contact</h2>
            <p>
              Questions about these terms can be sent to hello@domainnordic.com. For formal legal notices, please request the appropriate address through the same email.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
