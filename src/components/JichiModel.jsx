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

    // Movimiento flotante
    groupRef.current.position.y =
      -1 + Math.sin(time * 1.5) * 0.3

    // Movimiento serpiente izquierda/derecha
    groupRef.current.rotation.y =
      Math.sin(time * 0.8) * 0.6

    // Inclinación suave
    groupRef.current.rotation.z =
      Math.sin(time * 1.2) * 0.1

    // Movimiento adelante/atrás
    groupRef.current.position.x =
      Math.sin(time * 0.5) * 0.4

    // Respiración
    const pulse =
      1 + Math.sin(time * 2) * 0.03

    groupRef.current.scale.set(
      1 * pulse,
      1 * pulse,
      1 * pulse
    )
  })

  return (
    <group
      ref={groupRef}
      position={[0, -1.2, 0]}
      rotation={[0, Math.PI / 2, 0]}
    >
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload(jichiUrl)
