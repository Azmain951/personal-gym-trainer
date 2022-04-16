// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClYa_Zviex1CSBTJt_mQsFyfTipu3FDkI",
    authDomain: "personal-gym-trainer.firebaseapp.com",
    projectId: "personal-gym-trainer",
    storageBucket: "personal-gym-trainer.appspot.com",
    messagingSenderId: "324322059589",
    appId: "1:324322059589:web:55fb7155a3d87315ba8a2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;