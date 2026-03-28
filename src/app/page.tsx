import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F2F2EF]">
      {/* Nav */}
      <nav className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between border-b-2 border-[#111110]">
        <span className="font-[family-name:var(--font-heading)] text-3xl tracking-wider text-[#111110] uppercase">
          AuditBrief
        </span>
        <div className="flex items-center gap-4">
          <Link
            href="/auth/login"
            className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-widest text-[#5A5A56] hover:text-[#111110] transition-colors"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="btn-accent inline-block"
          >
            Start Free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-6 pt-16 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="label mb-4">For digital agencies &amp; SEO freelancers</p>
          <h1 className="font-[family-name:var(--font-heading)] text-[#111110] mb-6 leading-none uppercase" style={{ fontSize: '76px' }}>
            SEO audits that look like consulting reports.
          </h1>
          <p className="font-[family-name:var(--font-body)] text-lg text-[#5A5A56] leading-relaxed max-w-[500px] mb-10">
            Enter a URL. AI analyses the site in under 2 minutes. Download a branded PDF your clients will actually read — without spending hours formatting.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/auth/signup" className="btn-accent inline-block">
              Audit a site free
            </Link>
            <Link
              href="/app/upload"
              className="btn-ghost inline-block"
            >
              See demo report
            </Link>
          </div>
          <p className="font-[family-name:var(--font-ui)] text-xs text-[#5A5A56] mt-4 uppercase tracking-wider">
            1 free audit/month &mdash; no credit card required
          </p>
        </div>

        {/* Score hero visual */}
        <div className="relative">
          <div className="card-brutal p-8 relative overflow-hidden">
            {/* Grain texture overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '128px' }}
            />
            <div className="label mb-2">Overall SEO Score</div>
            <div className="score-hero leading-none mb-1">94</div>
            <div className="font-[family-name:var(--font-heading)] text-[44px] text-[#111110] uppercase leading-none mb-6">
              acmecorp.com
            </div>

            {/* Section score bars */}
            <div className="space-y-3">
              {[
                { name: 'Technical SEO', score: 91 },
                { name: 'Content Quality', score: 88 },
                { name: 'Performance', score: 72 },
                { name: 'Mobile', score: 100 },
                { name: 'Internal Links', score: 65 },
                { name: 'Meta Data', score: 96 },
              ].map(s => (
                <div key={s.name}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#5A5A56]">
                      {s.name}
                    </span>
                    <span className="font-[family-name:var(--font-heading)] text-xl text-[#111110]">
                      {s.score}
                    </span>
                  </div>
                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${s.score}%`,
                        background: s.score >= 80 ? '#B8FF00' : s.score >= 60 ? '#F59E0B' : '#FF4D00',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Agency tag */}
            <div className="mt-6 pt-4 border-t-2 border-[#111110] flex items-center justify-between">
              <span className="label">Prepared by Ashworth Digital</span>
              <span className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#111110]">
                March 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="h-0.5 bg-[#111110]" />
      </div>

      {/* How it works */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="mb-16">
          <p className="label mb-3">Three steps</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase">
            Enter URL. AI audits. Download PDF.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-[#111110]">
          {[
            {
              num: '01',
              title: 'Enter URL',
              desc: 'Paste the site URL. Optionally add your agency name and accent colour for white-label output.',
            },
            {
              num: '02',
              title: 'AI Audits',
              desc: 'We fetch the site, analyse 6 SEO categories, score each section, and generate issue-by-issue findings with recommendations.',
            },
            {
              num: '03',
              title: 'Download PDF',
              desc: 'Get a client-ready PDF with your branding. Edit the executive summary before sending. Done in under 2 minutes.',
            },
          ].map((step, i) => (
            <div key={step.num} className={`p-8 ${i < 2 ? 'border-r-2 border-[#111110]' : ''}`}>
              <div className="font-[family-name:var(--font-heading)] text-[72px] text-[#B8FF00] leading-none mb-4 [text-shadow:2px_2px_0_#111110]">
                {step.num}
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-[28px] text-[#111110] uppercase mb-3">
                {step.title}
              </h3>
              <p className="font-[family-name:var(--font-body)] text-[#5A5A56] text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="h-0.5 bg-[#111110]" />
      </div>

      {/* What's in the report */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="mb-16">
          <p className="label mb-3">The deliverable</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase">
            6 sections. Every issue. One PDF.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border-2 border-[#111110]">
          {[
            { icon: '⚙', name: 'Technical SEO', desc: 'HTTPS, canonicals, robots.txt, sitemaps, structured data' },
            { icon: '✍', name: 'Content Quality', desc: 'Word count, headings, readability, uniqueness signals' },
            { icon: '⚡', name: 'Performance', desc: 'Response time, page weight, core web vitals estimates' },
            { icon: '📱', name: 'Mobile', desc: 'Viewport meta, responsive design signals' },
            { icon: '🔗', name: 'Internal Links', desc: 'Link count, structure, crawlability' },
            { icon: '🏷', name: 'Meta Data', desc: 'Title quality, meta description, Open Graph coverage' },
          ].map((cat, i) => {
            const row = Math.floor(i / 3)
            const col = i % 3
            const isLastRow = row === 1
            const isLastCol = col === 2
            return (
              <div
                key={cat.name}
                className={`p-6 ${!isLastCol ? 'border-r-2 border-[#111110]' : ''} ${!isLastRow ? 'border-b-2 border-[#111110]' : ''}`}
              >
                <div className="text-2xl mb-3">{cat.icon}</div>
                <h4 className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-wider text-[#111110] mb-2">
                  {cat.name}
                </h4>
                <p className="font-[family-name:var(--font-body)] text-xs text-[#5A5A56] leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Issue severity legend */}
        <div className="mt-8 flex items-center gap-6 flex-wrap">
          <span className="label">Issue severity:</span>
          {[
            { label: 'Critical', cls: 'badge-critical' },
            { label: 'Warning', cls: 'badge-warning' },
            { label: 'Info', cls: 'badge-info' },
            { label: 'Pass', cls: 'badge-pass' },
          ].map(b => (
            <span key={b.label} className={b.cls}>{b.label}</span>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="h-0.5 bg-[#111110]" />
      </div>

      {/* Pricing */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="mb-16">
          <p className="label mb-3">Pricing</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase">
            Audits for every workflow
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-[#111110]">
          {[
            {
              tier: 'Free',
              price: '£0',
              period: '/month',
              note: 'Forever free',
              features: [
                '1 audit per month',
                'Full 6-section report',
                'PDF download',
                'AuditBrief watermark',
              ],
              cta: 'Start free',
              href: '/auth/signup',
              highlight: false,
            },
            {
              tier: 'Pro',
              price: '£29',
              period: '/month',
              note: '7-day free trial',
              features: [
                '20 audits per month',
                'White-label PDF — your branding',
                'Editable executive summary',
                'Email delivery to clients',
              ],
              cta: 'Start trial',
              href: '/auth/signup?plan=pro',
              highlight: true,
            },
            {
              tier: 'Agency',
              price: '£79',
              period: '/month',
              note: 'For teams',
              features: [
                'Unlimited audits',
                'White-label + custom accent colour',
                'Team seats (3 users)',
                'Priority processing',
              ],
              cta: 'Start trial',
              href: '/auth/signup?plan=agency',
              highlight: false,
            },
          ].map((plan, i) => (
            <div
              key={plan.tier}
              className={`p-8 relative ${i < 2 ? 'border-r-2 border-[#111110]' : ''} ${plan.highlight ? 'bg-[#111110]' : ''}`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-8">
                  <span className="badge-pass px-3 py-1 text-xs">Most popular</span>
                </div>
              )}
              <p className={`label mb-4 ${plan.highlight ? 'text-[#B8FF00]' : ''}`}>{plan.tier}</p>
              <div className="flex items-baseline gap-1 mb-2">
                <span
                  className={`font-[family-name:var(--font-heading)] text-[52px] leading-none ${plan.highlight ? 'text-[#B8FF00]' : 'text-[#111110]'}`}
                >
                  {plan.price}
                </span>
                <span className={`font-[family-name:var(--font-body)] text-sm ${plan.highlight ? 'text-[#E8E8E4]' : 'text-[#5A5A56]'}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`font-[family-name:var(--font-ui)] text-xs uppercase tracking-wider mb-6 ${plan.highlight ? 'text-[#B8FF00]' : 'text-[#5A5A56]'}`}>
                {plan.note}
              </p>
              <ul className="space-y-2 mb-8">
                {plan.features.map(f => (
                  <li key={f} className={`font-[family-name:var(--font-body)] text-sm flex items-start gap-2 ${plan.highlight ? 'text-[#E8E8E4]' : 'text-[#5A5A56]'}`}>
                    <span className="text-[#B8FF00] mt-0.5 shrink-0">+</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={plan.highlight
                  ? 'btn-accent w-full text-center block'
                  : 'btn-ghost w-full text-center block'
                }
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

      {/* FAQ */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="mb-16">
          <p className="label mb-3">Questions</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase">
            Frequently asked
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-[900px]">
          {[
            {
              q: 'How accurate is the AI audit?',
              a: 'We fetch the live URL, extract real technical signals (title, meta tags, HTTPS, robots.txt, sitemap, link counts, response time), then pass them to Claude for analysis. The findings are grounded in real data, not guesses.',
            },
            {
              q: 'Can I white-label the reports?',
              a: 'Yes — on Pro and Agency plans. Add your agency name and accent colour and every PDF comes out as your firm\'s deliverable. No AuditBrief watermark.',
            },
            {
              q: 'How long does an audit take?',
              a: 'Under 2 minutes for most sites. We fetch the URL, run technical checks, and call the AI in one pipeline. Slow sites may take slightly longer.',
            },
            {
              q: 'Can I edit the report before sending?',
              a: 'Yes. The executive summary is fully editable on the report page before you download the PDF. Coming soon: inline issue editing.',
            },
            {
              q: 'Do you store the sites I audit?',
              a: 'Reports are stored server-side tied to your account. You can delete any report at any time. We never sell or share your data.',
            },
            {
              q: 'What if I need more than 20 audits/month?',
              a: 'The Agency plan includes unlimited audits. For very large volumes, get in touch — we can set up custom pricing.',
            },
          ].map(faq => (
            <div key={faq.q}>
              <h4 className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-wider text-[#111110] mb-2">
                {faq.q}
              </h4>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="h-0.5 bg-[#111110]" />
      </div>

      {/* Final CTA */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="card-brutal p-16 text-center">
          <div className="score-hero mb-2">94</div>
          <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase mb-4" style={{ fontSize: '48px' }}>
            What score does your client&apos;s site get?
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#5A5A56] mb-10 max-w-[500px] mx-auto">
            First audit is free. No credit card. Results in under 2 minutes.
          </p>
          <Link href="/auth/signup" className="btn-accent inline-block text-lg px-10 py-4">
            Audit a site now
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
