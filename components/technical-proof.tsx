import { Server, Database, Shield, Workflow, ArrowRight, Activity } from "lucide-react"

export function TechnicalProof() {
  return (
    <section id="technical" className="relative py-20 md:py-32 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-primary/5 blur-[100px]" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <div className="mb-4 inline-flex items-center gap-3 border border-primary/30 bg-primary/5 px-4 py-2 font-mono text-xs">
              <span className="uppercase tracking-widest text-primary">Technical Proof</span>
            </div>
            <h2 className="text-balance text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Industrial-Grade
              <br />
              <span className="text-primary">Architecture</span>
            </h2>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              Every deployment follows structural engineering principles—modular, load-tested, and built to withstand real-world stress.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 h-2 w-2 bg-primary flex-shrink-0" />
                <div>
                  <p className="font-bold">Deterministic Behavior</p>
                  <p className="text-sm text-muted-foreground">Every module produces the same output for the same input—no surprises at scale.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 h-2 w-2 bg-primary flex-shrink-0" />
                <div>
                  <p className="font-bold">Cloud-Agnostic by Design</p>
                  <p className="text-sm text-muted-foreground">Swap AWS for GCP, or migrate to on-prem, without rewriting application code.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 h-2 w-2 bg-primary flex-shrink-0" />
                <div>
                  <p className="font-bold">Observable from Day One</p>
                  <p className="text-sm text-muted-foreground">Built-in metrics, tracing, and logging—you see exactly what's happening inside.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* System Topology Diagram */}
          <div className="border border-border bg-card">
            {/* Diagram header */}
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">System Topology</span>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-green-500 animate-pulse" />
                <span className="font-mono text-xs text-green-500">LIVE</span>
              </div>
            </div>
            
            {/* Topology visualization */}
            <div className="p-8">
              {/* Edge Layer */}
              <div className="mb-6">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Edge Layer</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center border-2 border-primary bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 h-px bg-border" />
                  <span className="font-mono text-xs">Auth-Hardened Gateway</span>
                </div>
              </div>

              {/* Connection */}
              <div className="flex justify-center mb-6">
                <div className="flex flex-col items-center">
                  <div className="h-6 w-px bg-primary" />
                  <ArrowRight className="h-4 w-4 text-primary rotate-90" />
                </div>
              </div>

              {/* Processing Layer */}
              <div className="mb-6">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Processing Layer</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="flex flex-col items-center gap-2 border border-border bg-background p-3">
                    <Server className="h-5 w-5 text-primary" />
                    <span className="font-mono text-[10px] text-center">Compute Fabric</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 border border-border bg-background p-3">
                    <Workflow className="h-5 w-5 text-primary" />
                    <span className="font-mono text-[10px] text-center">Event Engine</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 border border-border bg-background p-3">
                    <Activity className="h-5 w-5 text-primary" />
                    <span className="font-mono text-[10px] text-center">Data Pipeline</span>
                  </div>
                </div>
              </div>

              {/* Connection */}
              <div className="flex justify-center mb-6">
                <div className="flex flex-col items-center">
                  <div className="h-6 w-px bg-primary" />
                  <ArrowRight className="h-4 w-4 text-primary rotate-90" />
                </div>
              </div>

              {/* Storage Layer */}
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Storage Layer</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center border border-border bg-background">
                    <Database className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1 h-px bg-border" />
                  <span className="font-mono text-xs">Cloud-Agnostic Storage</span>
                </div>
              </div>
            </div>

            {/* Diagram footer - Performance benchmarks */}
            <div className="border-t border-border px-4 py-3">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-mono text-lg font-bold text-primary">99.9%</p>
                  <p className="font-mono text-[10px] text-muted-foreground">Uptime SLA</p>
                </div>
                <div>
                  <p className="font-mono text-lg font-bold text-primary">&lt;50ms</p>
                  <p className="font-mono text-[10px] text-muted-foreground">P99 Latency</p>
                </div>
                <div>
                  <p className="font-mono text-lg font-bold text-primary">10K+</p>
                  <p className="font-mono text-[10px] text-muted-foreground">RPS Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
