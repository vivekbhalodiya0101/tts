import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { useRef, useEffect, useState, useCallback } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import fourEdgeStar from '@/components/assets/icons/four-edge-star.svg'
import { Button } from '@/components/ui/button'

gsap.registerPlugin(ScrollTrigger)

function StarField() {
  const [stars, setStars] = useState<
    { x: number; y: number; size: number; opacity: number }[]
  >([])

  useEffect(() => {
    const generated = []
    for (let i = 0; i < 120; i++) {
      generated.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.1,
      })
    }
    setStars(generated)
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0">
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            background: `rgba(255,255,255,${s.opacity})`,
            boxShadow:
              s.opacity > 0.4
                ? `0 0 ${s.size * 2}px rgba(255,255,255,${s.opacity * 0.5})`
                : undefined,
          }}
        />
      ))}
    </div>
  )
}

function AnimatedArcPath() {
  const pathRef = useRef<SVGPathElement>(null)
  const glowRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const path = pathRef.current
    const glow = glowRef.current
    if (!path || !glow) return

    const length = path.getTotalLength()
    gsap.set([path, glow], {
      strokeDasharray: length,
      strokeDashoffset: length,
    })

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 4.5,
      delay: 1.2,
      ease: 'power2.inOut',
    })
    gsap.to(glow, {
      strokeDashoffset: 0,
      duration: 5.5,
      delay: 1.5,
      ease: 'power2.inOut',
    })
  }, [])

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      fill="none"
    >
      <defs>
        <linearGradient id="arc-path-grad" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
        </linearGradient>
      </defs>
      <path
        ref={glowRef}
        d="M1440,350 Q1200,380 1000,500 Q800,620 720,900"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="6"
        fill="none"
      />
      <path
        ref={pathRef}
        d="M1440,350 Q1200,380 1000,500 Q800,620 720,900"
        stroke="url(#arc-path-grad)"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  )
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const circularRef = useRef<HTMLDivElement>(null)
  const centerStarRef = useRef<HTMLDivElement>(null)
  const magnetAreaRef = useRef<HTMLDivElement>(null)
  const targetMagnetRef = useRef({ x: 0, y: 0 })
  const currentMagnetRef = useRef({ x: 0, y: 0 })
  const rotationRef = useRef(0)
  const velocityRef = useRef(1)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    let raf: number
    let lastScroll = window.scrollY

    const onScroll = () => {
      const delta = Math.abs(window.scrollY - lastScroll)
      velocityRef.current = Math.min(1 + delta * 0.15, 12)
      lastScroll = window.scrollY
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const animate = () => {
      velocityRef.current += (1 - velocityRef.current) * 0.02
      rotationRef.current += velocityRef.current

      // Lerp for smooth magnetic effect
      currentMagnetRef.current.x +=
        (targetMagnetRef.current.x - currentMagnetRef.current.x) * 0.08
      currentMagnetRef.current.y +=
        (targetMagnetRef.current.y - currentMagnetRef.current.y) * 0.08

      if (circularRef.current) {
        circularRef.current.style.transform = `translate(${currentMagnetRef.current.x}px, ${currentMagnetRef.current.y}px) rotate(${rotationRef.current}deg)`
      }
      if (centerStarRef.current) {
        centerStarRef.current.style.transform = `translate(${currentMagnetRef.current.x}px, ${currentMagnetRef.current.y}px)`
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const handleMagnetMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const area = magnetAreaRef.current
      if (!area) return
      const rect = area.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const dx = e.clientX - centerX
      const dy = e.clientY - centerY
      const dist = Math.sqrt(dx * dx + dy * dy)
      const maxDist = rect.width / 2
      const strength = Math.max(0, 1 - dist / maxDist) * 35
      targetMagnetRef.current = {
        x: (dx / maxDist) * strength,
        y: (dy / maxDist) * strength,
      }
    },
    [],
  )

  const handleMagnetLeave = useCallback(() => {
    targetMagnetRef.current = { x: 0, y: 0 }
  }, [])

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      data-header-theme="dark"
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-16 pt-32 lg:px-8"
      style={{
        background: `
          radial-gradient(ellipse 60% 55% at 0% 0%, rgba(254,243,199,0.55) 0%, rgba(253,230,138,0.25) 40%, transparent 75%),
          radial-gradient(ellipse 70% 60% at 12% 10%, rgba(245,158,11,0.28) 0%, rgba(217,119,6,0.18) 45%, transparent 75%),
          radial-gradient(ellipse 80% 65% at 25% 22%, rgba(180,83,9,0.22) 0%, rgba(23,37,84,0.18) 40%, transparent 65%),
          radial-gradient(ellipse 90% 70% at 35% 30%, rgba(15,23,42,0.25) 0%, rgba(2,6,23,0.1) 40%, transparent 60%),
          radial-gradient(ellipse 140% 120% at 75% 75%, rgba(2,2,8,1) 0%, rgba(2,2,8,0.98) 55%, transparent 90%),
          linear-gradient(135deg, rgba(230,215,170,0.45) 0%, rgba(250,204,21,0.32) 10%, rgba(217,119,6,0.28) 18%, rgba(23,37,84,0.3) 28%, rgba(8,10,40,0.9) 42%, rgb(2,2,8) 100%)
        `,
      }}
    >
      <StarField />

      {/* Grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      <AnimatedArcPath />

      <motion.div
        style={{
          y,
          opacity,
          willChange: 'transform, opacity',
          WebkitBackfaceVisibility: 'hidden',
          WebkitTransform: 'translate3d(0,0,0)',
        }}
        className="relative z-20 mx-auto w-full max-w-7xl"
        layout="position"
      >
        {/* Glassy pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <span
            className="inline-flex items-center gap-2.5 rounded-full px-5 py-2 text-sm font-medium tracking-wide backdrop-blur-xl"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow:
                'inset 0 1px 0 rgba(255,255,255,0.1), 0 0 20px rgba(245,158,11,0.08)',
            }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span style={{ color: 'rgba(220,225,240,0.9)' }}>
              Design & Development Agency
            </span>
          </span>
        </motion.div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.h1
            className="font-heading text-5xl font-bold leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl xl:text-9xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background:
                'linear-gradient(120deg, rgba(255,255,255,0.98) 0%, rgba(200,205,220,0.7) 50%, rgba(150,155,175,0.45) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            We Build
            <br />
            <span
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.95) 20%, rgba(253,224,71,0.7) 50%, rgba(250,204,21,0.55) 80%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Digital
            </span>
            <br />
            Experiences
          </motion.h1>

          <motion.div
            className="flex flex-col gap-6 lg:items-end lg:text-right"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <p
              className="max-w-md text-base leading-relaxed"
              style={{ color: 'rgba(180,185,200,0.8)' }}
            >
              We craft bespoke websites and applications that elevate brands,
              drive engagement, and transform ideas into pixel-perfect
              realities.
            </p>

            {/* Hero CTA - premium button with border gradient & shine */}
            <Button
              onClick={() => scrollTo('#contact')}
              className="group relative h-auto w-fit overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-500 cursor-pointer"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(230,235,250,1))',
                color: 'rgb(10,12,30)',
                boxShadow:
                  '0 0 30px rgba(255,255,255,0.1), 0 4px 20px rgba(0,0,0,0.3)',
                border: 'none',
              }}
            >
              <span className="absolute inset-0 -translate-x-full rounded-full bg-linear-to-r from-transparent via-amber-400/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative flex items-center gap-3">
                Start a Project
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-primary-foreground transition-transform duration-300 group-hover:translate-x-0.5">
                  <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                </span>
              </span>
            </Button>
          </motion.div>
        </div>

        {/* Circular text badge with magnetic effect */}
        <motion.div
          className="absolute right-8 top-0 hidden lg:block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div
            ref={magnetAreaRef}
            className="relative flex h-70 w-70 items-center justify-center -m-11"
            onMouseMove={handleMagnetMove}
            onMouseLeave={handleMagnetLeave}
            style={{ cursor: 'default' }}
          >
            <div
              ref={circularRef}
              className="h-36 w-36"
              style={{ willChange: 'transform' }}
            >
              <svg viewBox="0 0 200 200" className="h-full w-full">
                <defs>
                  <path
                    id="circlePath"
                    d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"
                  />
                </defs>
                <text
                  style={{
                    fill: 'rgba(200,205,220,0.8)',
                    fontSize: '18px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.13em',
                  }}
                >
                  <textPath href="#circlePath">
                    Design • Develop • Deploy • Scale •{' '}
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                ref={centerStarRef}
                className="flex h-15 w-15 items-center justify-center"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.22))',
                  willChange: 'transform',
                }}
              >
                <img
                  src={fourEdgeStar}
                  alt="star"
                  aria-hidden="true"
                  className="h-45 w-45"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        className="relative z-20 mx-auto mt-16 w-full max-w-7xl border-t pt-6"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="flex items-center justify-between">
          <p
            className="text-xs uppercase tracking-widest"
            style={{ color: 'rgba(150,155,175,0.4)' }}
          >
            Scroll to Explore
          </p>
          <p
            className="text-xs uppercase tracking-widest"
            style={{ color: 'rgba(150,155,175,0.4)' }}
          >
            © {new Date().getFullYear()} Tech Tuition System
          </p>
        </div>
      </motion.div>
    </section>
  )
}
