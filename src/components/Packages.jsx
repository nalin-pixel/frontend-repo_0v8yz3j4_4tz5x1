import { useEffect, useState } from 'react'

export default function Packages() {
  const [packages, setPackages] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || ''
        const res = await fetch(`${base}/api/packages`)
        const data = await res.json()
        setPackages(data.packages || [])
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [])

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-900">Surf plans made for you</h2>
        <p className="mt-2 text-sky-700/80 max-w-2xl">Flexible coaching and premium experiences. Choose your vibe and hit the waves.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map(p => (
            <div key={p.id} className="relative rounded-2xl bg-gradient-to-b from-sky-50 to-white border border-sky-100 p-6 shadow-sm hover:shadow-md transition">
              {p.badge && (
                <span className="absolute -top-3 left-4 inline-flex items-center rounded-full bg-sky-600 text-white px-3 py-1 text-xs shadow">
                  {p.badge}
                </span>
              )}
              <h3 className="text-xl font-semibold text-sky-900">{p.title}</h3>
              <p className="mt-1 text-sky-700/70 text-sm">{p.duration}</p>
              <div className="mt-4">
                <span className="text-3xl font-extrabold text-sky-900">${p.price}</span>
                <span className="text-sky-700/70 text-sm"> / person</span>
              </div>
              <ul className="mt-4 space-y-2">
                {p.features?.map((f, i) => (
                  <li key={i} className="text-sm text-sky-800/80">• {f}</li>
                ))}
              </ul>
              <a href="#booking" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 text-sm font-semibold shadow transition">
                Book {p.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
