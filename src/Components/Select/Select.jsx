import React from "react";
import Styles from "./Select.module.css";

export default function Select({ title, options, value, name, onChange }) {
  return (
    <select
      className={`background ${Styles.selectBox}`}
      onChange={onChange}
      name={name}
      value={value}
      required
    >
      <option value="">{title}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
