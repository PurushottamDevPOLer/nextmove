// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACOafcwUkqZ61U1ZXAYrGPp48NTo2RmWk",
    authDomain: "nextmove-devpoler.firebaseapp.com",
    projectId: "nextmove-devpoler",
    storageBucket: "nextmove-devpoler.firebasestorage.app",
    messagingSenderId: "571082202732",
    appId: "1:571082202732:web:df15e074e4083632a54249",
    measurementId: "G-3SKE1PP6KW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);