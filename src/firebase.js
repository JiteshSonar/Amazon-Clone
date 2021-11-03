import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDX1A1vUC98u_hRTO-Ha46XI396YZfPErQ",
  authDomain: "clone-1e8d1.firebaseapp.com",
  projectId: "clone-1e8d1",
  storageBucket: "clone-1e8d1.appspot.com",
  messagingSenderId: "693151012765",
  appId: "1:693151012765:web:42f1d14ca8e1bc9f004174",
  measurementId: "G-WEGBE189WS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
