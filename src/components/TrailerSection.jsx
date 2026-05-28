import { motion } from "framer-motion"
import { Eye, Waves, Sparkles, Leaf } from "lucide-react"

const scenes = [
  {
    number: "01",
    title: "El río despierta",
    text: "En la profundidad del agua, una presencia antigua comienza a moverse silenciosamente.",
    icon: Waves,
  },
  {
    number: "02",
    title: "El brillo del agua",
    text: "El Jichi aparece entre reflejos turquesa, niebla y vegetación acuática.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "El guardián invisible",
    text: "Rara vez se deja ver; su presencia anuncia que el agua debe ser respetada.",
    icon: Eye,
  },
  {
    number: "04",
    title: "El abandono",
    text: "Si el entorno es destruido, el Jichi se marcha y el agua comienza a desaparecer.",
    icon: Leaf,
  },
]

export default function TrailerSection() {
  return (
    <section id="trailer" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-4xl">
          <p className="mb-4 font-bold text-cyan-300">Tráiler narrativo</p>

          <h2 className="text-5xl font-black leading-tight md:text-7xl">
            Una leyenda contada por escenas
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300 md:text-xl">
            El recorrido visual muestra el vínculo entre el Jichi, el agua y el
            respeto por la naturaleza.
          </p>
        </div>

        <div className="grid gap-6">
          {scenes.map((scene, index) => {
            const Icon = scene.icon

            return (
              <motion.article
                key={scene.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[#021b1a]/60 p-8 backdrop-blur-xl md:p-10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/15 via-transparent to-emerald-400/10" />

                <div className="relative z-10 grid gap-8 md:grid-cols-[0.25fr_1fr_0.2fr] md:items-center">
                  <p className="text-6xl font-black text-cyan-300/40 md:text-8xl">
                    {scene.number}
                  </p>

                  <div>
                    <h3 className="text-3xl font-black md:text-5xl">
                      {scene.title}
                    </h3>

                    <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                      {scene.text}
                    </p>
                  </div>

                  <div className="grid h-20 w-20 place-items-center rounded-3xl bg-cyan-300 text-slate-950 md:ml-auto">
                    <Icon size={38} />
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}