import { Constant, timeFormatter } from "../../helper";
import { useConversation } from "../../store";

const { applicationContent } = Constant;
const { profilePicHolder } = applicationContent;

const Conversation = ({ message, authUser }) => {
  const {selectedUser} = useConversation()
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePicture = fromMe ? authUser?.profilePic : selectedUser?.profilePic; 
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName} `}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={ profilePicture || profilePicHolder} alt="User's Chat" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${shakeClass} ${bubbleBgColor}`}>
        {message?.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {timeFormatter(message.createdAt)}
      </div>
    </div>
  );
}

export default Conversation;
