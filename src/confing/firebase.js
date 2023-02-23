import { initializeApp, getApp, getApps } from "firebase/app";
import {
  getAuth,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBqUGWVDsGw0vYJslYFku_n8zfc_rhjPTo",
  authDomain: "testproject-77ed6.firebaseapp.com",
  projectId: "testproject-77ed6",
  storageBucket: "testproject-77ed6.appspot.com",
  messagingSenderId: "66666778122",
  appId: "1:66666778122:web:1ef5f2a1b79b36242e19f3",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage, GoogleAuthProvider, FacebookAuthProvider };
