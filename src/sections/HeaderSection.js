import React from "react";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import NavBar from "../components/Header/NavBar";
import DropdownComponent from "../components/Header/DropdownComponent";
import Logo from "../components/Header/Logo";
import SigninButton from "../components/Header/SigninButton";
import FeatureWrapper from "../components/Header/FeatureWrapper";
import FeatureTitle from "../components/Header/FeatureTitle";



function HeaderSection({ children }) {
  
  return (
    <HeaderWrapper className="header-wrapper-home">
      <NavBar className="navbar-home">
        <Logo />
        <div className="navbar-right">
        <DropdownComponent />
        <SigninButton>Sign In</SigninButton>
        </div>
      </NavBar>
      <FeatureWrapper className="feature-wrapper-home">
        <FeatureTitle className="feature-title-home">
          Unlimited movies, TV shows and more.
        </FeatureTitle>
      </FeatureWrapper>
      {children}
    </HeaderWrapper>
  );
}

export default HeaderSection;
