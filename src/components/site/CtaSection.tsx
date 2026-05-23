import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'

export default function CTASection() {
  return (
    <section
      id="contact"
      data-header-theme="dark"
      className="relative overflow-hidden py-32 lg:py-44"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 50% 20%, rgba(38,52,180,0.5) 0%, rgba(24,34,140,0.28) 40%, transparent 65%),
          radial-gradient(ellipse 60% 50% at 15% 30%, rgba(80,60,220,0.35) 0%, rgba(60,40,180,0.15) 45%, transparent 70%),
          radial-gradient(ellipse 55% 45% at 85% 25%, rgba(110,60,220,0.25) 0%, rgba(80,40,190,0.1) 45%, transparent 70%),
          radial-gradient(ellipse 70% 50% at 50% 70%, rgba(15, 23, 42,0.45) 0%, rgba(10,15,60,0.25) 50%, transparent 75%),
          linear-gradient(180deg, oklch(0.1 0.025 261) 0%, rgb(6,8,18) 100%)
        `,
        color: 'rgba(230,235,250,0.92)',
      }}
    >
      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage:
            'radial-gradient(ellipse 50% 70% at 50% 50%, black, transparent)',
          WebkitMaskImage:
            'radial-gradient(ellipse 50% 70% at 50% 50%, black, transparent)',
        }}
      />

      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '180px 180px',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="pointer-events-none absolute left-[15%] top-[20%] h-48 w-48 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(99,130,255,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute right-[10%] bottom-[25%] h-64 w-64 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(80,60,220,0.12) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{ y: [0, 15, 0], x: [0, -12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute left-[50%] top-[60%] h-32 w-32 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(59, 130, 246,0.1) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Decorative ring circles */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-125 w-125 rounded-full border border-white/3" />
      <div className="pointer-events-none absolute -top-20 -right-20 h-100 w-100 rounded-full border border-white/4" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-87.5 w-87.5 rounded-full border border-white/3" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
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
            Ready to Start?
          </span>

          <h2 className="mt-8 font-heading text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl xl:text-[5.5rem]">
            <span className="text-luminance-dark">Let's Build Something</span>
            <br />
            <span className="text-luminance-accent italic pr-2">
              Extraordinary
            </span>
          </h2>

          <p
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: 'rgba(180,190,215,0.7)' }}
          >
            Whether you have a clear vision or just a spark of an idea, let's
            transform it into a digital masterpiece.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Primary CTA - Mailto link */}
            <Button
              onClick={() =>
                (window.location.href = 'mailto:hello@techtuitionsystem.com')
              }
              className="group relative h-auto overflow-hidden rounded-full px-6 py-2.5 text-base font-semibold transition-all duration-500"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.96), rgba(230,235,250,1))',
                color: 'rgb(10,12,30)',
                boxShadow:
                  '0 0 40px rgba(99,130,255,0.15), 0 8px 30px rgba(0,0,0,0.3)',
                border: 'none',
              }}
            >
              <span className="absolute inset-0 -translate-x-full rounded-full bg-linear-to-r from-transparent via-blue-400/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative flex items-center gap-3">
                Let's Build
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-primary-foreground transition-transform duration-300 group-hover:translate-x-0.5">
                  <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                </span>
              </span>
            </Button>

            {/* Secondary CTA */}
            {/* <Button
              variant="outline"
              className="group h-auto rounded-full px-8 py-4 text-base font-medium transition-all duration-500"
              style={{
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.03)',
                color: 'rgba(230,235,250,0.9)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span className="flex items-center gap-3">
                <HugeiconsIcon icon={CallRinging01Icon} size={14} className="opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                Book a Free Call
              </span>
            </Button> */}
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade into footer */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            'linear-gradient(to bottom, transparent, oklch(0.1 0.025 261))',
        }}
      />
    </section>
  )
}
