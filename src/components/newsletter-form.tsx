'use client'

import { useState } from 'react'

/** Where the signup happened: current path plus any UTM params on the URL. */
function currentAttribution() {
  if (typeof window === 'undefined') return { page: '', source: '' }
  const params = new URLSearchParams(window.location.search)
  const utm = ['utm_source', 'utm_medium', 'utm_campaign']
    .map(key => params.get(key)?.trim())
    .filter(Boolean)
    .join('/')
  return { page: window.location.pathname, source: utm }
}

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, website, ...currentAttribution() }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus('error')
        setErrorMsg(data.error || 'Could not subscribe right now')
        return
      }
      setStatus('ok')
      setEmail('')
    } catch {
      setStatus('error')
      setErrorMsg('Could not subscribe right now')
    }
  }

  if (status === 'ok') {
    return (
      <p className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-wider text-[#111110]">
        <span className="bg-[#B8FF00] px-2 py-1">You&apos;re on the list.</span> One email a month, no noise.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex items-stretch gap-0 max-w-[440px]">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@agency.com"
          className="flex-1 min-w-0 bg-[#F2F2EF] border-2 border-r-0 border-[#111110] px-4 py-3 font-[family-name:var(--font-body)] text-sm text-[#111110] placeholder:text-[#5A5A56] focus:outline-none focus:bg-white"
        />
        {/* Honeypot: humans never see or fill this */}
        <input
          type="text"
          name="website"
          value={website}
          onChange={e => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-accent shrink-0 disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending' : 'Sign up'}
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-2 font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#FF4D00]">
          {errorMsg}
        </p>
      )}
    </form>
  )
}
