import React from "react";
import "./FooterSigninStyles.css";

function FooterSigninWrapper({ children, ...restProps }) {
  return (
    <footer className="footer-wrapper-signin" {...restProps}>
      {children}
    </footer>
  );
}

export default FooterSigninWrapper;