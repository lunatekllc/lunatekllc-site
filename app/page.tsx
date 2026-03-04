import { HeroSection } from "@/components/hero-section"
import { HybridPhilosophy } from "@/components/hybrid-philosophy"
import { ModuleRegistry } from "@/components/module-registry"
import { ProcessSection } from "@/components/process-section"
import { TechnicalProof } from "@/components/technical-proof"
import { CTASection } from "@/components/cta-section"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen pl-16 flex justify-center">
      <div className="w-full max-w-[1600px]">
        <Header />
        <HeroSection />
        <HybridPhilosophy />
        <ModuleRegistry />
        <ProcessSection />
        <TechnicalProof />
        <CTASection />
      </div>
    </main>
  )
}
