import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SEO Audit Report Template: What to Include (+ Free Download) | AuditBrief',
  description: 'What to include in a professional SEO audit report: executive summary, traffic overview, technical issues, content gaps, link profile, priority matrix, and quick wins.',
  openGraph: {
    title: 'SEO Audit Report Template: What to Include (+ Free Download)',
    description: 'What to include in a professional SEO audit report: executive summary, traffic overview, technical issues, content gaps, link profile, priority matrix, and quick wins.',
    type: 'article',
  },
}

const Section = ({ number, title, children }: { number: string; title: string; children: React.ReactNode }) => (
  <div className="mb-10 border-l-4 border-[#B8FF00] pl-6">
    <p className="label mb-1">Section {number}</p>
    <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase leading-tight mb-4" style={{ fontSize: '32px' }}>
      {title}
    </h2>
    {children}
  </div>
)

export default function SEOAuditReportTemplate() {
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
            Generate Report Free
          </Link>
        </div>
      </nav>

      <main className="max-w-[860px] mx-auto px-6 pt-14 pb-24">
        <p className="label mb-2">Report Template</p>
        <h1 className="font-[family-name:var(--font-heading)] text-[#111110] leading-none uppercase mb-6" style={{ fontSize: '62px' }}>
          SEO Audit Report Template: What to Include
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg text-[#5A5A56] leading-relaxed mb-4 max-w-[640px]">
          A bad SEO audit report buries the client in data they don&apos;t understand. A good one shows them exactly where they are, what&apos;s broken, and what to do first. Here&apos;s the structure that works.
        </p>
        <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed mb-10 max-w-[640px]">
          This template covers every section you need — whether you&apos;re building a report manually in Google Slides or generating a branded PDF with <Link href="https://auditpdf.com" className="text-[#111110] underline underline-offset-2">AuditBrief</Link>.
        </p>

        <div className="card-brutal p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="label mb-1">Skip the template — generate it instantly</p>
            <p className="font-[family-name:var(--font-body)] text-sm text-[#111110]">AuditBrief outputs a branded PDF using this exact structure. Enter a URL and it&apos;s ready in 90 seconds.</p>
          </div>
          <Link href="https://auditpdf.com" className="btn-accent inline-block flex-shrink-0">
            Generate free report →
          </Link>
        </div>

        <Section number="1" title="Executive Summary">
          <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-3">
            This is the only section most stakeholders will read in full. Keep it to one page. State: what was audited, when, what the overall health looks like (use a score or RAG status), and the 3–5 most important findings.
          </p>
          <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-4">
            Do not write the summary last as an afterthought. Write it once you know the priority findings, then refine it. The executive summary is the sale — it determines whether the client engages you for implementation.
          </p>
          <div className="card-brutal-sm p-4">
            <p className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-widest text-[#5A5A56] mb-2">What to include</p>
            <ul className="space-y-1">
              {['Domain audited + audit date', 'Overall SEO health score (0–100)', 'Total issues found by severity', 'Top 3 priority actions', 'Estimated traffic upside if fixed'].map(item => (
                <li key={item} className="font-[family-name:var(--font-body)] text-sm text-[#111110] flex items-start gap-2">
                  <span className="text-[#B8FF00] font-bold mt-0.5">→</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section number="2" title="Current Traffic Overview">
          <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-3">
            Clients need context before they can care about your technical findings. Show the current organic traffic picture first: monthly sessions, trend over 12 months, top landing pages by organic traffic, and share of traffic from organic vs other channels.
          </p>
          <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-4">
            If traffic is declining, this section sets up the urgency for your recommendations. If it&apos;s growing, you&apos;re showing how to accelerate it. Either way, start with the business context.
          </p>
          <div className="card-brutal-sm p-4">
            <p className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-widest text-[#5A5A56] mb-2">Data sources</p>
            <p className="font-[family-name:var(--font-body)] text-sm text-[#111110]">Google Analytics 4, Google Search Console (Performance report), Ahrefs organic traffic estimate</p>
          </div>
        </Section>

        <Section number="3" title="Technical Issues">
          <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-3">
            This is the meat of the report. Group issues by type — not by severity — with a severity tag on each. Clients process information in categories (crawlability, speed, indexation) better than in a flat severity-sorted list.
          </p>
          <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-4">
            For each issue: what it is, why it matters (connect it to rankings or revenue, not just SEO theory), how many pages are affected, and what the fix is. If the fix takes a developer, say so and give a rough time estimate.
          </p>
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="p-3 border-2 border-[#FF4D00] bg-[#FFF5F2]">
              <p className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-widest text-[#FF4D00] mb-1">Critical</p>
              <p className="font-[family-name:var(--font-body)] text-xs text-[#111110]">Fix immediately. Blocking indexing or causing ranking drops.</p>
            </div>
            <div className="p-3 border-2 border-[#F59E0B] bg-[#FFFBF0]">
              <p className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-widest text-[#F59E0B] mb-1">Important</p>
              <p className="font-[family-name:var(--font-body)] text-xs text-[#111110]">Fix this sprint. Meaningful impact on performance.</p>
            </div>
            <div className="p-3 border-2 border-[#22C55E] bg-[#F0FFF4]">
              <p className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-widest text-[#22C55E] mb-1">Best Practice</p>
              <p className="font-[family-name:var(--font-body)] text-xs text-[#111110]">Fix when possible. Incremental gains.</p>
            </div>
          </div>
        </Section>

        <Section number="4" title="On-Page & Content Issues">
          <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-3">
            Separate from the technical section — this covers title tags, meta descriptions, header structure, thin content, duplicate content, and keyword targeting. These are often the highest-ROI fixes because they require only content changes, not development work.
          </p>
          <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-4">
            Highlight specific pages with specific problems. &quot;Multiple pages have weak title tags&quot; is useless. &quot;/services/seo-consulting has a title tag of &apos;Services | Company&apos; — it should target &apos;SEO Consulting London | Company&apos;&quot; is actionable.
          </p>
        </Section>

        <Section number="5" title="Content Gaps">
          <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-3">
            Show the keywords the site should be ranking for but isn&apos;t. Run a competitor gap analysis: what topics do competitors rank for that this site doesn&apos;t even have a page for?
          </p>
          <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-4">
            Prioritise gaps by search volume and commercial value. A client selling B2B software doesn&apos;t need a blog post on every tangentially-related topic — they need pages that capture in-market searchers. Be specific about what to build.
          </p>
        </Section>

        <Section number="6" title="Link Profile Summary">
          <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-3">
            Keep this section concise unless there&apos;s a problem. Clients don&apos;t need a dissertation on your backlink methodology. They need to know: how strong is the domain, is anything toxic, and how does it compare to competitors?
          </p>
          <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-4">
            If the link profile is fine, say so — with the key numbers. If there are toxic links or a penalty, this becomes a bigger section. If they&apos;re massively outgunned by competitors on domain authority, set expectations now before they wonder why the content fixes alone aren&apos;t enough.
          </p>
        </Section>

        <Section number="7" title="Priority Matrix: Quick Wins vs Long-Term">
          <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-3">
            Every report should end with a prioritised action list — not a dump of every issue sorted by severity. Frame it as a plan, not a blame list.
          </p>
          <p className="font-[family-name:var(--font-body)] text-[#111110] leading-relaxed mb-4">
            Quick wins: changes that can be made in &lt;1 week with immediate SEO impact (fixing broken redirects, updating title tags, resubmitting sitemap). Long-term: structural fixes and content builds that pay off over 3–6 months. Show both — clients need the quick wins to believe in the long-term investment.
          </p>
          <div className="card-brutal-sm p-4">
            <p className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-widest text-[#5A5A56] mb-2">Matrix format</p>
            <p className="font-[family-name:var(--font-body)] text-sm text-[#111110]">Two columns: Quick Wins (impact this month) / Strategic Fixes (impact in 3–6 months). Bullet points, not paragraphs. Owner and deadline for each item.</p>
          </div>
        </Section>

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
            <Link href="/guides/seo-audit-for-clients" className="block p-3 border border-[#333330] hover:border-[#B8FF00] transition-colors">
              <p className="font-[family-name:var(--font-ui)] text-xs text-[#B8FF00] uppercase tracking-widest mb-1">Client Work</p>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#F2F2EF]">Presenting an SEO Audit to Clients</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="card-brutal p-8 text-center">
          <p className="label mb-3">Generate this report automatically</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase leading-none mb-4" style={{ fontSize: '44px' }}>
            Branded PDF in 90 seconds.
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#5A5A56] mb-6 max-w-[480px] mx-auto">
            AuditBrief uses this exact report structure and fills it with real audit data from your client&apos;s site. Download as PDF or PPTX, ready to send or present.
          </p>
          <Link href="https://auditpdf.com" className="btn-accent inline-block">
            Generate a free report →
          </Link>
          <p className="font-[family-name:var(--font-ui)] text-xs text-[#5A5A56] mt-3 uppercase tracking-wider">1 free report/month — no credit card required</p>
        </div>
      </main>
    </div>
  )
}
