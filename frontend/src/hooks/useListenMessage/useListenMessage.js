import { useEffect } from "react";
import { useConversation } from "../../store";
import {useSocketContext} from "../index";

function useListenMessage() {
  const {socketConnection} =  useSocketContext();
  const {messages, setMessages} = useConversation();
  
  useEffect(() => {
    socketConnection?.on("newMessage",(newMessage) => {
        setMessages([...messages, newMessage])
    }); 
    
    return () => socketConnection?.off("newMessage")
  }, [socketConnection, messages, setMessages]);

}

export default useListenMessage;