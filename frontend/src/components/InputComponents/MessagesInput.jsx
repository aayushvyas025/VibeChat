import React, { useState } from "react";
import { FormComponent,ButtonComponent } from "../index";
import { BsSend } from "react-icons/bs";
import { useSendMessages } from "../../hooks";

function MessagesInput({placeholder}) {
  const [message, setMessage] = useState(""); 
  const {loading, sendMessagesApi} = useSendMessages();

  async function submitFormHandle(event) {
    event.preventDefault();
    await sendMessagesApi(message);
    setMessage("");

  }

  return (
    <FormComponent styling={"px-4 my-3"} onSubmitHandler={submitFormHandle}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder={placeholder}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <ButtonComponent type="submit" btnIcon={BsSend} styling={"absolute inset-y-0 end-0 flex items-center pe-3"} />
      </div>
    </FormComponent>
  );
}

export default MessagesInput;
