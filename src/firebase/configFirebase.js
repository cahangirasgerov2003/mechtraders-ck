import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAiCAb0mk6hcVs1mJDcwKcYh_XblhY3ePw",
  authDomain: "mechtraders-b4af0.firebaseapp.com",
  projectId: "mechtraders-b4af0",
  storageBucket: "mechtraders-b4af0.appspot.com",
  messagingSenderId: "193257658877",
  appId: "1:193257658877:web:bf975e1ce0fb3675396194",
};

// Firebase initialization
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default database;
