import { motion } from "framer-motion"
import { Box, MousePointer2, Sparkles, Zap } from "lucide-react"

const features = [
  {
    icon: Box,
    title: "Criatura mítica",
    text: "Representación del Jichi como serpiente legendaria de los ríos.",
  },
  {
    icon: Sparkles,
    title: "Escamas doradas",
    text: "Diseño visual inspirado en reflejos de oro y agua.",
  },
  {
    icon: MousePointer2,
    title: "Interacción 3D",
    text: "El usuario podrá observar, rotar y explorar el modelo.",
  },
  {
    icon: Zap,
    title: "Ambiente ilusorio",
    text: "Efectos visuales para transmitir misterio, atracción y fantasía.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-slate-950/45 p-8 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 font-bold text-yellow-300">Características</p>
          <h2 className="text-4xl font-black md:text-6xl">
            Leyenda y experiencia visual
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
                className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl hover:border-yellow-400/40"
              >
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-yellow-400 text-slate-950">
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