import type { Insight } from '../data/insights'
import { cn } from '../lib/cn'

/** Typographic article cover — no invented imagery, clearly editorial. */
export function ArticleCover({
  insight,
  index = '01',
  className,
  size = 'md',
}: {
  insight: Insight
  index?: string
  className?: string
  size?: 'md' | 'lg'
}) {
  return (
    <div
      className={cn(
        'relative flex flex-col justify-between overflow-hidden border border-white/15 bg-ink p-6 text-white md:p-8',
        className,
      )}
    >
      <div aria-hidden="true" className="halftone absolute inset-0 text-white opacity-[0.1]" />
      <div
        aria-hidden="true"
        className="absolute -right-16 top-0 hidden h-full w-[45%] border-l border-white/10 bg-white/[0.03] md:block"
      />

      <div className="relative flex items-start justify-between gap-4">
        <span className="label text-sun">{insight.category}</span>
        <span className="label text-white/60">{index}</span>
      </div>

      <div className="relative mt-16 md:mt-24">
        <div aria-hidden="true" className="mb-5 h-[6px] w-12 bg-sun" />
        <p
          className={cn(
            'font-semibold leading-[1.05] tracking-tightest',
            size === 'lg' ? 'text-[clamp(1.6rem,3.4vw,2.8rem)]' : 'text-[clamp(1.35rem,2.6vw,2rem)]',
          )}
        >
          {insight.title}
        </p>
        <p className="label mt-5 text-white/60">Perspective · The Gretter Projects</p>
      </div>
    </div>
  )
}
