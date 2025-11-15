import React from "react";

function TextComponent({ textType = "p", styling, text }) {
  const validationText = ["p", "span"];

  if (typeof !textType !== "string" || !validationText.includes(textType)) {
    console.error(`Invalid "textType" prop: ${textType}. Use p and span only.`); 
    textType = "p"
  }

  return React.createElement(textType, { className: styling }, text);
}

export default TextComponent;
