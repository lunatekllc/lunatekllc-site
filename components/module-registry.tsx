import { Upload, Shield, Database, Workflow, Server, Lock } from "lucide-react"

const modules = [
  {
    icon: Upload,
    name: "Cloud-Agnostic Storage Hub",
    tag: "Vendor-Free",
    description: "Unified storage interface that runs on any cloud. S3, GCS, Azure Blob, or on-prem—swap providers without touching your code.",
    features: ["Zero vendor lock-in", "Streaming uploads", "CDN integration"],
    large: true,
  },
  {
    icon: Shield,
    name: "Auth-Hardened Edge Gateway",
    tag: "Zero-Trust",
    description: "Enterprise-grade API gateway with built-in authentication, rate limiting, and request validation at the edge.",
    features: ["RBAC & MFA ready", "DDoS protection"],
    large: false,
  },
  {
    icon: Database,
    name: "Resilient Data Pipeline",
    tag: "High-Velocity",
    description: "Industrial-strength data processing with automatic retries, dead-letter queues, and full observability.",
    features: ["Backpressure handling", "Fan-out patterns"],
    large: false,
  },
  {
    icon: Workflow,
    name: "Event Orchestration Engine",
    tag: "Deterministic",
    description: "Cloud-agnostic event streaming with exactly-once delivery semantics and schema enforcement.",
    features: ["Guaranteed delivery", "Schema registry"],
    large: false,
  },
  {
    icon: Server,
    name: "Compute Fabric",
    tag: "Portable",
    description: "Containerized workload orchestration that deploys identically across Kubernetes, ECS, or Cloud Run.",
    features: ["Auto-scaling", "Health monitoring"],
    large: false,
  },
  {
    icon: Lock,
    name: "Secrets & Config Vault",
    tag: "Encrypted",
    description: "Centralized configuration management with automatic rotation, audit trails, and access policies.",
    features: ["Envelope encryption", "Version control"],
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
            <span className="uppercase tracking-widest text-primary">Infrastructure Modules</span>
          </div>
          <h2 className="text-balance text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
            High-Velocity
            <br />
            <span className="text-primary">Infrastructure Modules</span>
          </h2>
          <p className="mt-6 text-pretty text-lg text-muted-foreground">
            Pre-fabricated structural components for your SaaS. Like buying a steel frame for a skyscraper—solid, proven, and ready for your custom business logic on top.
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
            <span className="text-primary">$</span> All modules are containerized deterministic engines with Terraform/Pulumi provisioning scripts. 
            Deploy identically to AWS, GCP, Azure, or on-premises infrastructure.
          </p>
        </div>
      </div>
    </section>
  )
}
