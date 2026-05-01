import Link from 'next/link'
import Image from 'next/image'

export default function SiteFooter() {
  return (
    <footer className="relative" style={{ background: '#050B1F', color: '#fff' }}>
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-20">
        <div className="grid grid-cols-12 gap-8 mb-16 pb-16 border-b border-white/10">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <Image src="/images/logo-header.png" alt="DomainNordic" width={36} height={36} className="h-9 w-auto" />
              <div className="flex flex-col">
                <span className="text-[18px] font-semibold tracking-tight leading-none">DomainNordic</span>
                <span className="text-[10.5px] text-white/50 mt-1 tracking-widest uppercase">Advisory Group</span>
              </div>
            </div>
            <p className="max-w-md text-[13.5px] leading-relaxed text-white/60">
              DomainNordic is an independent advisory group serving the Nordic markets through four local brands. Strategic domain advisory, built for businesses that view domains as long-term assets.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 hover:text-white hover:border-white/40 transition">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 hover:text-white hover:border-white/40 transition">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="num-tick text-[10.5px] font-medium uppercase tracking-[0.24em] text-white/50 mb-5">Direct Contact</div>
            <div className="space-y-3 text-[14px]">
              <a href="mailto:hello@domainnordic.com" className="block text-white hover:text-white/70 transition">hello@domainnordic.com</a>
              <p className="text-white/60 text-[13px] leading-relaxed pt-2">
                All enquiries handled with absolute discretion. We respond within one business day.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 pb-16 border-b border-white/10">
          <div>
            <div className="num-tick text-[10.5px] font-medium uppercase tracking-[0.24em] text-white/50 mb-5">Brands</div>
            <ul className="space-y-3 text-[13.5px]">
              <li><a href="https://domene.io" className="text-white/70 hover:text-white transition">domene.io</a></li>
              <li><a href="https://xn--domn-noa.io" className="text-white/70 hover:text-white transition">domän.io</a></li>
              <li><a href="https://xn--domne-ura.io" className="text-white/70 hover:text-white transition">domæne.io</a></li>
              <li><a href="https://verkkotunnus.io" className="text-white/70 hover:text-white transition">verkkotunnus.io</a></li>
            </ul>
          </div>
          <div>
            <div className="num-tick text-[10.5px] font-medium uppercase tracking-[0.24em] text-white/50 mb-5">Services</div>
            <ul className="space-y-3 text-[13.5px]">
              <li><Link href="/services#acquire" className="text-white/70 hover:text-white transition">Acquire</Link></li>
              <li><Link href="/services#manage" className="text-white/70 hover:text-white transition">Manage</Link></li>
              <li><Link href="/services#protect" className="text-white/70 hover:text-white transition">Protect</Link></li>
              <li><Link href="/services#advise" className="text-white/70 hover:text-white transition">Advise</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-white transition">All services</Link></li>
            </ul>
          </div>
          <div>
            <div className="num-tick text-[10.5px] font-medium uppercase tracking-[0.24em] text-white/50 mb-5">Resources</div>
            <ul className="space-y-3 text-[13.5px]">
              <li><Link href="/insights" className="text-white/70 hover:text-white transition">Insights</Link></li>
              <li><Link href="/insights" className="text-white/70 hover:text-white transition">Market Reports</Link></li>
              <li><Link href="/insights" className="text-white/70 hover:text-white transition">Guides</Link></li>
            </ul>
          </div>
          <div>
            <div className="num-tick text-[10.5px] font-medium uppercase tracking-[0.24em] text-white/50 mb-5">Company</div>
            <ul className="space-y-3 text-[13.5px]">
              <li><Link href="/about" className="text-white/70 hover:text-white transition">About</Link></li>
              <li><Link href="/approach" className="text-white/70 hover:text-white transition">Approach</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-6 text-[12px] text-white/50">
            <span>© 2026 DomainNordic Advisory Group</span>
            <Link href="/privacy" className="hover:text-white/80 transition">Privacy</Link>
            <Link href="/terms" className="hover:text-white/80 transition">Terms</Link>
          </div>
          <div className="flex items-center gap-3 text-[11.5px] text-white/40">
            <span className="num-tick uppercase tracking-[0.18em]">Independent Nordic Advisory</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
