import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { EASE } from '../lib/motion'
import { Header } from './Header'
import { Footer } from './Footer'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}

export function Layout() {
  const { pathname } = useLocation()
  const reduce = useReducedMotion()

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollManager />
      <Header />
      <motion.main
        key={pathname}
        id="main"
        className="flex-1"
        initial={reduce ? undefined : { opacity: 0, y: 12 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  )
}
