import { createFileRoute } from '@tanstack/react-router'
import { useState, useCallback } from 'react'
import { useLenisScroll } from '@/hooks/useLenisScroll'
import Header from '@/components/global/Header'
import Footer from '@/components/global/Footer'
import Preloader from '@/components/site/Preloader'
import HeroSection from '@/components/site/HeroSection'
import LogoStrip from '@/components/site/LogoStrip'
import AboutSection from '@/components/site/AboutSection'
import ServicesSection from '@/components/site/ServicesSection'
import StatsSection from '@/components/site/StatsSection'
import ProjectsSection from '@/components/site/ProjectsSection'
import StrategySection from '@/components/site/StrategySection'
import TeamSection from '@/components/site/TeamSection'
import TestimonialsSection from '@/components/site/TestimonialsSection'
import FAQSection from '@/components/site/FaqSection'
import CTASection from '@/components/site/CtaSection'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'TTS — Design & Development Agency' },
      {
        name: 'description',
        content:
          'Tech Tuition System builds exceptional websites and apps for ambitious brands. Your digital growth partner.',
      },
      { property: 'og:title', content: 'TTS — Design & Development Agency' },
      {
        property: 'og:description',
        content: 'We build exceptional websites and apps for ambitious brands.',
      },
    ],
  }),
  component: Index,
})

function Index() {
  const [loading, setLoading] = useState(true)
  const handleComplete = useCallback(() => setLoading(false), [])

  useLenisScroll()

  return (
    <>
      {loading && <Preloader onComplete={handleComplete} />}
      <Header />
      <main>
        <HeroSection />
        <LogoStrip />
        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <ProjectsSection />
        <StrategySection />
        <TeamSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
