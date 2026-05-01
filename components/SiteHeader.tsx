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
      <svg width="20" height="14" viewBox="0 0 18 13" className="rounded-sm">
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
      <svg width="20" height="14" viewBox="0 0 18 13" className="rounded-sm">
        <rect width="18" height="13" fill="#006AA7" />
        <rect x="5" width="2" height="13" fill="#FECC02" />
        <rect y="5.5" width="18" height="2" fill="#FECC02" />
      </svg>
    )
  }
  if (country === 'Denmark') {
    return (
      <svg width="20" height="14" viewBox="0 0 18 13" className="rounded-sm">
        <rect width="18" height="13" fill="#C8102E" />
        <rect x="5" width="2" height="13" fill="#FFFFFF" />
        <rect y="5.5" width="18" height="2" fill="#FFFFFF" />
      </svg>
    )
  }
  // Finland
  return (
    <svg width="20" height="14" viewBox="0 0 18 13" className="rounded-sm">
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
      opacity: open ? 1 : 0.6,
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
  const isDark = variant === 'dark'
  const textColor = isDark ? 'text-white' : 'text-[#1A2447]'
  const navColor = isDark ? 'text-white/70 hover:text-white' : 'text-[#6B7591] hover:text-[#1A2447]'
  const subtitleColor = isDark ? 'text-white/50' : 'text-[#6B7591]'

  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeTimer = useRef<NodeJS.Timeout | null>(null)

  // Latest insight = first in INSIGHTS
  const featured = INSIGHTS[0]

  // Hover with delay so users can move from nav to panel without losing it
  const openMega = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setMegaOpen(true)
  }
  const scheduleCloseMega = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 150)
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

  return (
    <header className="relative z-30">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-6 md:py-8 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo-header.png" alt="DomainNordic" width={32} height={32} className="h-8 w-auto" priority />
          <div className="flex flex-col">
            <span className={`text-[15px] font-semibold tracking-tight leading-none ${textColor}`}>DomainNordic</span>
            <span className={`text-[10px] mt-0.5 tracking-widest uppercase ${subtitleColor}`}>Advisory Group</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-9 text-[13.5px]">
          <Link href="/brands" className={`${navColor} transition`}>Brands</Link>

          <div
            className="relative"
            onMouseEnter={openMega}
            onMouseLeave={scheduleCloseMega}
          >
            <Link
              href="/services"
              className={`${navColor} transition flex items-center gap-1.5 ${megaOpen ? (isDark ? 'text-white' : 'text-[#1A2447]') : ''}`}
              aria-expanded={megaOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown open={megaOpen} />
            </Link>
          </div>

          <Link href="/approach" className={`${navColor} transition`}>Approach</Link>
          <Link href="/insights" className={`${navColor} transition`}>Insights</Link>
          <Link href="/contact" className={`${navColor} transition`}>Contact</Link>
        </nav>

        <Link
          href="/contact"
          className="!hidden md:!inline-flex btn-primary"
          style={{ padding: '10px 20px', fontSize: '13px' }}
        >
          Book consultation
        </Link>

        {/* Mobile burger */}
        <button
          className={`md:hidden ${textColor} p-2`}
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

      {/* MEGA PANEL */}
      {megaOpen && (
        <div
          className="absolute top-full left-0 right-0 hidden md:block"
          style={{
            background: 'white',
            boxShadow: '0 24px 48px rgba(15,26,61,0.12)',
            animation: 'megaSlide 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          onMouseEnter={openMega}
          onMouseLeave={scheduleCloseMega}
        >
          <style>{`
            @keyframes megaSlide {
              from { opacity: 0; transform: translateY(-8px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>

          <div className="mx-auto max-w-[1280px] grid grid-cols-12">
            {/* LEFT: 7 cols, services */}
            <div className="col-span-7 px-10 py-12">
              <div className="pb-5 mb-8 border-b border-[#DEE3F0]">
                <div className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-[#6B7591] mb-3">Services</div>
                <div className="text-[24px] font-medium leading-tight text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>
                  Fifteen disciplines,<br />
                  <span className="serif-italic" style={{ color: '#2152E8' }}>across four categories.</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-12 gap-y-9">
                {SERVICES.map((cat) => (
                  <div key={cat.category}>
                    <div className="serif text-[24px] leading-none mb-2" style={{ color: '#2152E8' }}>{cat.categoryNum}.</div>
                    <div className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#0F1A3D] pb-2 mb-3 border-b border-[#0F1A3D]">
                      {cat.category}
                    </div>
                    <div className="space-y-1.5">
                      {cat.items.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/services/${item.slug}`}
                          className="block py-1 text-[13px] font-medium text-[#1A2447] hover:text-[#2152E8] transition-all"
                          onClick={() => setMegaOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-5 border-t border-[#DEE3F0]">
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

            {/* RIGHT: 5 cols, dark feature pane */}
            <div className="col-span-5 relative overflow-hidden" style={{ background: '#0F1A3D' }}>
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(33,82,232,0.18) 0%, transparent 60%)' }}
              />
              <div className="relative z-10 px-10 py-12 text-white">
                {/* Featured insight */}
                <div className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] mb-5" style={{ color: '#7AA0F0' }}>
                  Latest insight
                </div>
                <div className="text-[24px] leading-[1.2] font-medium mb-3" style={{ letterSpacing: '-0.01em' }}>
                  {featured.title.split(' ').slice(0, 4).join(' ')}{' '}
                  <span className="serif-italic" style={{ color: '#7AA0F0' }}>
                    {featured.title.split(' ').slice(4).join(' ')}
                  </span>
                </div>
                <p className="text-[13px] leading-[1.65] text-white/65 mb-6">
                  {featured.excerpt}
                </p>
                <Link
                  href={`/insights/${featured.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-[13px] font-medium text-white border border-white/15 hover:bg-white/10 hover:border-white/30 transition"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                  onClick={() => setMegaOpen(false)}
                >
                  Read briefing
                  <Arrow />
                </Link>

                {/* Brands */}
                <div className="mt-9 pt-6 border-t border-white/10">
                  <div className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-white/50 mb-4">
                    Our Brands
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                    {BRAND_LIST.map((b) => (
                      <a
                        key={b.name}
                        href={b.href}
                        className="flex items-center gap-2.5 py-2 hover:opacity-80 transition"
                      >
                        <FlagIcon country={b.country} />
                        <span className="text-[13px] text-white/85">
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
      )}

      {/* MOBILE PANEL */}
      {mobileOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-[#DEE3F0] max-h-[80vh] overflow-y-auto"
          style={{ boxShadow: '0 24px 48px rgba(15,26,61,0.12)' }}
        >
          <div className="p-6 space-y-1">
            <Link href="/brands" onClick={() => setMobileOpen(false)} className="block py-3 text-[15px] font-medium text-[#0F1A3D] border-b border-[#DEE3F0]">Brands</Link>

            <details className="border-b border-[#DEE3F0]">
              <summary className="py-3 text-[15px] font-medium text-[#0F1A3D] cursor-pointer flex items-center justify-between">
                Services
                <span className="text-[#6B7591] text-[12px]">15 services</span>
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
      )}
    </header>
  )
}
