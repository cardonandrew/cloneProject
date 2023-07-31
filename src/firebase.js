import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBGrupPyziNGmW02hbaa14zkYkDQtSae1w",
  authDomain: "cloneproject-6dd92.firebaseapp.com",
  databaseURL: "https://cloneproject-6dd92-default-rtdb.firebaseio.com",
  projectId: "cloneproject-6dd92",
  storageBucket: "cloneproject-6dd92.appspot.com",
  messagingSenderId: "775477970072",
  appId: "1:775477970072:web:ceb5adba0b65017be93ced",
  measurementId: "G-VBMWT9EW28",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
