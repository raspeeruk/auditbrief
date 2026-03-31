import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | AuditBrief',
  description: 'Get in touch with the AuditBrief team.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F2F2EF] flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <Link href="/" className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#111110]">AuditBrief</Link>
        </div>
        <div className="bg-[#E8E8E4] border border-[#C8C8C4] rounded-lg p-8">
          <h1 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[#111110] mb-1">Get in touch</h1>
          <p className="text-sm text-[#5A5A56] mb-6">Have a question or need help? We'll get back to you within 24 hours.</p>

          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/contact/thanks">
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>

            <label className="block text-xs font-medium text-[#5A5A56] uppercase tracking-wide mb-1.5">Name</label>
            <input name="name" type="text" required placeholder="Your name" className="w-full text-sm border border-[#C8C8C4] rounded-md px-3 py-2.5 bg-white text-[#111110] placeholder:text-[#5A5A56]/50 focus:outline-none focus:ring-2 focus:ring-[#B8FF00] mb-4" />

            <label className="block text-xs font-medium text-[#5A5A56] uppercase tracking-wide mb-1.5">Email</label>
            <input name="email" type="email" required placeholder="you@company.com" className="w-full text-sm border border-[#C8C8C4] rounded-md px-3 py-2.5 bg-white text-[#111110] placeholder:text-[#5A5A56]/50 focus:outline-none focus:ring-2 focus:ring-[#B8FF00] mb-4" />

            <label className="block text-xs font-medium text-[#5A5A56] uppercase tracking-wide mb-1.5">Message</label>
            <textarea name="message" rows={5} required placeholder="How can we help?" className="w-full text-sm border border-[#C8C8C4] rounded-md px-3 py-2.5 bg-white text-[#111110] placeholder:text-[#5A5A56]/50 focus:outline-none focus:ring-2 focus:ring-[#B8FF00] resize-none mb-6" />

            <button type="submit" className="bg-[#111110] text-[#B8FF00] text-sm font-medium rounded-md px-8 py-2.5 hover:bg-[#2A2A28] transition-colors">Send message</button>
          </form>
        </div>
      </div>
    </div>
  )
}
