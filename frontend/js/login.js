document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');

  if (!loginForm) {
    console.error('❌ loginForm not found in the DOM');
    return;
  }

  loginForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (!emailInput || !passwordInput) {
      alert('❌ Email or Password field missing in the form.');
      return;
    }

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
      alert('❌ Please enter both email and password.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('✅ Login successful!');
        localStorage.setItem('token', data.token);

        // ✅ Redirect to appointment page
        window.location.href = 'appointment.html';
      } else {
        alert(`❌ Login failed: ${data.message || 'Invalid credentials'}`);
      }
    } catch (error) {
      console.error('❌ Error:', error);
      alert('❌ Something went wrong. Please try again later.');
    }
  });
});
