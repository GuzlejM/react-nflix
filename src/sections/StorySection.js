import React from "react";
import StoryWrapper from "../components/Story/StoryWrapper";
import StoryItem from "../components/Story/StoryItem";
import StoryTextWrapper from "../components/Story/StoryTextWrapper";
import StoryTitle from "../components/Story/StoryTitle";
import StorySubTitle from "../components/Story/StorySubTitle";
import StoryImageWrapper from "../components/Story/StoryImageWrapper";
import StoryImage from "../components/Story/StoryImage";
import Break from "../components/Break/Break";
import StoryData from "../JSON/storyData.json";

function StorySection() {
  return (
    <StoryWrapper>
      {StoryData.map((item) => (
        <>
          <StoryItem class={item.direction} key={item.id}>
            <StoryTextWrapper>
              <StoryTitle>{item.title}</StoryTitle>
              <StorySubTitle>{item.subTitle}</StorySubTitle>
            </StoryTextWrapper>
            <StoryImageWrapper>
              <StoryImage src={item.image} alt={item.alt} />
            </StoryImageWrapper>
          </StoryItem>
          <Break />
        </>
      ))}
    </StoryWrapper>
  );
}

export default StorySection;