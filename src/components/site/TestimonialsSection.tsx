import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect, useRef } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  QuoteUpIcon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
  StarIcon,
} from '@hugeicons/core-free-icons'

const testimonials = [
  {
    quote:
      'Working with TTS transformed our brand. Their strategic approach and obsessive attention to detail elevated our online presence — leading to a 300% increase in engagement within the first quarter.',
    name: 'Sarah Mitchell',
    role: 'Group Marketing Manager',
    company: 'Finova Labs',
    initials: 'SM',
    metric: '+300%',
    metricLabel: 'Engagement lift',
    accent: 'from-[oklch(0.7_0.2_245)] to-[oklch(0.45_0.22_245)]',
  },
  {
    quote:
      "TTS didn't just build us an app — they built us a competitive advantage. The team's technical excellence and creative thinking are simply unmatched in the industry.",
    name: 'Marcus Rivera',
    role: 'Chief Technology Officer',
    company: 'Atlas Health',
    initials: 'MR',
    metric: '8 wks',
    metricLabel: 'From concept to ship',
    accent: 'from-[oklch(0.75_0.18_240)] to-[oklch(0.55_0.22_260)]',
  },
  {
    quote:
      'From concept to launch in 8 weeks. TTS delivered a platform that handles our peak traffic effortlessly. They truly understand what it means to build for scale.',
    name: 'Emma Chen',
    role: 'Head of Product',
    company: 'Meridian Commerce',
    initials: 'EC',
    metric: '12M+',
    metricLabel: 'Monthly users served',
    accent: 'from-[oklch(0.7_0.18_220)] to-[oklch(0.5_0.2_245)]',
  },
]

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [direction, setDirection] = useState(1)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(() => {
      setDirection(1)
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 7000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [paused])

  const goTo = (i: number) => {
    setDirection(i > active ? 1 : -1)
    setActive(i)
  }

  const next = () => {
    setDirection(1)
    setActive((p) => (p + 1) % testimonials.length)
  }
  const prev = () => {
    setDirection(-1)
    setActive((p) => (p - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[active]

  return (
    <section
      id="testimonials"
      data-header-theme="light"
      className="section-light relative overflow-hidden py-24 lg:py-36"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 flex flex-col items-start justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <motion.div
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-foreground/8 bg-background/60 px-3.5 py-1.5 backdrop-blur-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <HugeiconsIcon
                icon={StarIcon}
                className="h-3 w-3 fill-accent text-accent"
              />
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Testimonials · 5.0 average
              </span>
            </motion.div>

            <motion.h2
              className="font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-luminance-light">What our</span>{' '}
              <span className="text-luminance-accent italic">clients say.</span>
            </motion.h2>
          </div>

          <motion.div
            className="max-w-sm text-sm leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Real outcomes from teams who trusted us with their most ambitious
            launches.
          </motion.div>
        </div>

        {/* Main testimonial card */}
        <div className="relative grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:gap-8">
          {/* Quote panel */}
          <div
            className="glass-card-light relative min-h-[480px] overflow-hidden rounded-3xl p-8 lg:p-12"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Subtle grain */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.025] mix-blend-multiply"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
              }}
            />
            {/* Soft accent glow */}
            <div
              className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full opacity-50 blur-3xl"
              style={{
                background:
                  'radial-gradient(circle, oklch(0.546 0.245 245 / 0.12), transparent 70%)',
              }}
            />

            <div className="relative flex h-full flex-col">
              {/* Top: quote icon + counter */}
              <div className="mb-8 flex items-start justify-between">
                <motion.div
                  key={`icon-${active}`}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/15 to-accent/5"
                  initial={{ scale: 0.7, opacity: 0, rotate: -10 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <HugeiconsIcon
                    icon={QuoteUpIcon}
                    className="h-5 w-5 text-accent"
                    strokeWidth={1.8}
                  />
                </motion.div>

                <div className="font-numeric text-sm tabular-nums text-muted-foreground">
                  <span className="text-foreground">
                    {String(active + 1).padStart(2, '0')}
                  </span>
                  <span className="mx-1.5 text-foreground/20">/</span>
                  <span>{String(testimonials.length).padStart(2, '0')}</span>
                </div>
              </div>

              {/* Quote text */}
              <div className="relative flex-1">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.blockquote
                    key={active}
                    custom={direction}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="font-heading text-2xl font-medium leading-[1.35] tracking-tight sm:text-3xl lg:text-[2rem]"
                  >
                    <span className="text-luminance-light">
                      "{current.quote}"
                    </span>
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              {/* Bottom: author + controls */}
              <div className="mt-10 flex items-end justify-between gap-6 border-t border-foreground/[0.06] pt-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`author-${active}`}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${current.accent} font-heading text-sm font-bold text-white shadow-lg`}
                    >
                      {current.initials}
                    </div>
                    <div>
                      <div className="font-heading text-base font-semibold text-foreground">
                        {current.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {current.role} · {current.company}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex items-center gap-2">
                  <motion.button
                    onClick={prev}
                    aria-label="Previous"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/[0.1] text-foreground/60 transition-colors hover:border-accent/40 hover:text-accent"
                    whileHover={{ x: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HugeiconsIcon
                      icon={ArrowLeft01Icon}
                      className="h-4 w-4"
                      strokeWidth={1.8}
                    />
                  </motion.button>
                  <motion.button
                    onClick={next}
                    aria-label="Next"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/[0.1] text-foreground/60 transition-colors hover:border-accent/40 hover:text-accent"
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      className="h-4 w-4"
                      strokeWidth={1.8}
                    />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Side panel: metric + selector */}
          <div className="flex flex-col gap-6">
            {/* Metric card */}
            <div
              className="glass-card-light relative overflow-hidden rounded-3xl p-8"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                  background:
                    'radial-gradient(circle at 50% 0%, oklch(0.546 0.245 245 / 0.08), transparent 60%)',
                }}
              />
              <div className="relative">
                <div className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Outcome
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`metric-${active}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="font-numeric text-6xl font-bold leading-none tracking-tight">
                      <span className="text-luminance-accent">
                        {current.metric}
                      </span>
                    </div>
                    <div className="mt-3 text-sm text-muted-foreground">
                      {current.metricLabel}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Selector list */}
            <div
              className="glass-card-light rounded-3xl p-3"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => goTo(i)}
                  className="group relative flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition-colors hover:bg-foreground/[0.025]"
                >
                  {/* Active indicator bar */}
                  <div className="relative h-10 w-1 overflow-hidden rounded-full bg-foreground/[0.06]">
                    {active === i && (
                      <motion.div
                        layoutId="activeTestimonial"
                        className="absolute inset-0 rounded-full bg-accent"
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className={`truncate font-heading text-sm font-semibold transition-colors ${
                        active === i
                          ? 'text-foreground'
                          : 'text-foreground/50 group-hover:text-foreground/80'
                      }`}
                    >
                      {t.name}
                    </div>
                    <div className="truncate text-xs text-muted-foreground">
                      {t.company}
                    </div>
                  </div>
                  <span
                    className={`text-[10px] font-medium uppercase tracking-[0.15em] transition-colors ${
                      active === i ? 'text-accent' : 'text-foreground/30'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </button>
              ))}

              {/* Auto-progress bar */}
              <div className="mt-2 px-4 pb-2">
                <div className="relative h-px w-full overflow-hidden rounded-full bg-foreground/[0.08]">
                  {!paused && (
                    <motion.div
                      key={`progress-${active}`}
                      className="absolute inset-y-0 left-0 bg-accent"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 7, ease: 'linear' }}
                    />
                  )}
                </div>
                <div className="mt-2 flex items-center justify-between text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  <span>{paused ? 'Paused' : 'Auto-playing'}</span>
                  <span>Hover to pause</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
