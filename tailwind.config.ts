import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{ts,tsx,js,jsx,mdx}',
    './app/**/*.{ts,tsx,js,jsx,mdx}',
    './lib/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:   '#0D1B2A',
        steel:  '#1B2D45',
        steel2: '#243852',
        cyan: {
          DEFAULT: '#00D4FF',
          dim:     'rgba(0,212,255,0.10)',
          border:  'rgba(0,212,255,0.14)',
          'border-h': 'rgba(0,212,255,0.38)',
          glow:    'rgba(0,212,255,0.07)',
        },
        gold:   '#FFB800',
        green:  '#00E5A0',
        cloud:  '#F0F4F8',
        slate:  '#8892A0',
      },
      fontFamily: {
        sans:    ['var(--font-inter)',          'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)',  'system-ui', 'sans-serif'],
        mono:    ['var(--font-jetbrains)',       'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        widest2: '0.22em',
        widest3: '0.28em',
      },
      backgroundImage: {
        'grid-pattern': [
          'linear-gradient(rgba(0,212,255,0.022) 1px, transparent 1px)',
          'linear-gradient(90deg, rgba(0,212,255,0.022) 1px, transparent 1px)',
        ].join(', '),
      },
      backgroundSize: {
        grid: '56px 56px',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0.3' },
        },
        float1: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-10px)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(8px)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        blink:   'blink 2.2s ease-in-out infinite',
        float1:  'float1 4.2s ease-in-out infinite',
        float2:  'float2 5.1s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
