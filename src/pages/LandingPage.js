import React from "react";
import HeaderSection from "../sections/HeaderSection";
import StorySection from "../sections/StorySection";
import AccordionSection from "../sections/AccordionSection";
import FooterSection from "../sections/FooterSection";
import FormSection from "../sections/FormSection";
import Break from "../components/Break/Break";

function LandingPage() {
  return (
    <>
      <HeaderSection>
        <FormSection />
      </HeaderSection>
      <Break />
      <StorySection />
      <AccordionSection />
      <FormSection />
      <Break />
      <FooterSection />
    </>
  );
}

export default LandingPage;
