import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from 'framer-motion'

/**
 * One timing language for the whole site.
 * Transitions stay inside 300–800ms, with one shared easing curve.
 */
export const EASE = [0.22, 1, 0.36, 1] as const
export const DURATION = { micro: 0.3, base: 0.62, slow: 0.8 } as const
export const VIEWPORT = { once: true, margin: '-12% 0px -10% 0px' } as const

/* ------------------------------------------------------------------ */
/* Fade + lift                                                         */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  duration = DURATION.slow,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  duration?: number
}) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* Staggered groups                                                    */
/* ------------------------------------------------------------------ */

const groupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION.base, ease: EASE } },
}

/** Animates direct <StaggerItem> children in sequence when the group enters view. */
export function Stagger({
  children,
  className,
  as = 'div',
  step,
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'ol' | 'ul'
  /** Seconds between children. Shorten it for long lists so the tail never lags. */
  step?: number
}) {
  const reduce = useReducedMotion()
  const variants = useMemo<Variants>(
    () => (step ? { hidden: {}, show: { transition: { staggerChildren: step, delayChildren: 0.04 } } } : groupVariants),
    [step],
  )
  if (reduce) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }
  const List = as === 'ol' ? motion.ol : as === 'ul' ? motion.ul : motion.div
  return (
    <List
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-8% 0px' }}
    >
      {children}
    </List>
  )
}

export function StaggerItem({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'li'
}) {
  const reduce = useReducedMotion()
  if (reduce) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }
  const Item = as === 'li' ? motion.li : motion.div
  return (
    <Item className={className} variants={itemVariants}>
      {children}
    </Item>
  )
}

/* ------------------------------------------------------------------ */
/* Headline lines                                                      */
/* ------------------------------------------------------------------ */

/** Headline lines rise out of a vertical mask. Plays on mount. */
export function AnimatedLines({
  lines,
  className,
  delay = 0.06,
  step = 0.085,
}: {
  lines: ReactNode[]
  className?: string
  delay?: number
  step?: number
}) {
  const reduce = useReducedMotion()
  return (
    <span className={className}>
      {lines.map((line, index) =>
        reduce ? (
          <span key={index} className="block">
            {line}
          </span>
        ) : (
          <span key={index} className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
            <motion.span
              className="block will-change-transform"
              initial={{ y: '112%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.85, delay: delay + index * step, ease: EASE }}
            >
              {line}
            </motion.span>
          </span>
        ),
      )}
    </span>
  )
}

/** Headline reveal that waits for the viewport instead of the first paint. */
export function AnimatedLinesInView({
  lines,
  className,
  delay = 0,
}: {
  lines: ReactNode[]
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()
  return (
    <span className={className}>
      {lines.map((line, index) =>
        reduce ? (
          <span key={index} className="block">
            {line}
          </span>
        ) : (
          <span key={index} className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
            <motion.span
              className="block will-change-transform"
              initial={{ y: '112%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true, margin: '-12% 0px' }}
              transition={{ duration: 0.8, delay: delay + index * 0.075, ease: EASE }}
            >
              {line}
            </motion.span>
          </span>
        ),
      )}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* Rules & image masks                                                 */
/* ------------------------------------------------------------------ */

/** A hairline that draws itself horizontally, once. */
export function RuleReveal({
  className,
  delay = 0,
  from = 'left',
}: {
  className?: string
  delay?: number
  from?: 'left' | 'right' | 'center'
}) {
  const reduce = useReducedMotion()
  const origin = from === 'right' ? 'right' : from === 'center' ? 'center' : 'left'
  return (
    <motion.span
      aria-hidden="true"
      className={className}
      style={{ originX: origin === 'right' ? 1 : origin === 'center' ? 0.5 : 0, display: 'block' }}
      initial={reduce ? undefined : { scaleX: 0 }}
      whileInView={reduce ? undefined : { scaleX: 1 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    />
  )
}

/** Image or visual reveal using a clip mask with a slow settle. */
export function MaskReveal({
  children,
  className,
  delay = 0,
  y = 18,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ clipPath: 'inset(0% 0% 100% 0%)', opacity: 0.4, y }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: DURATION.slow, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* Count-up numerals                                                   */
/* ------------------------------------------------------------------ */

type Parsed = {
  numeric: number
  decimals: number
  grouped: boolean
  before: string
  after: string
}

function parseMetric(value: string): Parsed | null {
  const match = value.match(/\d[\d,]*(?:\.\d+)?/)
  if (!match || match.index === undefined) return null
  const raw = match[0]
  const numeric = Number(raw.replace(/,/g, ''))
  if (!Number.isFinite(numeric)) return null
  return {
    numeric,
    decimals: raw.includes('.') ? raw.split('.')[1].length : 0,
    grouped: raw.includes(','),
    before: value.slice(0, match.index),
    after: value.slice(match.index + raw.length),
  }
}

function formatNumber(value: number, decimals: number, grouped: boolean) {
  const fixed = value.toFixed(decimals)
  if (!grouped) return fixed
  const [whole, fraction] = fixed.split('.')
  const withSeparators = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return fraction ? `${withSeparators}.${fraction}` : withSeparators
}

/**
 * Animates a published figure once it enters the viewport.
 * The literal value on screen is identical to the source data at rest,
 * and screen readers always receive the final figure.
 */
export function CountUp({
  value,
  className,
  duration = 0.95,
}: {
  value: string
  className?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduce = useReducedMotion()
  const inView = useInView(ref, { once: true, margin: '-12% 0px' })
  const parsed = useMemo(() => parseMetric(value), [value])
  const initial = parsed ? `${parsed.before}${formatNumber(0, parsed.decimals, parsed.grouped)}${parsed.after}` : value
  const [text, setText] = useState(reduce ? value : initial)

  useEffect(() => {
    if (!parsed) {
      setText(value)
      return
    }
    if (!inView || reduce) {
      setText(value)
      return
    }
    let frame = 0
    const started = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - started) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setText(
        `${parsed.before}${formatNumber(parsed.numeric * eased, parsed.decimals, parsed.grouped)}${parsed.after}`,
      )
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, reduce, parsed, value, duration])

  return (
    <span ref={ref} className={className} aria-label={value}>
      <span aria-hidden="true" style={{ fontVariantNumeric: 'tabular-nums' }}>
        {text}
      </span>
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* Parallax (desktop only)                                             */
/* ------------------------------------------------------------------ */

/** Live scroll offsets, kept to desktop where they read as depth, never as noise. */
export function Parallax({
  children,
  className,
  distance = 36,
}: {
  children: ReactNode
  className?: string
  distance?: number
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const query = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)')
    const sync = () => setEnabled(query.matches)
    sync()
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [])

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const raw = useTransform(scrollYProgress, [0, 1], [distance, -distance])
  const y = useSpring(raw, { stiffness: 70, damping: 22, mass: 0.6 })

  if (!enabled || reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  )
}
