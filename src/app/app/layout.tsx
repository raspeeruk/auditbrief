'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { StepIndicator } from '@/components/ui/step-indicator'
import { AuthProvider, useAuth } from '@/components/auth/auth-provider'
import type { Step } from '@/components/ui/step-indicator'

const AUDIT_STEPS: Step[] = [
  { id: 'upload', label: 'Enter URL' },
  { id: 'report', label: 'Review Report' },
  { id: 'export', label: 'Export PDF' },
]

function getCurrentStep(pathname: string): string {
  if (pathname.includes('/upload')) return 'upload'
  if (pathname.includes('/report')) return 'report'
  if (pathname.includes('/export')) return 'export'
  return 'upload'
}

function getCompletedSteps(current: string, steps: Step[]): string[] {
  const order = steps.map(s => s.id)
  const idx = order.indexOf(current)
  return order.slice(0, idx)
}

function AppNav() {
  const pathname = usePathname()
  const { user, tier, trialDaysLeft, signOut } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  const isDashboard = pathname === '/app/dashboard'
  const isSettings = pathname.startsWith('/app/settings')
  const showSteps = !isDashboard && !isSettings

  const steps = AUDIT_STEPS
  const currentStep = getCurrentStep(pathname)
  const completedSteps = getCompletedSteps(currentStep, steps)

  return (
    <nav className="bg-[#111110] border-b-2 border-[#111110]">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/app/dashboard" className="font-[family-name:var(--font-heading)] text-xl tracking-wider text-[#B8FF00] uppercase">
            AuditBrief
          </Link>
          {user && (
            <Link href="/app/dashboard" className="text-sm text-[#5A5A56] hover:text-[#111110] transition-colors">
              My Reports
            </Link>
          )}
        </div>

        {showSteps && (
          <StepIndicator
            steps={steps}
            currentStep={currentStep}
            completedSteps={completedSteps}
          />
        )}

        <div className="flex items-center gap-4">
          {/* Trial badge */}
          {tier === 'trial' && trialDaysLeft > 0 && (
            <span className="text-xs font-medium bg-[#B8FF00]/10 text-[#B8FF00] px-2.5 py-1 rounded-full">
              {trialDaysLeft}d trial
            </span>
          )}
          {tier === 'trial_expired' && (
            <span className="text-xs font-medium bg-[#F59E0B]/10 text-[#F59E0B] px-2.5 py-1 rounded-full">
              Trial ended
            </span>
          )}
          {tier === 'pro' && (
            <span className="text-xs font-medium bg-[#22C55E]/10 text-[#22C55E] px-2.5 py-1 rounded-full">
              Pro
            </span>
          )}

          {/* User menu */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-8 h-8 rounded-full bg-[#B8FF00] text-white text-xs font-semibold flex items-center justify-center hover:bg-[#A0E000] transition-colors"
              >
                {user.email?.charAt(0).toUpperCase() || '?'}
              </button>
              {menuOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
                  <div className="absolute right-0 top-10 z-50 bg-white border border-[#C8C8C4] rounded-lg shadow-lg py-1.5 w-52">
                    <div className="px-3 py-2 border-b border-[#C8C8C4]">
                      <p className="text-xs text-[#5A5A56] truncate">{user.email}</p>
                    </div>
                    <Link
                      href="/app/settings"
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-[#111110] hover:bg-[#F2F2EF] transition-colors"
                    >
                      Account
                    </Link>
                    <Link
                      href="/app/settings/branding"
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-[#111110] hover:bg-[#F2F2EF] transition-colors"
                    >
                      Branding
                    </Link>
                    <Link
                      href="/app/settings/billing"
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-[#111110] hover:bg-[#F2F2EF] transition-colors"
                    >
                      Billing
                    </Link>
                    <div className="border-t border-[#C8C8C4] mt-1.5 pt-1.5">
                      <button
                        onClick={() => { setMenuOpen(false); signOut() }}
                        className="block w-full text-left px-3 py-2 text-sm text-[#FF4D00] hover:bg-[#F2F2EF] transition-colors"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            <Link href="/auth/login" className="text-sm text-[#B8FF00] font-medium hover:underline">
              Sign in
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-[#F2F2EF]">
        <AppNav />
        <main className="max-w-[1200px] mx-auto px-6 py-10">
          {children}
        </main>
      </div>
    </AuthProvider>
  )
}
