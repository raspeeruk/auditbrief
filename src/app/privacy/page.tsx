import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | AuditBrief',
  description: 'How AuditBrief collects, uses, and protects your data. Covers audits, accounts, payments, analytics, and your rights under UK GDPR.',
}

const sections = [
  {
    num: '01',
    title: 'Who we are',
    body: (
      <>
        <p className="mb-4">
          AuditBrief (auditpdf.com) is operated by Two Cores Operations Ltd, a company registered in England and Wales
          (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). We are the data controller for the personal data described in this policy.
        </p>
        <p>
          This policy explains what we collect when you use AuditBrief, why we collect it, how long we keep it, and the
          rights you have under UK data protection law (UK GDPR and the Data Protection Act 2018).
        </p>
      </>
    ),
  },
  {
    num: '02',
    title: 'What we collect',
    body: (
      <>
        <p className="mb-4">We collect the following, depending on how you use the service:</p>
        <ul className="space-y-3 mb-4">
          {[
            ['Audit data.', 'The website URLs you submit for auditing, the publicly available content and technical signals we fetch from those URLs, and the audit reports we generate from them.'],
            ['Branding data.', 'Optional details you add to white-label your reports: agency or company name, contact details, accent colour, and any logo files you upload.'],
            ['Account data.', 'If you create an account: your email address, password (handled by our authentication provider, never visible to us in plain text), company name, and subscription status.'],
            ['Payment data.', 'Payments are processed by Stripe. We never see or store your full card details. We keep a reference to your Stripe customer and subscription records and the payment status of your reports.'],
            ['Contact messages.', 'If you use our contact form: your name, email address, and message.'],
            ['Newsletter signups.', 'If you subscribe to our newsletter: your email address.'],
            ['Usage data.', 'We use Google Analytics 4 to understand how the site is used (pages visited, device type, approximate location). Our hosting provider also keeps standard server logs, which include IP addresses.'],
          ].map(([label, text]) => (
            <li key={label} className="flex items-start gap-2">
              <span className="text-[#111110] font-bold mt-0.5 shrink-0">+</span>
              <span>
                <strong className="text-[#111110]">{label}</strong> {text}
              </span>
            </li>
          ))}
        </ul>
        <p>You can preview an audit without creating an account and without giving us any personal details at all.</p>
      </>
    ),
  },
  {
    num: '03',
    title: 'Why we use it',
    body: (
      <>
        <p className="mb-4">We use this data to:</p>
        <ul className="space-y-3 mb-4">
          {[
            'Run audits and generate your reports (performance of a contract).',
            'Take payment for report downloads and subscriptions (performance of a contract, plus legal obligations around tax and accounting).',
            'Apply your branding to white-label reports (performance of a contract).',
            'Respond to messages you send us (legitimate interests).',
            'Send the newsletter you asked for (consent, and you can unsubscribe at any time).',
            'Understand how the site is used so we can improve it (legitimate interests).',
            'Keep the service secure and prevent abuse (legitimate interests).',
          ].map(item => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-[#111110] font-bold mt-0.5 shrink-0">+</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>We do not sell your personal data, and we do not use it for third-party advertising.</p>
      </>
    ),
  },
  {
    num: '04',
    title: 'AI processing',
    body: (
      <>
        <p className="mb-4">
          Audits are generated with the help of AI. When you submit a URL, we fetch that page and extract technical
          signals (for example the title tag, meta description, link counts, and response time). Those signals and the
          URL are sent to Anthropic, our AI provider, to produce the written findings in your report.
        </p>
        <p>
          We do not send your account details, payment details, or contact information to the AI provider. Only the
          submitted URL and the publicly observable signals from that page are processed.
        </p>
      </>
    ),
  },
  {
    num: '05',
    title: 'How long we keep it',
    body: (
      <ul className="space-y-3">
        {[
          ['Anonymous audits.', 'Audits run without an account are stored temporarily and deleted automatically, normally within about 2 hours of creation.'],
          ['Account data and saved reports.', 'Kept while your account is active. When your account is deleted, your profile, branding, uploaded logos, and saved reports are deleted with it.'],
          ['Contact messages.', 'Kept for as long as needed to handle your enquiry.'],
          ['Newsletter emails.', 'Kept until you unsubscribe.'],
          ['Payment records.', 'Kept for as long as UK tax and accounting law requires.'],
        ].map(([label, text]) => (
          <li key={label} className="flex items-start gap-2">
            <span className="text-[#111110] font-bold mt-0.5 shrink-0">+</span>
            <span>
              <strong className="text-[#111110]">{label}</strong> {text}
            </span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    num: '06',
    title: 'Who we share it with',
    body: (
      <>
        <p className="mb-4">
          We use a small number of service providers to run AuditBrief. They process data on our behalf under
          contract:
        </p>
        <ul className="space-y-3 mb-4">
          {[
            ['Stripe', 'payment processing and subscription billing.'],
            ['Supabase', 'database, authentication, and file storage (including uploaded logos).'],
            ['Anthropic', 'AI analysis used to generate audit findings.'],
            ['Google Analytics', 'usage analytics.'],
            ['Netlify', 'website hosting and newsletter signup handling.'],
            ['Resend', 'delivery of contact form messages to our inbox.'],
          ].map(([name, text]) => (
            <li key={name} className="flex items-start gap-2">
              <span className="text-[#111110] font-bold mt-0.5 shrink-0">+</span>
              <span>
                <strong className="text-[#111110]">{name}:</strong> {text}
              </span>
            </li>
          ))}
        </ul>
        <p>
          Some of these providers process data outside the UK, including in the United States. Where that happens, we
          rely on appropriate safeguards such as the UK International Data Transfer Agreement or UK Addendum to the EU
          Standard Contractual Clauses.
        </p>
      </>
    ),
  },
  {
    num: '07',
    title: 'Cookies',
    body: (
      <p>
        We use cookies for two things: keeping you logged in when you have an account (essential), and Google
        Analytics 4 measurement (analytics). We do not use advertising cookies. You can block or delete cookies in
        your browser settings; the site will still work, though you will not stay logged in.
      </p>
    ),
  },
  {
    num: '08',
    title: 'Your rights',
    body: (
      <>
        <p className="mb-4">Under UK GDPR you have the right to:</p>
        <ul className="space-y-3 mb-4">
          {[
            'Access the personal data we hold about you.',
            'Correct data that is inaccurate or incomplete.',
            'Have your data deleted, including your account and saved reports.',
            'Restrict or object to certain processing.',
            'Receive a copy of your data in a portable format.',
            'Withdraw consent at any time where processing is based on consent (for example the newsletter).',
          ].map(item => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-[#111110] font-bold mt-0.5 shrink-0">+</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          To exercise any of these rights, contact us via the{' '}
          <Link href="/contact" className="text-[#111110] underline underline-offset-2 hover:text-[#5A5A56] transition-colors">
            contact page
          </Link>
          . You also have the right to complain to the Information Commissioner&apos;s Office (ico.org.uk) if you are
          unhappy with how we handle your data.
        </p>
      </>
    ),
  },
  {
    num: '09',
    title: 'Changes to this policy',
    body: (
      <p>
        We may update this policy from time to time as the service changes. The date at the top of this page shows
        when it was last revised. If we make material changes, we will flag them on the site.
      </p>
    ),
  },
  {
    num: '10',
    title: 'Contact',
    body: (
      <p>
        Questions about this policy or your data? Reach us via the{' '}
        <Link href="/contact" className="text-[#111110] underline underline-offset-2 hover:text-[#5A5A56] transition-colors">
          contact page
        </Link>
        . AuditBrief is operated by Two Cores Operations Ltd, registered in England and Wales.
      </p>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F2F2EF]">
      {/* Nav */}
      <nav className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between border-b-2 border-[#111110]">
        <Link href="/" className="font-[family-name:var(--font-heading)] text-3xl tracking-wider text-[#111110] uppercase">
          AuditBrief
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/pricing"
            className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-widest text-[#5A5A56] hover:text-[#111110] transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/auth/login"
            className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-widest text-[#5A5A56] hover:text-[#111110] transition-colors"
          >
            Login
          </Link>
          <Link
            href="/app/upload?demo"
            className="btn-accent inline-block"
          >
            Audit a site
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-6 pt-16 pb-12">
        <p className="label mb-3">Legal</p>
        <h1 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase" style={{ fontSize: '72px', lineHeight: 1 }}>
          Privacy Policy
        </h1>
        <p className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-widest text-[#5A5A56] mt-6">
          Last updated: 4 July 2026
        </p>
        <p className="font-[family-name:var(--font-body)] text-lg text-[#5A5A56] mt-4 max-w-[600px]">
          The short version: we collect what we need to run your audits, take payment, and improve the site. We do not
          sell your data. Anonymous audits are deleted within hours.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="h-0.5 bg-[#111110]" />
      </div>

      {/* Content */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="max-w-[768px] space-y-14">
          {sections.map(s => (
            <div key={s.num}>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-[family-name:var(--font-heading)] text-[32px] text-[#B8FF00] leading-none [text-shadow:1px_1px_0_#111110]">
                  {s.num}
                </span>
                <h2 className="font-[family-name:var(--font-heading)] text-[28px] text-[#111110] uppercase leading-none">
                  {s.title}
                </h2>
              </div>
              <div className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed border-l-2 border-[#111110] pl-6">
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="h-0.5 bg-[#111110] mb-8" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <span className="font-[family-name:var(--font-heading)] text-xl text-[#5A5A56] uppercase tracking-wider">
            AuditBrief
          </span>
          <div className="flex items-center gap-6 font-[family-name:var(--font-ui)] text-xs text-[#5A5A56] uppercase tracking-wider">
            <Link href="/pricing" className="hover:text-[#111110] transition-colors">Pricing</Link>
            <Link href="/contact" className="hover:text-[#111110] transition-colors">Contact</Link>
            <Link href="/privacy" className="hover:text-[#111110] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#111110] transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
