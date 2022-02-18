import React from "react";
import HeaderWrapper from "../components/HeaderWrapper";
import NavBar from "../components/NavBar";
import Logo from "../components/Logo";
import SigninButton from "../components/SigninButton";
import FeatureWrapper from "../components/FeatureWrapper";
import FeatureTitle from "../components/FeatureTitle";


function HeaderSection() {
  return (
    <HeaderWrapper className="header-wrapper-home">
      <NavBar className="navbar-home">
        <Logo />
        <SigninButton>Sign In</SigninButton>
      </NavBar>
      <FeatureWrapper className="feature-wrapper-home">
        <FeatureTitle className="feature-title-home">
          Unlimited movies, TV shows and more.
        </FeatureTitle>

      </FeatureWrapper>
    </HeaderWrapper>
  );
}

export default HeaderSection;
