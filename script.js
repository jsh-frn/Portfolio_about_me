const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// Replace the sample destinations in index.html with your real profile URLs.
// The script warns if the default links are still present.
const placeholderLinks = [...document.querySelectorAll("[data-placeholder-link]")];
const warning = document.querySelector("#contactWarning");
const stillNeedsLinks = placeholderLinks.some((link) => {
  const type = link.dataset.placeholderLink;
  if (type === "github") return link.getAttribute("href") === "https://github.com/";
  if (type === "linkedin") return link.getAttribute("href") === "https://www.linkedin.com/";
  if (type === "email") return link.getAttribute("href") === "mailto:";
  return false;
});
if (warning && !stillNeedsLinks) warning.hidden = true;

// Active navigation state based on scroll position
const sections = [...document.querySelectorAll("main section[id]")];
const navAnchors = [...document.querySelectorAll(".nav-links a[href^='#']")];
if (sections.length && navAnchors.length) {
  const map = new Map();
  navAnchors.forEach((a) => {
    const id = a.getAttribute("href").slice(1);
    map.set(id, a);
  });
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        const link = map.get(id);
        if (link) {
          if (entry.isIntersecting) {
            navAnchors.forEach((a) => a.classList.remove("active"));
            link.classList.add("active");
          }
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );
  sections.forEach((sec) => observer.observe(sec));
}

// Reveal-on-scroll animations
const revealItems = [...document.querySelectorAll("section, .project-card, .badge-card, .skill-group")];
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!prefersReduced) {
  revealItems.forEach((el) => el.classList.add("reveal"));
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealItems.forEach((el) => revealObserver.observe(el));
} else {
  revealItems.forEach((el) => el.classList.add("is-visible"));
}
