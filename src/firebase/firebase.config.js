// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATBtiTHdJE3ShRrivz-HKO1fczve7pv_Y",
  authDomain: "assignment-09-434b4.firebaseapp.com",
  projectId: "assignment-09-434b4",
  storageBucket: "assignment-09-434b4.appspot.com",
  messagingSenderId: "822653244775",
  appId: "1:822653244775:web:e4cbeee288e87794a28bc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;