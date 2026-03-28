'use client'

import { useState } from 'react'
import { useAuth } from '@/components/auth/auth-provider'

export default function BillingSettingsPage() {
  const { tier, profile } = useAuth()
  const [loading, setLoading] = useState(false)

  const openPortal = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/billing-portal', { method: 'POST' })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch {
      // Ignore
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#111110] mb-1">
        Billing
      </h2>
      <p className="text-sm text-[#5A5A56] mb-8">
        Manage your subscription and payment method.
      </p>

      <div className="bg-[#E8E8E4] border border-[#C8C8C4] rounded-lg p-6 max-w-[500px]">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm font-medium text-[#111110]">
              {tier === 'pro' ? 'Professional' : tier === 'trial' ? 'Free Trial' : 'No active plan'}
            </p>
            <p className="text-xs text-[#5A5A56]">
              {tier === 'pro' ? '£499/month' : tier === 'trial' ? '7-day trial' : 'Upgrade to unlock full features'}
            </p>
          </div>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
            tier === 'pro' ? 'bg-[#059669]/10 text-[#059669]' :
            tier === 'trial' ? 'bg-[#B8FF00]/10 text-[#B8FF00]' :
            'bg-[#D97706]/10 text-[#D97706]'
          }`}>
            {tier === 'pro' ? 'Active' : tier === 'trial' ? 'Trial' : 'Inactive'}
          </span>
        </div>

        {profile?.stripe_customer_id ? (
          <button
            onClick={openPortal}
            disabled={loading}
            className="text-sm font-medium text-[#B8FF00] hover:underline disabled:opacity-50"
          >
            {loading ? 'Opening...' : 'Manage subscription'}
          </button>
        ) : tier !== 'pro' ? (
          <a
            href="/api/checkout"
            className="inline-block bg-[#B8FF00] text-white text-sm font-medium rounded-md px-5 py-2.5 hover:bg-[#A0E000] transition-colors"
          >
            Upgrade to Professional — £499/mo
          </a>
        ) : null}
      </div>
    </div>
  )
}
