// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBugD33Gnl0PMlWEeOS02S9CXTmS2FMC9c",
  authDomain: "warehouse-management-f437e.firebaseapp.com",
  projectId: "warehouse-management-f437e",
  storageBucket: "warehouse-management-f437e.appspot.com",
  messagingSenderId: "702785416623",
  appId: "1:702785416623:web:4d441e5264991ea482135a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
