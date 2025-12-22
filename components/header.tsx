import { Server, Zap, Mail } from "lucide-react"
import Image from "next/image";

export function Header() {
  return (
    <>
      <aside className="fixed left-0 top-0 z-50 flex h-screen w-16 flex-col items-center gap-6 border-r border-border/40 bg-background/95 py-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="flex flex-col items-center gap-6">
          <a
            href="#services"
            className="group flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-all hover:bg-red-500/10 hover:text-red-500"
            title="Services"
          >
            <Server className="h-5 w-5" />
          </a>
          <a
            href="#process"
            className="group flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-all hover:bg-red-500/10 hover:text-red-500"
            title="Process"
          >
            <Zap className="h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="group flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-all hover:bg-red-500/10 hover:text-red-500"
            title="Contact"
          >
            <Mail className="h-5 w-5" />
          </a>
        </nav>
      </aside>

      <header className="fixed top-0 left-16 right-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-center px-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500">
              <Image src={"lunatekllc.png"} alt="Lunatek" width={150} height={150}/>
            </div>
            <span className="text-xl font-semibold text-foreground">Lunatek LLC</span>
          </div>
        </div>
      </header>
    </>
  )
}
