export type InsightBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'list'; items: string[] }

export interface Insight {
  slug: string
  title: string
  category: string
  excerpt: string
  blocks: InsightBlock[]
  featured?: boolean
}

export const insightCategories = [
  'Brand & Business Analysis',
  'Marketing Strategy',
  'Creator Economy & UGC',
  'Campaign Breakdown',
  'Social Media & Digital Culture',
]

export const insights: Insight[] = [
  {
    slug: 'content-volume-is-not-a-strategy',
    title: 'Content volume is not a strategy',
    category: 'Marketing Strategy',
    excerpt:
      'Publishing more is not the same as communicating better. A campaign needs a decision before it needs a calendar.',
    featured: true,
    blocks: [
      {
        type: 'p',
        text: 'Most brands that feel stuck do not have a reach problem. They have a decision problem. The calendar is full, the output is consistent, the team is busy — and nobody can say what this month of content was meant to prove.',
      },
      {
        type: 'p',
        text: 'Volume is seductive because it is visible. A hundred posts look like work. A single strategic decision looks like a meeting. But the decision is what makes the hundred posts add up to something.',
      },
      { type: 'h2', text: 'The calendar fills the space where a decision should be' },
      {
        type: 'p',
        text: 'When a brand does not know which audience it is trying to move, or what would count as success, content planning defaults to format. We need a Reel, a carousel, a Threads post, a live session. Format is the easiest question to answer and the least important one.',
      },
      {
        type: 'p',
        text: 'The harder questions come first. Who is this for? What do they currently believe? What would change their mind? What do we want them to do differently after seeing this? Without those answers, a content calendar is a list of guesses with dates attached.',
      },
      { type: 'h2', text: 'Three questions before the next month of content' },
      {
        type: 'list',
        items: [
          'What single thing should the audience understand after this campaign that they do not understand now?',
          'Which platform behaviour are we designing for — scroll, search, reply, or purchase?',
          'If this month worked, which number would move, and by how much?',
        ],
      },
      {
        type: 'p',
        text: 'These questions are uncomfortable because they force a position. A position can be wrong. A content calendar cannot be wrong, which is precisely why it feels safe and produces so little.',
      },
      { type: 'h2', text: 'Volume still matters — with a reason' },
      {
        type: 'p',
        text: 'This is not an argument against producing a lot of content. Creator-led campaigns work because they produce many versions of an idea and let the audience decide which one travels. But that is volume in service of a test, not volume as a substitute for thinking.',
      },
      {
        type: 'quote',
        text: 'A content plan is a hypothesis about attention. If nothing is being tested, it is only a schedule.',
      },
      {
        type: 'p',
        text: 'The practical shift is small: before planning formats, write the campaign sentence. One line describing who this is for, what it should achieve, and why anyone should care. If the sentence is weak, no production budget will fix it. If it is strong, the calendar almost writes itself.',
      },
      {
        type: 'p',
        text: 'Brands do not need more content. They need content that knows what it is doing there.',
      },
    ],
  },
  {
    slug: 'the-creator-brief-is-the-campaign',
    title: 'The creator brief is the campaign',
    category: 'Creator Economy & UGC',
    excerpt:
      'By the time creators are booked, most of the creative work has already happened — in the brief nobody reads carefully.',
    featured: true,
    blocks: [
      {
        type: 'p',
        text: 'A creator campaign is usually evaluated after publishing: views, engagement, sales. By then the decisions that shaped the result were made weeks earlier, in a document that took forty minutes to write.',
      },
      {
        type: 'p',
        text: 'The brief is where a campaign either becomes native to the platform or becomes an advertisement that happens to be filmed by someone with a following.',
      },
      { type: 'h2', text: 'What a brief is actually for' },
      {
        type: 'p',
        text: 'A brief is not a script. It is not a list of mandatory phrases. It is a set of constraints precise enough to keep the message intact and loose enough for the creator to sound like themselves. The tension between those two is the entire craft.',
      },
      {
        type: 'list',
        items: [
          'The one thing the audience must remember — a sentence, not a paragraph.',
          'The moment in the video where that thing appears.',
          'What the creator is allowed to invent, and what they must not change.',
          'What would make the video a failure, stated plainly.',
        ],
      },
      { type: 'h2', text: 'The brief decides whether the content travels' },
      {
        type: 'p',
        text: 'Platforms reward content that holds attention in the first seconds. That is a creative question, and it is decided by the opening a creator is allowed to use. If the brief insists on a logo, a slogan, and a product reveal before the first cut, the campaign has chosen brand compliance over distribution.',
      },
      {
        type: 'p',
        text: 'The best creator work tends to come from briefs that name the tension the audience feels, then trust the creator to dramatise it. Not "show the product is delicious" but "show the moment you would rather eat this than cook".',
      },
      { type: 'h2', text: 'Briefing is a management discipline' },
      {
        type: 'p',
        text: 'None of this works without operational discipline: approvals that do not take four days, feedback that is specific, and a clear line on what legal actually cares about. Creators remember which brands respect their time, and that reputation affects the rates and effort you get next time.',
      },
      {
        type: 'quote',
        text: 'Creators do not make campaigns. They perform the campaign they were given.',
      },
      {
        type: 'p',
        text: 'When a creator campaign underperforms, the useful question is not "was the creator good?" It is "what exactly were they asked to do, and who wrote it?"',
      },
    ],
  },
  {
    slug: 'threads-is-a-conversation-not-a-channel',
    title: 'Threads is a conversation, not a channel',
    category: 'Social Media & Digital Culture',
    excerpt:
      'Text-first platforms reward a brand that can hold a conversation. Most social teams are still structured to broadcast.',
    blocks: [
      {
        type: 'p',
        text: 'Every platform gets adopted with the habits of the platform before it. Brands arrived on Threads with a feed strategy: polished visuals, scheduled posts, campaign announcements. The platform quietly answered with something else — reply-driven distribution.',
      },
      {
        type: 'p',
        text: 'That difference is structural, not stylistic. On a feed, distribution is decided before publishing. In a conversation, distribution is decided by whether anyone answers.',
      },
      { type: 'h2', text: 'What changes when the audience can talk back' },
      {
        type: 'p',
        text: 'A brand that posts only announcements on a conversational platform looks like a press release at a dinner party. The content does not have to be funny or casual to work — it has to be participable. It has to leave room for a reply that is not a complaint.',
      },
      {
        type: 'list',
        items: [
          'Write posts that end with a question people actually want to answer.',
          'Reply as a participant, not as a support queue.',
          'Let one conversation run for days instead of publishing five new posts.',
          'Accept that some posts exist to build familiarity, not to convert.',
        ],
      },
      { type: 'h2', text: 'The operating model is the real constraint' },
      {
        type: 'p',
        text: 'Most agencies and in-house teams are set up around monthly content calendars and weekly approvals. Conversation does not wait for either. If a brand needs three sign-offs to reply to a comment, it will always arrive late to the moment that mattered.',
      },
      {
        type: 'p',
        text: 'What works is narrower and more demanding: a defined voice, a short list of topics the brand can speak to credibly, and one person trusted to respond in real time. That is a governance decision before it is a creative one.',
      },
      {
        type: 'quote',
        text: 'A conversational platform does not need more content. It needs more listening.',
      },
      {
        type: 'p',
        text: 'Threads is not a channel to add to the plan. It is a place where the brand either behaves like a person or is ignored like a billboard.',
      },
    ],
  },
  {
    slug: 'reading-a-campaign-beyond-the-view-count',
    title: 'Reading a campaign beyond the view count',
    category: 'Campaign Breakdown',
    excerpt:
      'Views tell you a video was served. They do not tell you whether the campaign did its job. A practical way to read a campaign report.',
    blocks: [
      {
        type: 'p',
        text: 'Views are the most reported number in creator marketing and the least useful on their own. They describe delivery, not effect. A campaign can hit a view target and still fail the business objective it was commissioned for.',
      },
      { type: 'h2', text: 'Separate four things that get called reach' },
      {
        type: 'list',
        items: [
          'Impressions — how many times content appeared on a screen. Repeat views are included.',
          'Reach — how many distinct accounts saw it. Smaller than impressions, almost always.',
          'Views — a platform-specific measure of playback, defined differently on every platform.',
          'Attendance, sign-ups, sales — outcomes that happen off-platform and need their own source.',
        ],
      },
      {
        type: 'p',
        text: 'Most inflated campaign decks come from sliding between these four words. Impressions get presented as reach. Views get presented as an audience. Attendance gets added to digital reach to produce an impressive total that describes nothing real.',
      },
      { type: 'h2', text: 'Ask what the campaign was supposed to change' },
      {
        type: 'p',
        text: 'A virality campaign is a distribution exercise: it is legitimate to judge it on views and on cost per view. A sales campaign is a conversion exercise: views are an input, revenue is the result. A brand campaign sits in between and needs a measure of recall, search interest, or audience growth to be legible.',
      },
      {
        type: 'p',
        text: 'The mistake is applying one scorecard to every objective, then comparing campaigns that were never trying to do the same thing.',
      },
      {
        type: 'quote',
        text: 'A metric is only meaningful next to the objective it was chosen for.',
      },
      { type: 'h2', text: 'Report the denominator' },
      {
        type: 'p',
        text: 'A cost per thousand views means nothing without knowing what was spent. A growth percentage means nothing without the period and the starting point. A creator campaign means nothing without the number of videos produced. When a report leaves out the denominator, it is usually protecting a weak number.',
      },
      {
        type: 'p',
        text: 'This is not a reason to distrust campaign reports. It is a reason to read them slowly, and to ask for the version with the workings shown.',
      },
    ],
  },
  {
    slug: 'activation-should-be-measurable',
    title: 'Brand activation should be measurable',
    category: 'Brand & Business Analysis',
    excerpt:
      'An activation is not a photo opportunity. If it cannot be measured, it was a production, not a campaign.',
    blocks: [
      {
        type: 'p',
        text: 'Activations are usually commissioned for a feeling: the room was full, the content looked good, people seemed happy. Then the report tries to turn a feeling into a number after the fact.',
      },
      {
        type: 'p',
        text: 'The measurable version of an activation starts earlier, with a decision about what the event is for. Awareness, trial, community, or sales — each one produces a different design and a different report.',
      },
      { type: 'h2', text: 'Build the measurement into the experience' },
      {
        type: 'list',
        items: [
          'Registration data that captures who attended, not only how many.',
          'A moment in the experience that produces content worth distributing afterwards.',
          'A reason for attendees to identify themselves — a redemption, a sign-up, a follow.',
          'A post-event follow-up that connects attendance to behaviour.',
        ],
      },
      {
        type: 'p',
        text: 'None of this requires a large budget. It requires deciding, before production, which three numbers the activation will be judged on. Attendance alone is a production metric: it says people came, not that anything changed.',
      },
      { type: 'h2', text: 'Distribute the event, not just the photos' },
      {
        type: 'p',
        text: 'An activation generates a finite amount of attention on the day. The campaign continues through content: what was captured, what the audience missed, what it felt like to be there. Brands that treat documentation as an afterthought end up with a hard drive full of images and no campaign.',
      },
      {
        type: 'quote',
        text: 'An activation without a measurement plan is a very expensive content shoot.',
      },
      {
        type: 'p',
        text: 'The test is simple. Ask what the report will show before booking the venue. If the answer is "photos and attendance", the brief is not finished.',
      },
    ],
  },
  {
    slug: 'performance-marketing-needs-a-creative-point-of-view',
    title: 'Performance marketing needs a creative point of view',
    category: 'Marketing Strategy',
    excerpt:
      'Media buying optimises what exists. Creative decides what is possible. Treating them as separate teams is why so much spend underperforms.',
    featured: true,
    blocks: [
      {
        type: 'p',
        text: 'Performance marketing is often described as a technical discipline: audiences, bids, budgets, attribution. All of that matters. But the largest variable in most paid campaigns is not the targeting. It is whether the creative gives anyone a reason to stop.',
      },
      {
        type: 'p',
        text: 'When creative and media sit in different rooms, media is asked to rescue assets that were never built for the platform. The result is rising cost per result and a meeting about audiences.',
      },
      { type: 'h2', text: 'Creative testing is a media strategy' },
      {
        type: 'p',
        text: 'A testing matrix is not a creative nicety. It is how a media plan learns. Different hooks, different openings, different proof points — run deliberately, they tell you which argument the market responds to. Run carelessly, they tell you nothing and cost the same.',
      },
      {
        type: 'list',
        items: [
          'Test the argument before testing the edit: hook, claim, proof.',
          'Give each variant enough spend to produce a readable signal.',
          'Retire losers quickly, but do not rebuild winners every week.',
          'Keep a control so improvement is measured against something stable.',
        ],
      },
      { type: 'h2', text: 'Creators are a performance channel' },
      {
        type: 'p',
        text: 'Creator content is often treated as a brand cost and paid distribution as a performance cost. In commerce categories, the two work better as one system: creator content that already shows commercial signal is the cheapest thing to amplify.',
      },
      {
        type: 'p',
        text: 'This changes how partnerships are structured. Instead of paying for posts and hoping, the media budget follows the content that proves it can sell. Affiliates make the same logic explicit by tying cost to outcome.',
      },
      {
        type: 'quote',
        text: 'Media buying optimises what exists. Creative decides what is possible.',
      },
      { type: 'h2', text: 'Report revenue, not applause' },
      {
        type: 'p',
        text: 'A performance report should answer one question: did the business get more value than it spent? Impressions, clicks, and even ROAS can be true and still fail that test if they are reported without the period, the margin, or the baseline.',
      },
      {
        type: 'p',
        text: 'The most useful thing a performance team can do is bring a creative point of view to the media plan — and the most useful thing a creative team can do is accept that the market gets a vote.',
      },
    ],
  },
]

export const insightBySlug = (slug: string) => insights.find((insight) => insight.slug === slug)

export const readingTime = (insight: Insight) => {
  const words = insight.blocks.reduce((total, block) => {
    if (block.type === 'list') return total + block.items.join(' ').split(/\s+/).length
    return total + block.text.split(/\s+/).length
  }, 0)
  return `${Math.max(3, Math.round(words / 200))} min read`
}
