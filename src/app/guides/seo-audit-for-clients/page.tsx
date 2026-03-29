import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Deliver an SEO Audit to Clients: What to Include and How to Present It | AuditBrief',
  description: 'A client SEO audit is not just finding problems — it is communicating value and selling the fix. Here is exactly how to structure and present it.',
}

const reportSections = [
  {
    num: '01',
    title: 'Executive summary',
    purpose: 'The only page most clients will actually read.',
    content: 'Overall score, top 3 issues in plain language, the estimated impact of fixing them, and a one-sentence recommended next step. No jargon. Maximum 1 page.',
  },
  {
    num: '02',
    title: 'Quick wins',
    purpose: 'Builds trust immediately.',
    content: 'List 3–5 issues that can be fixed in under a day with high impact. Missing title tags, a noindex on the wrong page, a broken canonical. Clients want to see action they can take today.',
  },
  {
    num: '03',
    title: 'Technical issues',
    purpose: 'The engineer section.',
    content: 'Issues table: problem, severity, pages affected, how to fix it. Severity labels: Critical, Warning, Info. Group by category (crawlability, speed, structure). Let developers skim to what they need.',
  },
  {
    num: '04',
    title: 'On-page analysis',
    purpose: 'Shows content opportunities.',
    content: 'Title and meta data coverage, header structure issues, keyword gaps on key pages. Include screenshots where helpful — showing a truncated title in a SERP preview is worth 100 words of explanation.',
  },
  {
    num: '05',
    title: 'Backlink overview',
    purpose: 'Context for authority and risk.',
    content: 'Domain rating trend, top referring domains, anchor text distribution, any toxic link flags. Keep this high-level for most clients — they do not need a full backlink dump.',
  },
  {
    num: '06',
    title: 'Roadmap',
    purpose: 'Turns the audit into a project.',
    content: 'A phased plan: Month 1 (critical fixes), Month 2–3 (on-page improvements), Ongoing (link building, content). This is where you pitch the retainer. The roadmap is the proposal.',
  },
]

const pricingTiers = [
  {
    name: 'Discovery audit',
    price: '£300–£750',
    desc: 'Surface-level technical and on-page review. PDF report only. Usually used as a loss-leader to qualify a prospect or win a larger project.',
    when: 'For new prospects, small sites, or when competing on price.',
  },
  {
    name: 'Full SEO audit',
    price: '£1,500–£5,000',
    desc: 'Comprehensive review across all categories — technical, on-page, content, backlinks, competitors. Full written report with prioritised roadmap. Often includes a 1-hour presentation call.',
    when: 'For established businesses, new client onboarding, or pre-migration checks.',
  },
  {
    name: 'Monthly retainer',
    price: '£500–£3,000/month',
    desc: 'Ongoing audit monitoring plus implementation. Monthly report card, quarterly deep dives. The audit is the door — the retainer is the revenue.',
    when: 'After closing a full audit engagement. This is the business model.',
  },
]

const doNotInclude = [
  { item: 'Raw data exports', reason: 'A 10,000-row Screaming Frog export tells clients nothing. Filter to the issues that matter and present them as decisions, not data.' },
  { item: 'Excessive technical jargon', reason: '"Your LCP is 4.2s and CLS is 0.18" means nothing. Say: "Your site loads slowly on mobile, which is causing Google to rank it lower than competitors."' },
  { item: 'Every issue you found', reason: 'Reporting 200 issues overwhelms clients and makes them feel the problem is unsolvable. Pick the top 15–20 by impact and explain them clearly.' },
  { item: 'Competitor screenshots without context', reason: 'Showing a competitor ranking higher is only useful if you explain exactly why and what the client can do about it.' },
  { item: 'Vague recommendations', reason: '"Improve your content" is not a recommendation. "Add a 200-word FAQ section to your /services/web-design page targeting \'web design London\'" is a recommendation.' },
]

const faqs = [
  {
    q: 'How long should a client SEO report be?',
    a: 'For most clients: 8–15 pages. Executive summary (1 page), quick wins (1 page), technical issues (2–3 pages), on-page (2–3 pages), backlinks (1 page), roadmap (1–2 pages). Any longer and you risk losing their attention on the sections that actually drive action.',
  },
  {
    q: 'Should I present the audit in a call or just send the PDF?',
    a: 'Always present it on a call if you can. A 45-minute walkthrough turns the audit into a conversation about their business goals — which is how you sell the next phase. Sending a PDF cold means your work gets skimmed or ignored.',
  },
  {
    q: 'How do I handle a client who disputes audit findings?',
    a: 'Ground every finding in data — show the GSC screenshot, the PageSpeed Insights score, the Screaming Frog output. If they push back, acknowledge it and ask what outcome they want. The audit is a means to an end, not a point-scoring exercise.',
  },
  {
    q: 'What if the audit reveals the site needs a complete rebuild?',
    a: 'Be direct but constructive. "Your technical foundations are holding back everything else — here is what a migration would involve and what it would unlock." Frame it as an opportunity, give them a rough project scope and cost, and make the decision easy.',
  },
]

export default function SEOAuditForClientsPage() {
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
          <p className="font-[family-name:var(--font-ui)] text-xs text-[#B8FF00] uppercase tracking-widest mb-4">Client SEO Audits</p>
          <h1 className="font-[family-name:var(--font-heading)] text-[#B8FF00] uppercase leading-none mb-6" style={{ fontSize: '48px' }}>
            How to Deliver an SEO Audit to Clients: What to Include and How to Present It
          </h1>
          <p className="font-[family-name:var(--font-body)] text-[#E8E8E4] text-lg leading-relaxed">
            A good client SEO audit is not just finding problems — it is communicating value and selling the fix. The audit itself is the door. The roadmap it produces is the retainer.
          </p>
        </div>
      </section>

      {/* What clients care about */}
      <section className="max-w-[768px] mx-auto px-6 py-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          What clients actually care about
        </h2>
        <p className="font-[family-name:var(--font-body)] text-[#5A5A56] leading-relaxed mb-6">
          Clients do not care about canonical tags or disavow files. They have three questions — answer these and the rest of the audit becomes context:
        </p>
        <div className="border-2 border-[#111110] divide-y-2 divide-[#111110]">
          {[
            {
              q: '"Why am I not ranking?"',
              a: 'Give them a clear, plain-language reason. "Your site loads in 6 seconds on mobile — Google is de-prioritising you in favour of faster competitors." One sentence. No hedging.',
            },
            {
              q: '"What will fixing this actually do?"',
              a: 'Connect every recommendation to a business outcome. "Fixing the title tags on your 12 service pages should improve click-through rate from search by 15–25% based on industry benchmarks."',
            },
            {
              q: '"How long will it take?"',
              a: 'Give a realistic timeline split into phases. Quick wins in week 1–2. Structural improvements in month 1–2. Content and links ongoing. Never say "SEO takes 6–12 months" without explaining why.',
            },
          ].map(item => (
            <div key={item.q} className="p-6">
              <p className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[20px] mb-2">{item.q}</p>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Report structure */}
      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          Structure of a client-facing SEO report
        </h2>
        <div className="border-2 border-[#111110] divide-y-2 divide-[#111110]">
          {reportSections.map(section => (
            <div key={section.num} className="p-6">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-[family-name:var(--font-heading)] text-[36px] text-[#B8FF00] leading-none [text-shadow:1px_1px_0_#111110] shrink-0">{section.num}</span>
                <h3 className="font-[family-name:var(--font-heading)] text-[20px] text-[#111110] uppercase">{section.title}</h3>
              </div>
              <p className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#5A5A56] mb-2">{section.purpose}</p>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to present */}
      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          How to present audit findings without losing them
        </h2>
        <div className="border-2 border-[#111110] divide-y-2 divide-[#111110]">
          {[
            { title: 'Start with the number', desc: 'Open with the overall SEO score. "Your site scored 61 out of 100." It anchors the conversation and creates natural curiosity about what is pulling it down.' },
            { title: 'Name the top 3 issues only', desc: 'In the presentation call, talk about 3 issues maximum. Everything else goes in the written report. Trying to cover 20 issues in a call means clients remember zero.' },
            { title: 'Quick wins create momentum', desc: 'Always have at least 2–3 things they can fix this week. "Fix these three title tags on your highest-traffic pages — this takes about 20 minutes in your CMS and could lift your click-through rate immediately."' },
            { title: 'The roadmap is the pitch', desc: 'Close with the roadmap. "Here is what months 1–3 look like. I can manage this for you at £X/month." The audit is the credibility builder. The roadmap is the proposal.' },
          ].map(item => (
            <div key={item.title} className="p-6">
              <h3 className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-wider text-[#111110] mb-2">{item.title}</h3>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA box */}
      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <div className="border-2 border-[#111110] bg-[#111110] p-8">
          <p className="font-[family-name:var(--font-heading)] text-[#B8FF00] uppercase text-[28px] leading-tight mb-3">
            Generate a client-ready report in 2 minutes.
          </p>
          <p className="font-[family-name:var(--font-body)] text-[#E8E8E4] text-sm leading-relaxed mb-6">
            AuditBrief generates a client-ready PDF SEO report automatically — branded, professional, and shareable. Add your agency name. Download. Send.
          </p>
          <Link href="/auth/signup" className="bg-[#B8FF00] text-[#111110] font-bold px-6 py-3 inline-block hover:bg-[#A0E000] transition-colors font-[family-name:var(--font-ui)] uppercase tracking-wider text-sm border-2 border-[#B8FF00]">
            Run Your Free SEO Audit →
          </Link>
        </div>
      </section>

      {/* What NOT to include */}
      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          What NOT to put in a client SEO report
        </h2>
        <div className="border-2 border-[#111110] divide-y-2 divide-[#111110]">
          {doNotInclude.map(item => (
            <div key={item.item} className="p-6 flex gap-4">
              <span className="text-red-600 font-bold text-lg shrink-0 leading-none mt-0.5">×</span>
              <div>
                <h3 className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-wider text-[#111110] mb-1">{item.item}</h3>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed">{item.reason}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          How to price SEO audits for clients
        </h2>
        <div className="border-2 border-[#111110] divide-y-2 divide-[#111110]">
          {pricingTiers.map(tier => (
            <div key={tier.name} className="p-6">
              <div className="flex items-baseline justify-between mb-2 flex-wrap gap-2">
                <h3 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[22px]">{tier.name}</h3>
                <span className="font-[family-name:var(--font-heading)] text-[#B8FF00] text-[22px] [text-shadow:0.5px_0.5px_0_#111110]">{tier.price}</span>
              </div>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed mb-2">{tier.desc}</p>
              <p className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#111110]">When: <span className="text-[#5A5A56] font-normal normal-case tracking-normal">{tier.when}</span></p>
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
            Impress your next client.
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#111110] text-sm leading-relaxed mb-6 max-w-[400px] mx-auto">
            AuditBrief produces a professional, white-label SEO audit PDF in under 2 minutes. First audit is free.
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
            <Link href="/guides/seo-audit-report-template" className="hover:text-[#111110] transition-colors">Report Template</Link>
            <Link href="/auth/login" className="hover:text-[#111110] transition-colors">Login</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
