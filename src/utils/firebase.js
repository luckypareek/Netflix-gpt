// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhszbwMZA7H1SoKQYeFnRyzqmi8h_eJCc",
  authDomain: "netflix-gpt-c3b50.firebaseapp.com",
  projectId: "netflix-gpt-c3b50",
  storageBucket: "netflix-gpt-c3b50.appspot.com",
  messagingSenderId: "899856411287",
  appId: "1:899856411287:web:4ee6d758ff0935a7f957d2",
  measurementId: "G-0BKRDF6T7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();