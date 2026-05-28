import Lenis from "lenis"
import { useEffect } from "react"

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return null
}