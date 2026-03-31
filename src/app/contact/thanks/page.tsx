import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Message Sent | AuditBrief' }

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-[#F2F2EF] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#E8E8E4] border border-[#C8C8C4] rounded-lg p-8 text-center">
        <h1 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#111110] mb-2">Thanks for reaching out</h1>
        <p className="text-sm text-[#5A5A56] mb-6">We've received your message and will get back to you within 24 hours.</p>
        <Link href="/" className="text-sm font-medium bg-[#111110] text-[#B8FF00] px-6 py-2.5 rounded-md hover:bg-[#2A2A28] transition-colors inline-block">Back to homepage</Link>
      </div>
    </div>
  )
}
