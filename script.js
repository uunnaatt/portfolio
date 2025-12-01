// MENU TOGGLE
const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuButton.textContent = isOpen ? "✕" : "☰";
});

// SCROLL PROGRESS BAR
const progress = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const progressValue = (window.scrollY / total) * 100;
  progress.style.width = progressValue + "%";
});

// CONTACT FORM HANDLING
const form = document.getElementById("contact-form-id");
const msg = document.getElementById("form-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    msg.textContent = "Please fill out all fields.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Thank you for your message!";
  msg.style.color = "lightgreen";
  form.reset();
});

// FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();
