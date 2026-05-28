import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import StorySection from "./components/StorySection"
import LegendSection from "./components/LegendSection"
import CinematicScrollSection from "./components/CinematicScrollSection"
import TrailerSection from "./components/TrailerSection"
import PowersSection from "./components/PowersSection"
import ModelSection from "./components/ModelSection"
import VisualDetailsSection from "./components/VisualDetailsSection"
import TeamSection from "./components/TeamSection"
import Footer from "./components/Footer"
import Scene3D from "./components/Scene3D"
import SmoothScroll from "./components/SmoothScroll"
import LoaderScreen from "./components/LoaderScreen"
import CustomCursor from "./components/CustomCursor"
import AmbientMusic from "./components/AmbientMusic"


import CreativeProcessSection from "./components/CreativeProcessSection"
function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#021b1a] text-white">
      
      <LoaderScreen />
      <SmoothScroll />
      <CustomCursor />
      <AmbientMusic />

      <div className="fixed inset-0 z-0">
        <Scene3D />
      </div>

      <div className="fixed inset-0 z-10 bg-[#021b1a]/45" />

      <div className="relative z-20">
        <Navbar />
        <HeroSection />
        <LegendSection />
        <CreativeProcessSection />
        <TrailerSection />
        <PowersSection />
        <ModelSection />
        <TeamSection />
        <Footer />
      </div>
    </main>
  )
}

export default App