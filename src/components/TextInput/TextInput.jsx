import React, { Component } from "react";
import "./TextInput.css";

function TextInput({ label, name }) {
  return (
    <div className="text-input">
      <label htmlFor={name}>{name}</label>
      <input type="text" name={name} id="" />
    </div>
  );
}

export default TextInput;
