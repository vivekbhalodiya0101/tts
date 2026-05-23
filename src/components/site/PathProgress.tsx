import { useRef } from 'react'

import { ScrollTrigger, gsap, useGSAP } from '#/lib/gsap'

export default function PathProgress() {
  const scopeRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const dotRef = useRef<SVGCircleElement>(null)

  useGSAP(
    () => {
      const path = pathRef.current
      const dot = dotRef.current

      if (!path || !dot) {
        return
      }

      const length = path.getTotalLength()
      const startPoint = path.getPointAtLength(0)

      gsap.set(dot, {
        attr: {
          cx: startPoint.x,
          cy: startPoint.y,
        },
      })

      gsap.fromTo(
        path,
        {
          strokeDasharray: length,
          strokeDashoffset: length,
        },
        {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: scopeRef.current,
            start: 'top 76%',
            end: 'bottom 24%',
            scrub: true,
          },
        },
      )

      ScrollTrigger.create({
        trigger: scopeRef.current,
        start: 'top 76%',
        end: 'bottom 24%',
        scrub: true,
        onUpdate: (self) => {
          const point = path.getPointAtLength(length * self.progress)
          gsap.set(dot, {
            attr: {
              cx: point.x,
              cy: point.y,
            },
          })
        },
      })
    },
    { scope: scopeRef },
  )

  return (
    <div
      ref={scopeRef}
      className="rounded-3xl border border-white/15 bg-white/4 p-5"
    >
      <svg
        viewBox="0 0 620 250"
        className="w-full"
        role="img"
        aria-label="TTS delivery rhythm path"
      >
        <defs>
          <linearGradient id="strategyStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(125, 211, 252, 0.42)" />
            <stop offset="55%" stopColor="rgba(56, 189, 248, 0.86)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.42)" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d="M18 186C80 112 140 52 214 76C282 98 302 208 365 214C446 220 492 48 602 38"
          fill="none"
          stroke="url(#strategyStroke)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.95"
        />
        <circle ref={dotRef} r="7" fill="rgba(239, 246, 255, 0.98)" />
      </svg>
      <p className="mt-3 max-w-xl text-sm text-blue-100/80">
        This path mirrors every TTS project sprint, from first brief to launch
        readiness, with transparent checkpoints and shared momentum.
      </p>
    </div>
  )
}
