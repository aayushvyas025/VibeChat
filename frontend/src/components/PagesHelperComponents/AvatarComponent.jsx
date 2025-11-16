import React from "react";
import { Constant } from "../../helper";

const {applicationConstant} = Constant; 
const {userProfileHolder} = applicationConstant;

function AvatarComponent({ userOnline, userProfile }) {
  return (
    <div className="avatar online">
      <div className={`w-12 rounded-full`}>
        <img
          src={userProfileHolder || userProfileHolder}
          alt="User Avatar"
        />
      </div>
    </div>
  );
}

export default AvatarComponent;
