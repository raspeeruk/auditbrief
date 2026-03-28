'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const TABS = [
  { href: '/app/settings', label: 'Account' },
  { href: '/app/settings/branding', label: 'Branding' },
  { href: '/app/settings/billing', label: 'Billing' },
]

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="max-w-[800px] mx-auto">
      <h1 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-[#1A1A1A] mb-8">
        Settings
      </h1>

      <div className="flex items-center gap-1 mb-8 border-b border-[#E2E1DE]">
        {TABS.map(tab => {
          const active = tab.href === '/app/settings'
            ? pathname === '/app/settings'
            : pathname.startsWith(tab.href)

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ${
                active
                  ? 'border-[#0D7377] text-[#0D7377]'
                  : 'border-transparent text-[#6B7280] hover:text-[#1A1A1A]'
              }`}
            >
              {tab.label}
            </Link>
          )
        })}
      </div>

      {children}
    </div>
  )
}
