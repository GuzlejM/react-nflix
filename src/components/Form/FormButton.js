import React from "react";
import "./FormStyles.css";

function FormButton({ children, ...restProps }) {

  
  return (
    <div className="form-button-wrapper">
      <a className="form-button form-button-wrapper" href="/signup" {...restProps}>
        <span className="form-button-span">{children}</span>
        <i className="fas fa-chevron-right"></i>
      </a>
    </div>
  );
}

export default FormButton;
