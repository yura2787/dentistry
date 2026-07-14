import SectionHeading from './Section.jsx'
import SmartImage from './SmartImage.jsx'
import { DOCTORS } from '../data.js'

export default function Doctors() {
  return (
    <section id="doctors" className="py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Meet the doctors"
          title="Experienced hands, warm bedside manner"
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {DOCTORS.map((d) => (
            <article key={d.name} className="group text-center">
              <SmartImage
                src={d.photo}
                alt={d.name}
                className="aspect-[4/5] w-full rounded-3xl shadow-soft"
                imgClassName="transition-transform duration-500 group-hover:scale-105"
              />
              <h3 className="mt-6 font-display text-lg font-bold text-ink">{d.name}</h3>
              <p className="mt-1 text-sm font-semibold text-clay">{d.specialty}</p>
              <p className="mt-1 text-sm text-muted">{d.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
