import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
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

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  console.log(userAuth);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating the user! ", error.message);
    }
  }
  return userDocRef;
};
