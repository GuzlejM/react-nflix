import React from "react";
import FooterSigninWrapper from "../components/FooterSignin/FooterSigninWrapper";
import FooterSigninTitle from "../components/FooterSignin/FooterSigninTitle";
import FooterSigninColumn from "../components/FooterSignin/FooterSigninColumn";
import FooterSigninItem from "../components/FooterSignin/FooterSigninItem";
import FooterSigninLinks from "../components/FooterSignin/FooterSigninLinks";
import DropdownComponent from "../components/Header/DropdownComponent";

function FooterSigninSection() {
  return (
    <FooterSigninWrapper>
      <FooterSigninTitle>Questions? Contact us.</FooterSigninTitle>
      <FooterSigninLinks>
        <FooterSigninColumn>
          <FooterSigninItem>FAQ</FooterSigninItem>
          <FooterSigninItem>Cookie Preferences</FooterSigninItem>
        </FooterSigninColumn>
        <FooterSigninColumn>
          <FooterSigninItem>Help Center</FooterSigninItem>
          <FooterSigninItem>Corporate Information</FooterSigninItem>
        </FooterSigninColumn>
        <FooterSigninColumn>
          <FooterSigninItem>Terms of Use</FooterSigninItem>
        </FooterSigninColumn>
        <FooterSigninColumn>
          <FooterSigninItem>Privacy</FooterSigninItem>
        </FooterSigninColumn>
      </FooterSigninLinks>
      <DropdownComponent />
    </FooterSigninWrapper>
  );
}

export default FooterSigninSection;
