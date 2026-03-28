import { clsx } from 'clsx'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export function Card({ className, padding = 'md', children, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        'bg-[#FAFAF8] border border-[#E2E1DE] rounded-[6px] shadow-[0_1px_3px_rgba(0,0,0,0.06)]',
        {
          'p-4': padding === 'sm',
          'p-6': padding === 'md',
          'p-8': padding === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx('pb-4 border-b border-[#E2E1DE]', className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={clsx('font-[family-name:var(--font-heading)] text-xl font-semibold text-[#1A1A1A]', className)} {...props}>
      {children}
    </h3>
  )
}
