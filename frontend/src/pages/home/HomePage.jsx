import { ChatContainer, Sidebar, NoChatSelected } from "../../components";
import { MainLayout, PagesLayout } from "../../layout";

function HomePage() {
  const noChatSelected = true;
  return (
    <MainLayout>
      <PagesLayout
        pagelayout={
          "flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0"
        }
      >
        <Sidebar />
        {noChatSelected ? (
          <NoChatSelected username={"Aayush Vyas"} />
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
