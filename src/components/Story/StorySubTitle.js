import React from "react";
import "./StoryStyles.css";

function StorySubTitle({ children, ...restProps }) {
  return (
    <h2 className="story-subtitle" {...restProps}>
      {children}
    </h2>
  );
}

export default StorySubTitle;