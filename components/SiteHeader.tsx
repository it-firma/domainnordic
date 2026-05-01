'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { SERVICES, INSIGHTS } from '@/lib/site-config'

const BRAND_LIST = [
  { name: 'domene', country: 'Norway', href: 'https://domene.io' },
  { name: 'domän', country: 'Sweden', href: 'https://xn--domn-noa.io' },
  { name: 'domæne', country: 'Denmark', href: 'https://xn--domne-ura.io' },
  { name: 'verkkotunnus', country: 'Finland', href: 'https://verkkotunnus.io' },
]

function FlagIcon({ country }: { country: string }) {
  if (country === 'Norway') {
    return (
      <svg width="18" height="13" viewBox="0 0 18 13" className="rounded-sm flex-shrink-0">
        <rect width="18" height="13" fill="#BA0C2F" />
        <rect x="5" width="2" height="13" fill="#FFFFFF" />
        <rect y="5.5" width="18" height="2" fill="#FFFFFF" />
        <rect x="5.5" width="1" height="13" fill="#00205B" />
        <rect y="6" width="18" height="1" fill="#00205B" />
      </svg>
    )
  }
  if (country === 'Sweden') {
    return (
      <svg width="18" height="13" viewBox="0 0 18 13" className="rounded-sm flex-shrink-0">
        <rect width="18" height="13" fill="#006AA7" />
        <rect x="5" width="2" height="13" fill="#FECC02" />
        <rect y="5.5" width="18" height="2" fill="#FECC02" />
      </svg>
    )
  }
  if (country === 'Denmark') {
    return (
      <svg width="18" height="13" viewBox="0 0 18 13" className="rounded-sm flex-shrink-0">
        <rect width="18" height="13" fill="#C8102E" />
        <rect x="5" width="2" height="13" fill="#FFFFFF" />
        <rect y="5.5" width="18" height="2" fill="#FFFFFF" />
      </svg>
    )
  }
  return (
    <svg width="18" height="13" viewBox="0 0 18 13" className="rounded-sm flex-shrink-0">
      <rect width="18" height="13" fill="#FFFFFF" />
      <rect x="5" width="2" height="13" fill="#003580" />
      <rect y="5.5" width="18" height="2" fill="#003580" />
    </svg>
  )
}

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 16 16"
    fill="none"
    style={{
      transition: 'transform 0.2s',
      transform: open ? 'rotate(180deg)' : 'rotate(0)',
      opacity: open ? 1 : 0.7,
    }}
  >
    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Arrow = ({ size = 11 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function SiteHeader({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeTimer = useRef<NodeJS.Timeout | null>(null)

  const featured = INSIGHTS[0]

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openMega = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setMegaOpen(true)
  }

  const scheduleCloseMega = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 180)
  }

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMegaOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Calculate dynamic styles based on state
  const isPill = scrolled
  const isExpanded = scrolled && megaOpen

  return (
    <>
      {/* DESKTOP HEADER - morphs from full-width to pill */}
      <header
        className="fixed z-50 hidden md:flex justify-center pointer-events-none"
        style={{
          top: 0,
          left: 0,
          right: 0,
          padding: isPill ? '16px 24px 0' : '0',
          transition: 'padding 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div
          className="pointer-events-auto flex items-center justify-between border w-full"
          style={{
            maxWidth: isExpanded ? '1280px' : isPill ? '1100px' : '1280px',
            padding: isPill ? '12px 12px 12px 28px' : '28px 32px',
            background: isPill ? 'rgba(15, 26, 61, 0.92)' : 'transparent',
            borderColor: isPill ? 'rgba(255,255,255,0.08)' : 'transparent',
            borderRadius: isExpanded ? '24px' : isPill ? '999px' : '0',
            boxShadow: isPill ? '0 12px 40px rgba(15,26,61,0.25)' : 'none',
            backdropFilter: isPill ? 'blur(16px)' : 'blur(0px)',
            WebkitBackdropFilter: isPill ? 'blur(16px)' : 'blur(0px)',
            transition:
              'max-width 0.45s cubic-bezier(0.16, 1, 0.3, 1), padding 0.45s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s ease, border-color 0.4s ease, border-radius 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, backdrop-filter 0.4s ease',
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image src="/images/logo-header.png" alt="DomainNordic" width={32} height={32} className="h-8 w-auto" priority />
            <div className="flex flex-col">
              <span
                className="font-semibold tracking-tight leading-none text-white"
                style={{ fontSize: isPill ? '14px' : '15px', transition: 'font-size 0.3s ease' }}
              >
                DomainNordic
              </span>
              <span
                className="mt-0.5 tracking-[0.24em] uppercase text-white/50"
                style={{ fontSize: isPill ? '9.5px' : '10px', transition: 'font-size 0.3s ease' }}
              >
                Advisory Group
              </span>
            </div>
          </Link>

          {/* Nav */}
          <nav
            className="flex items-center"
            style={{
              gap: isPill ? '28px' : '36px',
              fontSize: isPill ? '13px' : '13.5px',
              transition: 'gap 0.3s ease, font-size 0.3s ease',
            }}
          >
            <Link href="/brands" className="text-white/70 hover:text-white transition py-2">
              Brands
            </Link>

            <div
              className="relative"
              onMouseEnter={openMega}
              onMouseLeave={scheduleCloseMega}
            >
              <Link
                href="/services"
                className={`flex items-center gap-1.5 py-2 transition ${
                  megaOpen ? 'text-white' : 'text-white/70 hover:text-white'
                }`}
                aria-expanded={megaOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown open={megaOpen} />
              </Link>
            </div>

            <Link href="/approach" className="text-white/70 hover:text-white transition py-2">
              Approach
            </Link>
            <Link href="/insights" className="text-white/70 hover:text-white transition py-2">
              Insights
            </Link>
            <Link href="/contact" className="text-white/70 hover:text-white transition py-2">
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white font-medium flex-shrink-0"
            style={{
              background: '#2152E8',
              padding: isPill ? '8px 18px' : '10px 20px',
              fontSize: isPill ? '12.5px' : '13px',
              borderRadius: isPill ? '999px' : '6px',
              transition: 'padding 0.3s ease, font-size 0.3s ease, border-radius 0.3s ease',
            }}
          >
            Book consultation
            <Arrow />
          </Link>
        </div>
      </header>

      {/* MEGA PANEL - DESKTOP */}
      <div
        className="fixed z-40 hidden md:flex justify-center pointer-events-none"
        style={{
          top: '76px',
          left: 0,
          right: 0,
          padding: '0 24px',
          opacity: megaOpen ? 1 : 0,
          visibility: megaOpen ? 'visible' : 'hidden',
          transform: megaOpen ? 'translateY(0)' : 'translateY(-12px)',
          transition: `opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), visibility 0s linear ${megaOpen ? '0s' : '0.3s'}`,
        }}
        onMouseEnter={openMega}
        onMouseLeave={scheduleCloseMega}
      >
        <div
          className="pointer-events-auto w-full grid grid-cols-12 overflow-hidden border"
          style={{
            maxWidth: '1280px',
            background: 'white',
            borderRadius: scrolled ? '24px' : '0 0 16px 16px',
            borderColor: 'rgba(15,26,61,0.06)',
            boxShadow: '0 24px 64px rgba(15,26,61,0.18)',
            transition: 'border-radius 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* LEFT: Services */}
          <div className="col-span-7 px-10 py-10">
            <div className="pb-5 mb-7 border-b border-[#DEE3F0]">
              <div className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-[#6B7591] mb-2.5">Services</div>
              <div className="text-[22px] font-medium leading-tight text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>
                Fifteen disciplines,<br />
                <span className="serif-italic" style={{ color: '#2152E8' }}>across four categories.</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-10 gap-y-7">
              {SERVICES.map((cat) => (
                <div key={cat.category}>
                  <div className="serif text-[22px] leading-none mb-1.5" style={{ color: '#2152E8' }}>{cat.categoryNum}.</div>
                  <div className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-[#0F1A3D] pb-2 mb-2.5 border-b border-[#0F1A3D]">
                    {cat.category}
                  </div>
                  <div className="space-y-1">
                    {cat.items.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/services/${item.slug}`}
                        className="block py-1 text-[13px] font-medium text-[#1A2447] hover:text-[#2152E8] transition"
                        onClick={() => setMegaOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-5 border-t border-[#DEE3F0]">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-[#2152E8] hover:text-[#1845D4] transition"
                onClick={() => setMegaOpen(false)}
              >
                View all 15 services
                <Arrow />
              </Link>
            </div>
          </div>

          {/* RIGHT: Feature pane */}
          <div className="col-span-5 relative overflow-hidden" style={{ background: '#0F1A3D' }}>
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(33,82,232,0.18) 0%, transparent 60%)' }}
            />
            <div className="relative z-10 px-10 py-10 text-white">
              <div className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] mb-4" style={{ color: '#7AA0F0' }}>
                Latest insight
              </div>
              <div className="text-[22px] leading-[1.2] font-medium mb-2" style={{ letterSpacing: '-0.01em' }}>
                {featured.title.split(' ').slice(0, 4).join(' ')}{' '}
                <span className="serif-italic" style={{ color: '#7AA0F0' }}>
                  {featured.title.split(' ').slice(4).join(' ')}
                </span>
              </div>
              <p className="text-[12.5px] leading-[1.65] text-white/65 mb-5">
                {featured.excerpt}
              </p>
              <Link
                href={`/insights/${featured.slug}`}
                className="inline-flex items-center gap-2 px-[18px] py-2 rounded-md text-[12px] font-medium text-white transition"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.18)' }}
                onClick={() => setMegaOpen(false)}
              >
                Read briefing
                <Arrow />
              </Link>

              <div className="mt-7 pt-5 border-t border-white/10">
                <div className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-white/50 mb-3">
                  Our Brands
                </div>
                <div className="grid grid-cols-2 gap-x-3 gap-y-0.5">
                  {BRAND_LIST.map((b) => (
                    <a
                      key={b.name}
                      href={b.href}
                      className="flex items-center gap-2 py-1.5 hover:opacity-80 transition"
                    >
                      <FlagIcon country={b.country} />
                      <span className="text-[12px] text-white/85">
                        {b.name}<span className="text-white/45">.io</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE HEADER */}
      <header
        className="md:hidden fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? 'rgba(15, 26, 61, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'blur(0px)',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'blur(0px)',
          transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
        }}
      >
        <div className="px-5 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
            <Image src="/images/logo-header.png" alt="DomainNordic" width={28} height={28} className="h-7 w-auto" priority />
            <div className="flex flex-col">
              <span className="text-[14px] font-semibold tracking-tight leading-none text-white">DomainNordic</span>
              <span className="text-[9.5px] mt-0.5 tracking-[0.24em] uppercase text-white/50">Advisory Group</span>
            </div>
          </Link>

          <button
            className="text-white p-2"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {mobileOpen ? (
                <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 7H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M4 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* MOBILE PANEL */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white overflow-y-auto transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ paddingTop: '64px' }}
      >
        <div className="p-6 space-y-1">
          <Link href="/brands" onClick={() => setMobileOpen(false)} className="block py-3 text-[15px] font-medium text-[#0F1A3D] border-b border-[#DEE3F0]">Brands</Link>

          <details className="border-b border-[#DEE3F0] group">
            <summary className="py-3 text-[15px] font-medium text-[#0F1A3D] cursor-pointer flex items-center justify-between list-none">
              Services
              <span className="text-[#6B7591] text-[12px] flex items-center gap-2">
                15 services
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="transition group-open:rotate-180">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </summary>
            <div className="pb-4 pl-3 space-y-3">
              {SERVICES.map((cat) => (
                <div key={cat.category}>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#2152E8] mt-3 mb-1.5">
                    {cat.categoryNum}. {cat.category}
                  </div>
                  {cat.items.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/services/${item.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-[13.5px] text-[#1A2447]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
              <Link
                href="/services"
                onClick={() => setMobileOpen(false)}
                className="block mt-4 py-2 text-[13px] font-medium text-[#2152E8]"
              >
                View all services →
              </Link>
            </div>
          </details>

          <Link href="/approach" onClick={() => setMobileOpen(false)} className="block py-3 text-[15px] font-medium text-[#0F1A3D] border-b border-[#DEE3F0]">Approach</Link>
          <Link href="/insights" onClick={() => setMobileOpen(false)} className="block py-3 text-[15px] font-medium text-[#0F1A3D] border-b border-[#DEE3F0]">Insights</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="block py-3 text-[15px] font-medium text-[#0F1A3D] border-b border-[#DEE3F0]">Contact</Link>

          <div className="pt-4">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full justify-center"
            >
              Book consultation
              <Arrow size={13} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
