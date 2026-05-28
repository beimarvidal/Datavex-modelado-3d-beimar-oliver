import { motion } from "framer-motion"

export default function LoaderScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 2,
        delay: 2.5,
      }}
      className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center bg-[#021b1a]"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="text-center"
      >
        <h1 className="bg-gradient-to-r from-cyan-300 via-emerald-400 to-cyan-500 bg-clip-text text-7xl font-black text-transparent md:text-9xl">
          EL JICHI
        </h1>

        <p className="mt-6 text-xl tracking-[0.4em] text-cyan-200">
          EL GUARDIAN DESPIERTA
        </p>
      </motion.div>
    </motion.div>
  )
}