import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Present an SEO Audit to a Client (That Wins the Retainer) | AuditBrief',
  description: 'How to present an SEO audit to clients who care about traffic, leads and revenue — not rankings. Includes the red/amber/green system, slide structure, common objections, and pricing.',
  openGraph: {
    title: 'How to Present an SEO Audit to a Client (That Wins the Retainer)',
    description: 'How to present an SEO audit to clients who care about traffic, leads and revenue — not rankings. Includes the red/amber/green system, slide structure, and pricing advice.',
    type: 'article',
  },
}

export default function SEOAuditForClients() {
  return (
    <div className="min-h-screen bg-[#F2F2EF]">
      <nav className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between border-b-2 border-[#111110]">
        <Link href="/" className="font-[family-name:var(--font-heading)] text-3xl tracking-wider text-[#111110] uppercase">
          AuditBrief
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/guides/seo-audit-report-template" className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-widest text-[#5A5A56] hover:text-[#111110] transition-colors hidden md:block">
            Report Template
          </Link>
          <Link href="https://auditpdf.com" className="btn-accent inline-block">
            Generate Report
          </Link>
        </div>
      </nav>

      <main className="max-w-[860px] mx-auto px-6 pt-14 pb-24">
        <p className="label mb-2">Client Presentations</p>
        <h1 className="font-[family-name:var(--font-heading)] text-[#111110] leading-none uppercase mb-6" style={{ fontSize: '62px' }}>
          How to Present an SEO Audit to a Client That Wins the Retainer
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg text-[#5A5A56] leading-relaxed mb-10 max-w-[640px]">
          Most SEO audits fail not because they&apos;re wrong — but because they&apos;re presented like a technical report to someone who cares about leads. Here&apos;s how to present findings that convert into paid retainers.
        </p>

        {/* What clients actually care about */}
        <div className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase mb-4" style={{ fontSize: '38px' }}>
            What Clients Actually Care About
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-3">
            Your client does not care about your Domain Rating. They do not care about your crawl error count. They do not lie awake thinking about Core Web Vitals. They care about <strong>traffic, leads, and revenue</strong> — and anything you present needs to connect back to those three things or you&apos;ll lose them.
          </p>
          <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-3">
            Instead of: &quot;You have 34 pages with duplicate title tags.&quot;
            <br />Say: &quot;34 pages are competing against each other in Google. We&apos;re splitting the ranking signal that should be going to your most valuable service pages. Fixing this could move your commercial pages from page 2 to page 1.&quot;
          </p>
          <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-4">
            Every finding needs a &quot;which means...&quot; translation. Technical SEO is the cause. Lost traffic is the effect. Speak the effect.
          </p>
          <div className="card-brutal p-5">
            <p className="label mb-3">The translation framework</p>
            <div className="space-y-3">
              {[
                { issue: 'Slow page speed (LCP 4.2s)', translation: 'Google is demoting your pages. Every extra second costs ~7% of conversions.' },
                { issue: '23 broken internal links', translation: 'We\'re leaking link equity. Those pages can\'t rank as highly as they should.' },
                { issue: 'No schema markup', translation: 'Competitors get rich results (stars, FAQs, prices) in Google. You just get a plain blue link.' },
                { issue: 'No backlinks to /services/', translation: 'Your most valuable page has zero authority. It\'s fighting at a disadvantage for every commercial keyword.' },
              ].map(({ issue, translation }) => (
                <div key={issue} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="card-brutal-sm p-3">
                    <p className="font-[family-name:var(--font-ui)] text-[10px] uppercase tracking-widest text-[#5A5A56] mb-1">Technical finding</p>
                    <p className="font-[family-name:var(--font-body)] text-sm text-[#111110]">{issue}</p>
                  </div>
                  <div className="p-3 bg-[#B8FF00] border-2 border-[#111110]">
                    <p className="font-[family-name:var(--font-ui)] text-[10px] uppercase tracking-widest text-[#111110] mb-1">Client translation</p>
                    <p className="font-[family-name:var(--font-body)] text-sm text-[#111110]">{translation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Structure the conversation */}
        <div className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase mb-4" style={{ fontSize: '38px' }}>
            How to Structure the Conversation
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-6">
            Whether you&apos;re presenting live or sending the report async, use this sequence. It mirrors how decisions actually get made.
          </p>
          <div className="space-y-4">
            {[
              { n: '01', title: 'Where you are now', desc: 'Current organic traffic, trend direction, share of business from organic. Establish the baseline — and the gap between current performance and potential.' },
              { n: '02', title: 'Why it\'s happening', desc: 'Your 3–5 most important findings. Don\'t list 40 issues. Pick the ones that explain the performance gap. Everything else goes in the appendix.' },
              { n: '03', title: 'What it\'s costing', desc: 'If the site fixed its top issues, what would change? Estimate traffic uplift using keyword volume × realistic CTR. Tie to lead value if you can get the numbers.' },
              { n: '04', title: 'What to do about it', desc: 'Your prioritised action list. Quick wins first — show them something can be fixed immediately and for cheap. Then the strategic roadmap.' },
              { n: '05', title: 'How you\'ll do it', desc: 'Your proposed engagement: scope, timeline, price. This should feel like the natural next step after everything they\'ve just heard — not a cold pitch.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="flex gap-4 items-start card-brutal-sm p-4">
                <span className="font-[family-name:var(--font-heading)] text-[40px] text-[#B8FF00] leading-none flex-shrink-0">{n}</span>
                <div>
                  <h3 className="font-[family-name:var(--font-ui)] font-semibold uppercase tracking-widest text-sm text-[#111110] mb-1">{title}</h3>
                  <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RAG system */}
        <div className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase mb-4" style={{ fontSize: '38px' }}>
            The Red/Amber/Green Priority System
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-6">
            Colour coding your findings is not condescending — it&apos;s efficient. Clients scan before they read. Make the scan give them the story.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="p-5 border-l-4 border-[#FF4D00] card-brutal-sm">
              <span className="badge-critical mb-3 inline-block">Red — Critical</span>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#111110] leading-relaxed">Fix this week. These issues are actively suppressing rankings or blocking Google from indexing pages. Every day unresolved is measurable cost.</p>
              <p className="font-[family-name:var(--font-body)] text-xs text-[#5A5A56] mt-2">Examples: manual penalty, noindex on key pages, 5s+ page load, site not in Google</p>
            </div>
            <div className="p-5 border-l-4 border-[#F59E0B] card-brutal-sm">
              <span className="badge-warning mb-3 inline-block">Amber — Important</span>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#111110] leading-relaxed">Fix this month. Real impact on performance but not causing immediate ranking drops. Should be part of the first retainer scope.</p>
              <p className="font-[family-name:var(--font-body)] text-xs text-[#5A5A56] mt-2">Examples: weak title tags, redirect chains, missing schema, thin content pages</p>
            </div>
            <div className="p-5 border-l-4 border-[#22C55E] card-brutal-sm">
              <span className="badge-pass mb-3 inline-block">Green — Best Practice</span>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#111110] leading-relaxed">Implement when possible. Incremental gains that compound. Good for padding out scope in later retainer phases.</p>
              <p className="font-[family-name:var(--font-body)] text-xs text-[#5A5A56] mt-2">Examples: image alt text gaps, minor heading structure tweaks, social meta tags</p>
            </div>
          </div>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed">
            Practical rule: never present more than 5 Red issues. If you have 40 red flags, you&apos;ve miscalibrated your severity. Pick the 3–5 that actually matter and put the rest into Amber. Crying wolf on everything trains clients to ignore all of it.
          </p>
        </div>

        {/* Slides vs leave out */}
        <div className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase mb-4" style={{ fontSize: '38px' }}>
            What Goes in Slides vs What to Leave Out
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-widest text-[#22C55E] mb-3">Include in the presentation</p>
              <ul className="space-y-2">
                {[
                  'Overall health score + trend',
                  'Traffic + impressions chart (12 months)',
                  'Top 5 issues with client-language explanations',
                  'Competitor comparison (1–2 stats)',
                  'Quick wins list (specific, actionable)',
                  'Strategic roadmap (90-day plan)',
                  'Investment summary',
                ].map(item => (
                  <li key={item} className="font-[family-name:var(--font-body)] text-sm text-[#111110] flex items-start gap-2">
                    <span className="text-[#22C55E] font-bold flex-shrink-0">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-widest text-[#FF4D00] mb-3">Leave out / put in appendix</p>
              <ul className="space-y-2">
                {[
                  'Full crawl error dumps (100+ rows)',
                  'Every single backlink issue',
                  'Methodology explanations',
                  'Tool screenshots (unless they clarify a specific point)',
                  'SEO jargon without translation',
                  'Issues you\'re not proposing to fix in this engagement',
                  'Historical context they can\'t act on',
                ].map(item => (
                  <li key={item} className="font-[family-name:var(--font-body)] text-sm text-[#111110] flex items-start gap-2">
                    <span className="text-[#FF4D00] font-bold flex-shrink-0">✗</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Objections */}
        <div className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase mb-4" style={{ fontSize: '38px' }}>
            Common Objections &amp; How to Handle Them
          </h2>
          <div className="space-y-4">
            {[
              {
                obj: '"We already have someone doing SEO."',
                ans: 'Perfect — this audit gives them a structured brief to work from. You can position it as complementary intelligence, not a replacement. Or you find out their current SEO is doing nothing and the door opens.',
              },
              {
                obj: '"Can\'t you just fix the most important thing?"',
                ans: 'You can — but SEO issues compound. Fixing one thing with broken foundations is like patching a leak in a cracked pipe. Show them the quick win, but frame the retainer as the sustainable fix.',
              },
              {
                obj: '"How long before we see results?"',
                ans: 'Be honest: technical fixes show in 4–8 weeks. Content improvements take 3–6 months. Link building is 6–12 months. Clients who understand this stay clients. Clients sold on "you\'ll rank in 30 days" churn and sue.',
              },
              {
                obj: '"Our developer says this will take months."',
                ans: 'Go through the fix list item by item. 80% of SEO issues are content changes that don\'t need a developer. Identify the developer-dependent ones and deprioritise them. Start with what marketing can own.',
              },
            ].map(({ obj, ans }) => (
              <div key={obj} className="card-brutal-sm p-5">
                <p className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-wide text-[#111110] mb-2">{obj}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed">{ans}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase mb-4" style={{ fontSize: '38px' }}>
            Pricing Your Audit Service
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-3">
            The audit is not a loss leader. It&apos;s a premium service — and charging for it filters out time-wasters. Common pricing in 2026:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { tier: 'Freelancer / SME', price: '£500 – £1,500', includes: 'Automated report + 1-hour call. Good for smaller sites. Works with tools like AuditBrief to keep delivery time under 2 hours.' },
              { tier: 'Agency / Mid-market', price: '£2,000 – £5,000', includes: 'Full manual audit + strategy document + presentation. 2–5 day delivery. Often includes competitor analysis.' },
              { tier: 'Enterprise', price: '£8,000 – £25,000+', includes: 'Multi-domain audit, international SEO, full technical spec for developers, executive board presentation.' },
            ].map(({ tier, price, includes }) => (
              <div key={tier} className="card-brutal p-5">
                <p className="label mb-1">{tier}</p>
                <p className="font-[family-name:var(--font-heading)] text-[28px] text-[#B8FF00] leading-none mb-3">{price}</p>
                <p className="font-[family-name:var(--font-body)] text-xs text-[#5A5A56] leading-relaxed">{includes}</p>
              </div>
            ))}
          </div>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed">
            Anchor the audit fee to the retainer: &quot;This audit is £750. If you engage us for implementation, the audit fee is credited to your first month.&quot; This closes the gap between a standalone deliverable and an ongoing engagement.
          </p>
        </div>

        {/* Related guides */}
        <div className="mb-12 p-6 bg-[#111110]">
          <p className="label text-[#5A5A56] mb-3">Related Guides</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/guides/seo-audit-checklist" className="block p-3 border border-[#333330] hover:border-[#B8FF00] transition-colors">
              <p className="font-[family-name:var(--font-ui)] text-xs text-[#B8FF00] uppercase tracking-widest mb-1">Checklist</p>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#F2F2EF]">87-Point SEO Audit Checklist</p>
            </Link>
            <Link href="/guides/how-to-do-seo-audit" className="block p-3 border border-[#333330] hover:border-[#B8FF00] transition-colors">
              <p className="font-[family-name:var(--font-ui)] text-xs text-[#B8FF00] uppercase tracking-widest mb-1">How-To</p>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#F2F2EF]">How to Do a Complete SEO Audit</p>
            </Link>
            <Link href="/guides/seo-audit-report-template" className="block p-3 border border-[#333330] hover:border-[#B8FF00] transition-colors">
              <p className="font-[family-name:var(--font-ui)] text-xs text-[#B8FF00] uppercase tracking-widest mb-1">Template</p>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#F2F2EF]">SEO Audit Report Template</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="card-brutal p-8 text-center">
          <p className="label mb-3">Show up to the meeting with a real report</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase leading-none mb-4" style={{ fontSize: '44px' }}>
            Professional PDF &amp; PPTX in 90 seconds.
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#5A5A56] mb-6 max-w-[480px] mx-auto">
            AuditBrief generates a branded SEO audit report your clients can actually read — PDF or PPTX, ready to present. Enter the URL and it&apos;s done before your next meeting.
          </p>
          <Link href="https://auditpdf.com" className="btn-accent inline-block">
            Generate a client report →
          </Link>
          <p className="font-[family-name:var(--font-ui)] text-xs text-[#5A5A56] mt-3 uppercase tracking-wider">1 free audit/month — no credit card required</p>
        </div>
      </main>
    </div>
  )
}
