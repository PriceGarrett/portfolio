// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHNheuYU6vmgDtPyE_gLLM-kv5q7yA77I",
  authDomain: "portfolio-768c3.firebaseapp.com",
  projectId: "portfolio-768c3",
  storageBucket: "portfolio-768c3.appspot.com",
  messagingSenderId: "494857444275",
  appId: "1:494857444275:web:874db1dc075ce7fff1c9c6",
  measurementId: "G-XWW8QLZ4RG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);