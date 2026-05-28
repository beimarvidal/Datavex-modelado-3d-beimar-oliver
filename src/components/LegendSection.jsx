import { motion } from "framer-motion"

export default function LegendSection() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-cyan-300/20 bg-[#021b1a]/70 backdrop-blur-2xl">

        <div className="grid lg:grid-cols-2">

          {/* IMAGEN */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-full min-h-[100px] overflow-hidden"
          >
            <img
              src="/src/assets/jichi-legend.jpg"
              alt="Leyenda del Jichi"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#021b1a]" />

            <div className="absolute inset-0 bg-cyan-400/10 mix-blend-screen" />
          </motion.div>

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center p-8 md:p-16"
          >
            <p className="mb-5 font-black uppercase tracking-[0.3em] text-cyan-300">
              La Leyenda
            </p>

            <h2 className="text-5xl font-black leading-tight md:text-7xl">
              El espíritu ancestral de las aguas
            </h2>

            <p className="mt-10 text-lg leading-9 text-slate-300 md:text-xl">
              Los antiguos pueblos de la llanura creían que el agua era un
              regalo divino y que existía un ser encargado de protegerla. Ese
              ser era el Jichi.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-300 md:text-xl">
              Habitaba en lagunas y madrejones profundos. Su cuerpo, descrito
              como una mezcla entre serpiente y saurio, permanecía oculto bajo
              el agua y confundido entre reflejos y vegetación acuática.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-300 md:text-xl">
              Según la tradición, cuando las personas destruían la naturaleza o
              hacían mal uso del agua, el Jichi abandonaba el lugar y el agua
              comenzaba a desaparecer lentamente.
            </p>

            <div className="mt-12 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-6 backdrop-blur-xl">
              <p className="text-lg italic leading-8 text-cyan-100">
                “No hay que hacer mal uso de las aguas, porque el Jichi se
                resiente y puede desaparecer.”
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}