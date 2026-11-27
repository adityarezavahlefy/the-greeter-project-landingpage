import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { CtaLink, Eyebrow } from '../components/ui'
import { Reveal, Stagger, StaggerItem } from '../lib/motion'
import { insightBySlug, insights, readingTime, type Insight } from '../data/insights'
import { usePageMeta } from '../lib/meta'
import NotFound from './NotFound'

function ArticleView({ insight }: { insight: Insight }) {
  usePageMeta({
    title: insight.title,
    description: insight.excerpt,
    path: `/insights/${insight.slug}`,
    type: 'article',
  })

  const more = insights.filter((item) => item.slug !== insight.slug).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow={insight.category}
        title={insight.title}
        lead={insight.excerpt}
        meta={[
          { label: 'Reading time', value: readingTime(insight) },
          { label: 'Author', value: 'The Gretter Projects editorial' },
          { label: 'Format', value: 'Perspective' },
          { label: 'Sources', value: 'Cited where used' },
        ]}
      />

      <section className="bg-paper">
        <div className="shell py-12 md:py-16">
          <Link
            to="/insights"
            className="label group inline-flex items-center gap-2 text-ink/60 transition-colors hover:text-ink"
          >
            <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            All insights
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <article className="prose-editorial max-w-[68ch] lg:col-span-8">
              <Stagger>
                {insight.blocks.map((block, index) => {
                  let content: ReactNode
                  if (block.type === 'h2') {
                    content = <h2>{block.text}</h2>
                  } else if (block.type === 'quote') {
                    content = <blockquote>{block.text}</blockquote>
                  } else if (block.type === 'list') {
                    content = (
                      <ul>
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )
                  } else {
                    content = (
                      <p className={index === 0 ? 'text-lg text-ink/85 md:text-xl md:leading-[1.7]' : undefined}>
                        {block.text}
                      </p>
                    )
                  }
                  return <StaggerItem key={index}>{content}</StaggerItem>
                })}
              </Stagger>

              <div className="mt-12 border-t border-ink/15 pt-6">
                <p className="text-[12px] font-light leading-relaxed text-ink/60">
                  This piece is an editorial perspective from The Gretter Projects. It does not contain client
                  performance claims unless a campaign is named, and it does not cite third-party research that has not
                  been published with a source.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <CtaLink to="/contact" variant="outline-ink">
                    Talk about this
                  </CtaLink>
                  <CtaLink to="/work" variant="outline-ink" arrow={false}>
                    See the campaigns
                  </CtaLink>
                </div>
              </div>
            </article>

            <aside className="lg:col-span-4">
              <Reveal className="lg:sticky lg:top-28" y={18} delay={0.1}>
                <div className="border-t border-ink/20 pt-6">
                  <Eyebrow surface="light">More perspectives</Eyebrow>
                  <ul className="mt-5">
                    {more.map((item, index) => (
                      <li key={item.slug} className="border-b border-ink/15">
                        <Link to={`/insights/${item.slug}`} className="group flex items-start justify-between gap-4 py-5">
                          <div>
                            <p className="label text-ink/60">{String(index + 1).padStart(2, '0')} · {item.category}</p>
                            <p className="mt-2 text-[15px] font-medium leading-snug tracking-tight transition-colors group-hover:text-ink/60">
                              {item.title}
                            </p>
                          </div>
                          <ArrowUpRight
                            aria-hidden="true"
                            className="mt-1 h-4 w-4 shrink-0 text-ink/60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border border-ink/20 bg-cream p-5">
                  <p className="label text-ink/60">Working on this problem?</p>
                  <p className="mt-3 text-sm font-light leading-relaxed text-ink/70">
                    We are happy to compare notes on the specific version of this challenge your brand is facing.
                  </p>
                  <CtaLink to="/contact" variant="outline-ink" className="mt-4 w-full">
                    Start a conversation
                  </CtaLink>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Let&rsquo;s make your next
            <br />
            growth move matter.
          </>
        }
        text="Strategy is easier to discuss with a real brief in front of us. Tell us what you are working on."
        primaryLabel="Start a conversation"
        secondaryLabel="All insights"
        secondaryTo="/insights"
      />
    </>
  )
}

export default function InsightDetail() {
  const { slug } = useParams()
  const insight = slug ? insightBySlug(slug) : undefined

  if (!insight) return <NotFound />

  return <ArticleView key={insight.slug} insight={insight} />
}
