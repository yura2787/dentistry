// Reusable section heading block (eyebrow + title + optional intro).
export default function SectionHeading({ eyebrow, title, intro, align = 'center', className = '' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'
  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="h-display mt-3 text-4xl sm:text-[2.75rem]">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  )
}
