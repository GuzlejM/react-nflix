import React from "react";
import "./FooterSigninStyles.css";

function FooterSigninLinks({ children, ...restProps }) {
  return (
    <div className="footer-links" {...restProps}>
      {children}
    </div>
  );
}

export default FooterSigninLinks;