export type CategoryKey = 'ugc' | 'kol' | 'threads' | 'performance' | 'activation'

export const categories: { key: CategoryKey; label: string; short: string }[] = [
  { key: 'ugc', label: 'UGC Campaigns', short: 'UGC' },
  { key: 'kol', label: 'KOL & Creator Management', short: 'KOL' },
  { key: 'threads', label: 'Threads Management', short: 'Threads' },
  { key: 'performance', label: 'Performance Marketing', short: 'Performance' },
  { key: 'activation', label: 'Brand Activation', short: 'Activation' },
]

export interface Metric {
  value: string
  label: string
  note?: string
}

export interface GalleryItem {
  caption: string
  /** Add a path to a real asset (e.g. /assets/work/ugc/insidious-01.jpg) to replace the placeholder. */
  image?: string
  aspect?: string
  play?: boolean
}

export interface Project {
  slug: string
  client: string
  primary: CategoryKey
  categories: CategoryKey[]
  discipline: string
  sector?: string
  summary: string
  objective?: string
  scope: string[]
  strategy?: string[]
  execution?: { title: string; body: string }[]
  gallery: GalleryItem[]
  kpi?: string
  results: Metric[]
  resultNote?: string
  takeaways?: string[]
  verification?: string[]
  related: string[]
  featured?: boolean
  metricLabel?: string
}

const yearNote =
  'Campaign year is not published: the supplied campaign reporting artwork carries inconsistent year labels and has not been verified.'

export const projects: Project[] = [
  {
    slug: 'insidious',
    client: 'Insidious',
    primary: 'ugc',
    categories: ['ugc'],
    discipline: 'UGC Campaign',
    summary:
      'A creator-led UGC campaign built around a single objective: virality. Thirty videos were produced against a 10 million view KPI.',
    objective:
      'Reach virality at scale through creator-produced content, with a campaign KPI of 10,000,000 views across 30 videos.',
    scope: ['UGC campaign', '30 creator videos', 'Virality objective'],
    strategy: [
      'One brief, thirty videos, one KPI. The campaign was structured around volume and creative variance rather than a single hero asset, giving the platform more than one version of the story to distribute.',
      'Success was defined in views rather than impressions or follower count, which kept production decisions focused on watchability.',
    ],
    execution: [
      {
        title: 'Creator production',
        body: 'Thirty videos were produced and delivered under the UGC campaign scope. Each video carried the same campaign objective, with the format left open enough for creators to speak in their own register.',
      },
      {
        title: 'Distribution',
        body: 'Content was released as creator-led social video, with performance tracked at campaign level against the 10 million view KPI.',
      },
    ],
    gallery: [
      { caption: 'Creator video still — campaign set 01', aspect: '4 / 5', play: true },
      { caption: 'Creator video still — campaign set 02', aspect: '1 / 1', play: true },
      { caption: 'Campaign reporting artwork — views against KPI', aspect: '4 / 3' },
    ],
    kpi: '10,000,000 views',
    results: [
      { value: '15,927,234', label: 'Views achieved', note: 'Campaign KPI: 10,000,000' },
      { value: '30', label: 'Videos produced' },
      { value: '+59%', label: 'Above KPI', note: 'Calculated from reported views' },
    ],
    resultNote:
      'Views are reported as delivered by the campaign reporting artwork. No campaign date is published until the year label is verified.',
    takeaways: [
      'A virality KPI rewards a portfolio of creative bets, not one polished film.',
      'Thirty videos gave the campaign enough variance to find formats that travel.',
      'When the KPI is a reach number, reporting should still separate views from reach.',
    ],
    verification: [yearNote, 'Creator roster and per-video breakdown available on request.'],
    related: ['sariwangi', 'mcdonalds', 'koi-teppanyaki'],
    featured: true,
    metricLabel: '15.9M views',
  },
  {
    slug: 'sariwangi',
    client: 'Sariwangi',
    primary: 'ugc',
    categories: ['ugc'],
    discipline: 'UGC Campaign',
    summary:
      'A UGC campaign for Sariwangi with 30 creator videos delivered against a 10 million view virality KPI.',
    objective:
      'Deliver a virality-led UGC campaign across 30 videos, with a KPI of 10,000,000 views.',
    scope: ['UGC campaign', '30 creator videos', 'Virality objective'],
    strategy: [
      'The campaign treated creator volume as the distribution plan: many creators, many entry points, one shared objective.',
      'Content was briefed to be platform-native, so the campaign did not depend on paid amplification to reach its view target.',
    ],
    execution: [
      {
        title: 'Creator production',
        body: 'Thirty videos were produced under the UGC campaign scope, each built to the same virality objective.',
      },
      {
        title: 'Reporting',
        body: 'Views were tracked at campaign level against the 10 million KPI, with total delivery recorded on the campaign report.',
      },
    ],
    gallery: [
      { caption: 'Creator video still — campaign set 01', aspect: '4 / 5', play: true },
      { caption: 'Creator video still — campaign set 02', aspect: '4 / 5', play: true },
      { caption: 'Campaign reporting artwork — views against KPI', aspect: '4 / 3' },
    ],
    kpi: '10,000,000 views',
    results: [
      { value: '15,184,319', label: 'Views achieved', note: 'Campaign KPI: 10,000,000' },
      { value: '30', label: 'Videos produced' },
      { value: '+52%', label: 'Above KPI', note: 'Calculated from reported views' },
    ],
    resultNote:
      'Views are reported as delivered by the campaign reporting artwork. No campaign date is published until the year label is verified.',
    takeaways: [
      'Volume works when the brief gives creators room to be themselves.',
      'A single KPI keeps a thirty-video campaign coherent.',
      'Campaign reporting should be consistent across markets and years — the artwork standard matters.',
    ],
    verification: [yearNote, 'Creator roster and per-video breakdown available on request.'],
    related: ['insidious', 'mcdonalds', 'sirka'],
  },
  {
    slug: 'mcdonalds',
    client: "McDonald's",
    primary: 'ugc',
    categories: ['ugc'],
    discipline: 'UGC Campaign',
    summary:
      "A 30-video UGC campaign for McDonald's with a 1 million view KPI, delivered far beyond the original target.",
    objective: 'Run a virality-led UGC campaign of 30 videos against a 1,000,000 view KPI.',
    scope: ['UGC campaign', '30 creator videos', 'Virality objective'],
    strategy: [
      'With a lower view target and the same thirty-video scope, the campaign had room to test more formats per creator rather than optimise each individual video.',
      'The objective stayed fixed on views, keeping the creative brief simple and the reporting honest.',
    ],
    execution: [
      {
        title: 'Creator production',
        body: 'Thirty videos were produced under the UGC campaign scope against a 1 million view KPI.',
      },
      {
        title: 'Reporting',
        body: 'Delivered views were reported at campaign level and compared with the original KPI.',
      },
    ],
    gallery: [
      { caption: 'Creator video still — campaign set 01', aspect: '1 / 1', play: true },
      { caption: 'Creator video still — campaign set 02', aspect: '4 / 5', play: true },
      { caption: 'Campaign reporting artwork — views against KPI', aspect: '4 / 3' },
    ],
    kpi: '1,000,000 views',
    results: [
      { value: '23,184,319', label: 'Views achieved', note: 'Campaign KPI: 1,000,000' },
      { value: '30', label: 'Videos produced' },
      { value: '23×', label: 'Against KPI', note: 'Calculated from reported views' },
    ],
    resultNote:
      'Views are reported as delivered by the campaign reporting artwork. No campaign date is published until the year label is verified.',
    takeaways: [
      'A modest KPI can hide how much headroom a format actually has.',
      'Thirty videos is enough sample size to learn which hooks travel.',
      'Set the KPI honestly, then report the overdelivery without inflating the target.',
    ],
    verification: [yearNote, 'Creator roster and per-video breakdown available on request.'],
    related: ['insidious', 'sariwangi', 'atalon'],
    metricLabel: '23.2M views',
  },
  {
    slug: 'koi-teppanyaki-home-service',
    client: 'KOI Teppanyaki Home Service',
    primary: 'kol',
    categories: ['kol'],
    discipline: 'KOL & Creator Management',
    summary:
      'Creator management for KOI Teppanyaki Home Service, connecting the service with creators whose audience is relevant to at-home dining occasions.',
    scope: ['KOL & creator management', 'Creator briefing', 'Campaign coordination'],
    gallery: [
      { caption: 'Creator content still — placement 01', aspect: '4 / 5' },
      { caption: 'Creator content still — placement 02', aspect: '4 / 5' },
      { caption: 'Behind the scenes — shoot day', aspect: '4 / 3' },
    ],
    results: [],
    resultNote:
      'No performance figures for this campaign are published on the website. Figures are available from the project team on request.',
    takeaways: [
      'A service brand needs creators who can show the experience, not just the product.',
      'Creator management is mostly logistics and judgement, not introductions.',
    ],
    verification: [
      'Campaign narrative, deliverables and metrics are pending from the project archive and are marked for verification before launch.',
    ],
    related: ['koi-teppanyaki', 'gogi', 'dermafirm'],
  },
  {
    slug: 'gogi',
    client: 'GOGI',
    primary: 'kol',
    categories: ['kol'],
    discipline: 'KOL & Creator Management',
    summary:
      'A creator-led campaign for GOGI, managed through sourcing, briefing and coordination of KOL partnerships.',
    scope: ['KOL & creator management', 'Creator briefing', 'Campaign coordination'],
    gallery: [
      { caption: 'Creator content still — placement 01', aspect: '4 / 5' },
      { caption: 'Creator content still — placement 02', aspect: '1 / 1' },
      { caption: 'Campaign documentation — creator set', aspect: '4 / 3' },
    ],
    results: [],
    resultNote:
      'No performance figures for this campaign are published on the website. Figures are available from the project team on request.',
    takeaways: [
      'Audience fit beats follower count in food and lifestyle categories.',
      'A clear brief is what keeps a creator campaign from drifting.',
    ],
    verification: [
      'Campaign narrative, deliverables and metrics are pending from the project archive and are marked for verification before launch.',
    ],
    related: ['koi-teppanyaki', 'advan', 'milai'],
  },
  {
    slug: 'koi-teppanyaki',
    client: 'KOI Teppanyaki',
    primary: 'kol',
    categories: ['kol'],
    discipline: 'KOL & Creator Management',
    summary:
      'Creator management for KOI Teppanyaki, with content performance across the brand\u2019s Instagram ecosystem reported at 4.1M+ views.',
    scope: ['KOL & creator management', 'Creator content', 'Instagram distribution'],
    gallery: [
      { caption: 'Creator content still — Instagram placement', aspect: '4 / 5' },
      { caption: 'Creator content still — second angle', aspect: '4 / 5' },
      { caption: 'Campaign documentation — creator set', aspect: '4 / 3' },
    ],
    results: [
      { value: '4.1M+', label: 'Instagram views', note: 'KOI Teppanyaki content performance reference' },
    ],
    resultNote:
      'This figure belongs to the referenced KOI Teppanyaki content performance. It is not attributed to KOI Teppanyaki Home Service or to any other KOI project.',
    takeaways: [
      'Repetition across a creator set compounds reach more reliably than one large partnership.',
      'Keep metric attribution at campaign level — a brand-wide number is not a campaign result.',
    ],
    verification: [
      'Per-campaign view split and publication dates are pending from the project archive and are marked for verification before launch.',
    ],
    related: ['koi-teppanyaki-home-service', 'gogi', 'dermafirm'],
    featured: true,
    metricLabel: '4.1M+ IG views',
  },
  {
    slug: 'advan',
    client: 'ADVAN',
    primary: 'kol',
    categories: ['kol'],
    discipline: 'KOL & Creator Management',
    summary:
      'KOL and creator management for ADVAN, coordinating creator partnerships around a product-led campaign.',
    scope: ['KOL & creator management', 'Creator briefing', 'Campaign coordination'],
    gallery: [
      { caption: 'Creator content still — placement 01', aspect: '1 / 1' },
      { caption: 'Creator content still — placement 02', aspect: '4 / 5' },
      { caption: 'Campaign documentation — creator set', aspect: '4 / 3' },
    ],
    results: [],
    resultNote:
      'No performance figures for this campaign are published on the website. Figures are available from the project team on request.',
    takeaways: [
      'Technology campaigns need creators who can explain a product without sounding like a specification sheet.',
      'Creator operations scale only when briefing and approval are documented.',
    ],
    verification: [
      'Campaign narrative, deliverables and metrics are pending from the project archive and are marked for verification before launch.',
    ],
    related: ['dermafirm', 'gogi', 'milai'],
  },
  {
    slug: 'dermafirm',
    client: 'DERMAFIRM',
    primary: 'kol',
    categories: ['kol'],
    discipline: 'KOL & Creator Management',
    summary:
      'Creator management for DERMAFIRM, pairing the brand with creators whose audience responds to skincare education.',
    scope: ['KOL & creator management', 'Creator briefing', 'Campaign coordination'],
    gallery: [
      { caption: 'Creator content still — placement 01', aspect: '4 / 5' },
      { caption: 'Creator content still — placement 02', aspect: '1 / 1' },
      { caption: 'Campaign documentation — creator set', aspect: '4 / 3' },
    ],
    results: [],
    resultNote:
      'No performance figures for this campaign are published on the website. Figures are available from the project team on request.',
    takeaways: [
      'In skincare, credibility is the creative.',
      'Education-led content needs creators willing to carry the detail, not just the aesthetic.',
    ],
    verification: [
      'Campaign narrative, deliverables and metrics are pending from the project archive and are marked for verification before launch.',
    ],
    related: ['advan', 'milai', 'koi-teppanyaki'],
  },
  {
    slug: 'milai',
    client: 'MILAI',
    primary: 'kol',
    categories: ['kol'],
    discipline: 'KOL & Creator Management',
    summary:
      'A creator partnership programme for MILAI, managed from creator sourcing through published content.',
    scope: ['KOL & creator management', 'Creator sourcing', 'Campaign coordination'],
    gallery: [
      { caption: 'Creator content still — placement 01', aspect: '4 / 5' },
      { caption: 'Creator content still — placement 02', aspect: '4 / 5' },
      { caption: 'Campaign documentation — creator set', aspect: '4 / 3' },
    ],
    results: [],
    resultNote:
      'No performance figures for this campaign are published on the website. Figures are available from the project team on request.',
    takeaways: [
      'A creator programme is a roster, not a one-off booking.',
      'Audience overlap between creators is worth checking before committing budget.',
    ],
    verification: [
      'Campaign narrative, deliverables and metrics are pending from the project archive and are marked for verification before launch.',
    ],
    related: ['gogi', 'dermafirm', 'advan'],
  },
  {
    slug: 'sirka',
    client: 'SIRKA',
    primary: 'threads',
    categories: ['threads'],
    discipline: 'Threads Management',
    summary:
      'Ongoing Threads management for SIRKA: conversation-led content planning, publishing and community response.',
    scope: ['Threads management', 'Content planning', 'Community conversation'],
    strategy: [
      'Threads rewards a different voice to a feed post: shorter, more conversational, and open to reply. The management approach was built around conversation starters rather than campaign announcements.',
      'Content planning kept the brand present at a sustainable cadence instead of pushing volume into a format that punishes it.',
    ],
    execution: [
      {
        title: 'Content planning',
        body: 'A recurring plan of text-led posts and reply-bait prompts, written in the brand\u2019s own voice rather than in advertising language.',
      },
      {
        title: 'Community management',
        body: 'Replies and conversations were managed as part of the channel, with the brand answering as a participant rather than broadcasting.',
      },
    ],
    gallery: [
      { caption: 'Threads content — planning board', aspect: '4 / 5' },
      { caption: 'Threads content — published post', aspect: '1 / 1' },
      { caption: 'Threads content — conversation documentation', aspect: '4 / 3' },
    ],
    results: [],
    resultNote:
      'Channel performance figures for this project have not been supplied for publication and are marked for verification.',
    takeaways: [
      'A conversation platform needs a conversational content plan.',
      'Community management is part of the content, not an afterthought to it.',
    ],
    verification: [
      'Campaign narrative, posting cadence and metrics are pending from the project archive and are marked for verification before launch.',
    ],
    related: ['waroeng-sambal-bakar', 'sariwangi', 'insidious'],
    featured: true,
    metricLabel: 'Threads',
  },
  {
    slug: 'waroeng-sambal-bakar',
    client: 'Waroeng Sambal Bakar',
    primary: 'threads',
    categories: ['threads'],
    discipline: 'Threads Management',
    summary:
      'Threads management for Waroeng Sambal Bakar, using platform-native conversation to keep a food brand present between campaigns.',
    scope: ['Threads management', 'Content planning', 'Community conversation'],
    gallery: [
      { caption: 'Threads content — planning board', aspect: '4 / 5' },
      { caption: 'Threads content — published post', aspect: '4 / 5' },
      { caption: 'Threads content — conversation documentation', aspect: '4 / 3' },
    ],
    results: [],
    resultNote:
      'Channel performance figures for this project have not been supplied for publication and are marked for verification.',
    takeaways: [
      'For F&B brands, humour travels further than promotion on conversational platforms.',
      'Consistency matters more than polish in text-led channels.',
    ],
    verification: [
      'Campaign narrative, posting cadence and metrics are pending from the project archive and are marked for verification before launch.',
    ],
    related: ['sirka', 'gogi', 'mcdonalds'],
  },
  {
    slug: 'atalon',
    client: 'Atalon',
    primary: 'performance',
    categories: ['performance'],
    discipline: 'Performance Marketing',
    sector: 'Commerce',
    summary:
      'Creator and affiliate marketing combined with performance advertising, supporting a doubling of monthly TikTok sales.',
    objective:
      'Increase monthly sales on TikTok through creator and affiliate partnerships supported by performance advertising.',
    scope: ['Creator & affiliate marketing', 'Performance advertising', 'TikTok sales channel'],
    strategy: [
      'The campaign connected three levers rather than running them separately: creators producing native product content, affiliates carrying the sale, and paid distribution behind the content that performed.',
      'Budget followed evidence. Content that showed commercial signal was amplified; content that did not was replaced rather than scaled.',
    ],
    execution: [
      {
        title: 'Creator and affiliate layer',
        body: 'Creators and affiliates produced and distributed product-led content, with partnerships structured around sales contribution.',
      },
      {
        title: 'Performance layer',
        body: 'Performance advertising was used to extend the reach of content already demonstrating commercial traction on TikTok.',
      },
    ],
    gallery: [
      { caption: 'Affiliate content still — product set 01', aspect: '4 / 5', play: true },
      { caption: 'Affiliate content still — product set 02', aspect: '4 / 5', play: true },
      { caption: 'Performance dashboard — channel overview', aspect: '4 / 3' },
    ],
    results: [
      { value: '2×', label: 'Monthly sales', note: 'Reported month-over-month growth' },
      { value: 'IDR 400M', label: 'Monthly TikTok sales', note: 'Approximately, after campaign' },
      { value: 'IDR 200M', label: 'Monthly TikTok sales', note: 'Approximately, before campaign' },
    ],
    resultNote:
      'Monthly TikTok sales are reported as moving from approximately IDR 200M to IDR 400M. ROAS is not published because supporting data has not been provided.',
    takeaways: [
      'Creators are a distribution channel, not only a content cost.',
      'Amplify what already sells instead of paying to rescue what does not.',
      'Report revenue movement, not only media metrics, when the objective is sales.',
    ],
    verification: [
      'Reporting period, channel split and creative volume are pending from the project archive and are marked for verification before launch.',
    ],
    related: ['insa-yacht-festival', 'mcdonalds', 'milai'],
    featured: true,
    metricLabel: '2× monthly sales',
  },
  {
    slug: 'insa-yacht-festival',
    client: 'INSA Yacht Festival',
    primary: 'performance',
    categories: ['performance', 'activation'],
    discipline: 'Performance Marketing',
    sector: 'Event',
    summary:
      'Performance marketing and event campaign distribution for INSA Yacht Festival, supporting ticket visibility and attendance.',
    objective:
      'Drive reach and attendance for INSA Yacht Festival through a distributed event campaign and performance-led media.',
    scope: ['Performance marketing', 'Event campaign distribution', 'Brand activation'],
    strategy: [
      'An event campaign has a hard deadline, so the media plan worked backwards from the event date: build awareness early, concentrate spend as the date approached, and keep creative rotation tight enough to avoid fatigue.',
      'Distribution ran across event and social channels, with reporting separated by funnel stage so impressions were never presented as attendance.',
    ],
    execution: [
      {
        title: 'Campaign distribution',
        body: 'Event campaign assets were distributed across digital channels with paid support focused on the final weeks before the event.',
      },
      {
        title: 'Activation',
        body: 'The festival itself was treated as the campaign\u2019s proof point — the experience the communication promised, delivered on the day.',
      },
    ],
    gallery: [
      { caption: 'Event photograph — festival grounds', aspect: '4 / 5' },
      { caption: 'Event photograph — audience', aspect: '4 / 5' },
      { caption: 'Campaign artwork — event communication', aspect: '4 / 3' },
    ],
    results: [
      { value: '950K+', label: 'Impressions', note: 'Not unique reach' },
      { value: '185%', label: 'Reach growth', note: 'Across the campaign period' },
      { value: '2.8%', label: 'Engagement rate' },
      { value: '4,000+', label: 'Attendees' },
    ],
    resultNote:
      'Impressions are reported as impressions, not unique reach. Attendance is reported separately from digital reach and the two should not be combined.',
    takeaways: [
      'Event campaigns should report impressions, reach and attendance as three different things.',
      'Distribution timing matters more than total budget for date-bound events.',
    ],
    verification: [
      'Campaign period, media budget and channel split are pending from the project archive and are marked for verification before launch.',
    ],
    related: ['atalon', 'koi-teppanyaki', 'sirka'],
    featured: true,
    metricLabel: '4,000+ attendees',
  },
]

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug)

export const featuredProjects = projects.filter((project) => project.featured)

export const categoryLabel = (key: CategoryKey) =>
  categories.find((category) => category.key === key)?.label ?? key

export const projectsByCategory = (key: CategoryKey | 'all') =>
  key === 'all' ? projects : projects.filter((project) => project.categories.includes(key))
