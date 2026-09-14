const nav = document.querySelector(".site-nav");
const toggle = document.querySelector(".nav-toggle");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

const markCurrent = () => {
  const position = window.scrollY + 120;
  let current = sections[0];

  sections.forEach((section) => {
    if (section.offsetTop <= position) {
      current = section;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("is-current", link.getAttribute("href") === `#${current.id}`);
  });
};

window.addEventListener("scroll", markCurrent, { passive: true });
markCurrent();
