import Anthropic from '@anthropic-ai/sdk'
import { nanoid } from 'nanoid'
import type { AuditReportDTO, AuditIssue, AuditSection } from '@/types'

export interface AuditPipelineProgress {
  step: string
  progress: number
  detail?: string
}

export interface TechnicalSignals {
  url: string
  statusCode?: number
  title?: string
  metaDescription?: string
  h1Count?: number
  hasRobotsTxt?: boolean
  hasSitemap?: boolean
  hasHttps: boolean
  responseTimeMs?: number
  htmlLength?: number
  hasCanonical?: boolean
  hasOpenGraph?: boolean
  hasViewport?: boolean
  imageCount?: number
  imagesWithoutAlt?: number
  internalLinkCount?: number
  externalLinkCount?: number
  wordCount?: number
  hasStructuredData?: boolean
}

/**
 * Run the full SEO audit pipeline for a given URL.
 * Emits progress via onProgress callback, resolves with the full AuditReportDTO.
 */
export async function runAuditPipeline(
  url: string,
  agencyBranding?: { name: string; logo?: string; accentColor?: string },
  onProgress?: (p: AuditPipelineProgress) => void,
): Promise<AuditReportDTO> {
  const normalizedUrl = normalizeUrl(url)

  // Step 1: Fetch the URL
  onProgress?.({ step: 'Fetching site', progress: 10, detail: normalizedUrl })
  const signals = await fetchSignals(normalizedUrl)

  // Step 2: Analyse meta tags, title, description
  onProgress?.({ step: 'Analysing meta tags', progress: 25, detail: `Title: "${signals.title?.slice(0, 40) || 'none'}"` })

  // Step 3: Check basic technical issues
  onProgress?.({ step: 'Checking technical health', progress: 40 })

  // Step 4: Call Claude to generate comprehensive audit
  onProgress?.({ step: 'Generating AI audit findings', progress: 65, detail: 'Analysing 6 SEO categories...' })
  const report = await generateAuditWithClaude(normalizedUrl, signals, agencyBranding)

  // Step 5: Score each section
  onProgress?.({ step: 'Scoring sections', progress: 80 })

  // Step 6: Generate executive summary
  onProgress?.({ step: 'Finalising report', progress: 90 })

  // Step 7: Complete
  onProgress?.({ step: 'Audit complete', progress: 100 })

  return report
}

function normalizeUrl(url: string): string {
  url = url.trim()
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url
  }
  return url
}

async function fetchSignals(url: string): Promise<TechnicalSignals> {
  const signals: TechnicalSignals = {
    url,
    hasHttps: url.startsWith('https://'),
  }

  try {
    const start = Date.now()
    const res = await fetch(url, {
      headers: { 'User-Agent': 'AuditBrief/1.0 (+https://auditbrief.com)' },
      redirect: 'follow',
      signal: AbortSignal.timeout(15000),
    })
    signals.responseTimeMs = Date.now() - start
    signals.statusCode = res.status

    const html = await res.text()
    signals.htmlLength = html.length

    // Parse basic signals from HTML
    const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i)
    signals.title = titleMatch?.[1]?.trim()

    const descMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)/i)
      ?? html.match(/<meta[^>]+content=["']([^"']*)[^>]+name=["']description["']/i)
    signals.metaDescription = descMatch?.[1]?.trim()

    const h1Count = (html.match(/<h1[^>]*>/gi) || []).length
    signals.h1Count = h1Count

    signals.hasCanonical = /<link[^>]+rel=["']canonical["']/i.test(html)
    signals.hasOpenGraph = /<meta[^>]+property=["']og:/i.test(html)
    signals.hasViewport = /<meta[^>]+name=["']viewport["']/i.test(html)
    signals.hasStructuredData = /<script[^>]+type=["']application\/ld\+json["']/i.test(html)

    const imgTags = html.match(/<img[^>]*/gi) || []
    signals.imageCount = imgTags.length
    signals.imagesWithoutAlt = imgTags.filter(img => !img.match(/alt=["'][^"']+["']/i)).length

    const internalLinks = (html.match(new RegExp(`href=["'][^"']*${new URL(url).hostname}[^"']*`, 'gi')) || []).length
    const allLinks = (html.match(/href=["'][^"']*/gi) || []).length
    signals.internalLinkCount = internalLinks
    signals.externalLinkCount = Math.max(0, allLinks - internalLinks)

    const textContent = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ')
    signals.wordCount = textContent.trim().split(/\s+/).length

    // Check robots.txt and sitemap
    try {
      const base = new URL(url).origin
      const [robotsRes, sitemapRes] = await Promise.allSettled([
        fetch(`${base}/robots.txt`, { signal: AbortSignal.timeout(5000) }),
        fetch(`${base}/sitemap.xml`, { signal: AbortSignal.timeout(5000) }),
      ])
      signals.hasRobotsTxt = robotsRes.status === 'fulfilled' && (robotsRes as PromiseFulfilledResult<Response>).value.ok
      signals.hasSitemap = sitemapRes.status === 'fulfilled' && (sitemapRes as PromiseFulfilledResult<Response>).value.ok
    } catch {
      signals.hasRobotsTxt = false
      signals.hasSitemap = false
    }
  } catch (err) {
    // Non-fatal — Claude can still give a partial audit
    signals.statusCode = 0
  }

  return signals
}

async function generateAuditWithClaude(
  url: string,
  signals: TechnicalSignals,
  agencyBranding?: { name: string; logo?: string; accentColor?: string },
): Promise<AuditReportDTO> {
  const client = new Anthropic()

  const signalsSummary = JSON.stringify(signals, null, 2)
  const domain = (() => { try { return new URL(url).hostname } catch { return url } })()

  const prompt = `You are an expert SEO auditor. Based on the URL ${url} and these observed technical signals:

${signalsSummary}

Generate a comprehensive SEO audit with sections for:
1. Technical SEO (canonicals, HTTPS, status codes, robots.txt, sitemap, structured data)
2. Content Quality (word count, heading structure, uniqueness, readability)
3. Performance (response time, page weight, core web vitals estimates)
4. Mobile (viewport meta, responsive signals)
5. Internal Links (internal link count, link structure)
6. Meta Data (title length/quality, meta description, Open Graph)

For each section provide:
- A score 0-100 (be realistic — scores should reflect actual observed signals)
- 3-5 specific issues with severity: "critical", "warning", "info", or "pass"
- A concrete recommendation for each issue
- A 1-2 sentence section summary

Also identify:
- topPriorities: the 5 most important issues across all sections (critical first, then high-impact warnings)
- quickWins: 5 issues that are easy to fix and have meaningful SEO impact

Return ONLY valid JSON matching this exact structure (no markdown, no preamble):

{
  "url": "${url}",
  "companyName": "${domain}",
  "auditDate": "${new Date().toISOString().split('T')[0]}",
  "overallScore": <number 0-100>,
  "executiveSummary": "<2-3 sentence summary of the site's SEO health and top priorities>",
  "sections": [
    {
      "id": "technical",
      "name": "Technical SEO",
      "score": <number>,
      "summary": "<sentence>",
      "issues": [
        {
          "id": "<unique-id>",
          "category": "technical",
          "title": "<issue title>",
          "description": "<what was found>",
          "severity": "<critical|warning|info|pass>",
          "recommendation": "<specific action to take>",
          "affectedPages": ["<url or page description>"]
        }
      ]
    },
    { "id": "content", "name": "Content Quality", ... },
    { "id": "performance", "name": "Performance", ... },
    { "id": "mobile", "name": "Mobile", ... },
    { "id": "links", "name": "Internal Links", ... },
    { "id": "meta", "name": "Meta Data", ... }
  ],
  "topPriorities": [ <5 AuditIssue objects> ],
  "quickWins": [ <5 AuditIssue objects> ]
}`

  // Use streaming to keep connection alive on Netlify (avoids gateway timeout)
  let rawJson = ''
  const stream = client.messages.stream({
    model: 'claude-sonnet-4-5-20250514',
    max_tokens: 4096,
    messages: [{ role: 'user', content: prompt }],
  })

  for await (const event of stream) {
    if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
      rawJson += event.delta.text
    }
  }

  rawJson = rawJson.trim()
  // Strip markdown code fences if present
  rawJson = rawJson.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '')

  const parsed = JSON.parse(rawJson) as AuditReportDTO

  // Ensure IDs are present on all issues
  for (const section of parsed.sections) {
    for (const issue of section.issues) {
      if (!issue.id) issue.id = nanoid(10)
    }
  }
  for (const issue of parsed.topPriorities) {
    if (!issue.id) issue.id = nanoid(10)
  }
  for (const issue of parsed.quickWins) {
    if (!issue.id) issue.id = nanoid(10)
  }

  if (agencyBranding) {
    parsed.agencyBranding = agencyBranding
  }

  return parsed
}
