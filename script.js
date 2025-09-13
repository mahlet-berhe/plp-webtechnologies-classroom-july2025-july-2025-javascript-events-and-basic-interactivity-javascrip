// 🌗 Light/Dark Mode Toggle
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🎮 Counter Game
let score = 0;
document.getElementById("increase").addEventListener("click", () => {
  score++;
  document.getElementById("score").textContent = score;
});

document.getElementById("reset").addEventListener("click", () => {
  score = 0;
  document.getElementById("score").textContent = score;
});

// ❓ FAQ Toggle
document.getElementById("toggle-faq").addEventListener("click", () => {
  const answer = document.getElementById("faq-answer");
  answer.style.display = answer.style.display === "none" ? "block" : "none";
});

// 📋 Form Validation
document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const feedback = document.getElementById("form-feedback");

  let errors = [];

  // Name validation
  if (name.length < 2) {
    errors.push("Name must be at least 2 characters.");
  }

  // Email validation using regex
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  // Password validation
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  // Display feedback
  if (errors.length > 0) {
    feedback.innerHTML = `<ul style="color: red;">${errors.map(e => `<li>${e}</li>`).join("")}</ul>`;
  } else {
    feedback.innerHTML = `<p style="color: green;">✅ Form submitted successfully!</p>`;
    document.getElementById("signup-form").reset();
  }
});