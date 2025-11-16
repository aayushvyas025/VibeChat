import {Messages, MessageInput} from "../index";

function MessageContainer() {
  return (
    <div className="md:min-w-[450px] h-full flex flex-col">
    <Messages />
    <MessageInput />
    </div>
  )
}

export default MessageContainer

