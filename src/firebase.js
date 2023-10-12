// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjQGJJtQTE5PlSdxv2YjkQz5nbysrgsI4",
  authDomain: "synkratimenos.firebaseapp.com",
  projectId: "synkratimenos",
  storageBucket: "synkratimenos.appspot.com",
  messagingSenderId: "320474131709",
  appId: "1:320474131709:web:dc975d9c38e0b7cb922294",
  measurementId: "G-C6QXJ4LF1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
