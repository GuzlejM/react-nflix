import React from "react";
import "./StoryStyles.css";

function StoryItem({ children, ...restProps }) {
  return (
    <div {...restProps}>
      {children}
    </div>
  );
}

export default StoryItem;
