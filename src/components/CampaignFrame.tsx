import { ImageIcon, Play } from 'lucide-react'
import { cn } from '../lib/cn'

type Tone = 'ink' | 'sun' | 'paper'

const tones: Record<
  Tone,
  {
    frame: string
    dots: string
    meta: string
    deco: string
    rule: string
    accent: string
    stroke: string
  }
> = {
  ink: {
    frame: 'border-white/15 bg-[#070707] text-white',
    dots: 'text-white',
    meta: 'text-white/60',
    deco: 'bg-white/[0.05]',
    rule: 'bg-white/15',
    accent: 'bg-sun',
    stroke: 'rgba(255,255,255,0.75)',
  },
  sun: {
    frame: 'border-ink/20 bg-sun text-ink',
    dots: 'text-ink',
    meta: 'text-ink/55',
    deco: 'bg-ink/[0.07]',
    rule: 'bg-ink/20',
    accent: 'bg-ink',
    stroke: 'rgba(0,0,0,0.7)',
  },
  paper: {
    frame: 'border-ink/15 bg-white text-ink',
    dots: 'text-ink',
    meta: 'text-ink/60',
    deco: 'bg-ink/[0.04]',
    rule: 'bg-ink/12',
    accent: 'bg-sun',
    stroke: 'rgba(0,0,0,0.7)',
  },
}

function hash(value: string) {
  let h = 2166136261
  for (let i = 0; i < value.length; i += 1) {
    h ^= value.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return Math.abs(h)
}

function initials(label: string) {
  const words = label.replace(/[^a-zA-Z0-9\s']/g, ' ').split(/\s+/).filter(Boolean)
  if (words.length === 0) return 'GT'
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[1][0]).toUpperCase()
}

/**
 * A framed campaign visual. Renders the supplied image when one exists;
 * otherwise an intentional, clearly labelled placeholder that can be swapped
 * for real documentation by adding `image` to the gallery item in data.
 */
export function CampaignFrame({
  seed,
  label,
  category,
  tone = 'ink',
  aspect = '4 / 5',
  className,
  image,
  play,
  priority = false,
  index,
  compact = false,
}: {
  seed: string
  label: string
  category?: string
  tone?: Tone
  aspect?: string
  className?: string
  image?: string
  play?: boolean
  priority?: boolean
  index?: string
  /** Texture-only treatment for very small thumbnails, where the full placeholder UI cannot be read. */
  compact?: boolean
}) {
  const variant = hash(seed) % 4
  const t = tones[tone]
  const chars = initials(label)
  const outlineStyle = { WebkitTextStroke: `1px ${t.stroke}`, color: 'transparent' } as const

  return (
    <div
      className={cn('relative isolate overflow-hidden border', t.frame, className)}
      style={{ aspectRatio: aspect }}
      role={image ? undefined : 'img'}
      aria-label={image ? undefined : `${label}${category ? `, ${category}` : ''} — campaign visual placeholder, asset pending`}
    >
      {image ? (
        <img
          src={image}
          alt={`${label}${category ? ` — ${category}` : ''} campaign visual`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <>
          <div aria-hidden="true" className={cn('halftone absolute inset-0 opacity-[0.14]', t.dots)} />
          <div aria-hidden="true" className={cn('grid-lines absolute inset-0', t.dots)} />

          {variant === 0 && (
            <>
              <div aria-hidden="true" className={cn('absolute right-0 top-0 h-full w-[36%]', t.deco)} />
              <div aria-hidden="true" className={cn('absolute right-0 top-[19%] h-[6px] w-[36%]', t.accent)} />
            </>
          )}
          {variant === 1 && (
            <>
              <div aria-hidden="true" className={cn('absolute -bottom-[16%] -left-[14%] h-[64%] w-[64%] rounded-full border', t.dots, 'opacity-25')} />
              <div aria-hidden="true" className={cn('absolute right-0 top-0 h-[38%] w-[38%]', t.deco)} />
              <div aria-hidden="true" className={cn('absolute right-[12%] top-[12%] h-[6px] w-[14%]', t.accent)} />
            </>
          )}
          {variant === 2 && (
            <div aria-hidden="true" className={cn('absolute -left-[20%] top-[56%] h-[24%] w-[140%] -rotate-[7deg]', t.deco)} />
          )}
          {variant === 3 && (
            <>
              <div aria-hidden="true" className={cn('absolute left-0 top-0 h-full w-[13%]', t.deco)} />
              <div aria-hidden="true" className={cn('absolute left-0 top-[30%] h-[8px] w-[13%]', t.accent)} />
            </>
          )}

          {!compact && (
          <span
            aria-hidden="true"
            className={cn(
              'pointer-events-none absolute left-4 top-[20%] select-none font-extrabold leading-none tracking-tightest md:left-5 md:top-[16%]',
              variant === 1 || variant === 3 ? 'opacity-25' : 'opacity-90',
              variant === 2 && 'top-[12%]',
            )}
            style={{
              fontSize: 'clamp(2rem, 11vw, 8rem)',
              ...(variant === 1 || variant === 3 ? outlineStyle : {}),
            }}
          >
            {chars}
          </span>
          )}

          <div className={cn('absolute inset-0 flex flex-col justify-between p-4 md:p-5', compact && 'hidden')}>
            <div className="hidden items-start justify-between gap-3 sm:flex">
              <span className={cn('label flex items-center gap-2', t.meta)}>
                <ImageIcon aria-hidden="true" className="h-3 w-3" />
                Campaign visual
              </span>
              {index && <span className={cn('label', t.meta)}>{index}</span>}
            </div>

            <div className="max-w-[92%]">
              <span
                className={cn(
                  'label inline-flex items-center border px-2 py-1',
                  tone === 'sun' ? 'border-ink/30 text-ink/70' : tone === 'ink' ? 'border-white/25 text-white/60' : 'border-ink/25 text-ink/60',
                )}
              >
                Asset pending
              </span>
              <p className="mt-2.5 text-[13px] font-medium leading-tight tracking-tight md:text-sm">{label}</p>
              {category && <p className={cn('label mt-1.5', t.meta)}>{category}</p>}
            </div>
          </div>

          <div aria-hidden="true" className={cn('absolute inset-x-0 bottom-0 h-px', t.rule)} />
          {compact && <div aria-hidden="true" className={cn('absolute left-0 top-0 h-[3px] w-1/2', t.accent)} />}
        </>
      )}

      {play && (
        <span
          aria-hidden="true"
          className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/25 text-white backdrop-blur-sm md:right-5"
        >
          <Play className="ml-0.5 h-4 w-4 fill-current" />
        </span>
      )}
    </div>
  )
}
