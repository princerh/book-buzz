

import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtZno0jkC6yULsoynwwWnhr_mK_1F_78E",
  authDomain: "book-buzz-4a3da.firebaseapp.com",
  projectId: "book-buzz-4a3da",
  storageBucket: "book-buzz-4a3da.appspot.com",
  messagingSenderId: "572109192664",
  appId: "1:572109192664:web:d6b8813110ea3eef3786ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app) 