// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqma6gkd7VhfCSmOGOnEVigfA8ZseJsZs",
  authDomain: "ecommerceopuvai.firebaseapp.com",
  projectId: "ecommerceopuvai",
  storageBucket: "ecommerceopuvai.firebasestorage.app",
  messagingSenderId: "272859197515",
  appId: "1:272859197515:web:5881e9c844550c08159dce",
  measurementId: "G-2HGB6F5V23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//export default app;
export default auth;