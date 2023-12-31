import React, { useContext, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import { auth } from "../../utils/firebase/firebase.utils";
import { checkValidateData } from "../../utils/validate";

import "./sign-up.styles.scss";

const SignUpFrom = () => {
  const [formFields, setFormFields] = useState({
    displayName: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);

  console.log(formFields);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const { displayName, email, password } = formFields;

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = checkValidateData(email, password);
    setErrorMessage(message);
    if (message) return;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        updateProfile(user, {
          displayName: displayName,
          // photoURL: USER_AVATAR,
        });
        setFormFields({
          displayName: "",
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
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
          autoComplete="off"
        />
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
          autoComplete="off"
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          autoComplete="off"
        />
        <p>{errorMessage}</p>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpFrom;
