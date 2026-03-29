import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Local SEO Audit: How to Rank in Google Maps and Local Search | AuditBrief',
  description: 'The complete local SEO audit checklist — Google Business Profile, citation consistency, review velocity, and local page SEO — with competitor analysis steps.',
  keywords: ['local SEO audit', 'google maps ranking', 'local SEO checklist', 'google business profile audit', 'local search SEO'],
}

const gbpChecklist = [
  { item: 'Business name matches exactly on all platforms (NAP consistency)', critical: true },
  { item: 'Primary and secondary categories correctly set', critical: true },
  { item: 'Address and phone number verified', critical: true },
  { item: 'Business hours up to date, including special hours for holidays', critical: false },
  { item: '10+ photos uploaded (exterior, interior, team, products/services)', critical: false },
  { item: 'Business description written with primary keywords naturally included', critical: false },
  { item: 'Services/products list populated with descriptions', critical: false },
  { item: 'Q&A section seeded with common questions and answers', critical: false },
  { item: 'Weekly posts active (offers, news, events) — Google rewards recency', critical: false },
  { item: 'Messaging enabled if applicable to your business type', critical: false },
  { item: 'Website link pointing to the correct landing page (not just homepage)', critical: true },
]

const rankingFactors = [
  { factor: 'Relevance', weight: 'High', desc: 'Does your GBP and website content match what the searcher is looking for? Primary category selection and keyword-rich business description are the main levers.' },
  { factor: 'Distance', weight: 'High', desc: 'How close is your business to the searcher (or the location specified in the query)? You cannot change physical location, but service area businesses should set their service radius correctly.' },
  { factor: 'Prominence', weight: 'High', desc: 'How well-known is the business? This includes backlinks to your website, citation count and consistency, review count and velocity, and overall online presence.' },
  { factor: 'Review velocity', weight: 'Medium', desc: 'Google rewards recent reviews, not just total count. A business with 200 reviews but none in 6 months can be outranked by a competitor with 40 reviews and 5 this month.' },
  { factor: 'On-page local signals', weight: 'Medium', desc: 'NAP schema markup on your website, city/service keywords in title tags, and LocalBusiness schema type all help Google associate your website with your GBP listing.' },
]

const citationSources = [
  { source: 'Yelp', importance: 'High — major data provider for many local aggregators' },
  { source: 'Bing Places', importance: 'High — feeds Microsoft products and voice search' },
  { source: 'Apple Maps', importance: 'High — iOS default, significant traffic source' },
  { source: 'Yell.com', importance: 'High (UK) — major UK directory with strong domain authority' },
  { source: 'Thomson Local', importance: 'Medium (UK) — legacy directory, still indexed' },
  { source: 'Checkatrade / Trustatrader', importance: 'Medium (UK trades) — niche authority for trade businesses' },
  { source: 'Facebook Business', importance: 'Medium — social signals and additional NAP source' },
  { source: 'Nextdoor', importance: 'Growing — hyperlocal, strong for neighbourhood businesses' },
]

const competitorAuditSteps = [
  { step: '01', action: 'Search your primary keyword + city in Google', detail: 'Note the 3 GBP listings in the Map Pack. These are your direct competitors for local rankings. Write down their name, rating, review count, and profile completeness score.' },
  { step: '02', action: 'Compare GBP completeness', detail: 'Check their photo count, Q&A usage, post frequency, and service list vs yours. Any area where they have more content than you is an opportunity.' },
  { step: '03', action: 'Analyse their reviews', detail: 'Review count, recency, average rating, and — critically — how they respond to negative reviews. If they have 5x your reviews, calculate how many per month they\'re getting and set a target.' },
  { step: '04', action: 'Check their citation profile', detail: 'Search their business name in Google. Count the directories that appear in the first 2 pages of results. If they\'re in 30+ directories and you\'re in 10, close the gap.' },
  { step: '05', action: 'Audit their local pages', detail: 'If they rank for city-specific service keywords, look at the page that ranks. Word count, schema markup, and unique local content will tell you what the bar is.' },
]

const faqs = [
  {
    q: 'How long does local SEO take to work?',
    a: 'GBP improvements (photos, posts, responses) show impact in 4-8 weeks. Citation consistency changes take 6-12 weeks to propagate across directories and be reflected in Maps rankings. Local page SEO (new city/service landing pages) typically takes 3-6 months to rank competitively. Review velocity improvement is the fastest — businesses that go from 2 reviews per month to 10 per month often see Maps ranking improvements within 4-6 weeks.',
  },
  {
    q: 'How do I rank in multiple cities?',
    a: 'Create a dedicated landing page for each city/service combination you want to rank in. Each page needs genuine unique content about that location — not just the city name swapped in a template. Include local schema markup (ServiceArea), embed a Google Map, mention local landmarks or area-specific details. Do not create 50 identical pages with only the city name changed — Google treats this as thin content and will not rank them.',
  },
  {
    q: 'How many Google reviews do I need?',
    a: 'There is no threshold — it is relative to your competitors and to the velocity of new reviews. In most niches, you need more recent reviews than the competitor currently ranking above you. The practical benchmark: if the top-ranked competitor in your Map Pack has 150 reviews at a 4.8 rating, you need a credible path to 100+ reviews before you will consistently outrank them. Focus on velocity (reviews per month) as much as total count.',
  },
  {
    q: 'Does website SEO affect Maps rankings?',
    a: 'Yes, through the prominence signal. A website with strong domain authority, local keyword targeting, and LocalBusiness schema markup correlates with higher Maps rankings. The mechanism: Google uses your website as an additional signal to confirm the legitimacy and relevance of your GBP listing. Businesses with strong website SEO in a local market consistently outrank GBP-only businesses with similar review counts.',
  },
]

export default function LocalSEOAuditGuidePage() {
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
          <p className="font-[family-name:var(--font-ui)] text-xs text-[#B8FF00] uppercase tracking-widest mb-4">Local SEO Guide</p>
          <h1 className="font-[family-name:var(--font-heading)] text-[#B8FF00] uppercase leading-none mb-6" style={{ fontSize: '52px' }}>
            Local SEO Audit: How to Rank in Google Maps
          </h1>
          <p className="font-[family-name:var(--font-body)] text-[#E8E8E4] text-lg leading-relaxed">
            Google Maps rankings are won by three things: relevance, distance, and prominence. You can only change two of them. Here is the exact audit process for maximising both — with a competitor analysis framework to find what the top 3 are doing that you are not.
          </p>
        </div>
      </section>

      <section className="max-w-[768px] mx-auto px-6 py-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          Local ranking factors — what Google actually uses
        </h2>
        <div className="border-2 border-[#111110] divide-y-2 divide-[#111110]">
          {rankingFactors.map(f => (
            <div key={f.factor} className="px-6 py-4 grid grid-cols-[120px_60px_1fr] gap-4">
              <span className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#111110]">{f.factor}</span>
              <span className={`font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-wider ${f.weight === 'High' ? 'text-[#B8FF00] [text-shadow:0.5px_0.5px_0_#111110]' : 'text-[#5A5A56]'}`}>{f.weight}</span>
              <span className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed">{f.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          Google Business Profile audit checklist
        </h2>
        <div className="border-2 border-[#111110] divide-y-2 divide-[#111110]">
          {gbpChecklist.map((item, i) => (
            <div key={i} className="px-6 py-3 flex items-center gap-4">
              <div className={`w-4 h-4 border-2 shrink-0 ${item.critical ? 'border-[#B8FF00] bg-[#B8FF00]' : 'border-[#5A5A56]'}`} />
              <span className="font-[family-name:var(--font-body)] text-sm text-[#111110] leading-relaxed">{item.item}</span>
              {item.critical && (
                <span className="font-[family-name:var(--font-ui)] text-[9px] font-bold text-[#111110] uppercase tracking-wider bg-[#B8FF00] px-2 py-0.5 ml-auto shrink-0">Critical</span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <div className="border-2 border-[#111110] bg-[#111110] p-8">
          <p className="font-[family-name:var(--font-heading)] text-[#B8FF00] uppercase text-[28px] leading-tight mb-3">
            Full local SEO audit in 2 minutes.
          </p>
          <p className="font-[family-name:var(--font-body)] text-[#E8E8E4] text-sm leading-relaxed mb-6">
            AuditBrief audits your site and generates a local SEO section covering on-page signals, schema, and technical issues affecting your Maps ranking.
          </p>
          <Link href="/auth/signup" className="bg-[#B8FF00] text-[#111110] font-bold px-6 py-3 inline-block hover:bg-[#A0E000] transition-colors font-[family-name:var(--font-ui)] uppercase tracking-wider text-sm border-2 border-[#B8FF00]">
            Run Your Free Local SEO Audit →
          </Link>
        </div>
      </section>

      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          Citation sources to audit (UK focus)
        </h2>
        <p className="font-[family-name:var(--font-body)] text-[#5A5A56] leading-relaxed mb-6">
          NAP consistency across directories is a prominence signal. If your name, address, or phone number differs across platforms, Google reduces confidence in your listing data. Audit and correct each of these.
        </p>
        <div className="border-2 border-[#111110] divide-y-2 divide-[#111110]">
          {citationSources.map(s => (
            <div key={s.source} className="px-6 py-4 grid grid-cols-[160px_1fr] gap-4">
              <span className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#111110]">{s.source}</span>
              <span className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed">{s.importance}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[768px] mx-auto px-6 pb-12">
        <h2 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase text-[32px] mb-6 border-b-2 border-[#111110] pb-4">
          Competitor audit — 5 steps to steal local rankings
        </h2>
        <div className="space-y-0 border-2 border-[#111110] divide-y-2 divide-[#111110]">
          {competitorAuditSteps.map(step => (
            <div key={step.step} className="p-6">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-[family-name:var(--font-heading)] text-[40px] text-[#B8FF00] leading-none [text-shadow:1px_1px_0_#111110]">{step.step}</span>
                <h3 className="font-[family-name:var(--font-heading)] text-[20px] text-[#111110] uppercase">{step.action}</h3>
              </div>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed">{step.detail}</p>
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
            Audit your local SEO now.
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#111110] text-sm leading-relaxed mb-6 max-w-[400px] mx-auto">
            AuditBrief identifies local SEO issues and generates a client-ready PDF report in under 2 minutes. First audit free.
          </p>
          <Link href="/auth/signup" className="bg-[#111110] text-[#B8FF00] font-bold px-8 py-4 inline-block hover:bg-[#333] transition-colors font-[family-name:var(--font-ui)] uppercase tracking-wider text-sm">
            Run Your Free Local SEO Audit →
          </Link>
        </div>
      </section>

      <footer className="max-w-[1200px] mx-auto px-6 py-10 border-t-2 border-[#111110]">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Link href="/" className="font-[family-name:var(--font-heading)] text-xl text-[#5A5A56] uppercase tracking-wider">AuditBrief</Link>
          <div className="flex items-center gap-6 font-[family-name:var(--font-ui)] text-xs text-[#5A5A56] uppercase tracking-wider">
            <Link href="/guides/how-to-do-seo-audit" className="hover:text-[#111110] transition-colors">SEO Audit Guide</Link>
            <Link href="/guides/technical-seo-guide" className="hover:text-[#111110] transition-colors">Technical SEO</Link>
            <Link href="/guides/seo-audit-checklist" className="hover:text-[#111110] transition-colors">Checklist</Link>
            <Link href="/auth/login" className="hover:text-[#111110] transition-colors">Login</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
