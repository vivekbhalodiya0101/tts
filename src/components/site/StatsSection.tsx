import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { motion } from 'motion/react'
import { useRef, useEffect } from 'react'
import WordRevealText from './WordRevealText'
import { Button } from '@/components/ui/button'

const stats = [
  { value: '100', label: 'Lighthouse Score', tag: 'Performance' },
  { value: '<1s', label: 'Avg. Page Load', tag: 'Speed' },
  { value: '0', label: 'Legacy Dependencies', tag: 'Modern Stack' },
  { value: '24/7', label: 'Startup Dedication', tag: 'Commitment' },
]

function DottedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const mouseRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      // Use parent container dimensions
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth * 2
        canvas.height = parent.offsetHeight * 2
      } else {
        canvas.width = canvas.offsetWidth * 2
        canvas.height = canvas.offsetHeight * 2
      }
    }
    resize()
    window.addEventListener('resize', resize)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: (e.clientX - rect.left) * 2,
        y: (e.clientY - rect.top) * 2,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    let time = 0
    const animate = () => {
      time += 0.005
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gap = 28
      const baseDotSize = 4.5
      const hoverRadius = 250

      for (let x = 0; x < canvas.width; x += gap) {
        for (let y = 0; y < canvas.height; y += gap) {
          // Calculate distance from mouse
          const dx = x - mouseRef.current.x
          const dy = y - mouseRef.current.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          let hoverIntensity = 0
          if (dist < hoverRadius) {
            hoverIntensity = 1 - dist / hoverRadius
          }

          const wave =
            Math.sin(x * 0.008 + time) * Math.cos(y * 0.008 + time * 0.7)

          // Enhanced opacity and size on hover
          const baseOpacity = 0.15 + wave * 0.06
          const opacity = baseOpacity + hoverIntensity * 0.6
          const size = baseDotSize + wave * 0.4 + hoverIntensity * 4.5

          ctx.beginPath()
          ctx.arc(x, y, Math.max(0.5, size), 0, Math.PI * 2)

          // Luminate in warm accent color near cursor
          if (hoverIntensity > 0.1) {
            const r = Math.round(235 + 20 * hoverIntensity)
            const g = Math.round(165 + 40 * hoverIntensity)
            const b = Math.round(20 + 30 * hoverIntensity)
            ctx.fillStyle = `rgba(${r},${g},${b},${Math.max(0, opacity)})`
          } else {
            ctx.fillStyle = `rgba(245, 158, 11,${Math.max(0, baseOpacity)})`
          }

          ctx.fill()
        }
      }

      animRef.current = requestAnimationFrame(animate)
    }
    animRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-70 transition-opacity duration-500 cursor-default"
    />
  )
}

export default function StatsSection() {
  return (
    <section
      data-header-theme="light"
      className="section-light relative overflow-hidden py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-sm text-accent"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              By The Numbers
            </motion.div>

            <WordRevealText
              text="We combine in-depth research, creative strategy, and innovative technology to deliver the best solutions for your business. From digital marketing strategies to brand optimization, we work closely with you to achieve maximum impact."
              className="mt-8 text-base leading-relaxed text-muted-foreground lg:text-lg"
            />

            {/* Dotted Grid positioned in the empty space below the paragraph */}
            <div
              className="relative mt-12 hidden h-88 w-full lg:block"
              style={{
                maskImage:
                  'radial-gradient(ellipse at center, black 10%, transparent 100%)',
                WebkitMaskImage:
                  'radial-gradient(ellipse at center, black 10%, transparent 100%)',
              }}
            >
              <DottedGrid />
            </div>
          </div>

          <div>
            <motion.h2
              className="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-luminance-light">Not just any number,</span>
              <br />
              <span className="text-luminance-accent italic pr-2">
                you can also get it&nbsp; even more
              </span>
            </motion.h2>

            <div className="relative mt-12">
              <div className="relative grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="group rounded-2xl border border-border bg-card/80 p-6 backdrop-blur-sm transition-all duration-500 hover:border-accent/25 hover:shadow-glow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  >
                    <span className="inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition-all duration-300 group-hover:border-accent/30 group-hover:text-accent">
                      {stat.tag}
                    </span>
                    <div
                      className="mt-4 tracking-tight transition-colors duration-300 group-hover:text-accent"
                      style={{
                        fontFamily: 'var(--font-numeric)',
                        fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)',
                        fontWeight: 700,
                        letterSpacing: '-0.03em',
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={() =>
                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="group relative h-auto overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold"
              >
                <span className="absolute inset-0 -translate-x-full rounded-full bg-linear-to-r from-transparent via-amber-400/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative flex items-center gap-2">
                  Let's Talk
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-background text-primary transition-transform duration-300 group-hover:translate-x-0.5">
                    <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                  </span>
                </span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
