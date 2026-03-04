import { Upload, Shield, Database, Workflow, Server, Lock } from "lucide-react"

const modules = [
  {
    icon: Upload,
    name: "Agnostic Media Hub",
    tag: "gocloud.dev",
    description: "Unified blob storage interface. Upload to S3, GCS, or Azure with zero code changes. Automatic CDN integration and image optimization pipeline.",
    features: ["Multi-cloud support", "Streaming uploads", "Automatic optimization"],
    large: true,
  },
  {
    icon: Shield,
    name: "Identity & Auth",
    tag: "IAM",
    description: "Hardened authentication with RBAC, MFA, and audit logging. OIDC/SAML ready.",
    features: ["Zero-trust architecture", "Session management"],
    large: false,
  },
  {
    icon: Database,
    name: "Data Orchestrator",
    tag: "High-Concurrency",
    description: "Managed data pipelines with automatic retries, dead-letter queues, and observability.",
    features: ["Fan-out patterns", "Backpressure handling"],
    large: false,
  },
  {
    icon: Workflow,
    name: "Event Bus",
    tag: "Pub/Sub",
    description: "Cloud-agnostic event streaming with exactly-once delivery semantics.",
    features: ["At-least-once delivery", "Schema registry"],
    large: false,
  },
  {
    icon: Server,
    name: "API Gateway",
    tag: "Edge-Ready",
    description: "Rate limiting, request validation, and distributed caching at the edge.",
    features: ["OpenAPI validation", "Request coalescing"],
    large: false,
  },
  {
    icon: Lock,
    name: "Secrets Vault",
    tag: "Encrypted",
    description: "Centralized secrets management with automatic rotation and audit trails.",
    features: ["Envelope encryption", "Access policies"],
    large: false,
  },
]

export function ModuleRegistry() {
  return (
    <section id="modules" className="relative py-20 md:py-32 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/2 left-0 h-[400px] w-[400px] -translate-y-1/2 bg-primary/5 blur-[100px]" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-3 border border-primary/30 bg-primary/5 px-4 py-2 font-mono text-xs">
            <span className="uppercase tracking-widest text-primary">Module Registry</span>
          </div>
          <h2 className="text-balance text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Pre-Built
            <br />
            <span className="text-primary">Microservices</span>
          </h2>
          <p className="mt-6 text-pretty text-lg text-muted-foreground">
            Production-hardened infrastructure modules. Drop into your stack and scale immediately.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`group relative bg-background p-6 transition-all hover:bg-primary/5 ${
                module.large ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""
              }`}
            >
              <div className="mb-4 flex items-start justify-between">
                <module.icon className="h-8 w-8 text-primary" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-border px-2 py-1">
                  {module.tag}
                </span>
              </div>
              
              <h3 className="mb-2 font-mono text-lg font-bold uppercase tracking-wide">{module.name}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{module.description}</p>
              
              <ul className="space-y-1">
                {module.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="h-1 w-1 bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 h-8 w-8 border-t border-l border-primary/30 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Technical note */}
        <div className="mt-12 border border-border bg-card/50 p-6">
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">$</span> All modules are written in Go, containerized, and include Terraform/Pulumi provisioning scripts. 
            Compatible with Kubernetes, ECS, Cloud Run, or standalone deployment.
          </p>
        </div>
      </div>
    </section>
  )
}
