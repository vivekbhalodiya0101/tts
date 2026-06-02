import { HugeiconsIcon } from '@hugeicons/react'
import type { IconSvgElement } from '@hugeicons/react'
import {
  ArrowRight01Icon,
  Cancel01Icon,
  ChartLineData01Icon,
  CodeIcon,
  HexagonIcon,
  LayoutGridIcon,
  SmartPhone01Icon,
  SparklesIcon,
} from '@hugeicons/core-free-icons'
import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

type Service = {
  num: string
  title: string
  description: string
  Icon: IconSvgElement
  details: {
    overview: string
    methods: string[]
    deliverables: string[]
  }
}

const services: Service[] = [
  {
    num: '01',
    title: 'Web Design & Development',
    description:
      'Crafting responsive, high-performance websites that convert visitors into customers with pixel-perfect precision.',
    Icon: CodeIcon,
    details: {
      overview:
        'We build modern, scalable websites using cutting-edge technologies that ensure fast load times, SEO optimization, and exceptional user experiences.',
      methods: [
        'React/Next.js Development',
        'Headless CMS Integration',
        'Performance Optimization',
        'Responsive Design Systems',
      ],
      deliverables: [
        'Full website build',
        'Design system documentation',
        'CMS training',
        'Performance audit report',
      ],
    },
  },
  {
    num: '02',
    title: 'Mobile App Development',
    description:
      'Building native and cross-platform applications that deliver seamless experiences across every device.',
    Icon: SmartPhone01Icon,
    details: {
      overview:
        'From concept to App Store, we create intuitive mobile experiences that users love and businesses rely on.',
      methods: [
        'React Native / Flutter',
        'Native iOS & Android',
        'API Architecture',
        'Push Notifications & Analytics',
      ],
      deliverables: [
        'Cross-platform app',
        'API documentation',
        'App store optimization',
        'Analytics dashboard',
      ],
    },
  },
  {
    num: '03',
    title: 'Brand Identity & Strategy',
    description:
      'Developing comprehensive brand systems that communicate your vision and resonate with your audience.',
    Icon: SparklesIcon,
    details: {
      overview:
        'We craft brand identities that tell compelling stories and create lasting impressions across all touchpoints.',
      methods: [
        'Brand Discovery Workshops',
        'Visual Identity Design',
        'Brand Guidelines',
        'Market Positioning',
      ],
      deliverables: [
        'Logo & visual system',
        'Brand guidelines PDF',
        'Social media templates',
        'Brand strategy deck',
      ],
    },
  },
  {
    num: '04',
    title: 'UI/UX Design',
    description:
      'Creating intuitive interfaces backed by research, testing, and a deep understanding of user behavior.',
    Icon: LayoutGridIcon,
    details: {
      overview:
        'Research-driven design that balances aesthetics with usability, ensuring every interaction feels natural and purposeful.',
      methods: [
        'User Research & Testing',
        'Wireframing & Prototyping',
        'Design Systems',
        'Accessibility Audits',
      ],
      deliverables: [
        'Interactive prototype',
        'User flow diagrams',
        'Component library',
        'Usability report',
      ],
    },
  },
  {
    num: '05',
    title: 'Digital Marketing & SEO',
    description:
      'Driving measurable growth through data-driven campaigns, content strategy, and search optimization.',
    Icon: ChartLineData01Icon,
    details: {
      overview:
        'We combine analytics, creative content, and technical SEO to increase your visibility and drive meaningful conversions.',
      methods: [
        'SEO Audits & Strategy',
        'Content Marketing',
        'PPC Campaign Management',
        'Analytics & Reporting',
      ],
      deliverables: [
        'SEO audit report',
        'Content calendar',
        'Campaign performance dashboard',
        'Monthly growth reports',
      ],
    },
  },
]

const SMOOTH = [0.22, 1, 0.36, 1] as const

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [modalService, setModalService] = useState<Service | null>(null)

  return (
    <>
      <section
        id="services"
        data-header-theme="dark"
        className="relative z-10 overflow-visible pb-28 pt-78 lg:pb-36 lg:pt-86"
        style={{
          marginTop: '-100px',
          marginBottom: '20px',
          backgroundImage:
            'radial-gradient(circle at 50% 85%, #000000 55%, #3a56f1 75%, hsl(0, 0%, 100%) 95%)',
          maskImage: 'linear-gradient(to bottom, transparent, black 260px)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent, black 260px)',
        }}
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <span
              className="inline-flex items-center gap-2.5 rounded-full px-5 py-2 text-sm font-medium tracking-wide backdrop-blur-xl"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow:
                  'inset 0 1px 0 rgba(255,255,255,0.1), 0 0 20px rgba(37, 99, 235,0.08)',
              }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span style={{ color: 'rgba(220,225,240,0.9)' }}>
                Our Services
              </span>
            </span>

            <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              <span className="text-luminance-dark">What Can We Do</span>
              <br />
              <span className="text-luminance-accent italic pr-2">
                For Your Business?
              </span>
            </h2>
          </motion.div>

          {/* Service rows with top divider */}
          <div className="mx-auto max-w-4xl">
            <div
              className="h-px w-full"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
              }}
            />
            {services.map((service, i) => (
              <ServiceRow
                key={service.num}
                service={service}
                index={i}
                isHovered={hoveredIndex === i}
                onHover={() => setHoveredIndex(i)}
                onLeave={() => setHoveredIndex(null)}
                onOpen={() => setModalService(service)}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm text-white/40">Have other ideas?</span>
            <Button
              onClick={() =>
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="group relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-500 h-auto"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(230,235,250,1))',
                color: 'rgb(10,12,30)',
                boxShadow:
                  '0 0 30px rgba(255,255,255,0.1), 0 4px 20px rgba(0,0,0,0.3)',
                border: 'none',
              }}
            >
              <span className="absolute inset-0 -translate-x-full rounded-full bg-linear-to-r from-transparent via-[rgba(96,165,250,0.4)] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative flex items-center gap-3">
                Explore Our Services
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-[11px] text-primary-foreground transition-transform duration-300 group-hover:translate-x-0.5">
                  <HugeiconsIcon icon={ArrowRight01Icon} size={12} />
                </span>
              </span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {modalService && (
          <motion.div
            className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: SMOOTH }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(20,30,80,0.55), rgba(2,3,10,0.85))',
                backdropFilter: 'blur(18px) saturate(1.1)',
                WebkitBackdropFilter: 'blur(18px) saturate(1.1)',
              }}
              onClick={() => setModalService(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal card */}
            <motion.div
              className="relative w-full max-w-2xl overflow-hidden rounded-[28px]"
              style={{
                background:
                  'linear-gradient(140deg, rgba(28,32,55,0.92) 0%, rgba(12,14,28,0.96) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow:
                  '0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.02), inset 0 1px 0 rgba(255,255,255,0.06)',
              }}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.45, ease: SMOOTH }}
            >
              {/* Blue glow top */}
              <div
                className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[120%] -translate-x-1/2"
                style={{
                  background:
                    'radial-gradient(ellipse 50% 100% at 50% 100%, rgba(99,130,255,0.22), transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />
              {/* Hairline */}
              <div
                className="pointer-events-none absolute left-0 right-0 top-0 h-px"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)',
                }}
              />

              <div className="relative p-6 sm:p-8 lg:p-10">
                {/* Header row */}
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center sm:h-14 sm:w-14">
                      <HugeiconsIcon
                        icon={HexagonIcon}
                        size={56}
                        strokeWidth={1.3}
                        className="absolute inset-0 h-full w-full"
                        style={{
                          color: 'rgb(99,130,255)',
                          fill: 'rgba(60,90,230,0.16)',
                          filter: 'drop-shadow(0 0 12px rgba(99,130,255,0.4))',
                        }}
                      />
                      <HugeiconsIcon
                        icon={modalService.Icon}
                        size={20}
                        strokeWidth={1.7}
                        className="relative z-10"
                        style={{ color: 'rgb(220,230,255)' }}
                      />
                    </span>
                    <div className="min-w-0">
                      <span className="font-heading text-[11px] font-medium uppercase tracking-[0.22em] text-white/35">
                        Service ({modalService.num})
                      </span>
                      <h3 className="mt-1 font-heading text-xl font-bold leading-tight text-white sm:text-2xl lg:text-[1.75rem]">
                        {modalService.title}
                      </h3>
                    </div>
                  </div>
                  <Button
                    onClick={() => setModalService(null)}
                    aria-label="Close"
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 shrink-0 rounded-full border border-white/10 bg-white/3 text-white/60 transition-all hover:border-white/20 hover:bg-white/6 hover:text-white sm:h-10 sm:w-10 hover:rotate-90 duration-300"
                  >
                    <HugeiconsIcon icon={Cancel01Icon} size={14} />
                  </Button>
                </div>

                {/* Divider */}
                <div
                  className="mb-6 h-px w-full"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
                  }}
                />

                {/* Overview */}
                <p className="mb-7 text-[15px] leading-relaxed text-white/65 sm:text-base">
                  {modalService.details.overview}
                </p>

                {/* Methods */}
                <div className="mb-6">
                  <h4 className="mb-3 flex items-center gap-2 font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                    <span className="h-px w-6 bg-accent/60" />
                    Approach
                  </h4>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {modalService.details.methods.map((m, idx) => (
                      <motion.div
                        key={m}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.15 + idx * 0.05,
                          duration: 0.4,
                          ease: SMOOTH,
                        }}
                        className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/2.5 px-4 py-3 text-sm text-white/75 backdrop-blur-sm transition-colors duration-300 hover:border-white/10 hover:bg-white/4"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_rgba(99,130,255,0.6)]" />
                        <span className="truncate">{m}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="mb-3 flex items-center gap-2 font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                    <span className="h-px w-6 bg-accent/60" />
                    Deliverables
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {modalService.details.deliverables.map((d, idx) => (
                      <motion.span
                        key={d}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.25 + idx * 0.04,
                          duration: 0.4,
                          ease: SMOOTH,
                        }}
                        className="rounded-full border border-white/10 bg-white/2 px-4 py-1.5 text-xs font-medium text-white/65 transition-colors duration-300 hover:border-accent/30 hover:text-white/90"
                      >
                        {d}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Modal CTA */}
                <Button
                  onClick={() => {
                    setModalService(null)
                    document
                      .querySelector('#contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="group relative mt-8 inline-flex h-auto w-auto self-start items-center gap-3 overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-500"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.96), rgba(230,235,250,1))',
                    color: 'rgb(10,12,30)',
                    boxShadow:
                      '0 0 30px rgba(99,130,255,0.15), 0 4px 20px rgba(0,0,0,0.3)',
                    border: 'none',
                  }}
                >
                  <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-[rgba(96,165,250,0.4)] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative">Discuss This Service</span>
                  <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-[10px] text-background transition-transform duration-300 group-hover:translate-x-0.5">
                    <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                  </span>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function ServiceRow({
  service,
  index,
  isHovered,
  onHover,
  onLeave,
  onOpen,
}: {
  service: Service
  index: number
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
  onOpen: () => void
}) {
  const { Icon } = service

  return (
    <motion.div
      className="group relative cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onOpen}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: SMOOTH }}
    >
      {/* Hover glass highlight */}
      <motion.div
        className="pointer-events-none absolute -inset-x-4 inset-y-0 rounded-[24px] sm:-inset-x-6 lg:-inset-x-8"
        animate={{ opacity: isHovered ? 1 : 0, scaleX: isHovered ? 1 : 0.985 }}
        transition={{ duration: 0.55, ease: SMOOTH }}
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02)), radial-gradient(ellipse 68% 120% at 18% 50%, rgba(99,130,255,0.1), transparent 68%), radial-gradient(ellipse 68% 120% at 82% 50%, rgba(99,130,255,0.09), transparent 68%)',
          border: '1px solid rgba(255,255,255,0.07)',
          backdropFilter: 'blur(20px) saturate(1.16)',
          WebkitBackdropFilter: 'blur(20px) saturate(1.16)',
          boxShadow:
            '0 12px 30px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.05)',
          transformOrigin: '50% 50%',
          maskImage:
            'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.66) 8%, black 18%, black 82%, rgba(0,0,0,0.66) 92%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.66) 8%, black 18%, black 82%, rgba(0,0,0,0.66) 92%, transparent 100%)',
        }}
      />

      {/* Floating icon on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 sm:right-4 lg:right-6"
            initial={{ opacity: 0, scale: 0.6, x: 12 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.6, x: 12 }}
            transition={{ duration: 0.45, ease: SMOOTH }}
          >
            <span className="relative inline-flex h-12 w-12 items-center justify-center">
              <HugeiconsIcon
                icon={HexagonIcon}
                size={48}
                strokeWidth={1.4}
                className="absolute inset-0"
                style={{
                  color: 'rgb(99,130,255)',
                  fill: 'rgba(60,90,230,0.18)',
                  filter: 'drop-shadow(0 0 14px rgba(99,130,255,0.45))',
                }}
              />
              <HugeiconsIcon
                icon={Icon}
                size={18}
                strokeWidth={1.8}
                className="relative z-10"
                style={{ color: 'rgb(220,230,255)' }}
              />
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative flex items-center py-8 px-4 lg:py-10 lg:px-6">
        {/* Number */}
        <span
          className="mr-6 shrink-0 lg:mr-8"
          style={{
            fontFamily: 'var(--font-numeric)',
            fontSize: '11px',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.28)',
            letterSpacing: '0.08em',
          }}
        >
          ({service.num})
        </span>

        {/* Title */}
        <div className="flex flex-1 justify-center">
          <motion.h3
            className="font-heading text-2xl font-semibold text-white sm:text-3xl lg:text-[2.25rem] lg:leading-tight"
            animate={{
              scale: isHovered ? 1.04 : 1,
              letterSpacing: isHovered ? '-0.005em' : '0em',
            }}
            transition={{ duration: 0.55, ease: SMOOTH }}
            style={{ willChange: 'transform' }}
          >
            {service.title}
          </motion.h3>
        </div>
      </div>

      {/* Bottom divider */}
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
        }}
      />
    </motion.div>
  )
}
