import SectionHeading from './Section.jsx'
import { STEPS } from '../data.js'

export default function Process() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading eyebrow="How it works" title="Your treatment journey" />

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line on large screens */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-ink/10 lg:block" />

          {STEPS.map((s) => (
            <div key={s.step} className="relative">
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-xl bg-forest font-display text-sm font-bold text-white shadow-soft">
                {s.step}
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
