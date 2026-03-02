import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function CTASection() {
  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-primary/15 to-transparent blur-3xl" />
        <div className="absolute top-0 right-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-bl from-secondary/10 to-transparent blur-3xl" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 p-12 md:p-16">
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-bl from-primary/40 to-transparent blur-2xl" />
            <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-gradient-to-tr from-secondary/30 to-transparent blur-2xl" />

            <div className="relative z-10 max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-wider text-primary">Get Started</span>
              </div>

              <h2 className="text-balance text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
                Ready to
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">Build?</span>
              </h2>

              <p className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
                Discuss your project. From idea to production faster than you thought possible.
              </p>

              <div className="mt-8">
                <a
                  href="mailto:devteam@lunatekllc.dev"
                  className="group inline-flex items-center text-2xl font-bold uppercase bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:from-foreground hover:to-foreground transition-all"
                >
                  devteam@lunatekllc.dev
                  <ArrowRight className="ml-3 h-6 w-6 text-primary group-hover:text-foreground transition-colors group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          <footer className="mt-16 flex flex-col items-center gap-8 border-t border-border/50 pt-12 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                <Image src={"lunatekllc.png"} alt="Lunatek" width={150} height={150} className="rounded-lg"/>
              </div>
              <span className="text-xl font-bold uppercase">Lunatek LLC</span>
            </div>
            <p className="text-sm font-bold uppercase text-muted-foreground">© 2025 All Rights Reserved</p>
          </footer>
        </div>
      </div>
    </section>
  )
}
