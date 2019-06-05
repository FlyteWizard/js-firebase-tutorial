// Global Variables 

// Initialize the user
let user = "";
// Initialize the db
let db = firebase.firestore();

// Auth Check - https://firebase.google.com/docs/auth/web/password-auth#get_the_currently_signed-in_user
firebase.auth().onAuthStateChanged(firebaseUser => {
  // If not firebaseUser -> index.html
  // Else set user
  if (!firebaseUser) {
    window.location = "index.html";
  } else {
    user = firebaseUser.uid;
  }
});

// Add A Course - https://firebase.google.com/docs/firestore/quickstart#add_data
function addCourse() {
  // Grab data from the course inputs
  let courseName = document.getElementById('courseName').value;
  let courseNumber = document.getElementById('courseNumber').value;

  // Add data to the courses collection
  db.collection("courses").add({
    courseName: courseName,
    courseNumber: courseNumber,
    courseAuthor: user
  }).then(function (docRef) {
    console.log("Document written with ID: ", docRef.id);
    location.reload();
  }).catch(function (error) {
    console.error("Error adding document: ", error);
  });
};

// Allows for button to be keyboard accessible
for (let cell of document.querySelectorAll(".form-control")) {
  cell.addEventListener("keyup", function (event) {
    if (event.key !== "Enter") return;
    document.querySelector("#course").click();
    event.preventDefault();
  })
};

// Get All Courses - https://firebase.google.com/docs/firestore/quickstart#read_data
function getAllCourses() {
  db.collection("courses").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // If courseAuthor is user
      if (doc.data().courseAuthor === user) {
        // Create `div` Element
        let div = document.createElement('div');
        // Give `div` Element Class
        div.className = 'col-sm-6';
        // Add Information
        div.innerHTML =
          '<div class="card">\
            <h5 class="card-header">' + doc.data().courseName + '</h5>\
            <div class="card-body">\
              <h5 class="card-title">' + doc.data().courseNumber + '</h5>\
              <button class="btn btn-danger" onclick="deleteCourse(\'' + doc.id + '\')">Delete</button>\
            </div>\
          </div>';
        // Insert Courses Into `div“ Element
        document.getElementById('coursesList').appendChild(div);
      }
    });
  });
}

// Delete A Course - https://firebase.google.com/docs/firestore/manage-data/delete-data#delete_documents
// Accepts `id` Paramenter
function deleteCourse(id) {
  db.collection('courses').doc(id).delete().then(function () {
    console.log("Document successfully deleted!");
    location.reload();
  }).catch(function (error) {
    console.error("Error removing document: ", error);
  });
};

// Signout - https://firebase.google.com/docs/auth/web/password-auth#next_steps
function signout() {
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
    console.log("Successfully signed out.");
  }).catch(function (error) {
    // An error happened.
    console.error("Error login out: ", error);
  });
}