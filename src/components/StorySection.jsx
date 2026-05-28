import { motion } from "framer-motion"

export default function StorySection() {
  return (
    <section id="historia" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-black/45 p-8 backdrop-blur-xl md:p-14">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 font-bold text-yellow-300">Historia</p>

          <h2 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            La criatura que dormía bajo el río
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-9 text-slate-300 md:text-xl">
            El Jichi era una serpiente mítica que vivía en las profundidades de
            los ríos. Sus escamas brillaban como oro bajo la luz del agua, y
            quienes lo veían quedaban atrapados por una ilusión imposible de
            distinguir de la realidad.
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-9 text-slate-300 md:text-xl">
            La leyenda cuenta que podía tomar la forma de quienes se acercaban.
            Primero los confundía, luego los llamaba, y finalmente desaparecían
            en el río sin dejar rastro.
          </p>
        </motion.div>
      </div>
    </section>
  )
}