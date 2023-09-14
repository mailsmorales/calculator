import React from "react";
import "./style.scss";

const Input = ({ placeholer, value, onValueChange }) => {
  return (
    <input
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      className='input'
      placeholder={placeholer}
    />
  );
};

export default Input;