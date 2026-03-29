import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Technical SEO: The Foundation That Makes Everything Else Work | AuditBrief',
  description: 'Core Web Vitals, crawlability, indexability, site speed, mobile-first, and schema markup — the complete technical SEO guide for 2025 with pass/fail criteria.',
  keywords: ['technical SEO', 'technical SEO guide', 'core web vitals', 'technical SEO audit', 'site speed SEO'],
}

const coreWebVitals = [
  {
    metric: 'LCP',
    name: 'Largest Contentful Paint',
    target: '<2.5s',
    whatItMeasures: 'How long the largest visible element (usually a hero image or heading) takes to load.',
    commonCauses: 'Unoptimised hero images, slow server response, render-blocking CSS/JS, no CDN.',
    fix: 'Preload the LCP image with <link rel="preload">, serve WebP at correct dimensions, move to a CDN, defer non-critical CSS.',
  },
  {
    metric: 'INP',
    name: 'Interaction to Next Paint',
    target: '<200ms',
    whatItMeasures: 'Responsiveness — how quickly the page responds to user interactions across the full visit.',
    commonCauses: 'Heavy JavaScript on the main thread, third-party scripts, unoptimised event handlers.',
    fix: 'Break up long tasks with scheduler.yield(), defer third-party scripts, reduce main thread blocking.',
  },
  {
    metric: 'CLS',
    name: 'Cumulative Layout Shift',
    target: '<0.1',
    whatItMeasures: 'Visual stability — how much page elements move unexpectedly as content loads.',
    commonCauses: 'Images without width/height attributes, ads injected above content, late-loading web fonts.',
    fix: 'Add explicit width and height to all images and embeds. Use font-display: optional or swap with a size-adjusted fallback.',
  },
]

const crawlabilityChecks = [
  { check: 'robots.txt', detail: 'Should allow Googlebot on all pages you want indexed. The most common mistake: a development-era "Disallow: /" that was never removed. Check yourdomain.com/robots.txt in browser and test it in GSC.' },
  { check: 'XML sitemap', detail: 'Submit to GSC. Should include only canonical, indexable URLs. Exclude noindex pages, paginated URLs (unless canonical), and redirected URLs. Keep it under 50,000 URLs per file.' },
  { check: 'Crawl budget', detail: 'Relevant for sites with 10,000+ pages. Crawl budget is how many pages Googlebot crawls per day. Wastes include redirect chains, duplicate content, soft 404s, and URL parameters generating infinite variations.' },
  { check: 'Internal link depth', detail: 'Every page should be reachable within 3 clicks from the homepage. Pages buried deeper than 5 clicks are unlikely to be crawled frequently. Check with Screaming Frog\'s crawl depth report.' },
]

const schemaTypes = [
  { type: 'Article', use: 'Blog posts, news articles. Enables Google to understand author, publish date, and headline for rich results.' },
  { type: 'FAQ', use: 'Pages with question-and-answer content. Can trigger FAQ rich results in SERPs — significant CTR boost for informational queries.' },
  { type: 'Product', use: 'E-commerce product pages. Enables price, availability, and review stars in search results.' },
  { type: 'LocalBusiness', use: 'Location-based businesses. Signals NAP data to Google and supports Knowledge Panel.' },
  { type: 'BreadcrumbList', use: 'Site navigation hierarchy. Shows breadcrumb path in SERPs, improving CTR and helping Google understand site structure.' },
]

const faqs = [
  {
    q: 'How often should you do a technical SEO audit?',
    a: 'A full technical audit quarterly, with a lighter crawl-and-index check monthly. Any time you make significant changes — CMS migration, site redesign, URL restructure, moving from HTTP to HTTPS — audit immediately after. Technical issues introduced by a redesign can tank rankings within weeks if not caught. Set up GSC alerts for crawl errors so you have a permanent early warning system.',
  },
  {
    q: 'What\'s the most common technical SEO error?',
    a: 'By volume: missing or duplicate title tags. By impact: accidental noindex or robots.txt blocks on key pages. The latter is catastrophic and easy to miss — a single robots.txt line can deindex your entire site. The most common way it happens: a developer copies production config from a staging environment that had crawling blocked. Check GSC Coverage report after every deployment.',
  },
  {
    q: 'Does site speed really affect rankings?',
    a: 'Yes, but not as a direct ranking factor in the way links are. Site speed affects rankings through Core Web Vitals (a confirmed ranking signal since 2021), user behaviour signals (high bounce rate on slow pages), and crawl budget (slow sites get crawled less frequently). The bigger effect is often indirect: a 1-second improvement in load time can increase conversion rate by 7%, which improves revenue even if the ranking uplift is modest.',
  },
  {
    q: 'What is structured data and does it help rankings?',
    a: 'Structured data (schema markup) is machine-readable code that helps Google understand what your content is about — not just the words, but the entity types (person, product, event, FAQ). It does not directly improve rankings, but it unlocks rich results in SERPs (star ratings, FAQ dropdowns, event details) that significantly increase CTR. Higher CTR from the same ranking position = more traffic without needing to rank higher.',
  },
]

export default function TechnicalSEOGuidePage() {
  return (
    <div className="min-h-screen bg-[#F2F2EF]">
      <nav className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between border-b-2 border-[#111110]">
        <Link href="/" className="font-[family-name:var(--font-heading)] text-3xl tracking-wider text-[#111110] uppercase">
          AuditBrief
        </Link>
        <Link href="/auth/signup" className="bg-[#B8FF00] text-[#111110] font-bold px-5 py-2.5 border-2 border-[#111110] uppercase tracking-wider text-sm font-[family-name:var(--font-ui)] inline-block hover:bg-[#A0E000] transition-colors">
          Start Free
        </Link>
      </nav>

      <section className="bg-[#111110] border-b-2 border-[#111110]">
        <div className="max-w-[768px] mx-auto px-6 py-16">
          <p className="font-[family-name:var(--font-ui)] text-xs text-[#B8FF00] uppercase tracking-widest mb-4">Technical SEO Guide</p>
          <h1 className="font-[family-name:var(--font-heading)] text-[#B8FF00] uppercase leading-none mb-6" style={{ fontSize: '52px' }}>
            Technical SEO: The Foundation That Makes Everything Else Work
          </h1>
          <p className="font-[family-name:var(--font-body)] text-[#E8E8E4] text-lg leading-relaxed">
            Great content and strong backlinks cannot compensate for a site Googlebot cannot crawl. Technical SEO is the multiplier for everything else. Get it right and every other investment in SEO performs better.
          </p>
        </div>
      </section>

      <section className="max-w-[768px] mx-auto px-6 py-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          Core Web Vitals in 2025
        </h2>
        <p className="font-[family-name:var(--font-body)] text-[#5A5A56] leading-relaxed mb-8">
          Core Web Vitals became a confirmed ranking signal in 2021. In 2024, INP replaced FID as the interactivity metric. These are the three signals Google measures in the field (real user data) and weights in the page experience ranking component.
        </p>
        <div className="space-y-0 border-2 border-[#111110] divide-y-2 divide-[#111110]">
          {coreWebVitals.map(v => (
            <div key={v.metric} className="p-6">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-[family-name:var(--font-heading)] text-[40px] text-[#B8FF00] leading-none [text-shadow:1px_1px_0_#111110]">{v.metric}</span>
                <div>
                  <span className="font-[family-name:var(--font-heading)] text-[22px] text-[#111110] uppercase">{v.name}</span>
                  <span className="font-[family-name:var(--font-ui)] text-xs font-semibold text-[#B8FF00] ml-3 [text-shadow:0.5px_0.5px_0_#111110]">Target: {v.target}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex gap-3">
                  <span className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#5A5A56] shrink-0 w-20">Measures</span>
                  <span className="font-[family-name:var(--font-body)] text-xs text-[#5A5A56] leading-relaxed">{v.whatItMeasures}</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#5A5A56] shrink-0 w-20">Causes</span>
                  <span className="font-[family-name:var(--font-body)] text-xs text-[#5A5A56] leading-relaxed">{v.commonCauses}</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#B8FF00] shrink-0 w-20 [text-shadow:0.5px_0.5px_0_#111110]">Fix</span>
                  <span className="font-[family-name:var(--font-body)] text-xs text-[#5A5A56] leading-relaxed">{v.fix}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          Crawlability: letting Google in
        </h2>
        <p className="font-[family-name:var(--font-body)] text-[#5A5A56] leading-relaxed mb-6">
          Crawlability is binary: either Googlebot can reach your pages or it cannot. These are the four checks that matter most.
        </p>
        <div className="border-2 border-[#111110] divide-y-2 divide-[#111110]">
          {crawlabilityChecks.map(item => (
            <div key={item.check} className="px-6 py-4">
              <span className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#111110] block mb-1">{item.check}</span>
              <span className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed">{item.detail}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          Indexability: getting into Google&apos;s index
        </h2>
        <p className="font-[family-name:var(--font-body)] text-[#5A5A56] leading-relaxed mb-6">
          Crawlable does not mean indexed. Google may crawl a page but choose not to include it in the index. The most common indexability issues:
        </p>
        <div className="border-2 border-[#111110]">
          <div className="grid grid-cols-[1fr_1fr] border-b-2 border-[#111110]">
            <div className="px-4 py-3 border-r-2 border-[#111110] font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#5A5A56]">Issue</div>
            <div className="px-4 py-3 font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#5A5A56]">Fix</div>
          </div>
          {[
            { issue: 'noindex tag on page you want ranked', fix: 'Remove the meta robots noindex tag or x-robots-tag header. Check GSC Coverage for "Excluded by noindex tag" pages.' },
            { issue: 'Canonical pointing to wrong URL', fix: 'Canonical should point to the preferred version of each page. Self-referencing canonicals are fine. Canonicals pointing to a different domain or incorrect URL confuse Google.' },
            { issue: 'Thin content duplicate pages', fix: 'Consolidate thin variations. Use canonical to point duplicates to the main version. Delete and 301-redirect if no unique value exists.' },
            { issue: 'Soft 404s', fix: 'Pages that return 200 status but contain "not found" or empty content. Google stops indexing these. Return a proper 404 or 410 status, or add meaningful content.' },
          ].map((row, i) => (
            <div key={i} className={`grid grid-cols-[1fr_1fr] ${i < 3 ? 'border-b-2 border-[#111110]' : ''}`}>
              <div className="px-4 py-3 border-r-2 border-[#111110] font-[family-name:var(--font-body)] text-xs text-[#111110] leading-relaxed">{row.issue}</div>
              <div className="px-4 py-3 font-[family-name:var(--font-body)] text-xs text-[#5A5A56] leading-relaxed">{row.fix}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <div className="border-2 border-[#111110] bg-[#111110] p-8">
          <p className="font-[family-name:var(--font-heading)] text-[#B8FF00] uppercase text-[28px] leading-tight mb-3">
            Find every technical issue in one report.
          </p>
          <p className="font-[family-name:var(--font-body)] text-[#E8E8E4] text-sm leading-relaxed mb-6">
            AuditBrief flags all technical SEO issues — crawlability, indexability, Core Web Vitals, schema, mobile — in a single PDF. Under 2 minutes.
          </p>
          <Link href="/auth/signup" className="bg-[#B8FF00] text-[#111110] font-bold px-6 py-3 inline-block hover:bg-[#A0E000] transition-colors font-[family-name:var(--font-ui)] uppercase tracking-wider text-sm border-2 border-[#B8FF00]">
            Run Your Free Technical Audit →
          </Link>
        </div>
      </section>

      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          Schema markup: which types matter most
        </h2>
        <p className="font-[family-name:var(--font-body)] text-[#5A5A56] leading-relaxed mb-6">
          Schema markup does not directly improve rankings but unlocks rich results in SERPs — the visual enhancements that increase click-through rate from the same ranking position.
        </p>
        <div className="border-2 border-[#111110] divide-y-2 divide-[#111110]">
          {schemaTypes.map(s => (
            <div key={s.type} className="px-6 py-4 grid grid-cols-[120px_1fr] gap-4">
              <span className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#111110]">{s.type}</span>
              <span className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed">{s.use}</span>
            </div>
          ))}
        </div>
      </section>

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

      <section className="max-w-[768px] mx-auto px-6 pb-20">
        <div className="bg-[#B8FF00] border-2 border-[#111110] p-10 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[36px] leading-tight mb-3">
            Technical issues found fast.
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#111110] text-sm leading-relaxed mb-6 max-w-[400px] mx-auto">
            AuditBrief runs a complete technical SEO audit and generates a PDF report in under 2 minutes. First audit is free.
          </p>
          <Link href="/auth/signup" className="bg-[#111110] text-[#B8FF00] font-bold px-8 py-4 inline-block hover:bg-[#333] transition-colors font-[family-name:var(--font-ui)] uppercase tracking-wider text-sm">
            Run Your Free Technical Audit →
          </Link>
        </div>
      </section>

      <footer className="max-w-[1200px] mx-auto px-6 py-10 border-t-2 border-[#111110]">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Link href="/" className="font-[family-name:var(--font-heading)] text-xl text-[#5A5A56] uppercase tracking-wider">AuditBrief</Link>
          <div className="flex items-center gap-6 font-[family-name:var(--font-ui)] text-xs text-[#5A5A56] uppercase tracking-wider">
            <Link href="/guides/how-to-do-seo-audit" className="hover:text-[#111110] transition-colors">SEO Audit Guide</Link>
            <Link href="/guides/seo-audit-checklist" className="hover:text-[#111110] transition-colors">Checklist</Link>
            <Link href="/guides/seo-audit-for-clients" className="hover:text-[#111110] transition-colors">Client Audits</Link>
            <Link href="/auth/login" className="hover:text-[#111110] transition-colors">Login</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
