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