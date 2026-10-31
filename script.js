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
