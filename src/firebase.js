import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAnnr7ov8mUPSsU_VA9gbmDd6NSe1no3Mw",
  authDomain: "challenge-22824.firebaseapp.com",
  databaseURL: "https://challenge-22824.firebaseio.com",
  projectId: "challenge-22824",
  storageBucket: "challenge-22824.appspot.com",
  messagingSenderId: "797993534290",
  appId: "1:797993534290:web:62321a7d0bb8b8c98b308b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
