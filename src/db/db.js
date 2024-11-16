import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAsYIq0uaN4fPs3PPZi7wRO8u4OyvXAh7c",
    authDomain: "techcase-3a311.firebaseapp.com",
    projectId: "techcase-3a311",
    storageBucket: "techcase-3a311.firebasestorage.app",
    messagingSenderId: "1071921461166",
    appId: "1:1071921461166:web:4af9170ebb6e51d4af7a3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db