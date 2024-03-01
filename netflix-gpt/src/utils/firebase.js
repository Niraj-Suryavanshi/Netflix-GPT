// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE3hhNPySl1QvAjkHNq5VjhuIExi2hero",
  authDomain: "netflixgpt-294c7.firebaseapp.com",
  projectId: "netflixgpt-294c7",
  storageBucket: "netflixgpt-294c7.appspot.com",
  messagingSenderId: "460700754013",
  appId: "1:460700754013:web:0bda8119c59a322499edb4",
  measurementId: "G-RHN7WLELB6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
