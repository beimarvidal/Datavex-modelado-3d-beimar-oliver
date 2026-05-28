import { motion } from "framer-motion"

export default function VisualDetailsSection() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        {[
          "Ambiente nocturno de río",
          "Partículas doradas ilusorias",
          "Movimiento flotante y serpentino",
        ].map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.12 }}
            className="min-h-72 rounded-[2rem] border border-white/10 bg-gradient-to-br from-yellow-400/20 via-black/50 to-slate-950/80 p-8 backdrop-blur-xl"
          >
            <p className="text-sm font-bold text-yellow-300">
              Detalle visual 0{index + 1}
            </p>

            <h3 className="mt-8 text-4xl font-black">{item}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  )
}