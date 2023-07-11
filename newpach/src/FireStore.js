import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsBlzklqfm-obspH4HRLH2s3oWVfH_DAY",
  authDomain: "tryfirebase-4424b.firebaseapp.com",
  projectId: "tryfirebase-4424b",
  storageBucket: "tryfirebase-4424b.appspot.com",
  messagingSenderId: "801687933077",
  appId: "1:801687933077:web:06486f1d08acf88cc34b9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)