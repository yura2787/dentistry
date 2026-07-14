import { useCallback, useEffect, useRef, useState } from 'react'
import { MoveHorizontal } from 'lucide-react'
import SectionHeading from './Section.jsx'

const BEFORE =
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80'
const AFTER =
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80'

export default function BeforeAfter() {
  const [pos, setPos] = useState(50)
  const [width, setWidth] = useState(0)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  // Keep the clipped "before" image the full container width so it never squishes.
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = () => setWidth(el.offsetWidth)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const setFromClientX = useCallback((clientX) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, pct)))
  }, [])

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      setFromClientX(clientX)
    }
    const stop = () => {
      dragging.current = false
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onMove, { passive: false })
    window.addEventListener('mouseup', stop)
    window.addEventListener('touchend', stop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('mouseup', stop)
      window.removeEventListener('touchend', stop)
    }
  }, [setFromClientX])

  const start = (e) => {
    dragging.current = true
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    setFromClientX(clientX)
  }

  return (
    <section className="bg-sand/40 py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Real results"
          title="See the transformation"
          intro="Drag the slider to compare — this is one of hundreds of smile makeovers completed at Lumina."
        />

        <div
          ref={containerRef}
          onMouseDown={start}
          onTouchStart={start}
          className="relative mt-12 aspect-[16/9] w-full select-none overflow-hidden rounded-3xl shadow-card"
        >
          {/* After (full) */}
          <img
            src={AFTER}
            alt="Smile after treatment"
            className="absolute inset-0 h-full w-full object-cover"
            draggable="false"
          />
          <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink shadow-soft">
            AFTER
          </span>

          {/* Before (clipped) */}
          <div
            className="absolute inset-0 h-full overflow-hidden"
            style={{ width: `${pos}%` }}
          >
            <img
              src={BEFORE}
              alt="Smile before treatment"
              className="absolute inset-0 h-full max-w-none object-cover"
              style={{ width: width || '100%' }}
              draggable="false"
            />
            <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold text-white">
              BEFORE
            </span>
          </div>

          {/* Handle */}
          <div
            className="absolute inset-y-0 z-10 flex items-center"
            style={{ left: `calc(${pos}% - 1px)` }}
          >
            <div className="h-full w-0.5 bg-white/90 shadow" />
            <button
              type="button"
              aria-label="Drag to compare before and after"
              className="absolute left-1/2 grid h-11 w-11 -translate-x-1/2 cursor-ew-resize place-items-center rounded-full bg-white text-forest shadow-float"
            >
              <MoveHorizontal className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
