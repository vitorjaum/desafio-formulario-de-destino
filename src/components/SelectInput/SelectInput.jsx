import React from "react";
import "./SelectInput.css";

function SelectInput({ name, children }) {
  return (
    <div className="select-input">
      <label htmlFor="">{name}</label>
      <select>{children}</select>
    </div>
  );
}

export default SelectInput;
