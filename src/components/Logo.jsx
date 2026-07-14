export default function Logo({ dark = false }) {
  return (
    <a href="#top" className="inline-flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-forest text-white shadow-soft">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M12 3c-2.6 0-4.7 1.9-4.7 4.4 0 1.6.6 2.7 1.2 4.4.5 1.5.8 3.1 1 4.4.2.9.4 1.4 1 1.4.5 0 .7-.5.8-1.3.2-.9.4-1.7.7-1.7.3 0 .5.8.7 1.7.1.8.3 1.3.8 1.3.6 0 .8-.5 1-1.4.2-1.3.5-2.9 1-4.4.6-1.7 1.2-2.8 1.2-4.4C16.7 4.9 14.6 3 12 3Z" />
        </svg>
      </span>
      <span
        className={`font-display text-lg font-extrabold tracking-tight ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        Lumina Dental
      </span>
    </a>
  )
}
