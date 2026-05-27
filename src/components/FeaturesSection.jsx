import { motion } from "framer-motion"
import { Box, MousePointer2, Sparkles, Zap } from "lucide-react"

const features = [
  {
    icon: Box,
    title: "Modelo 3D",
    text: "Diseñado en Blender y preparado para la web.",
  },
  {
    icon: MousePointer2,
    title: "Interacción",
    text: "Rotación, zoom y exploración del objeto 3D.",
  },
  {
    icon: Sparkles,
    title: "Diseño moderno",
    text: "Landing page con estilo futurista y efectos visuales.",
  },
  {
    icon: Zap,
    title: "Optimización",
    text: "Preparado para cargar modelos GLB de forma eficiente.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-cyan-300">Características</p>
          <h2 className="text-4xl font-black md:text-6xl">
            Experiencia visual interactiva
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl hover:border-cyan-400/40"
              >
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-cyan-400 text-slate-950">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-slate-300">{item.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}