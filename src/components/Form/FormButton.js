import React from "react";
import "./FormStyles.css";

function FormButton({ children, ...restProps }) {
  return (
    <div className="form-button-wrapper">
      <a className="form-button form-button-wrapper" href="#" {...restProps}>
        <span className="form-button-span">{children}</span>
        <i class="fas fa-chevron-right"></i>
      </a>
    </div>
  );
}

export default FormButton;