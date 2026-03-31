/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./about.html",
    "./contact.html",
    "./projects.html",
    "./skills.html",
    "./**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Custom color palette for glassmorphism
      colors: {
        glass: {
          50: "rgba(255, 255, 255, 0.95)",
          100: "rgba(255, 255, 255, 0.90)",
          200: "rgba(255, 255, 255, 0.25)",
          300: "rgba(255, 255, 255, 0.20)",
          400: "rgba(255, 255, 255, 0.15)",
          500: "rgba(255, 255, 255, 0.10)",
          600: "rgba(255, 255, 255, 0.08)",
          700: "rgba(255, 255, 255, 0.05)",
          800: "rgba(255, 255, 255, 0.03)",
          900: "rgba(255, 255, 255, 0.01)",
        },
      },

      // Custom animation for blob backgrounds
      animation: {
        blob: "blob 7s infinite",
        "blob-slow": "blob 8s infinite",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
      },

      // Custom keyframes
      keyframes: {
        blob: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { "box-shadow": "0 0 5px rgba(34, 211, 238, 0.5)" },
          "50%": { "box-shadow": "0 0 20px rgba(34, 211, 238, 0.8)" },
        },
      },

      // Custom animation delays for staggered effects
      transitionDelay: {
        2000: "2000ms",
        4000: "4000ms",
      },

      // Custom backdrop blur values
      backdropBlur: {
        xs: "2px",
        sm: "4px",
      },

      // Custom border-radius for glassmorphism
      borderRadius: {
        glass: "16px",
        "glass-sm": "12px",
        "glass-lg": "20px",
      },

      // Custom shadows for depth
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        "glass-sm": "0 4px 16px 0 rgba(31, 38, 135, 0.2)",
        "glass-lg": "0 12px 48px 0 rgba(31, 38, 135, 0.5)",
        glow: "0 0 20px rgba(255, 107, 53, 0.3)",
        "glow-orange": "0 0 30px rgba(255, 107, 53, 0.4)",
        "glow-amber": "0 0 30px rgba(255, 140, 66, 0.4)",
      },

      // Custom backdrop filters
      backdropFilter: {
        blur: "blur(10px)",
        "blur-sm": "blur(4px)",
        "blur-lg": "blur(16px)",
      },

      // Custom font families
      fontFamily: {
        display: ['"Syne"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },

      // Gradient text utilities
      backgroundImage: {
        "gradient-text": "linear-gradient(to right, #ff6b35, #ff8c42)",
      },

      // Custom spacing for hero section
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },

  plugins: [
    // Glass morphism plugin
    function ({ addComponents, theme }) {
      addComponents({
        // Glass card component
        ".glass-card": {
          "@apply backdrop-blur-xl bg-white/10 border border-white/20 rounded-glass shadow-glass":
            {},
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            "@apply bg-white/15 border-white/30 shadow-glass-lg": {},
          },
        },

        // Smaller glass card
        ".glass-card-sm": {
          "@apply backdrop-blur-lg bg-white/10 border border-white/20 rounded-glass-sm":
            {},
        },

        // Glass button
        ".glass-btn": {
          "@apply inline-flex items-center gap-2 px-6 py-3 backdrop-blur-xl bg-gradient-to-r from-orange-500/80 to-orange-600/80 hover:from-orange-500 hover:to-orange-600 border border-white/20 rounded-glass font-semibold text-white transition-all duration-300 hover:shadow-glow":
            {},
        },

        // Secondary glass button
        ".glass-btn-secondary": {
          "@apply inline-flex items-center gap-2 px-6 py-3 backdrop-blur-xl bg-white/10 hover:bg-white/15 border border-white/20 rounded-glass font-semibold text-white transition-all duration-300 hover:border-white/40":
            {},
        },

        // Glass icon button
        ".glass-icon-btn": {
          "@apply p-2 backdrop-blur-lg bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300":
            {},
        },

        // Glass tag/badge
        ".glass-tag": {
          "@apply inline-block px-3 py-1 backdrop-blur-lg bg-orange-500/20 border border-orange-400/30 rounded-full text-orange-300 text-xs font-medium":
            {},
        },

        // Skill card hover effect
        ".skill-card": {
          "@apply transition-all duration-300": {},
          "&:hover": {
            "@apply transform -translate-y-1 shadow-glow": {},
          },
        },

        // Project card styles
        ".project-card": {
          "@apply transition-all duration-300": {},
          "&:hover": {
            "@apply transform -translate-y-2 shadow-glass-lg": {},
          },
        },

        // Form input styling
        ".form-input": {
          "@apply w-full px-4 py-3 backdrop-blur-lg bg-white/10 border border-white/20 rounded-glass text-white placeholder-slate-400 transition-all duration-300":
            {},
          "&:focus": {
            "@apply outline-none border-orange-500/50 bg-white/15 shadow-glow":
              {},
          },
        },

        // Form group styling
        ".form-group": {
          "@apply space-y-2": {},
        },

        // Navigation link
        ".nav-link": {
          "@apply relative text-slate-300": {},
          "&::after": {
            content: '""',
            "@apply absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 transition-all duration-300":
              {},
          },
          "&:hover::after, &.active::after": {
            "@apply w-full": {},
          },
        },

        // Animated typing cursor
        ".cursor": {
          "@apply inline-block w-0.5 h-8 bg-orange-400 animate-pulse ml-1": {},
        },
      });
    },

    // Animation delay utilities
    function ({ addUtilities, theme }) {
      const delays = theme("transitionDelay");
      const animationDelays = {
        ".animation-delay-2000": {
          "animation-delay": "2s",
        },
        ".animation-delay-4000": {
          "animation-delay": "4s",
        },
      };

      addUtilities(animationDelays);
    },
  ],
};
