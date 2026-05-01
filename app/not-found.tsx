import Image from 'next/image'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default function NotFound() {
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
          <div className="flex items-center gap-4 mb-12">
            <span className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-white/60">Error 404</span>
            <span className="h-px w-12 bg-white/30" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">Page not found</span>
          </div>
          <h1 className="text-white" style={{ fontSize: 'clamp(56px, 9vw, 144px)', fontWeight: 500, lineHeight: 0.98, letterSpacing: '-0.025em' }}>
            Not found.
          </h1>
          <h1 className="serif-italic mt-1" style={{ fontSize: 'clamp(40px, 6vw, 84px)', fontWeight: 400, lineHeight: 1, letterSpacing: '-0.02em', color: '#7AA0F0' }}>
            Yet.
          </h1>
          <p className="mt-10 max-w-xl text-[16px] leading-[1.7] text-white/75">
            The page you are looking for does not exist, has moved, or was never here. Try one of the destinations below, or start fresh from the homepage.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Link href="/" className="btn-primary">
              Return home
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/services" className="btn-secondary">View services</Link>
            <Link href="/contact" className="btn-secondary">Contact us</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
