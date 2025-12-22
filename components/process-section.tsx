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
      <div className="absolute top-20 left-[5%] h-[200px] w-[200px] border-4 border-primary/10" />
      <div className="absolute bottom-20 right-[5%] h-[150px] w-[150px] rounded-full bg-primary/5" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="mb-16 flex items-center gap-6">
          <div className="h-16 w-16 bg-primary" />
          <h2 className="text-balance text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl lg:text-6xl">
            How We
            <br />
            <span className="text-primary">Work</span>
          </h2>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative border-2 border-foreground p-8 transition-all hover:border-primary"
              >
                <div className="absolute top-0 left-0 h-full w-2 bg-primary transition-all group-hover:w-3" />
                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center border-2 border-primary bg-background font-mono text-2xl font-bold">
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
          <div className="relative border-4 border-primary p-12">
            <div className="absolute -top-4 -left-4 h-12 w-12 bg-background border-4 border-primary" />
            <div className="absolute -bottom-4 -right-4 h-12 w-12 bg-primary" />
            <h3 className="mb-6 text-2xl font-bold uppercase">Why This Works</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm font-bold uppercase mb-1">10x Faster</p>
                <p className="text-xs text-muted-foreground">Initial development</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm font-bold uppercase mb-1">Production Grade</p>
                <p className="text-xs text-muted-foreground">Expert debugging</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm font-bold uppercase mb-1">Built to Scale</p>
                <p className="text-xs text-muted-foreground">From the start</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
