function addRegister() {
  console.log('a click action');
  
  let signup = document.querySelector('.forLogin');
  let Register = document.querySelector('.forRegister');

  if (Register) {
    signup.style.display = "none";
    Register.style.display = "block";
  }
}

function addLogin() {
  console.log('a click action');
  
  let signup = document.querySelector('.forLogin');
  let Register = document.querySelector('.forRegister');

  if (signup) {
    signup.style.display = "block";
    Register.style.display = "none";
  }
}



// document.querySelector('.forRegister form').addEventListener('submit', async (e) => {
//   e.preventDefault();

//   const username = document.getElementById('signup-username').value;
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('signup-password').value;
//   const confirmPassword = document.getElementById('confirm-password').value;

//   try {
//     const response = await fetch('/api/auth/register', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username, email, password, confirmPassword })
//     });

//     const data = await response.json();
//     if (response.ok) {
//       // Store the token in localStorage
//       localStorage.setItem('token', data.token);
//       alert('Registration successful');
//       window.location.href = '/dashboard'; // Redirect to dashboard
//     } else {
//       alert(data.message);
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// });



// Signup form submission
document.querySelector('#signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('signup-username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('signup-password').value;

  try {
      const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, email, password })
      });

      const data = await response.json();
      if (response.ok) {
          alert('Registration successful');
          window.location.href = '/dashboard';  // Redirect to dashboard
      } else {
          alert(data.message);
      }
  } catch (error) {
      console.error('Error:', error);
  }
});

// Login form submission
document.querySelector('#login-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  try {
      const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      if (response.ok) {
          alert('Login successful');
          window.location.href = '/dashboard';  // Redirect to dashboard
      } else {
          alert(data.message);
      }
  } catch (error) {
      console.error('Error:', error);
  }
});
