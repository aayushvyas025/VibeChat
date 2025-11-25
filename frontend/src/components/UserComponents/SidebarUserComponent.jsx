import { ChatUserComponent, SpinnerLoader } from "../index";
import { useGetUsersForSidebar } from "../../hooks";

function SidebarUserComponent() {
  const { loading } = useGetUsersForSidebar();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading ? (
        <SpinnerLoader type={"loading loading-spinner mx-auto"} />
      ) : (
        <ChatUserComponent />
      )}
    </div>
  );
}

export default SidebarUserComponent;
