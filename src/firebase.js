import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyC1s-Yi_ePnBG0eYCIqLnv71ZVNRK9EdUI",
  authDomain: "trivialport.firebaseapp.com",
  projectId: "trivialport",
  storageBucket: "trivialport.appspot.com",
  messagingSenderId: "519091971841",
  appId: "1:519091971841:web:5f96fedeeeaa5439975d00",
};

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
