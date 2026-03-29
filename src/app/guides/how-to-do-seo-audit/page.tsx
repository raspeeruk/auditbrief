import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Do an SEO Audit in 2025: Step-by-Step Guide | AuditBrief',
  description: 'A proper SEO audit takes 4–6 hours if done manually. Here is the exact process — condensed into 10 clear steps with tools and pass/fail criteria.',
}

const steps = [
  {
    num: '01',
    title: 'Crawl for errors',
    check: 'Run a full site crawl to find broken links, redirect chains, 404s, and blocked resources.',
    tools: 'Screaming Frog (free up to 500 URLs), Sitebulb, or Google Search Console Coverage report.',
    pass: 'Zero 4xx/5xx errors. Redirect chains under 2 hops.',
    fail: 'Any crawl errors on key pages, redirect loops, or 404s receiving external links.',
  },
  {
    num: '02',
    title: 'Check indexing status',
    check: 'Verify which pages are indexed in Google and whether the right pages are being excluded.',
    tools: 'GSC Coverage report, site:yourdomain.com search, robots.txt tester.',
    pass: 'All important pages indexed. Noindex applied only to intended pages (thank-you, login, admin).',
    fail: 'Key landing pages missing from index. robots.txt accidentally blocking Googlebot.',
  },
  {
    num: '03',
    title: 'Audit Core Web Vitals',
    check: 'Measure LCP (Largest Contentful Paint), INP (Interaction to Next Paint), and CLS (Cumulative Layout Shift).',
    tools: 'PageSpeed Insights, Chrome UX Report in GSC, web-vitals.js in devtools.',
    pass: 'LCP under 2.5s, INP under 200ms, CLS under 0.1 on both mobile and desktop.',
    fail: 'Any metric in the red zone, especially on mobile where Google uses field data.',
  },
  {
    num: '04',
    title: 'Review title tags',
    check: 'Every page should have a unique, descriptive title tag between 50–60 characters containing the primary keyword.',
    tools: 'Screaming Frog export, browser extension like SEO Meta in 1 Click.',
    pass: 'Unique titles on all pages. Primary keyword in first 60 chars. No duplicate titles.',
    fail: 'Missing titles, duplicate titles across pages, titles over 60 chars getting truncated in SERPs.',
  },
  {
    num: '05',
    title: 'Review meta descriptions',
    check: 'Check for missing, duplicate, or over-length meta descriptions on high-priority pages.',
    tools: 'Screaming Frog, GSC Search Appearance report, manual SERP check.',
    pass: 'Unique descriptions on all key pages, 120–155 chars, action-oriented copy with the primary keyword.',
    fail: 'Missing descriptions (Google auto-generates them poorly), duplicates, or descriptions over 160 chars.',
  },
  {
    num: '06',
    title: 'Audit header structure',
    check: 'Each page should have exactly one H1 matching intent. H2s should organise sections. No skipped levels (H1 → H3).',
    tools: 'Screaming Frog H1/H2 export, HeadingsMap browser extension, view-source check.',
    pass: 'One H1 per page. Logical hierarchy. H1 contains primary keyword.',
    fail: 'Multiple H1s on one page, missing H1, or header tags used purely for styling rather than structure.',
  },
  {
    num: '07',
    title: 'Assess content quality',
    check: 'Check word count vs top-ranking competitors, keyword usage, E-E-A-T signals, and thin or duplicate content.',
    tools: 'Manual SERP analysis, Surfer SEO, Clearscope, or copy the URL into Ahrefs Content Checker.',
    pass: 'Content length comparable to or exceeding competitors. Clear author attribution. No thin pages under 300 words on indexed URLs.',
    fail: 'Thin content on category or product pages, keyword stuffing, no author info on YMYL topics.',
  },
  {
    num: '08',
    title: 'Review internal links',
    check: 'Check that all key pages have internal links pointing to them. Identify orphan pages and over-linked footers.',
    tools: 'Screaming Frog inlinks report, Ahrefs Site Audit orphan pages filter.',
    pass: 'No orphan pages. Key money pages have 3+ internal links. Anchor text is descriptive.',
    fail: 'Orphan pages (zero internal links), homepage dominating all link equity, generic anchor text like "click here".',
  },
  {
    num: '09',
    title: 'Audit the backlink profile',
    check: 'Check domain rating, spam score, anchor text distribution, and toxic link patterns.',
    tools: 'Ahrefs, Semrush, Moz Link Explorer, Google Disavow Tool for toxic links.',
    pass: 'Diverse anchor text. Low spam score. No sudden spike in low-quality links. Healthy referring domain count.',
    fail: 'Over 30% exact-match anchor text, links from PBNs or link farms, disavow file not maintained.',
  },
  {
    num: '10',
    title: 'Check structured data',
    check: 'Validate schema markup is implemented correctly and eligible for rich results in SERPs.',
    tools: 'Google Rich Results Test, Schema Markup Validator, GSC Enhancements report.',
    pass: 'No errors in rich results test. Schema type matches page content. FAQ/Review/Product schema where relevant.',
    fail: 'Schema errors or warnings, incorrect entity types, markup that does not match visible content.',
  },
]

const tools = [
  { name: 'Google Search Console', desc: 'Free. Indexing status, Core Web Vitals field data, search performance. The only tool that shows real Google data.' },
  { name: 'Screaming Frog SEO Spider', desc: 'Free up to 500 URLs. Desktop crawler for finding broken links, duplicate content, missing tags, and redirect issues.' },
  { name: 'PageSpeed Insights', desc: 'Free. Combines lab data (Lighthouse) and field data (Chrome UX Report) for Core Web Vitals scoring.' },
  { name: 'Ahrefs or Semrush', desc: 'Paid (~£99/month). Backlink analysis, keyword tracking, site audit, competitor research. One of the two is essential.' },
  { name: 'Chrome DevTools', desc: 'Free. Network tab for load analysis, Lighthouse audit, Coverage tab for unused CSS/JS.' },
  { name: 'AuditBrief', desc: 'Free tier available. Runs a complete 6-section SEO audit in under 2 minutes and generates a client-ready PDF.' },
]

const faqs = [
  {
    q: 'How long does a manual SEO audit take?',
    a: 'A thorough manual audit of a 50-100 page site takes 4–6 hours. A small brochure site might take 2 hours. Enterprise sites with thousands of pages can take days. Automated tools like AuditBrief compress this to under 2 minutes for the core technical and on-page analysis.',
  },
  {
    q: 'How often should you do an SEO audit?',
    a: 'For most sites: a full audit quarterly, a lightweight technical check monthly, and a content audit every 6 months. If you have made significant changes (redesign, migration, new CMS), audit immediately before and after.',
  },
  {
    q: 'What is the most important part of an SEO audit?',
    a: 'Technical foundations first — if Googlebot cannot crawl and index your pages, nothing else matters. Once crawlability is confirmed, Core Web Vitals and on-page signals have the highest impact on rankings for most sites.',
  },
  {
    q: 'Do I need paid tools to do an SEO audit?',
    a: 'You can do a solid audit with free tools: GSC, PageSpeed Insights, Screaming Frog (free tier), and AuditBrief (free tier). Paid tools like Ahrefs or Semrush add backlink data and competitor analysis that are hard to replicate for free.',
  },
]

export default function HowToDoSEOAuditPage() {
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
          <p className="font-[family-name:var(--font-ui)] text-xs text-[#B8FF00] uppercase tracking-widest mb-4">SEO Audit Guide</p>
          <h1 className="font-[family-name:var(--font-heading)] text-[#B8FF00] uppercase leading-none mb-6" style={{ fontSize: '52px' }}>
            How to Do an SEO Audit in 2025: Step-by-Step Guide
          </h1>
          <p className="font-[family-name:var(--font-body)] text-[#E8E8E4] text-lg leading-relaxed">
            A proper SEO audit takes 4–6 hours if done manually. Here is the exact process — condensed into 10 steps with tools and pass/fail criteria for each.
          </p>
        </div>
      </section>

      {/* What an SEO audit checks */}
      <section className="max-w-[768px] mx-auto px-6 py-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          What an SEO audit actually checks
        </h2>
        <p className="font-[family-name:var(--font-body)] text-[#5A5A56] leading-relaxed mb-6">
          An SEO audit is a structured review of all factors that affect a site's visibility in search engines. It covers five core areas:
        </p>
        <div className="border-2 border-[#111110] divide-y-2 divide-[#111110]">
          {[
            { area: 'Technical SEO', desc: 'Crawlability, indexing, HTTPS, site speed, structured data, mobile-friendliness, and Core Web Vitals.' },
            { area: 'On-Page SEO', desc: 'Title tags, meta descriptions, header structure, keyword placement, URL structure, and internal linking.' },
            { area: 'Content quality', desc: 'Thin content, keyword cannibalization, E-E-A-T signals, content freshness, and topic coverage vs competitors.' },
            { area: 'Backlink profile', desc: 'Domain authority, spam score, anchor text distribution, toxic links, and link velocity.' },
            { area: 'Performance', desc: 'Page load speed, Core Web Vitals (LCP, INP, CLS), server response time, and resource optimisation.' },
          ].map(item => (
            <div key={item.area} className="px-6 py-4 grid grid-cols-[180px_1fr] gap-4">
              <span className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#111110]">{item.area}</span>
              <span className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 10 Steps */}
      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-8 border-b-2 border-[#111110] pb-4">
          The 10-step SEO audit process
        </h2>
        <div className="space-y-0 border-2 border-[#111110] divide-y-2 divide-[#111110]">
          {steps.map(step => (
            <div key={step.num} className="p-6">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-[family-name:var(--font-heading)] text-[40px] text-[#B8FF00] leading-none [text-shadow:1px_1px_0_#111110]">{step.num}</span>
                <h3 className="font-[family-name:var(--font-heading)] text-[22px] text-[#111110] uppercase">{step.title}</h3>
              </div>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#111110] leading-relaxed mb-3">{step.check}</p>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex gap-2">
                  <span className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#5A5A56] shrink-0 w-12">Tools</span>
                  <span className="font-[family-name:var(--font-body)] text-xs text-[#5A5A56] leading-relaxed">{step.tools}</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#B8FF00] shrink-0 w-12 [text-shadow:0.5px_0.5px_0_#111110]">Pass</span>
                  <span className="font-[family-name:var(--font-body)] text-xs text-[#5A5A56] leading-relaxed">{step.pass}</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-red-600 shrink-0 w-12">Fail</span>
                  <span className="font-[family-name:var(--font-body)] text-xs text-[#5A5A56] leading-relaxed">{step.fail}</span>
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
            Skip the 6-hour manual audit.
          </p>
          <p className="font-[family-name:var(--font-body)] text-[#E8E8E4] text-sm leading-relaxed mb-6">
            AuditBrief runs this entire audit automatically and generates a PDF report you can share with clients — in under 2 minutes.
          </p>
          <Link href="/auth/signup" className="bg-[#B8FF00] text-[#111110] font-bold px-6 py-3 inline-block hover:bg-[#A0E000] transition-colors font-[family-name:var(--font-ui)] uppercase tracking-wider text-sm border-2 border-[#B8FF00]">
            Run Your Free SEO Audit →
          </Link>
        </div>
      </section>

      {/* Tools */}
      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          Tools you need for a manual SEO audit
        </h2>
        <div className="border-2 border-[#111110] divide-y-2 divide-[#111110]">
          {tools.map(tool => (
            <div key={tool.name} className="px-6 py-4">
              <span className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#111110] block mb-1">{tool.name}</span>
              <span className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed">{tool.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Priority matrix */}
      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          How to prioritize audit findings
        </h2>
        <p className="font-[family-name:var(--font-body)] text-[#5A5A56] leading-relaxed mb-6">
          Not every audit finding deserves equal urgency. Use an impact vs effort matrix to sequence fixes:
        </p>
        <div className="border-2 border-[#111110]">
          <div className="grid grid-cols-[1fr_1fr_1fr] border-b-2 border-[#111110]">
            <div className="px-4 py-3 border-r-2 border-[#111110] font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#5A5A56]">Quadrant</div>
            <div className="px-4 py-3 border-r-2 border-[#111110] font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#5A5A56]">Action</div>
            <div className="px-4 py-3 font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#5A5A56]">Examples</div>
          </div>
          {[
            { quad: 'High impact, low effort', action: 'Do first', examples: 'Missing title tags, broken redirects, noindex on key pages' },
            { quad: 'High impact, high effort', action: 'Plan and schedule', examples: 'Site speed overhaul, content rewrite, link-building campaign' },
            { quad: 'Low impact, low effort', action: 'Batch and do later', examples: 'Image alt text, meta description tweaks, schema markup additions' },
            { quad: 'Low impact, high effort', action: 'Deprioritize or skip', examples: 'Complete site restructure for marginal gains, minor aesthetic URL changes' },
          ].map((row, i) => (
            <div key={i} className={`grid grid-cols-[1fr_1fr_1fr] ${i < 3 ? 'border-b-2 border-[#111110]' : ''}`}>
              <div className="px-4 py-3 border-r-2 border-[#111110] font-[family-name:var(--font-body)] text-xs text-[#111110]">{row.quad}</div>
              <div className="px-4 py-3 border-r-2 border-[#111110] font-[family-name:var(--font-body)] text-xs font-bold text-[#111110]">{row.action}</div>
              <div className="px-4 py-3 font-[family-name:var(--font-body)] text-xs text-[#5A5A56]">{row.examples}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          Frequently asked questions
        </h2>
        <div className="space-y-6">
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
            Ready to audit your site?
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#111110] text-sm leading-relaxed mb-6 max-w-[400px] mx-auto">
            AuditBrief runs all 10 steps automatically. First audit is free. No credit card needed.
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
            <Link href="/guides/seo-audit-checklist" className="hover:text-[#111110] transition-colors">SEO Checklist</Link>
            <Link href="/guides/seo-audit-for-clients" className="hover:text-[#111110] transition-colors">Client Audits</Link>
            <Link href="/guides/seo-audit-report-template" className="hover:text-[#111110] transition-colors">Report Template</Link>
            <Link href="/auth/login" className="hover:text-[#111110] transition-colors">Login</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
