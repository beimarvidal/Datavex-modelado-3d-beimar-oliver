import { motion } from "framer-motion"
import { Eye, Leaf, Waves, Droplets } from "lucide-react"

const powers = [
  {
    icon: Waves,
    title: "Guardián del agua",
    text: "Protege lagunas, ríos y madrejones donde habita silenciosamente.",
  },
  {
    icon: Droplets,
    title: "Espíritu acuático",
    text: "Su presencia representa el valor sagrado del agua para los pueblos antiguos.",
  },
  {
    icon: Leaf,
    title: "Equilibrio natural",
    text: "Si el entorno es dañado, el Jichi abandona el lugar y el agua desaparece.",
  },
  {
    icon: Eye,
    title: "Presencia mítica",
    text: "Rara vez se deja ver, apareciendo entre reflejos desde el crepúsculo.",
  },
]

export default function PowersSection() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 font-bold text-cyan-300">Poderes</p>
          <h2 className="text-5xl font-black md:text-7xl">
            Lo que representa el Jichi
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
                className="rounded-[2rem] border border-cyan-300/20 bg-[#021b1a]/60 p-7 backdrop-blur-xl"
              >
                <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-cyan-300 text-slate-950">
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