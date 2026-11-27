import { useEffect } from 'react'

const SITE_URL = 'https://gretter.site'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

interface PageMeta {
  title: string
  description: string
  path?: string
  type?: 'website' | 'article'
}

/** Sets the document title, description and social metadata for the current page. */
export function usePageMeta({ title, description, path = '/', type = 'website' }: PageMeta) {
  useEffect(() => {
    const fullTitle = title.includes('The Gretter Projects') ? title : `${title} — The Gretter Projects`
    document.title = fullTitle
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:url', `${SITE_URL}${path}`)
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = `${SITE_URL}${path}`
  }, [title, description, path, type])
}
