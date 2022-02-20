import React from "react";
import Select from "react-select";
import "./HeaderStyles.css";

const options = [
  { value: "English", label: "English" },
  { value: "Czech", label: "Czech" },
];

function DropdownComponent() {
  return (
    <div className="select-wrapper">
        <Select
          className="select-pseudo"
          value={options.value}
          options={options}
          defaultValue={options[0]}
        />
    </div>
  );
}

export default DropdownComponent;
