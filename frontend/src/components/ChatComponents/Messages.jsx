import React from "react";
import {
  Conversation,
  MessageLoadingSkeleton,
  SendMessagePlaceholder,
} from "../index";
import { useAuthContext, useGetMessages } from "../../hooks";

function Messages() {
  const { authUser } = useAuthContext();
  const { loading, messages } = useGetMessages();
  console.log(messages);

  return (
    <div className="px-4 flex-1 overflow-y-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <Conversation
            key={message?._id}
            message={message}
            authUser={authUser}
          />
        ))}
      {loading &&
        [...Array(3)].map((_, idx) => <MessageLoadingSkeleton key={idx} />)}

      <SendMessagePlaceholder
        loading={loading}
        messageLength={messages.length}
      />
    </div>
  );
}

export default Messages;
