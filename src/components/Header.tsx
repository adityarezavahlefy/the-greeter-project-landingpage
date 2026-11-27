import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { site } from '../data/site'
import { cn } from '../lib/cn'
import { Logo } from './Logo'

const EASE = [0.22, 1, 0.36, 1] as const

const menuVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.3, ease: EASE, staggerChildren: 0.03, delayChildren: 0.04 },
  },
  exit: { opacity: 0, transition: { duration: 0.2, ease: 'easeOut' } },
}

const menuItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
}

export function Header() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const isActive = (to: string) => (to === '/' ? pathname === '/' : pathname.startsWith(to))

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-sun focus:px-4 focus:py-3 focus:font-medium focus:uppercase focus:tracking-label focus:text-ink"
      >
        Skip to content
      </a>

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-editorial',
          scrolled
            ? 'border-b border-ink/10 bg-cream/95 text-ink backdrop-blur-md'
            : 'border-b border-transparent text-white',
        )}
      >
        <div className="shell flex h-[70px] items-center justify-between md:h-[86px]">
          <Link
            to="/"
            aria-label="The Gretter Projects — go to homepage"
            className="shrink-0 transition-opacity duration-300 hover:opacity-70"
          >
            <Logo surface={scrolled ? 'light' : 'dark'} />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex xl:gap-9">
            {site.nav.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                aria-current={isActive(link.to) ? 'page' : undefined}
                className={cn(
                  'label group relative py-2 transition-colors duration-300',
                  scrolled
                    ? isActive(link.to)
                      ? 'text-ink'
                      : 'text-ink/55 hover:text-ink'
                    : isActive(link.to)
                      ? 'text-white'
                      : 'text-white/60 hover:text-white',
                )}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute -bottom-0.5 left-0 h-[2px] w-full origin-left bg-sun transition-transform duration-300 ease-editorial',
                    isActive(link.to) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                  )}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className={cn(
                'btn group/cta hidden lg:inline-flex',
                scrolled ? 'btn-ink' : 'btn-solid',
              )}
            >
              Let&rsquo;s talk
              <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Open navigation menu"
              className={cn(
                'flex h-10 w-10 items-center justify-center border transition-colors duration-300 lg:hidden',
                scrolled ? 'border-ink/20 text-ink hover:bg-ink hover:text-white' : 'border-white/30 text-white hover:bg-white hover:text-ink',
              )}
            >
              <Menu aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-ink text-white lg:hidden"
            variants={reduce ? undefined : menuVariants}
            initial={reduce ? undefined : 'hidden'}
            animate={reduce ? undefined : 'show'}
            exit={reduce ? undefined : 'exit'}
          >
            <div className="shell flex h-[70px] shrink-0 items-center justify-between border-b border-white/10">
              <Link to="/" aria-label="The Gretter Projects — go to homepage" onClick={() => setOpen(false)}>
                <Logo surface="dark" />
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="flex h-10 w-10 items-center justify-center border border-white/30 text-white transition-colors hover:bg-white hover:text-ink"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>

            <nav aria-label="Mobile" className="shell flex flex-1 flex-col justify-between py-8">
              <ul className="border-t border-white/10">
                {site.nav.map((link, index) => (
                  <motion.li key={link.to} variants={reduce ? undefined : menuItemVariants} className="border-b border-white/10">
                    <Link
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline justify-between gap-4 py-5"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="label text-white/60">{String(index + 1).padStart(2, '0')}</span>
                        <span className="text-[1.7rem] font-semibold leading-none tracking-tightest transition-colors group-hover:text-sun">
                          {link.label}
                        </span>
                      </span>
                      <ArrowUpRight aria-hidden="true" className="h-5 w-5 text-white/60 transition-all duration-300 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sun" />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div variants={reduce ? undefined : menuItemVariants} className="mt-10 space-y-6">
                <div>
                  <p className="label text-white/60">Start a conversation</p>
                  <a href={`mailto:${site.email}`} className="mt-2 block text-lg font-medium underline decoration-white/20 underline-offset-4 transition-colors hover:text-sun">
                    {site.email}
                  </a>
                  <a href={site.whatsappHref} target="_blank" rel="noreferrer noopener" className="mt-1 block text-sm text-white/60 transition-colors hover:text-sun">
                    WhatsApp {site.whatsapp}
                  </a>
                </div>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="btn btn-solid w-full"
                >
                  Let&rsquo;s talk
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
