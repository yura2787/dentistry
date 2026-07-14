import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import SectionHeading from './Section.jsx'
import { FAQS } from '../data.js'

function FaqItem({ item, open, onToggle }) {
  return (
    <div className="card overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-base font-bold text-ink">{item.q}</span>
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ink/15 text-ink">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
