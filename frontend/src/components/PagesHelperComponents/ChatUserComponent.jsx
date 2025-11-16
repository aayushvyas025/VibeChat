import React from 'react'
import {AvatarComponent, DividerComponent, UsernameComponent} from "../index"; 

function ChatUserComponent() {
  return (
    <>
    <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
     <AvatarComponent />
     <UsernameComponent />
    </div>
    <DividerComponent styling={"divider my-0 py-0 h-1"} />
    </>
  )
}

export default ChatUserComponent