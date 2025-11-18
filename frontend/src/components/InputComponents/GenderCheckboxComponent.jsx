import React from "react";
import { CheckboxComponent } from "../index";

function GenderCheckboxComponent({ onCheckboxChange, userGender }) {
  return (
    <div className="flex">
      <CheckboxComponent
        label={"Male"}
        checked={userGender === "male"}
        inputGender={userGender}
        styling={`${userGender === "male" ? "selected" : ""}`}
        onChangHandler={() => onCheckboxChange("male")}
      />
      <CheckboxComponent
        label={"Female"}
        checked={userGender === "female"}
        inputGender={userGender}
        styling={`${userGender === "female" ? "selected" : ""}`}
        onChangHandler={() => onCheckboxChange("female")}
      />
      <CheckboxComponent
        label={"Other"}
        checked={userGender === "other"}
        inputGender={userGender}
        styling={`${userGender === "other" ? "selected" : ""}`}
        onChangHandler={() => onCheckboxChange("other")}
      />
    </div>
  );
}

export default GenderCheckboxComponent;
