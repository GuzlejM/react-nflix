import React from "react";
import "./StoryStyles.css";

function StoryImageWrapper({ children, ...restProps }) {
  return (
    <div className="story-imagewrapper" {...restProps}>
      {children}
    </div>
  );
}

export default StoryImageWrapper;