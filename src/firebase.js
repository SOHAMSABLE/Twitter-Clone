// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDH196KgXJuQ8tUzL7C0kTJvgUZY10HgJM",
    authDomain: "twitter-clone-53467.firebaseapp.com",
    projectId: "twitter-clone-53467",
    storageBucket: "twitter-clone-53467.appspot.com",
    messagingSenderId: "216293693451",
    appId: "1:216293693451:web:e127f14d91875d97764f0e",
    measurementId: "G-DJJR8X5DB6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

export default db;