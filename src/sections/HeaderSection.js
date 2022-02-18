import React from "react";
import HeaderWrapper from "../components/HeaderWrapper";
import NavBar from "../components/NavBar";
import Logo from "../components/Logo";
import SigninButton from "../components/SigninButton";


function HeaderSection() {
  return (
    <HeaderWrapper className="header-wrapper-home">
      <NavBar className="navbar-home">
        <Logo />
        <SigninButton>Sign In</SigninButton>
      </NavBar>
    </HeaderWrapper>
  );
}

export default HeaderSection;
