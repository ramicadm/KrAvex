'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import type { ContactFormValues } from '@/types'

const schema = z.object({
  firstName: z.string().min(1, 'Required'),
  lastName:  z.string().min(1, 'Required'),
  email:     z.string().email('Enter a valid email'),
  company:   z.string().min(1, 'Required'),
  service:   z.string().min(1, 'Select a service'),
  budget:    z.string().min(1, 'Select a budget range'),
  message:   z.string().min(10, 'Tell us a bit more (10 chars min)'),
})

type Status = 'idle' | 'loading' | 'success' | 'error'

const serviceOptions = [
  'IT Operations Consulting',
  'Business Website',
  'Internal Tool or Dashboard',
  'MVP Development',
  'Full SaaS Application',
  'Mobile App',
  'AI Integration',
  "Not sure — let's talk",
]

const budgetOptions = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $30,000',
  '$30,000 – $75,000',
  '$75,000+',
]

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-steel border border-cyan-border rounded-2xl p-10">
      <div className="mb-7">
        <h2 className="font-display font-bold text-[20px] text-cloud mb-1.5">Start a project</h2>
        <p className="text-[13px] text-slate">Tell us about your project. We&apos;ll follow up within 24 hours.</p>
      </div>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-12 text-center"
          >
            <div className="text-4xl mb-4">✓</div>
            <h3 className="font-display font-bold text-[18px] text-cloud mb-2">Message sent.</h3>
            <p className="text-slate text-[14px]">
              We&apos;ll be in touch within 24 hours.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 font-mono text-[10px] tracking-[0.14em] uppercase text-cyan hover:text-cloud transition-colors"
            >
              Send another →
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            {/* Row: first / last */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Field label="First name" error={errors.firstName?.message}>
                <input {...register('firstName')} placeholder="Ross" className={inputCls(!!errors.firstName)} />
              </Field>
              <Field label="Last name" error={errors.lastName?.message}>
                <input {...register('lastName')} placeholder="Amico" className={inputCls(!!errors.lastName)} />
              </Field>
            </div>

            <Field label="Business email" error={errors.email?.message} className="mb-4">
              <input {...register('email')} type="email" placeholder="you@company.com" className={inputCls(!!errors.email)} />
            </Field>

            <Field label="Company / Project" error={errors.company?.message} className="mb-4">
              <input {...register('company')} placeholder="Acme Corp" className={inputCls(!!errors.company)} />
            </Field>

            <Field label="What are you building?" error={errors.service?.message} className="mb-4">
              <select {...register('service')} className={inputCls(!!errors.service)}>
                <option value="">Select a service…</option>
                {serviceOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
            </Field>

            <Field label="Approximate budget" error={errors.budget?.message} className="mb-4">
              <select {...register('budget')} className={inputCls(!!errors.budget)}>
                <option value="">Select a range…</option>
                {budgetOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
            </Field>

            <Field label="Tell us more" error={errors.message?.message} className="mb-6">
              <textarea
                {...register('message')}
                rows={4}
                placeholder="What problem are you solving? What does success look like? Any timeline pressures?"
                className={`${inputCls(!!errors.message)} resize-y min-h-[110px]`}
              />
            </Field>

            {status === 'error' && (
              <p className="text-[12px] text-red-400 mb-4">
                Something went wrong. Please try again or email us directly at hello@kravex.dev.
              </p>
            )}

            <Button type="submit" size="lg" loading={status === 'loading'} className="w-full justify-center">
              Send my project brief →
            </Button>
            <p className="text-center text-[11px] text-slate mt-3">
              No spam. We respond within 1 business day.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── Helpers ──────────────────────────────────────────────────────────────

function inputCls(hasError: boolean) {
  return [
    'w-full bg-navy border rounded-lg px-4 py-3 text-[14px] text-cloud',
    'font-sans placeholder:text-slate/50 outline-none transition-all duration-200',
    'focus:border-cyan focus:shadow-[0_0_0_3px_rgba(0,212,255,0.07)]',
    'appearance-none',
    hasError ? 'border-red-500/60' : 'border-cyan-border',
  ].join(' ')
}

function Field({
  label,
  error,
  children,
  className = '',
}: {
  label:      string
  error?:     string
  children:   React.ReactNode
  className?: string
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="font-mono text-[8.5px] tracking-[0.16em] uppercase text-slate">
        {label}
      </label>
      {children}
      {error && (
        <span className="text-[11px] text-red-400">{error}</span>
      )}
    </div>
  )
}
