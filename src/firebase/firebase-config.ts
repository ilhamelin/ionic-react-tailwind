// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKBBp8GYB_G05kiLbN813ondwBrQe9CF4",
  authDomain: "data-base-uber-eats.firebaseapp.com",
  databaseURL: "https://data-base-uber-eats-default-rtdb.firebaseio.com",
  projectId: "data-base-uber-eats",
  storageBucket: "data-base-uber-eats.appspot.com",
  messagingSenderId: "948116538428",
  appId: "1:948116538428:web:b7d2cd4b23d13b4bbfaf39",
  measurementId: "G-BE23FLZF7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);