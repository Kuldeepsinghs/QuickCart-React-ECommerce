// // npm install firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";//start firebase
import {getAuth} from 'firebase/auth'//
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy48B-LyKFz_z2F29K0O8EsFNAqeSq4m8",
  authDomain: "ecart-96f3a.firebaseapp.com",
  projectId: "ecart-96f3a",
  storageBucket: "ecart-96f3a.firebasestorage.app",
  messagingSenderId: "620781432374",
  appId: "1:620781432374:web:892e122391492586c5b297"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const _Auth=getAuth(app)
export const _DB=getFirestore(app)
export const _Storage=getStorage(app)

//what is use in frontend
