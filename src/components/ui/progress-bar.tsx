import { clsx } from 'clsx'

interface ProgressBarProps {
  progress: number
  label?: string
  detail?: string
  className?: string
}

export function ProgressBar({ progress, label, detail, className }: ProgressBarProps) {
  return (
    <div className={clsx('w-full', className)}>
      {(label || detail) && (
        <div className="flex items-center justify-between mb-2">
          {label && <span className="font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-[#111110]">{label}</span>}
          {detail && <span className="font-[family-name:var(--font-body)] text-xs text-[#5A5A56]">{detail}</span>}
        </div>
      )}
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
        />
      </div>
    </div>
  )
}
