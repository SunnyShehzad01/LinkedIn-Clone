// import firebase from 'firebase'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDLCqRpYePj2yler6Uu_3QuBUfQjMdHgfk",
    authDomain: "linkedin-c4e19.firebaseapp.com",
    projectId: "linkedin-c4e19",
    storageBucket: "linkedin-c4e19.appspot.com",
    messagingSenderId: "35716626262",
    appId: "1:35716626262:web:4abc0408419b3a759108f7"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore()
  const auth = getAuth(app)

  export {db, auth }