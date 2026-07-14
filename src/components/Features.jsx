import SectionHeading from './Section.jsx'
import { ICONS } from './icons.js'
import { FEATURES } from '../data.js'

export default function Features() {
  return (
    <section className="bg-sand/40 py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why patients choose us"
          title="Care built around you, not the clock"
          intro="We keep appointments unrushed, technology modern, and pricing transparent — so trust is earned, not assumed."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => {
            const Icon = ICONS[f.icon]
            return (
              <div
                key={f.title}
                className="card p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-soft text-forest">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
