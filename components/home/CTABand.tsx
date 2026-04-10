import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

interface CTABandProps {
  label?:      string
  headline:    string
  headlineAccent?: string
  sub:         string
  primaryCTA:  { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
}

export function CTABand({
  label        = 'Let\'s talk',
  headline,
  headlineAccent,
  sub,
  primaryCTA,
  secondaryCTA,
}: CTABandProps) {
  return (
    <section className="relative py-24 border-t border-cyan-border overflow-hidden">
      {/* Radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.055) 0%, transparent 68%)',
        }}
      />
      <AnimatedSection className="relative z-10 text-center max-w-[600px] mx-auto px-12">
        <SectionLabel center className="mb-5">{label}</SectionLabel>
        <h2 className="font-display font-bold text-[clamp(34px,5vw,54px)] leading-[1.08] tracking-[-0.02em] text-cloud mb-5">
          {headline}
          {headlineAccent && (
            <>
              <br />
              <em className="not-italic text-cyan">{headlineAccent}</em>
            </>
          )}
        </h2>
        <p className="text-[16px] leading-[1.72] text-slate mb-10">{sub}</p>
        <div className="flex items-center justify-center gap-3.5">
          <Button href={primaryCTA.href} size="lg">{primaryCTA.label}</Button>
          {secondaryCTA && (
            <Button href={secondaryCTA.href} variant="secondary" size="lg">
              {secondaryCTA.label}
            </Button>
          )}
        </div>
      </AnimatedSection>
    </section>
  )
}
