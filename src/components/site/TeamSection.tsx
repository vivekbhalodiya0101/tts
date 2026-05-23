import { useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  ArrowUpRight01Icon,
  SparklesIcon,
  TwitterIcon,
  Linkedin02Icon,
  InstagramIcon,
} from '@hugeicons/core-free-icons'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from 'motion/react'

import kimalImg from '../assets/images/kimal.jpeg'
import vivekImg from '../assets/images/vivek.jpeg'

const team = [
  {
    name: 'Kimal Patel',
    role: 'Founder & CEO',
    initials: 'KP',
    image: kimalImg,
    tagline: 'Vision · Strategy · Direction',
    bio: 'Builds the long arc — turning ambiguous problems into measurable products. 10+ years at the intersection of design and engineering.',
    skills: ['Strategy', 'Product', 'Leadership'],
    accent: 'from-[oklch(0.7_0.2_245)] to-[oklch(0.45_0.22_245)]',
    index: '01',
    socials: {
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    name: 'Vivek Bhalodiya',
    role: 'Co-Founder & Creative Director',
    initials: 'VB',
    image: vivekImg,
    tagline: 'Craft · Brand · Identity',
    bio: 'Translates strategy into expressive systems. Award-winning visual director with a relentless eye for detail and motion.',
    skills: ['Brand', 'Design Systems', 'Motion'],
    accent: 'from-[oklch(0.75_0.18_240)] to-[oklch(0.55_0.22_260)]',
    index: '02',
    socials: {
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    name: 'Tirth Ladani',
    role: 'Web Engineer & Developer',
    initials: 'TL',
    image: null,
    tagline: 'Architecture · Performance · Scale',
    bio: 'Engineers the invisible — performant, resilient platforms that disappear into the experience. Edge, real-time, and everything in between.',
    skills: ['TypeScript', 'Edge', 'Infra'],
    accent: 'from-[oklch(0.7_0.18_220)] to-[oklch(0.5_0.2_245)]',
    index: '03',
    socials: {
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
]

function TeamCard({ member, i }: { member: (typeof team)[number]; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rx = useSpring(useTransform(my, [0, 1], [6, -6]), {
    stiffness: 150,
    damping: 18,
  })
  const ry = useSpring(useTransform(mx, [0, 1], [-6, 6]), {
    stiffness: 150,
    damping: 18,
  })

  const glowX = useTransform(mx, (v) => `${v * 100}%`)
  const glowY = useTransform(my, (v) => `${v * 100}%`)
  const glowBg = useMotionTemplate`radial-gradient(420px circle at ${glowX} ${glowY}, oklch(0.546 0.245 245 / 0.14), transparent 60%)`

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false)
        mx.set(0.5)
        my.set(0.5)
      }}
      onMouseMove={handleMove}
      style={{ perspective: 1200 }}
    >
      <motion.div
        className="glass-card-light relative h-full overflow-hidden rounded-3xl"
        style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
      >
        {/* Cursor-following soft glow (reactive) */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: glowBg }}
        />

        {/* Top section: portrait area */}
        <div className="relative aspect-4/5 overflow-hidden">
          {/* Animated gradient backdrop or Image */}
          {member.image ? (
            <motion.img
              src={member.image}
              alt={member.name}
              className="absolute inset-0 h-full w-full object-cover object-center grayscale select-none"
              animate={
                hovered
                  ? { scale: 1.05, filter: 'grayscale(0%)' }
                  : { scale: 1, filter: 'grayscale(100%)' }
              }
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          ) : (
            <motion.div
              className={`absolute inset-0 bg-linear-to-br ${member.accent}`}
              animate={hovered ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
          )}

          {/* Mesh overlay */}
          <div
            className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 30% 20%, white 0%, transparent 40%), radial-gradient(circle at 70% 80%, white 0%, transparent 40%)',
            }}
          />

          {/* Base darkening overlay for image contrast if needed */}
          {member.image && (
            <div className="absolute inset-0 bg-black/20 pointer-events-none mix-blend-multiply" />
          )}

          {/* Index badge */}
          <div className="absolute left-5 top-5 flex items-center gap-2 z-10 pointer-events-none">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/90 drop-shadow-sm">
              {member.index}
            </span>
            <div className="h-px w-8 bg-white/60 drop-shadow-sm" />
          </div>

          {/* Hover-reveal sparkle */}
          <motion.div
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm z-10 pointer-events-none"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={
              hovered
                ? { opacity: 1, scale: 1, rotate: 0 }
                : { opacity: 0, scale: 0.6, rotate: -45 }
            }
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <HugeiconsIcon
              icon={SparklesIcon}
              className="h-4 w-4 text-white"
              strokeWidth={1.5}
            />
          </motion.div>

          {/* Big monogram */}
          {!member.image && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.span
                className="font-heading text-[8rem] font-bold leading-none text-white/95"
                style={{ textShadow: '0 8px 40px rgba(0,0,0,0.15)' }}
                animate={hovered ? { y: -8, scale: 1.02 } : { y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                {member.initials}
              </motion.span>
            </div>
          )}

          {/* Tagline ribbon (slides in on hover) */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 px-5 py-3 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-white"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.35), transparent)',
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={hovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {member.tagline}
          </motion.div>
        </div>

        {/* Bottom: content */}
        <div className="relative space-y-5 p-6 lg:p-7">
          <div>
            <h3 className="font-heading text-2xl font-bold leading-tight">
              <span className="text-luminance-light">{member.name}</span>
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              {member.role}
            </p>
          </div>

          {/* Animated divider */}
          <div className="relative h-px w-full bg-foreground/6">
            <motion.div
              className="absolute inset-y-0 left-0 bg-linear-to-r from-transparent via-accent to-transparent"
              initial={{ width: '0%' }}
              animate={hovered ? { width: '100%' } : { width: '20%' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground/85">
            {member.bio}
          </p>

          {/* Skill chips */}
          <div className="flex flex-wrap gap-1.5">
            {member.skills.map((skill, idx) => (
              <motion.span
                key={skill}
                className="rounded-full border border-foreground/8 bg-background px-3 py-1 text-[11px] font-medium text-foreground/70"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.3 + idx * 0.06 }}
                whileHover={{
                  y: -2,
                  borderColor: 'oklch(0.546 0.245 245 / 0.4)',
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Footer row: socials + arrow */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex gap-2">
              {[
                {
                  Icon: TwitterIcon,
                  label: 'Twitter',
                  url: member.socials.twitter,
                },
                {
                  Icon: Linkedin02Icon,
                  label: 'LinkedIn',
                  url: member.socials.linkedin,
                },
                {
                  Icon: InstagramIcon,
                  label: 'Instagram',
                  url: member.socials.instagram,
                },
              ].map(({ Icon, label, url }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/8 text-foreground/50 transition-colors hover:border-accent/40 hover:text-accent"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HugeiconsIcon
                    icon={Icon}
                    className="h-3.5 w-3.5"
                    strokeWidth={1.8}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function TeamSection() {
  return (
    <section
      id="team"
      data-header-theme="light"
      className="section-light relative overflow-hidden py-24 lg:py-36"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <motion.div
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-foreground/8 bg-background/60 px-3.5 py-1.5 backdrop-blur-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Our Team · 2025
              </span>
            </motion.div>

            <motion.h2
              className="font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-luminance-light">The minds behind</span>
              <br />
              <span className="text-luminance-accent italic">the magic.</span>
            </motion.h2>
          </div>

          <motion.div
            className="max-w-sm text-sm leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A small, senior crew. No layers, no handoffs — just the people
            building the work, talking to you directly.
          </motion.div>
        </div>

        {/* Cards grid - tall vertical cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} i={i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          className="mt-16 flex flex-col items-center justify-center gap-3 text-center sm:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-sm text-muted-foreground">
            Want to join the crew?
          </span>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
          >
            <span className="relative">
              We're hiring
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-100 bg-foreground transition-transform duration-500 group-hover:scale-x-0" />
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
            </span>
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
