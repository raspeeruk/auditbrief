import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Complete SEO Audit Checklist for 2026 (87 Points) | AuditBrief',
  description: 'A comprehensive 87-point SEO audit checklist covering technical SEO, on-page, content, backlinks, and structured data. Use it manually or automate it with AuditBrief.',
  openGraph: {
    title: 'The Complete SEO Audit Checklist for 2026 (87 Points)',
    description: 'A comprehensive 87-point SEO audit checklist covering technical SEO, on-page, content, backlinks, and structured data.',
    type: 'article',
  },
}

const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 py-2 border-b border-[#C8C8C4] last:border-0">
    <span className="mt-1 flex-shrink-0 w-4 h-4 border-2 border-[#111110] bg-[#F2F2EF]" />
    <span className="font-[family-name:var(--font-body)] text-sm text-[#111110] leading-relaxed">{children}</span>
  </li>
)

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="label mb-2">{children}</p>
)

export default function SEOAuditChecklist() {
  return (
    <div className="min-h-screen bg-[#F2F2EF]">
      <nav className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between border-b-2 border-[#111110]">
        <Link href="/" className="font-[family-name:var(--font-heading)] text-3xl tracking-wider text-[#111110] uppercase">
          AuditBrief
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/guides/how-to-do-seo-audit" className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-widest text-[#5A5A56] hover:text-[#111110] transition-colors hidden md:block">
            How-To Guide
          </Link>
          <Link href="https://auditpdf.com" className="btn-accent inline-block">
            Run Free Audit
          </Link>
        </div>
      </nav>

      <main className="max-w-[860px] mx-auto px-6 pt-14 pb-24">
        <SectionLabel>SEO Audit Guide</SectionLabel>
        <h1 className="font-[family-name:var(--font-heading)] text-[#111110] leading-none uppercase mb-6" style={{ fontSize: '68px' }}>
          The Complete SEO Audit Checklist for 2026 (87 Points)
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg text-[#5A5A56] leading-relaxed mb-10 max-w-[640px]">
          Every point that matters — from Core Web Vitals to backlink health. Work through this manually or let AuditBrief handle it in 90 seconds.
        </p>

        <div className="card-brutal p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="label mb-1">Skip the manual work</p>
            <p className="font-[family-name:var(--font-body)] text-sm text-[#111110]">AuditBrief checks all 87 points automatically and outputs a branded PDF report.</p>
          </div>
          <Link href="https://auditpdf.com" className="btn-accent inline-block flex-shrink-0">
            Audit a site free →
          </Link>
        </div>

        {/* Section 1 */}
        <div className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase mb-1" style={{ fontSize: '38px' }}>
            1. Technical SEO
          </h2>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] mb-6">
            If search engines can&apos;t crawl and index your site efficiently, nothing else matters. Start here every time.
          </p>

          <h3 className="font-[family-name:var(--font-ui)] font-semibold uppercase tracking-widest text-sm text-[#111110] mb-3 mt-6">Core Web Vitals</h3>
          <ul className="card-brutal-sm p-4 mb-6">
            <CheckItem>LCP (Largest Contentful Paint) under 2.5s on mobile</CheckItem>
            <CheckItem>INP (Interaction to Next Paint) under 200ms</CheckItem>
            <CheckItem>CLS (Cumulative Layout Shift) below 0.1</CheckItem>
            <CheckItem>TTFB (Time to First Byte) under 800ms</CheckItem>
            <CheckItem>FCP (First Contentful Paint) under 1.8s</CheckItem>
          </ul>

          <h3 className="font-[family-name:var(--font-ui)] font-semibold uppercase tracking-widest text-sm text-[#111110] mb-3 mt-6">Crawlability &amp; Indexation</h3>
          <ul className="card-brutal-sm p-4 mb-6">
            <CheckItem>robots.txt exists and is not blocking important pages</CheckItem>
            <CheckItem>XML sitemap present, valid, and submitted to Google Search Console</CheckItem>
            <CheckItem>No important pages accidentally noindexed</CheckItem>
            <CheckItem>Canonical tags consistent — no self-referencing canonicals pointing elsewhere</CheckItem>
            <CheckItem>No orphan pages (pages with zero internal links)</CheckItem>
            <CheckItem>Pagination handled correctly (rel=next/prev or consolidated)</CheckItem>
            <CheckItem>Crawl budget not wasted on thin/duplicate pages</CheckItem>
            <CheckItem>Google Search Console coverage report checked for errors</CheckItem>
          </ul>

          <h3 className="font-[family-name:var(--font-ui)] font-semibold uppercase tracking-widest text-sm text-[#111110] mb-3 mt-6">Site Architecture</h3>
          <ul className="card-brutal-sm p-4 mb-6">
            <CheckItem>URL structure is clean, keyword-relevant, and consistent</CheckItem>
            <CheckItem>No important page more than 3 clicks from homepage</CheckItem>
            <CheckItem>Internal linking supports topical clusters</CheckItem>
            <CheckItem>HTTPS enforced sitewide with valid SSL certificate</CheckItem>
            <CheckItem>www vs non-www redirects consistently to one canonical version</CheckItem>
            <CheckItem>No redirect chains longer than 2 hops</CheckItem>
            <CheckItem>All 4xx and 5xx errors identified and resolved</CheckItem>
          </ul>

          <h3 className="font-[family-name:var(--font-ui)] font-semibold uppercase tracking-widest text-sm text-[#111110] mb-3 mt-6">Mobile &amp; International</h3>
          <ul className="card-brutal-sm p-4">
            <CheckItem>Mobile-first indexing: content identical on mobile and desktop</CheckItem>
            <CheckItem>Viewport meta tag present on all pages</CheckItem>
            <CheckItem>No interstitials blocking mobile content (Google policy violation)</CheckItem>
            <CheckItem>Hreflang tags implemented correctly for multi-language sites</CheckItem>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase mb-1" style={{ fontSize: '38px' }}>
            2. On-Page SEO
          </h2>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] mb-6">
            Each page should send a clear, unambiguous signal about what it covers and who it&apos;s for.
          </p>

          <h3 className="font-[family-name:var(--font-ui)] font-semibold uppercase tracking-widest text-sm text-[#111110] mb-3 mt-6">Title Tags &amp; Meta</h3>
          <ul className="card-brutal-sm p-4 mb-6">
            <CheckItem>Every page has a unique title tag (50–60 characters)</CheckItem>
            <CheckItem>Primary keyword near the start of the title tag</CheckItem>
            <CheckItem>Every page has a unique meta description (120–158 characters)</CheckItem>
            <CheckItem>No duplicate title tags across the site</CheckItem>
            <CheckItem>No missing title tags or meta descriptions</CheckItem>
          </ul>

          <h3 className="font-[family-name:var(--font-ui)] font-semibold uppercase tracking-widest text-sm text-[#111110] mb-3 mt-6">Header Structure</h3>
          <ul className="card-brutal-sm p-4 mb-6">
            <CheckItem>One H1 per page — contains the primary keyword naturally</CheckItem>
            <CheckItem>H2s used for major section headings (not for styling)</CheckItem>
            <CheckItem>H3s used for sub-sections within H2 groups</CheckItem>
            <CheckItem>No heading hierarchy skips (H1 → H3 without H2)</CheckItem>
            <CheckItem>Headers contain semantic keywords, not just brand terms</CheckItem>
          </ul>

          <h3 className="font-[family-name:var(--font-ui)] font-semibold uppercase tracking-widest text-sm text-[#111110] mb-3 mt-6">Image Optimisation</h3>
          <ul className="card-brutal-sm p-4">
            <CheckItem>All images have descriptive alt text (not keyword-stuffed)</CheckItem>
            <CheckItem>Images served in next-gen formats (WebP, AVIF)</CheckItem>
            <CheckItem>Images lazy-loaded below the fold</CheckItem>
            <CheckItem>Hero images preloaded for LCP improvement</CheckItem>
            <CheckItem>Image file sizes compressed (Lighthouse check)</CheckItem>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase mb-1" style={{ fontSize: '38px' }}>
            3. Content Quality
          </h2>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] mb-6">
            Google&apos;s helpful content system demotes sites with thin, repetitive, or AI-spun content. These checks identify weak spots before they tank rankings.
          </p>
          <ul className="card-brutal-sm p-4">
            <CheckItem>No thin pages (under 300 words without a strategic reason)</CheckItem>
            <CheckItem>No duplicate or near-duplicate content across pages</CheckItem>
            <CheckItem>Key pages demonstrate E-E-A-T (Experience, Expertise, Authority, Trust)</CheckItem>
            <CheckItem>Content covers the topic more thoroughly than top-ranking competitors</CheckItem>
            <CheckItem>Outdated statistics, broken references, or stale dates identified and updated</CheckItem>
            <CheckItem>No keyword cannibalism — multiple pages competing for the same term</CheckItem>
            <CheckItem>Content gap analysis done against top 5 ranking URLs</CheckItem>
            <CheckItem>Reading grade level appropriate for the target audience</CheckItem>
            <CheckItem>Author credentials/bio present on expert content (YMYL especially)</CheckItem>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase mb-1" style={{ fontSize: '38px' }}>
            4. Backlink Profile
          </h2>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] mb-6">
            One toxic link won&apos;t sink a domain, but patterns matter. Know what&apos;s pointing at the site before making any decisions.
          </p>
          <ul className="card-brutal-sm p-4">
            <CheckItem>Total referring domains count and trend (growing or declining?)</CheckItem>
            <CheckItem>Domain Rating / Domain Authority vs top competitors</CheckItem>
            <CheckItem>No manual actions or unnatural link penalties in Search Console</CheckItem>
            <CheckItem>Anchor text distribution — over-optimised commercial anchors flagged</CheckItem>
            <CheckItem>Toxic/spammy backlinks identified (use Ahrefs or Semrush)</CheckItem>
            <CheckItem>Disavow file reviewed — not over-disavowing quality links</CheckItem>
            <CheckItem>Internal link equity flowing to highest-priority pages</CheckItem>
            <CheckItem>Competitor backlink gaps — sites linking to them but not you</CheckItem>
          </ul>
        </div>

        {/* Section 5 */}
        <div className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase mb-1" style={{ fontSize: '38px' }}>
            5. Structured Data
          </h2>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] mb-6">
            Schema markup doesn&apos;t directly boost rankings, but rich results improve CTR — often by 20–30%.
          </p>
          <ul className="card-brutal-sm p-4">
            <CheckItem>Organisation schema on homepage (name, logo, contact, social profiles)</CheckItem>
            <CheckItem>Article or BlogPosting schema on all editorial content</CheckItem>
            <CheckItem>Product + Offer schema on e-commerce pages</CheckItem>
            <CheckItem>FAQ schema on relevant pages (boosts SERP real estate)</CheckItem>
            <CheckItem>BreadcrumbList schema matches URL structure</CheckItem>
            <CheckItem>LocalBusiness schema if applicable (includes address, hours, map)</CheckItem>
            <CheckItem>No schema errors in Google&apos;s Rich Results Test</CheckItem>
            <CheckItem>Structured data validated in Schema.org validator</CheckItem>
          </ul>
        </div>

        {/* Related guides */}
        <div className="mb-12 p-6 bg-[#111110]">
          <p className="label text-[#5A5A56] mb-3">Related Guides</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/guides/how-to-do-seo-audit" className="block p-3 border border-[#333330] hover:border-[#B8FF00] transition-colors">
              <p className="font-[family-name:var(--font-ui)] text-xs text-[#B8FF00] uppercase tracking-widest mb-1">How-To</p>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#F2F2EF]">How to Do a Complete SEO Audit</p>
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
          <p className="label mb-3">Automate all 87 checks</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase leading-none mb-4" style={{ fontSize: '44px' }}>
            Stop ticking boxes manually.
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#5A5A56] mb-6 max-w-[480px] mx-auto">
            AuditBrief runs every check on this list, scores the site, and outputs a PDF your clients can actually read — in under 2 minutes.
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
