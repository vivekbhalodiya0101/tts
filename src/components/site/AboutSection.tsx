import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { motion } from 'motion/react'
import WordRevealText from './WordRevealText'
import { Button } from '@/components/ui/button'
import { Separator } from '../ui/separator'

export default function AboutSection() {
  return (
    <section
      id="about"
      data-header-theme="light"
      className="section-light relative overflow-hidden py-24 lg:py-32"
    >
      {/* Subtle accent line at top */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, oklch(0.546 0.245 245 / 15%), transparent)',
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect
                x="1"
                y="1"
                width="14"
                height="14"
                rx="3"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M5 8h6M8 5v6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Who We Are
          </span>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <motion.h2
              className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="text-luminance-light">Navigating Success:</span>{' '}
              <span className="text-luminance-accent italic pr-2">
                Your&nbsp; Growth Partner
              </span>
            </motion.h2>
          </div>

          <div className="flex flex-col justify-end gap-8">
            <WordRevealText
              text="We empower businesses by delivering innovative, data-driven strategies tailored to their unique goals. From crafting a strong brand identity to implementing high-impact digital marketing solutions, our team is dedicated to helping you establish a compelling presence in the digital space."
              className="text-base leading-relaxed text-muted-foreground lg:text-lg"
            />
            <WordRevealText
              text="With a combination of in-depth market research, cutting-edge design, and targeted content creation, we ensure that your brand not only stands out but also drives meaningful engagement and conversions."
              className="text-base leading-relaxed text-muted-foreground lg:text-lg"
            />
          </div>
        </div>

        {/* Stats with hover micro-interactions */}
        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {[
            { value: '15+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Retention' },
            { value: '1M+', label: 'End-Users Reached' },
            { value: '10+', label: 'Team Members' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="group relative rounded-2xl border border-transparent p-5 transition-all duration-500"
            >
              <div
                className="tracking-tight transition-colors duration-300 group-hover:text-accent"
                style={{
                  fontFamily: 'var(--font-numeric)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                }}
              >
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/70">
                {stat.label}
              </div>
              {/* Hover accent underline */}
              <div className="mt-3 h-px w-0 rounded-full bg-accent/40 transition-all duration-500 group-hover:w-12" />
            </motion.div>
          ))}
        </div>

        <Separator
          orientation="horizontal"
          className="w-full border border-gray-200"
        />

        {/* Bottom row */}
        <motion.div
          className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground/60">
            Hey! feel free to connect with us
          </p>
          <Button
            onClick={() =>
              document
                .querySelector('#contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group relative h-auto overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold"
          >
            <span className="absolute inset-0 -translate-x-full rounded-full bg-linear-to-r from-transparent via-blue-400/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative flex items-center gap-2">
              Get in Touch
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-background text-primary transition-transform duration-300 group-hover:translate-x-0.5">
                <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
              </span>
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
