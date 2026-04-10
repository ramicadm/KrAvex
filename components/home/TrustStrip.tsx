const logos = [
  'ATSG', 'TransUnion', 'Optum / UnitedHealth', 'The Amico Group',
  'IronFrame Advisory', 'ATSG', 'TransUnion', 'Optum / UnitedHealth',
  'The Amico Group', 'IronFrame Advisory',
]

export function TrustStrip() {
  return (
    <div className="border-t border-b border-cyan-border py-7 overflow-hidden">
      <div className="flex items-center gap-12 px-12 mb-0">
        <span className="font-mono text-[8.5px] tracking-[0.2em] uppercase text-slate whitespace-nowrap flex-shrink-0">
          Team background
        </span>
        {/* Marquee track */}
        <div className="overflow-hidden flex-1 relative">
          <div className="flex gap-16 animate-marquee whitespace-nowrap" aria-hidden>
            {logos.map((logo, i) => (
              <span
                key={i}
                className="font-display font-semibold text-[13.5px] tracking-[0.04em] text-cloud/22 hover:text-cloud/48 transition-colors duration-200 cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
