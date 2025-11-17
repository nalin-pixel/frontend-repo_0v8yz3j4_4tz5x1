import { useState } from 'react'

export default function Booking() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', package: '', date: '', participants: 1, notes: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${base}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, participants: Number(form.participants) })
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', package: '', date: '', participants: 1, notes: '' })
      } else {
        setStatus(data.detail || 'error')
      }
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-900">Book your ocean session</h2>
        <p className="mt-2 text-sky-700/80 max-w-2xl">Fast, clean, and mobile-friendly booking for classes, events, and private parties.</p>
        <form onSubmit={submit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 bg-gradient-to-b from-sky-50 to-white p-6 rounded-2xl border border-sky-100 shadow-sm">
          <input required name="name" value={form.name} onChange={handleChange} placeholder="Full name" className="rounded-xl border border-sky-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400" />
          <input required name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" className="rounded-xl border border-sky-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400" />
          <input required name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="rounded-xl border border-sky-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400" />
          <select required name="package" value={form.package} onChange={handleChange} className="rounded-xl border border-sky-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400">
            <option value="">Select package</option>
            <option value="starter-surf">Starter Surf</option>
            <option value="wave-master">Wave Master</option>
            <option value="aura-elite">Aura Elite</option>
            <option value="private-party">Private Party</option>
          </select>
          <input required name="date" type="date" value={form.date} onChange={handleChange} className="rounded-xl border border-sky-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400" />
          <input required name="participants" type="number" min="1" max="20" value={form.participants} onChange={handleChange} className="rounded-xl border border-sky-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400" />
          <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Notes (optional)" className="md:col-span-2 rounded-xl border border-sky-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400" />
          <button type="submit" className="md:col-span-2 inline-flex items-center justify-center rounded-xl bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 font-semibold shadow transition">
            {status === 'loading' ? 'Booking...' : 'Confirm Booking'}
          </button>
          {status === 'success' && (
            <div className="md:col-span-2 text-green-700 bg-green-50 border border-green-200 px-4 py-3 rounded-xl">Booking confirmed! Check your email for details.</div>
          )}
          {status && status !== 'success' && status !== 'loading' && (
            <div className="md:col-span-2 text-red-700 bg-red-50 border border-red-200 px-4 py-3 rounded-xl">{String(status)}</div>
          )}
        </form>
      </div>
    </section>
  )
}
