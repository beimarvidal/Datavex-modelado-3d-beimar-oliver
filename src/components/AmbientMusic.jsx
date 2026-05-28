import { useRef } from "react"

export default function AmbientMusic() {
  const audioRef = useRef(null)

  const startMusic = async () => {
    try {
      audioRef.current.volume = 0.1
      await audioRef.current.play()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <button
        onClick={startMusic}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-cyan-300 px-5 py-3 font-bold text-slate-950"
      >
        Activar sonido
      </button>

      <audio
        ref={audioRef}
        src="/audio/ambient.mp3"
        loop
      />
    </>
  )
}