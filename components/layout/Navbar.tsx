'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useLenis } from '@/components/providers/LenisProvider'
import { KMark } from '@/components/ui/KMark'

const navLinks = [
  { href: '/',         label: 'Home'     },
  { href: '/services', label: 'Services' },
  { href: '/work',     label: 'Work'     },
  { href: '/about',    label: 'About'    },
  { href: '/blog',     label: 'Blog'     },
]

export function Navbar() {
  const pathname    = usePathname()
  const lenis       = useLenis()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  // Lenis drives scroll; window.scrollY stays ~0, so use Lenis.scroll (or native fallback before init).
  useEffect(() => {
    if (lenis) {
      const sync = (instance: { scroll: number }) => {
        setScrolled(instance.scroll > 20)
      }
      sync(lenis)
      return lenis.on('scroll', sync)
    }
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lenis])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -62, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 h-[62px] flex items-center px-10 transition-all duration-300',
          scrolled
            ? 'bg-navy/92 backdrop-blur-2xl border-b border-cyan-border shadow-[0_4px_32px_rgba(0,0,0,0.4)]'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 mr-auto group">
          <KMark size={26} className="transition-all duration-200 group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.6)] group-hover:brightness-110" />
          <span className="font-display font-bold text-[16px] tracking-[0.07em] text-cloud">
            Kr<span className="text-cyan">A</span>vex
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7 mr-8 list-none">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href
            return (
              <motion.li
                key={link.href}
                custom={i}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 + 0.2 }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    'relative text-[13.5px] font-medium pb-0.5 transition-colors duration-200',
                    isActive ? 'text-cloud' : 'text-slate hover:text-cloud'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-cyan rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              </motion.li>
            )
          })}
        </ul>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.42 }}
          className="hidden md:block"
        >
          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-1.5 bg-cyan text-navy font-display font-semibold text-[13px] px-[18px] py-[9px] rounded-[7px] cursor-pointer shadow-[0_0_0_0_rgba(0,212,255,0)] hover:shadow-[0_4px_18px_rgba(0,212,255,0.28)] transition-shadow duration-200"
            >
              Start a project
              <span className="text-navy/70">→</span>
            </motion.span>
          </Link>
        </motion.div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-menu"
          className="md:hidden ml-auto p-2 text-slate hover:text-cloud transition-colors"
        >
          <div className="w-5 flex flex-col gap-[5px]">
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block h-[1.5px] bg-current rounded-full"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block h-[1.5px] bg-current rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block h-[1.5px] bg-current rounded-full"
            />
          </div>
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav-menu"
            role="navigation"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[62px] inset-x-0 z-40 bg-steel/98 backdrop-blur-2xl border-b border-cyan-border md:hidden max-h-[calc(100vh-62px)] overflow-y-auto"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-[15px] font-medium py-3 border-b border-cyan-border/50 transition-colors',
                    pathname === link.href ? 'text-cloud' : 'text-slate hover:text-cloud'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="mt-4">
                <span className="block w-full text-center bg-cyan text-navy font-display font-semibold text-[14px] px-6 py-3 rounded-lg">
                  Start a project →
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
