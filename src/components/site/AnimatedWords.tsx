import { motion, useReducedMotion } from 'motion/react'

export default function AnimatedWords({
  text,
  className,
  amount = 0.45,
}: {
  text: string
  className?: string
  amount?: number
}) {
  const reduceMotion = useReducedMotion()
  const words = text.split(' ')

  if (reduceMotion) {
    return <span className={className}>{text}</span>
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block pr-[0.26em]"
            variants={{
              hidden: { opacity: 0, y: '110%' },
              visible: {
                opacity: 1,
                y: '0%',
                transition: {
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}
