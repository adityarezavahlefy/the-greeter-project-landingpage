import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { CtaLink, Eyebrow } from '../components/ui'
import { usePageMeta } from '../lib/meta'

export default function NotFound() {
  usePageMeta({
    title: 'Page not found',
    description: 'The page you are looking for does not exist. Explore the work, services and insights instead.',
    path: '/404',
  })

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="halftone pointer-events-none absolute inset-0 text-white opacity-[0.08]" />
      <div className="shell relative flex min-h-[78vh] flex-col justify-center py-28 md:py-32">
        <Eyebrow surface="dark">Error 404</Eyebrow>

        <div className="mt-6 flex flex-wrap items-end gap-x-8 gap-y-4">
          <p className="display text-[clamp(4.5rem,16vw,12rem)] text-sun">404</p>
          <p className="max-w-md pb-4 text-[clamp(1.2rem,2.6vw,1.9rem)] font-medium leading-[1.3] tracking-tight">
            This page took a different route.
          </p>
        </div>

        <p className="body-copy-dark mt-6 max-w-md">
          The link may be out of date, or the page may have moved. The work, the services and the thinking are all still
          where you would expect them.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <CtaLink to="/">Back to home</CtaLink>
          <CtaLink to="/work" variant="outline">
            See the work
          </CtaLink>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-6">
          {[
            { label: 'About', to: '/about' },
            { label: 'Services', to: '/services' },
            { label: 'Insights', to: '/insights' },
            { label: 'Contact', to: '/contact' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="label group inline-flex items-center gap-2 text-white/60 transition-colors hover:text-white"
            >
              {link.label}
              <ArrowUpRight
                aria-hidden="true"
                className="h-3 w-3 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          ))}
          <Link to="/" className="label ml-auto hidden items-center gap-2 text-white/60 transition-colors hover:text-white sm:inline-flex">
            <ArrowLeft aria-hidden="true" className="h-3 w-3" />
            Home
          </Link>
        </div>
      </div>
    </section>
  )
}
