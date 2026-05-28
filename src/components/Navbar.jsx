import { Waves } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-6 py-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/35 px-6 py-4 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-yellow-400 text-slate-950">
            <Waves size={22} />
          </div>

          <span className="text-lg font-black tracking-wide text-white">
            EL JICHI 3D
          </span>
        </div>

        <div className="hidden gap-8 text-sm font-semibold text-slate-300 md:flex">
          <a href="#inicio" className="hover:text-yellow-300">Inicio</a>
          <a href="#historia" className="hover:text-yellow-300">Historia</a>
          <a href="#modelo" className="hover:text-yellow-300">Modelo 3D</a>
          <a href="#equipo" className="hover:text-yellow-300">Equipo</a>
        </div>
      </nav>
    </header>
  )
}