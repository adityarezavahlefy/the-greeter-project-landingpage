import { BarChart3 } from 'lucide-react'
import type { CampaignProofItem } from '../data/campaignProof'
import { cn } from '../lib/cn'

/**
 * Campaign result card: the client mark plus the figures reported for that campaign.
 * Used in place of the placeholder "campaign visual" frames — no video or play state.
 */
export function CampaignProof({
  item,
  className,
  logoClassName = 'max-h-[52px] md:max-h-[66px]',
}: {
  item: CampaignProofItem
  className?: string
  logoClassName?: string
}) {
  const single = item.stats.length === 1

  return (
    <article
      aria-label={`${item.client} — campaign result`}
      className={cn(
        'group relative isolate flex flex-col overflow-hidden border border-white/15 bg-[#070707] p-4 text-white md:p-5',
        className,
      )}
    >
      <div aria-hidden="true" className="halftone pointer-events-none absolute inset-0 text-white opacity-[0.1]" />

      <div className="relative flex items-center justify-between gap-3">
        <span className="label flex items-center gap-2 text-white/55">
          <BarChart3 aria-hidden="true" className="h-3 w-3 shrink-0" />
          {item.discipline}
        </span>
        <span aria-hidden="true" className="h-[5px] w-[5px] shrink-0 bg-sun" />
      </div>

      <div className="relative flex flex-1 items-center justify-center pb-4 pt-3 md:pb-5 md:pt-4">
        {item.plate ? (
          <span className="inline-flex bg-white p-2.5 md:p-3">
            <img
              src={item.logo}
              alt={item.client}
              loading="lazy"
              decoding="async"
              className={cn('w-auto object-contain transition-transform duration-500 ease-editorial group-hover:scale-[1.03]', logoClassName)}
            />
          </span>
        ) : (
          <img
            src={item.logo}
            alt={item.client}
            loading="lazy"
            decoding="async"
            className={cn(
              'w-auto max-w-full object-contain transition-transform duration-500 ease-editorial group-hover:scale-[1.03]',
              logoClassName,
            )}
          />
        )}
      </div>

      <div className="relative">
        <div className="border-t border-white/15 pt-3">
          <h3 className="text-[13px] font-semibold leading-tight tracking-tight">{item.client}</h3>
        </div>

        <dl className={cn('mt-3 grid gap-x-4 gap-y-2', single ? 'grid-cols-1' : 'grid-cols-2')}>
          {item.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.14em] text-white/55">{stat.label}</dt>
              <dd
                className={cn(
                  'display leading-none text-sun',
                  single ? 'text-[clamp(1.5rem,2.8vw,2.1rem)]' : 'text-[clamp(1.1rem,1.9vw,1.45rem)]',
                )}
              >
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        {item.note && <p className="mt-2 text-[10px] font-light leading-snug text-white/55">{item.note}</p>}
      </div>

      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-sun transition-transform duration-500 ease-editorial group-hover:scale-x-100"
      />
    </article>
  )
}
