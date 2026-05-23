import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { motion } from 'motion/react'

const linkGroups = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Team', href: '#team' },
      { label: 'Testimonials', href: '#testimonials' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Dev', href: '#services' },
      { label: 'App Dev', href: '#services' },
      { label: 'Branding', href: '#services' },
      { label: 'UI/UX Design', href: '#services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Projects', href: '#projects' },
      { label: 'Process', href: '#strategy' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Contact', href: '#contact' },
      { label: 'Twitter', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
]

const socials = [
  { label: '𝕏', href: '#' },
  { label: 'in', href: '#' },
  { label: 'gh', href: '#' },
  { label: 'ig', href: '#' },
]

export default function Footer() {
  return (
    <footer
      data-header-theme="dark"
      className="relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 60% 40% at 50% 0%, rgba(30,45,140,0.2) 0%, transparent 60%),
          oklch(0.1 0.025 261)
        `,
        color: 'rgba(230,235,250,0.92)',
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(99,130,255,0.2), transparent)',
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top row — logo + tagline + email */}
        <div className="flex flex-col gap-8 border-b border-white/6 py-14 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <div className="relative flex h-16 w-48 items-center justify-start overflow-hidden">
              <img
                src="/logo-white.png"
                alt="TTS Cloud"
                className="h-[90%] max-w-none object-left origin-left"
              />
            </div>
            <p
              className="mt-4 text-sm leading-relaxed"
              style={{ color: 'rgba(180,190,215,0.55)' }}
            >
              A design & development agency building exceptional digital
              experiences. We transform ambitious ideas into pixel-perfect
              realities.
            </p>
          </div>

          {/* Email + socials */}
          <div className="flex flex-col items-start gap-5 lg:items-end">
            <a
              href="mailto:hello@techtuitionsystem.com"
              className="group flex items-center gap-2 font-heading text-xl font-semibold text-white transition-colors duration-300 hover:text-accent"
            >
              hello@techtuitionsystem.com
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                size={16}
                className="opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/8 text-xs font-medium transition-all duration-300 hover:border-accent/30 hover:bg-accent/10 hover:text-accent"
                  style={{ color: 'rgba(200,210,235,0.5)' }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 border-b border-white/6 py-12 sm:grid-cols-4 lg:gap-16">
          {linkGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.06 }}
            >
              <h4
                className="text-[11px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: 'rgba(200,210,235,0.35)' }}
              >
                {group.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group relative inline-block text-sm transition-colors duration-300 hover:text-white text-gray-500"
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Copyright row */}
        <div className="flex flex-col items-center justify-between gap-3 py-8 sm:flex-row">
          <p className="text-xs" style={{ color: 'rgba(200,210,235,0.2)' }}>
            © {new Date().getFullYear()} Tech Tuition System LLP. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs transition-colors duration-300 hover:text-white/50"
                  style={{ color: 'rgba(200,210,235,0.2)' }}
                >
                  {link}
                </a>
              ),
            )}
          </div>
        </div>
      </div>

      {/* ── Big Running Outline Text ── */}
      <div
        className="group relative overflow-hidden pb-6"
        style={{ height: 'clamp(100px, 12vw, 180px)' }}
      >
        {/* Gradient mask top edge */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-8"
          style={{
            background:
              'linear-gradient(to bottom, oklch(0.1 0.025 261), transparent)',
          }}
        />
        <motion.div
          className="flex whitespace-nowrap"
          style={{ width: 'fit-content' }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {/* Duplicate text multiple times for seamless loop on wide screens */}
          {[0, 1, 2, 3].map((idx) => (
            <span key={idx} className="flex items-center shrink-0">
              <svg
                className="block"
                style={{ height: 'clamp(80px, 10vw, 150px)', width: 'auto' }}
                viewBox="0 0 2800 150"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id={`footer-text-glow-${idx}`}
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="rgba(99,130,255,0.6)" />
                    <stop offset="50%" stopColor="rgba(96, 165, 250,0.8)" />
                    <stop offset="100%" stopColor="rgba(80,60,220,0.6)" />
                  </linearGradient>
                </defs>
                <text
                  x="50%"
                  y="55%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="transition-all duration-700"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '110px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    fill: 'none',
                    stroke: 'white',
                    strokeOpacity: 0.25,
                    strokeWidth: 1.5,
                  }}
                >
                  TECH TUITION SYSTEM LLP
                </text>
                {/* Hover glow layer */}
                <text
                  x="50%"
                  y="55%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '110px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    fill: 'none',
                    stroke: `url(#footer-text-glow-${idx})`,
                    strokeWidth: 1.5,
                    filter: 'drop-shadow(0 0 12px rgba(99,130,255,0.3))',
                  }}
                >
                  TECH TUITION SYSTEM LLP
                </text>
              </svg>
              {/* Spacer dot between repetitions */}
              <span
                className="mx-12 flex h-3 w-3 shrink-0 items-center justify-center rounded-full opacity-[0.06] group-hover:opacity-[0.15] transition-[opacity,transform] duration-700 group-hover:scale-150"
                style={{ background: 'rgba(99,130,255,1)' }}
              />
            </span>
          ))}
        </motion.div>
      </div>
    </footer>
  )
}
