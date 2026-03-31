'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import type { AuditReportDTO, AuditIssue, IssueSeverity } from '@/types'

const SEVERITY_ORDER: IssueSeverity[] = ['critical', 'warning', 'info', 'pass']

function severityClass(s: IssueSeverity) {
  if (s === 'critical') return 'badge-critical'
  if (s === 'warning') return 'badge-warning'
  if (s === 'info') return 'badge-info'
  return 'badge-pass'
}

function scoreColor(score: number) {
  if (score >= 80) return '#B8FF00'
  if (score >= 60) return '#F59E0B'
  return '#FF4D00'
}

function ScoreRing({ score, size = 80 }: { score: number; size?: number }) {
  const r = (size / 2) - 6
  const circ = 2 * Math.PI * r
  const offset = circ - (score / 100) * circ

  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#E8E8E4" strokeWidth={5} />
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none"
        stroke={scoreColor(score)}
        strokeWidth={5}
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="square"
      />
    </svg>
  )
}

export default function AuditReportPage() {
  const params = useParams()
  const router = useRouter()
  const reportId = params.id as string
  const [report, setReport] = useState<AuditReportDTO | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [checkingOut, setCheckingOut] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/report/${reportId}`)
        if (res.ok) {
          const data = await res.json()
          setReport(data)
          if (data.sections?.[0]) setActiveSection(data.sections[0].id)
          // Store full report in sessionStorage for the success page
          try {
            sessionStorage.setItem(`auditbrief_report_${reportId}`, JSON.stringify(data))
          } catch { /* storage quota exceeded — ignore */ }
        }
      } catch { /* ignore */ } finally { setLoading(false) }
    }
    load()
  }, [reportId])

  const saveReport = async () => {
    if (!report) return
    setSaving(true)
    try {
      await fetch(`/api/report/${reportId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(report),
      })
    } catch { /* ignore */ } finally { setSaving(false) }
  }

  const handleCheckout = async () => {
    if (!report) return
    setCheckingOut(true)
    try {
      // Persist latest state first so success page can pull it
      await saveReport()
      // Also refresh sessionStorage with latest report
      try {
        sessionStorage.setItem(`auditbrief_report_${reportId}`, JSON.stringify(report))
      } catch { /* ignore */ }

      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reportId }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert('Checkout failed — please try again')
        setCheckingOut(false)
      }
    } catch (err) {
      console.error('Checkout error:', err)
      alert('Checkout failed — check console')
      setCheckingOut(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="w-8 h-8 border-2 border-[#B8FF00] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!report) {
    return (
      <div className="text-center py-24">
        <h2 className="font-[family-name:var(--font-heading)] text-[32px] uppercase mb-4">Report not found</h2>
        <Button onClick={() => router.push('/app/upload')}>New audit</Button>
      </div>
    )
  }

  // Preview: show only the first section's issues in the main panel
  const firstSection = report.sections[0]
  const currentSection = report.sections.find(s => s.id === activeSection) || firstSection
  const isPreviewSection = currentSection?.id === firstSection?.id

  return (
    <div className={`max-w-[1100px] mx-auto ${!report.paid ? 'pb-20' : ''}`}>
      {/* Report header */}
      <div className="mb-8 flex items-start justify-between gap-6 flex-wrap">
        <div>
          <p className="label mb-2">{report.auditDate}</p>
          <h1
            className="font-[family-name:var(--font-heading)] text-[#111110] uppercase"
            style={{ fontSize: '48px', lineHeight: '1' }}
          >
            {report.companyName}
          </h1>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] mt-1 break-all">{report.url}</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm" onClick={saveReport} loading={saving}>
            Save
          </Button>
          <button
            onClick={handleCheckout}
            disabled={checkingOut}
            className="btn-accent flex items-center gap-2"
          >
            {checkingOut ? (
              <>
                <span className="w-4 h-4 border-2 border-[#111110] border-t-transparent rounded-full animate-spin" />
                Redirecting...
              </>
            ) : (
              'Download Full Audit (PDF + PPTX) — £9'
            )}
          </button>
        </div>
      </div>

      {/* Score + executive summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-[#111110] mb-8">
        {/* Overall score */}
        <div className="p-8 border-r-2 border-[#111110] flex flex-col items-center justify-center text-center bg-[#111110]">
          <p className="label text-[#B8FF00] mb-2">Overall Score</p>
          <div className="relative mb-2">
            <ScoreRing score={report.overallScore} size={120} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="font-[family-name:var(--font-heading)] text-[#B8FF00]"
                style={{ fontSize: '44px', lineHeight: 1 }}
              >
                {report.overallScore}
              </span>
            </div>
          </div>
          {report.agencyBranding?.name && (
            <p className="font-[family-name:var(--font-ui)] text-xs text-[#E8E8E4] uppercase tracking-wider mt-2">
              Prepared by {report.agencyBranding.name}
            </p>
          )}
        </div>

        {/* Executive summary */}
        <div className="md:col-span-2 p-8">
          <p className="label mb-3">Executive Summary</p>
          <textarea
            value={report.executiveSummary}
            onChange={e => setReport(prev => prev ? { ...prev, executiveSummary: e.target.value } : prev)}
            rows={5}
            className="w-full font-[family-name:var(--font-body)] text-sm text-[#111110] bg-transparent resize-none focus:outline-none leading-relaxed placeholder:text-[#C8C8C4]"
            placeholder="Executive summary..."
          />
        </div>
      </div>

      {/* Section score tabs */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-0 border-2 border-[#111110] mb-8">
        {report.sections.map((section, i) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={[
              'p-4 text-center relative transition-colors',
              i < report.sections.length - 1 ? 'border-r-2 border-[#111110]' : '',
              activeSection === section.id ? 'bg-[#111110]' : 'hover:bg-[#E8E8E4]',
            ].join(' ')}
          >
            <div className="flex justify-center mb-2">
              <div className="relative">
                <ScoreRing score={section.score} size={60} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className={`font-[family-name:var(--font-heading)] ${activeSection === section.id ? 'text-[#B8FF00]' : 'text-[#111110]'}`}
                    style={{ fontSize: '18px' }}
                  >
                    {section.score}
                  </span>
                </div>
              </div>
            </div>
            <p className={`font-[family-name:var(--font-ui)] text-[9px] font-semibold uppercase tracking-wider leading-tight ${activeSection === section.id ? 'text-[#E8E8E4]' : 'text-[#5A5A56]'}`}>
              {section.name}
            </p>
            {activeSection === section.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B8FF00]" />
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active section issues — preview: first section only, others locked */}
        <div className="lg:col-span-2">
          {currentSection && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2
                  className="font-[family-name:var(--font-heading)] text-[#111110] uppercase"
                  style={{ fontSize: '32px' }}
                >
                  {currentSection.name}
                </h2>
                <span
                  className="font-[family-name:var(--font-heading)]"
                  style={{ fontSize: '32px', color: scoreColor(currentSection.score) }}
                >
                  {currentSection.score}
                </span>
              </div>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] mb-6">
                {currentSection.summary}
              </p>

              {isPreviewSection ? (
                /* First section — full preview */
                <div className="space-y-3">
                  {[...currentSection.issues]
                    .sort((a, b) => SEVERITY_ORDER.indexOf(a.severity) - SEVERITY_ORDER.indexOf(b.severity))
                    .map(issue => (
                      <IssueCard key={issue.id} issue={issue} />
                    ))}
                </div>
              ) : (
                /* Locked sections — paywall overlay */
                <div className="relative">
                  {/* Blurred preview */}
                  <div className="space-y-3 select-none" style={{ filter: 'blur(4px)', pointerEvents: 'none' }}>
                    {[...currentSection.issues]
                      .sort((a, b) => SEVERITY_ORDER.indexOf(a.severity) - SEVERITY_ORDER.indexOf(b.severity))
                      .slice(0, 3)
                      .map(issue => (
                        <IssueCard key={issue.id} issue={issue} />
                      ))}
                  </div>
                  {/* Paywall card */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#F2F2EF] border-2 border-[#111110] p-8 text-center max-w-sm shadow-[4px_4px_0_#111110]">
                      <p className="font-[family-name:var(--font-heading)] text-[#111110] uppercase mb-2" style={{ fontSize: '28px' }}>
                        Full audit locked
                      </p>
                      <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] mb-6">
                        Get the complete {report.sections.length}-section analysis + PDF + editable PPTX deck.
                      </p>
                      <button
                        onClick={handleCheckout}
                        disabled={checkingOut}
                        className="btn-accent w-full text-center"
                      >
                        {checkingOut ? 'Redirecting...' : 'Unlock — £9'}
                      </button>
                      <p className="font-[family-name:var(--font-body)] text-xs text-[#5A5A56] mt-3">
                        One-time payment. PDF + PPTX included.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="card-brutal-sm p-6">
            <p className="label mb-4">Top Priorities</p>
            <div className="space-y-4">
              {report.topPriorities.map((issue, i) => (
                <div key={issue.id} className="flex items-start gap-3">
                  <span
                    className="font-[family-name:var(--font-heading)] text-[#FF4D00] shrink-0 leading-none mt-0.5"
                    style={{ fontSize: '20px' }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#111110] mb-0.5">
                      {issue.title}
                    </p>
                    <p className="font-[family-name:var(--font-body)] text-[11px] text-[#5A5A56]">
                      {issue.recommendation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-brutal-sm p-6">
            <p className="label mb-4">Quick Wins</p>
            <div className="space-y-4">
              {report.quickWins.map((issue, i) => (
                <div key={issue.id} className="flex items-start gap-3">
                  <span
                    className="font-[family-name:var(--font-heading)] text-[#B8FF00] [text-shadow:1px_1px_0_#111110] shrink-0 leading-none mt-0.5"
                    style={{ fontSize: '20px' }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#111110] mb-0.5">
                      {issue.title}
                    </p>
                    <p className="font-[family-name:var(--font-body)] text-[11px] text-[#5A5A56]">
                      {issue.recommendation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upgrade CTA in sidebar */}
          <div className="bg-[#111110] border-2 border-[#111110] p-6">
            <p className="font-[family-name:var(--font-heading)] text-[#B8FF00] uppercase mb-2" style={{ fontSize: '22px' }}>
              Get the full report
            </p>
            <p className="font-[family-name:var(--font-body)] text-xs text-[#E8E8E4] mb-4">
              PDF + editable PowerPoint deck. Share with clients in minutes.
            </p>
            <button
              onClick={handleCheckout}
              disabled={checkingOut}
              className="btn-accent w-full text-center text-sm"
            >
              {checkingOut ? 'Redirecting...' : 'Download — £9'}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 flex items-center justify-between py-6 border-t-2 border-[#111110]">
        <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56]">
          {report.sections.reduce((n, s) => n + s.issues.length, 0)} issues across {report.sections.length} categories
        </p>
        <div className="flex items-center gap-3">
          <Button variant="secondary" onClick={saveReport} loading={saving}>
            Save
          </Button>
          <button
            onClick={handleCheckout}
            disabled={checkingOut}
            className="btn-accent flex items-center gap-2"
          >
            {checkingOut ? (
              <>
                <span className="w-4 h-4 border-2 border-[#111110] border-t-transparent rounded-full animate-spin" />
                Redirecting...
              </>
            ) : (
              'Download Full Audit (PDF + PPTX) — £9'
            )}
          </button>
        </div>
      </div>

      {/* Sticky bottom CTA bar for unpaid reports */}
      {!report.paid && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#111110] border-t-2 border-[#B8FF00]">
          <div className="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <span className="font-[family-name:var(--font-heading)] text-[#B8FF00] text-[28px] leading-none shrink-0">
                {report.overallScore}
              </span>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#E8E8E4] truncate">
                Get the full report + PDF + PPTX download
              </p>
            </div>
            <button
              onClick={handleCheckout}
              disabled={checkingOut}
              className="btn-accent shrink-0 flex items-center gap-2"
            >
              {checkingOut ? (
                <>
                  <span className="w-4 h-4 border-2 border-[#111110] border-t-transparent rounded-full animate-spin" />
                  Redirecting...
                </>
              ) : (
                'Unlock Full Report — £9'
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function IssueCard({ issue }: { issue: AuditIssue }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="card-brutal-sm">
      <button
        className="w-full flex items-center justify-between p-4 text-left hover:bg-[#E8E8E4] transition-colors"
        onClick={() => setOpen(v => !v)}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className={severityClass(issue.severity)}>{issue.severity}</span>
          <span className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-wider text-[#111110] truncate">
            {issue.title}
          </span>
        </div>
        <span className="font-[family-name:var(--font-body)] text-[#5A5A56] ml-3 shrink-0">{open ? '−' : '+'}</span>
      </button>

      {open && (
        <div className="border-t border-[#C8C8C4] p-4 space-y-3">
          <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] leading-relaxed">
            {issue.description}
          </p>
          <div className="border-l-2 border-[#B8FF00] pl-3">
            <p className="label mb-1">Recommendation</p>
            <p className="font-[family-name:var(--font-body)] text-sm text-[#111110] leading-relaxed">
              {issue.recommendation}
            </p>
          </div>
          {issue.affectedPages && issue.affectedPages.length > 0 && (
            <div>
              <p className="label mb-1">Affected pages</p>
              <ul className="space-y-1">
                {issue.affectedPages.map((page, i) => (
                  <li key={i} className="font-[family-name:var(--font-body)] text-xs text-[#5A5A56] break-all">
                    {page}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
