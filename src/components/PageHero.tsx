import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { AnimatedLines, EASE, Parallax } from '../lib/motion'
import { Eyebrow } from './ui'
import { cn } from '../lib/cn'

export function PageHero({
  eyebrow,
  title,
  lead,
  meta,
  children,
  className,
}: {
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  meta?: { label: string; value: string }[]
  children?: ReactNode
  className?: string
}) {
  const lines = Array.isArray(title) ? title : [title]
  const reduce = useReducedMotion()

  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        }

  return (
    <section className={cn('relative overflow-hidden bg-ink text-white', className)}>
      <Parallax distance={26} className="pointer-events-none absolute inset-x-0 -top-10 bottom-0">
        <div aria-hidden="true" className="halftone absolute inset-0 text-white opacity-[0.07]" />
      </Parallax>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_80%_0%,rgba(255,205,29,0.10),transparent_60%)]"
      />

      <div className="shell relative pb-14 pt-32 md:pb-20 md:pt-44">
        <motion.div {...fadeUp(0)}>
          <Eyebrow surface="dark">{eyebrow}</Eyebrow>
        </motion.div>

        <div className="mt-7 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <h1 className="display col-span-12 text-[clamp(2.3rem,6.2vw,5.4rem)] lg:col-span-9">
            <AnimatedLines lines={lines} delay={0.1} />
          </h1>
          {lead && (
            <motion.div className="col-span-12 max-w-md lg:col-span-3 lg:self-end" {...fadeUp(0.5)}>
              <p className="body-copy-dark">{lead}</p>
            </motion.div>
          )}
        </div>

        {meta && meta.length > 0 && (
          <motion.dl
            className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-white/15 pt-6 md:mt-16 md:grid-cols-4"
            {...fadeUp(0.6)}
          >
            {meta.map((item) => (
              <div key={item.label}>
                <dt className="label text-white/60">{item.label}</dt>
                <dd className="mt-2 text-sm font-light text-white/80">{item.value}</dd>
              </div>
            ))}
          </motion.dl>
        )}

        {children && (
          <motion.div className="mt-10 md:mt-12" {...fadeUp(0.55)}>
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}
