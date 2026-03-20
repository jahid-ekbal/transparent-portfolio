// ===== REPOSITORIES PAGE FUNCTIONALITY =====

// ===== LOAD ALL REPOSITORIES =====
async function loadAllRepositories() {
  const loading = document.getElementById("loading");
  const reposGrid = document.getElementById("repos-grid");

  try {
    loading.style.display = "block";

    const [userResponse, reposResponse] = await Promise.all([
      fetch("https://api.github.com/users/jahid-ekbal"),
      fetch(
        "https://api.github.com/users/jahid-ekbal/repos?sort=updated&per_page=100",
      ),
    ]);

    const userData = await userResponse.json();
    const reposData = await reposResponse.json();

    // Update stats
    updateRepoStats(userData, reposData);

    // Load repositories
    displayRepositories(reposData);

    loading.style.display = "none";
  } catch (error) {
    console.error("Error loading repositories:", error);
    loading.innerHTML =
      "<p>Error loading repositories. Please try again later.</p>";
  }
}

// ===== UPDATE REPO STATS =====
function updateRepoStats(user, repos) {
  const repoCount = document.getElementById("repo-count");
  const followerCount = document.getElementById("follower-count-hero");
  const starsCount = document.getElementById("stars-count");
  const navFollowerCount = document.getElementById("follower-count");

  if (repoCount) repoCount.textContent = user.public_repos;
  if (followerCount) followerCount.textContent = user.followers;
  if (navFollowerCount) navFollowerCount.textContent = user.followers;

  const totalStars = repos.reduce(
    (sum, repo) => sum + repo.stargazers_count,
    0,
  );
  if (starsCount) starsCount.textContent = totalStars;
}

// ===== DISPLAY REPOSITORIES =====
function displayRepositories(repos) {
  const reposGrid = document.getElementById("repos-grid");
  if (!reposGrid) return;

  reposGrid.innerHTML = repos
    .map((repo) => {
      const language = repo.language || "Other";
      const languageClass = language.toLowerCase().replace(/\s+/g, "-");

      return `
      <div class="repo-card glass" data-language="${languageClass}">
        <div class="repo-header">
          <h3 class="repo-name">${repo.name}</h3>
          <div class="repo-stats">
            <span class="repo-stat">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              ${repo.stargazers_count}
            </span>
            <span class="repo-stat">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 00-10 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
              </svg>
              ${repo.forks_count}
            </span>
          </div>
        </div>
        <p class="repo-description">${repo.description || "No description available"}</p>
        <div class="repo-footer">
          <div class="repo-language">
            ${repo.language ? `<span class="language-dot" style="background-color: ${getLanguageColor(repo.language)}"></span>${repo.language}` : "Other"}
          </div>
          <div class="repo-date">
            Updated ${new Date(repo.updated_at).toLocaleDateString()}
          </div>
        </div>
        <div class="repo-buttons">
          <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
          <a href="repo-${repo.name}.html" class="btn btn-primary">View Details</a>
        </div>
      </div>
    `;
    })
    .join("");

  // Initialize filtering
  initRepoFilters();
}

// ===== LANGUAGE COLORS =====
function getLanguageColor(language) {
  const colors = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Python: "#3572A5",
    Java: "#ed8b00",
    "C++": "#f34b7d",
    C: "#555555",
    Go: "#00ADD8",
    Rust: "#dea584",
    PHP: "#777BB4",
    Ruby: "#701516",
    Swift: "#ffac45",
    Kotlin: "#F18E33",
    Dart: "#00B4AB",
    Other: "#586069",
  };
  return colors[language] || "#586069";
}

// ===== REPOSITORY FILTERING =====
function initRepoFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      const filter = button.dataset.filter;
      filterRepositories(filter);
    });
  });
}

function filterRepositories(filter) {
  const repoCards = document.querySelectorAll(".repo-card");

  repoCards.forEach((card) => {
    const language = card.dataset.language;

    if (filter === "all") {
      card.style.display = "block";
    } else if (
      filter === "html" &&
      (language === "html" || language === "css")
    ) {
      card.style.display = "block";
    } else if (language === filter) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// ===== BOTTOM NAVIGATION FOR REPOS PAGE =====
function initReposBottomNav() {
  const bottomNavItems = document.querySelectorAll(".bottom-nav-item");

  bottomNavItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (!item.getAttribute("data-section")) {
        // External links don't need special handling
        return;
      }

      e.preventDefault();
      const targetSection = item.getAttribute("data-section");
      const section = document.getElementById(targetSection);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// ===== INITIALIZE REPOS PAGE =====
document.addEventListener("DOMContentLoaded", () => {
  // Initialize theme toggle
  initThemeToggle();

  // Load repositories
  loadAllRepositories();

  // Initialize bottom navigation
  initReposBottomNav();

  // Initialize custom cursor
  initCustomCursor();
});
