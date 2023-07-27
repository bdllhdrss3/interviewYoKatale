// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFXXWAmjm2tX1O-arDCy-C12du24CA32U",
  authDomain: "learning-5076b.firebaseapp.com",
  databaseURL: "https://learning-5076b.firebaseio.com",
  projectId: "learning-5076b",
  storageBucket: "learning-5076b.appspot.com",
  messagingSenderId: "229093349356",
  appId: "1:229093349356:web:925a718bd3c52d45cdd2c9",
  measurementId: "G-DRQCB57W1Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
export { app, auth, db };
