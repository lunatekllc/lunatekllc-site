import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden border-4 border-foreground p-12 md:p-16">
            <div className="absolute -top-12 -right-12 h-48 w-48 bg-primary" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full border-4 border-primary" />

            <div className="relative z-10 max-w-2xl">
              <div className="mb-6 inline-block border-l-4 border-primary pl-4">
                <span className="text-sm font-bold uppercase tracking-wider text-primary">Get Started</span>
              </div>

              <h2 className="text-balance text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
                Ready to
                <br />
                <span className="text-primary">Build?</span>
              </h2>

              <p className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
                Discuss your project. From idea to production faster than you thought possible.
              </p>

              <div className="mt-8">
                <a
                  href="mailto:devteam@lunatekllc.dev"
                  className="inline-flex items-center text-2xl font-bold uppercase text-white hover:underline"
                >
                  devteam@lunatekllc.dev
                  <ArrowRight className="ml-3 h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <footer className="mt-16 flex flex-col items-center gap-8 border-t-4 border-foreground pt-12 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center bg-primary">
                <span className="font-mono text-2xl font-bold text-background">L</span>
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
