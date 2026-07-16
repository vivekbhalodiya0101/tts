import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'About', href: '#about', type: 'scroll' as const },
  { label: 'Services', href: '#services', type: 'scroll' as const },
  { label: 'Projects', href: '#projects', type: 'scroll' as const },
  { label: 'Testimonials', href: '#testimonials', type: 'scroll' as const },
  { label: 'Contact', href: '#contact', type: 'scroll' as const },
]

const SMOOTH = [0.22, 1, 0.36, 1] as const

export default function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isDarkBg, setIsDarkBg] = useState(true)

  useEffect(() => {
    let raf = 0
    let lastTheme: 'dark' | 'light' | null = null

    const evaluate = () => {
      raf = 0
      setScrolled(window.scrollY > 50)

      const headerRect = headerRef.current?.getBoundingClientRect()
      const sampleY = headerRect ? headerRect.top + headerRect.height * 0.5 : 56

      const themed = document.querySelectorAll<HTMLElement>(
        '[data-header-theme]',
      )
      let bestTheme: 'dark' | 'light' = lastTheme ?? 'dark'
      let bestDepth = -Infinity

      for (const el of themed) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= sampleY && rect.bottom >= sampleY) {
          const depth = Math.min(sampleY - rect.top, rect.bottom - sampleY)
          if (depth > bestDepth) {
            bestDepth = depth
            bestTheme = el.dataset.headerTheme === 'light' ? 'light' : 'dark'
          }
        }
      }

      if (bestTheme !== lastTheme && (lastTheme === null || bestDepth >= 8)) {
        lastTheme = bestTheme
        setIsDarkBg(bestTheme === 'dark')
      }
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(evaluate)
    }

    evaluate()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [mobileOpen])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && mobileOpen) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [mobileOpen])

  const scrollTo = useCallback((href: string) => {
    setMobileOpen(false)
    // small delay so menu closes smoothly first
    setTimeout(() => {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    }, 80)
  }, [])

  const handleNavClick = useCallback(
    (link: (typeof navLinks)[0]) => {
      scrollTo(link.href)
    },
    [scrollTo],
  )

  // When mobile menu is open, force dark theme styling for header
  const effectiveDark = mobileOpen ? true : isDarkBg

  const textColor = effectiveDark
    ? 'rgba(255,255,255,0.95)'
    : 'rgba(8,12,28,0.92)'
  const textMuted = effectiveDark
    ? 'rgba(255,255,255,0.58)'
    : 'rgba(8,12,28,0.62)'
  const borderColor = effectiveDark
    ? 'rgba(255,255,255,0.08)'
    : 'rgba(8,12,28,0.1)'
  const glassBg = effectiveDark
    ? 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))'
    : 'linear-gradient(135deg, rgba(12,16,32,0.14), rgba(12,16,32,0.08))'
  const hoverGlassBg = effectiveDark
    ? 'linear-gradient(135deg, rgba(250,204,21,0.18), rgba(245,158,11,0.08))'
    : 'linear-gradient(135deg, rgba(250,204,21,0.2), rgba(245,158,11,0.1))'
  const hoverBorder = effectiveDark
    ? 'rgba(250,204,21,0.25)'
    : 'rgba(245,158,11,0.35)'

  return (
    <>
      <motion.header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className={`mx-3 mt-3 flex w-full max-w-7xl items-center justify-between transition-all duration-700 sm:mx-4 sm:mt-4 ${
            scrolled || mobileOpen
              ? 'rounded-full px-3 py-2 sm:px-4 sm:py-2.5'
              : 'rounded-none px-4 py-3 sm:px-6 sm:py-4'
          }`}
          style={
            scrolled || mobileOpen
              ? {
                  background: glassBg,
                  border: `1px solid ${borderColor}`,
                  backdropFilter: 'blur(20px) saturate(1.2)',
                  WebkitBackdropFilter: 'blur(20px) saturate(1.2)',
                  boxShadow: effectiveDark
                    ? '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)'
                    : '0 10px 36px rgba(8,12,28,0.12), inset 0 1px 0 rgba(255,255,255,0.32)',
                  transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                }
              : {
                  background: 'transparent',
                  border: '1px solid transparent',
                  transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                }
          }
        >
          {/* Logo */}
          <Button
            onClick={() => scrollTo('#hero')}
            className="flex items-center gap-2 sm:gap-2.5 bg-transparent cursor-pointer p-0 hover:bg-transparent"
            aria-label="TTS Home"
          >
            <div className="relative flex h-8 w-11 items-center justify-start overflow-hidden sm:h-10 sm:w-14">
              <img
                src="/logo-white.png"
                alt="TTS Cloud"
                className="h-[90%] max-w-none object-left origin-left"
                style={{
                  filter: effectiveDark ? 'invert(0)' : 'invert(1)',
                }}
              />
            </div>
          </Button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => (
              <Button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="group relative rounded-full px-3 py-2 text-[12px] font-medium uppercase tracking-wider transition-all duration-300 lg:px-4 lg:text-[13px] bg-transparent cursor-pointer"
                style={{ color: textMuted }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = textColor
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = textMuted
                }}
              >
                <span
                  className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: hoverGlassBg,
                    border: `1px solid ${hoverBorder}`,
                  }}
                />
                <span className="relative">{link.label}</span>
              </Button>
            ))}

            <Button
              onClick={() => handleNavClick(navLinks[navLinks.length-1])}
              className="group relative ml-2 h-auto overflow-hidden rounded-full px-4 py-2 text-[12px] font-semibold uppercase tracking-wider transition-all duration-500 lg:ml-3 lg:px-5 lg:text-[13px] cursor-pointer"
              style={{
                background: effectiveDark
                  ? 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(220,225,250,0.9))'
                  : 'linear-gradient(135deg, rgba(10,12,30,0.96), rgba(24,30,58,0.94))',
                color: effectiveDark ? 'rgb(10,12,30)' : 'rgb(255,255,255)',
                boxShadow: effectiveDark
                  ? '0 10px 28px rgba(255,255,255,0.12)'
                  : '0 10px 28px rgba(8,12,28,0.18)',
                border: 'none',
              }}
            >
              <span className="absolute inset-0 -translate-x-full rounded-full bg-linear-to-r from-transparent via-[rgba(250,204,21,0.4)] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative flex items-center gap-2">
                Let's Talk
                <span
                  className="inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] transition-transform duration-300 -rotate-45 group-hover:rotate-0 group-hover:translate-x-0.5"
                  style={{
                    background: effectiveDark
                      ? 'rgb(10,12,30)'
                      : 'rgb(255,255,255)',
                    color: effectiveDark ? 'rgb(255,255,255)' : 'rgb(10,12,30)',
                  }}
                >
                  <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                </span>
              </span>
            </Button>
          </nav>

          {/* Mobile hamburger — refined animated icon */}
          <button
            className="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 active:scale-95 md:hidden"
            style={{
              background: mobileOpen ? 'rgba(255,255,255,0.06)' : 'transparent',
              border: `1px solid ${mobileOpen ? 'rgba(255,255,255,0.08)' : 'transparent'}`,
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className="relative block h-3.5 w-5">
              <motion.span
                className="absolute left-0 right-0 block h-[1.5px] rounded-full"
                style={{ background: textColor, top: 0 }}
                animate={
                  mobileOpen
                    ? { rotate: 45, top: '50%', y: '-50%' }
                    : { rotate: 0, top: 0, y: 0 }
                }
                transition={{ duration: 0.4, ease: SMOOTH }}
              />
              <motion.span
                className="absolute left-0 right-0 block h-[1.5px] rounded-full"
                style={{ background: textColor, top: '100%' }}
                animate={
                  mobileOpen
                    ? { rotate: -45, top: '50%', y: '-50%' }
                    : { rotate: 0, top: '100%', y: 0 }
                }
                transition={{ duration: 0.4, ease: SMOOTH }}
              />
            </span>
          </button>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: SMOOTH }}
          >
            {/* Layered backdrop matching site dark aesthetic */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(20,30,80,0.65), rgba(2,3,10,0.95))',
                backdropFilter: 'blur(24px) saturate(1.2)',
                WebkitBackdropFilter: 'blur(24px) saturate(1.2)',
              }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Subtle amber glow accent */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2"
              style={{
                background:
                  'radial-gradient(circle, rgba(245,158,11,0.18), transparent 70%)',
                filter: 'blur(40px)',
              }}
            />

            {/* Menu content */}
            <div className="relative flex h-full flex-col items-center justify-center gap-2 px-6 pb-20 pt-24">
              <motion.span
                className="mb-4 font-heading text-[11px] font-medium uppercase tracking-[0.3em] text-white/40"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Navigation
              </motion.span>

              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="group relative w-full max-w-xs rounded-full px-6 py-4 text-center font-heading text-2xl font-semibold text-white transition-all duration-300 active:scale-95 sm:text-3xl"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    delay: 0.15 + i * 0.06,
                    duration: 0.5,
                    ease: SMOOTH,
                  }}
                >
                  <span
                    className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                      border: '1px solid rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(14px)',
                      WebkitBackdropFilter: 'blur(14px)',
                    }}
                  />
                  <span className="relative inline-flex items-center gap-3">
                    {/* <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
                        0{i + 1}
                      </span> */}
                    {link.label}
                  </span>
                </motion.button>
              ))}

              {/* Mobile CTA */}
              <Button
                onClick={() => handleNavClick(navLinks[navLinks.length - 1])}
                className="group relative mt-6 h-auto inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-wider transition-all duration-500 active:scale-95"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.96), rgba(230,235,250,1))',
                  color: 'rgb(10,12,30)',
                  boxShadow:
                    '0 0 40px rgba(245,158,11,0.25), 0 8px 30px rgba(0,0,0,0.4)',
                  border: 'none',
                }}
              >
                <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-[rgba(250,204,21,0.4)] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Let's Talk</span>
                <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-300 group-hover:translate-x-0.5">
                  <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                </span>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
