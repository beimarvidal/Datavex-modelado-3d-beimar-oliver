import { motion } from "framer-motion"
import Scene3D from "./Scene3D"
import Navbar from "./Navbar"

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-slate-950">
      <Navbar />
      <Scene3D />

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl pt-24"
        >
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Proyecto de landing page + modelado 3D
          </p>

          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
            Experiencia web con{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              modelo 3D
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300 md:text-xl">
            Landing page interactiva desarrollada por Beimar Vidal Copa Laura,
            integrada con el modelado 3D realizado por Oliver Gonzales Morales.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#modelo" className="rounded-2xl bg-cyan-400 px-8 py-4 font-bold text-slate-950 hover:bg-cyan-300">
              Ver modelo 3D
            </a>
            <a href="#equipo" className="rounded-2xl border border-white/20 px-8 py-4 font-bold text-white hover:bg-white/10">
              Ver equipo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}