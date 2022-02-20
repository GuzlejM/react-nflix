
import React from "react";
import FormWrapper from "../components/Form/FormWrapper";
import FormEmail from "../components/Form/FormEmail";
import FormButton from "../components/Form/FormButton";
import "../components/Form/FormStyles.css";


function FormCompound() {
  return (
    <>
      <div className="form-text">
        Ready to watch? Enter your email to create or restart your membership.
      </div>
      <FormWrapper>
        <FormEmail placeholder="Email Address" />
        <FormButton>Get Started</FormButton>
      </FormWrapper>
    </>
  );
}

export default FormCompound;