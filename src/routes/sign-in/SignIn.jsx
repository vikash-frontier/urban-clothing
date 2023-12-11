import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
} from "../../utils/firebase/firebase.utils";
const SignIn = () => {
  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const res = await getRedirectResult(auth);
        if (res) {
          const userDocRef = createUserDocumentFromAuth(res.user);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    handleRedirectResult();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sing In</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
