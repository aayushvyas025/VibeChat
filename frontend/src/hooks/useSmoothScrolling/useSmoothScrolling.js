import { useEffect, useRef } from "react";
import { useConversation } from "../../store";

function useSmoothScrolling() {
  const lastMessageReference = useRef(); 
  const {messages} = useConversation();

    useEffect(() => {
        setTimeout(() => {
           lastMessageReference.current.scrollIntoView({behavior:"smooth"});
        },100)

    }, [messages])
    return {lastMessageReference}
}

export default useSmoothScrolling; 