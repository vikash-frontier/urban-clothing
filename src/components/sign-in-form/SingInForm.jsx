import React, { useState, useContext } from "react";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import FormInput from "../form-input/FormInput";
import Button from "../button/Button";

import "./sign-in.styles.scss";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { checkValidateData } from "../../utils/validate";

const SignInForm = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signWithGooglePopUp = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = checkValidateData(email, password);
    setErrorMessage(message);
    if (message) return;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setFormFields({
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
  };

  return (
    <div className="sign-up-container">
      <h2>I already have an account!</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
          autocomplete="off"
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          autocomplete="off"
        />
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <div className="btn">
          <Button buttonType="" type="submit">
            Sign In
          </Button>
          <span>OR</span>
          <Button
            type="button"
            buttonType="google"
            onClick={signWithGooglePopUp}
          >
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
