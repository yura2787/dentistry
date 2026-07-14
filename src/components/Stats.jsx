import { STATS } from '../data.js'

export default function Stats() {
  return (
    <section className="bg-forest text-white">
      <div className="container-x py-16">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
