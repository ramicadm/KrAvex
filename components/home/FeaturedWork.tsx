'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'

const featured = [
  {
    category: 'Operations · Dashboard',
    client:   'Meridian Logistics',
    title:    'Ops Command Center',
    desc:     'Real-time operations dashboard replacing 12 spreadsheets. Fleet tracking, SLA monitoring, and automated escalations. Delivered in 8 weeks.',
    tags:     ['React', 'Node.js', 'PostgreSQL', 'Dashboard'],
    mockup:   'chart',
  },
  {
    category: 'Fintech · MVP',
    client:   'ClearTrack',
    title:    'Expense Intelligence MVP',
    desc:     'Stripe-powered expense categorization with AI classification. Auth, billing, CSV exports. Shipped in 6 weeks for investor demo day.',
    tags:     ['Next.js', 'Stripe', 'OpenAI', 'MVP'],
    mockup:   'cards',
  },
]

function MockupChart() {
  return (
    <div className="w-[82%] h-[80%] bg-navy border border-cyan-border rounded-xl p-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
      <div className="flex gap-1.5 mb-2.5">
        {['rgba(255,95,87,0.5)', 'rgba(255,188,46,0.5)', 'rgba(40,200,64,0.5)'].map((c, i) => (
          <div key={i} className="w-2 h-2 rounded-full" style={{ background: c }} />
        ))}
      </div>
      <div className="space-y-1.5 mb-3">
        <div className="h-1.5 bg-cyan/20 rounded w-[55%]" />
        <div className="h-1.5 bg-white/6 rounded w-[80%]" />
        <div className="h-1.5 bg-white/6 rounded w-[45%]" />
      </div>
      <div className="flex items-end gap-1 h-11 mt-3">
        {[38, 68, 52, 88, 58, 44, 76].map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t-sm ${i === 1 || i === 3 || i === 6 ? 'bg-cyan' : 'bg-cyan/18'}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  )
}

function MockupCards() {
  return (
    <div className="w-[82%] h-[80%] bg-navy border border-cyan-border rounded-xl p-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
      <div className="flex gap-1.5 mb-2.5">
        {['rgba(255,95,87,0.5)', 'rgba(255,188,46,0.5)', 'rgba(40,200,64,0.5)'].map((c, i) => (
          <div key={i} className="w-2 h-2 rounded-full" style={{ background: c }} />
        ))}
      </div>
      <div className="space-y-1.5 mb-3">
        <div className="h-1.5 bg-white/6 rounded w-[80%]" />
        <div className="h-1.5 bg-cyan/20 rounded w-[55%]" />
        <div className="h-1.5 bg-white/6 rounded w-[80%]" />
      </div>
      <div className="flex gap-2 mt-2">
        <div className="flex-1 h-8 bg-cyan/14 rounded-md border border-cyan/20" />
        <div className="flex-1 h-8 bg-gold/10 rounded-md border border-gold/20" />
      </div>
    </div>
  )
}

export function FeaturedWork() {
  return (
    <section className="py-24 border-t border-cyan-border">
      <div className="max-w-[1180px] mx-auto px-12">
        <AnimatedSection className="flex items-end justify-between mb-0">
          <div>
            <SectionLabel>Featured work</SectionLabel>
            <h2 className="font-display font-bold text-[clamp(30px,4.5vw,50px)] leading-[1.08] tracking-[-0.02em] text-cloud">
              Built by Kr<span className="text-cyan">A</span>vex,<br />
              <em className="not-italic text-cyan">owned by our clients.</em>
            </h2>
          </div>
          <Button href="/work" variant="secondary" className="mb-1.5">
            View all work →
          </Button>
        </AnimatedSection>

        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
          {featured.map((project) => (
            <motion.div
              key={project.title}
              initial="rest"
              whileHover="hover"
              variants={{
                rest:  { y: 0,  borderColor: 'rgba(0,212,255,0.14)' },
                hover: { y: -5, borderColor: 'rgba(0,212,255,0.38)' },
              }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="bg-steel border rounded-2xl overflow-hidden cursor-pointer"
              style={{ boxShadow: 'none' }}
            >
              {/* Thumbnail */}
              <div className="h-[238px] bg-steel2 relative flex items-center justify-center overflow-hidden">
                <motion.div
                  variants={{ rest: { scale: 1 }, hover: { scale: 1.02 } }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center justify-center w-full h-full"
                >
                  {project.mockup === 'chart' ? <MockupChart /> : <MockupCards />}
                </motion.div>
                <span className="absolute top-3 left-3 font-mono text-[7.5px] tracking-[0.16em] uppercase bg-navy/80 text-cyan border border-cyan-border px-2 py-1 rounded">
                  {project.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-display font-bold text-[17px] text-cloud mb-2">
                  {project.client} — {project.title}
                </h3>
                <p className="text-[12.5px] text-slate leading-[1.6] mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[8px] tracking-[0.1em] uppercase px-2 py-1 rounded bg-white/5 text-slate border border-white/8">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}
