import React from "react";
import FooterWrapper from "../components/Footer/FooterWrapper";
import FooterTitle from "../components/Footer/FooterTitle";
import FooterColumn from "../components/Footer/FooterColumn";
import FooterItem from "../components/Footer/FooterItem";
import FooterSubTitle from "../components/Footer/FooterSubTitle";
import FooterLinks from "../components/Footer/FooterLinks";
import Select from "../components/Header/Select";

function FooterSection() {
  return (
    <FooterWrapper>
      <FooterTitle>Questions? Contact us.</FooterTitle>
      <FooterLinks>
        <FooterColumn>
        <FooterItem>FAQ</FooterItem>
          <FooterItem>Investor Relations</FooterItem>
          <FooterItem>Privacy</FooterItem>
          <FooterItem>Speed Test</FooterItem>
        </FooterColumn>
                <FooterColumn>
          <FooterItem>Help Center</FooterItem>
          <FooterItem>Jobs</FooterItem>
          <FooterItem>Cookie Preferences</FooterItem>
          <FooterItem>Legal Notices</FooterItem>
        </FooterColumn>
        <FooterColumn>
          <FooterItem>Account</FooterItem>
          <FooterItem>Ways to Watch</FooterItem>
          <FooterItem>Corporate Information</FooterItem>
          <FooterItem>Netflix Originals</FooterItem>
        </FooterColumn>
        <FooterColumn>
          <FooterItem>Media Center</FooterItem>
          <FooterItem>Terms of Use</FooterItem>
          <FooterItem>Contact Us</FooterItem>
        </FooterColumn>
      </FooterLinks>
      <Select />
      <FooterSubTitle>Netflix Slovakia</FooterSubTitle>
    </FooterWrapper>
  );
}

export default FooterSection;
