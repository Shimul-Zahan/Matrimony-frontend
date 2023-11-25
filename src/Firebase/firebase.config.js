// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "matrimony-16432.firebaseapp.com",
    projectId: "matrimony-16432",
    storageBucket: "matrimony-16432.appspot.com",
    messagingSenderId: "486851243861",
    appId: "1:486851243861:web:d8ae7e07c17df0cb6389dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;