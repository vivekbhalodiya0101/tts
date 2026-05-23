import { motion } from 'motion/react'
import { useState } from 'react'

const projects = [
  {
    title: 'Finova Banking App',
    category: 'Mobile App',
    industry: 'Fintech',
    description:
      'A next-gen mobile banking experience with biometric auth and real-time analytics.',
    type: 'project' as const,
    color: 'from-accent/20 to-accent/5',
    span: 'md:col-span-2 md:row-span-2',
    aspect: 'aspect-[4/3]',
  },
  {
    title: 'Meridian E-Commerce',
    category: 'Web Platform',
    industry: 'Retail',
    description:
      'Full-stack e-commerce platform handling 100K+ daily transactions.',
    type: 'case-study' as const,
    color: 'from-blue-500/15 to-blue-500/5',
    span: 'md:col-span-1',
    aspect: 'aspect-square',
  },
  {
    title: 'Atlas Health Platform',
    category: 'SaaS',
    industry: 'Healthcare',
    description:
      'HIPAA-compliant telemedicine platform connecting patients with providers.',
    type: 'project' as const,
    color: 'from-emerald-500/15 to-emerald-500/5',
    span: 'md:col-span-1',
    aspect: 'aspect-square',
  },
  {
    title: 'Nexus CRM Dashboard',
    category: 'Web App',
    industry: 'Enterprise',
    description:
      'Enterprise CRM with AI-powered insights and pipeline visualization.',
    type: 'case-study' as const,
    color: 'from-orange-500/15 to-orange-500/5',
    span: 'md:col-span-1',
    aspect: 'aspect-[3/2]',
  },
  {
    title: 'Vortex Analytics',
    category: 'Dashboard',
    industry: 'Data',
    description:
      'Real-time analytics dashboard processing millions of events per second.',
    type: 'project' as const,
    color: 'from-blue-500/15 to-blue-500/5',
    span: 'md:col-span-2',
    aspect: 'aspect-[3/2]',
  },
]

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="projects"
      data-header-theme="light"
      className="section-light relative overflow-hidden py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <motion.h2
            className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Selected
            <br />
            <span className="text-luminance-accent italic pr-2">Works</span>
          </motion.h2>
          <motion.p
            className="max-w-md text-base text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A curated collection of projects where strategy meets craft.
          </motion.p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-border/80 transition-all duration-500 hover:border-accent/20 hover:shadow-glow-md ${project.span}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -6, transition: { duration: 0.4 } }}
            >
              <div
                className={`${project.aspect} bg-gradient-to-br ${project.color} relative flex items-center justify-center p-6 transition-all duration-700 group-hover:scale-[1.02]`}
              >
                <div className="flex h-full w-full items-center justify-center rounded-xl border border-border/30 bg-background/40 backdrop-blur-sm">
                  <span className="font-heading text-xl font-bold text-foreground/20 lg:text-2xl">
                    {project.title.split(' ')[0]}
                  </span>
                </div>

                {/* Type badge */}
                <div className="absolute top-4 right-4">
                  {project.type === 'case-study' ? (
                    <span
                      className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest"
                      style={{
                        background: 'rgba(255,255,255,0.9)',
                        color: 'rgb(10,12,30)',
                      }}
                    >
                      Case Study
                    </span>
                  ) : (
                    <span
                      className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest"
                      style={{
                        background: 'rgba(0,0,0,0.06)',
                        color: 'rgba(0,0,0,0.5)',
                        border: '1px solid rgba(0,0,0,0.08)',
                      }}
                    >
                      Project
                    </span>
                  )}
                </div>
              </div>

              <div className="p-5">
                <div className="mb-1.5 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  <span>{project.category}</span>
                  <span className="h-0.5 w-0.5 rounded-full bg-muted-foreground" />
                  <span>{project.industry}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground/80">
                  {project.description}
                </p>
                <motion.div
                  className="mt-4 flex items-center gap-2 text-sm font-medium text-accent"
                  animate={{ x: hoveredIndex === i ? 4 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.type === 'case-study'
                    ? 'Read Case Study'
                    : 'View Project'}
                  <span>→</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
