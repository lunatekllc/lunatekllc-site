import { Cloud, GitBranch, Workflow, Shield, Database, Rocket } from "lucide-react"

const services = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable architectures on AWS, GCP, Azure, Vercel",
    gradient: "from-primary to-secondary",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    description: "Automated deployment for reliable releases",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Workflow,
    title: "AI Development",
    description: "Rapid prototyping with expert refinement",
    gradient: "from-primary/80 to-secondary/80",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Infrastructure hardening and compliance",
    gradient: "from-secondary/80 to-primary/80",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Optimized architecture for scale",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Rocket,
    title: "MVP Scaling",
    description: "Prototype to production-ready",
    gradient: "from-secondary to-primary",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/10 to-transparent blur-3xl" />
        <div className="absolute top-1/4 right-0 h-[300px] w-[300px] rounded-full bg-gradient-to-l from-secondary/10 to-transparent blur-3xl" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="mb-16 flex items-start gap-8">
          <div className="hidden md:flex flex-col items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-gradient-to-br from-primary to-secondary" />
            <div className="h-[180px] w-1 bg-gradient-to-b from-primary via-secondary to-transparent rounded-full" />
          </div>
          <div className="max-w-2xl">
            <h2 className="text-balance text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl lg:text-6xl">
              End-to-End
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              From setup to production scaling, complete infrastructure control
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-card to-card/50 p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <div
                className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${service.gradient} opacity-30 blur-xl transition-all group-hover:opacity-50 group-hover:scale-125`}
              />
              <service.icon className="relative z-10 mb-6 h-10 w-10 text-primary" />
              <h3 className="relative z-10 mb-3 text-xl font-bold uppercase">{service.title}</h3>
              <p className="relative z-10 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
