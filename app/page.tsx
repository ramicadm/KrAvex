import type { Metadata } from 'next'
import { Hero }            from '@/components/home/Hero'
import { TrustStrip }      from '@/components/home/TrustStrip'
import { ServicesSection } from '@/components/home/ServicesSection'
import { FeaturedWork }    from '@/components/home/FeaturedWork'
import { Process }         from '@/components/home/Process'
import { CTABand }         from '@/components/home/CTABand'

export const metadata: Metadata = {
  title:       'KrAvex — We build what\'s next.',
  description: 'Custom web, mobile, and enterprise applications for businesses that need more than off-the-shelf. Precision software. Operator mindset. Founder pace.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesSection />
      <FeaturedWork />
      <Process />
      <CTABand
        label="Let's talk"
        headline="Ready to build"
        headlineAccent="something real?"
        sub="Discovery calls are free, pressure-free, and always worth your 30 minutes. Tell us what you're working on."
        primaryCTA={{ label: 'Start a project →', href: '/contact' }}
        secondaryCTA={{ label: 'Explore services', href: '/services' }}
      />
    </>
  )
}
