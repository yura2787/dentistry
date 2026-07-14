# Lumina Dental — Landing Page

A modern, fully responsive dental-clinic landing page built with **React + Vite + Tailwind CSS**,
recreated from the 21st.dev design.

## Sections

Header (sticky, mobile menu) · Hero · Trust bar · Why-choose-us · Services · Before/After slider ·
Doctors · Testimonials carousel · Stats · Treatment process · Pricing · FAQ accordion ·
Map + contact form · Footer.

## Interactive features

- **Before/After slider** — drag to compare smile makeovers (mouse + touch)
- **Testimonials carousel** — arrow navigation, snap scrolling
- **FAQ accordion** — smooth expand/collapse
- **Contact form** — client-side validation + success state
- **Sticky header** with blur on scroll and a mobile hamburger menu
- **Smooth-scroll** anchor navigation

## Run locally

```bash
npm install     # first time only
npm run dev     # start dev server → http://localhost:5173
```

Then open **http://localhost:5173** in your browser.

## Build for production

```bash
npm run build   # outputs to /dist
npm run preview # preview the production build
```

## Project structure

```
src/
  App.jsx              # composes all sections
  data.js              # all page content (edit text/prices/services here)
  index.css            # Tailwind layers + design tokens
  components/
    Header.jsx  Hero.jsx  TrustBar.jsx  Features.jsx  Services.jsx
    BeforeAfter.jsx  Doctors.jsx  Testimonials.jsx  Stats.jsx
    Process.jsx  Pricing.jsx  Faq.jsx  Contact.jsx  Footer.jsx
    Logo.jsx  Section.jsx  SmartImage.jsx  icons.js
tailwind.config.js     # brand colors + fonts
```

## Customizing

- **Text, prices, services, doctors, FAQs** → `src/data.js`
- **Brand colors & fonts** → `tailwind.config.js` (`theme.extend.colors`)
- **Images** → Unsplash/pravatar URLs in `data.js` and `Hero.jsx` / `BeforeAfter.jsx`
  (swap for your own; `SmartImage` shows a graceful fallback if one fails to load)
