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
            <div className="relative flex h-18 w-48 items-center justify-start overflow-hidden">
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

            <h3 className="mt-6 text-lg font-semibold text-white">Give us a Call</h3>
            <p className=" mt-2 text-md font-thin" style={{ color: 'rgba(180,190,215,0.55)' }}>
              <a href="tel:+919099003103" className="hover:text-white/80 transition-colors duration-300">
                (+91) 90990 03103
              </a>
              ,
              <a href="tel:+919099003203" className="hover:text-white/80 transition-colors duration-300">
                (+91) 90990 03203
              </a>
            </p>

            <h3 className="mt-6 text-lg font-semibold text-white">Working Hours</h3>
            <p className="mt-2 text-md font-thin" style={{ color: 'rgba(180,190,215,0.55)' }}>
              Mon - Fri: 9:00 AM - 6:00 PM
            </p>

            <h3 className="mt-6 text-lg font-semibold text-white">Follow Us</h3>
            {/* Socials */}
            <div className="mt-2 flex gap-2">
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

          {/* Email + map */}
          <div className="flex w-full flex-col items-start gap-6 lg:w-auto lg:items-end lg:pl-10">
            <a
              href="mailto:hello@techtuitionsystem.com"
              className="group flex flex-wrap items-center gap-2 font-heading text-lg font-semibold text-white transition-colors duration-300 hover:text-accent sm:text-xl lg:text-2xl"
            >
              <span className="break-all">hr@techtuitionsystem.com</span>
              <span className="break-all">support@techtuitionsystem.com</span>
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                size={18}
                className="shrink-0 opacity-40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
              />
            </a>

            {/* Aesthetic Mini Map */}
            <div
              className="group/map relative h-40 w-full max-w-xs overflow-hidden transition-all duration-500 sm:max-w-sm lg:h-60 lg:w-105 lg:max-w-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 8%, black 100%, transparent), linear-gradient(to bottom, transparent, black 15%, black 100%, transparent), linear-gradient(to left, transparent, black 8%, black 100%, transparent), linear-gradient(to top, transparent, black 15%, black 100%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 100%, transparent), linear-gradient(to bottom, transparent, black 15%, black 100%, transparent), linear-gradient(to left, transparent, black 8%, black 100%, transparent), linear-gradient(to top, transparent, black 15%, black 100%, transparent)',
                maskComposite: 'intersect',
                WebkitMaskComposite: 'source-in',
              }}
            >
              <iframe
                title="Tech Tuition System Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.123!2d70.2672543!3d21.7556165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3957f3c01797f721%3A0x492c4331111f3759!2sTech%20Tuition%20System%20LLP!5e0!3m2!1sen!2sin!4v1706500000000!5m2!1sen!2sin"
                className="absolute inset-0 h-full w-full border-0 opacity-60 grayscale invert transition-all duration-700 group-hover/map:scale-103 group-hover/map:opacity-100 group-hover/map:grayscale-0 group-hover/map:invert-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
