# JS and Firebase Tutorial

This is a tutorial of JS and Firebase. We are using vanilla JavaScript and Google Firebase. 

This Tutorial was created for the UVic Web Dev Club. It will be presented during the Summer 2019 Term.

---

This tutorial assumes you have NODE.JS installed.
This tutorial assumes you have GIT installed.

## Requirements

* Google Account
* Firebase Accout
* GitHub Account

* Git
* Node.JS and NPM
* Firebase Cli
* Basic Computer Skills
* Text Editor
* Browser

* Computer
* Charger
* Pen and Paper

## Learning Outcomes

* Become Familiar with Firebase
* Become Familiar with Firebase Deployment
* Understand the process of creating a JS and Firebase Application

# Get started

## Get Local Copy 

1. Navigate to your working directory

2. Clone Repo

3. Change into cloned repository

## Setup

https://firebase.google.com/docs/web/setup

1. Login into Firebase - https://firebase.google.com/

2. Got to console - https://console.firebase.google.com/

3. Create a firebase project - https://firebase.google.com/docs/web/setup?authuser=0#create-project

  - Add a project
  - Name (Custom)
  - Project ID (Default)
  - Canada (Custom)
  - nam5 (us-central) (Default)
  - Accept
  - Accept
  - Create
  - Continue

4. Click Web Icon in the Project Dashboard

5. Register Application - https://firebase.google.com/docs/web/setup?authuser=0#register-app
 - Name
 - Configure Hosting
 - Register

6. ADD SDK Firebase from CDN - https://firebase.google.com/docs/web/setup?authuser=0#add-sdks-initialize
 - Core SDK
 - Auth

7. Initialize Firebase App - https://firebase.google.com/docs/web/setup?authuser=0#config-object

```
var firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appID: "app-id"
};
```

  - Sidebar
  - Cog
  - Settings
  - General
  - Your Application
  - Configuration
  - Copy into index.html

8. Enable email signup - https://firebase.google.com/docs/auth/web/start

  - Sidebar
  - Authentication
  - Connection Methods
  - Email and Password
  - Edit (Pencil)
  - Activate

9. Create a database -> Firestore - https://firebase.google.com/docs/firestore
 
  - Sidebar
  - Database
  - Create a new dataset
  - Test Mode
  - Activate

10. Create a collection

 - Add a collection
 - Addd ID
 - Next
 - Add Fields
 - Save

11. Work on the Application 

 - Remove comments
 - Test different things
 - Have all source code, and just make the blocks of code in comments

--- 

#. Secure database - https://firebase.google.com/docs/firestore/security/overview?authuser=0

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth.uid != null;
    }
  }
}
```

#. Install firebase cli - https://firebase.google.com/docs/web/setup?authuser=0#install-cli_deploy

npm install -g firebase-tools

#. Deploy Application - https://firebase.google.com/docs/hosting/quickstart?authuser=0#initialize

firebase login

firebase init

- Firestore
- Hosting

- Select Project

- Default (firestore.rules)
  
- Default (firestore.indexes.json)

- Default (public)

- No (Single Page App)

- No (Overwrite)

firebase deploy

#. Visit https://js-firebase-tutorial-77077.web.app/

What did I use?

* Firebase - https://firebase.google.com/
* GitHub - https://github.com/
* Bootstrap 4 - https://getbootstrap.com/
* Vanilla JS

Docs

* Bootstrap - https://getbootstrap.com/docs/4.3/getting-started/introduction/
* Auth - https://firebase.google.com/docs/firestore/security/get-started
* Firestore Data - https://firebase.google.com/docs/firestore/manage-data/structure-data
* Get Started - https://firebase.google.com/docs/web/setup

Further Reading

* https://www.codementor.io/cultofmetatron/when-you-should-and-shouldn-t-use-firebase-f62bo3gxv
* https://pamartinezandres.com/lessons-learnt-the-hard-way-using-firebase-realtime-database-c609b52b9afb
* https://www.quora.com/What-are-some-good-uses-for-Firebase