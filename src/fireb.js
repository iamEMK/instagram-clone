import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAl1FGHyo8_H9TDYeyJcDTCCa6wdIHNJbI",
  authDomain: "insta-emk.firebaseapp.com",
  projectId: "insta-emk",
  storageBucket: "insta-emk.appspot.com",
  messagingSenderId: "692720825621",
  appId: "1:692720825621:web:9faec1ef8d2d99c849e51c",
  measurementId: "G-HSC5YQ97YY"
};

 const firebaseApp =  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;