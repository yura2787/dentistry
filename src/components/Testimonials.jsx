import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { TESTIMONIALS } from '../data.js'

export default function Testimonials() {
  const railRef = useRef(null)

  const scrollBy = (dir) => {
    const el = railRef.current
    if (!el) return
    const card = el.querySelector('[data-card]')
    const amount = card ? card.offsetWidth + 24 : 360
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section id="reviews" className="bg-sand/40 py-20 sm:py-24">
      <div className="container-x">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Patient reviews</p>
            <h2 className="h-display mt-3 text-4xl sm:text-[2.75rem]">
              Loved by patients of all ages
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white text-ink transition hover:border-ink/25"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white text-ink transition hover:border-ink/25"
              aria-label="Next reviews"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={railRef}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
        >
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              data-card
              className="card w-[85%] shrink-0 snap-start p-7 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="flex gap-0.5 text-clay">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/80">“{t.quote}”</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
