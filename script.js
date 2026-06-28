const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const projectCards = document.querySelectorAll(".project-card");
const projectPanels = document.querySelectorAll(".project-panel");

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
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

window.addEventListener("load", refreshIcons);
