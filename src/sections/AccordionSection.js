import React from "react";
import AccordionWrapper from "../components/Accordion/AccordionWrapper";
import AccordionTitle from "../components/Accordion/AccordionTitle";
import AccordionItem from "../components/Accordion/AccordionItem";
import AccordionHeader from "../components/Accordion/AccordionHeader";
import AccordionBody from "../components/Accordion/AccordionBody";
import AccordionData from "../JSON/accordionData.json";

function AccordionSection() {
  return (
    <AccordionWrapper>
      <AccordionTitle>Frequently Asked Questions</AccordionTitle>
      {AccordionData.map((item) => (
        <AccordionItem key={item.id}>
          <AccordionHeader>{item.title}</AccordionHeader>
          <AccordionBody>{item.text}</AccordionBody>
        </AccordionItem>
      ))}
    </AccordionWrapper>
  );
}

export default AccordionSection;