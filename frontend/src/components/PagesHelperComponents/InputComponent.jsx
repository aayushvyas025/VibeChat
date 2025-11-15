import React from "react";

function InputComponent({ label, children, type, style, placeholder, value, onChangeHandler }) {
  return (
    <div>
      <label className="label pt-2">
        <span className="text-base label-text">{label}</span>
      </label>
      <input
        type={type}
        className={style}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
      />
      {children}
    </div>
  );
}

export default InputComponent;
