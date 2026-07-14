import { Check } from 'lucide-react'
import SectionHeading from './Section.jsx'
import { PLANS } from '../data.js'

export default function Pricing() {
  return (
    <section id="pricing" className="bg-sand/40 py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Pricing"
          title="Transparent from the start"
          intro="Every plan includes a full consultation. Final pricing is always confirmed before treatment."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-center">
          {PLANS.map((plan) => {
            const popular = plan.popular
            return (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 ${
                  popular
                    ? 'bg-forest text-white shadow-card lg:scale-[1.04]'
                    : 'card'
                }`}
              >
                {popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-clay px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-soft">
                    Most Popular
                  </span>
                )}

                <h3
                  className={`font-display text-xl font-bold ${popular ? 'text-white' : 'text-ink'}`}
                >
                  {plan.name}
                </h3>
                <p className={`mt-1 text-sm ${popular ? 'text-white/70' : 'text-muted'}`}>
                  {plan.tagline}
                </p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span
                    className={`font-display text-4xl font-extrabold ${
                      popular ? 'text-white' : 'text-ink'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className={`text-sm ${popular ? 'text-white/60' : 'text-muted'}`}>
                    {plan.suffix}
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          popular ? 'text-clay' : 'text-teal'
                        }`}
                        strokeWidth={3}
                      />
                      <span className={popular ? 'text-white/85' : 'text-ink/80'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 w-full ${
                    popular
                      ? 'btn-primary'
                      : 'btn border border-forest/25 bg-transparent text-forest hover:bg-forest hover:text-white'
                  }`}
                >
                  Book This
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
