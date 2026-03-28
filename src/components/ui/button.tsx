import { clsx } from 'clsx'
import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={clsx(
          'inline-flex items-center justify-center font-medium transition-colors duration-150',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D7377] focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-[#0D7377] text-white hover:bg-[#095B5E] active:bg-[#084A4D]': variant === 'primary',
            'bg-[#FAFAF8] text-[#1A1A1A] border border-[#E2E1DE] hover:bg-[#F0EFEC] active:bg-[#E8E7E4]': variant === 'secondary',
            'text-[#6B7280] hover:text-[#1A1A1A] hover:bg-[#F0EFEC]': variant === 'ghost',
          },
          {
            'text-sm px-3 py-1.5 rounded': size === 'sm',
            'text-sm px-5 py-2.5 rounded-md': size === 'md',
            'text-base px-7 py-3.5 rounded-md': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {loading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
