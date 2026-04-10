import type { Variants } from 'framer-motion'

// ─── Page transition ──────────────────────────────────────────────────────
export const pageVariants: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -8,  transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } },
}

// ─── Fade up (general content) ────────────────────────────────────────────
export const fadeUpVariants: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

// ─── Stagger container ────────────────────────────────────────────────────
export const staggerContainer: Variants = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

// ─── Stagger child ────────────────────────────────────────────────────────
export const staggerChild: Variants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

// ─── Card hover ───────────────────────────────────────────────────────────
export const cardHover = {
  rest:  { y: 0,  scale: 1,    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } },
  hover: { y: -5, scale: 1.01, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } },
}

// ─── Slide in from left ───────────────────────────────────────────────────
export const slideInLeft: Variants = {
  hidden:  { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

// ─── Scale in ─────────────────────────────────────────────────────────────
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },
}

// ─── Nav item ─────────────────────────────────────────────────────────────
export const navItemVariants: Variants = {
  hidden:  { opacity: 0, y: -8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 },
  }),
}
