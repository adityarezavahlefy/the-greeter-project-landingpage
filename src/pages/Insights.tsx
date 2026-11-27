import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { ArticleCover } from '../components/ArticleCover'
import { CtaLink, Eyebrow, VerificationNote } from '../components/ui'
import { insightCategories, insights, readingTime } from '../data/insights'
import { usePageMeta } from '../lib/meta'
import { MaskReveal, Stagger, StaggerItem } from '../lib/motion'
import { cn } from '../lib/cn'

const ALL = 'All perspectives'

export default function Insights() {
  usePageMeta({
    title: 'Insights — think beyond content',
    description:
      'Editorial perspectives on brand strategy, the creator economy, campaign breakdowns and social media culture from The Gretter Projects.',
    path: '/insights',
  })

  const [searchParams, setSearchParams] = useSearchParams()
  const raw = searchParams.get('category')
  const active = raw && insightCategories.includes(raw) ? raw : ALL

  const list = useMemo(
    () => (active === ALL ? insights : insights.filter((insight) => insight.category === active)),
    [active],
  )

  const featured = insights.find((insight) => insight.featured) ?? insights[0]

  const setCategory = (category: string) => {
    if (category === ALL) {
      searchParams.delete('category')
    } else {
      searchParams.set('category', category)
    }
    setSearchParams(searchParams, { replace: true })
  }

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={['Think', 'beyond content.']}
        lead="Perspectives on brand, creators, campaigns and the platforms in between — written by the team that runs them."
        meta={[
          { label: 'Format', value: 'Editorial perspectives' },
          { label: 'Topics', value: 'Strategy · Creators · Campaigns · Culture' },
          { label: 'Written by', value: 'The Gretter Projects editorial' },
          { label: 'Research claims', value: 'None without a cited source' },
        ]}
      />

      {/* FEATURED */}
      {featured && (
        <section className="bg-cream">
          <div className="shell py-14 md:py-20">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
              <MaskReveal className="lg:col-span-6">
                <Link
                  to={`/insights/${featured.slug}`}
                  className="group block"
                  aria-label={`Read ${featured.title}`}
                >
                  <ArticleCover
                    insight={featured}
                    index="01"
                    size="lg"
                    className="aspect-[4/5] transition-transform duration-700 ease-editorial group-hover:scale-[1.01] md:aspect-[5/5]"
                  />
                </Link>
              </MaskReveal>

              <div className="flex flex-col justify-center lg:col-span-6">
                <Eyebrow surface="light">Featured perspective</Eyebrow>
                <h2 className="mt-5 display text-[clamp(1.8rem,4vw,3.2rem)]">{featured.title}</h2>
                <p className="body-copy mt-5 max-w-lg">{featured.excerpt}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <span className="label border border-ink/20 px-2.5 py-1.5 text-ink/60">{featured.category}</span>
                  <span className="label text-ink/60">{readingTime(featured)}</span>
                </div>
                <div className="mt-8">
                  <CtaLink to={`/insights/${featured.slug}`} variant="outline-ink">
                    Read the perspective
                  </CtaLink>
                </div>
                <VerificationNote className="mt-8 max-w-md">
                  These pieces are perspectives, not research reports. Any figure quoted will come from a client
                  campaign or a cited public source.
                </VerificationNote>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FILTERS */}
      <div className="sticky top-[70px] z-30 border-y border-ink/12 bg-cream/95 backdrop-blur md:top-[86px]">
        <div className="shell no-scrollbar flex items-center gap-2 overflow-x-auto py-3 lg:flex-wrap lg:overflow-visible">
          {[ALL, ...insightCategories].map((category) => {
            const isActive = active === category
            return (
              <button
                key={category}
                type="button"
                onClick={() => setCategory(category)}
                aria-pressed={isActive}
                className={cn(
                  'label shrink-0 whitespace-nowrap border px-3.5 py-2.5 transition-colors duration-300',
                  isActive
                    ? 'border-ink bg-ink text-white'
                    : 'border-ink/20 text-ink/55 hover:border-ink/50 hover:text-ink',
                )}
              >
                {category}
              </button>
            )
          })}
        </div>
      </div>

      {/* LIST */}
      <section className="bg-paper">
        <div className="shell py-14 md:py-20">
          <div className="flex items-end justify-between gap-4">
            <Eyebrow surface="light">{active === ALL ? 'All perspectives' : active}</Eyebrow>
            <p className="label text-ink/60" aria-live="polite">
              {list.length} {list.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>

          <Stagger className="mt-6 border-t border-ink/15" step={0.045}>
            {list.map((insight, index) => (
              <StaggerItem key={insight.slug}>
                <Link
                  to={`/insights/${insight.slug}`}
                  className="group grid grid-cols-12 items-center gap-x-4 gap-y-2 border-b border-ink/15 py-6 transition-colors duration-300 hover:bg-cream md:gap-6 md:py-7"
                >
                  <span className="label col-span-2 text-ink/60 md:col-span-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="col-span-10 md:col-span-3">
                    <p className="label text-ink/60">{insight.category}</p>
                  </div>
                  <h3 className="col-span-11 col-start-2 text-[1.2rem] font-semibold leading-snug tracking-tight transition-[color,transform] duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:text-ink/60 md:col-span-6 md:col-start-auto md:text-[1.5rem]">
                    {insight.title}
                  </h3>
                  <div className="col-span-1 flex items-center justify-end gap-4 md:col-span-2">
                    <span className="label hidden text-ink/60 lg:block">{readingTime(insight)}</span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-5 w-5 text-ink/60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          {list.length === 0 && (
            <div className="py-16">
              <p className="label text-ink/60">Nothing published in this category yet</p>
              <p className="mt-4 max-w-lg text-lg font-light text-ink/70">
                We publish when there is something worth saying. In the meantime, the campaign archive is the better
                place to see how we think.
              </p>
              <div className="mt-6">
                <CtaLink to="/work" variant="outline-ink">
                  Read the work instead
                </CtaLink>
              </div>
            </div>
          )}
        </div>
      </section>

      <CtaBand
        title={
          <>
            A perspective is only
            <br />
            as good as the work.
          </>
        }
        text="If one of these pieces describes a problem you are living with, that is usually the right starting point for a conversation."
        primaryLabel="Talk to us"
        secondaryLabel="See the campaigns"
        secondaryTo="/work"
      />
    </>
  )
}
