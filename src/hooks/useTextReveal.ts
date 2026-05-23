import { useRef } from 'react'
import { useScroll, useTransform } from 'motion/react'
import type { MotionValue } from 'motion/react'

export function useTextReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.3'],
  })

  return { ref, scrollYProgress }
}

export function useWordOpacity(
  scrollYProgress: MotionValue<number>,
  index: number,
  total: number,
) {
  const start = index / total
  const end = start + 1 / total
  return useTransform(scrollYProgress, [start, end], [0.15, 1])
}
