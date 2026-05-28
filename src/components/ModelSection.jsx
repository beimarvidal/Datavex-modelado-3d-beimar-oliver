import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Sparkles } from "@react-three/drei"
import { Eye, Waves } from "lucide-react"
import JichiModel from "./JichiModel"

export default function ModelSection() {
  return (
    <section id="modelo" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300">
            <Waves size={16} />
            Modelo 3D interactivo
          </p>

          <h2 className="text-5xl font-black leading-tight md:text-7xl">
            Observa al Jichi en su forma digital
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300 md:text-xl">
            Explora la criatura desde distintos ángulos. Su cuerpo flota,
            respira y se mueve como una presencia viva dentro del río.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="relative h-[620px] overflow-hidden rounded-[2rem] border border-yellow-400/25 bg-black/45 backdrop-blur-xl">
            <div className="absolute left-6 top-6 z-10 rounded-full border border-yellow-400/30 bg-black/50 px-4 py-2 text-sm font-bold text-yellow-300">
              Vista interactiva
            </div>

            <Canvas camera={{ position: [0, 0, 3], fov: 35 }}>
              <ambientLight intensity={1.8} />
              <directionalLight position={[6, 6, 6]} intensity={3} />
              <pointLight position={[0, 0, 2]} intensity={5} color="#facc15" />
              <pointLight position={[-4, 2, 2]} intensity={2} color="#38bdf8" />

              <Sparkles count={180} scale={7} size={5} speed={0.8} color="#facc15" />

              <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.5}>
                <JichiModel />
              </Float>

              <Environment preset="night" />
              <OrbitControls enablePan={false} enableZoom={true} />
            </Canvas>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-white/10 bg-black/45 p-8 backdrop-blur-xl">
              <Eye className="mb-6 text-yellow-300" size={38} />
              <h3 className="text-3xl font-black">Presencia ilusoria</h3>
              <p className="mt-4 leading-8 text-slate-300">
                El modelo representa al Jichi como una entidad misteriosa:
                brillante, silenciosa y capaz de atraer con su movimiento.
              </p>
            </div>

            <div className="rounded-[2rem] border border-yellow-400/20 bg-yellow-400/10 p-8 backdrop-blur-xl">
              <h3 className="text-3xl font-black">Detalles visuales</h3>
              <ul className="mt-5 space-y-3 text-slate-300">
                <li>• Escamas con apariencia dorada</li>
                <li>• Movimiento flotante tipo criatura acuática</li>
                <li>• Partículas mágicas alrededor del cuerpo</li>
                <li>• Ambiente oscuro inspirado en ríos nocturnos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}