# Mahmood Fazile — UI/UX Designer Portfolio

> A pixel-perfect, fully responsive portfolio website featuring dual dark/light themes with glassmorphism aesthetics, motion graphics, and smooth interactions.

![Portfolio Preview](preview.png)

---

## ✨ Features

- **Dual Theme System** — Seamless dark/light mode toggle with localStorage persistence
- **Glassmorphism UI** — `backdrop-filter` based glass cards throughout
- **Motion Graphics** — Scroll-triggered reveal animations, floating elements, pulsing glows, orbiting rings
- **Custom Cursor** — Smooth-follow cursor with interactive state changes
- **Counter Animations** — IntersectionObserver-driven stat counters
- **Skill Bar Animations** — CSS-transition based animated progress bars
- **Portfolio Filter** — Animated category filtering with smooth transitions
- **Parallax Blobs** — Mouse-driven background depth effect
- **Fully Responsive** — Mobile-first breakpoints: 480px / 768px / 1024px
- **Accessible** — Semantic HTML5, ARIA labels, keyboard navigation

---

## 🛠 Tech Stack

| Layer      | Technology                           |
|------------|--------------------------------------|
| Markup     | HTML5 (semantic)                     |
| Styling    | CSS3 + Tailwind CSS CDN              |
| Scripts    | Vanilla JavaScript (ES2020+)         |
| Fonts      | Bebas Neue · DM Sans · Instrument Serif (Google Fonts) |
| Icons      | Inline SVGs (no external deps)       |

---

## 📁 Project Structure

```
portfolio/
├── index.html       # Main HTML (all sections)
├── style.css        # All styles, CSS variables, animations
├── script.js        # Theme toggle, cursor, observers, interactions
└── README.md        # This file
```

---

## 🎨 Design System

### Color Palette

| Token            | Dark                     | Light                    |
|------------------|--------------------------|--------------------------|
| `--accent`       | `#FF781E`                | `#FF781E`                |
| `--bg-primary`   | `#0D0D0D`                | `#F2EDE8`                |
| `--text-primary` | `#F5F5F5`                | `#1A1410`                |
| `--glass-bg`     | `rgba(20,20,20,0.60)`    | `rgba(242,237,232,0.65)` |
| `--border`       | `rgba(255,255,255,0.08)` | `rgba(0,0,0,0.08)`       |

### Typography

| Role    | Font            | Weight | Usage              |
|---------|-----------------|--------|--------------------|
| Display | Bebas Neue      | 400    | Hero title, section headings, logo |
| Serif   | Instrument Serif| 400/i  | Card headings |
| Body    | DM Sans         | 300–700| All body copy, nav, buttons |

### Spacing Scale
`4 · 8 · 12 · 16 · 20 · 24 · 28 · 32 · 36 · 40 · 48 · 60 · 80 · 120`

---

## 🚀 Getting Started

### 1. Clone or Download

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Run Locally

No build step required — pure HTML/CSS/JS.

```bash
# Option A: Open directly
open index.html

# Option B: Live server (VS Code extension)
# Right-click index.html → Open with Live Server

# Option C: Python quick server
python3 -m http.server 3000
# Visit http://localhost:3000
```

---

## 📐 Sections

| # | Section   | Key Features |
|---|-----------|--------------|
| 1 | **Hero**      | Animated greeting, giant Bebas title, photo ring with orbit, floating tags, stats counter |
| 2 | **Services**  | 4-column glass cards with icon hover, top-border reveal |
| 3 | **About**     | Split layout, experience badge, animated skill bars |
| 4 | **Portfolio** | 6-card grid with category filter (All / UI / UX / Brand) |
| 5 | **Contact**   | Split layout, glass form with focus states, submission feedback |
| 6 | **Footer**    | Logo · copyright · social icons |

---

## 🌗 Theme Toggle

- Toggle button in navbar uses a pill-shaped track with animated thumb
- Sun/Moon icons fade and scale between states
- Theme persists via `localStorage` key `portfolio-theme`
- All 40+ CSS variables update instantly via `data-theme` attribute on `<html>`

---

## 📱 Responsive Breakpoints

```css
/* Desktop  */ > 1024px  — 4-col services, 3-col portfolio, side-by-side hero
/* Tablet   */ ≤ 1024px  — 2-col services, 2-col portfolio
/* Mobile   */ ≤  768px  — Single column, hamburger menu, hero photo hidden
/* Small    */ ≤  480px  — Reduced padding throughout
```

---

## ⚡ Performance Notes

- Google Fonts loaded with `preconnect` for faster resolution
- All animations use `transform` and `opacity` (GPU-composited, no layout thrash)
- `IntersectionObserver` used for lazy-triggering all animations
- Cursor uses `requestAnimationFrame` for smooth lerp
- No JavaScript frameworks or heavy libraries

---

## 🔧 Customization

### Swap your photo

Replace the SVG placeholder inside `.photo-circle`:

```html
<img src="your-photo.jpg" alt="Your Name" class="w-full h-full object-cover object-top" />
```

### Update content

All text is in `index.html`. Search for `Mahmood Fazile` to find name references.

### Change accent color

In `style.css`, update a single variable:

```css
:root {
  --accent: #FF781E; /* ← change this */
}
```

---

## 📄 License

MIT License — free to use, modify, and distribute with attribution.

---

<div align="center">

**Crafted with precision · Dark & Light · Glass & Motion**

*© 2025 Mahmood Fazile — UI/UX Designer*

</div>
