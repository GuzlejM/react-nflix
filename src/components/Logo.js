import React from "react";
import logo from './logo.png';
import "./HeaderStyles.css";

function Logo({ children, ...restProps }) {
  return (
    <div>
      <a href="/" {...restProps}>
        {children}
        <img class="logo" src={logo} alt="Netflix Logo" />
      </a>
    </div>
  );
}

export default Logo;