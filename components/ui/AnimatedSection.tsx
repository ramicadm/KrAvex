'use client'

import { useRef, useEffect } from 'react'
import { gsap, ScrollTrigger } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children:   React.ReactNode
  className?: string
  delay?:     number
  y?:         number
  /** Stagger direct children instead of animating the wrapper */
  stagger?:   boolean
  staggerDelay?: number
}

export function AnimatedSection({
  children,
  className,
  delay        = 0,
  y            = 28,
  stagger      = false,
  staggerDelay = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      const target = stagger
        ? Array.from(el.children) as Element[]
        : el

      gsap.fromTo(
        target,
        { opacity: 0, y },
        {
          opacity:   1,
          y:         0,
          duration:  0.72,
          delay,
          ease:      'power3.out',
          stagger:   stagger ? staggerDelay : undefined,
          scrollTrigger: {
            trigger:       el,
            start:         'top 84%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [delay, y, stagger, staggerDelay])

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={stagger ? undefined : { opacity: 0 }}
    >
      {children}
    </div>
  )
}
