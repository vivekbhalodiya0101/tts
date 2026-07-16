import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const duration = 2400
    const steps = 100
    const interval = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += 1
      if (current > 100) {
        clearInterval(timer)
        setIsExiting(true)
        setTimeout(onComplete, 800)
        return
      }
      // Ease-in-out: slower at start and end
      const progress = current / 100
      const eased = Math.round(
        progress < 0.5
          ? 100 * (2 * progress * progress)
          : 100 * (1 - Math.pow(-2 * progress + 2, 2) / 2),
      )
      setCount(Math.min(eased, current))
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-9999 flex items-end justify-end bg-surface-dark"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-2xl font-bold tracking-tight text-surface-dark-foreground">
              <img
                src="/logo-white.png"
                alt="Logo"
                className="h-20 w-auto animate-out"
                style={{ filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.5))' }}
              />
            </span>
          </motion.div>
          <motion.div
            className="relative p-8 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span
              className="font-numeric tabular-nums leading-none text-accent"
              style={{
                fontFamily: 'var(--font-numeric)',
                fontSize: 'clamp(5rem, 18vw, 9rem)',
                fontWeight: 700,
                letterSpacing: '-0.04em',
              }}
            >
              {count}
            </span>
            <span
              className="text-accent/55"
              style={{
                fontFamily: 'var(--font-numeric)',
                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                fontWeight: 500,
              }}
            >
              %
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
