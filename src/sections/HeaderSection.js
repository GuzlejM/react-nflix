import React from "react";
import HeaderWrapper from "../components/HeaderWrapper";
import NavBar from "../components/NavBar";
import Logo from "../components/Logo";


function HeaderSection() {
  return (
    <HeaderWrapper className="header-wrapper-home">
      <NavBar className="navbar-home">
        <Logo />
        <button>Sign In</button>
      </NavBar>
    </HeaderWrapper>
  );
}

export default HeaderSection;
