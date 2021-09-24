// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDmMsmMn3_GtwK5K7-iLi6jvNyUNhss3DI",
  authDomain: "electric-863e7.firebaseapp.com",
  projectId: "electric-863e7",
  storageBucket: "electric-863e7.appspot.com",
  messagingSenderId: "272530717831",
  appId: "1:272530717831:web:5702f0dc6251bde3bf4c22",
  measurementId: "G-MWM055L4L9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const providerface = new firebase.auth.FacebookAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider,providerface };
export default db;

