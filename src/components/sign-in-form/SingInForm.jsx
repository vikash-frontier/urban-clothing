import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import "./sign-in.styles.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  singInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const SignInForm = () => {
  const [formFields, setFormFields] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signWithGooglePopUp = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await singInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      setFormFields({
        email: "",
        password: "",
      });
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const { email, password } = formFields;

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="btn">
          <Button buttonType="" type="submit">
            Sign In
          </Button>
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
