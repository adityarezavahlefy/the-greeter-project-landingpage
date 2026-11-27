import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { services } from '../data/services'
import { campaignProof } from '../data/campaignProof'
import { insights, readingTime } from '../data/insights'
import { site } from '../data/site'
import { usePageMeta } from '../lib/meta'
import {
  AnimatedLines,
  CountUp,
  EASE,
  Parallax,
  Reveal,
  RuleReveal,
  Stagger,
  StaggerItem,
} from '../lib/motion'
import { CampaignProof } from '../components/CampaignProof'
import { ClientWall } from '../components/ClientWall'
import { CtaBand } from '../components/CtaBand'
import { CtaLink, Eyebrow, Marquee, SectionHead, VerificationNote } from '../components/ui'

const results = [
  {
    client: 'KOI Teppanyaki',
    value: '4.1M+',
    label: 'Instagram views',
    note: 'KOI content performance reference',
    to: '/work/koi-teppanyaki',
    pending: false,
  },
  {
    client: 'INSA Yacht Festival',
    value: '4,000+',
    label: 'Event attendees',
    note: 'Alongside 950K+ impressions — impressions are not unique reach',
    to: '/work/insa-yacht-festival',
    pending: false,
  },
  {
    client: 'Atalon',
    value: '2×',
    label: 'Monthly sales',
    note: 'TikTok sales moved from approx. IDR 200M to 400M',
    to: '/work/atalon',
    pending: false,
  },
  {
    client: 'Insidious UGC',
    value: '15.9M',
    label: 'Views achieved',
    note: 'Against a 10M view KPI — pending final metric verification',
    to: '/work/insidious',
    pending: true,
  },
]

const approach = [
  {
    index: '01',
    title: 'Understand',
    body: 'The business, the audience, the market and the real constraint — before deciding what to make.',
  },
  {
    index: '02',
    title: 'Strategize',
    body: 'A campaign strategy and creative direction with a clear objective and a measurable definition of success.',
  },
  {
    index: '03',
    title: 'Execute',
    body: 'Content, creators, activation and distribution produced and coordinated to the plan.',
  },
  {
    index: '04',
    title: 'Measure',
    body: 'Performance evaluated against the objective, with what to keep, change or stop made explicit.',
  },
]

export default function Home() {
  usePageMeta({
    title: 'The Gretter Projects — Creative & Strategic Growth Agency',
    description:
      'We turn content into business growth. The Gretter Projects is a creative and strategic growth agency building brand visibility, creator campaigns, activation and measurable performance.',
    path: '/',
  })

  const homeInsights = insights.slice(0, 3)
  const reduce = useReducedMotion()

  const intro = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        }

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <Parallax distance={22} className="pointer-events-none absolute inset-x-0 -top-12 bottom-0">
          <div aria-hidden="true" className="halftone absolute inset-0 text-white opacity-[0.08]" />
        </Parallax>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_70%_at_85%_0%,rgba(255,205,29,0.12),transparent_58%)]"
        />

        <div className="shell relative pb-10 pt-28 md:pb-14 md:pt-36">
          <div className="relative flex flex-col gap-3 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <Eyebrow surface="dark">{site.positioning}</Eyebrow>
            <p className="label text-white/60">{site.cities.join(' · ')}</p>
            <RuleReveal className="absolute inset-x-0 bottom-0 h-px bg-white/15" delay={0.2} />
          </div>

          <div className="mt-9 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <h1 className="display text-[clamp(2.6rem,7vw,6.2rem)]">
                <AnimatedLines
                  lines={[
                    <>We turn</>,
                    <>content</>,
                    <>
                      into <span className="text-sun">business</span>
                    </>,
                    <>growth.</>,
                  ]}
                />
              </h1>

              <motion.p
                className="mt-7 max-w-xl text-[15px] font-light leading-[1.7] text-white/65 md:text-base"
                {...intro(0.42)}
              >
                We help ambitious brands grow through strategic content, creator collaborations, brand activation and
                performance-driven marketing.
              </motion.p>

              <motion.div className="mt-8 flex flex-wrap gap-3" {...intro(0.52)}>
                <CtaLink to="/work">Explore our work</CtaLink>
                <CtaLink to="/contact" variant="outline">
                  Let&rsquo;s talk
                </CtaLink>
              </motion.div>

              <motion.div className="mt-10 flex items-center gap-4 md:mt-16" {...intro(0.68)}>
                <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center border border-white/25">
                  <ArrowDown className="h-4 w-4 text-white/60" />
                </span>
                <p className="label text-white/60">Scroll to explore</p>
              </motion.div>
            </div>

            <motion.div
              className="lg:col-span-5"
              {...(reduce
                ? {}
                : {
                    initial: { opacity: 0, scale: 0.985, y: 18 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    transition: { duration: 0.9, delay: 0.38, ease: EASE },
                  })}
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {campaignProof.map((item, index) => (
                  <CampaignProof
                    key={item.slug}
                    item={item}
                    className={index === 0 ? 'min-h-[236px] sm:col-span-2' : 'min-h-[236px]'}
                    logoClassName={
                      index === 0
                        ? 'max-h-[72px] md:max-h-[116px]'
                        : index === 1
                          ? 'max-h-[74px] md:max-h-[100px]'
                          : 'max-h-[48px] max-w-[90%] md:max-h-[60px]'
                    }
                  />
                ))}
              </div>
              <p className="label mt-4 flex items-center gap-2 text-white/60">
                <span aria-hidden="true" className="h-[5px] w-[5px] bg-sun" />
                Selected campaign results
              </p>
            </motion.div>
          </div>
        </div>

        <Marquee items={site.marquee} />
      </section>

      {/* TRUSTED BY */}
      <ClientWall />

      {/* INTRODUCTION */}
      <section className="bg-cream">
        <div className="shell py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-7">
              <Eyebrow surface="light">Introduction</Eyebrow>
              <h2 className="mt-6 display text-[clamp(2rem,4.6vw,4rem)]">
                Creativity gets attention.
                <br />
                <span className="text-ink/60">Strategy makes it matter.</span>
              </h2>
            </Reveal>

            <Reveal className="lg:col-span-5 lg:pt-12" delay={0.1}>
              <p className="body-copy">
                The Gretter Projects is a creative and strategic growth agency. We combine creative thinking,
                audience understanding and marketing execution to build campaigns that serve real business objectives —
                not just a content calendar.
              </p>
              <p className="body-copy mt-4">
                That means we are equally comfortable defining a brand&rsquo;s communication direction, running a
                creator programme, producing UGC at volume, or optimising the media that carries it. One team, one
                objective.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-ink/15 pt-6">
                <div>
                  <p className="label text-ink/60">Creative</p>
                  <p className="mt-2 text-sm font-light leading-snug text-ink/70">
                    Ideas built for the platform, the audience and the moment.
                  </p>
                </div>
                <div>
                  <p className="label text-ink/60">Commercial</p>
                  <p className="mt-2 text-sm font-light leading-snug text-ink/70">
                    Judged on what changed for the business, not what looked good.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-14 border-t border-ink/15 pt-8 md:mt-20">
            <p className="max-w-4xl text-[clamp(1.15rem,2.5vw,1.9rem)] font-medium leading-[1.35] tracking-tight text-ink">
              We turn creative ideas into{' '}
              <span className="bg-sun px-1.5 py-0.5">meaningful brand growth</span> — by treating content as a
              business lever, not a deliverable.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-ink/10 bg-paper">
        <div className="shell py-20 md:py-28">
          <SectionHead
            eyebrow="What we do"
            title="What we bring to the table."
            lead="Six disciplines, one operating logic: every creative decision is made against a business objective."
          />

          <Stagger className="mt-12 border-t border-ink/15">
            {services.map((service) => (
              <StaggerItem key={service.key}>
                <Link
                  to={`/services#${service.key}`}
                  className="group relative grid grid-cols-12 items-start gap-x-4 gap-y-3 border-b border-ink/15 py-6 transition-colors duration-300 hover:bg-ink hover:text-white md:items-center md:gap-x-6 md:py-7"
                >
                  <span aria-hidden="true" className="absolute left-0 top-0 h-full w-0 bg-sun transition-all duration-300 ease-editorial group-hover:w-[3px]" />
                  <span className="label col-span-2 pl-3 text-ink/60 transition-colors group-hover:text-sun md:col-span-1">
                    {service.index}
                  </span>
                  <h3 className="col-span-10 text-[1.25rem] font-semibold leading-[1.1] tracking-tightest transition-transform duration-500 ease-editorial group-hover:translate-x-1 md:col-span-4 md:text-[1.6rem]">
                    {service.name}
                  </h3>
                  <p className="col-span-10 col-start-3 max-w-md text-[14px] font-light leading-relaxed text-ink/60 transition-colors group-hover:text-white/60 md:col-span-6 md:col-start-auto md:text-[15px]">
                    {service.home}
                  </p>
                  <span className="col-span-12 flex justify-end md:col-span-1">
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-5 w-5 text-ink/60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sun"
                    />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <p className="text-[13px] font-light text-ink/60">
              Not sure where to start? Most engagements begin with a conversation about the objective.
            </p>
            <CtaLink to="/services" variant="outline-ink" arrow>
              All services
            </CtaLink>
          </div>
        </div>
      </section>

      {/* TRANSITION — a quiet seam between Services and Results */}
      <div aria-hidden="true" className="relative overflow-hidden border-t border-ink/10 bg-paper">
        <div aria-hidden="true" className="halftone pointer-events-none absolute inset-0 text-ink opacity-[0.04]" />
        <div className="shell relative flex items-center gap-5 py-12 md:gap-7 md:py-16">
          <RuleReveal className="h-px flex-1 bg-ink/25" />
          <span className="relative flex h-3 w-3 shrink-0 items-center justify-center border border-ink/30">
            <span className="h-[5px] w-[5px] bg-sun" />
          </span>
          <RuleReveal className="h-px flex-1 bg-ink/25" from="right" delay={0.12} />
        </div>
      </div>

      {/* RESULTS */}
      <section className="bg-cream">
        <div className="shell py-20 md:py-28">
          <SectionHead
            eyebrow="Results & impact"
            title="We believe in showing the work."
            lead="Each figure belongs to the campaign named beside it. We do not combine separate campaigns into a single agency total."
          />

          <div className="mt-12 grid grid-cols-1 gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((result, index) => (
              <Reveal key={result.client} className="bg-cream" delay={index * 0.06}>
                <Link to={result.to} className="group flex h-full flex-col justify-between p-6 md:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <p className="label text-ink/60">{result.client}</p>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 text-ink/60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    />
                  </div>
                  <div className="mt-10">
                    <CountUp
                      value={result.value}
                      className="block display text-[clamp(2.4rem,5vw,3.6rem)]"
                    />
                    <p className="mt-2 text-sm font-medium tracking-tight">{result.label}</p>
                    <p className="mt-3 text-[12px] font-light leading-relaxed text-ink/60">{result.note}</p>
                    {result.pending && (
                      <span className="label mt-3 inline-flex border border-ink/25 px-2 py-1 text-ink/55">
                        Verification pending
                      </span>
                    )}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <VerificationNote className="mt-8 max-w-3xl">
            Impressions and reach are different measures and are never used interchangeably. Sales and attendance
            figures come from client-reported outcomes. Any figure marked for verification is published as an editable
            content field until the campaign report is confirmed.
          </VerificationNote>
        </div>
      </section>

      {/* APPROACH */}
      <section className="border-t border-ink/10 bg-paper">
        <div className="shell py-20 md:py-28">
          <SectionHead
            eyebrow="Our approach"
            title="From business challenge to creative execution."
            lead="Four phases. The same order every time, whether the output is thirty creator videos or a two-day activation."
          />

          <Stagger className="mt-12 grid gap-px border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((step) => (
              <StaggerItem key={step.index} className="group border-b border-ink/15 py-8 pr-6 sm:border-r sm:px-6 sm:first:pl-0 lg:border-b-0">
                <p className="display text-[1.5rem] text-ink/60 transition-colors duration-300 group-hover:text-sun">
                  {step.index}
                </p>
                <h3 className="mt-6 text-lg font-semibold uppercase tracking-tight">{step.title}</h3>
                <p className="mt-3 max-w-[26ch] text-[14px] font-light leading-relaxed text-ink/60">{step.body}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <CtaLink to="/about" variant="outline-ink">
              How we work
            </CtaLink>
            <p className="text-[13px] font-light text-ink/60">Strategy, production and media managed by one team.</p>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="border-t border-ink/10 bg-cream">
        <div className="shell py-20 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow surface="light">Insights</Eyebrow>
              <h2 className="mt-5 display text-[clamp(1.8rem,4vw,3rem)]">Think beyond content.</h2>
            </div>
            <CtaLink to="/insights" variant="outline-ink" arrow>
              All insights
            </CtaLink>
          </div>

          <Stagger className="mt-10 grid gap-px border-t border-ink/15 md:grid-cols-3">
            {homeInsights.map((insight) => (
              <StaggerItem key={insight.slug}>
              <Link
                key={insight.slug}
                to={`/insights/${insight.slug}`}
                className="group flex h-full flex-col justify-between border-b border-ink/15 py-6 md:border-r md:pr-6 md:last:border-r-0"
              >
                <div>
                  <p className="label text-ink/60">{insight.category}</p>
                  <h3 className="mt-4 max-w-[22ch] text-[1.15rem] font-semibold leading-snug tracking-tight transition-[color,transform] duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:text-ink/60">
                    {insight.title}
                  </h3>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="label text-ink/60">{readingTime(insight)}</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 text-ink/60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                  />
                </div>
              </Link>
              </StaggerItem>
            ))}
          </Stagger>
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
        text="Have a brand, campaign or business challenge in mind? Let's talk about what we can build together."
        primaryLabel="Start a conversation"
      />
    </>
  )
}
