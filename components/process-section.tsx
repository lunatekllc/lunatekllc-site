const steps = [
  {
    number: "01",
    title: "Intake & Assessment",
    description: "We analyze your prototype, identifying architectural gaps, security vulnerabilities, and scaling limitations.",
    output: "Technical audit document",
  },
  {
    number: "02",
    title: "Infrastructure Design",
    description: "Architect deterministic Go foundations tailored to your specific use case and scaling requirements.",
    output: "System architecture diagram",
  },
  {
    number: "03",
    title: "Module Integration",
    description: "Drop in pre-built, production-hardened modules. Your prototype's logic wraps around our battle-tested core.",
    output: "Containerized services",
  },
  {
    number: "04",
    title: "Deployment & Handoff",
    description: "Deployed to your cloud of choice with full observability, documentation, and runbooks.",
    output: "Production environment",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="relative py-20 md:py-32 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-3 border border-primary/30 bg-primary/5 px-4 py-2 font-mono text-xs">
            <span className="uppercase tracking-widest text-primary">The Process</span>
          </div>
          <h2 className="text-balance text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Prototype to
            <br />
            <span className="text-primary">Production</span>
          </h2>
          <p className="mt-6 text-pretty text-lg text-muted-foreground">
            We take your messy MVP and drop it into a hardened infrastructure shell. Days, not months.
          </p>
        </div>

        {/* Vertical timeline */}
        <div className="mx-auto max-w-3xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[27px] top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px" />

            {steps.map((step, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                <div className="flex items-start gap-6 md:gap-0">
                  {/* Number badge */}
                  <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center border-2 border-primary bg-background font-mono text-xl font-bold text-primary md:absolute md:left-1/2 md:-translate-x-1/2">
                    {step.number}
                  </div>

                  {/* Content - alternating sides on desktop */}
                  <div className={`flex-1 md:w-[calc(50%-4rem)] ${index % 2 === 0 ? "md:pr-8 md:text-right md:ml-0 md:mr-auto" : "md:pl-8 md:ml-auto md:mr-0"}`}>
                    <div className={`border border-border bg-card/50 p-6 ${index % 2 === 0 ? "" : "md:ml-[calc(50%+2rem)]"} ${index % 2 === 0 ? "md:mr-[calc(50%+2rem)]" : ""}`}>
                      <h3 className="mb-2 font-mono text-lg font-bold uppercase tracking-wide">{step.title}</h3>
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                      <div className={`inline-flex items-center gap-2 font-mono text-xs text-primary ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <div className="h-1 w-1 bg-primary" />
                        Output: {step.output}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-20 grid gap-px bg-border md:grid-cols-3">
          <div className="bg-background p-8 text-center">
            <p className="font-mono text-4xl font-bold text-primary">7-14</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">Days to Deploy</p>
          </div>
          <div className="bg-background p-8 text-center">
            <p className="font-mono text-4xl font-bold text-primary">100%</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">Go Core Logic</p>
          </div>
          <div className="bg-background p-8 text-center">
            <p className="font-mono text-4xl font-bold text-primary">0</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">Vendor Lock-in</p>
          </div>
        </div>
      </div>
    </section>
  )
}
