import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'motion/react'
import { useRef, useState } from 'react'

const steps = [
  {
    num: '01',
    label: 'Discover',
    title: 'Research & Strategy',
    description:
      'We immerse ourselves in your world — auditing competitors, mapping audiences, and uncovering the insights that shape every decision.',
    deliverables: ['Brand audit', 'User research', 'Strategy doc'],
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    num: '02',
    label: 'Design',
    title: 'Craft & Prototype',
    description:
      'From low-fi wireframes to pixel-perfect prototypes, we sculpt interfaces that feel intuitive, premium, and unmistakably yours.',
    deliverables: ['UX wireframes', 'Visual identity', 'Interactive prototype'],
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12 19 7-7 3 3-7 7-3-3z" />
        <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="m2 2 7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    num: '03',
    label: 'Build',
    title: 'Engineer & Refine',
    description:
      'Clean architecture, modern frameworks, obsessive attention to detail. We write code that scales — and stays beautiful under load.',
    deliverables: ['Production code', 'QA & testing', 'Performance audit'],
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    num: '04',
    label: 'Launch',
    title: 'Ship & Evolve',
    description:
      'Launch is just the start. We monitor, iterate, and optimize — turning data into decisions and decisions into compounding growth.',
    deliverables: ['Deployment', 'Analytics setup', 'Continuous iteration'],
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
]

export default function StrategySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 70%', 'end 60%'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  // Track active dot index based on scroll progress
  const [activeIndex, setActiveIndex] = useState(-1)

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    // Map progress (0-1) to step index. Each dot activates when line reaches it.
    const total = steps.length
    let idx = -1
    for (let i = 0; i < total; i++) {
      const threshold = (i + 0.5) / total
      if (v >= threshold) idx = i
    }
    setActiveIndex(idx)
  })

  return (
    <section
      ref={sectionRef}
      data-header-theme="dark"
      className="relative overflow-hidden py-28 lg:py-40"
      style={{
        background: `
          radial-gradient(ellipse 70% 50% at 50% 0%, rgba(245,158,11,0.18) 0%, transparent 60%),
          radial-gradient(ellipse 50% 60% at 100% 50%, rgba(23,37,84,0.12) 0%, transparent 70%),
          linear-gradient(180deg, rgb(6,8,18) 0%, rgb(8,10,22) 100%)
        `,
        color: 'rgba(230,235,250,0.92)',
      }}
    >
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-20 max-w-3xl lg:mb-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] backdrop-blur-xl"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(200,210,235,0.75)',
            }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Our Process
          </span>

          <h2 className="mt-6 font-heading text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-luminance-dark">A method built for</span>
            <br />
            <span className="text-luminance-accent italic pr-2">momentum.</span>
          </h2>

          <p
            className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: 'rgba(180,190,215,0.7)' }}
          >
            Four deliberate phases. No fluff, no friction. Each one engineered
            to compound on the last — turning ambition into outcomes.
          </p>
        </motion.div>

        {/* Process Track */}
        <div ref={trackRef} className="relative">
          {/* Vertical progress line */}
          <div
            className="absolute left-5.5 top-0 h-full w-px lg:left-[calc(50%-0.5px)]"
            style={{
              background:
                'linear-gradient(180deg, transparent, rgba(255,255,255,0.06) 8%, rgba(255,255,255,0.06) 92%, transparent)',
            }}
          >
            <motion.div
              className="absolute left-0 top-0 w-full origin-top"
              style={{
                height: lineHeight,
                background:
                  'linear-gradient(180deg, rgba(245,158,11,0.9) 0%, rgba(217,119,6,0.6) 60%, rgba(180,83,9,0.2) 100%)',
                boxShadow:
                  '0 0 12px rgba(245,158,11,0.5), 0 0 24px rgba(245,158,11,0.25)',
              }}
            />
          </div>

          <div className="space-y-20 lg:space-y-28">
            {steps.map((step, i) => {
              const isActive = activeIndex >= i
              const isLeft = i % 2 === 0

              return (
                <motion.div
                  key={step.num}
                  className="relative pl-14 lg:pl-0"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Animated Dot */}
                  <div className="absolute left-2.5 top-2 lg:left-1/2 lg:-translate-x-1/2">
                    {/* Outer pulse ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        width: 44,
                        height: 44,
                        marginLeft: -10,
                        marginTop: -10,
                        background:
                          'radial-gradient(circle, rgba(245,158,11,0.4) 0%, transparent 70%)',
                      }}
                      animate={{
                        scale: isActive ? [1, 1.6, 1] : 0,
                        opacity: isActive ? [0.6, 0, 0.6] : 0,
                      }}
                      transition={{
                        duration: 2,
                        repeat: isActive ? Infinity : 0,
                        ease: 'easeOut',
                      }}
                    />
                    {/* Dot core */}
                    <motion.div
                      className="relative flex h-6 w-6 items-center justify-center rounded-full border"
                      animate={{
                        background: isActive
                          ? 'rgba(245,158,11,1)'
                          : 'rgba(20,25,45,1)',
                        borderColor: isActive
                          ? 'rgba(250,204,21,0.8)'
                          : 'rgba(255,255,255,0.15)',
                        boxShadow: isActive
                          ? '0 0 16px rgba(245,158,11,0.7), 0 0 32px rgba(245,158,11,0.35), inset 0 0 6px rgba(255,255,255,0.4)'
                          : '0 0 0px rgba(0,0,0,0)',
                        scale: isActive ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <motion.div
                        className="h-1.5 w-1.5 rounded-full bg-white"
                        animate={{
                          opacity: isActive ? 1 : 0,
                          scale: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`lg:w-[46%] ${isLeft ? 'lg:ml-auto lg:pl-14' : 'lg:mr-auto lg:pr-14 lg:text-right'}`}
                  >
                    {/* Step label */}
                    <div
                      className={`mb-4 flex items-center gap-3 ${isLeft ? '' : 'lg:flex-row-reverse'}`}
                    >
                      <motion.span
                        className="font-heading text-[10px] font-semibold uppercase tracking-[0.3em]"
                        animate={{
                          color: isActive
                            ? 'rgba(250,204,21,0.95)'
                            : 'rgba(150,160,180,0.4)',
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        Phase {step.num}
                      </motion.span>
                      <div
                        className="h-px flex-1 max-w-[40px]"
                        style={{
                          background:
                            'linear-gradient(90deg, rgba(255,255,255,0.15), transparent)',
                        }}
                      />
                    </div>

                    {/* Icon + Title row */}
                    <div
                      className={`flex items-start gap-4 ${isLeft ? '' : 'lg:flex-row-reverse'}`}
                    >
                      <motion.div
                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl backdrop-blur-sm"
                        style={{
                          background:
                            'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))',
                          border: '1px solid rgba(255,255,255,0.1)',
                        }}
                        animate={{
                          color: isActive
                            ? 'rgb(250,204,21)'
                            : 'rgba(180,190,215,0.6)',
                          borderColor: isActive
                            ? 'rgba(245,158,11,0.4)'
                            : 'rgba(255,255,255,0.1)',
                          boxShadow: isActive
                            ? '0 0 24px rgba(245,158,11,0.25), inset 0 0 12px rgba(245,158,11,0.08)'
                            : '0 0 0 rgba(0,0,0,0)',
                        }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {step.icon}
                      </motion.div>

                      <div className="min-w-0 flex-1">
                        <span
                          className="font-heading text-[10px] font-semibold uppercase tracking-[0.25em]"
                          style={{ color: 'rgba(250,204,21,0.7)' }}
                        >
                          {step.label}
                        </span>
                        <h3 className="mt-1 font-heading text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                          <span className="text-luminance-dark">
                            {step.title}
                          </span>
                        </h3>
                      </div>
                    </div>

                    <p
                      className="mt-4 text-sm leading-relaxed sm:text-[0.95rem]"
                      style={{ color: 'rgba(180,190,215,0.65)' }}
                    >
                      {step.description}
                    </p>

                    {/* Deliverables */}
                    <ul
                      className={`mt-5 flex flex-wrap gap-2 ${isLeft ? '' : 'lg:justify-end'}`}
                    >
                      {step.deliverables.map((d) => (
                        <motion.li
                          key={d}
                          className="rounded-full px-3 py-1 text-[11px] font-medium tracking-wide backdrop-blur-sm"
                          style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            color: 'rgba(190,200,220,0.7)',
                          }}
                          whileHover={{
                            background: 'rgba(245,158,11,0.1)',
                            borderColor: 'rgba(245,158,11,0.3)',
                            color: 'rgba(220,225,245,0.95)',
                            scale: 1.04,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        >
                          {d}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Closing flourish */}
        <motion.div
          className="mt-24 flex flex-col items-center text-center lg:mt-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="h-px w-24 mb-8"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(245,158,11,0.6), transparent)',
            }}
          />
          <p
            className="max-w-md font-heading text-lg italic leading-snug sm:text-xl"
            style={{ color: 'rgba(200,210,235,0.75)' }}
          >
            “The process isn't a checklist. It's how we earn the result.”
          </p>
        </motion.div>
      </div>
    </section>
  )
}
