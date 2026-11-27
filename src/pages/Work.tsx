import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { ProjectRow } from '../components/ProjectCard'
import { Eyebrow, VerificationNote } from '../components/ui'
import {
  categories,
  projects,
  projectsByCategory,
  type CategoryKey,
} from '../data/projects'
import { usePageMeta } from '../lib/meta'
import { Reveal, Stagger, StaggerItem } from '../lib/motion'
import { cn } from '../lib/cn'

type Filter = 'all' | CategoryKey

const filters: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All Projects' },
  ...categories.map((category) => ({ key: category.key as Filter, label: category.label })),
]

const validKeys = new Set<string>(filters.map((filter) => filter.key))

export default function Work() {
  usePageMeta({
    title: 'Our Work — campaign archive',
    description:
      'A documented campaign archive across UGC, KOL and creator management, Threads management, performance marketing and brand activation.',
    path: '/work',
  })

  const [searchParams, setSearchParams] = useSearchParams()
  const raw = searchParams.get('category') ?? 'all'
  const active: Filter = validKeys.has(raw) ? (raw as Filter) : 'all'

  const filtered = useMemo(() => projectsByCategory(active), [active])

  const setFilter = (key: Filter) => {
    if (key === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', key)
    }
    setSearchParams(searchParams, { replace: true })
  }

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title={['A campaign archive,', 'not a showreel.']}
        lead="Each project is documented the same way: objective, scope, execution and what happened next. Metrics belong to the campaign they came from."
        meta={[
          { label: 'Archive', value: `${projects.length} documented projects` },
          { label: 'Campaign types', value: 'UGC · KOL · Threads · Performance · Activation' },
          { label: 'Markets', value: 'Indonesia' },
          { label: 'Reporting', value: 'Published per campaign' },
        ]}
      />

      {/* FILTERS */}
      <div className="sticky top-[70px] z-30 border-y border-ink/12 bg-cream/95 backdrop-blur md:top-[86px]">
        <div className="shell flex items-center justify-between gap-6 py-3">
          <div className="no-scrollbar -mx-1 flex flex-1 gap-2 overflow-x-auto px-1 py-1 lg:flex-wrap lg:overflow-visible">
            {filters.map((filter) => {
              const isActive = active === filter.key
              const count = filter.key === 'all' ? projects.length : projectsByCategory(filter.key).length
              return (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => setFilter(filter.key)}
                  aria-pressed={isActive}
                  className={cn(
                    'label flex shrink-0 items-center gap-2 border px-3.5 py-2.5 transition-colors duration-300',
                    isActive
                      ? 'border-ink bg-ink text-white'
                      : 'border-ink/20 text-ink/55 hover:border-ink/50 hover:text-ink',
                  )}
                >
                  {filter.label}
                  <span className={cn('text-[9px]', isActive ? 'text-sun' : 'text-ink/60')}>{count}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ARCHIVE */}
      <section className="bg-ink text-white">
        <div className="shell py-12 md:py-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <Eyebrow surface="dark">
              {active === 'all' ? 'Complete archive' : categories.find((category) => category.key === active)?.label}
            </Eyebrow>
            <p className="label text-white/60" aria-live="polite">
              {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
            </p>
          </div>

          <div className="hidden grid-cols-12 gap-6 border-b border-white/25 pb-3 md:grid">
            <span className="label col-span-1 text-white/60">No.</span>
            <span className="label col-span-4 text-white/60">Client</span>
            <span className="label col-span-3 text-white/60">Discipline</span>
            <span className="label col-span-2 text-white/60">Lead metric</span>
            <span className="label col-span-2 text-right text-white/60">Case study</span>
          </div>

          <Stagger step={0.04}>
            {filtered.map((project, index) => (
              <StaggerItem key={project.slug}>
                <ProjectRow project={project} index={index} />
              </StaggerItem>
            ))}
          </Stagger>

          {filtered.length === 0 && (
            <div className="border-b border-white/15 py-16">
              <p className="label text-sun">Nothing listed yet</p>
              <p className="mt-4 max-w-lg text-lg font-light text-white/70">
                Campaigns in this category are being prepared for publication. If you are planning work like this, we
                can walk you through the relevant project directly.
              </p>
            </div>
          )}

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-7" y={16}>
              <VerificationNote className="border-white/15 text-white/60">
                Figures shown in the archive belong only to the campaign they are listed against. Where a project has no
                published metric, the case study says so and the figures are available from the project team on
                request. Years are omitted where the supplied campaign artwork is inconsistent.
              </VerificationNote>
            </Reveal>
            <p className="label text-white/60 lg:col-span-5 lg:text-right">
              Placeholder visuals are labelled in each case study
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Your campaign could be
            <br />
            the next one documented here.
          </>
        }
        text="Tell us the objective and the constraint. We will show you how we would approach it."
        primaryLabel="Start a conversation"
        secondaryLabel="Explore services"
        secondaryTo="/services"
      />
    </>
  )
}
