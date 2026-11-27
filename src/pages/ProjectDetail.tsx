import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { CampaignFrame } from '../components/CampaignFrame'
import { ProjectCard } from '../components/ProjectCard'
import { CtaLink, Eyebrow, VerificationNote } from '../components/ui'
import {
  categories,
  categoryLabel,
  projectBySlug,
  type CategoryKey,
  type Project,
} from '../data/projects'
import { usePageMeta } from '../lib/meta'
import { CountUp, MaskReveal, Reveal, RuleReveal, Stagger, StaggerItem } from '../lib/motion'
import NotFound from './NotFound'
import { cn } from '../lib/cn'

const serviceForCategory: Record<CategoryKey, string> = {
  ugc: 'UGC & Content Creation',
  kol: 'KOL & Influencer Marketing',
  threads: 'Social Media & Threads Management',
  performance: 'Performance Marketing',
  activation: 'Brand Strategy & Activation',
}

function PendingField({ title, note }: { title: string; note: string }) {
  return (
    <div className="border border-dashed border-ink/30 bg-cream/60 p-5">
      <p className="label flex items-center gap-2 text-ink/60">
        <span aria-hidden="true" className="h-[5px] w-[5px] bg-sun" />
        {title}
      </p>
      <p className="mt-3 text-[13px] font-light leading-relaxed text-ink/60">{note}</p>
    </div>
  )
}

function ContentSection({
  index,
  title,
  children,
}: {
  index: string
  title: string
  children: ReactNode
}) {
  return (
    <section className="relative grid gap-5 py-9 md:grid-cols-12 md:gap-6 md:py-10">
      <RuleReveal className="absolute inset-x-0 top-0 h-px bg-ink/15" />
      <div className="md:col-span-4">
        <p className="label text-ink/60">{index}</p>
        <h2 className="mt-2 text-lg font-semibold leading-tight tracking-tight md:text-xl">{title}</h2>
      </div>
      <div className="md:col-span-8">{children}</div>
    </section>
  )
}

function ProjectView({ project }: { project: Project }) {
  usePageMeta({
    title: `${project.client} — ${project.discipline}`,
    description: project.summary,
    path: `/work/${project.slug}`,
    type: 'article',
  })

  const related = project.related
    .map((slug) => projectBySlug(slug))
    .filter((item): item is Project => Boolean(item))
    .slice(0, 3)

  const lead = project.results[0]
  const campaignTypes = project.categories.map((key) => categoryLabel(key))

  return (
    <>
      <PageHero
        eyebrow={`Case study · ${project.discipline}`}
        title={project.client}
        lead={project.summary}
        meta={[
          { label: 'Client', value: project.client },
          { label: 'Discipline', value: project.discipline },
          { label: 'Campaign type', value: campaignTypes.join(' · ') },
          {
            label: 'Lead metric',
            value: lead ? `${lead.value} ${lead.label.toLowerCase()}` : 'Available on request',
          },
        ]}
      >
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {project.gallery.slice(0, 3).map((item, index) => (
            <MaskReveal
              key={`${item.caption}-${index}`}
              className={cn(index === 2 && 'hidden md:block')}
              delay={0.1 + index * 0.08}
            >
              <CampaignFrame
                seed={`${project.slug}-hero-${index}`}
                label={project.client}
                category={item.caption}
                image={item.image}
                play={item.play}
                aspect="4 / 3"
                priority={index === 0}
              />
            </MaskReveal>
          ))}
        </div>
      </PageHero>

      <section className="bg-cream">
        <div className="shell py-12 md:py-16">
          <Link
            to="/work"
            className="label group inline-flex items-center gap-2 text-ink/60 transition-colors hover:text-ink"
          >
            <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            All work
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-14">
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-28">
                <dl className="space-y-5 border-t border-ink/20 pt-6">
                  <div>
                    <dt className="label text-ink/60">Client</dt>
                    <dd className="mt-1.5 text-sm font-light text-ink/80">{project.client}</dd>
                  </div>
                  <div>
                    <dt className="label text-ink/60">Discipline</dt>
                    <dd className="mt-1.5 text-sm font-light text-ink/80">{project.discipline}</dd>
                  </div>
                  <div>
                    <dt className="label text-ink/60">Campaign type</dt>
                    <dd className="mt-1.5 text-sm font-light text-ink/80">{campaignTypes.join(', ')}</dd>
                  </div>
                  <div>
                    <dt className="label text-ink/60">Scope of work</dt>
                    <dd className="mt-1.5">
                      <ul className="space-y-1.5">
                        {project.scope.map((item) => (
                          <li key={item} className="relative pl-3 text-sm font-light leading-snug text-ink/80">
                            <span aria-hidden="true" className="absolute left-0 top-[0.6em] h-[3px] w-[3px] bg-sun" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>

                {project.kpi && (
                  <div className="mt-6 border border-ink/20 p-4">
                    <p className="label text-ink/60">Campaign KPI</p>
                    <p className="mt-2 text-lg font-semibold tracking-tight">{project.kpi}</p>
                  </div>
                )}

                <CtaLink
                  to={`/contact?service=${encodeURIComponent(serviceForCategory[project.primary])}`}
                  variant="outline-ink"
                  className="mt-6 w-full"
                >
                  Discuss a similar campaign
                </CtaLink>
              </div>
            </aside>

            <div className="lg:col-span-9">
              <ContentSection index="01" title="Campaign overview">
                <p className="text-lg font-light leading-[1.65] text-ink/80 md:text-xl">{project.summary}</p>
                {project.sector && (
                  <p className="mt-4 text-[13px] font-light text-ink/60">Sector: {project.sector}</p>
                )}
              </ContentSection>

              <ContentSection index="02" title="Business objective">
                {project.objective ? (
                  <p className="body-copy">{project.objective}</p>
                ) : (
                  <PendingField
                    title="Content field — pending verification"
                    note="The business objective for this campaign has not been supplied for publication and will not be inferred."
                  />
                )}
              </ContentSection>

              <ContentSection index="03" title="Scope of work">
                <ul className="flex flex-wrap gap-2">
                  {project.scope.map((item) => (
                    <li
                      key={item}
                      className="border border-ink/20 px-3 py-2 text-[12px] font-light text-ink/70"
                    >
                      {item}
                    </li>
                  ))}
                  {project.categories.map((key) => (
                    <li key={key} className="border border-ink/10 bg-white px-3 py-2 text-[12px] font-light text-ink/60">
                      {categories.find((category) => category.key === key)?.label}
                    </li>
                  ))}
                </ul>
              </ContentSection>

              <ContentSection index="04" title="Campaign strategy">
                {project.strategy ? (
                  <Stagger className="space-y-4">
                    {project.strategy.map((paragraph) => (
                      <StaggerItem key={paragraph}>
                        <p className="body-copy">{paragraph}</p>
                      </StaggerItem>
                    ))}
                  </Stagger>
                ) : (
                  <PendingField
                    title="Content field — pending verification"
                    note="The strategic write-up for this campaign is being collected from the project archive. It will be published once the agency has confirmed the details."
                  />
                )}
              </ContentSection>

              <ContentSection index="05" title="Creative execution">
                {project.execution ? (
                  <Stagger className="space-y-7">
                    {project.execution.map((block) => (
                      <StaggerItem key={block.title}>
                        <h3 className="text-[15px] font-semibold tracking-tight">{block.title}</h3>
                        <p className="body-copy mt-2">{block.body}</p>
                      </StaggerItem>
                    ))}
                  </Stagger>
                ) : (
                  <PendingField
                    title="Content field — pending verification"
                    note="Creative execution detail for this project is pending from the campaign archive. Available on request in the meantime."
                  />
                )}
              </ContentSection>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="border-t border-ink/10 bg-paper">
        <div className="shell py-14 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="label text-ink/60">06 — Campaign gallery</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">Documentation</h2>
            </div>
            <p className="label max-w-xs text-right text-ink/60">
              Placeholders are replaced with supplied campaign assets
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-12">
            {project.gallery.map((item, index) => (
              <MaskReveal
                key={`${item.caption}-${index}`}
                className={cn(
                  'md:col-span-6',
                  index % 4 === 0 && 'md:col-span-7',
                  index % 4 === 1 && 'md:col-span-5',
                  index % 4 === 2 && 'md:col-span-5',
                  index % 4 === 3 && 'md:col-span-7',
                )}
                delay={index * 0.05}
              >
                <figure>
                  <CampaignFrame
                    seed={`${project.slug}-gallery-${index}`}
                    label={project.client}
                    category={project.discipline}
                    image={item.image}
                    play={item.play}
                    aspect="4 / 3"
                    tone={index % 3 === 1 ? 'paper' : 'ink'}
                  />
                  <figcaption className="label mt-3 flex items-start gap-2 text-ink/60">
                    <span aria-hidden="true" className="mt-[3px] h-[4px] w-[4px] shrink-0 bg-sun" />
                    {item.caption}
                  </figcaption>
                </figure>
              </MaskReveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-cream">
        <div className="shell py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-3">
              <p className="label text-ink/60">07 — Performance results</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">What happened</h2>
              <p className="mt-4 text-[13px] font-light leading-relaxed text-ink/55">
                Reported by campaign, not averaged into an agency total.
              </p>
            </div>

            <div className="lg:col-span-9">
              {project.results.length > 0 ? (
                <>
                  <div className="grid border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
                    {project.results.map((metric) => (
                      <div key={`${metric.label}-${metric.value}`} className="border-b border-r border-ink/15 p-6">
                        <CountUp
                          value={metric.value}
                          className="block display text-[clamp(1.9rem,3.6vw,2.8rem)]"
                        />
                        <p className="mt-2 text-sm font-medium tracking-tight">{metric.label}</p>
                        {metric.note && (
                          <p className="mt-2 text-[12px] font-light leading-relaxed text-ink/60">{metric.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                  {project.resultNote && <VerificationNote className="mt-6">{project.resultNote}</VerificationNote>}
                </>
              ) : (
                <>
                  <PendingField
                    title="Content field — metrics on request"
                    note={
                      project.resultNote ??
                      'No performance figures for this campaign are published on the website.'
                    }
                  />
                  <p className="mt-4 text-[13px] font-light text-ink/55">
                    We do not publish estimates, and we do not attribute metrics from one campaign to another.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TAKEAWAYS + NOTES */}
      <section className="border-t border-ink/10 bg-paper">
        <div className="shell py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-3">
              <p className="label text-ink/60">08 — Key takeaways</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">What we take from it</h2>
            </div>

            <div className="lg:col-span-9">
              {project.takeaways ? (
                <Stagger as="ol" className="border-t border-ink/15">
                  {project.takeaways.map((takeaway, index) => (
                    <StaggerItem as="li" key={takeaway} className="grid grid-cols-12 gap-4 border-b border-ink/15 py-5">
                      <span className="label col-span-2 text-ink/60 md:col-span-1">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className="col-span-10 text-[15px] font-light leading-relaxed text-ink/75 md:col-span-11 md:text-base">
                        {takeaway}
                      </p>
                    </StaggerItem>
                  ))}
                </Stagger>
              ) : (
                <PendingField
                  title="Content field — pending verification"
                  note="Takeaways for this project will be added once the campaign team has reviewed the archive."
                />
              )}

              {project.verification && project.verification.length > 0 && (
                <Reveal className="mt-8 border border-ink/20 bg-cream p-5 md:p-6" y={16}>
                  <p className="label flex items-center gap-2 text-ink/60">
                    <span aria-hidden="true" className="h-[5px] w-[5px] bg-sun" />
                    09 — Attribution &amp; verification notes
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {project.verification.map((note) => (
                      <li key={note} className="relative pl-4 text-[13px] font-light leading-relaxed text-ink/60">
                        <span aria-hidden="true" className="absolute left-0 top-[0.6em] h-[3px] w-[3px] bg-ink/30" />
                        {note}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 border-t border-ink/15 pt-3 text-[12px] font-light text-ink/60">
                    These notes are editable content fields. Nothing here is inferred.
                  </p>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="bg-ink text-white">
          <div className="shell py-16 md:py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <Eyebrow surface="dark">10 — Related projects</Eyebrow>
                <h2 className="mt-5 display text-[clamp(1.7rem,3.6vw,2.8rem)]">More from the archive</h2>
              </div>
              <Link
                to="/work"
                className="label group inline-flex items-center gap-2 text-white/60 transition-colors hover:text-white"
              >
                View all work
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-3.5 w-3.5 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {related.map((item, index) => (
                <MaskReveal key={item.slug} delay={index * 0.08}>
                  <ProjectCard project={item} aspect="4 / 5" />
                </MaskReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        eyebrow="11 — Next step"
        title={
          <>
            A campaign brief
            <br />
            starts with a conversation.
          </>
        }
        text="If this is the kind of work your brand needs, tell us what you are trying to achieve and what is currently in the way."
        primaryLabel="Start a conversation"
        secondaryLabel="All work"
        secondaryTo="/work"
      />
    </>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = slug ? projectBySlug(slug) : undefined

  if (!project) return <NotFound />

  return <ProjectView key={project.slug} project={project} />
}
