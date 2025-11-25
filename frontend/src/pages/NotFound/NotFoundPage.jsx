import { MainLayout, PagesLayout } from "../../layout/index";
import {
  HeadingComponent,
  LinkComponent,
  TextComponent,
} from "../../components";


function NotFoundPage() {

  return (
    <MainLayout>
        <div className="flex flex-col items-center justify-center h-full text-center p-4">
          <HeadingComponent
            headingLevel="h1"
            styling={"text-6xl font-bold text-red-400 mb-4"}
            headingTitle={"404"}
          />
          <HeadingComponent
            headingLevel="h2"
            styling={"text-2xl text-white font-semibold mb-2"}
            headingTitle={"Page Not Found"}
          />
          <TextComponent
            textType="p"
            styling={"text-sky-200 text-xl mb-6 max-w-md "}
            text={
              " Oops! The page you are looking for doesn’t exist or might have been moved."
            }
          />

          <LinkComponent
            href={"/"}
            styling={`bg-sky-500 text-white px-6 py-2 rounded-md hover:bg-sky-600 transition`}
            linkText={"Go Back Home"}
          />
        </div>
    </MainLayout>
  );
}

export default NotFoundPage;
