import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4fL5Sp-iTGy5Z7LU27zd6do7rd6OJf5g",
    authDomain: "magazinshoping-7a1a6.firebaseapp.com",
    projectId: "magazinshoping-7a1a6",
    storageBucket: "magazinshoping-7a1a6.appspot.com",
    messagingSenderId: "882888752130",
    appId: "1:882888752130:web:4703367e744f4280cdfb1b",
    measurementId: "G-23SYB13QLF"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
