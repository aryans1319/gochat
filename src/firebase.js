import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCH_xTt0XN9fiJAg1OLbSNEX1wRVMEGtWM",
    authDomain: "gochat-646d9.firebaseapp.com",
    projectId: "gochat-646d9",
    storageBucket: "gochat-646d9.appspot.com",
    messagingSenderId: "1015876125170",
    appId: "1:1015876125170:web:1ee477559362c73d22eb6b"
  }).auth();