import { useEffect } from "react";
import { useConversation } from "../../store";
import {useSocketContext} from "../index";
import notificationSound from "../../assets/sounds/notification.mp3"

function useListenMessage() {
  const {socketConnection} =  useSocketContext();
  const {messages, setMessages} = useConversation();
  
  useEffect(() => {
    socketConnection?.on("newMessage",(newMessage) => {
        newMessage.shouldShake = true; 
        const sound = new Audio(notificationSound);
        sound.play();

        setMessages([...messages, newMessage])
    }); 
    
    return () => socketConnection?.off("newMessage")
  }, [socketConnection, messages, setMessages]);

}

export default useListenMessage;