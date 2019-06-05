// Auth Check - https://firebase.google.com/docs/auth/web/password-auth#get_the_currently_signed-in_user
firebase.auth().onAuthStateChanged(firebaseUser => {
  // If firebaseUser -> courses.html
  if (firebaseUser) {
    window.location = "courses.html";
  }
});

// Signup - https://firebase.google.com/docs/auth/web/password-auth#create_a_password-based_account
function signup() {
  // Grab data from the signup inputs
  let email = document.getElementById('signupEmail').value;
  let password = document.getElementById('signupPassword').value;

  // Create User -> If Error Alert
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    alert(errorCode + ": " + errorMessage);
  });
}

// Allows for button to be keyboard accessible
for (let cell of document.querySelectorAll(".signup")) {
  cell.addEventListener("keyup", function (event) {
    if (event.key !== "Enter") return;
    document.querySelector("#signup").click();
    event.preventDefault();
  })
};

// Signin - https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
function signin() {
  // Grab data from the signin inputs
  let email = document.getElementById('signinEmail').value;
  let password = document.getElementById('signinPassword').value;

  // Signin User -> If Error Alert
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    alert(errorCode + ": " + errorMessage);
  });
}

// Allows for button to be keyboard accessible
for (let cell of document.querySelectorAll(".signin")) {
  cell.addEventListener("keyup", function (event) {
    if (event.key !== "Enter") return;
    document.querySelector("#signin").click();
    event.preventDefault();
  })
};

// Change to Signup Form 
function changeToSignup() {
  // Hide Signin
  let elementsToHide = document.getElementsByClassName("changeToSignup");
  for (let i = 0, length = elementsToHide.length; i < length; i++) {
    elementsToHide[i].style.display = 'none';
  }
  // Show Signup
  let elementsToShow = document.getElementsByClassName("changeToSignin");
  for (let i = 0, length = elementsToShow.length; i < length; i++) {
    elementsToShow[i].style.display = 'block';
  }
}

// Change to Signin Form
function changeToSignin() {
  // Hide Signup
  let elementsToHide = document.getElementsByClassName("changeToSignin");
  for (let i = 0, length = elementsToHide.length; i < length; i++) {
    elementsToHide[i].style.display = 'none';
  }
  // Show Signin
  let elementsToShow = document.getElementsByClassName("changeToSignup");
  for (let i = 0, length = elementsToShow.length; i < length; i++) {
    elementsToShow[i].style.display = 'block';
  }
}