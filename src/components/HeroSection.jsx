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
          <p className="mb-5 inline-flex rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-2 text-sm font-bold text-yellow-300">
            Leyenda amazónica · Experiencia 3D
          </p>

          <h1 className="text-7xl font-black leading-none md:text-9xl">
            EL{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
              JICHI
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-200 md:text-2xl">
            Una serpiente dorada que habitaba los ríos. Su brillo parecía oro,
            su presencia hipnotizaba y sus ilusiones atraían a quienes se
            acercaban demasiado.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a className="rounded-2xl bg-yellow-400 px-8 py-4 font-black text-slate-950">
              Explorar historia
            </a>

            <a className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 font-black text-white">
              Ver modelo 3D
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}