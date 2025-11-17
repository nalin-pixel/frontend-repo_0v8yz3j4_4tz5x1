import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-gradient-to-b from-cyan-100 to-blue-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-sky-900/10 to-white/60 pointer-events-none" />
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col items-start justify-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-sky-700 shadow"> 
          🌊 Premium Surf & Beach Experiences
        </span>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-sky-900 drop-shadow-sm">
          SurfAura Beach Club
        </h1>
        <p className="mt-4 max-w-2xl text-sky-800/80 text-base md:text-lg">
          Ride world-class waves, join beach festivals, and book unforgettable ocean adventures.
          Coaching, rentals, yoga at sunrise, and private parties — all in one tropical playground.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#booking" className="inline-flex items-center justify-center rounded-full bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 text-sm font-semibold shadow transition">
            Book Your Session
          </a>
          <a href="#packages" className="inline-flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-sky-800 px-6 py-3 text-sm font-semibold shadow transition">
            View Surf Plans
          </a>
        </div>
      </div>
    </section>
  );
}
