import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

let resendSingleton: Resend | null = null

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY
  if (!key) return null
  if (!resendSingleton) resendSingleton = new Resend(key)
  return resendSingleton
}

const schema = z.object({
  firstName: z.string().min(1),
  lastName:  z.string().min(1),
  email:     z.string().email(),
  company:   z.string().min(1),
  service:   z.string().min(1),
  budget:    z.string().min(1),
  message:   z.string().min(10),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    const resend = getResend()
    if (!resend) {
      console.error('[contact] RESEND_API_KEY is not set')
      return NextResponse.json({ error: 'Email not configured' }, { status: 503 })
    }

    const { error } = await resend.emails.send({
      from:    'KrAvex Contact <contact@kravex.dev>',
      to:      ['hello@kravex.dev'],
      reply_to: data.email,
      subject: `New project brief: ${data.service} — ${data.company}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0D1B2A;color:#F0F4F8;padding:40px;border-radius:12px">
          <div style="margin-bottom:32px">
            <h1 style="font-size:22px;font-weight:700;color:#00D4FF;margin:0 0 4px">
              New Project Brief
            </h1>
            <p style="font-size:13px;color:#8892A0;margin:0">Submitted via kravex.dev</p>
          </div>

          <table style="width:100%;border-collapse:collapse">
            ${[
              ['Name',    `${data.firstName} ${data.lastName}`],
              ['Email',   data.email],
              ['Company', data.company],
              ['Service', data.service],
              ['Budget',  data.budget],
            ].map(([label, value]) => `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid rgba(0,212,255,0.1);font-size:11px;color:#8892A0;font-family:monospace;letter-spacing:0.1em;text-transform:uppercase;width:120px;vertical-align:top">${label}</td>
                <td style="padding:10px 0;border-bottom:1px solid rgba(0,212,255,0.1);font-size:14px;color:#F0F4F8">${value}</td>
              </tr>
            `).join('')}
          </table>

          <div style="margin-top:28px">
            <div style="font-size:11px;color:#8892A0;font-family:monospace;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:10px">
              Message
            </div>
            <div style="font-size:14px;color:#F0F4F8;line-height:1.7;background:#1B2D45;padding:16px;border-radius:8px;border:1px solid rgba(0,212,255,0.14)">
              ${data.message.replace(/\n/g, '<br>')}
            </div>
          </div>

          <div style="margin-top:32px;padding-top:24px;border-top:1px solid rgba(0,212,255,0.14);font-size:11px;color:#8892A0;font-family:monospace">
            KrAvex · kravex.dev · Under The Amico Group
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('[contact] Resend error:', error)
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data', issues: err.issues }, { status: 400 })
    }
    console.error('[contact] Unexpected error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
