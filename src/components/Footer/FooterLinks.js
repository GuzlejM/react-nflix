import React from "react";
import "./FooterStyles.css";

function FooterLinks({ children, ...restProps }) {
  return (
    <div className="footer-links" {...restProps}>
      {children}
    </div>
  );
}

export default FooterLinks;