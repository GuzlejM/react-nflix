import React from "react";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import NavBar from "../components/Header/NavBar";
import Logo from "../components/Header/Logo";
import FooterSigninSection from "../sections/FooterSigninSection";

function SigninPage() {

  return (
    <div  className="wrapper-signin">
      <HeaderWrapper className="header-wrapper-signin">
        <NavBar className="navbar-signin">
          <Logo />
        </NavBar>
      </HeaderWrapper>
      <FooterSigninSection />
    </div>
  );
}

export default SigninPage;