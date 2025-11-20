import { create } from "zustand";

const useConversation = create((set) => ({
    messages: [],
  userSelected: null,
  setMessages:(messages) => set({messages}),
  setSelectedUser: (selectedUser) => set({ selectedUser }),
}));

export default useConversation;
