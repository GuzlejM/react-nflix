import React from "react";
import "./StoryStyles.css";

function StoryTextWrapper({ children, ...restProps }) {
  return (
    <div className="story-textwrapper" {...restProps}>
      {children}
    </div>
  );
}

export default StoryTextWrapper;