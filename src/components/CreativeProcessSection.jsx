import { motion } from "framer-motion"

import conceptArt from "../assets/Jichi.png"
import blenderShot from "../assets/bender.jpeg"

export default function CreativeProcessSection() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 font-black uppercase tracking-[0.3em] text-emerald-300">
            Desarrollo Visual
          </p>

          <h2 className="text-5xl font-black md:text-7xl">
            Proceso Creativo
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">
            Desde el concepto artistico inicial hasta el modelado 3D final en Blender,
            el proyecto pasó por distintas etapas de diseño visual y construcción artística.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">

          {/* Concept Art */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-black/40 backdrop-blur-xl"
          >
            <img
              src={conceptArt}
              alt="Concept Art Jichi"
              className="h-[500px] w-full object-cover"
            />

            <div className="p-8">
              <p className="mb-3 font-black uppercase tracking-[0.2em] text-emerald-300">
                Concept Art
              </p>

              <h3 className="text-3xl font-black">
                Diseño inicial del personaje
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                El primer paso fue desarrollar un boceto conceptual del Jichi,
                definiendo su silueta, proporciones y estilo visual inspirado
                en criaturas mitológicas amazónicas.
              </p>
            </div>
          </motion.div>

          {/* Blender */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-black/40 backdrop-blur-xl"
          >
            <img
              src={blenderShot}
              alt="Blender Jichi"
              className="h-[500px] w-full object-cover"
            />

            <div className="p-8">
              <p className="mb-3 font-black uppercase tracking-[0.2em] text-cyan-300">
                Blender 3D
              </p>

              <h3 className="text-3xl font-black">
                Construcción del modelo
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                El personaje fue modelado y texturizado en Blender utilizando
                técnicas de modelado low poly estilizado para optimizar su
                integración en tiempo real dentro de la landing page.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}