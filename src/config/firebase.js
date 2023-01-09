// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxiROWoMWiPaOGR_CkDn9xu269SMr9Bs0",
  authDomain: "ilimacademy.firebaseapp.com",
  projectId: "ilimacademy",
  storageBucket: "ilimacademy.appspot.com",
  messagingSenderId: "163133432418",
  appId: "1:163133432418:web:f783b837a212fd5a10673b",
  measurementId: "G-9FM1JKPB8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);