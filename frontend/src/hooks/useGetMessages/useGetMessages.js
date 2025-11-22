import { useState } from "react";
import { Constant, handleApi } from "../../helper";
import { API } from "../../config";
import { useConversation } from "../../store";


const {applicationContent, apiRoutes} = Constant;
const {apiResponses} = applicationContent;
const {messageRoutes} = apiRoutes;
const {apiError, handleApiError} = handleApi;
const {errorResponse} = apiResponses;
const {getMessageError} = errorResponse;
const {GET} = messageRoutes;

function useGetMessages() {
    const [loading, setLoading] = useState(false);
    const {messages, setMessages, selectedUser} = useConversation() 
    
    const getMessageApi = async() => {
        setLoading(true)
        try {
            const response = await API.get(GET(selectedUser._id)); 
            const userAllMessages = response?.data?.conversation;
            apiError(userAllMessages);
            setMessages([...messages, userAllMessages]);
        } catch (error) {
            console.error(`Error While fetch Messages: ${error.message}`);
            handleApiError(error?.response?.data?.message || getMessageError)
        }finally {
            setLoading(false)
        }
    }

    return {loading, getMessageApi}
}

export default useGetMessages; 