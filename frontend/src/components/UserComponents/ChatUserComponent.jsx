import React, { useMemo } from "react";
import { AvatarComponent, UsernameComponent } from "../index";
import { useGetUsersForSidebar, useSocketContext } from "../../hooks";
import { randomEmojisGenerator } from "../../helper";
import { useConversation } from "../../store";

function ChatUserComponent() {
  const { users } = useGetUsersForSidebar();
  const { selectedUser, setSelectedUser } = useConversation();
 const {onlineUsers} = useSocketContext();
 const isOnline = onlineUsers.includes(users._id) 

  const emojiMap = useMemo(() => {
    const map = {};
    users.forEach((user) => {
      map[user._id] = randomEmojisGenerator();
    });
    return map;
  }, [users]);

  return (
    <>
      {users.map((user) => (
        <div
          className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
            selectedUser?._id === user?._id ? "bg-sky-500" : ""
          }`}
          key={user._id}
          onClick={() => setSelectedUser(user)}
        >
          <AvatarComponent userProfile={user?.profilePic} userOnline={isOnline} />
          <UsernameComponent
            username={user?.fullName}
            emoji={emojiMap[user._id]}
          />
        </div>
      ))}
    </>
  );
}

export default ChatUserComponent;
