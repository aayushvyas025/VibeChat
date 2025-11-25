import { ChatContainer, Sidebar, NoChatSelected } from "../../components";
import { useAuthContext } from "../../hooks";
import { MainLayout, PagesLayout } from "../../layout";
import { useConversation } from "../../store";

function HomePage() {
  const {authUser} = useAuthContext()
  const {selectedUser} = useConversation();
  
  return (
    <MainLayout>
      <PagesLayout
        pageLayout={
          "flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0"
        }
      >
        <Sidebar />
        {!selectedUser ? (
          <NoChatSelected username={authUser.fullName} />
        ) : (
          <>
            <ChatContainer />
          </>
        )}
      </PagesLayout>
    </MainLayout>
  );
}

export default HomePage;
