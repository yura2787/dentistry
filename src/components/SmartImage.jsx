import { useState } from 'react'

// Image that gracefully falls back to a warm gradient block if the remote
// asset fails to load (e.g. offline), so the layout never breaks.
export default function SmartImage({ src, alt, className = '', imgClassName = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`grid place-items-center bg-gradient-to-br from-teal-soft via-sand to-clay-soft ${className}`}
        aria-label={alt}
        role="img"
      >
        <svg viewBox="0 0 24 24" className="h-10 w-10 text-forest/40" fill="currentColor">
          <path d="M12 3c-2.6 0-4.7 1.9-4.7 4.4 0 1.6.6 2.7 1.2 4.4.5 1.5.8 3.1 1 4.4.2.9.4 1.4 1 1.4.5 0 .7-.5.8-1.3.2-.9.4-1.7.7-1.7.3 0 .5.8.7 1.7.1.8.3 1.3.8 1.3.6 0 .8-.5 1-1.4.2-1.3.5-2.9 1-4.4.6-1.7 1.2-2.8 1.2-4.4C16.7 4.9 14.6 3 12 3Z" />
        </svg>
      </div>
    )
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  )
}
