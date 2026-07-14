import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import Logo from './Logo.jsx'
import { NAV_LINKS, CONTACT } from '../data.js'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      id="top"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/85 shadow-soft backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${CONTACT.phone.replace(/[^\d]/g, '')}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink"
          >
            <Phone className="h-4 w-4 text-teal" strokeWidth={2.2} />
            {CONTACT.phone}
          </a>
          <a href="#contact" className="btn-primary">
            Book Appointment
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-ink/10 bg-white/70 text-ink lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-ink/5 bg-cream/95 backdrop-blur-md lg:hidden">
          <nav className="container-x flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Book Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
