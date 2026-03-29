'use client'

import { useState } from 'react'
import { useAuth } from '@/components/auth/auth-provider'

export default function BillingSettingsPage() {
  const { tier, profile } = useAuth()
  const [loading, setLoading] = useState(false)
  const [upgradeLoading, setUpgradeLoading] = useState<string | null>(null)

  const openPortal = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/billing-portal', { method: 'POST' })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch {
    } finally {
      setLoading(false)
    }
  }

  const handleUpgrade = async (plan: 'pro' | 'agency') => {
    setUpgradeLoading(plan)
    try {
      const res = await fetch('/api/checkout/subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch {
    } finally {
      setUpgradeLoading(null)
    }
  }

  const planLabel = tier === 'pro' ? 'Professional' : tier === 'trial' ? 'Free Trial' : 'Free'
  const planPrice = tier === 'pro' ? '£29/month' : tier === 'trial' ? '7-day trial' : '1 audit/month'

  return (
    <div>
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#111110] mb-1">
        Billing
      </h2>
      <p className="text-sm text-[#5A5A56] mb-8">
        Manage your subscription and payment method.
      </p>

      {/* Current plan */}
      <div className="bg-[#E8E8E4] border border-[#C8C8C4] rounded-lg p-6 max-w-[500px] mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm font-medium text-[#111110]">{planLabel}</p>
            <p className="text-xs text-[#5A5A56]">{planPrice}</p>
          </div>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
            tier === 'pro' ? 'bg-[#059669]/10 text-[#059669]' :
            tier === 'trial' ? 'bg-[#B8FF00]/20 text-[#111110]' :
            'bg-[#D97706]/10 text-[#D97706]'
          }`}>
            {tier === 'pro' ? 'Active' : tier === 'trial' ? 'Trial' : 'Free'}
          </span>
        </div>

        {profile?.stripe_customer_id ? (
          <button
            onClick={openPortal}
            disabled={loading}
            className="text-sm font-medium text-[#111110] underline hover:no-underline disabled:opacity-50"
          >
            {loading ? 'Opening...' : 'Manage subscription →'}
          </button>
        ) : null}
      </div>

      {/* Upgrade options — only show if not already pro */}
      {tier !== 'pro' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[600px]">
          {/* Pro */}
          <div className="bg-[#111110] border-2 border-[#111110] rounded-lg p-6">
            <p className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-widest text-[#B8FF00] mb-2">
              Pro
            </p>
            <p className="font-[family-name:var(--font-heading)] text-[32px] text-[#B8FF00] leading-none mb-1">
              £29
            </p>
            <p className="text-xs text-[#E8E8E4] mb-4">per month</p>
            <ul className="space-y-1.5 mb-6">
              {['20 audits/month', 'White-label PDF', 'Editable summary', 'Email delivery'].map(f => (
                <li key={f} className="flex items-start gap-2 text-xs text-[#E8E8E4]">
                  <span className="text-[#B8FF00] shrink-0">+</span>{f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleUpgrade('pro')}
              disabled={upgradeLoading !== null}
              className="w-full bg-[#B8FF00] text-[#111110] text-sm font-semibold py-2.5 rounded disabled:opacity-50 hover:bg-[#A0E000] transition-colors"
            >
              {upgradeLoading === 'pro' ? 'Redirecting...' : 'Upgrade to Pro'}
            </button>
          </div>

          {/* Agency */}
          <div className="bg-[#E8E8E4] border-2 border-[#111110] rounded-lg p-6">
            <p className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-widest text-[#5A5A56] mb-2">
              Agency
            </p>
            <p className="font-[family-name:var(--font-heading)] text-[32px] text-[#111110] leading-none mb-1">
              £79
            </p>
            <p className="text-xs text-[#5A5A56] mb-4">per month</p>
            <ul className="space-y-1.5 mb-6">
              {['Unlimited audits', 'White-label + custom colour', '3 team seats', 'Priority processing'].map(f => (
                <li key={f} className="flex items-start gap-2 text-xs text-[#5A5A56]">
                  <span className="text-[#111110] shrink-0">+</span>{f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleUpgrade('agency')}
              disabled={upgradeLoading !== null}
              className="w-full bg-[#111110] text-white text-sm font-semibold py-2.5 rounded disabled:opacity-50 hover:bg-[#2A2A26] transition-colors"
            >
              {upgradeLoading === 'agency' ? 'Redirecting...' : 'Upgrade to Agency'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
