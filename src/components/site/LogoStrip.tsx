import { motion } from 'motion/react'

const logos = [
  'RazorPay',
  'Vercel',
  'Figma',
  'Cloudflare',
  'Next.js',
  'Motion',
  'Tanstack',
  'Supabase',
  'Clerk',
  'Resend',
  'Prisma',
  'React',
  'TypeScript',
  'Tailwind',
  'PostgreSQL',
  'Neon',
]

export default function LogoStrip() {
  const logoItems = (
    <>
      {logos.map((logo) => (
        <div key={logo} className="mx-8 flex shrink-0 items-center">
          <span className="font-heading text-xl font-bold text-foreground/15 transition-colors duration-400 hover:text-gray-600 lg:text-2xl">
            {logo}
          </span>
        </div>
      ))}
    </>
  )

  return (
    <section
      data-header-theme="light"
      className="section-light overflow-hidden py-12 pt-18"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-8 text-center text-sm text-muted-foreground">
          Trusted Tech-Stack used for your projects
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-background to-transparent" />
        <motion.div
          className="flex w-max will-change-transform cursor-default"
          animate={{ x: ['0%', '-40%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {logoItems}
        </motion.div>
      </div>
    </section>
  )
}
