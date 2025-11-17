import Hero from './components/Hero'
import Features from './components/Features'
import Packages from './components/Packages'
import Events from './components/Events'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'

function App() {
  return (
    <div className="min-h-screen bg-white text-sky-900">
      <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-xl">SurfAura</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-sky-800/80">
            <a href="#packages" className="hover:text-sky-900">Plans</a>
            <a href="#booking" className="hover:text-sky-900">Book</a>
            <a href="#events" className="hover:text-sky-900">Events</a>
            <a href="#gallery" className="hover:text-sky-900">Gallery</a>
          </nav>
          <a href="#booking" className="inline-flex items-center rounded-full bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 text-sm font-semibold shadow">Book Now</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Features />
        <Packages />
        <section id="events"><Events /></section>
        <section id="gallery"><Gallery /></section>
        <Testimonials />
        <Booking />
      </main>

      <footer className="py-10 bg-gradient-to-b from-white to-sky-50 border-t border-sky-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sky-800/80 text-sm">© {new Date().getFullYear()} SurfAura Beach Club</div>
          <div className="text-sm text-sky-800/80">Surf lessons • Rentals • Events • Wellness</div>
        </div>
      </footer>
    </div>
  )
}

export default App
