import React from "react";
import "./StoryStyles.css";

function StoryTitle({ children, ...restProps }) {
  return (
    <h1 className="story-title" {...restProps}>
      {children}
    </h1>
  );
}

export default StoryTitle;