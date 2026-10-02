const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const navigationLinks = document.querySelectorAll('.site-nav a');

function closeMenu() {
  if (!menuButton || !navigation) return;
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  document.body.classList.remove('menu-open');
}

menuButton?.addEventListener('click', () => {
  if (!navigation) return;
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  document.body.classList.toggle('menu-open', isOpen);
});

navigationLinks.forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
const roles = ["Coder", "Full Stack Developer", "Web Developer"];
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // How long it pauses before erasing
let roleIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < roles[roleIndex].length) {
    typedTextSpan.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    // Word is fully typed out, pause then erase
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    // Word is erased, move to the next word
    roleIndex++;
    if (roleIndex >= roles.length) roleIndex = 0;
    setTimeout(type, typingDelay + 500);
  }
}

// Start the animation when the page loads
document.addEventListener("DOMContentLoaded", function() {
  if (roles.length) setTimeout(type, newTextDelay + 250);
});