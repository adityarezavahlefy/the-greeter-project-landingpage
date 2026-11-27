import { cn } from '../lib/cn'

/**
 * Brand lockup built from the supplied logo mark plus a Poppins wordmark.
 * surface="dark" places the yellow mark on a dark background.
 */
export function Logo({
  surface = 'dark',
  className,
  compact = false,
}: {
  surface?: 'dark' | 'light'
  className?: string
  compact?: boolean
}) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <img
        src={surface === 'dark' ? '/brand/mark-yellow.png' : '/brand/mark-black.png'}
        alt=""
        aria-hidden="true"
        width={720}
        height={635}
        className={cn('w-auto', compact ? 'h-7' : 'h-8 md:h-9')}
      />
      <span className="flex flex-col leading-[0.95]">
        <span
          className={cn(
            'font-medium uppercase tracking-[0.32em] opacity-60',
            compact ? 'text-[7px]' : 'text-[8px] md:text-[9px]',
          )}
        >
          The
        </span>
        <span className={cn('font-semibold tracking-[-0.03em]', compact ? 'text-[13px]' : 'text-[14px] md:text-[15px]')}>
          Gretter
        </span>
        <span className={cn('font-semibold tracking-[-0.03em]', compact ? 'text-[13px]' : 'text-[14px] md:text-[15px]')}>
          Projects
        </span>
      </span>
    </span>
  )
}
