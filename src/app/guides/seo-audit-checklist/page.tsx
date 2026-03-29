import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SEO Audit Checklist: 47 Points to Check in 2025 | AuditBrief',
  description: 'The complete SEO audit checklist — 47 points across technical SEO, on-page, content quality, backlinks, and local. Use it before every audit.',
}

const categories = [
  {
    name: 'Technical SEO',
    count: 10,
    items: [
      'robots.txt is present, accessible, and not blocking important resources',
      'XML sitemap exists, is submitted to GSC, and contains only indexable URLs',
      'All pages served over HTTPS with valid SSL certificate',
      'Site passes Google\'s mobile-friendliness test',
      'Core Web Vitals pass: LCP < 2.5s, INP < 200ms, CLS < 0.1',
      'Crawl budget is not wasted on low-value pages (pagination, filters, tags)',
      'No redirect chains longer than 2 hops; no redirect loops',
      'Canonical tags are present and correct on all key pages',
      'Hreflang implemented correctly (if multilingual)',
      'Structured data validates without errors in Rich Results Test',
    ],
  },
  {
    name: 'On-Page SEO',
    count: 12,
    items: [
      'Every page has a unique title tag between 50–60 characters',
      'Every page has a unique meta description between 120–155 characters',
      'Each page has exactly one H1 tag containing the primary keyword',
      'Header hierarchy is logical: H1 → H2 → H3, no skipped levels',
      'Primary keyword appears in the first 100 words of body content',
      'Content length is comparable to or exceeds top-ranking competitors',
      'Internal links use descriptive anchor text (not "click here")',
      'All images have descriptive alt text with relevant keywords where natural',
      'URLs are short, lowercase, hyphen-separated, and keyword-rich',
      'Page speed scores 80+ on PageSpeed Insights (desktop and mobile)',
      'Schema markup matches the content type (Article, Product, FAQ, etc.)',
      'No duplicate content detected across pages or domains',
    ],
  },
  {
    name: 'Content Quality',
    count: 8,
    items: [
      'No thin content pages (under 300 words) are indexed by Google',
      'Keyword cannibalization check: no two pages targeting the same primary term',
      'Key content pages have been updated within the last 12 months',
      'Topic coverage is comprehensive — no obvious subtopics left unaddressed',
      'E-E-A-T signals present: author bio, credentials, about page, external mentions',
      'Author information visible on blog posts and opinion content',
      'Content gaps identified vs top 3 ranking competitors for target terms',
      'No factually outdated information on evergreen pages (stats, laws, prices)',
    ],
  },
  {
    name: 'Backlinks',
    count: 8,
    items: [
      'Domain rating or authority is competitive for the target niche',
      'Spam score is below 10% (Moz) or no manual action warnings in GSC',
      'Link velocity is natural — no sudden spikes suggesting bought links',
      'Anchor text distribution is natural — no over-optimisation on exact-match',
      'Toxic or low-quality links identified and disavowed if necessary',
      'No significant broken backlinks pointing to 404 pages (redirect or fix)',
      'Unlinked brand mentions identified as link-building opportunities',
      'Competitor backlink gap analysis completed — new targets identified',
    ],
  },
  {
    name: 'Local & Technical Extras',
    count: 9,
    items: [
      'Google Business Profile is claimed, verified, and fully optimised (if local)',
      'NAP (Name, Address, Phone) is consistent across all citations and directories',
      'Local citations match GBP data exactly — no abbreviation mismatches',
      'Core Web Vitals pass on mobile specifically (Google uses mobile-first indexing)',
      'Page experience signals pass: no intrusive interstitials, good CLS on mobile',
      'HTTPS security headers present: HSTS, X-Frame-Options, Content-Security-Policy',
      'XML sitemap was regenerated and resubmitted after any major content changes',
      'Orphan pages identified — every page has at least one internal link pointing to it',
      'GSC shows zero crawl errors on important page types',
    ],
  },
]

const faqs = [
  {
    q: 'How do I use this SEO audit checklist?',
    a: 'Work through each category in order — technical first, then on-page, then content, backlinks, and local. Fix critical technical issues before spending time on content improvements. Use a spreadsheet to track status (pass/fail/in progress) for each item.',
  },
  {
    q: 'Do I need to check all 47 points for every audit?',
    a: 'Not always. For a quick monthly health check, focus on the Technical SEO and On-Page sections (22 points). Save the full 47-point audit for quarterly reviews or before a major site change like a redesign or domain migration.',
  },
  {
    q: 'Who should handle each section of the checklist?',
    a: 'Technical SEO items typically require a developer or someone comfortable with HTML and GSC. On-page and content items can be handled by an SEO or content specialist. Backlink analysis is usually the SEO lead. Local items can be delegated to a marketing assistant with clear instructions.',
  },
  {
    q: 'What is the fastest way to complete this checklist?',
    a: 'Run Screaming Frog first — it checks most technical and on-page items automatically. Then pull the GSC Coverage and Core Web Vitals reports. For backlinks, an Ahrefs or Semrush export covers that section in minutes. The whole process takes 2–3 hours with the right tools, or under 2 minutes with AuditBrief.',
  },
]

export default function SEOAuditChecklistPage() {
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
          <p className="font-[family-name:var(--font-ui)] text-xs text-[#B8FF00] uppercase tracking-widest mb-4">SEO Audit Checklist</p>
          <h1 className="font-[family-name:var(--font-heading)] text-[#B8FF00] uppercase leading-none mb-6" style={{ fontSize: '52px' }}>
            SEO Audit Checklist: 47 Points to Check in 2025
          </h1>
          <p className="font-[family-name:var(--font-body)] text-[#E8E8E4] text-lg leading-relaxed">
            The complete SEO audit checklist, organised by category. Work through each section in order — technical issues first, content and backlinks after.
          </p>
        </div>
      </section>

      {/* Checklist sections */}
      {categories.map((cat, catIndex) => (
        <section key={cat.name} className="max-w-[768px] mx-auto px-6 py-10">
          <div className="flex items-baseline gap-4 mb-4 border-b-2 border-[#111110] pb-3">
            <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[28px]">
              {cat.name}
            </h2>
            <span className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#5A5A56]">
              {cat.count} items
            </span>
          </div>
          <div className="border-2 border-[#111110] divide-y-2 divide-[#111110]">
            {cat.items.map((item, i) => (
              <div key={i} className="px-4 py-3 flex items-start gap-3">
                <span className="font-[family-name:var(--font-body)] text-[#B8FF00] text-lg leading-none mt-0.5 [text-shadow:0.5px_0.5px_0_#111110] shrink-0">☐</span>
                <span className="font-[family-name:var(--font-body)] text-sm text-[#111110] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          {/* Insert CTA box after on-page section (index 1) */}
          {catIndex === 1 && (
            <div className="border-2 border-[#111110] bg-[#111110] p-6 mt-8">
              <p className="font-[family-name:var(--font-heading)] text-[#B8FF00] uppercase text-[22px] leading-tight mb-2">
                Automate the first 22 checks.
              </p>
              <p className="font-[family-name:var(--font-body)] text-[#E8E8E4] text-sm leading-relaxed mb-4">
                AuditBrief checks technical SEO and on-page items automatically — then generates a branded PDF report in under 2 minutes.
              </p>
              <Link href="/auth/signup" className="bg-[#B8FF00] text-[#111110] font-bold px-6 py-3 inline-block hover:bg-[#A0E000] transition-colors font-[family-name:var(--font-ui)] uppercase tracking-wider text-sm border-2 border-[#B8FF00]">
                Run Your Free SEO Audit →
              </Link>
            </div>
          )}
        </section>
      ))}

      {/* How to use */}
      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          How to use this checklist
        </h2>
        <div className="border-2 border-[#111110] divide-y-2 divide-[#111110]">
          {[
            { step: '01', title: 'Technical first', desc: 'Fix any crawl, indexing, or speed issues before anything else. None of the other work matters if Googlebot cannot access your pages.' },
            { step: '02', title: 'On-page before content', desc: 'Make sure the metadata and structure signals are correct. This is lower effort than rewriting content and has immediate impact.' },
            { step: '03', title: 'Content gaps and quality', desc: 'Once technical and on-page are solid, assess whether the content itself is worth ranking — length, depth, E-E-A-T, freshness.' },
            { step: '04', title: 'Backlinks last', desc: 'Backlink work is a longer game. Fix on-site issues first so that any links you build point to pages that are fully optimised.' },
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
            Check all 47 points automatically.
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#111110] text-sm leading-relaxed mb-6 max-w-[400px] mx-auto">
            AuditBrief runs the technical and on-page checks automatically and produces a client-ready PDF. First audit is free.
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
            <Link href="/guides/seo-audit-for-clients" className="hover:text-[#111110] transition-colors">Client Audits</Link>
            <Link href="/guides/seo-audit-report-template" className="hover:text-[#111110] transition-colors">Report Template</Link>
            <Link href="/auth/login" className="hover:text-[#111110] transition-colors">Login</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
