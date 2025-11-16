import React from 'react'
import {Conversation} from "../index";

function Messages() {
  return (
    <div className='px-4 flex-1 overflow-auto'>
        <Conversation />
    </div>
  )
}

export default Messages