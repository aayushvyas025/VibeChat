import React from "react";

function HeadingComponent({ headingLevel = "h1", styling, headingTitle }) {
  const validationHeading = ["h1", "h2", "h3", "h4", "h5", "h6"];

  if (
    typeof headingLevel !== "string" ||
    !validationHeading.includes(headingLevel)
  ) {
    console.error(
      `Invalid "headingLevel" prop: ${headingLevel}. Use h1–h6 only.`
    );
    headingLevel = "h1"; // fallback
  }

  return React.createElement(
    headingLevel,
    { className: styling },
    headingTitle
  );
}

export default HeadingComponent;
