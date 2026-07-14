import { Facebook, Instagram, Twitter } from 'lucide-react'
import Logo from './Logo.jsx'

const COLUMNS = [
  {
    title: 'Explore',
    links: ['Services', 'Doctors', 'Reviews', 'Pricing'],
  },
  {
    title: 'Services',
    links: ['Implants', 'Whitening', 'Orthodontics', 'Emergency Care'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Accessibility'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-white">
      <div className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              A modern dental studio focused on gentle care, honest pricing, and results you'll
              actually smile about.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-white/60 transition hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Lumina Dental Studio. All rights reserved.</p>
          <p>Designed with care, in-house.</p>
        </div>
      </div>
    </footer>
  )
}
