/**
 * Client marks supplied by The Gretter Projects (logo files provided by the client).
 * Source files live in `public/clients/`. Confirm usage rights per mark and the exact
 * scope of each relationship before this list is treated as a public claim.
 */
export type Client = {
  name: string
  logo: string
  sector: string
  /** Square or near-square marks need more room to stay legible next to wordmarks. */
  square?: boolean
}

export const clients: Client[] = [
  { name: 'Kanzler', logo: '/clients/kanzler.png', sector: 'F&B' },
  { name: 'Advan', logo: '/clients/advan.png', sector: 'Technology' },
  { name: 'Indomilk', logo: '/clients/indomilk.png', sector: 'F&B' },
  { name: 'Watsons', logo: '/clients/watsons.png', sector: 'Retail' },
  { name: 'MS GLOW', logo: '/clients/msglow.png', sector: 'Beauty' },
  { name: 'Burger King', logo: '/clients/burger-king.png', sector: 'F&B', square: true },
  { name: 'Richeese Factory', logo: '/clients/richeese-factory.png', sector: 'F&B', square: true },
  { name: 'Sushi Yay', logo: '/clients/sushi-yay.png', sector: 'F&B', square: true },
]

export const clientSectors = ['F&B', 'Beauty', 'Retail', 'Technology', 'Lifestyle']
