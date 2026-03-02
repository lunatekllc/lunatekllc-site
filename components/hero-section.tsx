import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background with gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(220,38,38,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(220,38,38,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute top-0 left-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-primary/15 via-transparent to-transparent blur-3xl" />
        <div className="absolute top-20 right-[10%] h-[400px] w-[400px] rounded-full border border-primary/20" />
        <div className="absolute bottom-20 left-[5%] h-[300px] w-[300px] border border-primary/10" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-gradient-to-r from-primary/10 to-transparent px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-wider text-primary">Infrastructure First</span>
            </div>

            <h1 className="text-balance text-5xl font-bold leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
              BUILD
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">FASTER</span>
              <br />
              WITH AI
            </h1>

            <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              Infrastructure excellence meets AI-powered development. We handle the foundation while agents build your
              software.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="group w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                <a href="#case-study">
                  VIEW WORK
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block h-[600px]">
            <div className="absolute top-0 right-0 h-[250px] w-[250px] rounded-3xl bg-gradient-to-br from-primary to-secondary opacity-80" />
            <div className="absolute top-[100px] right-[100px] h-[200px] w-[200px] rounded-2xl border-2 border-foreground/50 backdrop-blur-sm" />
            <div className="absolute bottom-[150px] right-[50px] h-[180px] w-[180px] rounded-full border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-transparent" />
            <div className="absolute bottom-0 right-[200px] h-[120px] w-[120px] rounded-xl bg-gradient-to-tr from-foreground to-foreground/80" />
            <div className="absolute top-[300px] right-[280px] h-2 w-24 rounded-full bg-gradient-to-r from-primary to-secondary" />
            <div className="absolute top-[350px] right-[250px] h-24 w-2 rounded-full bg-gradient-to-b from-foreground to-foreground/50" />
          </div>
        </div>

        <div className="mt-24 grid gap-6 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-card to-card/50 p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
            <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br from-primary/40 to-transparent transition-all group-hover:scale-125" />
            <h3 className="relative z-10 mb-3 text-xl font-bold uppercase">Infrastructure</h3>
            <p className="relative z-10 text-sm leading-relaxed text-muted-foreground">Robust, scalable foundation</p>
          </div>

          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-card to-card/50 p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
            <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full border-4 border-primary/40 transition-all group-hover:scale-125" />
            <h3 className="relative z-10 mb-3 text-xl font-bold uppercase">AI Development</h3>
            <p className="relative z-10 text-sm leading-relaxed text-muted-foreground">Rapid agent-powered builds</p>
          </div>

          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-card to-card/50 p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
            <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br from-primary/30 to-secondary/20 transition-all group-hover:scale-125" />
            <h3 className="relative z-10 mb-3 text-xl font-bold uppercase">Expert Debug</h3>
            <p className="relative z-10 text-sm leading-relaxed text-muted-foreground">Manual refinement & scaling</p>
          </div>
        </div>
      </div>
    </section>
  )
}
