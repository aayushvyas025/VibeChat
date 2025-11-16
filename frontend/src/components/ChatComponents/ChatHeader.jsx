import React from 'react'

function ChatHeader({username}) {
  return (
    <div className='bg-slate-500 px-4 py-2 mb-2'>
        <span className="label-text">To:</span>
        <span className='text-gray-900 font-bold'>{username}</span>
    </div>
  )
}

export default ChatHeader