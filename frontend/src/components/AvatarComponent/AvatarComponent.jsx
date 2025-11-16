import React from "react";
import { Constant } from "../../helper";

const {applicationContent} = Constant; 
const { profilePicHolder} = applicationContent; 

function AvatarComponent({ userOnline, userProfile }) {
  return (
    <div className="avatar online">
      <div className={`w-12 rounded-full`}>
        <img
          src={ profilePicHolder || userProfile}
          alt="User Avatar"
        />
      </div>
    </div>
  );
}

export default AvatarComponent;
