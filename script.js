const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const projectCards = document.querySelectorAll(".project-card");
const projectPanels = document.querySelectorAll(".project-panel");
const scrollProgress = document.querySelector(".scroll-progress");

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function updateScrollUi() {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

  scrollProgress.style.width = `${progress}%`;
  header.classList.toggle("is-scrolled", scrollTop > 16);
}

navToggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

projectCards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    card.style.setProperty("--x", `${x}%`);
    card.style.setProperty("--y", `${y}%`);
  });

  card.addEventListener("click", () => {
    const targetId = card.dataset.project;

    projectCards.forEach((item) => item.classList.remove("is-active"));
    projectPanels.forEach((panel) => panel.classList.remove("is-visible"));

    card.classList.add("is-active");
    document.getElementById(targetId)?.classList.add("is-visible");
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

window.addEventListener("scroll", updateScrollUi, { passive: true });
window.addEventListener("load", refreshIcons);
window.addEventListener("load", updateScrollUi);
