import { initializeApp } from 'firebase/app';
import * as firebaseAuth from "firebase/auth";
import * as firestore from "firebase/firestore";
import * as storage from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBc7TMQZqeV0ruhE-iaefwMMXystkPpgAM",
  authDomain: "olxclone-b3be9.firebaseapp.com",
  projectId: "olxclone-b3be9",
  storageBucket: "olxclone-b3be9.appspot.com",
  messagingSenderId: "254401610508",
  appId: "1:254401610508:web:46295b950b30af20e9ff29",
  measurementId: "G-8C12JER0DQ"
};


const app = initializeApp(firebaseConfig);
const db = firestore.getFirestore();

const firebaseExports = { app, db, firebaseAuth, firestore, storage };
export default firebaseExports;