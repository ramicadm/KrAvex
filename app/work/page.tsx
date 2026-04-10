import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel }    from '@/components/ui/SectionLabel'
import { CTABand }         from '@/components/home/CTABand'
import { projects }        from '@/data/projects'

export const metadata: Metadata = {
  title:       'Work',
  description: 'A growing portfolio of custom software built for businesses that needed more than off-the-shelf. Every project is a case study in problem-first thinking.',
}

export default function WorkPage() {
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
              <SectionLabel>Work</SectionLabel>
              <h1 className="font-display font-bold text-[clamp(38px,5.5vw,68px)] leading-[1.02] tracking-[-0.025em] text-cloud">
                From blueprint<br />to{' '}
                <em className="not-italic text-cyan">breakthrough.</em>
              </h1>
            </div>
            <p className="text-[16px] leading-[1.75] text-slate">
              A growing portfolio of custom software for businesses that needed more than off-the-shelf.
              Every project is a case study in problem-first thinking.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24">
        <div className="max-w-[1180px] mx-auto px-12">
          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`group bg-steel border border-cyan-border rounded-2xl overflow-hidden hover:border-cyan-border-h hover:-translate-y-1 hover:shadow-[0_12px_44px_rgba(0,0,0,0.42)] transition-all duration-250 cursor-pointer ${project.status === 'in-development' ? 'opacity-75 border-dashed' : ''}`}
              >
                {/* Thumbnail */}
                <div className="h-[190px] bg-steel2 relative flex items-center justify-center overflow-hidden">
                  {project.status === 'in-development' ? (
                    <div className="text-center">
                      <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-gold mb-2">
                        In development
                      </div>
                      <div className="font-display font-bold text-[16px] text-cloud/28">
                        Coming Q3 2026
                      </div>
                    </div>
                  ) : (
                    <div
                      className="w-[80%] h-[80%] rounded-xl p-3.5 shadow-[0_7px_28px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-[1.02]"
                      style={{
                        background: '#0D1B2A',
                        border: `1px solid rgba(0,212,255,0.14)`,
                      }}
                    >
                      <div className="flex gap-1.5 mb-2">
                        {['rgba(255,95,87,0.5)', 'rgba(255,188,46,0.5)', 'rgba(40,200,64,0.5)'].map((c, i) => (
                          <div key={i} className="w-2 h-2 rounded-full" style={{ background: c }} />
                        ))}
                      </div>
                      <div className="space-y-1.5 mb-2">
                        <div className="h-1.5 rounded w-[80%]" style={{ background: `${project.accentColor}33` }} />
                        <div className="h-1.5 bg-white/6 rounded w-[55%]" />
                        <div className="h-1.5 bg-white/6 rounded w-[70%]" />
                      </div>
                      <div className="flex items-end gap-1 h-9 mt-2">
                        {[40, 68, 52, 88, 58, 44].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t-sm transition-all"
                            style={{
                              height: `${h}%`,
                              background: i % 3 === 1 ? project.accentColor : `${project.accentColor}2A`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  <span className="absolute top-3 left-3 font-mono text-[7.5px] tracking-[0.16em] uppercase bg-navy/80 text-cyan border border-cyan-border px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="font-mono text-[8px] tracking-[0.14em] uppercase text-gold mb-1.5">
                    {project.client}
                  </div>
                  <h3 className="font-display font-bold text-[16px] text-cloud mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[12px] text-slate leading-[1.58] mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[8px] tracking-[0.1em] uppercase px-2 py-0.5 rounded bg-white/5 text-slate border border-white/8">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <CTABand
        headline="Your project"
        headlineAccent="belongs here."
        sub="Every case study started with a 30-minute call. Let's figure out if we're the right fit for what you're building."
        primaryCTA={{ label: 'Start a project →', href: '/contact' }}
      />
    </>
  )
}
