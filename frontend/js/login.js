document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('✅ Login successful!');
        localStorage.setItem('token', data.token);
        window.location.href = 'appointment.html'; // ✅ Redirect here
      } else {
        alert(`❌ Login failed: ${data.message}`);
      }
    } catch (error) {
      console.error('❌ Error:', error);
      alert('❌ Something went wrong');
    }
  });
  