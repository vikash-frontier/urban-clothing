import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFqFjEZYECRXOD6Fo-sgelZhq5pYP1XEE",
  authDomain: "urban-clothing-db-50276.firebaseapp.com",
  projectId: "urban-clothing-db-50276",
  storageBucket: "urban-clothing-db-50276.appspot.com",
  messagingSenderId: "986945931561",
  appId: "1:986945931561:web:cebb5fefce5e399b434f38",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.getCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
