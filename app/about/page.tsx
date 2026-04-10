import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel }    from '@/components/ui/SectionLabel'
import { Button }          from '@/components/ui/Button'
import { CTABand }         from '@/components/home/CTABand'

export const metadata: Metadata = {
  title:       'About',
  description: 'KrAvex was founded by Ross Amico — an IT operations leader with 18+ years of enterprise experience across healthcare, finance, and professional services.',
}

const credentials = [
  { company: 'Optum / UnitedHealth Group', role: 'Enterprise IT Operations Leadership', years: '2018–2022' },
  { company: 'TransUnion',                 role: 'IT Infrastructure & Systems',         years: '2015–2018' },
  { company: 'ATSG',                       role: 'Senior IT Operations',                years: '2010–2015' },
]

const stats = [
  { num: '18+',  label: 'Years enterprise IT',  color: 'text-cloud' },
  { num: 'NYC',  label: 'Metro HQ',             color: 'text-cyan'  },
  { num: '3',    label: 'Brands in portfolio',  color: 'text-cloud' },
  { num: '2026', label: 'KrAvex founded',        color: 'text-gold'  },
]

const brands = [
  {
    name:        'KrAvex',
    accent:      '#00D4FF',
    category:    'Software Development',
    description: 'Custom web, mobile, and enterprise applications. The long-term growth play in the portfolio — 18 months to first SaaS product.',
    tagline:     '"We build what\'s next."',
    href:        '/',
  },
  {
    name:        'IronFrame Advisory',
    accent:      '#FFB800',
    category:    'IT Operations Consulting',
    description: 'Enterprise IT consulting for mid-market companies. The portfolio\'s revenue anchor and primary cross-referral source for KrAvex.',
    tagline:     '"We don\'t consult. We fix."',
    href:        'https://www.ironframeadvisory.net',
  },
  {
    name:        'Travio Creative',
    accent:      '#00E5A0',
    category:    'Web & Digital Services',
    description: 'Affordable websites, AI automations, and client portals for small businesses. The accessible, high-volume tier of the portfolio.',
    tagline:     '"We build the path. You run the business."',
    href:        'https://www.traviocreative.com',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Founder section */}
      <section className="pt-20 pb-0">
        <div className="max-w-[1180px] mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start py-16">

            {/* Copy */}
            <AnimatedSection>
              <SectionLabel>About Kr<span className="text-cyan">A</span>vex</SectionLabel>
              <h1 className="font-display font-bold text-[clamp(38px,5vw,64px)] leading-[1.02] tracking-[-0.025em] text-cloud mb-6">
                Built by an<br />operator.<br />
                <em className="not-italic text-cyan">For operators.</em>
              </h1>
              <div className="space-y-5 text-[16px] leading-[1.75] text-slate max-w-[480px]">
                <p>
                  KrAvex was founded by Ross Amico — an IT operations leader with 18+ years of enterprise experience across healthcare, finance, and professional services.
                </p>
                <p>
                  After building and fixing systems at Optum, TransUnion, and ATSG, the pattern became clear: most businesses don&apos;t need a bigger software budget. They need a developer who understands how operations actually work.
                </p>
                <p>
                  KrAvex is that company. Software built by someone who&apos;s been on the operations floor — not just the engineering floor.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8 space-y-2.5">
                {credentials.map((c) => (
                  <div
                    key={c.company}
                    className="flex items-center gap-4 px-4 py-3 bg-steel border border-cyan-border rounded-lg"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="font-display font-semibold text-[13px] text-cloud">{c.company}</div>
                      <div className="text-[11.5px] text-slate mt-0.5">{c.role}</div>
                    </div>
                    <div className="font-mono text-[10px] text-gold flex-shrink-0">{c.years}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Photo + stats */}
            <AnimatedSection delay={0.1}>
              {/* Photo placeholder */}
              <div className="relative bg-steel border border-cyan-border rounded-2xl h-[440px] flex items-center justify-center overflow-hidden mb-5">
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,212,255,0.05) 0%, transparent 60%)',
                  }}
                />
                <span
                  className="font-display font-bold text-[88px] tracking-[-0.04em] select-none"
                  style={{ color: 'rgba(0,212,255,0.14)' }}
                >
                  RA
                </span>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 bg-steel border border-cyan-border rounded-xl p-5">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className={`font-display font-bold text-[26px] ${s.color}`}>{s.num}</div>
                    <div className="font-mono text-[8.5px] tracking-[0.14em] uppercase text-slate mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The Amico Group */}
      <section className="border-t border-cyan-border py-20">
        <div className="max-w-[1180px] mx-auto px-12">
          <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-12">
            <div>
              <SectionLabel>The Amico Group</SectionLabel>
              <h2 className="font-display font-bold text-[clamp(28px,4vw,46px)] leading-[1.08] tracking-[-0.02em] text-cloud">
                A portfolio of<br />
                <em className="not-italic text-cyan">purposeful companies.</em>
              </h2>
            </div>
            <p className="text-[14px] leading-[1.72] text-slate">
              Kr<span className="text-cyan">A</span>vex sits alongside IronFrame Advisory and Travio Creative under The Amico Group — a New York-based S-Corporation. Each brand serves a distinct market, and all three refer to each other.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="bg-steel rounded-xl p-6 transition-all duration-250 hover:-translate-y-1"
                style={{
                  border: `1px solid ${brand.accent}40`,
                }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: brand.accent }} />
                  <div className="font-display font-bold text-[16px] text-cloud">{brand.name}</div>
                </div>
                <div className="font-mono text-[8.5px] tracking-[0.14em] uppercase text-slate mb-3">
                  {brand.category}
                </div>
                <p className="text-[12.5px] text-slate leading-[1.55] mb-4">{brand.description}</p>
                <div
                  className="font-mono text-[9px] tracking-[0.12em]"
                  style={{ color: brand.accent }}
                >
                  {brand.tagline}
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <CTABand
        headline="Want to work"
        headlineAccent="with us?"
        sub="We take on a limited number of new projects each quarter to ensure every client gets the attention they deserve."
        primaryCTA={{ label: 'Start a conversation →', href: '/contact' }}
        secondaryCTA={{ label: 'See our work first',    href: '/work' }}
      />
    </>
  )
}
