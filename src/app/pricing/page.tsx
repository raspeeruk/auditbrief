import Link from 'next/link'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#F2F2EF]">
      {/* Nav */}
      <nav className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between border-b-2 border-[#111110]">
        <Link href="/" className="font-[family-name:var(--font-heading)] text-3xl tracking-wider text-[#111110] uppercase">
          AuditBrief
        </Link>
        <div className="flex items-center gap-4">
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
        <p className="label mb-3">Pricing</p>
        <h1 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase" style={{ fontSize: '72px', lineHeight: 1 }}>
          Pay per report. No subscription.
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg text-[#5A5A56] mt-4 max-w-[600px]">
          Preview any audit free. Download the full PDF + PPTX for a flat &pound;9. No account required.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="h-0.5 bg-[#111110]" />
      </div>

      {/* Per-report hero pricing */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="border-2 border-[#111110] bg-[#111110] p-12 relative">
          <div className="absolute -top-3 left-8">
            <span className="badge-pass px-3 py-1 text-xs">Recommended</span>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div className="flex-1">
              <p className="label text-[#B8FF00] mb-4">Pay per report</p>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-[family-name:var(--font-heading)] text-[96px] text-[#B8FF00] leading-none">
                  &pound;9
                </span>
                <span className="font-[family-name:var(--font-body)] text-xl text-[#E8E8E4]">
                  one-time payment
                </span>
              </div>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#E8E8E4] mb-6 max-w-[440px]">
                Audit any website, preview the full results for free, then pay &pound;9 to download the PDF report and editable PPTX deck. No signup. No subscription.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'Full 6-section SEO audit with scored findings',
                  'Print-ready PDF report (A4, branded)',
                  'Editable 5-slide PowerPoint deck',
                  'Guest checkout — no account needed',
                  'Results in under 2 minutes',
                  'Executive summary + top priorities + quick wins',
                ].map(f => (
                  <li key={f} className="font-[family-name:var(--font-body)] text-sm flex items-start gap-2 text-[#E8E8E4]">
                    <span className="text-[#B8FF00] mt-0.5 shrink-0">+</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0 text-center">
              <Link href="/app/upload?demo" className="btn-accent inline-block text-lg px-12 py-5">
                Try a free demo audit
              </Link>
              <p className="font-[family-name:var(--font-body)] text-xs text-[#E8E8E4] mt-4">
                Preview free &mdash; pay only when you download
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="h-0.5 bg-[#111110]" />
      </div>

      {/* Teams & Agencies */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="label mb-3">For teams &amp; agencies</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase">
            Monthly plans with white-label
          </h2>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] mt-3 max-w-[500px]">
            Running audits regularly for clients? Monthly plans include white-label branding, bulk audits, and team seats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-[#111110]">
          {[
            {
              tier: 'Pro',
              price: '\u00A329',
              period: '/month',
              note: '7-day free trial',
              features: [
                '20 audits per month',
                'White-label PDF — your branding',
                'Editable executive summary',
                'Email delivery to clients',
                'PDF + PPTX included',
              ],
              cta: 'Start free trial',
              href: '/auth/signup?plan=pro',
            },
            {
              tier: 'Agency',
              price: '\u00A379',
              period: '/month',
              note: 'For teams',
              features: [
                'Unlimited audits',
                'White-label + custom accent colour',
                'Team seats (3 users)',
                'Priority processing',
                'PDF + PPTX included',
              ],
              cta: 'Start free trial',
              href: '/auth/signup?plan=agency',
            },
          ].map((plan, i) => (
            <div
              key={plan.tier}
              className={`p-8 ${i < 1 ? 'border-r-2 border-[#111110]' : ''}`}
            >
              <p className="label mb-4">{plan.tier}</p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-[family-name:var(--font-heading)] text-[52px] leading-none text-[#111110]">
                  {plan.price}
                </span>
                <span className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56]">
                  {plan.period}
                </span>
              </div>
              <p className="font-[family-name:var(--font-ui)] text-xs uppercase tracking-wider mb-6 text-[#5A5A56]">
                {plan.note}
              </p>
              <ul className="space-y-2 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="font-[family-name:var(--font-body)] text-sm flex items-start gap-2 text-[#5A5A56]">
                    <span className="text-[#B8FF00] mt-0.5 shrink-0">+</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className="btn-ghost w-full text-center block"
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="h-0.5 bg-[#111110]" />
      </div>

      {/* Comparison table */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <p className="label mb-6">Compare plans</p>
        <div className="border-2 border-[#111110] overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#111110]">
                <th className="p-4 text-left font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#E8E8E4]">Feature</th>
                <th className="p-4 text-center font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#B8FF00]">Per Report (&pound;9)</th>
                <th className="p-4 text-center font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#E8E8E4]">Pro (&pound;29/mo)</th>
                <th className="p-4 text-center font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#E8E8E4]">Agency (&pound;79/mo)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Audits', perReport: '1', pro: '20/mo', agency: 'Unlimited' },
                { feature: 'Free preview', perReport: 'Yes', pro: 'Yes', agency: 'Yes' },
                { feature: 'PDF download', perReport: 'Yes', pro: 'Yes', agency: 'Yes' },
                { feature: 'PPTX download', perReport: 'Yes', pro: 'Yes', agency: 'Yes' },
                { feature: 'Account required', perReport: 'No', pro: 'Yes', agency: 'Yes' },
                { feature: 'White-label branding', perReport: '--', pro: 'Yes', agency: 'Yes' },
                { feature: 'Custom accent colour', perReport: '--', pro: '--', agency: 'Yes' },
                { feature: 'Team seats', perReport: '--', pro: '1', agency: '3' },
                { feature: 'Email delivery', perReport: '--', pro: 'Yes', agency: 'Yes' },
              ].map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? 'bg-[#F2F2EF]' : 'bg-[#E8E8E4]'}>
                  <td className="p-4 font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#111110]">{row.feature}</td>
                  <td className="p-4 text-center font-[family-name:var(--font-body)] text-sm text-[#111110]">{row.perReport}</td>
                  <td className="p-4 text-center font-[family-name:var(--font-body)] text-sm text-[#5A5A56]">{row.pro}</td>
                  <td className="p-4 text-center font-[family-name:var(--font-body)] text-sm text-[#5A5A56]">{row.agency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="h-0.5 bg-[#111110]" />
      </div>

      {/* Final CTA */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="card-brutal p-12 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase mb-4" style={{ fontSize: '48px' }}>
            Try it now — it&apos;s free to preview
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#5A5A56] mb-8 max-w-[500px] mx-auto">
            Enter any URL, see the full audit results. Only pay &pound;9 when you want the downloadable PDF + PPTX.
          </p>
          <Link href="/app/upload?demo" className="btn-accent inline-block text-lg px-10 py-4">
            Audit a site free
          </Link>
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
            <Link href="/auth/login" className="hover:text-[#111110] transition-colors">Login</Link>
            <Link href="/privacy" className="hover:text-[#111110] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#111110] transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
