//Update the below URL with the appropriate version if necessary.
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  //Update the below URL with the appropriate version if necessary.
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyByri3xiAKMrO8U4zGoDaFoHy3UQ9E9PCA",
  authDomain: "semaforointeligente-8f417.firebaseapp.com",
  databaseURL: "https://semaforointeligente-8f417-default-rtdb.firebaseio.com",
  projectId: "semaforointeligente-8f417",
  storageBucket: "semaforointeligente-8f417.appspot.com",
  messagingSenderId: "312844064346",
  appId: "1:312844064346:web:2ff623b8412f508276ea63",
};
// INSERT YOUR FIREBASE CONFIG OBJECT HERE

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const authForm = document.querySelector(".right-login");
const secretContent = document.querySelector("#secretContent");
const signUpButton = document.querySelector("#signUpButton");
const signInButton = document.querySelector("#signInButton");
const signOutButton = document.querySelector("#signOutButton");

const userSignUp = async () => {
  const signUpEmail = userEmail.value;
  const signUpPassword = userPassword.value;
  createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert("Sua conta foi criada com sucesso!");
    })
    .catch((error) => {
      alert("Email ja cadastrado, ou senha com menos de 6 digitos!");
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   console.log(errorCode + errorMessage);
    });
};

const userSignIn = async () => {
  const signInEmail = userEmail.value;
  const signInPassword = userPassword.value;
  signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Login com sucesso!");
    })
    .catch((error) => {
      alert("Email não cadastrado, ou senha errada!");
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // console.log(errorCode + errorMessage);
    });
};

const checkAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      authForm.style.display = "none";
      secretContent.style.display = "block";
    } else {
      authForm.style.display = "block";
      secretContent.style.display = "none";
    }
  });
};

const userSignOut = async () => {
  await signOut(auth);
};

checkAuthState();

signUpButton.addEventListener("click", userSignUp);
signInButton.addEventListener("click", userSignIn);
signOutButton.addEventListener("click", userSignOut);
