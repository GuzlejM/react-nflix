import React, { useState } from "react";
import "./FormStyles.css";

function FormEmail({ ...restProps }) {
  
  return <input className="form-email" {...restProps} />;
}

export default FormEmail;