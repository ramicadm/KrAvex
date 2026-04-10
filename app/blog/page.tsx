import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel }    from '@/components/ui/SectionLabel'
import { blogPosts }       from '@/data/blog'

export const metadata: Metadata = {
  title:       'Blog — The Build',
  description: 'Practical writing on software development, IT operations, and building a technology business in the NYC market. No thought-leadership fluff.',
}

export default function BlogPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative border-b border-cyan-border pt-20 pb-16 overflow-hidden">
        <div
          aria-hidden
          className="absolute top-[-80px] right-0 w-[360px] h-[360px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.04) 0%, transparent 70%)' }}
        />
        <div className="max-w-[1180px] mx-auto px-12">
          <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end relative z-10">
            <div>
              <SectionLabel>The Build</SectionLabel>
              <h1 className="font-display font-bold text-[clamp(38px,5.5vw,68px)] leading-[1.02] tracking-[-0.025em] text-cloud">
                Thinking out loud<br />about{' '}
                <em className="not-italic text-cyan">software.</em>
              </h1>
            </div>
            <p className="text-[16px] leading-[1.75] text-slate">
              Practical writing on software development, IT operations, and building a technology business in the NYC market. No thought-leadership fluff.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Articles */}
      <section className="py-24">
        <div className="max-w-[1180px] mx-auto px-12">
          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-steel border border-cyan-border rounded-xl overflow-hidden hover:border-cyan-border-h hover:-translate-y-1 hover:shadow-[0_8px_36px_rgba(0,0,0,0.38)] transition-all duration-250 cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="h-[154px] bg-steel2 flex items-center justify-center overflow-hidden">
                  <div
                    className="w-full h-full flex items-center justify-center text-[34px] opacity-40 transition-opacity duration-250 group-hover:opacity-55"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,212,255,0.07) 0%, transparent 55%, rgba(255,184,0,0.04) 100%)',
                    }}
                  >
                    {post.icon}
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="font-mono text-[7.5px] tracking-[0.16em] uppercase text-cyan mb-2">
                    {post.category}
                  </div>
                  <h2 className="font-display font-bold text-[14.5px] text-cloud mb-2 leading-[1.32]">
                    {post.title}
                  </h2>
                  <p className="text-[12px] text-slate leading-[1.6] mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between font-mono text-[8.5px] tracking-[0.09em] text-slate">
                    <span>{post.date}</span>
                    <span className="text-gold">{post.readTime} read</span>
                  </div>
                </div>
              </article>
            ))}
          </AnimatedSection>

          {/* Coming soon note */}
          <AnimatedSection className="mt-16 text-center">
            <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-slate/50">
              Full blog with MDX support coming soon — CMS integration TBD
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
