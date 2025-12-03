// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhGxJzLBjNeX4DgYmmCtNRhYGF8fKH6EI",
  authDomain: "comp3000-224e8.firebaseapp.com",
  projectId: "comp3000-224e8",
  storageBucket: "comp3000-224e8.firebasestorage.app",
  messagingSenderId: "45472082810",
  appId: "1:45472082810:web:91051669e7284cd578c4c3",
  measurementId: "G-VW6P9P8CBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and export it
export const db = getFirestore(app);
