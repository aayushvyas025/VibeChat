import { create } from "zustand";

const useConversation = create((set) => ({
    messages: [],
  selectedConversion: null,
  setMessages:(messages) => set({messages}),
  setSelectedConversion: (selectedConversion) => set({ selectedConversion }),
}));

export default useConversation;
