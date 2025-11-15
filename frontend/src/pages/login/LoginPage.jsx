import { MainLayout } from "../../layout";
import { HeadingComponent, TextComponent } from "../../components";

function LoginPage() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <HeadingComponent
            headingLevel={"h1"}
            styling={"text-3xl font-semibold text-center text-gray-300"}
            headingTitle={"Login"}
          >
            <TextComponent
              textType={"span"}
              text={"ChatApp"}
              styling={"text-blue-900 mx-2 font-semibold text-3xl"}
            />
          </HeadingComponent>
        </div>
      </div>
    </MainLayout>
  );
}

export default LoginPage;
