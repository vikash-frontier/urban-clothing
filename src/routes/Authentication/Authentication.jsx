import React, { useEffect } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  auth,
} from "../../utils/firebase/firebase.utils";
import SignUpFrom from "../../components/sign-up-form/SignUpForm";
import SignInForm from "../../components/sign-in-form/SingInForm";

const Authentication = () => {
  return (
    <div>
      <h1>Sing In</h1>
      <SignInForm />
      <SignUpFrom />
    </div>
  );
};

export default Authentication;
