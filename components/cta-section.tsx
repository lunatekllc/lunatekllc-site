import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] bg-primary/5 blur-[100px]" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="border-2 border-primary bg-primary/5 p-12 md:p-16">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-3 border border-primary/50 bg-background px-4 py-2 font-mono text-xs">
                <div className="h-2 w-2 bg-primary animate-pulse" />
                <span className="uppercase tracking-widest text-primary">Provision Your Infrastructure</span>
              </div>

              <h2 className="text-balance text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
                Ready to Scale
                <br />
                <span className="text-primary">Your Prototype?</span>
              </h2>

              <p className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
                Stop fighting brittle code. Get deterministic, Go-powered infrastructure that scales with your business.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="group font-mono uppercase tracking-wider">
                  <a href="mailto:devteam@lunatekllc.dev">
                    Start Assessment
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-mono uppercase tracking-wider border-primary/50 hover:bg-primary/10">
                  <a href="#modules">
                    View Modules
                  </a>
                </Button>
              </div>

              <p className="mt-8 font-mono text-sm text-muted-foreground">
                <span className="text-primary">$</span> devteam@lunatekllc.dev
              </p>
            </div>
          </div>

          <footer className="mt-16 flex flex-col items-center gap-8 border-t border-border pt-12 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center border border-primary bg-primary/10">
                <Image src={"lunatekllc.png"} alt="Lunatek" width={150} height={150}/>
              </div>
              <span className="font-mono text-lg font-bold uppercase tracking-wider">Lunatek LLC</span>
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">© 2025 All Rights Reserved</p>
          </footer>
        </div>
      </div>
    </section>
  )
}
