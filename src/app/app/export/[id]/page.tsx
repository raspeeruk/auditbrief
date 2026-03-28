'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import type { AuditReportDTO } from '@/types'

export default function ExportPage() {
  const params = useParams()
  const router = useRouter()
  const reportId = params.id as string
  const [report, setReport] = useState<AuditReportDTO | null>(null)
  const [loading, setLoading] = useState(true)
  const [exporting, setExporting] = useState(false)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/report/${reportId}`)
        if (res.ok) setReport(await res.json())
      } catch { /* ignore */ } finally { setLoading(false) }
    }
    load()
  }, [reportId])

  const handleExport = async () => {
    if (!report) return
    setExporting(true)
    try {
      const { generateAuditPdf } = await import('@/lib/export/audit-pdf-generator')
      const blob = await generateAuditPdf(report)
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `auditbrief-${report.companyName.replace(/[^a-zA-Z0-9]+/g, '-')}.pdf`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (err) {
      console.error(err)
      alert('Export failed')
    } finally {
      setExporting(false)
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

  return (
    <div className="max-w-[600px] mx-auto">
      <div className="mb-8">
        <p className="label mb-2">Export</p>
        <h1 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase" style={{ fontSize: '48px', lineHeight: '1' }}>
          Download PDF
        </h1>
      </div>

      <div className="card-brutal p-8 space-y-6">
        <div>
          <p className="label mb-2">Report</p>
          <p className="font-[family-name:var(--font-heading)] text-[24px] text-[#111110] uppercase">{report.companyName}</p>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56]">{report.url}</p>
        </div>

        <div className="grid grid-cols-2 gap-0 border-2 border-[#111110]">
          <div className="p-4 border-r-2 border-[#111110]">
            <p className="label mb-1">Overall Score</p>
            <p className="font-[family-name:var(--font-heading)] text-[#B8FF00] [text-shadow:2px_2px_0_#111110]" style={{ fontSize: '48px' }}>
              {report.overallScore}
            </p>
          </div>
          <div className="p-4">
            <p className="label mb-1">Issues Found</p>
            <p className="font-[family-name:var(--font-heading)] text-[#111110]" style={{ fontSize: '48px' }}>
              {report.sections.reduce((n, s) => n + s.issues.length, 0)}
            </p>
          </div>
        </div>

        <button onClick={handleExport} disabled={exporting} className="btn-accent w-full text-center">
          {exporting ? 'Generating PDF...' : 'Download PDF Report'}
        </button>

        <Button variant="secondary" onClick={() => router.push(`/app/report/${reportId}`)}>
          Back to report
        </Button>
      </div>
    </div>
  )
}
