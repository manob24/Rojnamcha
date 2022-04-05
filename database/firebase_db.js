// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBW-R_B-jFvf3IYSDFEznT17qQSEeiSfI",
  authDomain: "rojnamcha-2d1b4.firebaseapp.com",
  projectId: "rojnamcha-2d1b4",
  storageBucket: "rojnamcha-2d1b4.appspot.com",
  messagingSenderId: "618622120579",
  appId: "1:618622120579:web:0f8846142e2ec27736e1b6",
  measurementId: "G-K6QPDGHJ19"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const Post = db.collecton("Posts");
export default Post;
