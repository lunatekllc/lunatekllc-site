const steps = [
  {
    number: "01",
    title: "Infrastructure Design",
    description: "Architect cloud infrastructure for reliability, security, and scalability from day one.",
  },
  {
    number: "02",
    title: "AI Development",
    description: "AI agents rapidly generate application code, components, and features.",
  },
  {
    number: "03",
    title: "Manual Refinement",
    description: "Expert developers debug, optimize, and refine to production standards.",
  },
  {
    number: "04",
    title: "Deploy & Scale",
    description: "Continuous monitoring and optimization as your application grows.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-[5%] h-[200px] w-[200px] rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl" />
        <div className="absolute bottom-20 right-[5%] h-[150px] w-[150px] rounded-full bg-gradient-to-tl from-secondary/10 to-transparent blur-2xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="mb-16 flex items-center gap-6">
          <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-2xl font-bold text-primary-foreground">4</span>
          </div>
          <h2 className="text-balance text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl lg:text-6xl">
            How We
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">Work</span>
          </h2>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-card to-card/50 p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-primary to-secondary rounded-full transition-all group-hover:w-1.5" />
                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl border border-primary/50 bg-gradient-to-br from-primary/20 to-transparent font-mono text-2xl font-bold text-primary">
                    {step.number}
                  </div>
                  <div className="pt-2">
                    <h3 className="mb-3 text-xl font-bold uppercase">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 p-12">
            <div className="absolute -top-12 -left-12 h-24 w-24 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-xl" />
            <div className="absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-gradient-to-tl from-secondary/30 to-transparent blur-xl" />
            <h3 className="relative z-10 mb-6 text-2xl font-bold uppercase">Why This Works</h3>
            <div className="relative z-10 grid gap-6 md:grid-cols-3">
              <div className="border-l-2 border-primary pl-4">
                <p className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">10x Faster</p>
                <p className="text-sm text-muted-foreground">Initial development</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <p className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Production Grade</p>
                <p className="text-sm text-muted-foreground">Expert debugging</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <p className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Built to Scale</p>
                <p className="text-sm text-muted-foreground">From the start</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
