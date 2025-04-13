// frontend/js/register.js
document.getElementById('registerForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('✅ Registration successful! Please log in.');
        window.location.href = 'index.html';
      } else {
        alert(`❌ Registration failed: ${data.message}`);
      }
    } catch (error) {
      console.error('❌ Error:', error);
      alert('❌ Something went wrong');
    }
  });
  