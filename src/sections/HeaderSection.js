import React from "react";
import HeaderWrapper from "../components/HeaderWrapper";
import NavBar from "../components/NavBar";
import Select from "../components/Select";
import Logo from "../components/Logo";
import SigninButton from "../components/SigninButton";
import FeatureWrapper from "../components/FeatureWrapper";
import FeatureTitle from "../components/FeatureTitle";
import FormSection from "../sections/FormSection";



function HeaderSection() {
  
  return (
    <HeaderWrapper className="header-wrapper-home">
      <NavBar className="navbar-home">
        <Logo />
        <div className="navbar-right">
        <Select />
        <SigninButton>Sign In</SigninButton>
        </div>
      </NavBar>
      <FeatureWrapper className="feature-wrapper-home">
        <FeatureTitle className="feature-title-home">
          Unlimited movies, TV shows and more.
        </FeatureTitle>
      <FormSection/>
      </FeatureWrapper>
    </HeaderWrapper>
  );
}

export default HeaderSection;
