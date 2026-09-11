const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const error = document.getElementById("error");

  if (name === "" || email === "" || message === "") {
    error.textContent = "Please fill all fields.";
    return;
  }

  if (!email.includes("@")) {
    error.textContent = "Please enter a valid email.";
    return;
  }

  // error.textContent = "Message sent successfully!";
  const success = document.getElementById("success");
  success.textContent = "Message sent successfully!";

  form.reset();
});