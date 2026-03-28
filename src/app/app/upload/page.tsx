'use client'

import { Suspense, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ProgressBar } from '@/components/ui/progress-bar'

export default function UploadPageWrapper() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center py-24">
        <div className="w-8 h-8 border-2 border-[#B8FF00] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <UploadPage />
    </Suspense>
  )
}

function UploadPage() {
  const router = useRouter()
  const [url, setUrl] = useState('')
  const [agencyName, setAgencyName] = useState('')
  const [agencyAccentColor, setAgencyAccentColor] = useState('#B8FF00')
  const [showBranding, setShowBranding] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [progress, setProgress] = useState({ step: '', progress: 0, detail: '' })
  const [error, setError] = useState<string | null>(null)

  const isValidUrl = (val: string) => {
    try {
      const u = val.startsWith('http') ? val : `https://${val}`
      new URL(u)
      return true
    } catch {
      return false
    }
  }

  const handleAudit = async () => {
    if (!url.trim() || !isValidUrl(url)) {
      setError('Please enter a valid URL (e.g. example.com)')
      return
    }

    setProcessing(true)
    setError(null)
    setProgress({ step: 'Starting audit...', progress: 5, detail: '' })

    try {
      const res = await fetch('/api/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: url.trim(),
          agencyName: agencyName.trim() || undefined,
          agencyAccentColor: agencyAccentColor || undefined,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Audit failed')
      }

      // Read SSE stream
      const reader = res.body?.getReader()
      const decoder = new TextDecoder()
      let resultId = ''

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          const text = decoder.decode(value)
          const lines = text.split('\n').filter(l => l.startsWith('data: '))
          for (const line of lines) {
            try {
              const data = JSON.parse(line.slice(6))
              if (data.type === 'progress') {
                setProgress({ step: data.step, progress: data.progress, detail: data.detail || '' })
              } else if (data.type === 'complete') {
                resultId = data.reportId
              } else if (data.type === 'error') {
                throw new Error(data.error)
              }
            } catch (e) {
              if (e instanceof Error && e.message !== 'Unexpected end of JSON input') {
                throw e
              }
            }
          }
        }
      }

      if (resultId) {
        router.push(`/app/report/${resultId}`)
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong')
      setProcessing(false)
    }
  }

  if (processing) {
    return (
      <div className="max-w-[640px] mx-auto">
        <div className="card-brutal p-10 text-center">
          <div className="font-[family-name:var(--font-heading)] text-[60px] text-[#B8FF00] leading-none mb-2 [text-shadow:2px_2px_0_#111110]">
            {progress.progress}%
          </div>
          <h3 className="font-[family-name:var(--font-heading)] text-[28px] text-[#111110] uppercase mb-2">
            {progress.step || 'Auditing...'}
          </h3>
          {progress.detail && (
            <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] mb-6">{progress.detail}</p>
          )}
          <ProgressBar progress={progress.progress} />
          <p className="font-[family-name:var(--font-body)] text-xs text-[#5A5A56] mt-4">
            Analysing {url}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-[640px] mx-auto">
      <div className="mb-10">
        <p className="label mb-3">New audit</p>
        <h1 className="font-[family-name:var(--font-heading)] text-[#111110] uppercase" style={{ fontSize: '52px', lineHeight: '1' }}>
          Audit a site
        </h1>
        <p className="font-[family-name:var(--font-body)] text-[#5A5A56] mt-3">
          Enter a URL and we&apos;ll analyse 6 SEO categories in under 2 minutes.
        </p>
      </div>

      <div className="card-brutal p-8 space-y-6">
        {/* URL input */}
        <div>
          <label className="label block mb-2">Site URL</label>
          <div className="flex gap-0">
            <span className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] bg-[#E8E8E4] border-2 border-r-0 border-[#111110] px-4 py-3 flex items-center">
              https://
            </span>
            <input
              type="text"
              value={url}
              onChange={e => { setUrl(e.target.value); setError(null) }}
              onKeyDown={e => { if (e.key === 'Enter') handleAudit() }}
              placeholder="example.com"
              className="flex-1 font-[family-name:var(--font-body)] text-sm border-2 border-[#111110] px-4 py-3 bg-[#F2F2EF] text-[#111110] placeholder:text-[#C8C8C4] focus:outline-none focus:bg-white"
              disabled={processing}
            />
          </div>
        </div>

        {/* Agency branding toggle */}
        <div>
          <button
            type="button"
            onClick={() => setShowBranding(!showBranding)}
            className="label text-[#111110] flex items-center gap-2 hover:text-[#B8FF00] transition-colors"
          >
            <span className="text-base">{showBranding ? '−' : '+'}</span>
            Add agency branding (optional)
          </button>

          {showBranding && (
            <div className="mt-4 space-y-4 pl-4 border-l-2 border-[#B8FF00]">
              <div>
                <label className="label block mb-2">Agency name</label>
                <input
                  type="text"
                  value={agencyName}
                  onChange={e => setAgencyName(e.target.value)}
                  placeholder="e.g. Ashworth Digital"
                  className="w-full font-[family-name:var(--font-body)] text-sm border-2 border-[#111110] px-4 py-3 bg-[#F2F2EF] text-[#111110] placeholder:text-[#C8C8C4] focus:outline-none focus:bg-white"
                />
              </div>
              <div>
                <label className="label block mb-2">Accent colour</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={agencyAccentColor}
                    onChange={e => setAgencyAccentColor(e.target.value)}
                    className="w-12 h-10 border-2 border-[#111110] cursor-pointer bg-transparent"
                  />
                  <input
                    type="text"
                    value={agencyAccentColor}
                    onChange={e => setAgencyAccentColor(e.target.value)}
                    className="font-[family-name:var(--font-body)] text-sm border-2 border-[#111110] px-4 py-3 bg-[#F2F2EF] text-[#111110] w-32 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {error && (
          <div className="border-2 border-[#FF4D00] bg-[#FF4D00]/5 p-4">
            <p className="font-[family-name:var(--font-body)] text-sm text-[#FF4D00]">{error}</p>
          </div>
        )}

        <button
          onClick={handleAudit}
          disabled={!url.trim() || processing}
          className="btn-accent w-full text-center disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ fontSize: '16px' }}
        >
          Audit this site
        </button>
      </div>

      <p className="font-[family-name:var(--font-body)] text-xs text-[#5A5A56] mt-4 text-center">
        Most audits complete in under 2 minutes.
      </p>
    </div>
  )
}
