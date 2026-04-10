import Link from 'next/link'
import { KMark } from '@/components/ui/KMark'

const serviceLinks = [
  { label: 'IT Ops Consulting',    href: '/services' },
  { label: 'Web Development',      href: '/services' },
  { label: 'Internal Tools',       href: '/services' },
  { label: 'MVP Development',      href: '/services' },
  { label: 'SaaS Builds',          href: '/services' },
]

const companyLinks = [
  { label: 'About',   href: '/about'   },
  { label: 'Work',    href: '/work'    },
  { label: 'Blog',    href: '/blog'    },
  { label: 'Contact', href: '/contact' },
]

const portfolioLinks = [
  { label: 'IronFrame Advisory', href: 'https://www.ironframeadvisory.net', external: true  },
  { label: 'Travio Creative',    href: 'https://www.traviocreative.com',    external: true  },
  { label: 'The Amico Group',    href: '#',                                 external: false },
]

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-cyan-border mt-0">
      <div className="max-w-[1180px] mx-auto px-12 pt-16 pb-10">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <KMark size={26} />
              <span className="font-display font-bold text-[16px] tracking-[0.07em] text-cloud">
                Kr<span className="text-cyan">A</span>vex
              </span>
            </Link>
            <p className="text-[13px] text-slate leading-relaxed max-w-[250px]">
              Precision-built software for businesses that need more than off-the-shelf. Based in New York.
            </p>
            <div className="inline-flex items-center gap-2 font-mono text-[8px] tracking-[0.14em] uppercase text-slate bg-steel border border-cyan-border px-3 py-1.5 rounded-md w-fit mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              A proud member of The Amico Group
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-[11px] font-display font-semibold tracking-widest uppercase text-cloud mb-4">
              Services
            </div>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[13px] text-slate hover:text-cloud transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-[11px] font-display font-semibold tracking-widest uppercase text-cloud mb-4">
              Company
            </div>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[13px] text-slate hover:text-cloud transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio + contact */}
          <div>
            <div className="text-[11px] font-display font-semibold tracking-widest uppercase text-cloud mb-4">
              Portfolio
            </div>
            <ul className="flex flex-col gap-2.5 mb-8">
              {portfolioLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.external ? '_blank' : undefined}
                    rel={l.external ? 'noopener noreferrer' : undefined}
                    className="text-[13px] text-slate hover:text-cloud transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="text-[11px] font-display font-semibold tracking-widest uppercase text-cloud mb-3">
              Contact
            </div>
            <a href="mailto:hello@kravex.dev" className="text-[13px] text-slate hover:text-cyan transition-colors duration-200">
              hello@kravex.dev
            </a>
            <div className="text-[13px] text-slate mt-1">New York, NY</div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-cyan-border flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="font-mono text-[9.5px] tracking-[0.1em] text-slate">
            © 2026 KrAvex · Under The Amico Group · S-Corp · New York · All rights reserved
          </span>
          <div className="flex items-center gap-5">
            <a href="https://www.ironframeadvisory.net" target="_blank" rel="noopener noreferrer" className="font-mono text-[9.5px] tracking-[0.09em] text-slate hover:text-cyan transition-colors">
              ironframeadvisory.net
            </a>
            <a href="https://www.traviocreative.com" target="_blank" rel="noopener noreferrer" className="font-mono text-[9.5px] tracking-[0.09em] text-slate hover:text-cyan transition-colors">
              traviocreative.com
            </a>
            <span className="font-mono text-[9.5px] tracking-[0.09em] text-cyan">
              kravex.dev
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
