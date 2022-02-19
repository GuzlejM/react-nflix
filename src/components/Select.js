import React from "react";
import "./HeaderStyles.css";

function Select() {
  return (
    <div className="select-wrapper">
      <div className="select-pseudo">
        <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">
            English
          </option>
          <option value="mango">Mango</option>
        </select>
      </div>
    </div>
  );
}

export default Select;
