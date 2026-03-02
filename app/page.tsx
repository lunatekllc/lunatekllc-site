import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { CaseStudySection } from "@/components/case-study-section"
import { ProcessSection } from "@/components/process-section"
import { CTASection } from "@/components/cta-section"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen pl-16 flex justify-center">
      <div className="w-full max-w-[1600px]">
        <Header />
        <HeroSection />
        <ServicesSection />
        <CaseStudySection />
        <ProcessSection />
        <CTASection />
      </div>
    </main>
  )
}
