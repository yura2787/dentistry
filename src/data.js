// Centralised content for the Lumina Dental landing page.

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const INSURERS = ['Delta Dental', 'Cigna', 'MetLife', 'Aetna', 'ADA', 'Guardian']

export const FEATURES = [
  {
    icon: 'HeartHandshake',
    title: 'Gentle, judgment-free care',
    body: 'We treat dental anxiety seriously with sedation options and a genuinely calm team.',
  },
  {
    icon: 'CalendarCheck',
    title: 'Same-week availability',
    body: 'Real appointment slots, real fast — including evenings and emergency care.',
  },
  {
    icon: 'Sparkles',
    title: 'Modern, precise technology',
    body: '3D imaging and digital scans mean faster, more accurate treatment plans.',
  },
  {
    icon: 'BadgeDollarSign',
    title: 'Transparent, upfront pricing',
    body: 'No surprise bills — every quote is explained clearly before treatment starts.',
  },
]

export const SERVICES = [
  {
    icon: 'Bone',
    tone: 'forest',
    title: 'Dental Implants',
    body: 'Permanent, natural-looking tooth replacement backed by a 10-year guarantee.',
  },
  {
    icon: 'Star',
    tone: 'clay',
    title: 'Teeth Whitening',
    body: 'Visibly brighter in one visit with our low-sensitivity in-chair treatment.',
  },
  {
    icon: 'AlignHorizontalDistributeCenter',
    tone: 'forest',
    title: 'Orthodontics',
    body: 'Clear aligners and modern braces for kids, teens, and adults alike.',
  },
  {
    icon: 'Gem',
    tone: 'clay',
    title: 'Veneers',
    body: 'Custom porcelain veneers designed digitally to match your ideal smile.',
  },
  {
    icon: 'Siren',
    tone: 'forest',
    title: 'Emergency Care',
    body: 'Same-day relief for chips, breaks, and toothaches — call anytime.',
  },
  {
    icon: 'ShieldCheck',
    tone: 'clay',
    title: 'Hygiene & Cleaning',
    body: 'Thorough, comfortable cleanings and checkups every six months.',
  },
]

export const DOCTORS = [
  {
    name: 'Dr. Amara Reyes, DDS',
    specialty: 'Cosmetic & Restorative Dentistry',
    detail: '18 years experience · Harvard School of Dental Medicine',
    photo:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Dr. Marcus Lin, DMD',
    specialty: 'Implants & Oral Surgery',
    detail: '14 years experience · NYU College of Dentistry',
    photo:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Dr. Sofia Novak, DDS',
    specialty: 'Pediatric & Family Dentistry',
    detail: '10 years experience · UCLA School of Dentistry',
    photo:
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      "I've always dreaded the dentist, but Lumina genuinely changed that. Dr. Reyes explained everything and I felt zero pain during my veneer fitting.",
    name: 'Jasmine T.',
    role: 'Veneers patient',
    avatar: 'https://i.pravatar.cc/96?img=45',
  },
  {
    quote:
      'Booked an emergency appointment on a Sunday morning for a broken tooth — was seen within two hours. Incredible service.',
    name: 'David O.',
    role: 'Emergency care',
    avatar: 'https://i.pravatar.cc/96?img=12',
  },
  {
    quote:
      'My kids actually ask to go to the dentist now. Dr. Novak is patient, kind, and makes cleanings feel like a fun trip.',
    name: 'Priya M.',
    role: 'Family patient',
    avatar: 'https://i.pravatar.cc/96?img=32',
  },
  {
    quote:
      'Transparent pricing with no upsells. My implant looks and feels completely natural — honestly life-changing.',
    name: 'Marcus B.',
    role: 'Implant patient',
    avatar: 'https://i.pravatar.cc/96?img=59',
  },
  {
    quote:
      'The digital smile preview showed me the result before we even started. The whole team is warm and genuinely professional.',
    name: 'Elena R.',
    role: 'Whitening patient',
    avatar: 'https://i.pravatar.cc/96?img=20',
  },
]

export const STATS = [
  { value: '6200+', label: 'Patients treated' },
  { value: '13', label: 'Years in practice' },
  { value: '98%', label: 'Treatment success rate' },
  { value: '4.9', label: 'Average patient rating' },
]

export const STEPS = [
  {
    step: '01',
    title: 'Consultation',
    body: 'A relaxed conversation and digital scan to understand your goals.',
  },
  {
    step: '02',
    title: 'Custom Plan',
    body: 'We map out timeline, options, and full transparent pricing.',
  },
  {
    step: '03',
    title: 'Treatment',
    body: 'Comfortable, precise care delivered by our specialist team.',
  },
  {
    step: '04',
    title: 'Follow-Up',
    body: 'We check in to make sure recovery and results exceed expectations.',
  },
]

export const PLANS = [
  {
    name: 'Essential Care',
    tagline: 'Cleanings & checkups',
    price: '$89',
    suffix: 'starting',
    features: ['Full exam & digital X-rays', 'Professional cleaning', 'Personalized hygiene plan'],
    popular: false,
  },
  {
    name: 'Complete Smile',
    tagline: 'Whitening + veneers path',
    price: '$1,450',
    suffix: 'starting',
    features: [
      'In-chair whitening session',
      '6 custom porcelain veneers',
      'Digital smile preview',
      '2 follow-up visits included',
    ],
    popular: true,
  },
  {
    name: 'Full Restoration',
    tagline: 'Implants & full rehab',
    price: '$2,900',
    suffix: 'starting',
    features: ['Single-tooth implant & crown', '3D CT scan & surgical plan', '10-year guarantee'],
    popular: false,
  },
]

export const FAQS = [
  {
    q: 'Do you accept dental insurance?',
    a: "Yes — we're in-network with Delta Dental, Cigna, MetLife, Aetna, and Guardian. We also offer flexible in-house payment plans if you're paying out of pocket.",
  },
  {
    q: 'How much does a smile makeover cost?',
    a: 'It depends on your goals — whitening alone starts around $350, while a full veneer transformation ranges from $1,450. You always get a clear, itemized quote first.',
  },
  {
    q: 'Is sedation available for anxious patients?',
    a: 'Absolutely. We offer nitrous oxide and oral sedation options, plus noise-cancelling headphones and a genuinely unhurried, calming approach.',
  },
  {
    q: 'Do you treat children and families?',
    a: 'Yes — Dr. Novak specializes in pediatric care, and we frequently book same-day family appointments so everyone can be seen together.',
  },
  {
    q: 'What happens during a dental emergency?',
    a: "Call our emergency line and we'll fit you in the same day, often within a couple of hours, for pain relief and a treatment plan.",
  },
  {
    q: 'How long do implants and veneers last?',
    a: 'With good care, implants often last 20+ years and porcelain veneers 10–15 years. We back major restorative work with a 10-year guarantee.',
  },
]

export const CONTACT = {
  phone: '(555) 123-4567',
  email: 'hello@luminadental.com',
  address: '200 Riverside Ave, Suite 4, Austin, TX',
  hours: 'Mon–Sat, 8:00 AM – 6:00 PM',
}

export const SERVICE_OPTIONS = [
  'General Checkup & Cleaning',
  'Teeth Whitening',
  'Veneers',
  'Dental Implants',
  'Orthodontics',
  'Emergency Care',
]
