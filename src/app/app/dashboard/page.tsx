import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { getUserAuditReports } from '@/lib/session-store'
import { getUserTier, getTrialDaysLeft } from '@/lib/auth/tier'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/auth/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  const tier = getUserTier(profile)
  const trialDays = getTrialDaysLeft(profile)

  const audits = await getUserAuditReports(user.id)

  return (
    <div className="max-w-[1000px] mx-auto">
      {/* Trial banner */}
      {tier === 'trial' && (
        <div className="mb-6 border-2 border-[#B8FF00] bg-[#B8FF00]/5 px-5 py-4 flex items-center justify-between">
          <div>
            <p className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-wider text-[#111110]">
              Free trial — {trialDays} day{trialDays !== 1 ? 's' : ''} remaining
            </p>
            <p className="font-[family-name:var(--font-body)] text-xs text-[#5A5A56]">
              Upgrade for white-label PDFs and unlimited audits.
            </p>
          </div>
          <a href="/api/checkout" className="btn-accent text-sm">
            Upgrade to Pro
          </a>
        </div>
      )}

      {tier === 'trial_expired' && (
        <div className="mb-6 border-2 border-[#FF4D00] bg-[#FF4D00]/5 px-5 py-4 flex items-center justify-between">
          <div>
            <p className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-wider text-[#111110]">
              Trial ended
            </p>
            <p className="font-[family-name:var(--font-body)] text-xs text-[#5A5A56]">
              PDF exports now include a watermark. Upgrade to restore full reports.
            </p>
          </div>
          <a href="/api/checkout" className="btn-accent text-sm">
            Upgrade now
          </a>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="label mb-2">Dashboard</p>
          <h1
            className="font-[family-name:var(--font-heading)] text-[#111110] uppercase"
            style={{ fontSize: '48px', lineHeight: '1' }}
          >
            My Audits
          </h1>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] mt-2">
            {audits.length === 0
              ? 'No audits yet. Audit your first site below.'
              : `${audits.length} audit${audits.length !== 1 ? 's' : ''} completed`}
          </p>
        </div>
        <Link href="/app/upload" className="btn-accent">
          New audit
        </Link>
      </div>

      {/* Audit list */}
      {audits.length > 0 && (
        <div className="space-y-0 border-2 border-[#111110]">
          {audits.map((audit, i) => (
            <Link
              key={audit.id}
              href={`/app/report/${audit.id}`}
              className={`flex items-center justify-between px-6 py-5 hover:bg-[#E8E8E4] transition-colors ${i > 0 ? 'border-t-2 border-[#111110]' : ''}`}
            >
              <div className="flex items-center gap-6">
                <span
                  className="font-[family-name:var(--font-heading)] shrink-0"
                  style={{
                    fontSize: '36px',
                    color: audit.overallScore >= 80 ? '#B8FF00' : audit.overallScore >= 60 ? '#F59E0B' : '#FF4D00',
                    textShadow: '1px 1px 0 #111110',
                  }}
                >
                  {audit.overallScore}
                </span>
                <div>
                  <p className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-wider text-[#111110]">
                    {audit.url}
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-xs text-[#5A5A56] mt-0.5">
                    {audit.auditDate}
                  </p>
                </div>
              </div>
              <svg className="w-5 h-5 text-[#5A5A56]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          ))}
        </div>
      )}

      {/* Empty state */}
      {audits.length === 0 && (
        <div className="card-brutal p-16 text-center">
          <div
            className="font-[family-name:var(--font-heading)] text-[#B8FF00] [text-shadow:3px_3px_0_#111110] mb-4"
            style={{ fontSize: '80px', lineHeight: '1' }}
          >
            ?
          </div>
          <h3
            className="font-[family-name:var(--font-heading)] text-[#111110] uppercase mb-2"
            style={{ fontSize: '32px' }}
          >
            No audits yet
          </h3>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#5A5A56] mb-8">
            Enter a URL and we&apos;ll score it across 6 SEO categories in under 2 minutes.
          </p>
          <Link href="/app/upload" className="btn-accent inline-block">
            Audit your first site
          </Link>
        </div>
      )}
    </div>
  )
}
