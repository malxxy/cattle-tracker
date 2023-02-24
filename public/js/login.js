const loginFormHandler = async (event) => {
  event.preventDefault();

  console.log("hello")

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to log in.');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  // Add ranch name
  const ranchName = document.querySelector('#ranch-signup').value.trim();
  console.log("ranch name",ranchName);


  if (username && email && password && ranchName) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password, ranchName }), // added ranch name
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log("POSTED RANCH NAME!");
      document.location.replace('/dashboard');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('#login-form') // when user selects on login button, initiate user login
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('#signup-form') // when user selects on sign up form, use post route to add user info to database
  .addEventListener('submit', signupFormHandler);