export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526483360412-f4dbaf036963?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1470115636492-6d2b56f9146e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500043357865-c6b8827edf36?q=80&w=1200&auto=format&fit=crop',
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-900">Moments from the shore</h2>
        <p className="mt-2 text-sky-700/80 max-w-2xl">Surf snapshots, sun-drenched vibes, and festival energy from our beach.</p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <img key={i} src={src} alt="SurfAura" className="h-40 md:h-56 w-full object-cover rounded-xl shadow-sm" />
          ))}
        </div>
      </div>
    </section>
  )
}
