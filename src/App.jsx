import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import TrustBar from './components/TrustBar.jsx'
import Features from './components/Features.jsx'
import Services from './components/Services.jsx'
import BeforeAfter from './components/BeforeAfter.jsx'
import Doctors from './components/Doctors.jsx'
import Testimonials from './components/Testimonials.jsx'
import Stats from './components/Stats.jsx'
import Process from './components/Process.jsx'
import Pricing from './components/Pricing.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <Services />
        <BeforeAfter />
        <Doctors />
        <Testimonials />
        <Stats />
        <Process />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
