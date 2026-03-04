import { AlertTriangle, CheckCircle2, X, Check } from "lucide-react"

const aiTrapItems = [
  "Non-deterministic outputs",
  "Brittle error handling",
  "No type safety guarantees",
  "Scaling nightmares",
  "Security blind spots",
]

const lunatekItems = [
  "Immutable Go core logic",
  "Deterministic behavior",
  "Strong type contracts",
  "Horizontal scaling built-in",
  "Security-first architecture",
]

export function HybridPhilosophy() {
  return (
    <section id="philosophy" className="relative py-20 md:py-32 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-3 border border-primary/30 bg-primary/5 px-4 py-2 font-mono text-xs">
            <span className="uppercase tracking-widest text-primary">The Hybrid Approach</span>
          </div>
          <h2 className="text-balance text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
            AI Accelerates.
            <br />
            <span className="text-primary">Go Guarantees.</span>
          </h2>
          <p className="mt-6 text-pretty text-lg text-muted-foreground">
            We leverage AI for rapid integration and prototyping, but your core infrastructure runs on deterministic, battle-tested Go foundations.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* The AI Trap */}
          <div className="border border-destructive/30 bg-destructive/5 p-8">
            <div className="mb-6 flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              <h3 className="font-mono text-lg font-bold uppercase tracking-wider">The AI Trap</h3>
            </div>
            <p className="mb-6 text-sm text-muted-foreground">
              Pure AI-generated code often fails at scale. It lacks the determinism and reliability required for production systems.
            </p>
            <ul className="space-y-3">
              {aiTrapItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm">
                  <X className="h-4 w-4 flex-shrink-0 text-destructive" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The Lunatek Standard */}
          <div className="border-2 border-primary/50 bg-primary/5 p-8">
            <div className="mb-6 flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              <h3 className="font-mono text-lg font-bold uppercase tracking-wider">The Lunatek Standard</h3>
            </div>
            <p className="mb-6 text-sm text-muted-foreground">
              Immutable Go core with AI-accelerated integration layer. The best of both worlds.
            </p>
            <ul className="space-y-3">
              {lunatekItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm">
                  <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Visual separator */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Infrastructure That Scales</div>
          <div className="h-px flex-1 bg-border" />
        </div>
      </div>
    </section>
  )
}
