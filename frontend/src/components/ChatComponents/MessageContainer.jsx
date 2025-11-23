import {Messages, MessageInput} from "../index";

function MessageContainer() {

  return (
    <div className="md:min-w-[450px] h-full flex flex-col overflow-hidden">
    <Messages  />
    <MessageInput placeholder={"Enter your messages here..."} />
    </div>
  )
}

export default MessageContainer

