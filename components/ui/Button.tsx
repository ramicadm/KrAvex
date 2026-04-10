'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children:   React.ReactNode
  href?:      string
  onClick?:   () => void
  variant?:   'primary' | 'secondary' | 'ghost'
  size?:      'sm' | 'md' | 'lg'
  className?: string
  external?:  boolean
  type?:      'button' | 'submit' | 'reset'
  disabled?:  boolean
  loading?:   boolean
}

const variants = {
  primary:   'bg-cyan text-navy font-semibold shadow-[0_0_0_0_rgba(0,212,255,0)] hover:shadow-[0_6px_26px_rgba(0,212,255,0.28)] hover:bg-[#1bdbff]',
  secondary: 'bg-transparent text-cloud border border-cyan-border hover:border-cyan-border-h hover:bg-cyan-glow',
  ghost:     'bg-transparent text-slate hover:text-cloud',
}

const sizes = {
  sm: 'text-[12px] px-4 py-2 rounded-[6px] gap-1.5',
  md: 'text-[13.5px] px-6 py-3 rounded-[8px] gap-2',
  lg: 'text-[15px] px-8 py-3.5 rounded-[9px] gap-2',
}

export function Button({
  children,
  href,
  onClick,
  variant  = 'primary',
  size     = 'md',
  className,
  external = false,
  type     = 'button',
  disabled = false,
  loading  = false,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center font-display transition-colors duration-200 cursor-pointer select-none',
    variants[variant],
    sizes[size],
    (disabled || loading) && 'opacity-50 cursor-not-allowed',
    className
  )

  const MotionWrapper = (
    <motion.span
      whileHover={!disabled && !loading ? { y: -2 } : {}}
      whileTap={!disabled && !loading  ? { scale: 0.97, y: 0 } : {}}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className={classes}
    >
      {loading ? (
        <>
          <span className="w-3.5 h-3.5 rounded-full border-2 border-current border-t-transparent animate-spin" />
          {children}
        </>
      ) : children}
    </motion.span>
  )

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {MotionWrapper}
      </a>
    ) : (
      <Link href={href} className="inline-block">
        {MotionWrapper}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className="inline-block">
      {MotionWrapper}
    </button>
  )
}
