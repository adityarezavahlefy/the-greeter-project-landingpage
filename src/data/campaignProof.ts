/**
 * Campaign results shown in the home hero, using the marks supplied by the client.
 * Figures are transcribed from the supplied campaign reporting artwork and belong
 * to the campaign they are listed against. Do not merge them into an agency total.
 */
export type CampaignProofStat = {
  value: string
  label: string
}

export type CampaignProofItem = {
  slug: string
  client: string
  logo: string
  discipline: string
  stats: CampaignProofStat[]
  note?: string
  /** The supplied mark carries its own light background, so it sits on a white plate. */
  plate?: boolean
}

export const campaignProof: CampaignProofItem[] = [
  {
    slug: 'koi-teppanyaki',
    client: 'KOI Teppanyaki',
    logo: '/clients/campaign/koi-teppanyaki.png',
    discipline: 'KOL & Creator Management',
    stats: [{ value: '4.1M+', label: 'All-funnel views' }],
    plate: true,
  },
  {
    slug: 'insa-yacht-festival',
    client: 'INSA Yacht Festival',
    logo: '/clients/campaign/insa-yacht-festival.png',
    discipline: 'Performance',
    stats: [
      { value: '4,000+', label: 'Attendees' },
      { value: '950K+', label: 'Impressions' },
    ],
    note: '185% reach growth · 2.8% engagement rate',
  },
  {
    slug: 'insidious',
    client: 'Insidious',
    logo: '/clients/campaign/insidious.png',
    discipline: 'UGC Campaign',
    stats: [
      { value: '15.9M', label: 'Views achieved' },
      { value: '30', label: 'Videos' },
    ],
    note: 'Against a 10M view KPI',
  },
]
