import type { ServiceTier } from '@/types'

export const serviceTiers: ServiceTier[] = [
  {
    tier:     1,
    badge:    'Tier 1 · Available Day 1',
    headline: 'IT Operations Consulting',
    subhead:  '18+ years of enterprise operations experience, available as a monthly retainer. No ramp-up, no onboarding overhead.',
    infoLabel: 'Engagement model',
    infoRows: [
      { label: 'Monthly retainer', value: '$2,000–$5,000/mo' },
      { label: 'Response time',    value: 'Under 2 hours', accent: true },
      { label: 'Min. commitment',  value: '3 months' },
    ],
    items: [
      {
        icon:        '⚙️',
        name:        'IT Ops Consulting',
        description: 'Process improvement, incident management, service desk optimization. We make your infrastructure work like it should.',
        price:       '$2,000–$5,000/mo',
      },
      {
        icon:        '📋',
        name:        'Technical Project Management',
        description: 'Lead software projects for companies without structured technical leadership. Bridge the gap between your team and vendors.',
        price:       '$3,000–$5,000/mo',
      },
      {
        icon:        '☁️',
        name:        'DevOps & Infrastructure Advisory',
        description: 'Docker, CI/CD pipelines, cloud architecture review. Enterprise-grade thinking without the enterprise price tag.',
        price:       '$2,500–$4,000/mo',
      },
    ],
  },
  {
    tier:     2,
    badge:    'Tier 2 · Months 2–6',
    headline: 'Web & Product Development',
    subhead:  'Fixed-price projects, milestone-based delivery. From a clean marketing site to a fully-functional internal tool — built to perform.',
    infoLabel: 'Typical timeline',
    infoRows: [
      { label: 'Business website',   value: '2–4 weeks' },
      { label: 'Internal dashboard', value: '4–8 weeks', accent: true },
      { label: 'MVP',                value: '6–12 weeks' },
    ],
    items: [
      {
        icon:        '🌐',
        name:        'Business Websites',
        description: 'Next.js marketing sites built for conversion. Fast, mobile-first, SEO-ready, connected to your domain on launch day.',
        price:       '$2,500–$7,500',
      },
      {
        icon:        '📊',
        name:        'Internal Tools & Dashboards',
        description: 'Custom admin panels, reporting dashboards, and workflow automation. Replace the spreadsheets with something that scales.',
        price:       '$5,000–$15,000',
      },
      {
        icon:        '⚡',
        name:        'MVP Development',
        description: 'Help early-stage founders build their minimum viable product. Milestone payments, founder-speed delivery, investor-ready.',
        price:       '$10,000–$30,000',
      },
    ],
  },
  {
    tier:     3,
    badge:    'Tier 3 · Month 6+',
    headline: 'Full-Stack SaaS Builds',
    subhead:  'Complete SaaS platforms from architecture to launch. For founders who\'ve validated their model and need a partner who thinks like an operator.',
    infoLabel: "What's included",
    infoRows: [
      { label: 'Auth, roles & permissions',    value: '✓', accent: true },
      { label: 'Stripe billing',               value: '✓', accent: true },
      { label: 'Admin dashboard',              value: '✓', accent: true },
      { label: 'Vercel + Railway deployment',  value: '✓', accent: true },
      { label: '60 days post-launch support',  value: '✓', accent: true },
    ],
    items: [
      {
        icon:        '🏗️',
        name:        'Full SaaS Application',
        description: 'Complete web application — auth, payments, multi-tenant dashboards, API layers. Built to scale from day one.',
        price:       '$25,000–$75,000+',
      },
      {
        icon:        '📱',
        name:        'Mobile App Development',
        description: 'React Native apps for iOS and Android. Cross-platform, one codebase, deployed to both app stores.',
        price:       '$20,000–$60,000',
      },
      {
        icon:        '🤖',
        name:        'AI-Enhanced Solutions',
        description: 'Integrate OpenAI, Anthropic, or custom ML pipelines into your business workflows. Automation that changes your operations.',
        price:       '$15,000–$45,000',
      },
    ],
  },
]
