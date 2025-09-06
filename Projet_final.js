document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("feedback");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nom = document.getElementById("nom").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!nom || !email || !message) {
        feedback.textContent = "Veuillez remplir tous les champs.";
        feedback.style.color = "red";
      } else {
        feedback.textContent = "Message envoyé avec succès !";
        feedback.style.color = "green";
        form.reset();
      }
    });
  }
});
