import mongoose from "mongoose";
import { Conversation, Message } from "../../model/index.js";

const messageControllers = {
  sendMessage: async (request, response) => {
    const { id: receiverId } = request.params;
    const { message } = request.body;
    const senderId = request.user._id;

    if (
      !mongoose.Types.ObjectId.isValid(receiverId) ||
      !mongoose.Types.ObjectId.isValid(senderId)
    ) {
      return response
        .status(400)
        .json({ success: false, message: "Invalid User Id" });
    }

    if (!message) {
      return response
        .status(400)
        .json({ success: false, message: "Message field was required" });
    }

    try {
      let conversation = await Conversation.findOne({
        participants: {
          $all: [senderId, receiverId],
        },
      });

      if (!conversation) {
        conversation = await Conversation.create({
          participants: [senderId, receiverId],
        });
      }

      const newMessage = new Message({
        senderId,
        receiverId,
        message,
      });

      if (newMessage) {
        conversation.message.push(newMessage._id);
      }

      await Promise.all([conversation.save(), newMessage.save()]);

      response.status(201).json({
        success: true,
        message: "Message send successfully",
        newMessage,
      });
    } catch (error) {
      console.error(`Error While sending message: ${error.message}`);
      response
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  },
  getMessage: async (request, response) => {
    const senderId = request.user._id;
    const { id: receiverId } = request.params;

    if (
      !mongoose.Types.ObjectId.isValid(receiverId) ||
      !mongoose.Types.ObjectId.isValid(senderId)
    ) {
      return response
        .status(400)
        .json({ success: false, message: "Invalid User Id" });
    }

    try {
      const conversation = await Conversation.findOne({
        participants: {
          $all: [senderId, receiverId],
        },
      }).populate("message");

      if (!conversation) {
        return response
          .status(200)
          .json({
            success: true,
            message: "Message fetch successfully",
            conversation: [],
          });
      }

      response.status(200).json({
        success: true,
        message: "Message fetch successfully",
        conversation: conversation.message,
      });
    } catch (error) {
      console.error(`Error while fetch messages: ${error?.message}`);
      response
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  },
};

export default messageControllers;
