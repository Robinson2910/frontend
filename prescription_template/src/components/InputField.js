import React from "react";

function InputField({ label, type, show, handleChange, name, value, width, options }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <h3 style={{}}>{label}:</h3>
      {type === "text" ? (
        <input
          type="text"
          className={`createTime ${show ? "hide" : "show"}`}
          onChange={(e) => handleChange(e)}
          name={name}
          value={value}
          style={{ width: width, border: "1px solid #ddd", outline: "none", padding: "10px" }}
        />
      ) : type === "select" ? (
        <select
          className={`createTime ${show ? "hide" : "show"}`}
          onChange={(e) => handleChange(e)}
          name={name}
          value={value}
          style={{ width: width, border: "1px solid #ddd", outline: "none", padding: "10px" }}
        >
          {options.map((option, index) => (
            <option key={index} value={option} disabled={index === 0}>
              {option}
            </option>
          ))}
        </select>
      ) : // Add other input types here
      null}
      <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{value}</span>
    </div>
  );
}

export default InputField;
