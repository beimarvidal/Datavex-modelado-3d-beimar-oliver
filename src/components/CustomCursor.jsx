import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", move)

    return () => {
      window.removeEventListener("mousemove", move)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed z-[9999] h-10 w-10 rounded-full bg-cyan-300/30 blur-xl"
      style={{
        left: position.x - 20,
        top: position.y - 20,
      }}
    />
  )
}