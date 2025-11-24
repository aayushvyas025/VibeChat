import {  useLayoutEffect, useRef } from "react";
import { useConversation } from "../../store";

function useSmoothScrolling() {
  const lastMessageReference = useRef();
  const { messages } = useConversation();

  useLayoutEffect(() => {
    setTimeout(() => {
      if (lastMessageReference.current) {
        lastMessageReference.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [messages]);

  return { lastMessageReference };
}

export default useSmoothScrolling;
