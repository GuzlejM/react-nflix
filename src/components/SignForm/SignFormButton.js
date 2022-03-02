import React from "react";
import "./SignFormStyles.css";

function SignFormButton({ children, isGoogleSignIn, ...restProps }) {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} sign-form-Button`}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default SignFormButton;
