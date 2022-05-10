import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBSwAh6qBL2ZMQwhLHcRS0bqg0-wVSSrW0",
    authDomain: "kitchen-launch-app.firebaseapp.com",
    projectId: "kitchen-launch-app",
    storageBucket: "kitchen-launch-app.appspot.com",
    messagingSenderId: "78753743268",
    appId: "1:78753743268:web:0638cc01e59e29134bc131",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
