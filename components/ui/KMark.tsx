import { cn } from '@/lib/utils'

interface KMarkProps {
  size?:      number
  className?: string
  color?:     string
}

export function KMark({ size = 28, className, color = '#00D4FF' }: KMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('flex-shrink-0', className)}
      aria-hidden="true"
    >
      {/*
        Geometric K vertex mark — sharp 45°/90° angles only.
        Constructed from the polygon that matches the Brand Bible spec.
      */}
      <path
        d="M0 0 L11.2 0 L28 13.44 L11.2 28 L0 28 L0 18.48 L10.64 13.44 L0 8.96 Z"
        fill={color}
      />
    </svg>
  )
}

/** Square icon variant (for favicons, avatars) */
export function KMarkIcon({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <div
      className={cn(
        'flex items-center justify-center bg-cyan rounded-[8px] flex-shrink-0',
        className
      )}
      style={{ width: size, height: size }}
    >
      <KMark size={Math.round(size * 0.58)} color="#0D1B2A" />
    </div>
  )
}
