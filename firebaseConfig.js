// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX-5qL6Ae_FkriZcbE3FqmtnOHUBlG7eQ",
  authDomain: "sohkreg.firebaseapp.com",
  projectId: "sohkreg",
  storageBucket: "sohkreg.appspot.com",
  messagingSenderId: "380167749702",
  appId: "1:380167749702:web:2492e5aaa640cb98978a47",
  measurementId: "G-PWGDR7YM9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

export  function initFirebase() {
    return app
  }

