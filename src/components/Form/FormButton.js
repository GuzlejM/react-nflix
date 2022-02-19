import React from "react";
import "./FormStyles.css";

function FormButton({ children, ...restProps }) {
  return (
    <div>
      <a className="form-button" href="#" {...restProps}>
        {children}
        <img
          className="form-button-image"
          src=""
        />
      </a>
    </div>
  );
}

export default FormButton;