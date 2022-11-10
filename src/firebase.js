import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqFGGlxXo1z7qgnyAa6ogml2gZwYRk_Zs",
  authDomain: "clone-1cc75.firebaseapp.com",
  projectId: "clone-1cc75",
  storageBucket: "clone-1cc75.appspot.com",
  messagingSenderId: "245747731716",
  appId: "1:245747731716:web:8e3b5df5a4888516629451",
  measurementId: "G-CVLSZJWWSZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
export default firebase;
