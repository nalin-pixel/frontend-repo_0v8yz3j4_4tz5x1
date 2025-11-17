export default function Testimonials() {
  const items = [
    { name: 'Maya R.', quote: 'Caught my first wave with SurfAura! Instructors are amazing and the vibe is unreal.' },
    { name: 'Leo V.', quote: 'The weekend camp was elite — yoga, private coaching, and the after-party were perfect.' },
    { name: 'Aria K.', quote: 'Best beach club experience. Gear rentals were top-notch and the music fest rocked.' },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-900">Loved by our community</h2>
        <p className="mt-2 text-sky-700/80 max-w-2xl">Real voices from surfers, festival lovers, and ocean souls.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white p-6 border border-sky-100 shadow-sm">
              <p className="text-sky-900/90">“{t.quote}”</p>
              <div className="mt-4 text-sm font-semibold text-sky-700">— {t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
