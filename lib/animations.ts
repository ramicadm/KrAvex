import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// Register plugins — guard for SSR
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
}

export { gsap, ScrollTrigger }

// ─── Default GSAP config ───────────────────────────────────────────────────
gsap.config({ nullTargetWarn: false })

// ─── Shared eases ─────────────────────────────────────────────────────────
export const EASE_OUT    = 'power3.out'
export const EASE_INOUT  = 'power3.inOut'
export const EASE_BACK   = 'back.out(1.6)'
export const EASE_EXPO   = 'expo.out'

// ─── Duration constants ────────────────────────────────────────────────────
export const DUR_FAST    = 0.4
export const DUR_BASE    = 0.65
export const DUR_SLOW    = 0.9

// ─── Fade in from below ────────────────────────────────────────────────────
export function fadeUp(
  target: gsap.TweenTarget,
  options: gsap.TweenVars = {}
) {
  return gsap.fromTo(
    target,
    { opacity: 0, y: 28 },
    { opacity: 1, y: 0, duration: DUR_BASE, ease: EASE_OUT, ...options }
  )
}

// ─── Stagger children into view ───────────────────────────────────────────
export function staggerIn(
  target: gsap.TweenTarget,
  options: gsap.TweenVars = {}
) {
  return gsap.fromTo(
    target,
    { opacity: 0, y: 22 },
    {
      opacity: 1,
      y: 0,
      duration: DUR_BASE,
      stagger: 0.1,
      ease: EASE_OUT,
      ...options,
    }
  )
}

// ─── ScrollTrigger fade-up for a section ─────────────────────────────────
export function scrollFadeUp(
  trigger: Element,
  target: gsap.TweenTarget,
  options: gsap.TweenVars = {}
) {
  return gsap.fromTo(
    target,
    { opacity: 0, y: 32 },
    {
      opacity: 1,
      y: 0,
      duration: DUR_BASE,
      ease: EASE_OUT,
      scrollTrigger: {
        trigger,
        start: 'top 84%',
        toggleActions: 'play none none none',
      },
      ...options,
    }
  )
}

// ─── Counter animation ────────────────────────────────────────────────────
export function animateCounter(
  element: Element | null,
  end: number,
  options: { suffix?: string; prefix?: string; duration?: number } = {}
) {
  if (!element) return
  const { suffix = '', prefix = '', duration = 1.6 } = options
  const obj = { val: 0 }

  gsap.to(obj, {
    val: end,
    duration,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
    onUpdate() {
      element.textContent = `${prefix}${Math.round(obj.val)}${suffix}`
    },
  })
}

// ─── Parallax on scroll ───────────────────────────────────────────────────
export function createParallax(
  target: Element | null,
  speed = 0.3
) {
  if (!target) return
  return gsap.to(target, {
    yPercent: -100 * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: target,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
}
