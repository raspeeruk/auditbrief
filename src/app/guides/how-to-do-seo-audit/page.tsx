import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Do a Complete SEO Audit in 2026 (Step-by-Step) | AuditBrief',
  description: 'A step-by-step guide to running a professional SEO audit: crawl the site, check Search Console, analyse keywords, audit backlinks, review content, and prioritise fixes.',
  openGraph: {
    title: 'How to Do a Complete SEO Audit in 2026 (Step-by-Step)',
    description: 'A step-by-step guide to running a professional SEO audit: crawl the site, check Search Console, analyse keywords, audit backlinks, review content, and prioritise fixes.',
    type: 'article',
  },
}

const StepNumber = ({ n }: { n: number }) => (
  <div className="flex-shrink-0 w-10 h-10 bg-[#B8FF00] border-2 border-[#111110] flex items-center justify-center">
    <span className="font-[family-name:var(--font-heading)] text-[22px] text-[#111110] leading-none">{n}</span>
  </div>
)

export default function HowToDoSEOAudit() {
  return (
    <div className="min-h-screen bg-[#F2F2EF]">
      <nav className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between border-b-2 border-[#111110]">
        <Link href="/" className="font-[family-name:var(--font-heading)] text-3xl tracking-wider text-[#111110] uppercase">
          AuditBrief
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/guides/seo-audit-checklist" className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-widest text-[#5A5A56] hover:text-[#111110] transition-colors hidden md:block">
            87-Point Checklist
          </Link>
          <Link href="https://auditpdf.com" className="btn-accent inline-block">
            Run Free Audit
          </Link>
        </div>
      </nav>

      <main className="max-w-[860px] mx-auto px-6 pt-14 pb-24">
        <p className="label mb-2">Step-by-Step Guide</p>
        <h1 className="font-[family-name:var(--font-heading)] text-[#111110] leading-none uppercase mb-6" style={{ fontSize: '68px' }}>
          How to Do a Complete SEO Audit in 2026
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg text-[#5A5A56] leading-relaxed mb-10 max-w-[640px]">
          A professional SEO audit isn&apos;t just running Lighthouse and calling it done. Here&apos;s the full process — from the first crawl to a prioritised fix list your client or team will actually act on.
        </p>

        <div className="card-brutal p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="label mb-1">Want the instant version?</p>
            <p className="font-[family-name:var(--font-body)] text-sm text-[#111110]">AuditBrief completes steps 1–6 automatically and outputs a branded PDF. Saves 3–4 hours per site.</p>
          </div>
          <Link href="https://auditpdf.com" className="btn-accent inline-block flex-shrink-0">
            Try it free →
          </Link>
        </div>

        {/* Steps */}
        <div className="space-y-10">

          <div>
            <div className="flex items-start gap-4 mb-4">
              <StepNumber n={1} />
              <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase leading-tight" style={{ fontSize: '34px' }}>
                Crawl the Site
              </h2>
            </div>
            <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-3">
              Start with a full crawl using <strong>Screaming Frog</strong> (free up to 500 URLs) or <strong>Sitebulb</strong>. This is your ground truth — every URL on the site, every status code, every redirect chain, every missing meta tag.
            </p>
            <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-3">
              Look for: broken internal links (404s), redirect chains (A→B→C is wasteful), pages blocked by robots.txt that shouldn&apos;t be, pages with noindex tags that are ranking, and your actual URL structure vs what you expected.
            </p>
            <div className="card-brutal-sm p-4">
              <p className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-widest text-[#5A5A56] mb-2">Tools for this step</p>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#111110]">Screaming Frog, Sitebulb, or AuditBrief (automated crawl included)</p>
            </div>
          </div>

          <div className="border-t-2 border-[#111110] pt-10">
            <div className="flex items-start gap-4 mb-4">
              <StepNumber n={2} />
              <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase leading-tight" style={{ fontSize: '34px' }}>
                Check Search Console
              </h2>
            </div>
            <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-3">
              Google Search Console shows you exactly how Google sees the site. This is the most direct data you&apos;ll ever get from a search engine, and most people only glance at it.
            </p>
            <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-3">
              Check the Coverage report for indexing errors. Check Performance for pages with high impressions but low CTR (easy wins: improve the title tag). Look at the Core Web Vitals report. Flag any manual actions or security issues in the sidebar.
            </p>
            <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-3">
              Compare the number of URLs Google has indexed vs the number your crawl found. A big gap usually means canonicalisation issues or Google discovering and ignoring thin content.
            </p>
            <div className="card-brutal-sm p-4">
              <p className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-widest text-[#5A5A56] mb-2">Key reports to pull</p>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#111110]">Coverage, Performance (filter by page), Core Web Vitals, Manual Actions, Security Issues</p>
            </div>
          </div>

          <div className="border-t-2 border-[#111110] pt-10">
            <div className="flex items-start gap-4 mb-4">
              <StepNumber n={3} />
              <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase leading-tight" style={{ fontSize: '34px' }}>
                Analyse Current Keywords
              </h2>
            </div>
            <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-3">
              Pull ranking data from <strong>Ahrefs</strong> or <strong>Semrush</strong>. You want to know: what terms is the site already ranking for (positions 1–20), what quick wins exist in positions 5–20 with decent volume, and where is keyword cannibalism happening.
            </p>
            <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-3">
              Cannibalism — where two or more pages compete for the same term — is one of the most common and damaging SEO issues, and most clients have no idea it&apos;s happening. Flag every instance. The fix is usually to consolidate or to clearly differentiate page intent.
            </p>
            <div className="card-brutal-sm p-4">
              <p className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-widest text-[#5A5A56] mb-2">Quick win filter</p>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#111110]">Positions 5–15, monthly volume &gt;500, keyword difficulty &lt;40. These move fastest with on-page fixes alone.</p>
            </div>
          </div>

          <div className="border-t-2 border-[#111110] pt-10">
            <div className="flex items-start gap-4 mb-4">
              <StepNumber n={4} />
              <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase leading-tight" style={{ fontSize: '34px' }}>
                Audit the Backlink Profile
              </h2>
            </div>
            <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-3">
              Pull the full link profile from Ahrefs or Majestic. You&apos;re looking at: total referring domains (and trend direction), quality distribution, anchor text patterns, and whether there are any obvious link schemes or toxic domains.
            </p>
            <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-3">
              Don&apos;t spend hours flagging every low-DR link. The threshold is: would this link embarrass the brand if they saw it? Irrelevant foreign-language directories, spun article farms, PBNs — flag those. A mix of average-quality directories and niche sites is normal and not a priority.
            </p>
            <div className="card-brutal-sm p-4">
              <p className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-widest text-[#5A5A56] mb-2">Red flags to surface</p>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#111110]">Over-optimised exact-match anchor text, sudden link spikes, link networks, domains with spam scores &gt;60</p>
            </div>
          </div>

          <div className="border-t-2 border-[#111110] pt-10">
            <div className="flex items-start gap-4 mb-4">
              <StepNumber n={5} />
              <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase leading-tight" style={{ fontSize: '34px' }}>
                Review Content Quality
              </h2>
            </div>
            <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-3">
              This is the most time-consuming step and the one most agencies rush. Google&apos;s helpful content classifier penalises entire domains — not just individual pages — if the site has a pattern of thin, unhelpful, or clearly AI-generated content.
            </p>
            <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-3">
              For each key page: does it answer the search intent completely? Is it more thorough than the top 3 ranking pages? Does it demonstrate real expertise (E-E-A-T)? Are there outdated statistics or broken examples? Is the author identifiable?
            </p>
            <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-3">
              Identify pages that should be merged (thin topically-related pages), pages that should be redirected (outdated content with backlinks), and pages that are simply not ranking and have no clear path to ranking — candidates for deletion.
            </p>
          </div>

          <div className="border-t-2 border-[#111110] pt-10">
            <div className="flex items-start gap-4 mb-4">
              <StepNumber n={6} />
              <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase leading-tight" style={{ fontSize: '34px' }}>
                Prioritise the Fix List
              </h2>
            </div>
            <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-3">
              A good audit produces a prioritised action list — not a 200-row spreadsheet that nobody reads. Use an impact/effort matrix: High Impact + Low Effort items go first. These are your quick wins and your credibility-builders with the client.
            </p>
            <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-3">
              Typical quick wins: fixing broken title tags, eliminating redirect chains, improving meta descriptions on high-impression pages, fixing crawlability errors. Longer-term: content consolidation, link acquisition, Core Web Vitals work.
            </p>
            <div className="card-brutal-sm p-4">
              <p className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-widest text-[#5A5A56] mb-2">Prioritisation framework</p>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#111110]">Red (critical, fix this week) / Amber (important, fix this month) / Green (best practice, fix when possible)</p>
            </div>
          </div>

        </div>

        {/* Related guides */}
        <div className="mt-14 mb-12 p-6 bg-[#111110]">
          <p className="label text-[#5A5A56] mb-3">Related Guides</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/guides/seo-audit-checklist" className="block p-3 border border-[#333330] hover:border-[#B8FF00] transition-colors">
              <p className="font-[family-name:var(--font-ui)] text-xs text-[#B8FF00] uppercase tracking-widest mb-1">Checklist</p>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#F2F2EF]">87-Point SEO Audit Checklist</p>
            </Link>
            <Link href="/guides/seo-audit-report-template" className="block p-3 border border-[#333330] hover:border-[#B8FF00] transition-colors">
              <p className="font-[family-name:var(--font-ui)] text-xs text-[#B8FF00] uppercase tracking-widest mb-1">Template</p>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#F2F2EF]">SEO Audit Report Template</p>
            </Link>
            <Link href="/guides/seo-audit-for-clients" className="block p-3 border border-[#333330] hover:border-[#B8FF00] transition-colors">
              <p className="font-[family-name:var(--font-ui)] text-xs text-[#B8FF00] uppercase tracking-widest mb-1">Client Work</p>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#F2F2EF]">Presenting an SEO Audit to Clients</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="card-brutal p-8 text-center">
          <p className="label mb-3">Skip steps 1–6</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase leading-none mb-4" style={{ fontSize: '44px' }}>
            Get a full audit in 90 seconds.
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#5A5A56] mb-6 max-w-[480px] mx-auto">
            AuditBrief runs the crawl, pulls Search Console data, analyses keywords, and outputs a branded PDF report ready to send to clients — no spreadsheets, no formatting.
          </p>
          <Link href="https://auditpdf.com" className="btn-accent inline-block">
            Run a free audit now →
          </Link>
          <p className="font-[family-name:var(--font-ui)] text-xs text-[#5A5A56] mt-3 uppercase tracking-wider">1 free audit/month — no credit card required</p>
        </div>
      </main>
    </div>
  )
}
