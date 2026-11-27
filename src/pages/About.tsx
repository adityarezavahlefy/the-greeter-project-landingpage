import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { CtaLink, Eyebrow, VerificationNote } from '../components/ui'
import { MaskReveal, Parallax, Reveal, RuleReveal, Stagger, StaggerItem } from '../lib/motion'
import { usePageMeta } from '../lib/meta'
import { site } from '../data/site'

const beliefs = [
  {
    index: '01',
    title: 'Creative is a commercial instrument',
    body: 'A campaign is not finished when it looks good. It is finished when it earns its place in the business — by building recognition, changing behaviour or selling something.',
  },
  {
    index: '02',
    title: 'The audience is not a demographic',
    body: 'People scroll, skip and share like people. We plan for the behaviour we can observe on the platform, not the persona we invented in a deck.',
  },
  {
    index: '03',
    title: 'Volume without intent is noise',
    body: 'Producing more content is not a strategy. We use volume deliberately — to test formats, find what travels and give the audience more than one way into the idea.',
  },
  {
    index: '04',
    title: 'Measure what the objective asked for',
    body: 'Views, reach, attendance and sales are different things. We report the one the campaign was built to move, and we do not swap the words when one sounds better.',
  },
]

const thinking = [
  { left: 'Brand building', right: 'Performance pressure' },
  { left: 'Creative craft', right: 'Platform speed' },
  { left: 'Content volume', right: 'Creative meaning' },
  { left: 'Local relevance', right: 'Scale ambition' },
]

const process = [
  {
    index: '01',
    title: 'Understand',
    body: 'We start with the business, not the brief. What is the constraint — awareness, trust, conversion, capacity? What does the audience already believe? Access to real data beats assumptions every time.',
  },
  {
    index: '02',
    title: 'Strategize',
    body: 'One objective, one idea, one definition of success. We document the audience, the message, the platform behaviour we are designing for, and the metric the work will be judged on.',
  },
  {
    index: '03',
    title: 'Execute',
    body: 'Strategy becomes production: content, creators, activation and distribution, coordinated by the same team that wrote the plan. Fewer handovers, fewer lost intentions.',
  },
  {
    index: '04',
    title: 'Measure',
    body: 'We report what happened against what was expected, including what did not work. Then we decide what to keep, change or stop before the next cycle begins.',
  },
]

export default function About() {
  usePageMeta({
    title: 'About the agency',
    description:
      'The Gretter Projects is a creative and strategic growth agency based in Indonesia. Our philosophy, how we think, how we work, and our founder, Gabriel Christian.',
    path: '/about',
  })

  return (
    <>
      <PageHero
        eyebrow="About the agency"
        title={[
          <>
            We believe <span className="text-sun">better</span>
          </>,
          'marketing starts with',
          'better thinking.',
        ]}
        lead="A creative and strategic growth agency built on one conviction: the idea and the outcome should never be planned in different rooms."
        meta={[
          { label: 'Positioning', value: 'Creative & Strategic Growth Agency' },
          { label: 'Based in', value: site.cities.join(' · ') },
          { label: 'Founder', value: 'Gabriel Christian' },
          { label: 'Disciplines', value: 'Strategy · Content · Creators · Media' },
        ]}
      />

      {/* OUR STORY */}
      <section id="story" className="scroll-mt-28 bg-cream">
        <div className="shell py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-5">
              <Eyebrow surface="light">Our story</Eyebrow>
              <h2 className="mt-6 display text-[clamp(1.9rem,3.8vw,3.2rem)]">
                Built for the space between a good idea and a business result.
              </h2>
            </Reveal>

            <Reveal className="lg:col-span-7 lg:pt-14" delay={0.08}>
              <p className="text-lg font-light leading-[1.65] text-ink/80 md:text-xl">
                The Gretter Projects began with a simple frustration: too much marketing is commissioned for output
                and judged on applause.
              </p>
              <p className="body-copy mt-5">
                A campaign can be beautiful, on-brand and delivered on time — and still fail to move anything that
                matters. The gap between the idea and the outcome is where most marketing budget quietly disappears.
              </p>
              <p className="body-copy mt-4">
                We built the agency to close that gap. Creative people who understand the commercial brief. Strategists
                who stay close enough to production to know what is actually possible. One team accountable for the
                whole arc: the idea, the execution, and what happened after the campaign went live.
              </p>
              <p className="body-copy mt-4">
                Today that means brand strategy and activation, creator-led content, KOL management, performance media,
                social and Threads management, and affiliate partnerships — for brands that want visibility and
                outcomes from the same investment.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section id="beliefs" className="scroll-mt-28 border-t border-ink/10 bg-paper">
        <div className="shell py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow surface="light">What we believe</Eyebrow>
              <h2 className="mt-6 display text-[clamp(1.9rem,3.8vw,3.2rem)]">
                Four beliefs that shape every brief.
              </h2>
              <p className="body-copy mt-6 max-w-sm">
                These are not values on a wall. They are the questions we ask before agreeing to a plan.
              </p>
            </div>

            <Stagger className="border-t border-ink/15 lg:col-span-8">
              {beliefs.map((belief) => (
                <StaggerItem key={belief.index}>
                  <div className="group grid grid-cols-12 gap-4 border-b border-ink/15 py-7">
                    <span className="label col-span-12 text-ink/60 md:col-span-2">{belief.index}</span>
                    <div className="col-span-12 md:col-span-10">
                      <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{belief.title}</h3>
                      <p className="body-copy mt-3 max-w-2xl">{belief.body}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* HOW WE THINK */}
      <section id="thinking" className="scroll-mt-28 bg-ink text-white">
        <div className="shell py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Eyebrow surface="dark">How we think</Eyebrow>
              <p className="mt-8 text-[clamp(1.5rem,3.2vw,2.6rem)] font-medium leading-[1.25] tracking-tightest">
                Attention is easy to rent.{' '}
                <span className="text-sun">Trust is what compounds.</span>
              </p>
              <p className="body-copy-dark mt-6 max-w-lg">
                Most creative decisions are made under tension: the brand wants meaning, the business wants a number,
                the platform wants speed. We do not pretend those tensions are resolved. We name them, decide which one
                leads for this campaign, and design the work around that choice.
              </p>
              <p className="body-copy-dark mt-4 max-w-lg">
                That is also why we keep strategy and execution in the same room. A strategy that cannot be produced is
                a document. Production without a strategy is an expensive habit.
              </p>
            </div>

            <div className="lg:col-span-6">
              <Stagger className="border-t border-white/20">
                {thinking.map((pair, index) => (
                  <StaggerItem key={pair.left} className="grid grid-cols-2 gap-4 border-b border-white/15 py-5">
                    <div className="flex items-baseline gap-3">
                      <span className="label text-white/60">{String(index + 1).padStart(2, '0')}</span>
                      <span className="text-sm font-light text-white/70">{pair.left}</span>
                    </div>
                    <span className="text-sm font-light text-white/70">{pair.right}</span>
                  </StaggerItem>
                ))}
              </Stagger>
              <p className="label mt-6 text-white/60">Tensions we manage, not tensions we ignore</p>

              <Reveal className="relative mt-10 overflow-hidden border border-white/20 p-6" y={18}>
                <RuleReveal className="absolute inset-x-0 top-0 h-[3px] bg-sun" />
                <p className="label text-sun">Positioning statement</p>
                <p className="mt-4 text-lg font-medium leading-snug tracking-tight text-white">
                  We turn creative ideas into meaningful brand growth.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section id="process" className="scroll-mt-28 bg-cream">
        <div className="shell py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow surface="light">How we work</Eyebrow>
              <h2 className="mt-6 display text-[clamp(1.9rem,3.8vw,3.2rem)]">
                One process, whatever the output.
              </h2>
              <p className="body-copy mt-6 max-w-sm">
                The sequence is the same whether we are producing thirty creator videos, a two-day activation or a
                performance campaign. Only the scope changes.
              </p>
              <div className="mt-8">
                <CtaLink to="/services" variant="outline-ink">
                  See the services
                </CtaLink>
              </div>
            </div>

            <div className="lg:col-span-8">
              <Stagger className="grid gap-px border-t border-ink/15 sm:grid-cols-2">
                {process.map((step) => (
                  <StaggerItem key={step.index} className="border-b border-ink/15 py-7 sm:px-6 sm:odd:pl-0 sm:even:border-l sm:even:border-l-ink/15">
                    <div className="flex items-baseline gap-3">
                      <span className="display text-[1.4rem] text-ink/60">{step.index}</span>
                      <h3 className="text-lg font-semibold uppercase tracking-tight">{step.title}</h3>
                    </div>
                    <p className="body-copy mt-3">{step.body}</p>
                  </StaggerItem>
                ))}
              </Stagger>

              <div className="mt-8 border border-ink/15 p-6">
                <p className="label text-ink/60">What we need from you</p>
                <p className="mt-3 text-sm font-light leading-relaxed text-ink/70">
                  Access to brand assets and existing performance data, one decision maker in the room, and enough
                  honesty about the real constraint to plan against it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section id="founder" className="scroll-mt-28 border-t border-ink/10 bg-paper">
        <div className="shell py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <MaskReveal className="lg:col-span-5">
              <div className="relative overflow-hidden border border-ink/15 bg-cream" style={{ aspectRatio: '4 / 5' }}>
                <Parallax distance={16} className="pointer-events-none absolute inset-0">
                  <div aria-hidden="true" className="halftone absolute inset-0 text-ink opacity-[0.12]" />
                  <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,rgba(255,205,29,0.55),transparent_70%)]" />
                </Parallax>
                <span
                  aria-hidden="true"
                  className="absolute left-6 top-24 font-extrabold leading-none tracking-tightest text-ink/80"
                  style={{ fontSize: 'clamp(4rem,12vw,8rem)', WebkitTextStroke: '1px rgba(0,0,0,0.55)', color: 'transparent' }}
                >
                  GC
                </span>
                <div className="absolute inset-x-0 bottom-0 flex flex-col justify-between gap-2 border-t border-ink/20 bg-cream/90 p-5 backdrop-blur-sm">
                  <span className="label inline-flex w-fit border border-ink/25 px-2 py-1 text-ink/60">
                    Asset pending
                  </span>
                  <p className="text-sm font-medium tracking-tight">Founder portrait</p>
                  <p className="label text-ink/60">Replace with supplied photography</p>
                </div>
              </div>
            </MaskReveal>

            <div className="lg:col-span-7 lg:pt-10">
              <Eyebrow surface="light">Founder</Eyebrow>
              <h2 className="mt-6 text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tightest">Gabriel Christian</h2>
              <p className="mt-2 text-sm font-light uppercase tracking-label text-ink/60">
                Founder, The Gretter Projects
              </p>

              <p className="body-copy mt-6">
                Gabriel leads The Gretter Projects with a belief that creative work earns its place by doing something
                for the business behind it. His role spans strategy, creative direction and the operating discipline
                that keeps campaigns on objective.
              </p>
              <p className="body-copy mt-4">
                The approach is direct: understand the challenge properly, be explicit about what the work is for, then
                make it well enough that people choose to watch. That standard is applied to every project the agency
                takes on.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <CtaLink href={`mailto:${site.email}`} variant="outline-ink">
                  Contact the founder
                </CtaLink>
                <CtaLink to="/work" variant="outline-ink" arrow={false}>
                  See the work
                </CtaLink>
              </div>

              <VerificationNote className="mt-8 max-w-lg">
                Full biography, founder photography and any additional credentials will be added from supplied source
                material only. No awards, client relationships or history are stated on this page without verification.
              </VerificationNote>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Better thinking
            <br />
            starts with a conversation.
          </>
        }
        text="If you want a partner who will ask what the work is for before deciding what to make, we should talk."
        primaryLabel="Start a conversation"
      />
    </>
  )
}
