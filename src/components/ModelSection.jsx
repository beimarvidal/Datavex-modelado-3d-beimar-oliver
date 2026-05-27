import { Box, Sparkles } from "lucide-react"

export default function ModelSection() {
  return (
    <section id="modelo" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            <Sparkles size={16} />
            Integración 3D
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Modelo 3D interactivo
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Esta sección está preparada para integrar el modelo 3D creado en
            Blender y exportado en formato GLB.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
          <div className="grid h-80 place-items-center rounded-2xl border border-cyan-400/20 bg-slate-900">
            <Box size={90} className="text-cyan-300" />
          </div>
        </div>
      </div>
    </section>
  )
}