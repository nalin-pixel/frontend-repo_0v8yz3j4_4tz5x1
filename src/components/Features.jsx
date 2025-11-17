export default function Features() {
  const items = [
    { title: 'Surf Training', desc: 'Beginner to pro-level coaching with certified instructors.', icon: '🏄‍♂️' },
    { title: 'Equipment Rental', desc: 'Premium boards, wetsuits, and safety gear on demand.', icon: '🛟' },
    { title: 'Beach Sports', desc: 'Volleyball, paddle, jet ski, and adrenaline-packed games.', icon: '🏐' },
    { title: 'Music Fests', desc: 'Sunset DJ sets and seasonal festivals on the sand.', icon: '🎶' },
    { title: 'Sunrise Yoga', desc: 'Mindful flow by the waves to start your day right.', icon: '🧘‍♀️' },
    { title: 'Private Parties', desc: 'Book cabanas, catering, and VIP beach experiences.', icon: '🎉' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-900">Everything for your ocean vibe</h2>
        <p className="mt-2 text-sky-700/80 max-w-2xl">From your first wave to full-on beach festivals, we’ve got a plan for every mood.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl bg-white p-6 shadow-sm border border-sky-100/60 hover:shadow-md transition">
              <div className="text-3xl">{it.icon}</div>
              <h3 className="mt-3 text-xl font-semibold text-sky-900">{it.title}</h3>
              <p className="mt-1 text-sky-700/80 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
