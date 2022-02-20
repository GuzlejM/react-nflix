import React from "react";
import "./BreakStyles.css";

function Break({ children, ...restProps }) {
  return (
    <div className="break" {...restProps}>
      {children}
    </div>
  );
}

export default Break;