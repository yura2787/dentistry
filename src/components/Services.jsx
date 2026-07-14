import { ArrowRight } from 'lucide-react'
import { ICONS } from './icons.js'
import { SERVICES } from '../data.js'

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">Services</p>
            <h2 className="h-display mt-3 text-4xl sm:text-[2.75rem]">
              Everything your smile needs, under one roof
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-muted lg:pb-2">
            From five-star checkups to full cosmetic transformations — one relaxed, expert team
            handles it all.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon]
            const tone =
              s.tone === 'clay' ? 'bg-clay text-white' : 'bg-forest text-white'
            return (
              <a
                key={s.title}
                href="#contact"
                className="card group flex flex-col p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
              >
                <span className={`grid h-12 w-12 place-items-center rounded-xl ${tone}`}>
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.body}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
