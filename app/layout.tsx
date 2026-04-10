import type { Metadata } from 'next'
import { inter, spaceGrotesk, jetbrainsMono } from '@/lib/fonts'
import { LenisProvider } from '@/components/providers/LenisProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import '@/app/globals.css'

export const metadata: Metadata = {
  title:       { default: 'KrAvex — We build what\'s next.', template: '%s | KrAvex' },
  description: 'KrAvex builds custom web, mobile, and enterprise applications for businesses that need more than off-the-shelf. Precision software. Operator mindset. Founder pace.',
  metadataBase: new URL('https://kravex.dev'),
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         'https://kravex.dev',
    siteName:    'KrAvex',
    title:       'KrAvex — We build what\'s next.',
    description: 'Custom web, mobile, and enterprise applications. Precision software. Operator mindset. Founder pace.',
  },
  twitter: {
    card:    'summary_large_image',
    creator: '@kravex',
  },
  robots: {
    index:  true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-navy text-cloud font-sans antialiased overflow-x-hidden`}
      >
        {/* Global grid texture */}
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern bg-grid"
        />
        <LenisProvider>
          <Navbar />
          <main className="relative z-10">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  )
}
