import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'

const faqs = [
  {
    question: 'What types of projects does TTS specialize in?',
    answer:
      'We specialize in designing and developing custom websites, web applications, mobile apps, and comprehensive brand identities. From startup MVPs to enterprise-scale platforms.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on scope. A marketing website typically takes 4-6 weeks, while a full-stack web application can range from 8-16 weeks.',
  },
  {
    question: 'What is your development process?',
    answer:
      'We follow a four-phase approach: Discovery & Research, Design & Prototype, Development & Engineering, and Launch & Optimization.',
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer:
      'Absolutely. We offer flexible maintenance and support packages including performance monitoring, security updates, and feature enhancements.',
  },
  {
    question: 'How do we get started?',
    answer:
      "Simply reach out through our contact form or email. We'll schedule a free discovery call to understand your goals and outline next steps.",
  },
]

const SMOOTH = [0.22, 1, 0.36, 1] as const

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      data-header-theme="light"
      className="section-light relative overflow-hidden py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.5fr] lg:gap-20">
          {/* Left - header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              FAQ
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="text-luminance-light">Got</span>
              <br />
              Questions?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Everything you need to know about working with us.
            </p>
          </motion.div>

          {/* Right - accordion */}
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="group border-b border-border transition-colors duration-300 hover:border-accent/15"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <button
                  className="flex w-full items-center justify-between py-5 text-left transition-colors duration-300"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="flex items-center gap-4 pr-8">
                    <span
                      className="text-xs transition-colors duration-300"
                      style={{
                        fontFamily: 'var(--font-numeric)',
                        fontWeight: 500,
                        letterSpacing: '0.06em',
                        color:
                          openIndex === i
                            ? 'oklch(0.546 0.245 245)'
                            : 'rgba(0,0,0,0.2)',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="font-heading text-base font-semibold transition-colors duration-300"
                      style={{
                        color:
                          openIndex === i ? 'oklch(0.13 0.028 261)' : undefined,
                      }}
                    >
                      {faq.question}
                    </span>
                  </span>
                  <motion.span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs transition-all duration-300"
                    style={{
                      borderColor:
                        openIndex === i
                          ? 'oklch(0.546 0.245 245 / 30%)'
                          : undefined,
                      color:
                        openIndex === i ? 'oklch(0.546 0.245 245)' : undefined,
                      background:
                        openIndex === i
                          ? 'oklch(0.546 0.245 245 / 5%)'
                          : undefined,
                    }}
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: SMOOTH }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: SMOOTH }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pl-10 text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
