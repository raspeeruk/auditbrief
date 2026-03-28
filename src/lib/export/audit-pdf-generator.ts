import { jsPDF } from 'jspdf'
import type { AuditReportDTO, AuditSection, AuditIssue, IssueSeverity } from '@/types'

// AuditBrief brutalist palette
const INK = { r: 17, g: 17, b: 16 }           // #111110
const LIME = { r: 184, g: 255, b: 0 }         // #B8FF00
const BG = { r: 242, g: 242, b: 239 }         // #F2F2EF
const SURFACE = { r: 232, g: 232, b: 228 }    // #E8E8E4
const TEXT_SEC = { r: 90, g: 90, b: 86 }      // #5A5A56
const RED_ERR = { r: 255, g: 77, b: 0 }       // #FF4D00
const AMBER = { r: 245, g: 158, b: 11 }       // #F59E0B
const BLUE_INFO = { r: 59, g: 130, b: 246 }   // #3B82F6
const GREEN_PASS = { r: 34, g: 197, b: 94 }   // #22C55E
const WHITE = { r: 255, g: 255, b: 255 }

type RGB = { r: number; g: number; b: number }

const W = 210  // A4 portrait width mm
const H = 297  // A4 portrait height mm
const MARGIN = 14

function setFill(doc: jsPDF, c: RGB) { doc.setFillColor(c.r, c.g, c.b) }
function setTextC(doc: jsPDF, c: RGB) { doc.setTextColor(c.r, c.g, c.b) }
function setDraw(doc: jsPDF, c: RGB) { doc.setDrawColor(c.r, c.g, c.b) }

function scoreColor(score: number): RGB {
  if (score >= 80) return LIME
  if (score >= 60) return AMBER
  return RED_ERR
}

function severityColor(s: IssueSeverity): RGB {
  if (s === 'critical') return RED_ERR
  if (s === 'warning') return AMBER
  if (s === 'info') return BLUE_INFO
  return GREEN_PASS
}

function hexToRgb(hex: string): RGB {
  const clean = hex.replace('#', '')
  if (clean.length !== 6) return LIME
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  }
}

function truncate(s: string, max: number): string {
  return s.length > max ? s.slice(0, max - 1) + '\u2026' : s
}

let pageNum = 0
let totalPages = 0

function drawFooter(doc: jsPDF, report: AuditReportDTO) {
  setFill(doc, INK)
  doc.rect(0, H - 10, W, 10, 'F')
  setTextC(doc, SURFACE)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7)
  doc.text('AuditBrief', MARGIN, H - 4)
  doc.text(report.url, W / 2, H - 4, { align: 'center' })
  doc.text(`${pageNum} / ${totalPages}`, W - MARGIN, H - 4, { align: 'right' })
  if (report.agencyBranding?.name) {
    doc.text(`Prepared by ${report.agencyBranding.name}`, W - MARGIN, H - 4, { align: 'right' })
  }
}

function drawPageHeader(doc: jsPDF, title: string, accentColor: RGB) {
  setFill(doc, INK)
  doc.rect(0, 0, W, 14, 'F')
  setTextC(doc, accentColor)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9)
  doc.text('AUDITBRIEF', MARGIN, 9)
  setTextC(doc, SURFACE)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.text(title, MARGIN + 32, 9)
}

function drawScoreRing(doc: jsPDF, score: number, cx: number, cy: number, r: number) {
  const color = scoreColor(score)
  // Background ring
  setDraw(doc, SURFACE)
  doc.setLineWidth(2)
  doc.circle(cx, cy, r, 'S')
  // Foreground arc (approximate with multiple short lines)
  setDraw(doc, color)
  doc.setLineWidth(2.5)
  const startAngle = -Math.PI / 2
  const endAngle = startAngle + (score / 100) * 2 * Math.PI
  const steps = 60
  for (let i = 0; i < steps; i++) {
    const a1 = startAngle + (i / steps) * (endAngle - startAngle)
    const a2 = startAngle + ((i + 1) / steps) * (endAngle - startAngle)
    if (a2 > endAngle) break
    doc.line(cx + r * Math.cos(a1), cy + r * Math.sin(a1), cx + r * Math.cos(a2), cy + r * Math.sin(a2))
  }
  // Score text in centre
  setTextC(doc, color)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(r * 1.6)
  doc.text(String(score), cx, cy + r * 0.55, { align: 'center' })
}

export async function generateAuditPdf(report: AuditReportDTO): Promise<Blob> {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const accentHex = report.agencyBranding?.accentColor || '#B8FF00'
  const accent = hexToRgb(accentHex)

  // Estimate pages: cover + summary + 1 per section pair
  totalPages = 2 + Math.ceil(report.sections.length / 2)
  pageNum = 1

  // ────── PAGE 1: COVER ──────
  setFill(doc, BG)
  doc.rect(0, 0, W, H, 'F')

  // Top black band
  setFill(doc, INK)
  doc.rect(0, 0, W, 60, 'F')

  // Grain texture lines (brutalist texture simulation)
  doc.setLineWidth(0.1)
  setDraw(doc, { r: 255, g: 255, b: 255 })
  doc.saveGraphicsState()
  doc.setGState(new (doc as any).GState({ opacity: 0.03 }))
  for (let i = 0; i < 60; i += 2) {
    doc.line(0, i, W, i)
  }
  doc.restoreGraphicsState()

  // Score hero — giant number
  setTextC(doc, accent)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(72)
  doc.text(String(report.overallScore), MARGIN, 52)

  // Label next to score
  setTextC(doc, SURFACE)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.text('OVERALL SCORE', MARGIN + 38, 42)
  setTextC(doc, { r: 200, g: 200, b: 196 })
  doc.setFontSize(7)
  doc.text('/100', MARGIN + 38, 48)

  // Company name
  setFill(doc, BG)
  doc.rect(0, 60, W, H - 60, 'F')

  setTextC(doc, INK)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(28)
  const companyLines = doc.splitTextToSize(report.companyName.toUpperCase(), W - MARGIN * 2)
  doc.text(companyLines, MARGIN, 80)

  // URL
  setTextC(doc, TEXT_SEC)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.text(truncate(report.url, 55), MARGIN, 80 + companyLines.length * 12)

  // Audit date
  const dateY = 80 + companyLines.length * 12 + 10
  setTextC(doc, TEXT_SEC)
  doc.setFontSize(8)
  doc.text(`AUDIT DATE: ${report.auditDate}`, MARGIN, dateY)

  // Agency branding
  if (report.agencyBranding?.name) {
    setFill(doc, INK)
    doc.rect(MARGIN, dateY + 8, W - MARGIN * 2, 12, 'F')
    setTextC(doc, accent)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(8)
    doc.text(`PREPARED BY: ${report.agencyBranding.name.toUpperCase()}`, MARGIN + 4, dateY + 16)
  }

  // Section score mini grid
  const gridStartY = 130
  setTextC(doc, INK)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(8)
  doc.text('SEO SECTION SCORES', MARGIN, gridStartY - 4)
  setDraw(doc, INK)
  doc.setLineWidth(0.5)
  doc.line(MARGIN, gridStartY - 2, W - MARGIN, gridStartY - 2)

  const colW = (W - MARGIN * 2) / 3
  report.sections.forEach((section, i) => {
    const col = i % 3
    const row = Math.floor(i / 3)
    const x = MARGIN + col * colW
    const y = gridStartY + row * 22

    const sColor = scoreColor(section.score)
    setFill(doc, sColor)
    doc.rect(x, y, colW - 2, 5, 'F')

    setTextC(doc, INK)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(16)
    doc.text(String(section.score), x + 2, y + 15)

    setTextC(doc, TEXT_SEC)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(6.5)
    doc.text(section.name.toUpperCase(), x + 2, y + 19)
  })

  // Executive summary
  const execY = gridStartY + Math.ceil(report.sections.length / 3) * 22 + 10
  setDraw(doc, accent)
  doc.setLineWidth(1)
  doc.line(MARGIN, execY, MARGIN, execY + 24)
  setTextC(doc, INK)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(7)
  doc.text('EXECUTIVE SUMMARY', MARGIN + 4, execY + 4)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  const summaryLines = doc.splitTextToSize(report.executiveSummary, W - MARGIN * 2 - 4)
  doc.text(summaryLines.slice(0, 3), MARGIN + 4, execY + 10)

  drawFooter(doc, report)
  pageNum++

  // ────── PAGE 2: TOP PRIORITIES + QUICK WINS ──────
  doc.addPage('a4', 'portrait')
  setFill(doc, BG)
  doc.rect(0, 0, W, H, 'F')
  drawPageHeader(doc, report.companyName.toUpperCase(), accent)

  let y = 24

  // Top priorities
  setTextC(doc, INK)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(18)
  doc.text('TOP PRIORITIES', MARGIN, y)
  y += 6
  setDraw(doc, RED_ERR)
  doc.setLineWidth(1.5)
  doc.line(MARGIN, y, W - MARGIN, y)
  y += 8

  report.topPriorities.forEach((issue, i) => {
    if (y > H - 60) return
    // Number
    setTextC(doc, RED_ERR)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(20)
    doc.text(String(i + 1), MARGIN, y + 6)

    // Severity badge
    const sColor = severityColor(issue.severity)
    setFill(doc, sColor)
    doc.rect(MARGIN + 10, y, 18, 5, 'F')
    setTextC(doc, WHITE)
    doc.setFontSize(6)
    doc.text(issue.severity.toUpperCase(), MARGIN + 10 + 9, y + 3.8, { align: 'center' })

    // Title
    setTextC(doc, INK)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9)
    doc.text(issue.title.toUpperCase(), MARGIN + 32, y + 4)

    // Recommendation
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    setTextC(doc, TEXT_SEC)
    const recLines = doc.splitTextToSize(issue.recommendation, W - MARGIN * 2 - 32)
    doc.text(recLines.slice(0, 2), MARGIN + 32, y + 9)

    y += 18
  })

  y += 6
  // Quick wins
  setTextC(doc, INK)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(18)
  doc.text('QUICK WINS', MARGIN, y)
  y += 6
  setDraw(doc, accent)
  doc.setLineWidth(1.5)
  doc.line(MARGIN, y, W - MARGIN, y)
  y += 8

  report.quickWins.forEach((issue, i) => {
    if (y > H - 20) return
    setTextC(doc, accent)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(20)
    doc.text(String(i + 1), MARGIN, y + 6)

    setTextC(doc, INK)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9)
    doc.text(issue.title.toUpperCase(), MARGIN + 12, y + 4)

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    setTextC(doc, TEXT_SEC)
    const recLines = doc.splitTextToSize(issue.recommendation, W - MARGIN * 2 - 12)
    doc.text(recLines.slice(0, 2), MARGIN + 12, y + 9)

    y += 18
  })

  drawFooter(doc, report)
  pageNum++

  // ────── SECTION PAGES: 2 per page ──────
  for (let i = 0; i < report.sections.length; i += 2) {
    doc.addPage('a4', 'portrait')
    setFill(doc, BG)
    doc.rect(0, 0, W, H, 'F')
    drawPageHeader(doc, report.companyName.toUpperCase(), accent)

    let sy = 20

    const sectionsOnPage = report.sections.slice(i, i + 2)
    const halfH = (H - 20 - 12) / sectionsOnPage.length

    for (const section of sectionsOnPage) {
      sy = drawSectionBlock(doc, section, sy, halfH - 4, accent)
      sy += 6
    }

    drawFooter(doc, report)
    pageNum++
  }

  return doc.output('blob')
}

function drawSectionBlock(doc: jsPDF, section: AuditSection, startY: number, maxH: number, accent: RGB): number {
  let y = startY

  const sColor = scoreColor(section.score)

  // Section header bar
  setFill(doc, INK)
  doc.rect(0, y, W, 12, 'F')
  setFill(doc, sColor)
  doc.rect(0, y, 4, 12, 'F')

  setTextC(doc, { r: 255, g: 255, b: 255 })
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(12)
  doc.text(section.name.toUpperCase(), MARGIN + 2, y + 8.5)

  setTextC(doc, sColor)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(18)
  doc.text(String(section.score), W - MARGIN - 4, y + 9, { align: 'right' })
  y += 15

  // Summary
  setTextC(doc, TEXT_SEC)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7.5)
  const sumLines = doc.splitTextToSize(section.summary, W - MARGIN * 2)
  doc.text(sumLines.slice(0, 2), MARGIN, y)
  y += sumLines.slice(0, 2).length * 4 + 4

  // Issues
  const SEVERITY_ORDER: IssueSeverity[] = ['critical', 'warning', 'info', 'pass']
  const sortedIssues = [...section.issues].sort((a, b) =>
    SEVERITY_ORDER.indexOf(a.severity) - SEVERITY_ORDER.indexOf(b.severity)
  )

  for (const issue of sortedIssues) {
    if (y > startY + maxH) break

    const sev = severityColor(issue.severity)
    // Severity dot
    setFill(doc, sev)
    doc.circle(MARGIN + 1.5, y + 2, 1.5, 'F')

    // Title
    setTextC(doc, INK)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(8)
    doc.text(truncate(issue.title, 60), MARGIN + 5, y + 3)

    // Recommendation
    setTextC(doc, TEXT_SEC)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(7)
    const recLine = doc.splitTextToSize(issue.recommendation, W - MARGIN * 2 - 5)
    doc.text(recLine.slice(0, 1), MARGIN + 5, y + 7)

    y += 11
  }

  return y
}
