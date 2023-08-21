// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVsHKjr0np7i6F5WNXX0oekQTDmKf_CDM",
  authDomain: "otp-firebase-1c0ec.firebaseapp.com",
  projectId: "otp-firebase-1c0ec",
  storageBucket: "otp-firebase-1c0ec.appspot.com",
  messagingSenderId: "1006408836043",
  appId: "1:1006408836043:web:b256cca7c23f2753c08c4e",
  measurementId: "G-V0Y5E90JDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);