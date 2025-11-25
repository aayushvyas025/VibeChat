import {
  Conversation,
  MessageLoadingSkeleton,
  SendMessagePlaceholder,
} from "../index";
import { useAuthContext, useGetMessages, useListenMessage, useSmoothScrolling } from "../../hooks";


function Messages() {
  const { authUser } = useAuthContext();
  const { loading, messages } = useGetMessages();
  const {lastMessageReference} = useSmoothScrolling();
  useListenMessage();
 
  return (
    <div className="px-4 flex-1 overflow-y-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message?._id} ref={lastMessageReference}> 
          <Conversation
          message={message}
          authUser={authUser}
          />

          </div>
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
