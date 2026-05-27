import HeroSection from "./components/HeroSection"
import ModelSection from "./components/ModelSection"
import FeaturesSection from "./components/FeaturesSection"
import TeamSection from "./components/TeamSection"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <HeroSection />
      <ModelSection />
      <FeaturesSection />
      <TeamSection />
      <Footer />
    </div>
  )
}

export default App