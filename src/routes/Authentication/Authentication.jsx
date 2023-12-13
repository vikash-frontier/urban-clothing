import React, { useEffect } from "react";
import SignUpFrom from "../../components/sign-up-form/SignUpForm";
import SignInForm from "../../components/sign-in-form/SingInForm";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpFrom />
    </div>
  );
};

export default Authentication;
