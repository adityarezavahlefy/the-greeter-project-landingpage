import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '../lib/cn'

type Surface = 'dark' | 'light'

export function Eyebrow({
  children,
  surface = 'dark',
  className,
  dot = true,
}: {
  children: ReactNode
  surface?: Surface
  className?: string
  dot?: boolean
}) {
  return (
    <p
      className={cn(
        'label flex items-center gap-3',
        surface === 'dark' ? 'text-white/60' : 'text-ink/60',
        className,
      )}
    >
      {dot && <span aria-hidden="true" className="h-[5px] w-[5px] shrink-0 bg-sun" />}
      {children}
    </p>
  )
}

type CtaVariant = 'sun' | 'outline' | 'ink' | 'outline-ink'

const ctaStyles: Record<CtaVariant, string> = {
  sun: 'btn-solid',
  outline: 'btn-outline',
  ink: 'btn-ink',
  'outline-ink': 'btn-ghost-ink',
}

export function CtaLink({
  children,
  to,
  href,
  variant = 'sun',
  className,
  arrow = true,
}: {
  children: ReactNode
  to?: string
  href?: string
  variant?: CtaVariant
  className?: string
  arrow?: boolean
}) {
  const content = (
    <>
      <span>{children}</span>
      {arrow && <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 ease-editorial group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />}
    </>
  )
  const classes = cn('btn group/cta', ctaStyles[variant], className)

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}>
        {content}
      </a>
    )
  }
  return (
    <Link to={to ?? '/'} className={classes}>
      {content}
    </Link>
  )
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  surface = 'light',
  className,
  children,
}: {
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  surface?: Surface
  className?: string
  children?: ReactNode
}) {
  return (
    <div className={className}>
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8">
          <Eyebrow surface={surface}>{eyebrow}</Eyebrow>
          <h2
            className={cn(
              'mt-6 display text-[clamp(1.9rem,4.4vw,3.8rem)]',
              surface === 'dark' ? 'text-white' : 'text-ink',
            )}
          >
            {title}
          </h2>
        </div>
        {lead && (
          <div className="lg:col-span-4 lg:self-end">
            <p className={surface === 'dark' ? 'body-copy-dark' : 'body-copy'}>{lead}</p>
          </div>
        )}
      </div>
      {children}
    </div>
  )
}

export function Marquee({ items, className }: { items: readonly string[]; className?: string }) {
  const row = [...items, ...items]
  return (
    <div className={cn('overflow-hidden bg-sun py-3.5 text-ink md:py-4', className)} aria-hidden="true">
      <div className="flex w-max animate-marquee items-center whitespace-nowrap will-change-transform motion-reduce:animate-none">
        {row.map((item, index) => (
          <span key={`${item}-${index}`} className="label flex items-center">
            <span className="px-6 md:px-8">{item}</span>
            <span className="h-[6px] w-[6px] shrink-0 bg-ink" />
          </span>
        ))}
      </div>
    </div>
  )
}

/** Small note used where a figure or asset still needs verification. */
export function VerificationNote({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('flex gap-3 border-t border-ink/15 pt-4 text-[12px] font-light leading-relaxed text-ink/55', className)}>
      <span aria-hidden="true" className="mt-[6px] h-[5px] w-[5px] shrink-0 bg-sun" />
      <span>{children}</span>
    </p>
  )
}
