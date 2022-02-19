import React from "react";
import "./FooterStyles.css";

function FeatureSubTitle({ children, ...restProps }) {
  return <p className="footer-title" {...restProps}>{children}</p>;
}

export default FeatureSubTitle;