import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SEO Audit Report Template: What to Include (+ Format Guide) | AuditBrief',
  description: 'Most SEO audit reports bury clients in data they do not understand. Here is a 6-section template that communicates clearly and converts prospects to retainers.',
}

const reportStructure = [
  {
    num: '01',
    title: 'Executive summary',
    contains: 'Overall SEO score (single number), top 3 issues with plain-language descriptions, estimated business impact, single recommended next action.',
    length: '1 page maximum',
    audience: 'Decision-makers, business owners, non-technical stakeholders',
  },
  {
    num: '02',
    title: 'Quick wins',
    contains: '3–5 issues that can be fixed in under a day. Specific, actionable. Format: Issue → Fix → Expected outcome. Shows immediate value.',
    length: 'Half a page',
    audience: 'Client contact, in-house webmaster or developer',
  },
  {
    num: '03',
    title: 'Technical issues',
    contains: 'Issues table with columns: Issue | Severity | Pages Affected | Fix. Grouped by category. Only critical and warning level issues — not info-level noise.',
    length: '2–3 pages',
    audience: 'Developer, technical lead',
  },
  {
    num: '04',
    title: 'On-page analysis',
    contains: 'Title tag and meta description coverage, header structure issues, content gaps on key pages. Include before/after examples and SERP preview screenshots.',
    length: '2–3 pages',
    audience: 'Content manager, SEO lead',
  },
  {
    num: '05',
    title: 'Backlink overview',
    contains: 'Domain rating trend, top 5 referring domains, anchor text distribution chart, any toxic link flags with recommended action.',
    length: '1–2 pages',
    audience: 'Marketing director, link-building lead',
  },
  {
    num: '06',
    title: 'Roadmap',
    contains: 'Phased action plan: Month 1 (critical fixes), Month 2–3 (on-page and content improvements), Ongoing (link building, content). Estimated effort and owner for each item.',
    length: '1–2 pages',
    audience: 'Project owner, decision-maker — this is where you pitch the retainer',
  },
]

const issuesTableRows = [
  { issue: 'Homepage missing canonical tag', severity: 'Critical', pages: '1', fix: 'Add <link rel="canonical" href="https://domain.com/"> to <head>' },
  { issue: 'Site loads in 5.8s on mobile (LCP)', severity: 'Critical', pages: 'All', fix: 'Compress images to WebP, defer non-critical JS, enable server-side caching' },
  { issue: '14 pages have duplicate title tags', severity: 'Warning', pages: '14', fix: 'Rewrite title tags to be unique per page, include primary keyword in first 60 chars' },
  { issue: '3 pages return 404 with inbound links', severity: 'Warning', pages: '3', fix: 'Set up 301 redirects from broken URLs to most relevant live pages' },
  { issue: 'No XML sitemap submitted to GSC', severity: 'Warning', pages: 'N/A', fix: 'Generate sitemap.xml and submit via Google Search Console' },
]

const formattingTips = [
  { tip: 'Replace metrics with outcomes', bad: '"CLS is 0.18"', good: '"Page elements shift as it loads, causing users to accidentally click wrong buttons"' },
  { tip: 'Show, do not tell', bad: 'Saying "your title tags are too long"', good: 'Screenshot of a truncated title in an actual Google SERP preview' },
  { tip: 'Quantify where possible', bad: '"Several pages have thin content"', good: '"23 indexed pages have under 200 words — these are likely being treated as low-quality by Google"' },
  { tip: 'Rank everything', bad: 'A flat list of 40 issues', good: 'Issues sorted by severity (Critical first), with estimated fix time next to each' },
]

const faqs = [
  {
    q: 'What format should the SEO audit report be delivered in?',
    a: 'PDF is the standard for client-facing reports — it is printable, shareable, and cannot be accidentally edited. For internal or agency use, a Google Doc or Notion page is fine. PDF also prevents the client from stripping out your branding before forwarding it to another agency.',
  },
  {
    q: 'How detailed should the technical issues section be?',
    a: 'Enough for a developer to act without asking follow-up questions. Include the issue name, a plain-language explanation, the specific pages affected (with URLs), and exact fix instructions. Avoid vague recommendations like "improve page speed" — say "compress the hero image on /services/ from 1.4MB to under 200KB using WebP format".',
  },
  {
    q: 'Should I include competitor data in the audit report?',
    a: 'Yes, selectively. Competitor examples are highly effective for illustrating gaps — a screenshot of a competitor ranking above the client for their target keyword, with a brief explanation of why, lands better than abstract advice. Keep it to 1–3 competitor references. Do not make the report feel like a competitor analysis.',
  },
  {
    q: 'How do I handle a site that has too many issues to list?',
    a: 'Prioritise ruthlessly. Pick the top 10–15 issues by impact and only include those in the client report. Create a separate internal issues log if needed. Clients who receive a 60-issue report feel the problem is unsolvable and are less likely to commission the work. More issues is not more impressive — it is overwhelming.',
  },
]

export default function SEOAuditReportTemplatePage() {
  return (
    <div className="min-h-screen bg-[#F2F2EF]">
      {/* Nav */}
      <nav className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between border-b-2 border-[#111110]">
        <Link href="/" className="font-[family-name:var(--font-heading)] text-3xl tracking-wider text-[#111110] uppercase">
          AuditBrief
        </Link>
        <Link href="/auth/signup" className="bg-[#B8FF00] text-[#111110] font-bold px-5 py-2.5 border-2 border-[#111110] uppercase tracking-wider text-sm font-[family-name:var(--font-ui)] inline-block hover:bg-[#A0E000] transition-colors">
          Start Free
        </Link>
      </nav>

      {/* Hero */}
      <section className="bg-[#111110] border-b-2 border-[#111110]">
        <div className="max-w-[768px] mx-auto px-6 py-16">
          <p className="font-[family-name:var(--font-ui)] text-xs text-[#B8FF00] uppercase tracking-widest mb-4">SEO Report Template</p>
          <h1 className="font-[family-name:var(--font-heading)] text-[#B8FF00] uppercase leading-none mb-6" style={{ fontSize: '48px' }}>
            SEO Audit Report Template: What to Include (+ Format Guide)
          </h1>
          <p className="font-[family-name:var(--font-body)] text-[#E8E8E4] text-lg leading-relaxed">
            Most SEO audit reports bury clients in data they do not understand. Here is a template that communicates clearly, builds trust, and converts the audit into the next project.
          </p>
        </div>
      </section>

      {/* 6-section structure */}
      <section className="max-w-[768px] mx-auto px-6 py-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          The 6-section SEO audit report structure
        </h2>
        <div className="border-2 border-[#111110] divide-y-2 divide-[#111110]">
          {reportStructure.map(section => (
            <div key={section.num} className="p-6">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-[family-name:var(--font-heading)] text-[36px] text-[#B8FF00] leading-none [text-shadow:1px_1px_0_#111110] shrink-0">{section.num}</span>
                <h3 className="font-[family-name:var(--font-heading)] text-[20px] text-[#111110] uppercase">{section.title}</h3>
              </div>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed mb-3">{section.contains}</p>
              <div className="flex gap-6 flex-wrap">
                <span className="font-[family-name:var(--font-ui)] text-xs uppercase tracking-wider text-[#5A5A56]">
                  Length: <span className="text-[#111110] font-semibold">{section.length}</span>
                </span>
                <span className="font-[family-name:var(--font-ui)] text-xs uppercase tracking-wider text-[#5A5A56]">
                  Audience: <span className="text-[#111110] font-semibold">{section.audience}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Executive summary example */}
      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-4 border-b-2 border-[#111110] pb-4">
          Executive summary — the page every client reads
        </h2>
        <p className="font-[family-name:var(--font-body)] text-[#5A5A56] leading-relaxed mb-6">
          This is the most important page in the report. Write it last — after you understand the full picture — but present it first. Here is what it should contain and an example of how it reads:
        </p>
        <div className="border-2 border-[#111110] bg-[#1A1A18] p-6">
          <p className="font-[family-name:var(--font-ui)] text-xs text-[#B8FF00] uppercase tracking-wider mb-4">Example executive summary — plain text format</p>
          <pre className="font-[family-name:var(--font-body)] text-sm text-[#E8E8E4] leading-relaxed whitespace-pre-wrap">{`OVERALL SEO SCORE: 58 / 100

TOP 3 ISSUES HOLDING BACK RANKINGS:

1. SITE SPEED — CRITICAL
   Your site loads in 5.8 seconds on mobile.
   Google's benchmark is under 2.5 seconds.
   Competitors in your space average 2.1 seconds.
   Impact: You are likely losing page-one positions
   to faster sites on mobile searches.

2. MISSING TITLE TAGS — WARNING
   14 of your 38 pages have either missing or
   duplicate title tags. These are the text
   Google displays in search results.
   Impact: Lower click-through rates and weaker
   keyword signals sent to Google.

3. NO INTERNAL LINKING STRATEGY — WARNING
   Your three highest-traffic pages have no
   internal links pointing to your main
   services pages. You are not passing
   authority where it matters.
   Impact: Service pages ranking below where
   they should be.

RECOMMENDED NEXT STEP:
Fix the 3 critical speed issues on the
homepage and 2 main service pages first.
Estimated effort: 1 day developer time.
Estimated ranking impact: visible in 4–8 weeks.`}</pre>
        </div>
      </section>

      {/* Technical issues table */}
      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-4 border-b-2 border-[#111110] pb-4">
          Technical issues table format
        </h2>
        <p className="font-[family-name:var(--font-body)] text-[#5A5A56] leading-relaxed mb-6">
          Use a four-column table for all technical issues: Issue, Severity, Pages Affected, and Fix. Sort by severity (Critical first). Never include raw Screaming Frog exports — filter to the issues that matter.
        </p>
        <div className="border-2 border-[#111110] overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-[#111110] bg-[#111110]">
                <th className="px-4 py-3 text-left font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#B8FF00]">Issue</th>
                <th className="px-4 py-3 text-left font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#B8FF00] border-l-2 border-[#333]">Severity</th>
                <th className="px-4 py-3 text-left font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#B8FF00] border-l-2 border-[#333]">Pages</th>
                <th className="px-4 py-3 text-left font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#B8FF00] border-l-2 border-[#333]">Fix</th>
              </tr>
            </thead>
            <tbody>
              {issuesTableRows.map((row, i) => (
                <tr key={i} className={`${i < issuesTableRows.length - 1 ? 'border-b-2 border-[#111110]' : ''}`}>
                  <td className="px-4 py-3 font-[family-name:var(--font-body)] text-xs text-[#111110] leading-relaxed">{row.issue}</td>
                  <td className={`px-4 py-3 font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-wider border-l-2 border-[#111110] ${row.severity === 'Critical' ? 'text-red-600' : 'text-amber-600'}`}>{row.severity}</td>
                  <td className="px-4 py-3 font-[family-name:var(--font-body)] text-xs text-[#5A5A56] border-l-2 border-[#111110]">{row.pages}</td>
                  <td className="px-4 py-3 font-[family-name:var(--font-body)] text-xs text-[#5A5A56] leading-relaxed border-l-2 border-[#111110]">{row.fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Formatting for non-technical clients */}
      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          How to format SEO data for non-technical clients
        </h2>
        <div className="border-2 border-[#111110] divide-y-2 divide-[#111110]">
          {formattingTips.map(item => (
            <div key={item.tip} className="p-6">
              <h3 className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-wider text-[#111110] mb-3">{item.tip}</h3>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex gap-3 items-start">
                  <span className="text-red-600 font-bold text-sm shrink-0">×</span>
                  <span className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed">{item.bad}</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-[#B8FF00] font-bold text-sm shrink-0 [text-shadow:0.5px_0.5px_0_#111110]">+</span>
                  <span className="font-[family-name:var(--font-body)] text-sm text-[#111110] leading-relaxed">{item.good}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA box */}
      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <div className="border-2 border-[#111110] bg-[#111110] p-8">
          <p className="font-[family-name:var(--font-heading)] text-[#B8FF00] uppercase text-[28px] leading-tight mb-3">
            Skip writing the report from scratch.
          </p>
          <p className="font-[family-name:var(--font-body)] text-[#E8E8E4] text-sm leading-relaxed mb-6">
            AuditBrief automatically generates a structured PDF report following this exact template — executive summary, issues table, roadmap — in under 2 minutes. White-label on Pro.
          </p>
          <Link href="/auth/signup" className="bg-[#B8FF00] text-[#111110] font-bold px-6 py-3 inline-block hover:bg-[#A0E000] transition-colors font-[family-name:var(--font-ui)] uppercase tracking-wider text-sm border-2 border-[#B8FF00]">
            Run Your Free SEO Audit →
          </Link>
        </div>
      </section>

      {/* Free vs paid templates */}
      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          Free vs paid SEO report templates
        </h2>
        <div className="border-2 border-[#111110]">
          <div className="grid grid-cols-[1fr_1fr_1fr] border-b-2 border-[#111110] bg-[#111110]">
            <div className="px-4 py-3 font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#B8FF00]">Option</div>
            <div className="px-4 py-3 border-l-2 border-[#333] font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#B8FF00]">Pros</div>
            <div className="px-4 py-3 border-l-2 border-[#333] font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#B8FF00]">Cons</div>
          </div>
          {[
            {
              option: 'Google Docs / Word template',
              pros: 'Free, fully customisable, easy to share',
              cons: 'Takes 3–5 hours to complete manually, no automation, formatting is tedious',
            },
            {
              option: 'Agency template (Canva / Figma)',
              pros: 'Looks professional, brandable',
              cons: 'Still requires manual data entry, not scalable past a few audits per month',
            },
            {
              option: 'Semrush / Ahrefs report export',
              pros: 'Data-rich, saves time on data gathering',
              cons: 'Generic format, not client-optimised, requires paid subscription (~£100/month+)',
            },
            {
              option: 'AuditBrief',
              pros: 'Generates structured PDF automatically in 2 minutes, white-label branding, free tier',
              cons: 'Less customisable than a blank template; executive summary editing available on Pro',
            },
          ].map((row, i, arr) => (
            <div key={row.option} className={`grid grid-cols-[1fr_1fr_1fr] ${i < arr.length - 1 ? 'border-b-2 border-[#111110]' : ''}`}>
              <div className="px-4 py-3 font-[family-name:var(--font-body)] text-xs text-[#111110] font-bold">{row.option}</div>
              <div className="px-4 py-3 border-l-2 border-[#111110] font-[family-name:var(--font-body)] text-xs text-[#5A5A56] leading-relaxed">{row.pros}</div>
              <div className="px-4 py-3 border-l-2 border-[#111110] font-[family-name:var(--font-body)] text-xs text-[#5A5A56] leading-relaxed">{row.cons}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How AuditBrief generates reports */}
      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          How AuditBrief generates reports automatically
        </h2>
        <div className="border-2 border-[#111110] divide-y-2 divide-[#111110]">
          {[
            { step: '01', title: 'Enter the URL', desc: 'Paste the site URL and optionally add your agency name and accent colour for white-label output.' },
            { step: '02', title: 'AI fetches and audits', desc: 'AuditBrief fetches the live site, runs technical checks across 6 SEO categories, and passes the data to Claude AI for analysis and scoring.' },
            { step: '03', title: 'Report is structured automatically', desc: 'The output follows the 6-section structure above — executive summary, quick wins, technical issues table, on-page analysis, backlink overview, and roadmap.' },
            { step: '04', title: 'Edit and download', desc: 'Edit the executive summary on the report page before downloading. On Pro plans, export as a branded white-label PDF. Send to the client directly.' },
          ].map(item => (
            <div key={item.step} className="p-6 flex gap-4">
              <span className="font-[family-name:var(--font-heading)] text-[36px] text-[#B8FF00] leading-none [text-shadow:1px_1px_0_#111110] shrink-0">{item.step}</span>
              <div>
                <h3 className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-wider text-[#111110] mb-1">{item.title}</h3>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {faqs.map(faq => (
            <div key={faq.q} className="border-2 border-[#111110] p-6">
              <h3 className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-wider text-[#111110] mb-3">{faq.q}</h3>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-[768px] mx-auto px-6 pb-20">
        <div className="bg-[#B8FF00] border-2 border-[#111110] p-10 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[36px] leading-tight mb-3">
            Generate your first report now.
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#111110] text-sm leading-relaxed mb-6 max-w-[400px] mx-auto">
            AuditBrief follows this exact template structure automatically. First audit is free. Results in under 2 minutes.
          </p>
          <Link href="/auth/signup" className="bg-[#111110] text-[#B8FF00] font-bold px-8 py-4 inline-block hover:bg-[#333] transition-colors font-[family-name:var(--font-ui)] uppercase tracking-wider text-sm">
            Run Your Free SEO Audit →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-[1200px] mx-auto px-6 py-10 border-t-2 border-[#111110]">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Link href="/" className="font-[family-name:var(--font-heading)] text-xl text-[#5A5A56] uppercase tracking-wider">AuditBrief</Link>
          <div className="flex items-center gap-6 font-[family-name:var(--font-ui)] text-xs text-[#5A5A56] uppercase tracking-wider">
            <Link href="/guides/how-to-do-seo-audit" className="hover:text-[#111110] transition-colors">How-To Guide</Link>
            <Link href="/guides/seo-audit-checklist" className="hover:text-[#111110] transition-colors">SEO Checklist</Link>
            <Link href="/guides/seo-audit-for-clients" className="hover:text-[#111110] transition-colors">Client Audits</Link>
            <Link href="/auth/login" className="hover:text-[#111110] transition-colors">Login</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
