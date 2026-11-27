import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { CtaLink, Eyebrow, VerificationNote } from '../components/ui'
import { services } from '../data/services'
import { projectBySlug } from '../data/projects'
import { usePageMeta } from '../lib/meta'
import { Reveal, RuleReveal } from '../lib/motion'
import { cn } from '../lib/cn'

export default function Services() {
  usePageMeta({
    title: 'Services',
    description:
      'Brand strategy and activation, UGC and content, KOL and influencer marketing, performance marketing, social and Threads management, and affiliate marketing.',
    path: '/services',
  })

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={['What we bring', 'to the table.']}
        lead="Six disciplines. Each can run on its own, and each works harder as part of one campaign plan."
        meta={[
          { label: 'Core services', value: 'Six' },
          { label: 'Engagement', value: 'Project · Retainer · Campaign' },
          { label: 'Markets', value: 'Indonesia' },
          { label: 'Starts with', value: 'A conversation about the objective' },
        ]}
      />

      {/* ANCHOR NAV */}
      <div className="sticky top-[70px] z-30 border-b border-ink/10 bg-cream/95 backdrop-blur md:top-[86px]">
        <nav aria-label="Services on this page" className="shell no-scrollbar flex gap-6 overflow-x-auto py-4 lg:flex-wrap lg:overflow-visible">
          {services.map((service) => (
            <a
              key={service.key}
              href={`#${service.key}`}
              className="label group flex shrink-0 items-center gap-2 whitespace-nowrap text-ink/60 transition-colors hover:text-ink"
            >
              <span className="text-ink/60">{service.index}</span>
              {service.name}
            </a>
          ))}
        </nav>
      </div>

      <section className="bg-cream">
        <div className="shell pt-16 md:pt-20">
          <div className="grid gap-8 border-b border-ink/15 pb-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7" y={20}>
              <Eyebrow surface="light">How to read this page</Eyebrow>
              <p className="mt-5 max-w-2xl text-[clamp(1.15rem,2.2vw,1.6rem)] font-medium leading-snug tracking-tight">
                Scope is defined around the objective, not the deliverable list. Most campaigns use two or three of
                these services together.
              </p>
            </Reveal>
            <Reveal className="lg:col-span-5 lg:pt-9" delay={0.1} y={16}>
              <p className="body-copy">
                Read each service as a way to answer a business question: how do we become known, how do we earn
                attention, how do we sell, how do we stay present. If you are unsure which applies, start with the
                problem.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="shell">
          {services.map((service, index) => (
            <section
              key={service.key}
              id={service.key}
              className="scroll-mt-32 border-b border-ink/15 py-14 last:border-b-0 md:py-20"
            >
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                <Reveal className={cn('lg:col-span-4', index % 2 === 1 && 'lg:order-2')}>
                  <div className="flex items-baseline gap-4">
                    <span className="label text-ink/60">{service.index}</span>
                    <h2 className="display text-[clamp(1.5rem,2.8vw,2.3rem)]">{service.name}</h2>
                  </div>
                  <RuleReveal className="mt-5 h-[3px] w-12 bg-sun" delay={0.1} />
                  <p className="mt-5 text-[15px] font-medium tracking-tight text-ink">{service.tagline}</p>

                  {service.examples.length > 0 && (
                    <div className="mt-8">
                      <p className="label text-ink/60">Campaign examples</p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {service.examples.map((slug) => {
                          const project = projectBySlug(slug)
                          if (!project) return null
                          return (
                            <li key={slug}>
                              <Link
                                to={`/work/${project.slug}`}
                                className="group inline-flex items-center gap-1.5 border border-ink/20 px-3 py-2 text-[12px] font-light text-ink/70 transition-colors hover:border-ink hover:bg-ink hover:text-white"
                              >
                                {project.client}
                                <ArrowUpRight
                                  aria-hidden="true"
                                  className="h-3 w-3 text-ink/60 transition-colors group-hover:text-sun"
                                />
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )}
                </Reveal>

                <Reveal className={cn('lg:col-span-8', index % 2 === 1 && 'lg:order-1')} delay={0.08} y={20}>
                  <p className="max-w-2xl text-lg font-light leading-[1.65] text-ink/80 md:text-xl">
                    {service.whatItIs}
                  </p>

                  <div className="relative mt-8 grid gap-8 pt-6 sm:grid-cols-2">
                    <RuleReveal className="absolute inset-x-0 top-0 h-px bg-ink/15" />
                    <div>
                      <p className="label text-ink/60">Challenges it addresses</p>
                      <ul className="mt-4 space-y-3">
                        {service.challenges.map((item) => (
                          <li key={item} className="relative pl-4 text-[14px] font-light leading-relaxed text-ink/65">
                            <span aria-hidden="true" className="absolute left-0 top-[0.6em] h-[4px] w-[4px] bg-ink/30" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="label text-ink/60">What we deliver</p>
                      <ul className="mt-4 space-y-3">
                        {service.deliverables.map((item) => (
                          <li key={item} className="relative pl-4 text-[14px] font-light leading-relaxed text-ink/65">
                            <span aria-hidden="true" className="absolute left-0 top-[0.6em] h-[4px] w-[4px] bg-sun" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <CtaLink
                      to={`/contact?service=${encodeURIComponent(service.name)}`}
                      variant="outline-ink"
                    >
                      Discuss this service
                    </CtaLink>
                    <p className="text-[12px] font-light text-ink/60">
                      Bring the challenge. We will tell you honestly whether this is the right starting point.
                    </p>
                  </div>
                </Reveal>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="shell py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="label text-ink/60">A note on channels</p>
            </div>
            <div className="lg:col-span-8">
              <p className="max-w-2xl text-sm font-light leading-relaxed text-ink/65">
                Platforms are named only where the service genuinely depends on them — Threads for conversational
                community management, TikTok for commerce-led creator and affiliate work. We do not treat a platform as
                a strategy, and we do not recommend a channel before understanding where the audience already is.
              </p>
              <VerificationNote className="mt-6 max-w-2xl">
                Platform availability and campaign formats change quickly. Specific platform capabilities will be
                confirmed in the proposal rather than implied on this page.
              </VerificationNote>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Not sure which service
            <br />
            you actually need?
          </>
        }
        text="Describe the challenge instead of the deliverable. We will map the right scope from there."
        primaryLabel="Discuss a project"
        secondaryLabel="See the work"
        secondaryTo="/work"
      />
    </>
  )
}
