import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import jichiUrl from "../assets/models/jichi.glb?url"

export default function JichiModel() {
  const groupRef = useRef()
  const { scene } = useGLTF(jichiUrl)

  useFrame((state) => {
    const time = state.clock.elapsedTime

    if (!groupRef.current) return

    groupRef.current.position.y = -0.8 + Math.sin(time * 1.5) * 0.25
    groupRef.current.position.x = Math.sin(time * 0.5) * 0.25
    groupRef.current.rotation.y = Math.PI / 2 + Math.sin(time * 0.8) * 0.45
    groupRef.current.rotation.z = Math.sin(time * 1.2) * 0.08

    const pulse = 1 + Math.sin(time * 2) * 0.03

    groupRef.current.scale.set(
      0.5 * pulse,
      0.5 * pulse,
      0.5 * pulse
    )
  })

  return (
    <group ref={groupRef} position={[0, -0.8, 0]}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload(jichiUrl)