import { Cloud, GitBranch, Workflow, Shield, Database, Rocket } from "lucide-react"

const services = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable architectures on AWS, GCP, Azure, Vercel",
    color: "bg-primary",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    description: "Automated deployment for reliable releases",
    color: "border-4 border-primary",
  },
  {
    icon: Workflow,
    title: "AI Development",
    description: "Rapid prototyping with expert refinement",
    color: "bg-foreground",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Infrastructure hardening and compliance",
    color: "rounded-full border-4 border-foreground",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Optimized architecture for scale",
    color: "bg-primary",
  },
  {
    icon: Rocket,
    title: "MVP Scaling",
    description: "Prototype to production-ready",
    color: "border-4 border-primary",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mb-16 flex items-start gap-8">
          <div className="hidden md:block h-[200px] w-2 bg-primary" />
          <div className="max-w-2xl">
            <h2 className="text-balance text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl lg:text-6xl">
              End-to-End
              <br />
              <span className="text-primary">Services</span>
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
              className="group relative overflow-hidden border-2 border-foreground p-8 transition-all hover:border-primary"
            >
              <div
                className={`absolute -top-8 -right-8 h-24 w-24 transition-all group-hover:scale-110 ${service.color}`}
              />
              <service.icon className="relative z-10 mb-6 h-10 w-10" />
              <h3 className="relative z-10 mb-3 text-xl font-bold uppercase">{service.title}</h3>
              <p className="relative z-10 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
