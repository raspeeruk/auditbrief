import { NextRequest, NextResponse } from 'next/server'

const COLLECTOR_URL = 'https://rogerson-signups.netlify.app/'
const SITE = 'auditpdf.com'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(value: unknown): string {
  return String(value ?? '')
    .replace(/[\r\n\t]/g, ' ')
    .trim()
    .slice(0, 200)
}

export async function POST(req: NextRequest) {
  let body: Record<string, string> = {}

  const contentType = req.headers.get('content-type') || ''
  if (contentType.includes('application/json')) {
    body = await req.json()
  } else {
    const form = await req.formData()
    body = Object.fromEntries(
      Array.from(form.entries()).map(([k, v]) => [k, String(v)])
    )
  }

  const email = (body.email || '').trim()
  const website = (body.website || '').trim()
  const page = clean(body.page)
  const source = clean(body.source)

  // Honeypot filled means a bot: pretend success, forward nothing
  if (website) {
    return NextResponse.json({ ok: true })
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: 'Enter a valid email address' },
      { status: 400 }
    )
  }

  try {
    const res = await fetch(COLLECTOR_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'newsletter',
        email,
        site: SITE,
        source: source || 'footer',
        ...(page ? { page } : {}),
      }).toString(),
      signal: AbortSignal.timeout(8000),
    })

    if (!res.ok) {
      console.error('AuditBrief newsletter collector error:', res.status)
      return NextResponse.json(
        { error: 'Could not subscribe right now' },
        { status: 502 }
      )
    }
  } catch (err) {
    console.error('AuditBrief newsletter collector error:', err)
    return NextResponse.json(
      { error: 'Could not subscribe right now' },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
