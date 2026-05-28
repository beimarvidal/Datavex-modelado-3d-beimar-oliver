import { motion } from "framer-motion"
import { Code2, Cuboid } from "lucide-react"

const team = [
  {
    name: "Beimar Vidal Copa Laura",
    role: "Frontend Developer · Landing Page",
    avatar:
      "https://api.dicebear.com/8.x/adventurer/svg?seed=Beimar&backgroundColor=0f766e",
    icon: Code2,
    color: "from-cyan-400 to-emerald-500",
  },
  {
    name: "Oliver Gonzales Morales",
    role: "3D Artist · Blender Modeling",
    avatar:
      "https://api.dicebear.com/8.x/adventurer/svg?seed=Oliver&backgroundColor=14532d",
    icon: Cuboid,
    color: "from-emerald-400 to-cyan-500",
  },
]

export default function TeamSection() {
  return (
    <section id="equipo" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 font-black uppercase tracking-[0.3em] text-cyan-300">
            Equipo
          </p>

          <h2 className="text-5xl font-black md:text-7xl">
            Creadores del proyecto
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Desarrollo colaborativo entre diseño web cinematográfico y modelado
            3D inspirado en la leyenda del Jichi.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {team.map((member, index) => {
            const Icon = member.icon

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[#021b1a]/70 p-8 backdrop-blur-2xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-10 transition-opacity duration-500 group-hover:opacity-20`}
                />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-cyan-400 blur-2xl opacity-30" />

                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="relative h-36 w-36 rounded-full border-4 border-cyan-300/40 bg-[#021b1a] object-cover shadow-2xl"
                    />
                  </div>

                  <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950 shadow-xl">
                    <Icon size={32} />
                  </div>

                  <h3 className="mt-6 text-3xl font-black text-white">
                    {member.name}
                  </h3>

                  <p className="mt-3 text-lg font-semibold text-cyan-300">
                    {member.role}
                  </p>

                  <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

                  <p className="mt-6 leading-8 text-slate-300">
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}