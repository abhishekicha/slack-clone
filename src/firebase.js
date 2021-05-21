import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ6PoQt_AzonU4zPTMUNqs6aufV6E_yv8",
  authDomain: "slack-clone-f0687.firebaseapp.com",
  projectId: "slack-clone-f0687",
  storageBucket: "slack-clone-f0687.appspot.com",
  messagingSenderId: "841328873364",
  appId: "1:841328873364:web:ee03ea37a89899bb2bc981",
  measurementId: "G-93Y96MYG9V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
