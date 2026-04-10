import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children:   ReactNode
  className?: string
  center?:    boolean
}

export function SectionLabel({ children, className, center = false }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-2.5 font-mono text-[9.5px] font-semibold tracking-widest3 uppercase text-cyan mb-4',
        center && 'justify-center',
        className
      )}
    >
      <span className="opacity-45">//</span>
      {children}
    </div>
  )
}
