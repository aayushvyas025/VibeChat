import  { useEffect } from 'react'
import {ChatHeader, MessageContainer} from "../index"
import { useConversation } from '../../store'
function ChatContainer() {
  const {selectedUser, setSelectedUser} = useConversation();
 
  useEffect(() => {
    
    // using use-effect to cleanup function
    return () => setSelectedUser(null)
  }, [setSelectedUser])

  return (
    <div className='md:min-w-[450px] flex flex-col'>
      <ChatHeader fullName={selectedUser.fullName}  />
      <MessageContainer />
    </div>
  )
}

export default ChatContainer