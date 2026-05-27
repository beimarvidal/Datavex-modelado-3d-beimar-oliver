import { Box } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-6 py-4 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400 text-slate-950">
            <Box size={22} />
          </div>
          <span className="text-lg font-black tracking-wide text-white">
            DATAVEX 3D
          </span>
        </div>

        <div className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#inicio" className="hover:text-cyan-300">Inicio</a>
          <a href="#modelo" className="hover:text-cyan-300">Modelo 3D</a>
          <a href="#equipo" className="hover:text-cyan-300">Equipo</a>
        </div>
      </nav>
    </header>
  )
}