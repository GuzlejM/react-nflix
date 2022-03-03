import React, { useState } from "react";
import "./FormStyles.css";

function FormEmail({ handleChange, ...restProps }) {
  console.log(restProps);
  return (
    <input className="form-email" onChange={handleChange} {...restProps} />
  );
}

export default FormEmail;
