'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const supabase = createClient()
    const { error: authError } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
    })

    setLoading(false)
    if (authError) {
      setError(authError.message)
    } else {
      setSent(true)
    }
  }

  if (sent) {
    return (
      <div className="min-h-screen bg-[#F2F2EF] flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-[#E8E8E4] border border-[#C8C8C4] rounded-lg p-8 text-center">
          <div className="w-14 h-14 bg-[#B8FF00]/10 rounded-full flex items-center justify-center mx-auto mb-5">
            <svg className="w-7 h-7 text-[#B8FF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#111110] mb-2">
            Check your email
          </h1>
          <p className="text-sm text-[#5A5A56] mb-1">
            We sent a magic link to <span className="font-medium text-[#111110]">{email}</span>
          </p>
          <p className="text-xs text-[#5A5A56]">
            Click the link in the email to sign in. It expires in 1 hour.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F2F2EF] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link href="/" className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#111110]">
            AuditBrief
          </Link>
        </div>

        <div className="bg-[#E8E8E4] border border-[#C8C8C4] rounded-lg p-8">
          <h1 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[#111110] mb-1">
            Sign in
          </h1>
          <p className="text-sm text-[#5A5A56] mb-6">
            Enter your email to receive a magic link.
          </p>

          <form onSubmit={handleSubmit}>
            <label className="block text-xs font-medium text-[#5A5A56] uppercase tracking-wide mb-1.5">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              autoFocus
              placeholder="you@company.com"
              className="w-full text-sm border border-[#C8C8C4] rounded-md px-3 py-2.5 bg-white text-[#111110] placeholder:text-[#5A5A56]/50 focus:outline-none focus:ring-2 focus:ring-[#B8FF00] mb-4"
            />

            {error && (
              <p className="text-sm text-[#FF4D00] mb-4">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading || !email}
              className="w-full bg-[#B8FF00] text-white text-sm font-medium rounded-md px-4 py-2.5 hover:bg-[#A0E000] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send magic link'}
            </button>
          </form>

          <p className="text-xs text-[#5A5A56] text-center mt-5">
            No account? <Link href="/auth/signup" className="text-[#B8FF00] font-medium hover:underline">Start free trial</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
