import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'
import SmartImage from './SmartImage.jsx'

const AVATARS = [
  'https://i.pravatar.cc/64?img=15',
  'https://i.pravatar.cc/64?img=32',
  'https://i.pravatar.cc/64?img=45',
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-clay/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-teal/10 blur-3xl" />

      <div className="container-x relative grid items-center gap-12 pb-16 lg:grid-cols-2 lg:gap-8 lg:pb-24">
        {/* Copy */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-soft px-4 py-1.5 text-sm font-medium text-forest">
            <Sparkles className="h-4 w-4" />
            Rated 4.9/5 by 2,400+ patients
          </span>

          <h1 className="h-display mt-6 text-5xl sm:text-6xl">
            Dentistry that feels <span className="text-teal">calm</span>, confident, and refreshingly
            human.
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            From routine cleanings to full smile makeovers — Lumina blends warm, personal care with
            modern techniques so every visit feels easy, not clinical.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-primary">
              Book Your Visit
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="btn-ghost">
              Explore Services
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {AVATARS.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="h-10 w-10 rounded-full border-2 border-cream object-cover"
                  loading="lazy"
                />
              ))}
            </div>
            <p className="text-sm text-muted">
              <span className="font-semibold text-ink">6,000+</span> smiles transformed since 2011
            </p>
          </div>
        </div>

        {/* Visual */}
        <div className="relative animate-fade-up [animation-delay:120ms]">
          <SmartImage
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
            alt="Bright, modern Lumina Dental treatment room"
            className="aspect-[4/5] w-full rounded-[2rem] shadow-card sm:aspect-[5/6]"
          />
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-float backdrop-blur sm:left-8">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-forest text-white">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-ink">Same-day emergency care</p>
              <p className="text-xs text-muted">Walk-ins welcome</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
