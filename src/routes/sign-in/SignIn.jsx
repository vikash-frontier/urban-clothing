import React, { useEffect } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  auth,
} from "../../utils/firebase/firebase.utils";
import SingUpFrom from "../../components/sign-up-from/SingUpFrom";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sing In</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>

      <SingUpFrom />
    </div>
  );
};

export default SignIn;
