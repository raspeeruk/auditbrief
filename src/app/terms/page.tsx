import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | AuditBrief',
  description: 'The terms that govern your use of AuditBrief: the service, payments and plans, acceptable use, your content, and our liability.',
}

const sections = [
  {
    num: '01',
    title: 'Who we are and what you agree to',
    body: (
      <>
        <p className="mb-4">
          AuditBrief (auditpdf.com) is operated by Two Cores Operations Ltd, a company registered in England and Wales
          (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
        </p>
        <p>
          By using AuditBrief, previewing an audit, buying a report, or creating an account, you agree to these terms.
          If you are using the service on behalf of a company or agency, you confirm you have authority to bind that
          organisation, and &quot;you&quot; means that organisation.
        </p>
      </>
    ),
  },
  {
    num: '02',
    title: 'The service',
    body: (
      <>
        <p className="mb-4">
          AuditBrief generates SEO audit reports. You submit a website URL, we fetch that page, extract technical
          signals (such as meta tags, HTTPS status, link counts, and response time), and use AI analysis to produce a
          scored report across six categories with findings and recommendations.
        </p>
        <p>
          You can preview audit results for free without an account. Downloadable deliverables (a PDF report and a
          PPTX deck) require payment: either a one-time purchase for a single report or an account with an active
          trial or paid subscription. Paid plans add features such as white-label branding on your reports.
        </p>
      </>
    ),
  },
  {
    num: '03',
    title: 'Accounts',
    body: (
      <>
        <p className="mb-4">
          An account is optional for one-time report purchases and required for subscription plans. When you create an
          account you must give accurate information and keep your login credentials secure. You are responsible for
          all activity under your account.
        </p>
        <p>
          You must be at least 18 years old, or the age of majority where you live, and able to form a binding
          contract. Tell us promptly via the{' '}
          <Link href="/contact" className="text-[#111110] underline underline-offset-2 hover:text-[#5A5A56] transition-colors">
            contact page
          </Link>{' '}
          if you believe your account has been compromised.
        </p>
      </>
    ),
  },
  {
    num: '04',
    title: 'Payments, plans, and trials',
    body: (
      <>
        <ul className="space-y-3 mb-4">
          {[
            ['One-time purchases.', 'A single payment unlocks the PDF and PPTX downloads for one specific report. No account is needed.'],
            ['Subscriptions.', 'Monthly plans (currently Pro and Agency) include audit allowances and white-label features. Subscriptions renew automatically each month until cancelled. New subscriptions may include a free trial; if you do not cancel before the trial ends, the paid period starts automatically.'],
            ['Prices.', 'Current prices are shown on the pricing page and at checkout. We may change prices for future purchases and renewal periods; we will not change the price of a period you have already paid for.'],
            ['Processing.', 'All payments are processed by Stripe. We do not see or store your full card details.'],
            ['Cancellation.', 'You can cancel a subscription at any time from your billing settings. Cancellation takes effect at the end of the current billing period, and you keep access until then.'],
          ].map(([label, text]) => (
            <li key={label} className="flex items-start gap-2">
              <span className="text-[#111110] font-bold mt-0.5 shrink-0">+</span>
              <span>
                <strong className="text-[#111110]">{label}</strong> {text}
              </span>
            </li>
          ))}
        </ul>
        <p>
          Because reports are delivered instantly as digital content, downloads are generally non-refundable once
          delivered, except where the service was materially defective. Nothing in these terms affects your statutory
          rights under UK consumer law.
        </p>
      </>
    ),
  },
  {
    num: '05',
    title: 'Acceptable use',
    body: (
      <>
        <p className="mb-4">You agree not to:</p>
        <ul className="space-y-3 mb-4">
          {[
            'Use the service for anything unlawful, or submit URLs pointing to unlawful content.',
            'Attempt to overload, disrupt, or gain unauthorised access to the service or its infrastructure.',
            'Resell, sublicense, or provide access to the service itself to third parties (delivering finished reports to your clients is of course fine, that is the point).',
            'Scrape, reverse engineer, or copy the service or its underlying audit engine.',
            'Use audits to harass, defame, or mislead, or misrepresent AI-generated findings as a certified professional assessment.',
            'Circumvent usage limits, trial periods, or payment requirements.',
          ].map(item => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-[#111110] font-bold mt-0.5 shrink-0">+</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          Our crawler only fetches publicly accessible pages of the URLs you submit. You are responsible for ensuring
          your use of any audit output complies with the laws that apply to you.
        </p>
      </>
    ),
  },
  {
    num: '06',
    title: 'Your content and intellectual property',
    body: (
      <>
        <p className="mb-4">
          You keep all rights to the content you provide: the branding details and logo files you upload, and any
          material you add to a report such as an edited executive summary. You grant us a limited licence to store
          and process that content solely to provide the service, for example placing your logo on your white-label
          reports.
        </p>
        <p className="mb-4">
          Once you have paid for a report, you can use it freely for your business, including delivering it to clients
          under your own branding.
        </p>
        <p>
          We (and our licensors) keep all rights to the AuditBrief service itself: the software, design, audit engine,
          report templates, and brand. These terms do not transfer any of that to you.
        </p>
      </>
    ),
  },
  {
    num: '07',
    title: 'AI output and disclaimers',
    body: (
      <>
        <p className="mb-4">
          Audit findings are generated automatically from a single fetch of the submitted URL, with AI-assisted
          analysis. They may be incomplete, out of date, or occasionally wrong, and they do not cover everything a
          human SEO consultant would review. Reports are informational tools, not professional advice, and we do not
          guarantee any search ranking, traffic, or business outcome from acting on them.
        </p>
        <p>
          The service is provided &quot;as is&quot; and &quot;as available&quot;. We do not promise uninterrupted or
          error-free operation, and we may change, suspend, or withdraw features at any time.
        </p>
      </>
    ),
  },
  {
    num: '08',
    title: 'Liability',
    body: (
      <>
        <p className="mb-4">
          To the fullest extent permitted by law, our total liability to you for all claims arising out of or relating
          to the service is limited to the amount you paid us in the 12 months before the event giving rise to the
          claim. We are not liable for indirect or consequential losses, loss of profits, loss of business, or loss of
          data.
        </p>
        <p>
          Nothing in these terms excludes or limits liability that cannot be excluded under the law of England and
          Wales, including liability for death or personal injury caused by negligence, or for fraud.
        </p>
      </>
    ),
  },
  {
    num: '09',
    title: 'Termination',
    body: (
      <>
        <p className="mb-4">
          You can stop using the service at any time and can ask us to delete your account via the{' '}
          <Link href="/contact" className="text-[#111110] underline underline-offset-2 hover:text-[#5A5A56] transition-colors">
            contact page
          </Link>
          . We may suspend or terminate your access if you materially breach these terms, abuse the service, or fail
          to pay amounts due.
        </p>
        <p>
          On termination, your right to use the service ends. Reports you have already paid for and downloaded remain
          yours. Sections of these terms that by their nature should survive (including intellectual property,
          disclaimers, and liability) survive termination.
        </p>
      </>
    ),
  },
  {
    num: '10',
    title: 'Changes to these terms',
    body: (
      <p>
        We may update these terms from time to time as the service evolves. The date at the top of this page shows
        when they were last revised. If we make material changes, we will flag them on the site. Continuing to use the
        service after changes take effect means you accept the updated terms.
      </p>
    ),
  },
  {
    num: '11',
    title: 'Governing law and contact',
    body: (
      <>
        <p className="mb-4">
          These terms are governed by the law of England and Wales, and the courts of England and Wales have exclusive
          jurisdiction over any dispute, subject to any mandatory consumer protections that apply where you live.
        </p>
        <p>
          Questions about these terms? Reach us via the{' '}
          <Link href="/contact" className="text-[#111110] underline underline-offset-2 hover:text-[#5A5A56] transition-colors">
            contact page
          </Link>
          . AuditBrief is operated by Two Cores Operations Ltd, registered in England and Wales.
        </p>
      </>
    ),
  },
]

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-widest text-[#5A5A56] mt-6">
          Last updated: 4 July 2026
        </p>
        <p className="font-[family-name:var(--font-body)] text-lg text-[#5A5A56] mt-4 max-w-[600px]">
          The rules for using AuditBrief: what the service does, how payments and plans work, what you can do with
          your reports, and where our responsibilities end.
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
