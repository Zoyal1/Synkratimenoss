// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi7jie6lpuKL6TiJ3bf6JwJbmJ8jQMAPs",
  authDomain: "synkratimenos-20423.firebaseapp.com",
  projectId: "synkratimenos-20423",
  storageBucket: "synkratimenos-20423.appspot.com",
  messagingSenderId: "493841213937",
  appId: "1:493841213937:web:b4c9653f36195c4a123c50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
