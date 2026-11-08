/* Agentic Loop Demo - Login Form */

(function () {
  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const successMessage = document.getElementById('successMessage');
  const submitBtn = document.getElementById('submitBtn');

  if (!form || !emailInput || !emailError) {
    return;
  }

  // Clear error on input
  emailInput.addEventListener('input', function () {
    emailInput.classList.remove('error');
    emailError.textContent = '';
    successMessage.classList.add('hidden');
    successMessage.textContent = '';
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const result = validateEmail(email);

    if (!result.valid) {
      emailInput.classList.add('error');
      emailError.textContent = result.error;
      emailInput.focus();
      successMessage.classList.add('hidden');
      successMessage.textContent = '';
      return;
    }

    // Valid email — clear errors, show success
    emailInput.classList.remove('error');
    emailError.textContent = '';
    successMessage.classList.remove('hidden');
    successMessage.textContent = 'Welcome! Email validated successfully.';
    submitBtn.textContent = 'Signed in';
    submitBtn.disabled = true;
  });
})();
