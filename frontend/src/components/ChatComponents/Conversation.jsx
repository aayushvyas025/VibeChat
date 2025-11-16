import React from "react";
import { Constant } from "../../helper";

const { applicationContent } = Constant;
const { profilePicHolder } = applicationContent;

function Conversation() {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePicHolder} alt="User's Chat" />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>
        Hi! What is up?
      </div>
      <div className="chat-footer opcaity-50 text-xs flex gap-1 items-center">12:42</div>
    </div>
  );
}

export default Conversation;
