import { motion } from "framer-motion"
import { Eye, Sparkles, Waves, Skull } from "lucide-react"

const powers = [
  {
    icon: Waves,
    title: "Guardián del río",
    text: "Habita en aguas profundas y aparece entre reflejos dorados.",
  },
  {
    icon: Sparkles,
    title: "Escamas de oro",
    text: "Su cuerpo brilla como metal precioso bajo la oscuridad.",
  },
  {
    icon: Eye,
    title: "Ilusión",
    text: "Engaña la mente de quienes se acercan demasiado.",
  },
  {
    icon: Skull,
    title: "Transformación",
    text: "Puede adoptar formas humanas para atraer a sus víctimas.",
  },
]

export default function PowersSection() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 font-bold text-yellow-300">Poderes</p>
          <h2 className="text-5xl font-black md:text-7xl">
            Lo que hace temible al Jichi
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {powers.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-[2rem] border border-yellow-400/20 bg-black/45 p-7 backdrop-blur-xl"
              >
                <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-yellow-400 text-slate-950">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}