<div align="center">

# 🦷 Lumina Dental

### Dentistry that feels calm, confident, and refreshingly human.

A modern, fully responsive landing page for a premium dental clinic — built with **React**, **Vite** and **Tailwind CSS**, with hand-crafted interactions and pixel-precise design.

<br/>

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-E15C2B?style=for-the-badge)](#-license)

<br/>

**[🔗 Live Demo](#)** &nbsp;·&nbsp; **[📸 Screenshots](#-screenshots)** &nbsp;·&nbsp; **[✨ Features](#-features)** &nbsp;·&nbsp; **[🚀 Getting Started](#-getting-started)**


---

## 📖 Overview

**Lumina Dental** is a conversion-focused landing page for a modern dental studio. Every section is
designed to build trust and guide the visitor toward booking an appointment — from a warm,
benefit-led hero to transparent pricing, real patient reviews, and a friction-free contact form.

The project is built as a clean, component-driven React application with a centralized content layer,
so the entire site can be re-themed or re-used for any clinic in minutes.

> 🎯 **Built as a freelance / portfolio piece** to demonstrate modern front-end craftsmanship:
> responsive design, custom interactions, accessible markup, and a maintainable architecture.

---

## ✨ Features

| | Feature | Description |
|---|---|---|
| 🎚️ | **Before / After slider** | Draggable image comparison (mouse **and** touch) to showcase smile transformations |
| 🎠 | **Testimonials carousel** | Smooth snap-scrolling reviews with arrow navigation |
| ❓ | **FAQ accordion** | Animated expand / collapse with a single open item |
| 📅 | **Booking form** | Controlled form with live client-side validation and a success state |
| 🧭 | **Sticky navigation** | Blur-on-scroll header with a full mobile hamburger menu |
| 📱 | **Fully responsive** | Fluid layouts from 360px mobile up to large desktop |
| ♿ | **Accessible** | Semantic HTML, `aria` attributes, keyboard-friendly controls, visible focus states |
| ⚡ | **Fast & lightweight** | Vite build, lazy-loaded images, graceful image fallbacks |

---

## 📸 Screenshots


<div align="center">

### Desktop
![Desktop overview](docs/full.png)

### Services & Pricing
<img src="docs/services.png" width="49%" alt="Services section" />
<img src="docs/pricing.png" width="49%" alt="Pricing section" />

### Mobile
<img src="docs/mobile.png" width="320" alt="Mobile view" />

</div>

---

## 🛠️ Tech Stack

- **[React 18](https://react.dev)** — component-based UI
- **[Vite 5](https://vitejs.dev)** — lightning-fast dev server & optimized builds
- **[Tailwind CSS 3](https://tailwindcss.com)** — utility-first styling with a custom design token system
- **[Lucide React](https://lucide.dev)** — clean, consistent icon set
- **Google Fonts** — *Plus Jakarta Sans* (display) + *Inter* (body)

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) **18+**

### Installation

```bash
# 1. Clone the repository
git clone git@github.com:yura2787/dentistry.git
cd dentistry

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open **http://localhost:5173** in your browser. 🎉

### Build for production

```bash
npm run build     # outputs to /dist
npm run preview   # preview the production build locally
```

---

## 🗂️ Project Structure

```
dentistry/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx              # composes all page sections
│   ├── data.js              # 📝 ALL content — text, prices, services, doctors, FAQ
│   ├── index.css            # Tailwind layers + design tokens
│   └── components/
│       ├── Header.jsx       Hero.jsx        TrustBar.jsx
│       ├── Features.jsx     Services.jsx    BeforeAfter.jsx
│       ├── Doctors.jsx      Testimonials.jsx  Stats.jsx
│       ├── Process.jsx      Pricing.jsx     Faq.jsx
│       ├── Contact.jsx      Footer.jsx
│       └── Logo.jsx · Section.jsx · SmartImage.jsx · icons.js
├── tailwind.config.js       # 🎨 brand colors & fonts
├── vite.config.js
└── index.html
```

---

## 🎨 Customization

Everything is designed to be edited in one place — no digging through markup:

- **Text, prices, services, doctors, reviews, FAQ** → [`src/data.js`](src/data.js)
- **Brand colors & fonts** → [`tailwind.config.js`](tailwind.config.js) (`theme.extend.colors`)
- **Images** → swap the Unsplash / avatar URLs in `data.js`, `Hero.jsx` and `BeforeAfter.jsx`
  *(the `SmartImage` component shows a graceful fallback if any image fails to load)*

---

## 💡 What this project demonstrates

- Translating a **design into pixel-accurate, production-ready code**
- Building **custom interactive components** from scratch (no heavy UI libraries)
- A **scalable, maintainable architecture** with a clean content/presentation split
- **Responsive & accessible** front-end best practices
- Attention to **micro-interactions, spacing, and typography**

---

## 👤 Author

**Yurii Kamani**

- GitHub: [@yura2787](https://github.com/yura2787)
<!-- 👇 ДОДАЙ СВОЇ КОНТАКТИ (за бажанням) -->
- Email: `your@email.com`
- Portfolio: `your-portfolio-link`

> 💼 Available for freelance front-end work — landing pages, web apps, and UI development.

---

## 📄 License

Released under the **MIT License** — free to use and adapt.

<div align="center">
<br/>

⭐ **If you like this project, give it a star!** ⭐

</div>
