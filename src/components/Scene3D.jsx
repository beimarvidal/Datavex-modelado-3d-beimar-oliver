import { Canvas } from "@react-three/fiber"
import { Float, OrbitControls, Stars } from "@react-three/drei"

function Object3D() {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh>
        <torusKnotGeometry args={[1.1, 0.35, 180, 32]} />
        <meshStandardMaterial color="#22d3ee" metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  )
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 5, 5]} intensity={2} />
        <pointLight position={[-4, -2, 4]} intensity={2} color="#38bdf8" />

        <Stars radius={80} depth={50} count={2500} factor={4} fade speed={1} />

        <Object3D />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  )
}