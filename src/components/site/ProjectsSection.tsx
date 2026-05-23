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
    span: 'md:col-start-1 md:row-start-1 md:row-span-5',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
  },
  {
    title: 'Meridian E-Commerce',
    category: 'Web Platform',
    industry: 'Retail',
    description:
      'Full-stack e-commerce platform handling 100K+ daily transactions.',
    type: 'case-study' as const,
    color: 'from-blue-500/15 to-blue-500/5',
    span: 'md:col-start-2 md:row-start-1 md:row-span-3',
    image:
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
  },
  {
    title: 'Atlas Health Platform',
    category: 'SaaS',
    industry: 'Healthcare',
    description:
      'HIPAA-compliant telemedicine platform connecting patients with providers.',
    type: 'project' as const,
    color: 'from-emerald-500/15 to-emerald-500/5',
    span: 'md:col-start-2 md:row-start-4 md:row-span-2',
    image:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80',
  },
  {
    title: 'Nexus CRM Dashboard',
    category: 'Web App',
    industry: 'Enterprise',
    description:
      'Enterprise CRM with AI-powered insights and pipeline visualization.',
    type: 'case-study' as const,
    color: 'from-orange-500/15 to-orange-500/5',
    span: 'md:col-start-3 md:row-start-1 md:row-span-2',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
  },
  {
    title: 'Vortex Analytics',
    category: 'Dashboard',
    industry: 'Data',
    description:
      'Real-time analytics dashboard processing millions of events per second.',
    type: 'project' as const,
    color: 'from-purple-500/15 to-purple-500/5',
    span: 'md:col-start-3 md:row-start-3 md:row-span-3',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
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
        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-5 md:min-h-[850px] lg:min-h-[900px]">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`group relative flex flex-col cursor-pointer overflow-hidden rounded-2xl border border-border/80 transition-all duration-500 hover:border-accent/20 hover:shadow-glow-md bg-background ${project.span}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -6, transition: { duration: 0.4 } }}
            >
              <div
                className={`flex-1 min-h-[220px] bg-linear-to-br ${project.color} relative flex items-center justify-center p-6 transition-transform duration-700 overflow-hidden`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-95 transition-transform duration-700 group-hover:scale-110"
                />

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
