/*
  PERSONALIZE THIS FILE BEFORE PUBLISHING:
  1. Set CONTACT_EMAIL to Dominic's real contact email address.
  2. Update the project cards and social links in index.html to match real work.
*/
const CONTACT_EMAIL = "YOUR_EMAIL_HERE";

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const contactButton = document.querySelector("#contact-button");
const contactHint = document.querySelector("#contact-hint");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    siteNav.classList.toggle("is-open", !isOpen);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

if (contactButton) {
  contactButton.addEventListener("click", () => {
    const email = CONTACT_EMAIL.trim();
    if (!email || email === "YOUR_EMAIL_HERE" || !email.includes("@")) {
      contactHint.textContent = "Set Dominic’s real email in CONTACT_EMAIL at the top of script.js to activate this button.";
      contactHint.classList.add("is-warning");
      return;
    }
    window.location.href = `mailto:${email}?subject=${encodeURIComponent("Hello, Dominic")}`;
  });
}
