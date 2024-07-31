// src/firebase.js

// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjkz3kosaPoI62hGRHWrDvy2IJnwxkOAg",
  authDomain: "language-learning-platfo-822b2.firebaseapp.com",
  projectId: "language-learning-platfo-822b2",
  storageBucket: "language-learning-platfo-822b2.appspot.com",
  messagingSenderId: "897000337124",
  appId: "1:897000337124:web:9757976b243cb044d946f1",
  measurementId: "G-MTS4P0VEDE"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
