# 🚀 Portfolio — Jahid Ekbal Mallick

> A modern, interactive, and glassmorphic portfolio built with **HTML5, CSS3, and Vanilla JavaScript**. Features a dynamic island navbar, dark/light theme toggle, GitHub API integration, and smooth animations.

![Portfolio Preview](https://img.shields.io/badge/Status-Active-success?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![Last Updated](https://img.shields.io/badge/Updated-March%202026-brightgreen?style=flat-square)

---

## ✨ Features

- **🎨 Dynamic Island Navbar** — iOS-inspired pill-shaped navigation bar with glassmorphism
- **🌓 Dark/Light Theme Toggle** — Seamless theme switching with persistent localStorage
- **🎭 Glassmorphism UI** — Modern glass effects with backdrop blur and iOS-style cards
- **📱 Fully Responsive** — Optimized for mobile, tablet, and desktop devices
- **⚡ GitHub API Integration** — Display live GitHub stats, followers, and repositories
- **🎬 Smooth Animations** — Typewriter effect, scroll reveal, glitch animations, and transitions
- **🧩 Multi-Page Architecture** — Dedicated pages for Home, About, Skills, Projects, and Contact
- **🎯 Lucide Icons** — Beautiful SVG icons for navigation and UI elements
- **📊 Interactive Elements** — Hover effects, text shadows, and scale animations
- **🔍 SEO Optimized** — Meta tags, structured data, and semantic HTML

---

## 🛠️ Tech Stack

| Category       | Technologies                                                 |
| -------------- | ------------------------------------------------------------ |
| **Frontend**   | HTML5, CSS3, Vanilla JavaScript                              |
| **Styling**    | CSS Variables, Glassmorphism, Responsive Design              |
| **API**        | GitHub REST API                                              |
| **Icons**      | Lucide Icons                                                 |
| **Fonts**      | Syne (Display), JetBrains Mono (Monospace)                   |
| **Animations** | CSS Keyframes, Transitions, JavaScript RequestAnimationFrame |

---

## 📁 Project Structure

```
transparent-portfolio/
├── index.html              # Home page
├── about.html              # About section
├── skills.html             # Skills & tech stack
├── projects.html           # Projects showcase
├── contact.html            # Contact form
├── repos.html              # GitHub repositories
├── repo-flash-r.html       # Individual repo details
├── style.css               # Main stylesheet
├── script.js               # Core JavaScript
├── repos.js                # Repos page script
├── README.md               # This file
├── LICENSE                 # MIT License
└── .gitignore              # Git configuration
```

---

## 🚀 Quick Start

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jahid-ekbal/transparent-portfolio.git
   cd transparent-portfolio
   ```

2. **Start local development server:**

   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js
   npx http-server

   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser:**
   ```
   http://localhost:8000
   ```

---

## 🎨 Theme Customization

### Dark Theme (Default)

```css
:root {
  --bg-primary: #000000;
  --text-primary: #ffffff;
  --glass-bg: rgba(255, 255, 255, 0.08);
}
```

### Light Theme

```css
body.light-theme {
  --bg-primary: #ffffff;
  --text-primary: #000000;
  --glass-bg: rgba(0, 0, 0, 0.08);
}
```

### Toggle Theme Programmatically

```javascript
const themeButton = document.getElementById("theme-switch");
themeButton.click(); // Toggle theme
```

---

## 🔧 Core Features Explained

### Dynamic Island Navbar

The navbar implements iOS-inspired design:

- Pill-shaped container with glassmorphism
- Smooth transitions and hover effects
- Responsive behavior on mobile devices

**CSS Class:** `.glass-nav`, `.nav-container`

### Theme Toggle with Background Color Change

Click the theme button to instantly:

- Toggle between dark (`#020812`) and light (`#ffffff`) modes
- Apply background color to entire website
- Persist preference in localStorage
- Update all component colors via CSS variables

**Implementation:**

```javascript
// script.js
function initThemeToggle() {
  const body = document.body;
  const themeButton = document.getElementById("theme-switch");

  themeButton.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    // Background color automatically updates via CSS transitions
  });
}
```

### GitHub API Integration

Fetch and display:

- Follower count
- Public repositories (sorted by recent)
- Repository stars and forks
- Live sync across all pages

**API Endpoint:** `https://api.github.com/users/jahid-ekbal`

### Glassmorphism Effects

**Primary Glass (.glass):**

- 20px blur + 180% saturation
- Badge inset shadow for depth
- Responsive border radius

**iOS Glass (.tw-glass-ios):**

- 24px blur + 160% saturation
- Refined shadow for iOS aesthetic
- Fine borders for definition

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action                        |
| -------- | ----------------------------- |
| `/`      | Focus search (if implemented) |
| `Esc`    | Close mobile menu             |
| `Tab`    | Navigate links                |

---

## 📱 Responsive Breakpoints

```css
@media (max-width: 1024px) {
  /* Tablets */
}
@media (max-width: 768px) {
  /* Mobile */
}
@media (max-width: 480px) {
  /* Small phones */
}
```

---

## 🎯 Performance Optimizations

- **Lazy Loading:** Images and resources load on-demand
- **CSS Variables:** Minimal repaints on theme changes
- **RequestAnimationFrame:** Smooth 60fps animations
- **Debounced Scroll Events:** Efficient scroll handling
- **Optimized Media Queries:** Mobile-first approach

---

## 🐛 Known Issues & Roadmap

### Current Limitations

- Custom cursor removed in favor of iOS-like design
- No dark mode for external badge images (shields.io)

### Planned Features

- [ ] Blog section with markdown support
- [ ] Project filtering by technology
- [ ] Search functionality
- [ ] Comments/feedback system
- [ ] Dark mode for badges
- [ ] PWA support
- [ ] Image optimization

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see [LICENSE](LICENSE) file for details.

```
MIT License © 2025 Jahid Ekbal Mallick
```

---

## 🔗 Links

- **Portfolio:** [https://jahid-ekbal.dev](https://jahid-ekbal.dev)
- **GitHub:** [github.com/jahid-ekbal](https://github.com/jahid-ekbal)
- **LinkedIn:** [linkedin.com/in/jahid-developer](https://linkedin.com/in/jahid-developer)
- **Email:** [jahidekbalmallick@gmail.com](mailto:jahidekbalmallick@gmail.com)

---

## 🙏 Acknowledgments

- **Fonts:** Google Fonts (Syne, JetBrains Mono)
- **Icons:** Lucide Icons
- **API:** GitHub REST API
- **Inspiration:** iOS Design Language, Modern Web Standards

---

## 📊 Stats

![Lines of Code](https://img.shields.io/badge/Lines%20of%20Code-5000%2B-blue)
![CSS Lines](https://img.shields.io/badge/CSS%20Lines-1500%2B-brightgreen)
![JavaScript Lines](https://img.shields.io/badge/JS%20Lines-500%2B-yellow)
![Commits](https://img.shields.io/badge/Commits-50%2B-orange)

---

## 🎓 Learning Resources Used

- CSS Glassmorphism Design
- Vanilla JavaScript Event Handling
- GitHub API Integration
- Responsive Web Design
- Web Animation & Transitions
- localStorage API

---

**Made with ❤️ by [Jahid Ekbal Mallick](https://github.com/jahid-ekbal)**
