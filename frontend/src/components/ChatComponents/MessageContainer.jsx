import {Messages, MessageInput} from "../index";

function MessageContainer() {
  return (
    <div className="md:win-w-[450px] flex flex-col">
    <Messages />
    <MessageInput />
    </div>
  )
}

export default MessageContainer

