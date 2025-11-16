import React from 'react'
import {ChatHeader, MessageContainer} from "../index"
function ChatContainer() {
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      <ChatHeader />
      <MessageContainer />
    </div>
  )
}

export default ChatContainer