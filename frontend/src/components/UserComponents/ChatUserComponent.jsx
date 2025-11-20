import React from "react";
import { AvatarComponent, DividerComponent, UsernameComponent } from "../index";
import { useGetUsersForSidebar } from "../../hooks";

function ChatUserComponent() {
  const { users } = useGetUsersForSidebar();
  return (
    <>
      {users.map((user) => (
        <div
          className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer"
          key={user._id}
        >
          <AvatarComponent userProfile={user?.profilePic} />
          <UsernameComponent username={user?.fullName} emoji={"🐯"} />
        </div>
      ))}
      <DividerComponent styling={"divider my-0 py-0 h-1"} />
    </>
  );
}

export default ChatUserComponent;
