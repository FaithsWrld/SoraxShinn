# Sora & Shin · One Year 🌹

A hand-crafted anniversary website built with love to celebrate one year of dating the most amazing person in the universe.

> *"One year of choosing each other, every day."*

---

## About

This site counts down to April 7, 2026 — the one-year anniversary of Sora & Shin. Once the date arrives, visitors can unlock a private anniversary page revealing:

- **A personal love letter** written by Shin for Sora
- **A relationship timeline** tracing their journey from strangers to partners
- **A photo gallery** of their favourite shared memories
- **A celebration burst** of confetti and hearts on unlock

The page is "sealed" until the target date. Only when it's truly April 7, 2026 (12:00 AM WAT, Nigeria) does the unlock button appear.

---

## Setup

No build tools or dependencies required — this is a pure HTML/CSS/JS site.

1. **Clone the repository**
   ```bash
   git clone https://github.com/FaithsWrld/SoraxShinn.git
   cd SoraxShinn
   ```

2. **Add your photos**
   Place your images inside the `photos/` folder named `photo1.jpeg` through `photo6.jpeg`. The site will show a 📷 placeholder for any missing images.

3. **Open the site**
   Simply open `index.html` in any modern browser:
   ```bash
   open index.html
   # or double-click index.html in your file manager
   ```

4. **Deploy (optional)**
   Upload the files to any static host (GitHub Pages, Netlify, Vercel, etc.). No server-side code is needed.

---

## Features

| Feature | Description |
|---|---|
| 🕐 Countdown Timer | Live countdown to April 7, 2026 12:00 AM WAT |
| 🔒 Unlock Mechanic | Content stays hidden until the anniversary date |
| 💌 Love Letter | A personal letter revealed on unlock |
| 📅 Timeline | Key moments in the relationship |
| 🖼️ Photo Gallery | Six favourite memory photos |
| 🌙 Dark / ☀️ Light Mode | Theme toggle saved to localStorage |
| 📱 Responsive | Optimised for mobile, tablet, and desktop |
| ✨ Particle Effects | Floating ambient particles and celebration burst |

---

## How the Unlock Works

The target date is stored as a UTC timestamp (`Date.UTC(2026, 3, 6, 23, 0, 0)`) which equals **April 7, 2026 at 12:00 AM WAT (UTC+1)**. A countdown timer runs every second and clears itself once it reaches zero. At that point the "Unlock Anniversary Page" button appears. Clicking it triggers the celebration animation and reveals all locked content.

---

## Made With

- **HTML5 / CSS3 / Vanilla JavaScript** — no frameworks
- [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond), [IM Fell English](https://fonts.google.com/specimen/IM+Fell+English), [Cinzel](https://fonts.google.com/specimen/Cinzel) — Google Fonts
- CSS custom properties for theming, `IntersectionObserver` for scroll reveals
- Built entirely with love by **Shin**, for **Sora** 🌹

---

*"I will improve and make better web pages each year."*