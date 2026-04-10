'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap, ScrollTrigger, createParallax } from '@/lib/animations'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function Hero() {
  const sectionRef  = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const eyebrowRef  = useRef<HTMLDivElement>(null)
  const subRef      = useRef<HTMLParagraphElement>(null)
  const actionsRef  = useRef<HTMLDivElement>(null)
  const proofRef    = useRef<HTMLDivElement>(null)
  const kBgRef      = useRef<HTMLSpanElement>(null)

  // GSAP entrance timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(eyebrowRef.current,
        { opacity: 0, x: -18 },
        { opacity: 1, x: 0, duration: 0.6 },
        0.1
      )
      .fromTo(headlineRef.current,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.22
      )
      .fromTo(subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.65 },
        0.42
      )
      .fromTo(actionsRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.55 },
        0.56
      )
      .fromTo(proofRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5 },
        0.68
      )

      // Parallax on the background K letterform
      if (kBgRef.current) {
        createParallax(kBgRef.current, 0.18)
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100vh-62px)] flex items-center pt-20 pb-24 overflow-hidden"
    >
      {/* Radial glow */}
      <div
        aria-hidden
        className="absolute top-[-180px] right-[15%] w-[640px] h-[560px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.065) 0%, transparent 68%)',
        }}
      />

      {/* Background K letterform with parallax */}
      <span
        ref={kBgRef}
        aria-hidden
        className="absolute right-[-3%] top-1/2 -translate-y-[54%] font-display font-bold text-[560px] leading-none select-none pointer-events-none"
        style={{ color: 'rgba(0,212,255,0.062)', letterSpacing: '-0.04em' }}
      >
        K
      </span>

      <div className="max-w-[1180px] mx-auto px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── LEFT: Copy ── */}
          <div>
            <div ref={eyebrowRef} style={{ opacity: 0 }}>
              <SectionLabel>Software Development · NYC Metro</SectionLabel>
            </div>

            <h1
              ref={headlineRef}
              className="font-display font-bold text-[clamp(52px,7vw,86px)] leading-[1.0] tracking-[-0.025em] text-cloud mb-6"
              style={{ opacity: 0 }}
            >
              We build<br />
              <span className="text-cyan">what&apos;s next.</span>
            </h1>

            <p
              ref={subRef}
              className="text-[17.5px] leading-[1.72] text-slate max-w-[460px] mb-10"
              style={{ opacity: 0 }}
            >
              Kr<strong className="text-cloud font-medium">A</strong>vex builds custom web,
              mobile, and enterprise applications for businesses that need more than off-the-shelf.{' '}
              <strong className="text-cloud font-medium">Precision software. Operator mindset. Founder pace.</strong>
            </p>

            <div
              ref={actionsRef}
              className="flex items-center gap-3.5 mb-14"
              style={{ opacity: 0 }}
            >
              <Button href="/contact" size="lg">
                Start a project →
              </Button>
              <Button href="/work" variant="secondary" size="lg">
                See our work
              </Button>
            </div>

            {/* Proof strip */}
            <div
              ref={proofRef}
              className="flex items-center gap-7 pt-7 border-t border-cyan-border"
              style={{ opacity: 0 }}
            >
              {[
                { num: '18+',   label: 'Yrs enterprise IT' },
                { num: '24 hr', label: 'Response time'    },
                { num: 'NYC',   label: 'HQ · Metro area'  },
                { num: 'Fixed', label: 'Price guaranteed' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-7">
                  {i > 0 && <div className="w-px h-9 bg-cyan-border flex-shrink-0" />}
                  <div>
                    <div className="font-display font-bold text-[21px] text-cloud leading-tight">
                      {item.num}
                    </div>
                    <div className="font-mono text-[8.5px] tracking-[0.14em] uppercase text-slate mt-0.5">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Floating card stack ── */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-[500px]">

              {/* Floating card 1 — Sprint progress */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.2, ease: 'easeInOut', repeat: Infinity }}
                className="absolute -bottom-7 -left-9 w-[194px] z-20 bg-steel2 border border-cyan-border rounded-xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              >
                <div className="font-mono text-[7.5px] tracking-[0.2em] uppercase text-gold mb-2">
                  Sprint 3 · In progress
                </div>
                <div className="font-display font-bold text-[22px] text-cloud leading-tight">73%</div>
                <div className="text-[10px] text-slate mt-0.5">Build complete</div>
                <div className="mt-2.5 h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[73%] bg-cyan rounded-full" />
                </div>
              </motion.div>

              {/* Main code card */}
              <div className="relative z-10 bg-steel border border-cyan-border/70 rounded-2xl p-7 shadow-[0_28px_80px_rgba(0,0,0,0.52),0_0_0_1px_rgba(0,212,255,0.08)]">
                {/* Window chrome */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[rgba(255,95,87,0.65)]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[rgba(255,188,46,0.65)]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[rgba(40,200,64,0.65)]"  />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.1em] text-slate">
                    src/api/sync-engine.ts
                  </span>
                  <span className="font-mono text-[8px] tracking-[0.14em] uppercase bg-cyan/10 text-cyan border border-cyan/20 px-2.5 py-0.5 rounded">
                    KrAvex
                  </span>
                </div>

                {/* Code block */}
                <div className="font-mono text-[12px] leading-[1.72] space-y-0">
                  {[
                    { n: '01', parts: [{ t: 'kw', v: 'async' }, { t: 'pl', v: ' ' }, { t: 'fn', v: 'syncRealTime' }, { t: 'pl', v: '(' }, { t: 'va', v: 'users' }, { t: 'pl', v: ': ' }, { t: 'kw', v: 'User' }, { t: 'pl', v: '[]) {' }] },
                    { n: '02', parts: [{ t: 'pl', v: '  ' }, { t: 'kw', v: 'const' }, { t: 'pl', v: ' ' }, { t: 'va', v: 'engine' }, { t: 'pl', v: ' = ' }, { t: 'kw', v: 'await' }, { t: 'pl', v: ' ' }, { t: 'fn', v: 'initSyncEngine' }, { t: 'pl', v: '({' }] },
                    { n: '03', parts: [{ t: 'pl', v: '    concurrency: ' }, { t: 'st', v: '10_000' }, { t: 'pl', v: ',' }] },
                    { n: '04', parts: [{ t: 'pl', v: '    strategy: ' }, { t: 'st', v: "'optimistic'" }, { t: 'pl', v: ',' }] },
                    { n: '05', parts: [{ t: 'pl', v: '  });' }] },
                    { n: '06', parts: [{ t: 'cm', v: '  // ships on time, every time' }] },
                    { n: '07', parts: [{ t: 'pl', v: '  ' }, { t: 'kw', v: 'return' }, { t: 'pl', v: ' engine.' }, { t: 'fn', v: 'deploy' }, { t: 'pl', v: '(' }, { t: 'va', v: 'users' }, { t: 'pl', v: ');' }] },
                    { n: '08', parts: [{ t: 'pl', v: '}' }] },
                  ].map((line) => (
                    <div key={line.n} className="flex gap-3.5">
                      <span className="text-[rgba(136,146,160,0.35)] min-w-[18px] text-right select-none">
                        {line.n}
                      </span>
                      <span>
                        {line.parts.map((p, i) => {
                          const colorMap: Record<string, string> = {
                            kw: 'text-cyan',
                            fn: 'text-gold',
                            st: 'text-[#82c9a0]',
                            cm: 'text-[rgba(136,146,160,0.55)] italic',
                            va: 'text-[#c4a0ff]',
                            pl: 'text-slate',
                          }
                          return (
                            <span key={i} className={colorMap[p.t] ?? 'text-slate'}>
                              {p.v}
                            </span>
                          )
                        })}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Card footer */}
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-[10px] text-slate tracking-[0.08em]">
                    <span className="w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_8px_rgba(0,229,160,0.5)] animate-blink" />
                    Build passing · 14ms
                  </div>
                  <span className="font-mono text-[8px] tracking-[0.14em] uppercase bg-cyan/10 text-cyan border border-cyan/20 px-2.5 py-0.5 rounded">
                    TypeScript
                  </span>
                </div>
              </div>

              {/* Floating card 2 — Shipped */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5.1, ease: 'easeInOut', repeat: Infinity }}
                className="absolute -top-5 -right-7 w-[176px] z-20 bg-steel2 border border-cyan-border rounded-xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              >
                <span className="inline-block font-mono text-[8px] tracking-[0.14em] uppercase bg-green/10 text-green px-2 py-0.5 rounded mb-1.5">
                  Shipped ✓
                </span>
                <div className="font-display font-semibold text-[12px] text-cloud leading-snug">
                  Client Dashboard v2.1
                </div>
                <div className="text-[10px] text-slate mt-1">Deployed 2h ago · 0 errors</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
