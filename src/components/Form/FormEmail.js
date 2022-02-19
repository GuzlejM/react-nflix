import React from "react";
import "./FormStyles.css";

function FormEmail({ ...resProps }) {
  return <input className="form-email" {...resProps} />;
}

export default FormEmail;