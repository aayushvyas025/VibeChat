import React from 'react'
import {ChatUserComponent} from "../index";

function SidebarUserComponent() {
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      <ChatUserComponent />
    </div>
  )
}

export default SidebarUserComponent