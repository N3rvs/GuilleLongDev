import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwo7QTGYpcRHXGTJxPe4JXrKA0lfAMLa8",
  authDomain: "guillelongdev.firebaseapp.com",
  projectId: "guillelongdev",
  storageBucket: "guillelongdev.appspot.com", 
  messagingSenderId: "1006471367455",
  appId: "1:1006471367455:web:650067478db3465eba7e2a",
  measurementId: "G-XYR9T1YEQT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
