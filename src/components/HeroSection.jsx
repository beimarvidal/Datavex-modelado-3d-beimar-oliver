import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center px-6 pt-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-5 py-2 text-sm font-bold text-cyan-300">
            Leyenda oriental · Espíritu del agua
          </p>

          <h1 className="text-7xl font-black leading-none md:text-9xl">
            EL{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-emerald-400 to-teal-500 bg-clip-text text-transparent">
              JICHI
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-200 md:text-2xl">
            Un ser ancestral de las aguas, guardián de ríos, lagunas y
            madrejones. Su presencia protege el equilibrio natural del oriente
            boliviano.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#historia" className="rounded-2xl bg-cyan-300 px-8 py-4 font-black text-slate-950">
              Explorar historia
            </a>

            <a href="#modelo" className="rounded-2xl border border-cyan-300/30 bg-white/5 px-8 py-4 font-black text-white">
              Ver modelo 3D
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}