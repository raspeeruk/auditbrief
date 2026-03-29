'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import type { AuditReportDTO } from '@/types'

type DownloadState = 'idle' | 'pdf' | 'pptx' | 'done' | 'error'

function SuccessContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const sessionId = searchParams.get('session_id')
  const reportId = searchParams.get('report_id')

  const [report, setReport] = useState<AuditReportDTO | null>(null)
  const [downloadState, setDownloadState] = useState<DownloadState>('idle')
  const [autoTriggered, setAutoTriggered] = useState(false)

  // Load report — try sessionStorage first (fast), then API
  useEffect(() => {
    if (!reportId) return

    const stored = sessionStorage.getItem(`auditbrief_report_${reportId}`)
    if (stored) {
      try {
        setReport(JSON.parse(stored))
        return
      } catch { /* fall through to API */ }
    }

    fetch(`/api/report/${reportId}`)
      .then(r => r.ok ? r.json() : null)
      .then(data => { if (data) setReport(data) })
      .catch(() => { /* ignore */ })
  }, [reportId])

  // Auto-trigger downloads once report is loaded
  useEffect(() => {
    if (report && sessionId && !autoTriggered) {
      setAutoTriggered(true)
      handleDownloadAll()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [report, sessionId])

  const triggerDownload = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleDownloadAll = async () => {
    if (!report) return
    const slug = report.companyName.replace(/[^a-zA-Z0-9]+/g, '-')
    const date = report.auditDate

    try {
      // PDF
      setDownloadState('pdf')
      const { generateAuditPdf } = await import('@/lib/export/audit-pdf-generator')
      const pdfBlob = await generateAuditPdf(report)
      triggerDownload(pdfBlob, `auditbrief-${slug}-${date}.pdf`)

      // Short pause before PPTX so browser handles both downloads
      await new Promise(r => setTimeout(r, 600))

      // PPTX
      setDownloadState('pptx')
      const { generateAuditPptx } = await import('@/lib/export/audit-pptx-generator')
      const pptxBlob = await generateAuditPptx(report)
      triggerDownload(pptxBlob, `auditbrief-${slug}-${date}.pptx`)

      setDownloadState('done')
    } catch (err) {
      console.error('Download failed:', err)
      setDownloadState('error')
    }
  }

  const stateLabel: Record<DownloadState, string> = {
    idle: 'Preparing downloads...',
    pdf: 'Generating PDF...',
    pptx: 'Generating PPTX...',
    done: 'Downloads complete',
    error: 'Download failed — try again below',
  }

  return (
    <div className="max-w-[640px] mx-auto py-12">
      {/* Success header */}
      <div className="mb-10">
        <div className="inline-block bg-[#B8FF00] px-3 py-1 mb-4">
          <p className="font-[family-name:var(--font-ui)] text-[10px] font-semibold uppercase tracking-widest text-[#111110]">
            Payment confirmed
          </p>
        </div>
        <h1
          className="font-[family-name:var(--font-heading)] text-[#111110] uppercase mb-2"
          style={{ fontSize: '56px', lineHeight: 1 }}
        >
          Download<br />your audit
        </h1>
        {report && (
          <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] mt-3">
            {report.companyName} — {report.url}
          </p>
        )}
      </div>

      {/* Download status card */}
      <div className="card-brutal p-8 mb-6">
        {/* Status indicator */}
        <div className="flex items-center gap-3 mb-8">
          {downloadState !== 'done' && downloadState !== 'error' && (
            <div className="w-5 h-5 border-2 border-[#B8FF00] border-t-transparent rounded-full animate-spin shrink-0" />
          )}
          {downloadState === 'done' && (
            <div className="w-5 h-5 rounded-full bg-[#B8FF00] flex items-center justify-center shrink-0">
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 4L3.5 6.5L9 1" stroke="#111110" strokeWidth="1.8" strokeLinecap="square"/>
              </svg>
            </div>
          )}
          {downloadState === 'error' && (
            <div className="w-5 h-5 rounded-full bg-[#FF4D00] flex items-center justify-center shrink-0 text-white text-xs font-bold">!</div>
          )}
          <p className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-wider text-[#111110]">
            {stateLabel[downloadState]}
          </p>
        </div>

        {/* Download items */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center justify-between p-4 border-2 border-[#111110] bg-[#F2F2EF]">
            <div>
              <p className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#111110] mb-0.5">
                PDF Report
              </p>
              <p className="font-[family-name:var(--font-body)] text-xs text-[#5A5A56]">
                Full SEO audit — print-ready A4
              </p>
            </div>
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
              downloadState === 'done' ? 'bg-[#B8FF00]' :
              downloadState === 'pdf' ? 'border-2 border-[#B8FF00] border-t-transparent animate-spin' :
              'bg-[#E8E8E4]'
            }`}>
              {downloadState === 'done' && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="#111110" strokeWidth="1.8" strokeLinecap="square"/>
                </svg>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border-2 border-[#111110] bg-[#F2F2EF]">
            <div>
              <p className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#111110] mb-0.5">
                PowerPoint Presentation
              </p>
              <p className="font-[family-name:var(--font-body)] text-xs text-[#5A5A56]">
                5-slide client deck — editable PPTX
              </p>
            </div>
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
              downloadState === 'done' ? 'bg-[#B8FF00]' :
              downloadState === 'pptx' ? 'border-2 border-[#B8FF00] border-t-transparent animate-spin' :
              'bg-[#E8E8E4]'
            }`}>
              {downloadState === 'done' && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="#111110" strokeWidth="1.8" strokeLinecap="square"/>
                </svg>
              )}
            </div>
          </div>
        </div>

        {/* Manual re-download button */}
        {(downloadState === 'done' || downloadState === 'error') && (
          <button
            onClick={handleDownloadAll}
            className="btn-accent w-full text-center"
          >
            {downloadState === 'error' ? 'Retry downloads' : 'Download again'}
          </button>
        )}
      </div>

      {/* Footer actions */}
      <div className="flex items-center gap-3">
        {report && (
          <Button variant="secondary" onClick={() => router.push(`/app/report/${reportId}`)}>
            Back to report
          </Button>
        )}
        <Button variant="secondary" onClick={() => router.push('/app/dashboard')}>
          My reports
        </Button>
        <Button onClick={() => router.push('/app/upload')}>
          New audit
        </Button>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center py-24">
        <div className="w-8 h-8 border-2 border-[#B8FF00] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <SuccessContent />
    </Suspense>
  )
}
