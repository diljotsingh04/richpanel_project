import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCa5hF7_eME-ke6vBKf7Lc0Nfn_79-RZIA",
  authDomain: "reactrichpanel.firebaseapp.com",
  projectId: "reactrichpanel",
  storageBucket: "reactrichpanel.appspot.com",
  messagingSenderId: "169553109222",
  appId: "1:169553109222:web:8b7b5ee2de617084e1db27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
