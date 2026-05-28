import { motion } from "framer-motion"

export default function LegendSection() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-yellow-400/20 bg-black/45 p-10 backdrop-blur-xl md:p-16">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="mb-5 font-black uppercase tracking-[0.3em] text-yellow-300">
            La Leyenda
          </p>

          <h2 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            El espíritu ancestral que protegía las aguas
          </h2>

          <p className="mt-10 max-w-4xl text-lg leading-9 text-slate-300 md:text-xl">
            Los antiguos pueblos de la llanura creían que el agua era un regalo
            divino y que existía un ser encargado de protegerla. Ese ser era el
            Jichi.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-300 md:text-xl">
            Habitaba en lagunas, charcos y madrejones profundos. Su cuerpo,
            descrito como una mezcla entre serpiente y saurio, permanecía oculto
            bajo el agua, confundido entre reflejos y vegetación acuática.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-300 md:text-xl">
            Según la tradición, cuando las personas dañaban las aguas o destruían
            la naturaleza de su entorno, el Jichi abandonaba el lugar y el agua
            comenzaba a desaparecer lentamente.
          </p>

          <div className="mt-12 border-l-4 border-yellow-400 pl-6">
            <p className="text-lg italic leading-8 text-yellow-100">
              “No hay que hacer mal uso de las aguas, porque el Jichi se resiente
              y puede desaparecer.”
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}