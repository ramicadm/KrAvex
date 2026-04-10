'use client'

import { useRef, useEffect } from 'react'
import { gsap, ScrollTrigger } from '@/lib/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'

const steps = [
  {
    num:   '01',
    title: 'Discovery call',
    desc:  'Free 30-minute conversation. We map your problem, your users, and what success looks like — before writing a single line of proposal.',
  },
  {
    num:   '02',
    title: 'Fixed proposal',
    desc:  'Clear scope, fixed price, milestone schedule. No hourly billing, no surprise invoices. You know exactly what you\'re getting before you commit.',
  },
  {
    num:   '03',
    title: 'Build + preview',
    desc:  'Weekly sprints with preview links throughout. You\'re never in the dark — feedback is built into the process, not bolted on at the end.',
  },
  {
    num:   '04',
    title: 'Launch + support',
    desc:  'Full handover, docs, and 30 days of post-launch support included. Then we grow with you — retainer or project-by-project.',
  },
]

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const lineRef    = useRef<HTMLDivElement>(null)
  const numRefs    = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the connecting line drawing
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: 'power2.inOut',
            transformOrigin: 'left center',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 72%',
              toggleActions: 'play none none none',
            },
          }
        )
      }

      // Stagger the numbered circles
      gsap.fromTo(
        numRefs.current.filter(Boolean),
        { opacity: 0, scale: 0.7 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.18,
          ease: 'back.out(1.8)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Stagger the text content below
      const textEls = sectionRef.current?.querySelectorAll('.step-text')
      if (textEls) {
        gsap.fromTo(
          textEls,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.14,
            ease: 'power3.out',
            delay: 0.3,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 72%',
              toggleActions: 'play none none none',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="py-24 border-t border-cyan-border">
      <div className="max-w-[1180px] mx-auto px-12">
        <div className="text-center mb-16">
          <SectionLabel center>How we work</SectionLabel>
          <h2 className="font-display font-bold text-[clamp(30px,4.5vw,50px)] leading-[1.08] tracking-[-0.02em] text-cloud mb-3">
            From blueprint<br />
            <em className="not-italic text-cyan">to breakthrough.</em>
          </h2>
          <p className="text-[16px] text-slate max-w-[480px] mx-auto leading-relaxed">
            Transparent. Structured. No agency theatre. Just a process that produces great software on time.
          </p>
        </div>

        <div ref={sectionRef} className="relative">
          {/* Connecting line */}
          <div
            aria-hidden
            className="absolute top-[27px] hidden md:block"
            style={{ left: 'calc(12.5% + 26px)', right: 'calc(12.5% + 26px)' }}
          >
            <div className="h-px bg-cyan-border" />
            <div
              ref={lineRef}
              className="absolute inset-0 h-px bg-cyan/40"
              style={{ transformOrigin: 'left center', transform: 'scaleX(0)' }}
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
            {steps.map((step, i) => (
              <div key={step.num} className="flex flex-col items-start md:px-5">
                {/* Circle */}
                <div
                  ref={(el) => { numRefs.current[i] = el }}
                  className="w-[54px] h-[54px] bg-steel border border-cyan-border rounded-full flex items-center justify-center font-mono font-semibold text-[13px] text-cyan mb-6 relative z-10 transition-all duration-300 hover:bg-cyan/10 hover:border-cyan hover:shadow-[0_0_22px_rgba(0,212,255,0.18)]"
                  style={{ opacity: 0 }}
                >
                  {step.num}
                </div>
                {/* Text */}
                <div className="step-text" style={{ opacity: 0 }}>
                  <h3 className="font-display font-bold text-[16px] text-cloud mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[12.5px] text-slate leading-[1.65]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
