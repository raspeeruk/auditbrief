import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Content Audit: How to Identify What to Keep, Update, and Delete | AuditBrief',
  description: 'The exact content audit process — export all URLs, enrich with GSC data, apply the 4-category framework, and find the high-potential pages worth investing in.',
  keywords: ['content audit', 'website content audit', 'content audit seo', 'thin content', 'keyword cannibalization'],
}

const contentCategories = [
  {
    category: 'Keep',
    signal: 'Performing well — good traffic, rankings, or conversion',
    action: 'Maintain and protect. Add internal links from new content to reinforce authority. Update statistics and dates annually.',
    examples: 'Your top 20% of pages by organic traffic. Cornerstone content that ranks for competitive keywords.',
  },
  {
    category: 'Improve',
    signal: 'Has potential — impressions in GSC but low CTR, or ranking on page 2-3',
    action: 'This is your highest-ROI bucket. Improve the title tag and meta description, expand the content, add FAQ schema, and build internal links to it.',
    examples: 'Pages ranking positions 8-20 with decent impression volume. Content with good backlinks but low traffic.',
  },
  {
    category: 'Consolidate',
    signal: 'Thin content that partially covers a topic already covered better elsewhere',
    action: 'Merge into the better page via 301 redirect. Incorporate any unique sections into the destination page. Consolidation typically produces a ranking improvement within 4-8 weeks.',
    examples: 'Multiple short blog posts on the same topic. Product variants with near-identical descriptions. Location pages generated from a template with no unique content.',
  },
  {
    category: 'Delete',
    signal: 'Zero traffic, zero links, no purpose — actively harming crawl budget',
    action: '301 redirect to the most relevant page on the site, or return a 410 Gone if nothing is relevant. Never leave a 404 at a previously indexed URL without a redirect.',
    examples: 'Old press releases from 5+ years ago. Event pages for events that have passed. Tag and category archive pages with no content.',
  },
]

const thinContentSignals = [
  { signal: 'Under 300 words on an indexed URL', detail: 'Not a hard rule — a 200-word page can rank if it answers the query perfectly. But if the page has under 300 words and isn\'t ranking, the content is almost certainly the reason.' },
  { signal: 'Duplicate boilerplate across multiple pages', detail: 'Location service pages with only the city name swapped. Product pages using manufacturer descriptions. Google identifies this as low-quality content at the site level, not just page level.' },
  { signal: 'No unique value vs competitors', detail: 'Affiliate pages that just link to products without reviews, comparisons, or data. Listicles that repeat what the top 3 results already say. If you can\'t explain what makes your page better than what\'s already ranking, it is a thin page.' },
  { signal: 'High crawl + zero clicks in GSC', detail: 'Google is crawling it regularly (which costs crawl budget) but no one ever clicks through. This is the definition of a zombie page. Consolidate, improve, or delete.' },
]

const cannibalizationFixes = [
  { scenario: 'Two pages with similar keyword intent', fix: 'Merge the weaker into the stronger. 301 redirect. Add a canonical if the merge is complex. The combined page almost always outranks both.' },
  { scenario: 'Category page vs blog post competing', fix: 'Decide which URL should rank for the commercial keyword (usually the category page). Noindex the blog post or rewrite it to target an informational variant of the query.' },
  { scenario: 'Homepage cannibalising a landing page', fix: 'Homepage should target the brand name and one core category keyword. Landing pages own specific product/service keywords. Add a canonical on landing pages pointing to themselves, not the homepage.' },
]

const faqs = [
  {
    q: 'How long does a content audit take?',
    a: 'For a 50-100 page site: 2-4 hours with the right tools. For a 500-page site: a full day. The time goes into exporting URLs, enriching with GSC data (impressions, clicks, average position), and making the keep/improve/consolidate/delete decision for each page. Automated tools can do the data enrichment in minutes — the judgement calls are still manual.',
  },
  {
    q: 'Should I delete old blog posts?',
    a: 'Not automatically. Delete only when three conditions are met: zero organic traffic in the last 12 months, zero referring domains pointing to the post, and no way to make it useful by updating it. If a post has even one relevant backlink, redirect it rather than deleting it — you lose the link equity otherwise. If the post covers a topic you want to own, rewrite it rather than deleting it. The URLs with history are more valuable than a new URL.',
  },
  {
    q: 'What\'s keyword cannibalization?',
    a: 'Keyword cannibalization is when two or more pages on the same site compete for the same search query. Google cannot easily decide which page to rank, so it typically ranks neither well. Signals: your ranking for a keyword fluctuates between two different URLs in GSC, or two of your pages appear in the same SERP for a target keyword. The fix is almost always to consolidate: redirect one page into the other so all signals point to a single URL.',
  },
  {
    q: 'How do I find my highest-potential content?',
    a: 'In Google Search Console: filter by pages with more than 500 impressions per month but a click-through rate below 3%. These are pages where Google is showing your result to users, but users are not clicking. They already have the visibility — they need better title tags, meta descriptions, or content to earn the click. This is the fastest wins bucket in any content audit.',
  },
]

export default function WebsiteContentAuditGuidePage() {
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
          <p className="font-[family-name:var(--font-ui)] text-xs text-[#B8FF00] uppercase tracking-widest mb-4">Content Audit Guide</p>
          <h1 className="font-[family-name:var(--font-heading)] text-[#B8FF00] uppercase leading-none mb-6" style={{ fontSize: '52px' }}>
            Content Audit: Keep, Update, or Delete?
          </h1>
          <p className="font-[family-name:var(--font-body)] text-[#E8E8E4] text-lg leading-relaxed">
            Since Google&apos;s Helpful Content updates, thin content is an algorithmic liability — not just a missed opportunity. Here is the exact process for auditing your content, applying the 4-category framework, and finding the pages worth investing in.
          </p>
        </div>
      </section>

      <section className="max-w-[768px] mx-auto px-6 py-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          The content audit process
        </h2>
        <p className="font-[family-name:var(--font-body)] text-[#5A5A56] leading-relaxed mb-8">
          A content audit has four steps. The data work is largely automated once you know the tools. The judgement is manual — and that is where the value is.
        </p>
        <div className="border-2 border-[#111110] divide-y-2 divide-[#111110]">
          {[
            { step: '01', title: 'Export all URLs', detail: 'Crawl your site with Screaming Frog (free up to 500 URLs) to get every indexed URL. Export as CSV. This is your working document.' },
            { step: '02', title: 'Enrich with GSC data', detail: 'In Google Search Console, export performance data for the last 12 months: impressions, clicks, average position, and CTR per page. Join to your URL list using a VLOOKUP or XLOOKUP on the URL column.' },
            { step: '03', title: 'Apply the 4-category framework', detail: 'For each page, assign: Keep, Improve, Consolidate, or Delete. Use the signals below. Anything with 0 clicks and 0 impressions in 12 months starts in the Delete column.' },
            { step: '04', title: 'Execute and monitor', detail: 'Redirects first (to prevent 404s), then rewrites, then new content to replace deleted pages. Monitor GSC for indexing changes over the following 4-8 weeks.' },
          ].map(item => (
            <div key={item.step} className="p-6">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-[family-name:var(--font-heading)] text-[40px] text-[#B8FF00] leading-none [text-shadow:1px_1px_0_#111110]">{item.step}</span>
                <h3 className="font-[family-name:var(--font-heading)] text-[22px] text-[#111110] uppercase">{item.title}</h3>
              </div>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          The 4-category framework
        </h2>
        <div className="space-y-4">
          {contentCategories.map(cat => (
            <div key={cat.category} className="border-2 border-[#111110]">
              <div className="bg-[#111110] px-6 py-3">
                <span className="font-[family-name:var(--font-heading)] text-[#B8FF00] uppercase text-[24px]">{cat.category}</span>
              </div>
              <div className="px-6 py-5 space-y-3">
                <div className="flex gap-3">
                  <span className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#5A5A56] shrink-0 w-16">Signal</span>
                  <span className="font-[family-name:var(--font-body)] text-sm text-[#111110] leading-relaxed">{cat.signal}</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#B8FF00] shrink-0 w-16 [text-shadow:0.5px_0.5px_0_#111110]">Action</span>
                  <span className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed">{cat.action}</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#5A5A56] shrink-0 w-16">Examples</span>
                  <span className="font-[family-name:var(--font-body)] text-xs text-[#5A5A56] leading-relaxed">{cat.examples}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <div className="border-2 border-[#111110] bg-[#111110] p-8">
          <p className="font-[family-name:var(--font-heading)] text-[#B8FF00] uppercase text-[28px] leading-tight mb-3">
            Content quality assessed in every audit.
          </p>
          <p className="font-[family-name:var(--font-body)] text-[#E8E8E4] text-sm leading-relaxed mb-6">
            AuditBrief flags thin content, duplicate pages, and cannibalization issues in its audit report. Under 2 minutes, PDF output ready to share.
          </p>
          <Link href="/auth/signup" className="bg-[#B8FF00] text-[#111110] font-bold px-6 py-3 inline-block hover:bg-[#A0E000] transition-colors font-[family-name:var(--font-ui)] uppercase tracking-wider text-sm border-2 border-[#B8FF00]">
            Run Your Free Content Audit →
          </Link>
        </div>
      </section>

      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          Thin content signals to look for
        </h2>
        <div className="border-2 border-[#111110] divide-y-2 divide-[#111110]">
          {thinContentSignals.map(s => (
            <div key={s.signal} className="px-6 py-4">
              <span className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#111110] block mb-1">{s.signal}</span>
              <span className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed">{s.detail}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          Fixing keyword cannibalization
        </h2>
        <div className="border-2 border-[#111110] divide-y-2 divide-[#111110]">
          {cannibalizationFixes.map(row => (
            <div key={row.scenario} className="px-6 py-4 grid grid-cols-[1fr_1fr] gap-4">
              <div className="font-[family-name:var(--font-body)] text-sm text-[#111110] leading-relaxed">{row.scenario}</div>
              <div className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed">{row.fix}</div>
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
            Know exactly what to fix.
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#111110] text-sm leading-relaxed mb-6 max-w-[400px] mx-auto">
            AuditBrief surfaces thin content, duplicate pages, and cannibalization in minutes. First audit free.
          </p>
          <Link href="/auth/signup" className="bg-[#111110] text-[#B8FF00] font-bold px-8 py-4 inline-block hover:bg-[#333] transition-colors font-[family-name:var(--font-ui)] uppercase tracking-wider text-sm">
            Run Your Free Content Audit →
          </Link>
        </div>
      </section>

      <footer className="max-w-[1200px] mx-auto px-6 py-10 border-t-2 border-[#111110]">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Link href="/" className="font-[family-name:var(--font-heading)] text-xl text-[#5A5A56] uppercase tracking-wider">AuditBrief</Link>
          <div className="flex items-center gap-6 font-[family-name:var(--font-ui)] text-xs text-[#5A5A56] uppercase tracking-wider">
            <Link href="/guides/how-to-do-seo-audit" className="hover:text-[#111110] transition-colors">SEO Audit Guide</Link>
            <Link href="/guides/seo-audit-checklist" className="hover:text-[#111110] transition-colors">Checklist</Link>
            <Link href="/guides/technical-seo-guide" className="hover:text-[#111110] transition-colors">Technical SEO</Link>
            <Link href="/auth/login" className="hover:text-[#111110] transition-colors">Login</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
