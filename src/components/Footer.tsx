import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { site } from '../data/site'
import { services } from '../data/services'
import { CtaLink, Eyebrow } from './ui'
import { Logo } from './Logo'
import { Reveal, VIEWPORT_TAIL } from '../lib/motion'

function Column({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="label text-white/60">{title}</p>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="shell pb-8 pt-14 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Reveal y={18}>
              <Link to="/" aria-label="The Gretter Projects — go to homepage" className="inline-block">
                <Logo surface="dark" />
              </Link>

              <h2 className="mt-10 max-w-lg display text-[clamp(1.9rem,4.2vw,3.4rem)]">
                Let&rsquo;s make your next <span className="text-sun">growth move</span> matter.
              </h2>
              <p className="body-copy-dark mt-6 max-w-sm">
                Tell us about your brand, your campaign, or the challenge you are trying to solve. We will come back
                with a point of view.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaLink to="/contact">Start a conversation</CtaLink>
                <CtaLink href={`mailto:${site.email}`} variant="outline">
                  Email us
                </CtaLink>
              </div>
            </Reveal>
          </div>

          <Reveal className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-6" delay={0.12} y={18}>
            <Column title="Navigate">
              {site.nav.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm font-light text-white/65 transition-colors hover:text-sun">
                    {link.label}
                  </Link>
                </li>
              ))}
            </Column>

            <Column title="Services">
              {services.map((service) => (
                <li key={service.key}>
                  <Link
                    to={`/services#${service.key}`}
                    className="text-sm font-light leading-snug text-white/65 transition-colors hover:text-sun"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </Column>

            <Column title="Contact">
              <li>
                <a href={`mailto:${site.email}`} className="text-sm font-light text-white/65 transition-colors hover:text-sun">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.whatsappHref} target="_blank" rel="noreferrer noopener" className="text-sm font-light text-white/65 transition-colors hover:text-sun">
                  {site.whatsapp}
                </a>
              </li>
              <li className="pt-2 text-sm font-light leading-relaxed text-white/60">
                {site.cities.join(', ')}
                <br />
                Indonesia
              </li>
            </Column>
          </Reveal>
        </div>

        <Reveal className="mt-14 border-t border-white/10 pt-6" y={12} viewport={VIEWPORT_TAIL}>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="label text-white/60">
              &copy; {year} {site.name}
            </p>
            <p className="label text-white/60">
              {site.cities.join(' · ')}
            </p>
            <div className="flex items-center gap-5">
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="label group inline-flex items-center gap-1.5 text-white/60 transition-colors hover:text-sun"
                >
                  {social.label}
                  <ArrowUpRight aria-hidden="true" className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-2 border-t border-white/5 pt-5 md:flex-row md:items-center md:justify-between">
            <Eyebrow surface="dark" className="text-white/60">
              Creative &amp; Strategic Growth Agency
            </Eyebrow>
            <p className="text-[11px] font-light leading-relaxed text-white/60">
              Campaign visuals and founder photography are placeholders until the final assets are supplied.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
