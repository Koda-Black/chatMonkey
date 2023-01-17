// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK7GbNGroojHSc2eFb0bisrsquRiz45iE",
  authDomain: "react-chat-743c9.firebaseapp.com",
  projectId: "react-chat-743c9",
  storageBucket: "react-chat-743c9.appspot.com",
  messagingSenderId: "664674452751",
  appId: "1:664674452751:web:fb4fdedf94b4435f106a7a",
  measurementId: "G-HJ1L8H5R04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);