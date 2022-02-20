import React from "react";
import "./FooterSigninStyles.css";

function FooterSigninTitle({ children, ...restProps }) {
  return (
    <a href="/" className="footer-item" {...restProps}>
      {children}
    </a>
  );
}

export default FooterSigninTitle;