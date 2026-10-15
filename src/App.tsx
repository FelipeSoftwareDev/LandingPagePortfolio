import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Location } from './components/Location'
import { Overview } from './components/Overview'
import { Residences } from './components/Residences'
import { SimulationNoticeProvider } from './components/SimulationNotice'
import { Wellness } from './components/Wellness'

function App() {
  return (
    <SimulationNoticeProvider>
      <Header />

      <main className="w-full bg-surface pt-20">
        <Hero />
        <Overview />
        <Residences />
        <Wellness />
        <Location />
        <Contact />
      </main>

      <Footer />
    </SimulationNoticeProvider>
  )
}

export default App
