import PptxGenJS from 'pptxgenjs'
import type { AuditReportDTO, AuditIssue, IssueSeverity } from '@/types'

// AuditBrief brutalist palette (hex strings for pptxgenjs)
const INK = '111110'
const LIME = 'B8FF00'
const BG = 'F2F2EF'
const SURFACE = 'E8E8E4'
const TEXT_SEC = '5A5A56'
const RED_ERR = 'FF4D00'
const AMBER = 'F59E0B'
const BLUE_INFO = '3B82F6'
const GREEN_PASS = '22C55E'
const WHITE = 'FFFFFF'

function scoreColor(score: number): string {
  if (score >= 80) return LIME
  if (score >= 60) return AMBER
  return RED_ERR
}

function severityColor(s: IssueSeverity): string {
  if (s === 'critical') return RED_ERR
  if (s === 'warning') return AMBER
  if (s === 'info') return BLUE_INFO
  return GREEN_PASS
}

function truncate(s: string, max: number): string {
  return s.length > max ? s.slice(0, max - 1) + '\u2026' : s
}

// Slide dimensions (inches, widescreen 10x5.625)
const SW = 10
const SH = 5.625
const MARGIN = 0.45

export async function generateAuditPptx(report: AuditReportDTO): Promise<Blob> {
  const pptx = new PptxGenJS()
  pptx.layout = 'LAYOUT_WIDE'
  pptx.title = `AuditBrief — ${report.companyName}`
  pptx.author = 'AuditBrief'

  // ─── SLIDE 1: COVER ───────────────────────────────────────────────────────
  const cover = pptx.addSlide()

  // Dark background
  cover.background = { color: INK }

  // Lime accent bar — left vertical stripe
  cover.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 0.18, h: SH,
    fill: { color: LIME },
    line: { type: 'none' },
  })

  // "SEO AUDIT REPORT" label top-right
  cover.addText('SEO AUDIT REPORT', {
    x: SW - 3.5, y: 0.35, w: 3.2, h: 0.35,
    fontSize: 10,
    bold: true,
    color: LIME,
    fontFace: 'Courier New',
    align: 'right',
    charSpacing: 3,
  })

  // Domain name — giant
  cover.addText(report.companyName.toUpperCase(), {
    x: 0.45, y: 1.0, w: SW - 0.9, h: 2.0,
    fontSize: 72,
    bold: true,
    color: WHITE,
    fontFace: 'Arial Black',
    breakLine: false,
    shrinkText: true,
  })

  // URL
  cover.addText(truncate(report.url, 70), {
    x: 0.45, y: 3.1, w: SW - 0.9, h: 0.4,
    fontSize: 14,
    color: SURFACE,
    fontFace: 'Courier New',
  })

  // Date
  cover.addText(`AUDIT DATE: ${report.auditDate}`, {
    x: 0.45, y: 3.55, w: 4, h: 0.32,
    fontSize: 11,
    color: TEXT_SEC,
    fontFace: 'Courier New',
  })

  // Score badge bottom-right
  cover.addShape(pptx.ShapeType.rect, {
    x: SW - 2.5, y: SH - 1.4, w: 2.18, h: 1.05,
    fill: { color: LIME },
    line: { type: 'none' },
  })
  cover.addText(String(report.overallScore), {
    x: SW - 2.5, y: SH - 1.45, w: 1.1, h: 1.1,
    fontSize: 52,
    bold: true,
    color: INK,
    fontFace: 'Arial Black',
    align: 'center',
    valign: 'middle',
  })
  cover.addText('/100', {
    x: SW - 1.42, y: SH - 1.25, w: 1.0, h: 0.5,
    fontSize: 14,
    bold: true,
    color: INK,
    fontFace: 'Courier New',
    valign: 'bottom',
  })
  cover.addText('OVERALL SCORE', {
    x: SW - 2.5, y: SH - 0.38, w: 2.18, h: 0.28,
    fontSize: 8,
    bold: true,
    color: INK,
    fontFace: 'Courier New',
    align: 'center',
    charSpacing: 1.5,
  })

  // Agency branding (if any)
  if (report.agencyBranding?.name) {
    cover.addText(`PREPARED BY: ${report.agencyBranding.name.toUpperCase()}`, {
      x: 0.45, y: SH - 0.5, w: 5, h: 0.32,
      fontSize: 10,
      color: SURFACE,
      fontFace: 'Courier New',
    })
  }

  // ─── SLIDE 2: OVERALL SCORE ───────────────────────────────────────────────
  const scoreSl = pptx.addSlide()
  scoreSl.background = { color: BG }

  // Header bar
  scoreSl.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: SW, h: 0.55,
    fill: { color: INK },
    line: { type: 'none' },
  })
  scoreSl.addText('AUDITBRIEF', {
    x: MARGIN, y: 0, w: 2, h: 0.55,
    fontSize: 11,
    bold: true,
    color: LIME,
    fontFace: 'Courier New',
    valign: 'middle',
  })
  scoreSl.addText(report.companyName.toUpperCase(), {
    x: 2.2, y: 0, w: SW - 2.5, h: 0.55,
    fontSize: 11,
    color: SURFACE,
    fontFace: 'Courier New',
    valign: 'middle',
  })

  // Slide title
  scoreSl.addText('OVERALL SCORE', {
    x: MARGIN, y: 0.75, w: 5, h: 0.65,
    fontSize: 36,
    bold: true,
    color: INK,
    fontFace: 'Arial Black',
  })

  // Big score
  const bigScoreColor = scoreColor(report.overallScore)
  scoreSl.addShape(pptx.ShapeType.rect, {
    x: MARGIN, y: 1.5, w: 2.4, h: 2.4,
    fill: { color: INK },
    line: { type: 'none' },
  })
  scoreSl.addText(String(report.overallScore), {
    x: MARGIN, y: 1.5, w: 2.4, h: 1.9,
    fontSize: 96,
    bold: true,
    color: bigScoreColor,
    fontFace: 'Arial Black',
    align: 'center',
    valign: 'middle',
  })
  scoreSl.addText('/100', {
    x: MARGIN, y: 3.35, w: 2.4, h: 0.4,
    fontSize: 14,
    color: SURFACE,
    fontFace: 'Courier New',
    align: 'center',
  })

  // Grade breakdown — section scores
  const colW = (SW - MARGIN - 3.1) / Math.max(report.sections.length, 1)
  report.sections.forEach((section, i) => {
    const x = 3.1 + i * colW
    const sColor = scoreColor(section.score)

    // Colour bar at top
    scoreSl.addShape(pptx.ShapeType.rect, {
      x, y: 1.5, w: colW - 0.12, h: 0.18,
      fill: { color: sColor },
      line: { type: 'none' },
    })

    // Score number
    scoreSl.addText(String(section.score), {
      x, y: 1.68, w: colW - 0.12, h: 1.1,
      fontSize: 40,
      bold: true,
      color: INK,
      fontFace: 'Arial Black',
      align: 'center',
    })

    // Section name
    scoreSl.addText(section.name.toUpperCase(), {
      x, y: 2.78, w: colW - 0.12, h: 0.55,
      fontSize: 8,
      bold: true,
      color: TEXT_SEC,
      fontFace: 'Courier New',
      align: 'center',
      wrap: true,
    })
  })

  // Executive summary box
  scoreSl.addShape(pptx.ShapeType.rect, {
    x: MARGIN, y: 4.05, w: SW - MARGIN * 2, h: 1.22,
    fill: { color: SURFACE },
    line: { color: INK, pt: 1.5 },
  })
  scoreSl.addText('EXECUTIVE SUMMARY', {
    x: MARGIN + 0.15, y: 4.1, w: 3, h: 0.28,
    fontSize: 8,
    bold: true,
    color: TEXT_SEC,
    fontFace: 'Courier New',
    charSpacing: 2,
  })
  scoreSl.addText(truncate(report.executiveSummary, 300), {
    x: MARGIN + 0.15, y: 4.38, w: SW - MARGIN * 2 - 0.3, h: 0.8,
    fontSize: 10,
    color: INK,
    fontFace: 'Courier New',
    wrap: true,
  })

  // ─── SLIDE 3: CRITICAL ISSUES ─────────────────────────────────────────────
  const critSl = pptx.addSlide()
  critSl.background = { color: BG }

  // Header bar
  critSl.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: SW, h: 0.55,
    fill: { color: INK },
    line: { type: 'none' },
  })
  critSl.addText('AUDITBRIEF', {
    x: MARGIN, y: 0, w: 2, h: 0.55,
    fontSize: 11, bold: true, color: LIME,
    fontFace: 'Courier New', valign: 'middle',
  })
  critSl.addText(report.companyName.toUpperCase(), {
    x: 2.2, y: 0, w: SW - 2.5, h: 0.55,
    fontSize: 11, color: SURFACE,
    fontFace: 'Courier New', valign: 'middle',
  })

  critSl.addText('CRITICAL ISSUES', {
    x: MARGIN, y: 0.7, w: 6, h: 0.65,
    fontSize: 36, bold: true, color: INK, fontFace: 'Arial Black',
  })
  // Red underline
  critSl.addShape(pptx.ShapeType.rect, {
    x: MARGIN, y: 1.38, w: SW - MARGIN * 2, h: 0.04,
    fill: { color: RED_ERR }, line: { type: 'none' },
  })

  // Collect all critical + warning issues
  const allIssues: AuditIssue[] = []
  report.sections.forEach(s => {
    s.issues.forEach(issue => {
      if (issue.severity === 'critical' || issue.severity === 'warning') {
        allIssues.push(issue)
      }
    })
  })
  const sortedIssues = allIssues
    .sort((a, b) => {
      const order: IssueSeverity[] = ['critical', 'warning', 'info', 'pass']
      return order.indexOf(a.severity) - order.indexOf(b.severity)
    })
    .slice(0, 6)

  sortedIssues.forEach((issue, i) => {
    const rowY = 1.52 + i * 0.65
    const sColor = severityColor(issue.severity)

    // Number
    critSl.addText(String(i + 1), {
      x: MARGIN, y: rowY, w: 0.35, h: 0.55,
      fontSize: 22, bold: true, color: RED_ERR, fontFace: 'Arial Black', valign: 'top',
    })

    // Severity badge
    critSl.addShape(pptx.ShapeType.rect, {
      x: MARGIN + 0.42, y: rowY + 0.03, w: 0.85, h: 0.22,
      fill: { color: sColor }, line: { type: 'none' },
    })
    critSl.addText(issue.severity.toUpperCase(), {
      x: MARGIN + 0.42, y: rowY + 0.03, w: 0.85, h: 0.22,
      fontSize: 7, bold: true, color: WHITE,
      fontFace: 'Courier New', align: 'center', valign: 'middle',
    })

    // Title
    critSl.addText(issue.title.toUpperCase(), {
      x: MARGIN + 1.35, y: rowY, w: SW - MARGIN - 1.5, h: 0.28,
      fontSize: 11, bold: true, color: INK, fontFace: 'Arial Black',
    })

    // Recommendation
    critSl.addText(truncate(issue.recommendation, 130), {
      x: MARGIN + 1.35, y: rowY + 0.28, w: SW - MARGIN - 1.5, h: 0.3,
      fontSize: 9, color: TEXT_SEC, fontFace: 'Courier New', wrap: true,
    })
  })

  // ─── SLIDE 4: QUICK WINS ──────────────────────────────────────────────────
  const winsSl = pptx.addSlide()
  winsSl.background = { color: BG }

  winsSl.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: SW, h: 0.55,
    fill: { color: INK }, line: { type: 'none' },
  })
  winsSl.addText('AUDITBRIEF', {
    x: MARGIN, y: 0, w: 2, h: 0.55,
    fontSize: 11, bold: true, color: LIME,
    fontFace: 'Courier New', valign: 'middle',
  })
  winsSl.addText(report.companyName.toUpperCase(), {
    x: 2.2, y: 0, w: SW - 2.5, h: 0.55,
    fontSize: 11, color: SURFACE,
    fontFace: 'Courier New', valign: 'middle',
  })

  winsSl.addText('QUICK WINS', {
    x: MARGIN, y: 0.7, w: 6, h: 0.65,
    fontSize: 36, bold: true, color: INK, fontFace: 'Arial Black',
  })
  winsSl.addShape(pptx.ShapeType.rect, {
    x: MARGIN, y: 1.38, w: SW - MARGIN * 2, h: 0.04,
    fill: { color: LIME }, line: { type: 'none' },
  })

  const wins = report.quickWins.slice(0, 5)
  wins.forEach((issue, i) => {
    const rowY = 1.52 + i * 0.79

    // Number with lime background
    winsSl.addShape(pptx.ShapeType.rect, {
      x: MARGIN, y: rowY, w: 0.42, h: 0.42,
      fill: { color: LIME }, line: { type: 'none' },
    })
    winsSl.addText(String(i + 1), {
      x: MARGIN, y: rowY, w: 0.42, h: 0.42,
      fontSize: 18, bold: true, color: INK,
      fontFace: 'Arial Black', align: 'center', valign: 'middle',
    })

    // Title
    winsSl.addText(issue.title.toUpperCase(), {
      x: MARGIN + 0.58, y: rowY, w: SW - MARGIN - 0.72, h: 0.3,
      fontSize: 11, bold: true, color: INK, fontFace: 'Arial Black',
    })

    // Recommendation
    winsSl.addText(truncate(issue.recommendation, 140), {
      x: MARGIN + 0.58, y: rowY + 0.3, w: SW - MARGIN - 0.72, h: 0.4,
      fontSize: 9, color: TEXT_SEC, fontFace: 'Courier New', wrap: true,
    })
  })

  // ─── SLIDE 5: FULL RECOMMENDATIONS ───────────────────────────────────────
  const recSl = pptx.addSlide()
  recSl.background = { color: BG }

  recSl.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: SW, h: 0.55,
    fill: { color: INK }, line: { type: 'none' },
  })
  recSl.addText('AUDITBRIEF', {
    x: MARGIN, y: 0, w: 2, h: 0.55,
    fontSize: 11, bold: true, color: LIME,
    fontFace: 'Courier New', valign: 'middle',
  })
  recSl.addText(report.companyName.toUpperCase(), {
    x: 2.2, y: 0, w: SW - 2.5, h: 0.55,
    fontSize: 11, color: SURFACE,
    fontFace: 'Courier New', valign: 'middle',
  })

  recSl.addText('FULL RECOMMENDATIONS', {
    x: MARGIN, y: 0.7, w: SW - MARGIN * 2, h: 0.65,
    fontSize: 30, bold: true, color: INK, fontFace: 'Arial Black',
  })
  recSl.addShape(pptx.ShapeType.rect, {
    x: MARGIN, y: 1.38, w: SW - MARGIN * 2, h: 0.04,
    fill: { color: INK }, line: { type: 'none' },
  })

  // Gather all issues sorted by priority
  const SEVERITY_ORDER: IssueSeverity[] = ['critical', 'warning', 'info', 'pass']
  const allRecs: AuditIssue[] = []
  report.sections.forEach(s => s.issues.forEach(i => allRecs.push(i)))
  allRecs.sort((a, b) => SEVERITY_ORDER.indexOf(a.severity) - SEVERITY_ORDER.indexOf(b.severity))

  // Two columns
  const colItems = Math.ceil(allRecs.slice(0, 14).length / 2)
  allRecs.slice(0, 14).forEach((issue, i) => {
    const col = i < colItems ? 0 : 1
    const row = col === 0 ? i : i - colItems
    const colX = MARGIN + col * ((SW - MARGIN * 2) / 2 + 0.1)
    const rowY = 1.55 + row * 0.52
    const sColor = severityColor(issue.severity)

    // Severity dot
    recSl.addShape(pptx.ShapeType.ellipse, {
      x: colX, y: rowY + 0.07, w: 0.12, h: 0.12,
      fill: { color: sColor }, line: { type: 'none' },
    })

    // Title
    recSl.addText(truncate(issue.title, 48), {
      x: colX + 0.2, y: rowY, w: (SW - MARGIN * 2) / 2 - 0.3, h: 0.26,
      fontSize: 9, bold: true, color: INK, fontFace: 'Courier New',
    })

    // Rec
    recSl.addText(truncate(issue.recommendation, 80), {
      x: colX + 0.2, y: rowY + 0.26, w: (SW - MARGIN * 2) / 2 - 0.3, h: 0.22,
      fontSize: 7.5, color: TEXT_SEC, fontFace: 'Courier New', wrap: true,
    })
  })

  // Footer on all slides
  ;[cover, scoreSl, critSl, winsSl, recSl].forEach(sl => {
    sl.addText('auditpdf.com', {
      x: SW - 1.5, y: SH - 0.3, w: 1.2, h: 0.25,
      fontSize: 7, color: TEXT_SEC, fontFace: 'Courier New', align: 'right',
    })
  })

  const buffer = await pptx.write({ outputType: 'arraybuffer' }) as ArrayBuffer
  return new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' })
}
