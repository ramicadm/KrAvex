'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'

const services = [
  {
    phase:    'Phase 1 · Available Now',
    icon:     '⚙️',
    name:     'IT Ops Consulting',
    desc:     '18+ years of enterprise IT leadership, available as a monthly retainer. Process optimization, incident response, DevOps advisory.',
    features: ['Monthly retainer model', 'Incident response & triage', 'Service desk optimization', 'Infrastructure & DevOps advisory'],
    price:    'From $2,000 / month',
  },
  {
    phase:    'Phase 2 · Months 2–6',
    icon:     '🖥️',
    name:     'Web & Product Dev',
    desc:     'React-powered websites, internal dashboards, and MVPs. Fixed prices, milestone-based delivery, no surprise invoices. Ever.',
    features: ['Business websites & landing pages', 'Internal tools & dashboards', 'MVP development for startups', 'React / Next.js frontend builds'],
    price:    'From $2,500 / project',
  },
  {
    phase:    'Phase 3 · Month 6+',
    icon:     '🚀',
    name:     'Full-Stack SaaS',
    desc:     'Complete SaaS platforms — auth, billing, dashboards, AI. For validated founders who need enterprise thinking at a founder-led pace.',
    features: ['Full SaaS platform development', 'Mobile apps via React Native', 'AI workflow integration', 'Scalable cloud architecture'],
    price:    'From $25,000 / project',
  },
]

export function ServicesSection() {
  return (
    <section className="py-24">
      <div className="max-w-[1180px] mx-auto px-12">
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-0">
          <div>
            <SectionLabel>What we build</SectionLabel>
            <h2 className="font-display font-bold text-[clamp(30px,4.5vw,50px)] leading-[1.08] tracking-[-0.02em] text-cloud mb-0">
              Precision-built software.<br />
              <em className="not-italic text-cyan">From day one.</em>
            </h2>
          </div>
          <div>
            <p className="text-[16px] leading-[1.75] text-slate mb-6">
              Every engagement starts with understanding your business, not just your requirements. 18+ years of enterprise IT operations experience, in every build.
            </p>
            <Button href="/services" variant="secondary">View all services →</Button>
          </div>
        </AnimatedSection>

        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
          {services.map((svc) => (
            <motion.div
              key={svc.name}
              initial="rest"
              whileHover="hover"
              variants={{
                rest:  { y: 0,  boxShadow: '0 0 0 0 rgba(0,0,0,0)' },
                hover: { y: -5, boxShadow: '0 14px 52px rgba(0,0,0,0.42), 0 0 0 1px rgba(0,212,255,0.12)' },
              }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-steel border border-cyan-border rounded-2xl p-8 flex flex-col cursor-pointer overflow-hidden"
              onClick={() => {}}
            >
              {/* Top accent line */}
              <motion.div
                variants={{ rest: { scaleX: 0, opacity: 0 }, hover: { scaleX: 1, opacity: 1 } }}
                transition={{ duration: 0.25 }}
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan to-transparent origin-left"
              />

              <div className="font-mono text-[8px] tracking-[0.2em] uppercase text-gold mb-4">
                {svc.phase}
              </div>
              <div className="w-11 h-11 bg-cyan/10 border border-cyan/20 rounded-[10px] flex items-center justify-center text-[19px] mb-5">
                {svc.icon}
              </div>
              <h3 className="font-display font-bold text-[19px] text-cloud mb-2.5">
                {svc.name}
              </h3>
              <p className="text-[13px] leading-[1.65] text-slate mb-5 flex-1">
                {svc.desc}
              </p>
              <ul className="space-y-1.5 mb-6">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[12px] text-slate">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="pt-5 border-t border-white/5 font-display font-semibold text-[13.5px] text-cyan">
                {svc.price}
              </div>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}
