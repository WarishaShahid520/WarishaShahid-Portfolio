/*
  CUSTOMIZE THIS FILE:
  1. Replace the example GitHub and LinkedIn URLs with your real profile links.
  2. Add each project's real repository/demo URL below.
  3. Keep URLs empty until they exist; placeholder clicks will explain what to change.
*/
const portfolioConfig = {
  github: "https://github.com/WarishaShahid520",
  linkedin: "https://www.linkedin.com/in/warisha-shahid",
  // NOTE: Project links currently point to your GitHub profile.
  // When each repository is ready, replace with its exact URL,
  // e.g. "https://github.com/WarishaShahid520/dermify"
  projects: {
    dermify:    { github: "https://github.com/WarishaShahid520", demo: "" },
    stockwise:  { github: "https://github.com/WarishaShahid520", demo: "" },
    resume:     { github: "https://github.com/WarishaShahid520", demo: "" },
    bugtracker: { github: "https://github.com/WarishaShahid520", demo: "" }
  }
};

const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const savedTheme = (() => {
  try { return localStorage.getItem("warisha-portfolio-theme"); } catch (error) { return null; }
})();

if (savedTheme === "dark") body.dataset.theme = "dark";
updateThemeButton();

themeToggle.addEventListener("click", () => {
  body.dataset.theme = body.dataset.theme === "dark" ? "light" : "dark";
  try { localStorage.setItem("warisha-portfolio-theme", body.dataset.theme); } catch (error) {}
  updateThemeButton();
});

function updateThemeButton() {
  const isDark = body.dataset.theme === "dark";
  themeToggle.textContent = isDark ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  themeToggle.title = isDark ? "Switch to light theme" : "Switch to dark theme";
}

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("currentYear").textContent = new Date().getFullYear();

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    projectCards.forEach(card => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

const toast = document.getElementById("toast");
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3600);
}

function setProfileLink(elementId, url, label) {
  const element = document.getElementById(elementId);
  if (!element) return;
  if (url && /^https:\/\/.+/i.test(url)) {
    element.href = url;
    element.target = "_blank";
    element.rel = "noopener noreferrer";
    element.textContent = label;
    element.classList.remove("placeholder-social");
    element.removeAttribute("data-placeholder");
  } else {
    element.href = "#contact";
    element.textContent = `Add ${label} URL`;
    element.classList.add("placeholder-social");
    element.addEventListener("click", event => {
      event.preventDefault();
      showToast(`Edit portfolioConfig in script.js and add your real ${label} URL.`);
    });
  }
}
setProfileLink("githubContact", portfolioConfig.github, "GitHub profile");
setProfileLink("linkedinContact", portfolioConfig.linkedin, "LinkedIn profile");

const projectKeys = ["dermify", "stockwise", "resume", "bugtracker"];
projectCards.forEach((card, index) => {
  const project = portfolioConfig.projects[projectKeys[index]];
  const links = card.querySelectorAll(".project-links a");
  const entries = [project.github, project.demo];
  links.forEach((link, linkIndex) => {
    const url = entries[linkIndex];
    if (url && /^https:\/\/.+/i.test(url)) {
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.classList.remove("placeholder-link");
      link.removeAttribute("data-placeholder");
    } else {
      link.href = "#contact";
      link.addEventListener("click", event => {
        event.preventDefault();
        showToast(link.dataset.placeholder || "Add a real project URL in script.js.");
      });
    }
  });
});

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
contactForm.addEventListener("submit", event => {
  event.preventDefault();
  formStatus.classList.remove("error");
  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length < 2) return setFormError("Please enter your name (at least 2 characters).");
  if (!emailPattern.test(email)) return setFormError("Please enter a valid email address.");
  if (message.length < 10) return setFormError("Please write a message with at least 10 characters.");

  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const bodyText = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  formStatus.textContent = "Opening your email app with a draft. The website does not send or store messages.";
  window.location.href = `mailto:warishashahid520@gmail.com?subject=${subject}&body=${bodyText}`;
});
function setFormError(message) {
  formStatus.textContent = message;
  formStatus.classList.add("error");
}

document.getElementById("cvButton").addEventListener("click", event => {
  // This file must be added by the portfolio owner. Avoid pretending a missing CV downloaded.
  fetch("assets/Warisha-Shahid-CV.pdf", { method: "HEAD" }).then(response => {
    if (!response.ok) {
      event.preventDefault();
      showToast("Add your real CV as assets/Warisha-Shahid-CV.pdf first.");
    }
  }).catch(() => {
    // Local file:// browsers may block fetch. The README explains the required file path.
  });
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("visible"));
}
