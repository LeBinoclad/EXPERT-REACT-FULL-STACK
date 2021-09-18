import  firebase from "firebase/app";
import "firebase/firestore";
import "firebase/functions"
import "firebase/auth";
import "firebase/storage";

//ici on initialise notre projet ou plus tot notre backend firebasenpm

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6WNAlohxqPia3RK4Kuztezm5VSUmyFME",
  authDomain: "kiwanda3-2629b.firebaseapp.com",
  projectId: "kiwanda3-2629b",
  storageBucket: "kiwanda3-2629b.appspot.com",
  messagingSenderId: "901171365011",
  appId: "1:901171365011:web:12ae46cc17abf4a92cf966",
  measurementId: "G-EFLC6FPTS8"
};

firebase.initializeApp(firebaseConfig);
firebase.functions();

export default firebase;