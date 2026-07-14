import { INSURERS } from '../data.js'

export default function TrustBar() {
  return (
    <section className="border-y border-ink/[0.06] bg-sand/40">
      <div className="container-x py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted/70">
          Accredited &amp; in-network with
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {INSURERS.map((name) => (
            <span
              key={name}
              className="inline-flex items-center gap-1.5 font-display text-lg font-bold text-ink/45"
            >
              {name}
              {name === 'ADA' && (
                <span className="rounded border border-ink/20 px-1 text-[9px] font-semibold uppercase tracking-wide text-ink/40">
                  Certified
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
