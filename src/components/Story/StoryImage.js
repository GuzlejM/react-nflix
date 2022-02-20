import React from "react";
import "./StoryStyles.css";

function StoryImage({ ...restProps }) {
  return <img className="story-image" alt="" {...restProps} />;
}

export default StoryImage;