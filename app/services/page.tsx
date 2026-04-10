import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel }    from '@/components/ui/SectionLabel'
import { Button }          from '@/components/ui/Button'
import { CTABand }         from '@/components/home/CTABand'
import { serviceTiers }    from '@/data/services'

export const metadata: Metadata = {
  title:       'Services',
  description: 'IT consulting, web & product development, and full-stack SaaS builds. Three tiers sequenced around how businesses actually grow.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative border-b border-cyan-border pt-20 pb-16 overflow-hidden">
        <div
          aria-hidden
          className="absolute top-[-80px] right-0 w-[360px] h-[360px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.04) 0%, transparent 70%)' }}
        />
        <div className="max-w-[1180px] mx-auto px-12">
          <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end relative z-10">
            <div>
              <SectionLabel>Services</SectionLabel>
              <h1 className="font-display font-bold text-[clamp(38px,5.5vw,68px)] leading-[1.02] tracking-[-0.025em] text-cloud">
                Every service<br />we offer —<br />
                <em className="not-italic text-cyan">and why.</em>
              </h1>
            </div>
            <div>
              <p className="text-[16px] leading-[1.75] text-slate mb-7">
                Our services are sequenced around how businesses actually grow — starting with what delivers value on day one, building toward what delivers value for years.
              </p>
              <Button href="/contact">Book a discovery call →</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Tiers */}
      {serviceTiers.map((tier, ti) => (
        <section
          key={tier.tier}
          className={`py-20 ${ti < serviceTiers.length - 1 ? 'border-b border-cyan-border' : ''}`}
        >
          <div className="max-w-[1180px] mx-auto px-12">
            {/* Tier header */}
            <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-12">
              <div>
                <div className="font-mono text-[8.5px] tracking-[0.22em] uppercase text-gold mb-3">
                  {tier.badge}
                </div>
                <h2 className="font-display font-bold text-[clamp(26px,3.8vw,42px)] leading-[1.08] tracking-[-0.02em] text-cloud mb-4">
                  {tier.headline.split(' ').slice(0, -1).join(' ')}{' '}
                  <em className="not-italic text-cyan">{tier.headline.split(' ').slice(-1)}</em>
                </h2>
                <p className="text-[14px] leading-[1.72] text-slate max-w-[400px]">
                  {tier.subhead}
                </p>
              </div>

              {/* Info box */}
              <div className="bg-steel border border-cyan-border rounded-xl p-6">
                <SectionLabel className="mb-4">{tier.infoLabel}</SectionLabel>
                <div className="space-y-0">
                  {tier.infoRows.map((row, i) => (
                    <div
                      key={i}
                      className={`flex justify-between items-center py-2.5 text-[13px] ${i < tier.infoRows.length - 1 ? 'border-b border-cyan/7' : ''}`}
                    >
                      <span className="text-slate">{row.label}</span>
                      <span className={`font-semibold ${row.accent ? 'text-cyan' : 'text-cloud'}`}>
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Service cards */}
            <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {tier.items.map((item) => (
                <div
                  key={item.name}
                  className="group bg-steel border border-cyan-border rounded-xl p-6 hover:border-cyan-border-h hover:-translate-y-1 transition-all duration-250"
                >
                  <div className="text-[22px] mb-3">{item.icon}</div>
                  <h3 className="font-display font-bold text-[15px] text-cloud mb-2">{item.name}</h3>
                  <p className="text-[12.5px] text-slate leading-[1.62] mb-4">{item.description}</p>
                  <div className="font-display font-semibold text-[13px] text-cyan">{item.price}</div>
                </div>
              ))}
            </AnimatedSection>
          </div>
        </section>
      ))}

      <CTABand
        label="Not sure?"
        headline="Not sure which"
        headlineAccent="tier fits?"
        sub="Every project starts with a free discovery call. We'll tell you exactly what you need — and just as importantly, what you don't."
        primaryCTA={{ label: 'Book a discovery call →', href: '/contact' }}
      />
    </>
  )
}
