import React from "react";
import "./FooterSigninStyles.css";

function FooterSigninColumn({ children, ...restProps }) {
  return (
    <div className="footer-column" {...restProps}>
      {children}
    </div>
  );
}

export default FooterSigninColumn;