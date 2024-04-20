// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-project-e43b3.firebaseapp.com",
    projectId: "mern-project-e43b3",
    storageBucket: "mern-project-e43b3.appspot.com",
    messagingSenderId: "615161809789",
    appId: "1:615161809789:web:d6e799c989504563d5da14",
    measurementId: "G-LLYX8EK0QZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);