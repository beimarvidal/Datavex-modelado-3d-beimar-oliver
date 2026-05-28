import { motion } from "framer-motion"
import { Code2, Cuboid } from "lucide-react"

const team = [
  {
    name: "Beimar Vidal Copa Laura",
    role: "Desarrollo de Landing Page",
    icon: Code2,
  },
  {
    name: "Oliver Gonzales Morales",
    role: "Modelado 3D en Blender",
    icon: Cuboid,
  },
]

export default function TeamSection() {
  return (
    <section id="equipo" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-slate-950/45 p-8 backdrop-blur-xl">
        <div className="mb-14 text-center">
          <p className="mb-4 font-bold text-yellow-300">Equipo</p>
          <h2 className="text-4xl font-black md:text-6xl">
            Integrantes del proyecto
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {team.map((member, index) => {
            const Icon = member.icon

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: index === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl"
              >
                <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-yellow-400 text-slate-950">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-black">{member.name}</h3>
                <p className="mt-3 text-yellow-300">{member.role}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}