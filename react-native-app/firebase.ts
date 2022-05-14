// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1uaJ02u8cdB_DcWl6e6OLMAlV1BRPu-E",
  authDomain: "myproduct-bc7b4.firebaseapp.com",
  projectId: "myproduct-bc7b4",
  storageBucket: "myproduct-bc7b4.appspot.com",
  messagingSenderId: "820244783786",
  appId: "1:820244783786:web:8d89fe592216931b1de6d3",
  measurementId: "G-F961WG48T5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider()