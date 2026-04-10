import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel }    from '@/components/ui/SectionLabel'
import { ContactForm }     from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title:       'Contact',
  description: "Start a project with KrAvex. Discovery calls are free, 30 minutes, and always worth it.",
}

const contactInfo = [
  { label: 'Email',          value: 'hello@kravex.dev',  accent: false },
  { label: 'Location',       value: 'New York Metro Area', accent: false },
  { label: 'Response time',  value: 'Within 24 hours',    accent: true  },
  { label: 'Discovery call', value: 'Free · 30 minutes',  accent: false },
]

export default function ContactPage() {
  return (
    <section className="pt-20 pb-24">
      <div className="max-w-[1180px] mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.55fr] gap-20 py-16 items-start">

          {/* Left: info */}
          <AnimatedSection className="flex flex-col gap-8">
            <div>
              <SectionLabel>Get in touch</SectionLabel>
              <h1 className="font-display font-bold text-[clamp(36px,5vw,60px)] leading-[1.02] tracking-[-0.025em] text-cloud mb-5">
                Let&apos;s build<br />
                <em className="not-italic text-cyan">something real.</em>
              </h1>
              <p className="text-[16px] leading-[1.75] text-slate max-w-[380px]">
                Discovery calls are free, 30 minutes, and always worth it. Tell us what you&apos;re working on — we&apos;ll tell you honestly whether we&apos;re the right fit.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label}>
                  <div className="font-mono text-[8.5px] tracking-[0.2em] uppercase text-slate mb-1">
                    {item.label}
                  </div>
                  <div className={`font-display font-semibold text-[15px] ${item.accent ? 'text-cyan' : 'text-cloud'}`}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Brand routing */}
            <div className="bg-steel border border-cyan-border rounded-xl p-5">
              <SectionLabel className="mb-4">Part of The Amico Group</SectionLabel>
              <div className="space-y-3 text-[12.5px] text-slate">
                <div>
                  Need IT consulting?{' '}
                  <a
                    href="https://www.ironframeadvisory.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-cloud transition-colors"
                  >
                    IronFrame Advisory →
                  </a>
                </div>
                <div>
                  Need a quick website?{' '}
                  <a
                    href="https://www.traviocreative.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green hover:text-cloud transition-colors"
                  >
                    Travio Creative →
                  </a>
                </div>
                <div>
                  Need custom software?{' '}
                  <span className="text-cyan">You&apos;re in the right place.</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: form */}
          <AnimatedSection delay={0.1}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
