import { Canvas } from "@react-three/fiber"
import { Float, OrbitControls, Stars } from "@react-three/drei"

function Object3D() {
  return (
    <Float speed={2} rotationIntensity={1.4} floatIntensity={2}>
      <mesh scale={1.7}>
        <torusKnotGeometry args={[1.1, 0.34, 180, 32]} />
        <meshStandardMaterial color="#22d3ee" metalness={0.9} roughness={0.15} />
      </mesh>
    </Float>
  )
}

export default function Scene3D() {
  return (
    <Canvas
      className="h-screen w-screen"
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
    >
      <color attach="background" args={["#021b1a"]} />

      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={2.4} />
      <pointLight position={[-4, -2, 4]} intensity={3} color="#22d3ee" />

      <Stars radius={100} depth={70} count={5000} factor={4} fade speed={1} />

      <group position={[2.3, 0, 0]}>
        <Object3D />
      </group>

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} />
    </Canvas>
  )
}