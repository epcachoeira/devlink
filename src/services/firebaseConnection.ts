
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAon-3qQQNC7stLvU-WWXBkK5LMUP9_MgQ",
  authDomain: "reactlinks-c0514.firebaseapp.com",
  projectId: "reactlinks-c0514",
  storageBucket: "reactlinks-c0514.appspot.com",
  messagingSenderId: "431512690449",
  appId: "1:431512690449:web:8d27e71ad6fc29d759b6b0"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }