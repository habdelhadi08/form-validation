const registrationForm = document.getElementById("registration");
const username= document.getElementById("username");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("passwordcheck");
const terms = document.getElementById("terms");

console.log(username);
console.log(password);
console.log(email);

const errorDisplayDiv = document.getElementById('errorDisplay');

registrationForm.addEventListener("submit", validate);
console.log(registrationForm);





//Main Validate function
// registration form validation

function validate(e) {
  const usernameValue = checkUserName();
   if (usernameValue === false) {
    e.preventDefault();
       e.returnValue = false;
       return false;
   }
const emailValue = checkEmail();
if (emailValue === false) {
  e.preventDefault();
  evt.returnValue = false;
  return false;
}

const passwordValue = checkPassword();
if (passwordValue === false) {
  e.preventDefault();
  evt.returnValue = false;
  return false;
}
const passwordCheckValue = checkRepeatPassword();
if (passwordCheckValue === false) {
  e.preventDefault();
  evt.returnValue = false;
  return false;
}
if(passwordValue !== passwordCheckValue){
  alert('password must match');
  return false;
  } else {
    return true;
  }};
  /**
 * Validate Username
 */
function checkusername() {
  const twoUniqueChars = /^(?=.*(.).*\1).*$/;

  if (!twoUniqueChars.test(usernameValue)) {
    console.log("Provide two special characters");
    username.focus();
    return false;
  }
  return usernameValue;
}
  function checkUserName() {
    // Regex: checks for two at least unique characters
    // and no special characters or whitespace
    const regex = /^(?=.*(.).*\1)[A-Za-z0-9]{2,}$/;
  
    // test regex
    console.log(regex.test(username.value));
  
    if (!regex.test(username.value)) {
      console.log("gere");
      errorDisplayDiv.innerHTML = "<small>Provide two special characters</small>";
      errorDisplayDiv.style.display = "block";
  
      username.focus();
      return false;
    }
    return username.value;
  }
  

  // Registration Form - Email Validation:
  // The email must be a valid email address.
  // The email must not be from the domain "example.com.

//Email Validation:
function checkEmail() {
  const email = document.getElementById("email").value;
  const emailError = document.getElementById("emailError");
  const exampleComCheck = /@exaple\.com$/i;
  emailError = "";
  const emailRegex = /^[A-Z0-9._%+-]+@{A-Z0-9.-}+\.[A-Z]{2,}$/I;
  
  if (!email.match(emailRegex)) {
  emailError.innerHTML = "Please enter a valid email address.";
  return false;
  }
  
  if (exampleComCheck.test(email)) {
  emailError.innerHTML = "Emails like 'example.com' domains are not valid email.";
  return false;
  }
  return true;
  }

   
// const termsVal = validateterms();
// if (termsVal === false) {
//   evt.returnValue = false;
//   return false;
//password and repeat password must match
function checkPassword(password, username){
  if (password.value.length < 12) { //Passwords must be at least 12 characters long.
   alert("Password must be at least 12 characters long.");
      password.focus();
      return false;
  }
  if (!/[A-Z]/.test(password))  //Passwords must have at least one uppercase letter.
      {alert("Password must contain at least one uppercase letter.");
      password.focus();
      return false;
  }
  if (!/[a-z]/.test(password)) {//Passwords must have at least one lowercase letter.
      alert("Password must contain at least one lowercase letter.");
      password.focus();
      return false;
  }
  if (!/\d/.test(password)) { //Passwords must contain at least one number.
      alert("Password must contain at least one number.");
      password.focus();
      return false;
  }
  if (!/[^a-zA-Z0-9]/.test(password)) { //Passwords must contain at least one special character.
      alert("Password must contain at least one special character.");
      password.focus();
      return false;
  }
  if (password.value.toLowerCase().includes('password')) { //Passwords cannot contain the word "password" (uppercase, lowercase, or mixed).
      alert("Password cannot contain the word 'password'.");
      password.focus();
      return false;
  }
  if (password.value.toLowerCase().includes(username.value.toLowerCase())) { // Passwords cannot contain the username.
      alert("Password cannot contain the username.");
      password.focus();
      return false;
  }};
  


function validCheckPassword() {
  if (checkPassword.value === "") {
      alert("Please repeat the password.");
      checkPassword.focus();
      return false;
  }
  return true;
}

// alert(`Name: ${userNameVal}
//     Email: ${emailVal}
//     Password: ${passwordVal}
//     Password Check: ${passwordCheckVal}
//     Password: ...that's a secret.`);

// return true;

// Login Form
const loginForm = document.getElementById("login");
const username1 = loginForm.elements["username"];
const password1 = loginForm.elements["password"];
// login form validation
function validate(evt) {
  const username1Value = checkUserName();
  if (username1 === false) {
    evt.returnValue = false;
    return false;
  }


const password1Value = checkPassword();
if (password1Value === false) {
  evt.returnValue = false;
  return false;
}
alert(`Name: ${username1Value}

    Password: ${password1Value}
   
    Password: ...that's a secret.`);

return true;
}

//part 3
/**
 * Validate Username
 */
//Username Validation:
// function validateUserName() {
//     const username = document.getElementById("username").value;
//     const usernameError = document.getElementById("usernameError");
//     const specialCharacters = /[^A-Za-z0-9]/;
//     usernameError.innerHTML = "";
//     if (username === "") {
//         usernameError.innerHTML = "Username cannot be blank. Enter Username.";
//         return false;
//     }
//     if (username.length < 4) {
//         usernameError.innerHTML = "Username must be four characters long.";
//         return false;
//     }
//     const uniqueCharacters = new Set(username);
//     if (uniqueCharacters.size < 2) {
//         usernameError.innerHTML = "Username must contain at least two unique characters.";
//         return false;
//     }
//     if (specialCharacters.test(username)) {
//         usernameError.innerHTML = "Username cannot contain special characters or white spaces.";
//         return false;
//     }
//     return true;
// }
// //Email Validation:
// function validateEmail() {
// const email = document.getElementById("email").value;
// const emailError = document.getElementById("emailError");
// const exampleComCheck = /@exaple\.com$/i;
// emailError = "";
// const emailRegex = /^[A-Z0-9._%+-]+@{A-Z0-9.-}+\.[A-Z]{2,}$/I;
// if (!email.match(emailRegex)) {
//     emailError.innerHTML = "Please enter a valid email address.";
//     return false;
// }
// if (exampleComCheck.test(email)) {
//     emailError.innerHTML = "Emails like 'example.com' domains are not valid email.";
//     return false;
// }
// return true;
// }
// //Password Validation:
// function validatePassword() {
//     const password = document.getElementById("password").value;
//     const confirmPassword = document.getElementById("confirmPassword").value;
//     const passwordError = document.getElementById("passwordError");
//     password.innerHTML = "";
// if (password.length !== 12) {
//     password.innerHTML = "Passwords must be 12 characters long";
//     return false;
// }
// if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
//     passwordError.innerHTML = "Passwords must contain at least one uppercase and one lowercase letter."
//     return false;
// }
// if (!/\d/.test(password)) {
//     passwordError.innerHTML = "Passwords must contain at least one number.";
//     return false;
// }
// if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
//     passwordError.innerHTML = "Passwords must contain at least one special charater";
//     return false;
// }
// if (/(password)/i.test(password)) {
//     passwordError.innerHTML = "Passwords cannot contain the word 'password'.";
//     return false;
// }
// const username = document.getElementById("username").value;
// if (password.includes(username)) {
//     passwordError.innerHTML = "Passwords cannot contain username.";
//     return false;
// }
// if(password !== confirmPassword) {
//     passwordError.innerHTML = "Passwords do not match.";
//     return false;
// }
//     return true;
// }
// //Terms and Conditions accepted:
// function validateTermsandConditions () {
//     const acceptCheckbox = document.getElementById("acceptTermsandCond");
//     if(!acceptCheckbox.checked) {
//         validateTermsandConditions.innerHTML = "You must accept the Terms and Conditions to continue form submission."
//         return false;
//     }
//     return true;
// }
// //Registration form submission
// //May need Node.js continuing to part 4.
// //Part 4
// // Login Form Username Validation:








const uniqueCharacters = new Set(username);
if (uniqueCharacters.size < 2) {
    usernameError.innerHTML = "Username must contain at least two unique characters.";
    return false;
}

if (specialCharacters.test(username)) {
    usernameError.innerHTML = "Username cannot contain special characters or white spaces.";
    return false;
}
return true;


