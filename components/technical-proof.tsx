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
              Deterministic
              <br />
              <span className="text-primary">By Design</span>
            </h2>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              Every module ships with type-safe interfaces, comprehensive tests, and infrastructure-as-code. 
              No magic, no surprises—just predictable behavior at scale.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 h-2 w-2 bg-primary flex-shrink-0" />
                <div>
                  <p className="font-bold">Strongly Typed Contracts</p>
                  <p className="text-sm text-muted-foreground">Go interfaces ensure compile-time safety across all module boundaries.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 h-2 w-2 bg-primary flex-shrink-0" />
                <div>
                  <p className="font-bold">Infrastructure as Code</p>
                  <p className="text-sm text-muted-foreground">Terraform/Pulumi modules for reproducible deployments across any cloud.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 h-2 w-2 bg-primary flex-shrink-0" />
                <div>
                  <p className="font-bold">Observability Built-in</p>
                  <p className="text-sm text-muted-foreground">OpenTelemetry tracing, Prometheus metrics, and structured logging from day one.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Terminal window */}
          <div className="border border-border bg-card">
            {/* Terminal header */}
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-destructive/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
              <span className="ml-4 font-mono text-xs text-muted-foreground">main.go</span>
            </div>
            
            {/* Code content */}
            <div className="overflow-x-auto p-4">
              <pre className="font-mono text-sm leading-relaxed">
                <code>
                  <span className="text-muted-foreground">// Deterministic blob storage interface</span>{"\n"}
                  <span className="text-primary">package</span> storage{"\n\n"}
                  
                  <span className="text-primary">import</span> ({"\n"}
                  {"  "}<span className="text-green-400">{'"context"'}</span>{"\n"}
                  {"  "}<span className="text-green-400">{'"gocloud.dev/blob"'}</span>{"\n"}
                  ){"\n\n"}

                  <span className="text-primary">type</span> <span className="text-yellow-400">MediaHub</span> <span className="text-primary">interface</span> {"{\n"}
                  {"  "}<span className="text-blue-400">Upload</span>(ctx context.Context, key <span className="text-primary">string</span>, data []<span className="text-primary">byte</span>) <span className="text-primary">error</span>{"\n"}
                  {"  "}<span className="text-blue-400">Download</span>(ctx context.Context, key <span className="text-primary">string</span>) ([]<span className="text-primary">byte</span>, <span className="text-primary">error</span>){"\n"}
                  {"  "}<span className="text-blue-400">Delete</span>(ctx context.Context, key <span className="text-primary">string</span>) <span className="text-primary">error</span>{"\n"}
                  {"}\n\n"}

                  <span className="text-muted-foreground">// Works with S3, GCS, Azure, or local filesystem</span>{"\n"}
                  <span className="text-primary">func</span> <span className="text-blue-400">NewMediaHub</span>(bucket *blob.Bucket) MediaHub {"{\n"}
                  {"  "}<span className="text-primary">return</span> &mediaHub{"{bucket: bucket}"}{"\n"}
                  {"}"}
                </code>
              </pre>
            </div>

            {/* Terminal footer */}
            <div className="border-t border-border px-4 py-3">
              <p className="font-mono text-xs text-muted-foreground">
                <span className="text-primary">$</span> go build -o mediahub ./cmd/mediahub
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
