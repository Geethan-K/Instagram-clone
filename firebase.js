// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe9jpCuX1Q--A3QgJs1o8n_5_5ttRDfjI",
  authDomain: "rn-insta-clone-8fb0a.firebaseapp.com",
  projectId: "rn-insta-clone-8fb0a",
  storageBucket: "rn-insta-clone-8fb0a.appspot.com",
  messagingSenderId: "346940239871",
  appId: "1:346940239871:web:a8f0be438acb27c79501ca",
  measurementId: "G-SZZXEYS3MZ"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
//const analytics = getAnalytics(app);

export  {firebase,db}