import { useEffect, useState } from 'react'

export default function Events() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || ''
        const res = await fetch(`${base}/api/events`)
        const data = await res.json()
        setEvents(data.events || [])
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-900">Beach events & festivals</h2>
        <p className="mt-2 text-sky-700/80 max-w-2xl">Seasonal fests, wellness mornings, and high-energy beach sports — plan your calendar.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(ev => (
            <div key={ev.id} className="rounded-2xl bg-white p-6 border border-sky-100 shadow-sm hover:shadow-md transition">
              <div className="text-sky-700 text-sm">{ev.date} • {ev.time}</div>
              <h3 className="mt-1 text-xl font-semibold text-sky-900">{ev.title}</h3>
              <span className="mt-2 inline-flex w-fit items-center rounded-full bg-sky-600/10 text-sky-700 px-3 py-1 text-xs font-medium">{ev.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
