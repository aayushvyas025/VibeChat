import { useState } from "react";
import { API } from "../../config";
import { useConversation } from "../../store";
import { Constant, handleApi } from "../../helper";

const { apiRoutes, applicationContent } = Constant;
const { handleApiError, apiError } = handleApi;
const { apiResponses } = applicationContent;
const {errorResponse} = apiResponses
const { sendMessageError } = errorResponse;
const { messageRoutes } = apiRoutes;
const { CREATE } = messageRoutes;

function useSendMessages() {
  const [loading, setLoading] = useState(false);
  const { selectedUser, messages, setMessages } = useConversation();

  const sendMessagesApi = async (message) => {
    setLoading(true);
    try {
      const response = await API.post(CREATE(selectedUser._id), { message });
      const newMessages = response?.data?.newMessage;
      console.log(newMessages);
      apiError(newMessages);
      setMessages([...messages, newMessages]);
    } catch (error) {
      console.error(`Error While Send Messages: ${error.message}`);
      handleApiError(error?.response?.data?.message || sendMessageError);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessagesApi };
}

export default useSendMessages;
