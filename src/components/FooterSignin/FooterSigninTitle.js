import React from "react";
import "./FooterSigninStyles.css";

function FooterSigninTitle({ children, ...restProps }) {
  return (
    <a href="/" className="footer-title" {...restProps}>
      {children}
    </a>
  );
}

export default FooterSigninTitle;