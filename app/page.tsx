import Image from 'next/image'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import { SERVICES, INSIGHTS } from '@/lib/site-config'

const arrowSvg = (
  <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ArrowLg = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: '#0F1A3D', minHeight: '100vh' }}>
        <div className="absolute inset-0 overflow-hidden">
          <Image src="/images/hero-banner.png" alt="" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(15,26,61,0.55) 0%, rgba(15,26,61,0.85) 70%, rgba(15,26,61,0.95) 100%)' }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(33,82,232,0.4), transparent)' }} />

        <SiteHeader variant="dark" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8 pt-24 pb-16">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-8 slide-up" style={{ animationDelay: '0.15s' }}>
              <div className="flex items-center gap-4 mb-12">
                <span className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-white/60">N°01</span>
                <span className="h-px w-12 bg-white/30" />
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">Independent Advisory</span>
              </div>

              <h1 className="text-white" style={{ fontSize: 'clamp(56px, 8vw, 112px)', fontWeight: 500, lineHeight: 0.94, letterSpacing: '-0.025em' }}>
                Strategic domain
              </h1>
              <h1 className="serif-italic text-white -mt-2" style={{ fontSize: 'clamp(56px, 8vw, 112px)', fontWeight: 400, lineHeight: 1, letterSpacing: '-0.02em' }}>
                advisory<span style={{ color: '#7AA0F0' }}>,</span>
              </h1>
              <h1 className="text-white mt-1" style={{ fontSize: 'clamp(56px, 8vw, 112px)', fontWeight: 300, lineHeight: 0.94, letterSpacing: '-0.025em' }}>
                built for the<br />
                <span style={{ background: 'linear-gradient(120deg, #7AA0F0 0%, #fff 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Nordics.</span>
              </h1>
            </div>

            <div className="col-span-12 lg:col-span-4 lg:col-start-9 slide-up" style={{ animationDelay: '0.3s' }}>
              <p className="text-[15px] leading-[1.6] text-white/75 max-w-sm">
                A new standard for Nordic domain advisory. Discreet, strategic, and built for businesses that view domains as long term assets, not transactions.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <Link href="/contact" className="btn-primary">
                  Start the conversation
                  <ArrowLg />
                </Link>
                <Link href="/brands" className="btn-secondary">View brands</Link>
              </div>
            </div>
          </div>

          <div className="mt-32 pt-10 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8 slide-up" style={{ animationDelay: '0.5s' }}>
            <div>
              <div className="serif text-[28px]" style={{ color: '#7AA0F0' }}>I.</div>
              <div className="mt-3 text-[14.5px] font-medium text-white">Strategic Approach</div>
              <p className="mt-1 text-[12.5px] text-white/55 leading-relaxed">Every domain decision has long term impact</p>
            </div>
            <div>
              <div className="serif text-[28px]" style={{ color: '#7AA0F0' }}>II.</div>
              <div className="mt-3 text-[14.5px] font-medium text-white">Discretion and Security</div>
              <p className="mt-1 text-[12.5px] text-white/55 leading-relaxed">Confidential processes from start to finish</p>
            </div>
            <div>
              <div className="serif text-[28px]" style={{ color: '#7AA0F0' }}>III.</div>
              <div className="mt-3 text-[14.5px] font-medium text-white">Premium Inventory</div>
              <p className="mt-1 text-[12.5px] text-white/55 leading-relaxed">Including off market and exclusive access</p>
            </div>
            <div>
              <div className="serif text-[28px]" style={{ color: '#7AA0F0' }}>IV.</div>
              <div className="mt-3 text-[14.5px] font-medium text-white">Long Term Value</div>
              <p className="mt-1 text-[12.5px] text-white/55 leading-relaxed">Stronger brands, lower risk, lasting assets</p>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="relative py-24 md:py-32" style={{ background: '#FAFBFD' }}>
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid grid-cols-12 gap-8 mb-20">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-4 mb-8">
                <span className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-[#6B7591]">N°02</span>
                <span className="h-px w-12 bg-[#DEE3F0]" />
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7591]">Our Brands</span>
              </div>
              <h2 style={{ fontSize: 'clamp(40px, 5.5vw, 76px)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em', color: '#0F1A3D' }}>
                Four brands.
              </h2>
              <h2 className="serif-italic mt-1" style={{ fontSize: 'clamp(40px, 5.5vw, 76px)', fontWeight: 400, lineHeight: 1, letterSpacing: '-0.015em', color: '#2152E8' }}>
                One Nordic vision.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex items-end">
              <p className="text-[14.5px] leading-relaxed text-[#6B7591]">
                A discreet advisory standard built for businesses that view domains as long term strategic assets, not transactions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#DEE3F0]">
            <BrandCard
              href="https://domene.io"
              image="/images/norway.png"
              country="Norway"
              brand="domene"
              accent="#2152E8"
              description="Premium domain advisory, locally rooted."
              flag={<NorwayFlag />}
            />
            <BrandCard
              href="https://xn--domn-noa.io"
              image="/images/sweden.png"
              country="Sweden"
              brand="domän"
              accent="#EAB308"
              description="Strategic domain advisory for ambitious businesses."
              flag={<SwedenFlag />}
            />
            <BrandCard
              href="https://xn--domne-ura.io"
              image="/images/denmark.png"
              country="Denmark"
              brand="domæne"
              accent="#E94B35"
              description="Discreet domain advisory for established brands."
              flag={<DenmarkFlag />}
            />
            <BrandCard
              href="https://verkkotunnus.io"
              image="/images/finland.png"
              country="Finland"
              brand="verkkotunnus"
              accent="#38BDF8"
              description="Local advisory expertise for the domain market."
              flag={<FinlandFlag />}
              smaller
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative bg-white py-24 md:py-32" id="services">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid grid-cols-12 gap-8 mb-20">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-4 mb-8">
                <span className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-[#6B7591]">N°03</span>
                <span className="h-px w-12 bg-[#DEE3F0]" />
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7591]">Services</span>
              </div>
              <h2 style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em', color: '#0F1A3D' }}>
                End to end
              </h2>
              <h2 className="serif-italic mt-1" style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 400, lineHeight: 1, letterSpacing: '-0.015em', color: '#0F1A3D' }}>
                domain advisory.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex items-end">
              <p className="text-[14.5px] leading-relaxed text-[#6B7591]">
                Independent expert guidance across the full domain lifecycle, so you can secure, protect and grow your digital presence with confidence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {SERVICES.map((cat, idx) => (
              <div key={cat.category} id={cat.category.toLowerCase()}>
                <div className="flex items-baseline gap-3 mb-6 pb-5" style={{ borderBottom: '1px solid #0F1A3D' }}>
                  <span className="serif text-[32px] leading-none text-[#2152E8]">{cat.categoryNum}.</span>
                  <div>
                    <h3 className="text-[16px] font-semibold uppercase tracking-[0.08em] text-[#0F1A3D]">{cat.category}</h3>
                    <p className="mt-1 text-[12px] text-[#6B7591]">{cat.description}</p>
                  </div>
                </div>
                <div className="space-y-7">
                  {cat.items.map((item) => (
                    <Link key={item.slug} href={`/services/${item.slug}`} className="service-link block">
                      <h4 className="text-[14px] font-semibold leading-tight">{item.name}</h4>
                      <p className="mt-1.5 text-[12.5px] text-[#6B7591]">{item.short}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="relative py-24 md:py-32" style={{ background: '#FAFBFD' }}>
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid grid-cols-12 gap-8 mb-20">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-4 mb-8">
                <span className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-[#6B7591]">N°04</span>
                <span className="h-px w-12 bg-[#DEE3F0]" />
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7591]">How We Work</span>
              </div>
              <h2 style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em', color: '#0F1A3D' }}>
                A proven process,
              </h2>
              <h2 className="serif-italic mt-1" style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 400, lineHeight: 1, letterSpacing: '-0.015em', color: '#0F1A3D' }}>
                built around your goals.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex items-end">
              <p className="text-[14.5px] leading-relaxed text-[#6B7591]">
                From initial discovery to long term portfolio management, every engagement follows a structured process that prioritises your strategic outcomes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative">
            <div className="hidden lg:block absolute left-[12%] right-[12%] top-[36px] h-px" style={{ background: 'linear-gradient(to right, #DEE3F0, #2152E8, #2152E8, #DEE3F0)' }} />
            {[
              { num: 'i.', title: 'Discover', desc: 'We understand your business, market position, and current domain landscape.' },
              { num: 'ii.', title: 'Strategize', desc: 'We design a tailored domain strategy aligned with your goals and risk profile.' },
              { num: 'iii.', title: 'Execute', desc: 'We acquire, protect, and manage the right domain assets, discreetly and efficiently.' },
              { num: 'iv.', title: 'Optimize', desc: 'We continuously review and refine your portfolio for long term value and performance.' },
            ].map((step, i) => (
              <div key={step.num} className={`lg:px-6 relative ${i > 0 ? 'lg:border-l border-[#DEE3F0]' : ''}`}>
                <div className="relative z-10 inline-flex flex-col items-start mb-6">
                  <div className="serif text-[44px] leading-none text-[#2152E8]">{step.num}</div>
                </div>
                <h3 className="text-[18px] font-semibold tracking-tight mb-2 text-[#0F1A3D]">{step.title}</h3>
                <p className="text-[13px] leading-relaxed text-[#6B7591]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NETWORK */}
      <section className="relative overflow-hidden" style={{ background: '#0F1A3D' }}>
        <div className="absolute inset-0">
          <Image src="/images/hero-banner.png" alt="" fill className="object-cover opacity-25" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(15,26,61,0.95) 0%, rgba(15,26,61,0.75) 50%, rgba(15,26,61,0.6) 100%)' }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(33,82,232,0.4), transparent)' }} />

        <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8 py-24 md:py-32">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-4 mb-8">
                <span className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-white/60">N°05</span>
                <span className="h-px w-12 bg-white/30" />
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">The Network</span>
              </div>
              <h2 className="text-white" style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em' }}>
                Access beyond
              </h2>
              <h2 className="serif-italic mt-1" style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 400, lineHeight: 1, letterSpacing: '-0.015em', color: '#7AA0F0' }}>
                the open market.
              </h2>
              <p className="mt-10 max-w-xl text-[15.5px] leading-[1.7] text-white/75">
                Many of the most valuable domains never appear publicly. Through trusted relationships built across the international domain community, we open doors to opportunities others cannot reach. Quietly, professionally, and on your terms.
              </p>
              <div className="mt-12">
                <Link href="/contact" className="btn-primary">
                  Discuss your strategy
                  <ArrowLg />
                </Link>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pl-8 lg:border-l border-white/10">
              <div className="space-y-10">
                {[
                  { num: 'i.', title: 'Off market opportunities', desc: 'Domains held privately, never publicly listed.' },
                  { num: 'ii.', title: 'Trusted relationships', desc: 'Built across local and international markets.' },
                  { num: 'iii.', title: 'Confidential approach', desc: 'Every conversation handled with discretion.' },
                ].map((item) => (
                  <div key={item.num}>
                    <div className="serif text-[28px]" style={{ color: '#7AA0F0' }}>{item.num}</div>
                    <h4 className="mt-3 text-[15px] font-semibold text-white">{item.title}</h4>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-white/55">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DOMAINNORDIC */}
      <section className="relative bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid grid-cols-12 gap-8 mb-20">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-4 mb-8">
                <span className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-[#6B7591]">N°06</span>
                <span className="h-px w-12 bg-[#DEE3F0]" />
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7591]">Why DomainNordic</span>
              </div>
              <h2 style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em', color: '#0F1A3D' }}>
                A different kind of
              </h2>
              <h2 className="serif-italic mt-1" style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 400, lineHeight: 1, letterSpacing: '-0.015em', color: '#2152E8' }}>
                domain advisor.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex items-end">
              <p className="text-[14.5px] leading-relaxed text-[#6B7591]">
                We exist for businesses that view domains as strategic assets, not transactions. Five principles guide everything we do.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-[#DEE3F0]">
            {[
              { num: 'i.', title: 'Independent', desc: 'We work for buyers and owners, not registrars or resellers. Our advice is yours alone.' },
              { num: 'ii.', title: 'Confidential', desc: 'Discretion and security in every process, conversation, and transaction.' },
              { num: 'iii.', title: 'Local Experts', desc: 'Local market knowledge across the region, with deep understanding of each jurisdiction.' },
              { num: 'iv.', title: 'Strategic Focus', desc: 'We align domains with your brand, business goals, and long term direction.' },
              { num: 'v.', title: 'Long Term Value', desc: 'Domains are more than names, they are business critical assets we treat as such.' },
            ].map((p) => (
              <div key={p.num} className="bg-white p-8 lg:p-10">
                <div className="serif text-[32px] leading-none mb-6 text-[#2152E8]">{p.num}</div>
                <h3 className="text-[16px] font-semibold tracking-tight mb-3 text-[#0F1A3D]">{p.title}</h3>
                <p className="text-[12.5px] leading-relaxed text-[#6B7591]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="relative py-24 md:py-32" style={{ background: '#FAFBFD' }}>
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid grid-cols-12 gap-8 mb-20">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-4 mb-8">
                <span className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-[#6B7591]">N°07</span>
                <span className="h-px w-12 bg-[#DEE3F0]" />
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7591]">Insights and Intelligence</span>
              </div>
              <h2 style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em', color: '#0F1A3D' }}>
                Knowledge that drives
              </h2>
              <h2 className="serif-italic mt-1" style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 400, lineHeight: 1, letterSpacing: '-0.015em', color: '#0F1A3D' }}>
                smarter decisions.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex items-end justify-between">
              <p className="text-[14.5px] leading-relaxed max-w-xs text-[#6B7591]">
                Market reports, strategic guides, and analysis from our advisory team.
              </p>
              <Link href="/insights" className="hidden lg:inline-flex items-center gap-2 text-[12.5px] font-medium whitespace-nowrap text-[#2152E8]">
                All insights{arrowSvg}
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#DEE3F0]">
            {INSIGHTS.map((article) => (
              <Link key={article.slug} href={`/insights/${article.slug}`} className="brand-card group block bg-white p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="num-tick text-[10px] font-medium uppercase tracking-[0.24em] text-[#2152E8]">{article.category}</span>
                  <span className="text-[10.5px] text-[#6B7591]">·</span>
                  <span className="text-[10.5px] text-[#6B7591]">{article.date}</span>
                </div>
                <h3 className="serif text-[26px] leading-[1.15] mb-4 text-[#0F1A3D]" style={{ letterSpacing: '-0.01em' }}>
                  {article.title}
                </h3>
                <p className="text-[13px] leading-relaxed mb-6 text-[#6B7591]">{article.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-[12.5px] font-medium text-[#2152E8]">
                  Read more{arrowSvg}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden" style={{ background: '#0F1A3D' }}>
        <div className="absolute inset-0 opacity-40">
          <Image src="/images/hero-banner.png" alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15,26,61,0.85) 0%, rgba(15,26,61,0.95) 100%)' }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(33,82,232,0.4), transparent)' }} />

        <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8 py-24 md:py-32">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-4 mb-8">
                <span className="num-tick text-[11px] font-medium uppercase tracking-[0.24em] text-white/60">N°08</span>
                <span className="h-px w-12 bg-white/30" />
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">Start the conversation</span>
              </div>
              <h2 className="text-white" style={{ fontSize: 'clamp(44px, 6vw, 84px)', fontWeight: 500, lineHeight: 0.98, letterSpacing: '-0.025em' }}>
                Ready to build,
              </h2>
              <h2 className="serif-italic mt-1" style={{ fontSize: 'clamp(44px, 6vw, 84px)', fontWeight: 400, lineHeight: 1, letterSpacing: '-0.02em', color: '#7AA0F0' }}>
                protect, and grow?
              </h2>
              <p className="mt-8 max-w-xl text-[15.5px] leading-[1.7] text-white/75">
                Tell us about your business and goals. We respond within one business day to schedule a confidential consultation.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <div className="space-y-3">
                <Link href="/contact" className="btn-primary w-full justify-center">
                  Book confidential consultation
                  <ArrowLg />
                </Link>
                <a href="mailto:hello@domainnordic.com" className="btn-secondary w-full justify-center">
                  hello@domainnordic.com
                </a>
              </div>
              <p className="mt-4 text-[11.5px] leading-relaxed text-white/50 text-center">
                All enquiries are handled with absolute confidentiality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}

function BrandCard({ href, image, country, brand, accent, description, flag, smaller }: {
  href: string
  image: string
  country: string
  brand: string
  accent: string
  description: string
  flag: React.ReactNode
  smaller?: boolean
}) {
  return (
    <a href={href} className="brand-card group block bg-white relative overflow-hidden">
      <div className="relative h-[280px] overflow-hidden">
        <Image src={image} alt={`${country} landscape`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 25vw" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(15,26,61,0.1) 0%, rgba(15,26,61,0.85) 100%)' }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: accent }} />
        <div className="absolute top-5 right-5 flex h-7 w-7 items-center justify-center overflow-hidden rounded-full ring-2 ring-white/40">
          {flag}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="num-tick text-[10.5px] font-medium uppercase tracking-[0.18em] text-white/70 mb-1.5">{country}</div>
          <div className={`${smaller ? 'text-[24px]' : 'text-[28px]'} font-medium leading-none text-white`} style={{ letterSpacing: '-0.015em' }}>
            {brand}<span className="text-white/80">.io</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-[12.5px] leading-relaxed mb-4 text-[#6B7591]">{description}</p>
        <span className="inline-flex items-center gap-2 text-[12.5px] font-medium" style={{ color: accent }}>
          Visit site
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </a>
  )
}

function NorwayFlag() {
  return (
    <svg width="28" height="20" viewBox="0 0 18 13"><rect width="18" height="13" fill="#BA0C2F" /><rect x="5" width="2" height="13" fill="#FFFFFF" /><rect y="5.5" width="18" height="2" fill="#FFFFFF" /><rect x="5.5" width="1" height="13" fill="#00205B" /><rect y="6" width="18" height="1" fill="#00205B" /></svg>
  )
}
function SwedenFlag() {
  return (
    <svg width="28" height="20" viewBox="0 0 18 13"><rect width="18" height="13" fill="#006AA7" /><rect x="5" width="2" height="13" fill="#FECC02" /><rect y="5.5" width="18" height="2" fill="#FECC02" /></svg>
  )
}
function DenmarkFlag() {
  return (
    <svg width="28" height="20" viewBox="0 0 18 13"><rect width="18" height="13" fill="#C8102E" /><rect x="5" width="2" height="13" fill="#FFFFFF" /><rect y="5.5" width="18" height="2" fill="#FFFFFF" /></svg>
  )
}
function FinlandFlag() {
  return (
    <svg width="28" height="20" viewBox="0 0 18 13"><rect width="18" height="13" fill="#FFFFFF" /><rect x="5" width="2" height="13" fill="#003580" /><rect y="5.5" width="18" height="2" fill="#003580" /></svg>
  )
}
