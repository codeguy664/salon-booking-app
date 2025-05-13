document.addEventListener('DOMContentLoaded', function () {
  const registerForm = document.getElementById('registerForm');

  if (!registerForm) {
    console.error('❌ registerForm not found in the DOM');
    return;
  }

  registerForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (!nameInput || !emailInput || !passwordInput) {
      alert('❌ One or more input fields are missing.');
      return;
    }

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!name || !email || !password) {
      alert('❌ Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('✅ Registration successful! Please log in.');
        window.location.href = 'login.html'; // Redirect to login
      } else {
        alert(`❌ Registration failed: ${data.message || 'Try again'}`);
      }
    } catch (error) {
      console.error('❌ Error:', error);
      alert('❌ Something went wrong. Please try again later.');
    }
  });
});
