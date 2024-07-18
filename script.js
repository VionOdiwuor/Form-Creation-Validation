document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementbyId("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const isValid = true;
    const messages = [];
    if (username.length < 3) isValid = false;
    messages.push("Username must be at least 3 characters long.");
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value))
      isValid = false;
    messages.push("Email must be a valid email address.");
    if (password.length < 8) isValid = false;
    messages.push("Password must be at least 8 characters long.");
    const feedbackDiv = document.getElementById('feedbackDiv');
    feedbackDiv.style.display ="block";
    if (isValid){
        feedbackDiv.textContent = "Registration Successful"
        feedbackDiv.style.color ="#dc3545";
    } else{
        feedbackDiv.innerHTML= messages.join('<br>');
        feedbackDiv.style.color ="#dc3545";
    }
    


  });
  console.log("DOM fully loaded and parsed");
});
