import { clients, clientSectors } from '../data/clients'
import { Reveal, Stagger, StaggerItem } from '../lib/motion'
import { CtaLink, Eyebrow } from './ui'

/**
 * Client logo wall. Marks sit in white cells so mixed logo backgrounds read evenly
 * on the cream page; each cell lifts its mark and draws a sun rule on hover.
 */
export function ClientWall({ className = '' }: { className?: string }) {
  return (
    <section aria-labelledby="clients-heading" className={`border-t border-ink/10 bg-cream ${className}`}>
      <div className="shell py-14 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6 pb-8 md:pb-10">
          <Reveal>
            <Eyebrow surface="light">Trusted by</Eyebrow>
            <h2
              id="clients-heading"
              className="mt-4 max-w-xl text-[clamp(1.25rem,2.6vw,1.9rem)] font-semibold leading-[1.2] tracking-tight"
            >
              Brands that have trusted us with the work.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="flex flex-col items-start gap-5 md:items-end">
            <p className="label max-w-[30ch] text-ink/55 md:text-right">{clientSectors.join(' · ')}</p>
            <CtaLink to="/work" variant="outline-ink" arrow>
              See the work
            </CtaLink>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-2 border-l border-t border-ink/15 sm:grid-cols-4" step={0.05}>
          {clients.map((client) => (
            <StaggerItem
              key={client.name}
              className="group relative flex aspect-[3/2] items-center justify-center overflow-hidden border-b border-r border-ink/15 bg-paper px-5 py-7 transition-colors duration-300 hover:bg-cream md:aspect-[2/1] md:px-6"
            >
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                decoding="async"
                className={`w-auto max-w-[86%] object-contain opacity-90 transition-[transform,opacity] duration-500 ease-editorial group-hover:scale-[1.04] group-hover:opacity-100 ${
                  client.square
                    ? 'max-h-[62px] md:max-h-[80px] lg:max-h-[86px]'
                    : 'max-h-[38px] md:max-h-[52px] lg:max-h-[58px]'
                }`}
              />
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-sun transition-transform duration-500 ease-editorial group-hover:scale-x-100"
              />
              <span className="sr-only">{client.sector}</span>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="mt-5 text-[12px] font-light leading-relaxed text-ink/50">
            A selection of brands we have delivered campaign work for. Client marks are shown as supplied.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
