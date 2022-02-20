import React from "react";
import Select from "react-select";
import "./HeaderStyles.css";

const options = [
  { value: "C++", label: "C++" },
  { value: "JAVA", label: "JAVA" },
  { value: "Javascript", label: "Javascript" },
  { value: "Python", label: "Python" },
  { value: "Swift", label: "Swift" },
];

function DropdownComponent() {
  return (
    <div className="select-wrapper">
      <div className="select-pseudo">
        <Select
          value={options.value}
          options={options}
          defaultValue={options[1]}
        />
      </div>
    </div>
  );
}

export default DropdownComponent;
