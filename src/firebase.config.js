import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzDBrnA7EvBtIpQbtdKW6FO08D78uafwM",
  authDomain: "house-marketplace-app-1e844.firebaseapp.com",
  projectId: "house-marketplace-app-1e844",
  storageBucket: "house-marketplace-app-1e844.appspot.com",
  messagingSenderId: "541641333714",
  appId: "1:541641333714:web:7f5b7b1447467aeeaa860b",
};

// Initialize Firebase
 initializeApp(firebaseConfig);
export const db = getFirestore();
