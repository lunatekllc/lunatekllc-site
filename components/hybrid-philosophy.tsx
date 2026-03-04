import { AlertTriangle, CheckCircle2, ArrowRight, Layers, Shield, Zap } from "lucide-react"

const gapProblems = [
  "Prototypes break under real-world load",
  "AI-generated code lacks production hardening",
  "No clear path from MVP to enterprise-ready",
  "Vendor lock-in creates technical debt",
  "Security is an afterthought",
]

const bridgeSolutions = [
  "Industrial-grade shell absorbs traffic spikes",
  "Deterministic engines replace brittle code",
  "Structured migration with zero rewrites",
  "Cloud-agnostic from day one",
  "Security-first architecture baked in",
]

export function HybridPhilosophy() {
  return (
    <section id="bridge" className="relative py-20 md:py-32 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-3 border border-primary/30 bg-primary/5 px-4 py-2 font-mono text-xs">
            <span className="uppercase tracking-widest text-primary">The Gap</span>
          </div>
          <h2 className="text-balance text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
            The Prototype-to-Production
            <br />
            <span className="text-primary">Bridge</span>
          </h2>
          <p className="mt-6 text-pretty text-lg text-muted-foreground">
            Lunatek doesn't just build apps—we provide the industrial-grade shell that prevents MVPs from breaking under real-world load.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* The Problem */}
          <div className="border border-destructive/30 bg-destructive/5 p-8">
            <div className="mb-6 flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              <h3 className="font-mono text-lg font-bold uppercase tracking-wider">The Prototype Problem</h3>
            </div>
            <p className="mb-6 text-sm text-muted-foreground">
              Most startups ship code that works in demos but crumbles in production. The gap between "it works on my machine" and "it handles 10,000 concurrent users" is where companies die.
            </p>
            <ul className="space-y-3">
              {gapProblems.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm">
                  <div className="h-1.5 w-1.5 bg-destructive flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The Solution */}
          <div className="border-2 border-primary/50 bg-primary/5 p-8">
            <div className="mb-6 flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              <h3 className="font-mono text-lg font-bold uppercase tracking-wider">The Lunatek Bridge</h3>
            </div>
            <p className="mb-6 text-sm text-muted-foreground">
              We wrap your prototype in an industrial framework—a pre-fabricated steel frame that's ready for your custom interior design.
            </p>
            <ul className="space-y-3">
              {bridgeSolutions.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm">
                  <div className="h-1.5 w-1.5 bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Visual bridge diagram */}
        <div className="mt-16 border border-border bg-card/50 p-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="text-center">
              <div className="mb-3 flex h-16 w-16 items-center justify-center border border-border bg-background mx-auto">
                <Zap className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="font-mono text-sm font-bold uppercase">Your Prototype</p>
              <p className="text-xs text-muted-foreground">Fast, but fragile</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-primary md:w-16" />
              <ArrowRight className="h-5 w-5 text-primary" />
              <div className="h-px w-8 bg-primary md:w-16" />
            </div>

            <div className="text-center">
              <div className="mb-3 flex h-16 w-16 items-center justify-center border-2 border-primary bg-primary/10 mx-auto">
                <Layers className="h-8 w-8 text-primary" />
              </div>
              <p className="font-mono text-sm font-bold uppercase">Lunatek Shell</p>
              <p className="text-xs text-muted-foreground">Industrial framework</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-primary md:w-16" />
              <ArrowRight className="h-5 w-5 text-primary" />
              <div className="h-px w-8 bg-primary md:w-16" />
            </div>

            <div className="text-center">
              <div className="mb-3 flex h-16 w-16 items-center justify-center border-2 border-primary bg-primary mx-auto">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <p className="font-mono text-sm font-bold uppercase">Production System</p>
              <p className="text-xs text-muted-foreground">Scale-ready</p>
            </div>
          </div>
        </div>

        {/* Vendor Independence callout */}
        <div className="mt-12 border-2 border-primary p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-mono text-xl font-bold uppercase mb-2">Vendor Independence Guaranteed</h3>
              <p className="text-muted-foreground">
                Every module we deploy allows you to switch clouds—AWS, GCP, Azure, or on-prem—without rewriting your application. Your infrastructure, your terms.
              </p>
            </div>
            <div className="flex-shrink-0 font-mono text-5xl font-bold text-primary">0%</div>
          </div>
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">Lock-in Risk</p>
        </div>
      </div>
    </section>
  )
}
