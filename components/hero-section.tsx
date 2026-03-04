import { Button } from "@/components/ui/button"
import { ArrowRight, Box } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Grid background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 left-0 h-[500px] w-[500px] bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-primary/3 blur-[100px]" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 border border-primary/30 bg-primary/5 px-4 py-2 font-mono text-xs">
              <div className="h-2 w-2 bg-primary animate-pulse" />
              <span className="uppercase tracking-widest text-primary">Production-Ready Infrastructure</span>
            </div>

            <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              Deploy Production-Grade Foundations,
              <br />
              <span className="text-primary">Not Just Code.</span>
            </h1>

            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              We provide the industrial-grade infrastructure shell your prototype needs to survive real-world load. Vendor-independent, production-hardened, and deployed in days.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="group font-mono uppercase tracking-wider">
                <a href="#modules">
                  View Infrastructure Modules
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-mono uppercase tracking-wider border-primary/50 hover:bg-primary/10">
                <a href="#process">
                  Scale Your Prototype
                </a>
              </Button>
            </div>
          </div>

          {/* Industrial geometric shapes */}
          <div className="relative hidden lg:block h-[500px]">
            <div className="absolute top-0 right-0 h-[200px] w-[200px] border-2 border-primary/40" />
            <div className="absolute top-[50px] right-[50px] h-[200px] w-[200px] border border-foreground/20" />
            <div className="absolute top-[100px] right-[100px] h-[200px] w-[200px] bg-primary/10" />
            <div className="absolute bottom-[100px] right-[20px] h-[150px] w-[150px] border-2 border-primary" />
            <div className="absolute bottom-[50px] right-[70px] h-[100px] w-[100px] bg-card border border-border" />
            <div className="absolute top-[200px] right-[250px] h-1 w-32 bg-primary" />
            <div className="absolute top-[230px] right-[250px] h-16 w-1 bg-foreground/30" />
            {/* Circuit pattern */}
            <div className="absolute top-[300px] right-[150px] flex items-center gap-2">
              <div className="h-3 w-3 border border-primary" />
              <div className="h-0.5 w-8 bg-primary/50" />
              <div className="h-3 w-3 bg-primary" />
              <div className="h-0.5 w-12 bg-primary/50" />
              <div className="h-3 w-3 border border-primary" />
            </div>
          </div>
        </div>

        {/* Key value props */}
        <div className="mt-24 grid gap-px bg-border md:grid-cols-3">
          <div className="group bg-background p-8 transition-all hover:bg-primary/5">
            <div className="mb-4 flex items-center gap-3">
              <Box className="h-5 w-5 text-primary" />
              <span className="font-mono text-xs uppercase tracking-widest text-primary">Deterministic</span>
            </div>
            <h3 className="mb-2 text-lg font-bold uppercase">Predictable Engines</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">High-velocity infrastructure modules that behave the same way, every time, at any scale.</p>
          </div>

          <div className="group bg-background p-8 transition-all hover:bg-primary/5">
            <div className="mb-4 flex items-center gap-3">
              <Box className="h-5 w-5 text-primary" />
              <span className="font-mono text-xs uppercase tracking-widest text-primary">Vendor Independent</span>
            </div>
            <h3 className="mb-2 text-lg font-bold uppercase">Zero Lock-In</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">Switch between AWS, GCP, Azure, or on-prem without rewriting a single line of code.</p>
          </div>

          <div className="group bg-background p-8 transition-all hover:bg-primary/5">
            <div className="mb-4 flex items-center gap-3">
              <Box className="h-5 w-5 text-primary" />
              <span className="font-mono text-xs uppercase tracking-widest text-primary">Industrial-Grade</span>
            </div>
            <h3 className="mb-2 text-lg font-bold uppercase">Built to Last</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">Pre-fabricated structural frameworks proven in mission-critical production systems.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
