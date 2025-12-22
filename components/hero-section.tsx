import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute top-20 right-[10%] h-[400px] w-[400px] rounded-full border-4 border-primary/20" />
        <div className="absolute bottom-20 left-[5%] h-[300px] w-[300px] border-4 border-primary/10" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 border-l-4 border-primary pl-4">
              <div className="h-3 w-3 bg-primary" />
              <span className="text-sm font-bold uppercase tracking-wider text-primary">Infrastructure First</span>
            </div>

            <h1 className="text-balance text-5xl font-bold leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
              BUILD
              <br />
              <span className="text-primary">FASTER</span>
              <br />
              WITH AI
            </h1>

            <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              Infrastructure excellence meets AI-powered development. We handle the foundation while agents build your
              software.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button size="lg" className="group w-full sm:w-auto">
                START PROJECT
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                VIEW WORK
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block h-[600px]">
            <div className="absolute top-0 right-0 h-[250px] w-[250px] bg-primary" />
            <div className="absolute top-[100px] right-[100px] h-[200px] w-[200px] border-4 border-foreground" />
            <div className="absolute bottom-[150px] right-[50px] h-[180px] w-[180px] rounded-full border-4 border-primary/50" />
            <div className="absolute bottom-0 right-[200px] h-[120px] w-[120px] bg-foreground" />
            <div className="absolute top-[300px] right-[280px] h-2 w-24 bg-primary" />
            <div className="absolute top-[350px] right-[250px] h-24 w-2 bg-foreground" />
          </div>
        </div>

        <div className="mt-24 grid gap-6 md:grid-cols-3">
          <div className="group relative overflow-hidden border-2 border-foreground p-8 transition-all hover:border-primary">
            <div className="absolute top-0 right-0 h-16 w-16 bg-primary transition-all group-hover:h-20 group-hover:w-20" />
            <h3 className="relative z-10 mb-3 text-xl font-bold uppercase">Infrastructure</h3>
            <p className="relative z-10 text-sm leading-relaxed text-muted-foreground">Robust, scalable foundation</p>
          </div>

          <div className="group relative overflow-hidden border-2 border-foreground p-8 transition-all hover:border-primary">
            <div className="absolute top-0 right-0 h-16 w-16 border-8 border-primary transition-all group-hover:h-20 group-hover:w-20" />
            <h3 className="relative z-10 mb-3 text-xl font-bold uppercase">AI Development</h3>
            <p className="relative z-10 text-sm leading-relaxed text-muted-foreground">Rapid agent-powered builds</p>
          </div>

          <div className="group relative overflow-hidden border-2 border-foreground p-8 transition-all hover:border-primary">
            <div className="absolute top-0 right-0 h-16 w-16 rounded-full bg-primary transition-all group-hover:h-20 group-hover:w-20" />
            <h3 className="relative z-10 mb-3 text-xl font-bold uppercase">Expert Debug</h3>
            <p className="relative z-10 text-sm leading-relaxed text-muted-foreground">Manual refinement & scaling</p>
          </div>
        </div>
      </div>
    </section>
  )
}
