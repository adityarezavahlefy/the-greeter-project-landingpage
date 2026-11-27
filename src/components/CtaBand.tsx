import type { ReactNode } from 'react'
import { CtaLink, Eyebrow } from './ui'
import { Reveal, RuleReveal } from '../lib/motion'

export function CtaBand({
  eyebrow = 'Next step',
  title,
  text,
  primaryLabel = 'Start a conversation',
  primaryTo = '/contact',
  secondaryLabel,
  secondaryTo,
}: {
  eyebrow?: string
  title: ReactNode
  text: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}) {
  return (
    <section className="relative overflow-hidden bg-sun text-ink">
      <RuleReveal className="absolute inset-x-0 top-0 h-[3px] bg-ink" />
      <div aria-hidden="true" className="halftone pointer-events-none absolute inset-0 text-ink opacity-[0.08]" />
      <div className="shell relative py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-8" y={22}>
            <Eyebrow surface="light" dot={false} className="text-ink/60">
              {eyebrow}
            </Eyebrow>
            <h2 className="mt-5 display text-[clamp(2.1rem,5.6vw,4.8rem)]">{title}</h2>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:self-end" delay={0.12} y={18}>
            <p className="max-w-sm text-[15px] font-light leading-relaxed text-ink/75">{text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink to={primaryTo} variant="ink">
                {primaryLabel}
              </CtaLink>
              {secondaryLabel && secondaryTo && (
                <CtaLink to={secondaryTo} variant="outline-ink" arrow={false}>
                  {secondaryLabel}
                </CtaLink>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
