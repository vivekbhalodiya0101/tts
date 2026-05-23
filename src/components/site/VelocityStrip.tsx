import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'motion/react'

const stripItems = [
  'product strategy',
  'web platforms',
  'mobile apps',
  'design systems',
  'growth experiments',
  'brand storytelling',
]

export default function VelocityStrip() {
  const { scrollY } = useScroll()
  const velocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(velocity, {
    stiffness: 220,
    damping: 34,
  })

  const drift = useTransform(smoothVelocity, [-1200, 0, 1200], [-130, 0, 130])

  return (
    <section className="relative overflow-hidden border-y border-slate-900/10 bg-[linear-gradient(180deg,#f8fbff_0%,#edf5ff_100%)] py-5 text-slate-800">
      <motion.div
        className="marquee-track flex min-w-max items-center gap-10 text-[11px] font-semibold tracking-[0.28em] uppercase"
        style={{ x: drift }}
      >
        {Array.from({ length: 3 }).map((_, loop) =>
          stripItems.map((item) => (
            <span
              key={`${loop}-${item}`}
              className="inline-flex items-center gap-4 opacity-90"
            >
              <span>{item}</span>
              <span className="h-1 w-1 rounded-full bg-sky-500" />
            </span>
          )),
        )}
      </motion.div>
    </section>
  )
}
