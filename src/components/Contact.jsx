import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MapPinned, CheckCircle2 } from 'lucide-react'
import { CONTACT, SERVICE_OPTIONS } from '../data.js'

const INFO = [
  { icon: Phone, label: 'Call us', value: CONTACT.phone },
  { icon: Mail, label: 'Email us', value: CONTACT.email },
  { icon: MapPin, label: 'Visit us', value: CONTACT.address },
  { icon: Clock, label: 'Hours', value: CONTACT.hours },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: SERVICE_OPTIONS[0],
    date: '',
    message: '',
  })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) {
      setError('Please fill in your name, phone, and email.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSent(true)
  }

  const inputBase =
    'w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/15'

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="container-x">
        {/* Map placeholder */}
        <div className="relative mb-16 grid place-items-center overflow-hidden rounded-3xl bg-gradient-to-br from-teal-soft via-sand to-teal-soft py-24">
          <div className="text-center">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-forest text-white shadow-soft">
              <MapPinned className="h-6 w-6" />
            </span>
            <p className="mt-4 font-display text-lg font-bold text-forest">Interactive map loads here</p>
            <p className="mt-1 text-sm text-forest/70">{CONTACT.address}</p>
          </div>
          <div className="absolute bottom-5 left-5 rounded-xl bg-white/95 px-4 py-3 shadow-float backdrop-blur">
            <p className="text-sm font-semibold text-ink">Lumina Dental Studio</p>
            <p className="text-xs text-muted">Open today · 8:00 AM – 6:00 PM</p>
          </div>
        </div>

        {/* Get in touch */}
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2 className="h-display mt-3 text-4xl sm:text-[2.75rem]">
              Let's find you a time that works
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Fill out the form or reach us directly — our care coordinators typically reply within
              the hour during business days.
            </p>

            <div className="mt-8 space-y-5">
              {INFO.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-soft text-forest">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted">{label}</p>
                    <p className="font-semibold text-ink">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="card p-7 sm:p-8">
            {sent ? (
              <div className="grid h-full min-h-[420px] place-items-center text-center">
                <div>
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-teal-soft text-forest">
                    <CheckCircle2 className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-ink">Request received!</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted">
                    Thanks, {form.name.split(' ')[0]}. Our team will confirm your exact time slot by
                    phone or email within 1 business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="btn-ghost mt-6"
                  >
                    Send another request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink">Full Name</label>
                    <input
                      className={inputBase}
                      placeholder="Jordan Smith"
                      value={form.name}
                      onChange={update('name')}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink">Phone Number</label>
                    <input
                      className={inputBase}
                      placeholder="(555) 000-0000"
                      value={form.phone}
                      onChange={update('phone')}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">Email Address</label>
                  <input
                    className={inputBase}
                    placeholder="jordan@email.com"
                    value={form.email}
                    onChange={update('email')}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink">
                      Service Interested In
                    </label>
                    <select className={inputBase} value={form.service} onChange={update('service')}>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink">Preferred Date</label>
                    <input
                      type="date"
                      className={inputBase}
                      value={form.date}
                      onChange={update('date')}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">
                    Message (optional)
                  </label>
                  <textarea
                    rows={3}
                    className={`${inputBase} resize-none`}
                    placeholder="Tell us a bit about what you need…"
                    value={form.message}
                    onChange={update('message')}
                  />
                </div>

                {error && <p className="text-sm font-medium text-clay">{error}</p>}

                <button type="submit" className="btn-primary w-full">
                  Request Appointment
                </button>
                <p className="text-center text-xs text-muted">
                  We'll confirm your exact time slot by phone or email within 1 business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
