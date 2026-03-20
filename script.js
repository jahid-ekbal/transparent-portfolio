// ===== THEME TOGGLE (BUTTON) =====
function initThemeToggle() {
  const themeButton = document.getElementById("theme-switch");
  const body = document.body;

  const currentTheme = localStorage.getItem("theme") || "dark";
  body.classList.toggle("light-theme", currentTheme === "light");
  applyThemeBackground(currentTheme);

  function updateButtonLabel(theme) {
    if (!themeButton) return;
    themeButton.innerHTML =
      theme === "light" ?
        '<i data-lucide="sun" stroke-width="2.5"></i>'
      : '<i data-lucide="moon" stroke-width="2.5"></i>';
    themeButton.classList.toggle("active", theme === "light");
    if (window.lucide) {
      lucide.replace();
    }
  }

  function applyThemeBackground(theme) {
    if (theme === "light") {
      body.style.backgroundColor = "#ffffff";
      body.style.transition = "background-color 0.4s ease";
    } else {
      body.style.backgroundColor = "#020812";
      body.style.transition = "background-color 0.4s ease";
    }
  }

  updateButtonLabel(currentTheme);

  if (themeButton) {
    themeButton.addEventListener("click", () => {
      const isLight = body.classList.toggle("light-theme");
      const newTheme = isLight ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      applyThemeBackground(newTheme);
      updateButtonLabel(newTheme);
    });
  }
}

// ===== GITHUB API INTEGRATION =====
async function fetchGitHubData() {
  try {
    const [userResponse, reposResponse] = await Promise.all([
      fetch("https://api.github.com/users/jahid-ekbal"),
      fetch(
        "https://api.github.com/users/jahid-ekbal/repos?sort=updated&per_page=6",
      ),
    ]);

    const userData = await userResponse.json();
    const reposData = await reposResponse.json();

    // Update follower count
    const followerCount = document.getElementById("follower-count");
    if (followerCount) {
      followerCount.textContent = userData.followers;
    }

    // Load projects
    loadProjects(reposData);

    return { user: userData, repos: reposData };
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    // Fallback: load some default projects
    loadFallbackProjects();
  }
}

function loadProjects(repos) {
  const projectsGrid = document.getElementById("projects-grid");
  if (!projectsGrid) return;

  const featuredRepos = repos.slice(0, 3); // Show only first 3 repos on main page

  projectsGrid.innerHTML = featuredRepos
    .map((repo) => {
      const accentColors = ["cyan", "purple", "pink"];
      const randomColor =
        accentColors[Math.floor(Math.random() * accentColors.length)];

      return `
      <div class="project-card glass">
        <div class="project-accent ${randomColor}"></div>
        <h3>${repo.name.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}</h3>
        <p>${repo.description || "No description available"}</p>
        <div class="project-tags">
          ${repo.language ? `<span>${repo.language}</span>` : ""}
          <span>${repo.stargazers_count} ⭐</span>
          <span>${repo.forks_count} 🍴</span>
        </div>
        <div class="project-buttons">
          <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">GitHub ↗</a>
          <a href="repo-${repo.name}.html" class="btn btn-ghost">Details ↗</a>
        </div>
      </div>
    `;
    })
    .join("");
}

function loadFallbackProjects() {
  const projectsGrid = document.getElementById("projects-grid");
  if (!projectsGrid) return;

  projectsGrid.innerHTML = `
    <div class="project-card glass">
      <div class="project-accent cyan"></div>
      <h3>Flash-R</h3>
      <p>OS flasher web solution for device flashing and management.</p>
      <div class="project-tags">
        <span>TypeScript</span>
        <span>24 ⭐</span>
      </div>
      <div class="project-buttons">
        <a href="https://github.com/jahid-ekbal/flash-r" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">GitHub ↗</a>
        <a href="repo-flash-r.html" class="btn btn-ghost">Details ↗</a>
      </div>
    </div>
    <div class="project-card glass">
      <div class="project-accent purple"></div>
      <h3>Team Regix Demo</h3>
      <p>Demo esports platform built with Claude AI - full-stack UI in pure HTML/CSS/JS.</p>
      <div class="project-tags">
        <span>HTML</span>
        <span>CSS</span>
        <span>JS</span>
      </div>
      <div class="project-buttons">
        <a href="https://github.com/jahid-ekbal/team-regix-demo" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">GitHub ↗</a>
        <a href="repo-team-regix-demo.html" class="btn btn-ghost">Details ↗</a>
      </div>
    </div>
    <div class="project-card glass">
      <div class="project-accent pink"></div>
      <h3>Venus NextJS Fullstack</h3>
      <p>Full-stack application built with Next.js and modern web technologies.</p>
      <div class="project-tags">
        <span>TypeScript</span>
        <span>Next.js</span>
      </div>
      <div class="project-buttons">
        <a href="https://github.com/jahid-ekbal/venus-nextjs-fullstack" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">GitHub ↗</a>
        <a href="repo-venus-nextjs-fullstack.html" class="btn btn-ghost">Details ↗</a>
      </div>
    </div>
  `;
}

// ===== BOTTOM NAVIGATION =====
function initBottomNav() {
  const bottomNavItems = document.querySelectorAll(".bottom-nav-item");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  bottomNavItems.forEach((item) => {
    const href = item.getAttribute("href");
    item.classList.toggle("active", href === currentPage);
  });
}

// ===== TYPEWRITER EFFECT =====
class Typewriter {
  constructor(element, words, wait = 3000) {
    this.element = element;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.element.innerHTML = `<span class="role-text">${this.txt}</span>`;

    let typeSpeed = 100;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// ===== TERMINAL ANIMATION =====
function animateTerminal() {
  const terminalLines = document.querySelectorAll(".terminal-content p");
  let delay = 500;

  terminalLines.forEach((line, index) => {
    setTimeout(() => {
      line.style.opacity = "1";
      line.style.transform = "translateX(0)";
    }, delay * index);
  });
}

// ===== SCROLL REVEAL =====
function revealOnScroll() {
  const reveals = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("reveal", "active");
          }, index * 100);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  reveals.forEach((reveal) => observer.observe(reveal));
}

// ===== NAV ACTIVE STATE =====
function updateActiveNavLink() {
  const navLinks = document.querySelectorAll(".nav-link");
  if (navLinks.length === 0) return;

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href");

    if (currentPage === "" && href === "index.html") {
      link.classList.add("active");
    } else if (href === currentPage) {
      link.classList.add("active");
    }
  });
}

// ===== NAV SCROLL EFFECT =====
function handleNavScroll() {
  const nav = document.querySelector(".glass-nav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
}

// ===== HAMBURGER MENU =====
function initHamburgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close menu when clicking a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

// ===== COPY TO CLIPBOARD =====
function initCopyToClipboard() {
  document.querySelectorAll(".email").forEach((email) => {
    email.addEventListener("click", async () => {
      const emailText = email.dataset.email;
      try {
        await navigator.clipboard.writeText(emailText);
        showTooltip(email, "Copied! 📋");
      } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = emailText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        showTooltip(email, "Copied! 📋");
      }
    });
  });
}

function showTooltip(element, text) {
  const tooltip = document.createElement("div");
  tooltip.textContent = text;
  tooltip.style.cssText = `
        position: absolute;
        background: rgba(0, 245, 255, 0.9);
        color: #020812;
        padding: 0.5rem 1rem;
        border-radius: 50px;
        font-size: 0.8rem;
        font-weight: 600;
        pointer-events: none;
        z-index: 1000;
        backdrop-filter: blur(10px);
        animation: fadeInOut 2s ease;
    `;

  document.body.appendChild(tooltip);

  const rect = element.getBoundingClientRect();
  tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
  tooltip.style.top = `${rect.top - 40}px`;

  setTimeout(() => {
    document.body.removeChild(tooltip);
  }, 2000);
}

// ===== CONTACT FORM =====
function initContactForm() {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Here you would normally send the data to a server
    // For now, we'll just show a success message
    showFormMessage("Message sent! I'll reply soon. 🚀", "success");

    // Reset form
    form.reset();
  });
}

function showFormMessage(message, type) {
  const form = document.getElementById("contactForm");
  const existingMessage = form.querySelector(".form-message");

  if (existingMessage) {
    existingMessage.remove();
  }

  const messageDiv = document.createElement("div");
  messageDiv.className = `form-message ${type}`;
  messageDiv.textContent = message;
  messageDiv.style.cssText = `
        padding: 1rem;
        border-radius: 10px;
        margin-top: 1rem;
        text-align: center;
        font-weight: 600;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(0, 245, 255, 0.2);
        background: rgba(0, 245, 255, 0.1);
        color: #00F5FF;
        animation: fadeIn 0.5s ease;
    `;

  form.appendChild(messageDiv);

  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}

// ===== INITIALIZE EVERYTHING =====
document.addEventListener("DOMContentLoaded", () => {
  // Initialize theme toggle
  initThemeToggle();

  // Fetch GitHub data
  fetchGitHubData();

  // Initialize typewriter
  const roleElement = document.querySelector(".hero-role");
  if (roleElement) {
    const roles = [
      "Full-Stack Developer",
      "UI/UX Designer",
      "Esports Platform Builder",
      "Founder @ REGIX Studio",
    ];
    new Typewriter(roleElement, roles, 2000);
  }

  // Initialize terminal animation
  if (document.querySelectorAll(".terminal-content p").length) {
    setTimeout(animateTerminal, 1000);
  }

  // Initialize lucide icons
  if (window.lucide) {
    lucide.replace({ "stroke-width": 2, color: "currentColor" });
  }

  // Initialize scroll reveal
  revealOnScroll();

  // Initialize nav active state
  updateActiveNavLink();

  // Initialize nav scroll effect
  handleNavScroll();

  // Initialize hamburger menu
  initHamburgerMenu();

  // Initialize bottom navigation
  initBottomNav();

  // Initialize copy to clipboard
  initCopyToClipboard();

  // Initialize contact form
  initContactForm();

  // Add initial animations
  setTimeout(() => {
    const heroContent = document.querySelector(".hero-content");
    if (heroContent) {
      heroContent.style.opacity = "1";
      heroContent.style.transform = "translateY(0)";
    }
  }, 500);
});

// ===== TERMINAL LINE ANIMATIONS =====
const terminalLines = document.querySelectorAll(".terminal-content p");
if (terminalLines.length) {
  terminalLines.forEach((line) => {
    line.style.opacity = "0";
    line.style.transform = "translateX(-20px)";
    line.style.transition = "all 0.5s ease";
  });
}
