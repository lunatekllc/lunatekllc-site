import { Box, Layers, Workflow, Terminal, Mail } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <>
      <aside className="fixed left-0 top-0 z-50 flex h-screen w-16 flex-col items-center gap-6 border-r border-border bg-background py-6">
        <nav className="flex flex-col items-center gap-4">
          <a
            href="#philosophy"
            className="group flex h-10 w-10 items-center justify-center text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
            title="Philosophy"
          >
            <Layers className="h-5 w-5" />
          </a>
          <a
            href="#modules"
            className="group flex h-10 w-10 items-center justify-center text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
            title="Modules"
          >
            <Box className="h-5 w-5" />
          </a>
          <a
            href="#process"
            className="group flex h-10 w-10 items-center justify-center text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
            title="Process"
          >
            <Workflow className="h-5 w-5" />
          </a>
          <a
            href="#technical"
            className="group flex h-10 w-10 items-center justify-center text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
            title="Technical"
          >
            <Terminal className="h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="group flex h-10 w-10 items-center justify-center text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
            title="Contact"
          >
            <Mail className="h-5 w-5" />
          </a>
        </nav>
      </aside>

      <header className="fixed top-0 left-16 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="flex h-16 items-center justify-center px-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center border border-primary bg-primary/10">
              <Image src={"lunatekllc.png"} alt="Lunatek" width={150} height={150}/>
            </div>
            <span className="font-mono text-sm font-bold uppercase tracking-widest text-foreground">Lunatek LLC</span>
          </div>
        </div>
      </header>
    </>
  )
}
