// Import the functions you need from the SDKs you need
import firebase from "@firebase/app";
import { getAuth } from "@firebase/auth";
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
  appId: "1:820244783786:web:59915f41ee5766181de6d3",
  measurementId: "G-H1TR1VKZWE"
};

// Initialize Firebase

export const app = firebase.initializeApp(firebaseConfig);
export const auth=getAuth()

