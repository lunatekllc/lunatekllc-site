import { ArrowUpRight, Github, Sparkles, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Github,
    title: "GitHub Integration",
    description: "Import projects directly from your GitHub repositories",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Matching",
    description: "Smart recommendations based on your tech stack and skills",
  },
  {
    icon: Users,
    title: "Company Discovery",
    description: "Find companies looking for developers with your expertise",
  },
  {
    icon: Zap,
    title: "Live Resume",
    description: "Your projects become a dynamic, living portfolio",
  },
]

export function CaseStudySection() {
  return (
    <section id="case-study" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-primary/15 via-transparent to-transparent blur-2xl" />
      </div>

      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-16 flex items-start gap-8">
          <div className="hidden md:flex flex-col items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-gradient-to-br from-primary to-secondary" />
            <div className="h-[180px] w-1 bg-gradient-to-b from-primary via-secondary to-transparent" />
          </div>
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Featured Project</span>
            </div>
            <h2 className="text-balance text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Case
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">Study</span>
            </h2>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              Real projects, real results. See how we deliver value.
            </p>
          </div>
        </div>

        {/* Main Case Study Card */}
        <div className="relative mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-card to-primary/5">
            {/* Gradient accent corners */}
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-primary/40 to-transparent blur-2xl" />
            <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-gradient-to-tr from-secondary/30 to-transparent blur-2xl" />

            <div className="relative z-10 grid gap-8 p-8 md:p-12 lg:grid-cols-2 lg:gap-12">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-xl font-bold">Moonlight AI</span>
                </div>

                <h3 className="text-balance text-3xl font-bold leading-tight md:text-4xl">
                  Developer Recommendation Engine
                </h3>

                <p className="text-pretty text-muted-foreground leading-relaxed">
                  Moonlight AI revolutionizes how developers find their next opportunity. By analyzing your GitHub projects and technical skills, it creates a living resume that automatically matches you with companies looking for your exact expertise.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["Next.js", "AI/ML", "GitHub API", "PostgreSQL", "Vercel"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button asChild className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                    <a href="https://trymoonlightai.app" target="_blank" rel="noopener noreferrer">
                      Visit Project
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Content - Feature Grid */}
              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl border border-border/50 bg-background/50 p-5 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-primary/5"
                  >
                    <div className="absolute -top-6 -right-6 h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-transparent transition-transform group-hover:scale-150" />
                    <feature.icon className="relative z-10 mb-3 h-6 w-6 text-primary" />
                    <h4 className="relative z-10 mb-1 font-bold">{feature.title}</h4>
                    <p className="relative z-10 text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Stats Bar */}
            <div className="border-t border-primary/20 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 px-8 py-6 md:px-12">
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="text-center sm:text-left">
                  <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Live Resume</p>
                  <p className="text-sm text-muted-foreground">Dynamic portfolio from your code</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI Matching</p>
                  <p className="text-sm text-muted-foreground">Smart company recommendations</p>
                </div>
                <div className="text-center sm:text-right">
                  <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">GitHub Sync</p>
                  <p className="text-sm text-muted-foreground">Automatic project imports</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
