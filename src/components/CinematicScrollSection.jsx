import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const scenes = [
  {
    tag: "Escena 01",
    title: "El río guarda un secreto",
    text: "Bajo la corriente, una criatura antigua despierta entre reflejos dorados.",
  },
  {
    tag: "Escena 02",
    title: "La ilusión comienza",
    text: "El Jichi no ataca primero: observa, imita y confunde la mente de quienes se acercan.",
  },
  {
    tag: "Escena 03",
    title: "El brillo del oro",
    text: "Sus escamas iluminan la oscuridad como si el río escondiera un tesoro vivo.",
  },
]

export default function CinematicScrollSection() {
  return (
    <section className="relative">
      {scenes.map((scene, index) => (
        <SceneCard key={scene.title} scene={scene} index={index} />
      ))}
    </section>
  )
}

function SceneCard({ scene, index }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [120, -120])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.05, 0.92])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.25, 1, 1, 0.25])

  return (
    <section ref={ref} className="relative flex min-h-screen items-center px-6 py-24">
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-6 rounded-[2.5rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/20 via-black/70 to-cyan-950/50 backdrop-blur-xl"
      />

      <motion.div
        style={{ y }}
        className={`relative z-10 mx-auto max-w-7xl ${
          index % 2 === 0 ? "text-left" : "text-right"
        }`}
      >
        <p className="mb-5 text-lg font-black uppercase tracking-[0.4em] text-yellow-300">
          {scene.tag}
        </p>

        <h2 className="max-w-5xl text-6xl font-black leading-none md:text-8xl">
          {scene.title}
        </h2>

        <p
          className={`mt-8 max-w-2xl text-xl leading-9 text-slate-200 ${
            index % 2 === 0 ? "" : "ml-auto"
          }`}
        >
          {scene.text}
        </p>
      </motion.div>
    </section>
  )
}