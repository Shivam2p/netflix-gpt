// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrh3vpyUPA2wKh5FDjWlpRKtDKY3BAzKM",
  authDomain: "netflix-gpt-4a9e5.firebaseapp.com",
  projectId: "netflix-gpt-4a9e5",
  storageBucket: "netflix-gpt-4a9e5.firebasestorage.app",
  messagingSenderId: "1072264992909",
  appId: "1:1072264992909:web:387de7f4aacbca07dfaac4",
  measurementId: "G-Q6SP46TQ04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();