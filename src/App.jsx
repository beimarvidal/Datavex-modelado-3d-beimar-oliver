import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import StorySection from "./components/StorySection"
import PowersSection from "./components/PowersSection"
import ModelSection from "./components/ModelSection"
import VisualDetailsSection from "./components/VisualDetailsSection"
import TeamSection from "./components/TeamSection"
import Footer from "./components/Footer"
import Scene3D from "./components/Scene3D"
import SmoothScroll from "./components/SmoothScroll"
import CinematicScrollSection from "./components/CinematicScrollSection"
import LegendSection from "./components/LegendSection"

function App() {
  return (
      
    <main className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <div className="fixed inset-0 z-0">
        <SmoothScroll />
        <Scene3D />
      </div>

      <div className="fixed inset-0 z-10 bg-slate-950/35" />

      <div className="relative z-20">
        <Navbar />
        <HeroSection />
        <LegendSection />
        <PowersSection />
        <ModelSection />
        <VisualDetailsSection />
        <TeamSection />
        <Footer />
      </div>
    </main>
  )
}

export default App