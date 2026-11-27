export interface Service {
  key: string
  index: string
  name: string
  tagline: string
  home: string
  whatItIs: string
  challenges: string[]
  deliverables: string[]
  examples: string[]
  note?: string
}

export const services: Service[] = [
  {
    key: 'brand-strategy-activation',
    index: '01',
    name: 'Brand Strategy & Activation',
    tagline: 'A direction worth building on.',
    home: 'Communication direction, campaign ideas and brand experiences built around a clear business objective.',
    whatItIs:
      'We define how a brand should show up — the message, the audience and the campaign idea — then build the experience, digital or on-ground, that makes that idea tangible and measurable.',
    challenges: [
      'The brand has visibility but no clear communication direction.',
      'Campaigns are produced without a documented objective.',
      'An activation happens, but nothing connects it to an outcome.',
    ],
    deliverables: [
      'Brand and campaign positioning',
      'Audience and market mapping',
      'Campaign concept and creative direction',
      'Activation concept, production and on-ground execution',
      'Post-campaign reporting',
    ],
    examples: ['insa-yacht-festival'],
  },
  {
    key: 'ugc-content-creation',
    index: '02',
    name: 'UGC & Content Creation',
    tagline: 'Content that earns attention.',
    home: 'Creator-led storytelling and platform-native content, planned against an objective rather than produced at random.',
    whatItIs:
      'We build creator-led content that feels native to the platform it lives on. Every set of videos starts from a hook, a format and a campaign outcome we can measure.',
    challenges: [
      'Paid media is expensive because the creative does not hold attention.',
      'The brand sounds like a brand, not like the people it wants to reach.',
      'Content volume is high, but nothing is learned between posts.',
    ],
    deliverables: [
      'Creator briefs and content frameworks',
      'UGC production and editing',
      'Hook and format testing',
      'Campaign-level content planning',
      'Performance read-out per content set',
    ],
    examples: ['insidious', 'sariwangi', 'mcdonalds'],
  },
  {
    key: 'kol-influencer-marketing',
    index: '03',
    name: 'KOL & Influencer Marketing',
    tagline: 'The right creators, not the loudest ones.',
    home: 'Creator sourcing, negotiation and campaign management that matches a brand with an audience that already trusts it.',
    whatItIs:
      'We source, brief and manage creators against audience fit rather than follower count — then coordinate the collaboration from negotiation to published content.',
    challenges: [
      'Budget spent on creators who do not reach the right audience.',
      'Collaborations that produce posts but no commercial result.',
      'No internal capacity to brief, chase and quality-check creators.',
    ],
    deliverables: [
      'Creator sourcing and audience screening',
      'Rate negotiation and contracting',
      'Briefing, content approval and scheduling',
      'Campaign coordination across creators',
      'Consolidated campaign reporting',
    ],
    examples: ['koi-teppanyaki', 'gogi', 'advan', 'dermafirm', 'milai', 'koi-teppanyaki-home-service'],
  },
  {
    key: 'performance-marketing',
    index: '04',
    name: 'Performance Marketing',
    tagline: 'Media bought with intent.',
    home: 'Paid media planned, tested and optimised against a business metric — with creative treated as part of the media plan.',
    whatItIs:
      'We plan and run paid campaigns using audience insight, structured creative testing and performance measurement, so spend is directed by evidence rather than habit.',
    challenges: [
      'Ad spend rising while return stays flat.',
      'Reporting that stops at impressions and clicks.',
      'Creative and media decisions made from different assumptions.',
    ],
    deliverables: [
      'Channel and funnel planning',
      'Campaign setup and budget management',
      'Creative testing matrix',
      'Optimisation and audience iteration',
      'Performance reporting with recommended next steps',
    ],
    examples: ['insa-yacht-festival', 'atalon'],
  },
  {
    key: 'social-threads-management',
    index: '05',
    name: 'Social Media & Threads Management',
    tagline: 'A brand that can hold a conversation.',
    home: 'Consistent, platform-native communication — content planning, publishing and the conversations happening around your brand.',
    whatItIs:
      'We manage ongoing brand communication with a consistent voice, platform-native storytelling and community conversation — including Threads, where text-led conversation reaches audiences differently to a feed post.',
    challenges: [
      'An account that posts consistently but builds no audience.',
      'No consistent tone of voice across platforms.',
      'Comments and conversations that nobody owns.',
    ],
    deliverables: [
      'Content strategy and monthly planning',
      'Platform-native copywriting',
      'Publishing and community management',
      'Threads conversation planning',
      'Monthly performance review',
    ],
    examples: ['sirka', 'waroeng-sambal-bakar'],
  },
  {
    key: 'affiliate-marketing',
    index: '06',
    name: 'Affiliate Marketing',
    tagline: 'Partnerships that carry the sale.',
    home: 'Creator and affiliate partnerships structured for product visibility, audience engagement and sales-oriented execution.',
    whatItIs:
      'We build creator and affiliate partnerships with clear commercial terms, tracking and operating rhythm — so partnerships contribute to revenue instead of sitting in a spreadsheet.',
    challenges: [
      'An affiliate programme that exists without structure.',
      'Sales concentrated in a single channel.',
      'No visibility on which partners actually drive revenue.',
    ],
    deliverables: [
      'Affiliate programme structure',
      'Creator and partner recruitment',
      'Commission and campaign terms',
      'Tracking and reporting',
      'Partner performance optimisation',
    ],
    examples: ['atalon'],
  },
]

export const serviceBySlug = (key: string) => services.find((service) => service.key === key)
