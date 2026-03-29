import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ecommerce SEO Audit: The 8 Issues That Kill Online Store Rankings | AuditBrief',
  description: 'The 8 ecommerce SEO issues that tank rankings — faceted navigation, thin product pages, pagination, category optimisation, image SEO, internal linking, site speed, and schema markup.',
  keywords: ['ecommerce SEO audit', 'ecommerce SEO', 'shopify SEO', 'woocommerce SEO', 'product page SEO'],
}

const issues = [
  {
    num: '01',
    title: 'Duplicate content from faceted navigation',
    desc: 'Faceted navigation (filters for size, colour, price, brand) creates thousands of unique URLs that contain near-identical content. A site with 500 products and 10 filter options can generate 50,000+ URLs — most of which are duplicate pages Google will either deindex or ignore.',
    fix: 'Use robots.txt to disallow crawling of filter URLs, or add noindex to filtered pages via meta robots tag. If a filtered view has genuine SEO value (e.g., "red running shoes" as a search term), make it a proper category page, not a filter URL.',
    impact: 'High',
  },
  {
    num: '02',
    title: 'Thin product descriptions',
    desc: 'Using the manufacturer\'s product description — the same text on every retailer\'s site — gives Google no reason to rank you over competitors. Every product with duplicate copy is a page Google will deprioritise. With thousands of products, this can suppress the entire domain.',
    fix: 'Write unique descriptions for your top 20% of products (by revenue or traffic potential) first. For long-tail products, use a structured template that forces unique fields: material, use case, sizing notes, brand story. Even 100 genuinely unique words beats 400 copied words.',
    impact: 'High',
  },
  {
    num: '03',
    title: 'Pagination handled wrong',
    desc: 'Google deprecated rel=next/prev support in 2019. Many ecommerce sites still rely on it — meaning their paginated category pages (/category?page=2, /category?page=3) are treated as separate, thin pages without a clear signal of their relationship to page 1.',
    fix: 'Add a self-referencing canonical to each paginated page pointing to that page\'s own URL (not to page 1). Load more / infinite scroll is not a reliable SEO solution — paginated URLs that Google can crawl are preferable. If pages 2+ have no link equity, noindex them and rely on the sitemap for discovery.',
    impact: 'Medium',
  },
  {
    num: '04',
    title: 'No category page optimisation',
    desc: 'Category pages rank better than product pages for head terms ("women\'s running shoes" vs "Nike Air Zoom Pegasus 40 Women\'s UK 6"). Most ecommerce stores leave their category pages as bare product grids with no content — which means they have no way to rank for the highest-volume keywords in their market.',
    fix: 'Add 150-300 words of editorial content above or below the product grid on each major category page. Target the head keyword for that category in the H1 and title tag. Add FAQ schema with common questions about that product category. Internal link to subcategories.',
    impact: 'High',
  },
  {
    num: '05',
    title: 'Image SEO ignored',
    desc: 'Ecommerce sites are image-heavy. Most upload product images as "IMG_4521.jpg" with no alt text. This misses the Google Images traffic channel (which can be 10-30% of traffic for visual products) and signals poor technical quality to Google\'s crawlers.',
    fix: 'Rename image files to descriptive slugs: "nike-air-zoom-pegasus-40-womens-black-uk6.jpg". Write descriptive alt text for every product image: "Nike Air Zoom Pegasus 40 Women\'s running shoe in black, UK size 6". Submit an image sitemap to GSC.',
    impact: 'Medium',
  },
  {
    num: '06',
    title: 'Flat internal linking architecture',
    desc: 'Many ecommerce sites link every product directly from the homepage or navigation, creating a flat structure where all pages appear equally important to Google. Category pages should aggregate link equity and pass it to subcategory and product pages.',
    fix: 'The correct hierarchy: Homepage → Category → Subcategory → Product. Homepage should not link to individual products except bestsellers. Category pages should link to subcategories. Subcategory pages pass equity to products. Add "You may also like" and "Frequently bought together" links on product pages.',
    impact: 'Medium',
  },
  {
    num: '07',
    title: 'Page speed on mobile',
    desc: 'Shopify and WooCommerce themes often load 2-4MB of JavaScript, multiple tracking pixels, social widgets, and upsell apps. On mobile — where Google uses field data for Core Web Vitals scoring — many ecommerce sites fail all three metrics. This directly suppresses rankings.',
    fix: 'Audit with PageSpeed Insights for mobile. Remove unused apps and scripts (especially those that load on every page). Optimise the hero image as WebP at correct dimensions. Use a CDN. Defer non-critical JavaScript. Consider a headless or lightweight theme if the default theme cannot be optimised.',
    impact: 'High',
  },
  {
    num: '08',
    title: 'Schema markup missing',
    desc: 'Ecommerce sites without structured data miss rich results: star ratings, price, availability, and breadcrumbs in SERPs. These are significant CTR drivers. A product page with star ratings in the SERP gets 15-30% more clicks than the same position without them.',
    fix: 'Implement Product schema with price, availability, and review data on all product pages. Add BreadcrumbList schema to show navigation hierarchy in SERPs. Use FAQ schema on category pages with common questions. Validate with Google\'s Rich Results Test.',
    impact: 'Medium',
  },
]

const faqs = [
  {
    q: 'How do I handle faceted navigation for SEO?',
    a: 'The safest approach: noindex all filter URLs by default, then selectively index filter combinations that have genuine search demand. For example, "women\'s red dresses" might have 5,000 searches/month — worth making a proper category page. "Women\'s dresses, red, size 12, under £50, cotton" has no search demand — noindex it. Use GSC to find filter URLs that are already receiving impressions before you noindex them.',
  },
  {
    q: 'Should product pages or category pages rank for keywords?',
    a: 'Category pages should rank for head terms (high volume, less specific): "running shoes", "men\'s trainers". Product pages should rank for long-tail terms (specific models, SKUs): "Nike Pegasus 40 Women\'s size 7". The mistake is trying to rank product pages for category keywords — Google nearly always prefers the category page because it gives users more options. Align your keyword targeting to the page type.',
  },
  {
    q: 'How long do ecommerce SEO improvements take?',
    a: 'Technical fixes (canonical errors, noindex issues, robots.txt errors) show impact in 2-6 weeks as Google re-crawls affected pages. On-page improvements (category page content, title tags) typically show ranking movement in 4-12 weeks. Link building results appear over 3-6 months. Image SEO and schema markup can drive incremental improvements within 4-8 weeks of implementation. The highest-ROI ecommerce SEO actions — fixing faceted navigation duplicates and adding category page content — usually show measurable improvement within 8 weeks.',
  },
  {
    q: 'Do product reviews help rankings?',
    a: 'Yes, in two ways. First, user-generated review content adds unique, keyword-rich text to your product pages — content that Google values because it is genuine and regularly updated. Second, Product schema with aggregate review data unlocks rich results in SERPs (star ratings), which increase CTR from the same ranking position. Third-party review platforms (Trustpilot, Yotpo, Reviews.io) that pass schema data to your product pages are worth the cost for this reason alone.',
  },
]

export default function EcommerceSEOAuditPage() {
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
          <p className="font-[family-name:var(--font-ui)] text-xs text-[#B8FF00] uppercase tracking-widest mb-4">Ecommerce SEO Guide</p>
          <h1 className="font-[family-name:var(--font-heading)] text-[#B8FF00] uppercase leading-none mb-6" style={{ fontSize: '52px' }}>
            Ecommerce SEO Audit: 8 Issues That Kill Rankings
          </h1>
          <p className="font-[family-name:var(--font-body)] text-[#E8E8E4] text-lg leading-relaxed">
            Ecommerce SEO is different from standard SEO. Thousands of pages, faceted navigation, thin product descriptions, and heavy themes create problems that destroy rankings at scale. Here are the 8 issues that matter most — and exactly how to fix them.
          </p>
        </div>
      </section>

      <section className="max-w-[768px] mx-auto px-6 py-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-8 border-b-2 border-[#111110] pb-4">
          The 8 issues — with impact rating and fix
        </h2>
        <div className="space-y-0 border-2 border-[#111110] divide-y-2 divide-[#111110]">
          {issues.map(issue => (
            <div key={issue.num} className="p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-baseline gap-4">
                  <span className="font-[family-name:var(--font-heading)] text-[40px] text-[#B8FF00] leading-none [text-shadow:1px_1px_0_#111110]">{issue.num}</span>
                  <h3 className="font-[family-name:var(--font-heading)] text-[20px] text-[#111110] uppercase leading-tight">{issue.title}</h3>
                </div>
                <span className={`font-[family-name:var(--font-ui)] text-[9px] font-bold uppercase tracking-wider px-2 py-1 border shrink-0 ${issue.impact === 'High' ? 'bg-[#B8FF00] border-[#111110] text-[#111110]' : 'border-[#5A5A56] text-[#5A5A56]'}`}>
                  {issue.impact} impact
                </span>
              </div>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed mb-4">{issue.desc}</p>
              <div className="flex gap-3">
                <span className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#B8FF00] shrink-0 [text-shadow:0.5px_0.5px_0_#111110]">Fix</span>
                <p className="font-[family-name:var(--font-body)] text-xs text-[#5A5A56] leading-relaxed">{issue.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <div className="border-2 border-[#111110] bg-[#111110] p-8">
          <p className="font-[family-name:var(--font-heading)] text-[#B8FF00] uppercase text-[28px] leading-tight mb-3">
            Audit your ecommerce site in 2 minutes.
          </p>
          <p className="font-[family-name:var(--font-body)] text-[#E8E8E4] text-sm leading-relaxed mb-6">
            AuditBrief identifies all 8 ecommerce SEO issues — from duplicate content to schema markup gaps — in a single PDF report you can act on immediately.
          </p>
          <Link href="/auth/signup" className="bg-[#B8FF00] text-[#111110] font-bold px-6 py-3 inline-block hover:bg-[#A0E000] transition-colors font-[family-name:var(--font-ui)] uppercase tracking-wider text-sm border-2 border-[#B8FF00]">
            Run Your Free Ecommerce Audit →
          </Link>
        </div>
      </section>

      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          Priority order — where to start
        </h2>
        <p className="font-[family-name:var(--font-body)] text-[#5A5A56] leading-relaxed mb-6">
          Not all 8 issues are equal. Fix in this order for fastest ranking improvement:
        </p>
        <div className="border-2 border-[#111110]">
          <div className="grid grid-cols-[60px_1fr_120px] border-b-2 border-[#111110]">
            <div className="px-4 py-3 border-r-2 border-[#111110] font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#5A5A56]">Priority</div>
            <div className="px-4 py-3 border-r-2 border-[#111110] font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#5A5A56]">Issue</div>
            <div className="px-4 py-3 font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#5A5A56]">Timeline</div>
          </div>
          {[
            { priority: '1', issue: 'Faceted navigation duplicates', timeline: '2-4 weeks' },
            { priority: '2', issue: 'Category page content', timeline: '4-8 weeks' },
            { priority: '3', issue: 'Thin product descriptions (top 20%)', timeline: 'Ongoing' },
            { priority: '4', issue: 'Page speed / Core Web Vitals', timeline: '2-6 weeks' },
            { priority: '5', issue: 'Schema markup (Product, BreadcrumbList)', timeline: '4-8 weeks' },
            { priority: '6', issue: 'Image SEO', timeline: '4-8 weeks' },
            { priority: '7', issue: 'Internal linking architecture', timeline: '4-12 weeks' },
            { priority: '8', issue: 'Pagination canonicals', timeline: '2-4 weeks' },
          ].map((row, i) => (
            <div key={i} className={`grid grid-cols-[60px_1fr_120px] ${i < 7 ? 'border-b-2 border-[#111110]' : ''}`}>
              <div className="px-4 py-3 border-r-2 border-[#111110] font-[family-name:var(--font-heading)] text-2xl text-[#B8FF00] [text-shadow:1px_1px_0_#111110]">{row.priority}</div>
              <div className="px-4 py-3 border-r-2 border-[#111110] font-[family-name:var(--font-body)] text-sm text-[#111110]">{row.issue}</div>
              <div className="px-4 py-3 font-[family-name:var(--font-body)] text-xs text-[#5A5A56]">{row.timeline}</div>
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
            Find what&apos;s killing your store rankings.
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#111110] text-sm leading-relaxed mb-6 max-w-[400px] mx-auto">
            AuditBrief runs a complete ecommerce SEO audit and generates a prioritised PDF report. First audit free.
          </p>
          <Link href="/auth/signup" className="bg-[#111110] text-[#B8FF00] font-bold px-8 py-4 inline-block hover:bg-[#333] transition-colors font-[family-name:var(--font-ui)] uppercase tracking-wider text-sm">
            Run Your Free Ecommerce Audit →
          </Link>
        </div>
      </section>

      <footer className="max-w-[1200px] mx-auto px-6 py-10 border-t-2 border-[#111110]">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Link href="/" className="font-[family-name:var(--font-heading)] text-xl text-[#5A5A56] uppercase tracking-wider">AuditBrief</Link>
          <div className="flex items-center gap-6 font-[family-name:var(--font-ui)] text-xs text-[#5A5A56] uppercase tracking-wider">
            <Link href="/guides/how-to-do-seo-audit" className="hover:text-[#111110] transition-colors">SEO Audit Guide</Link>
            <Link href="/guides/technical-seo-guide" className="hover:text-[#111110] transition-colors">Technical SEO</Link>
            <Link href="/guides/local-seo-audit-guide" className="hover:text-[#111110] transition-colors">Local SEO</Link>
            <Link href="/auth/login" className="hover:text-[#111110] transition-colors">Login</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
