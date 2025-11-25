import { MainLayout, PagesLayout } from "../../layout";
import {
  ButtonComponent,
  FormComponent,
  HeadingComponent,
  InputComponent,
  LinkComponent,
  SpinnerLoader,
  TextComponent,
} from "../../components";
import { useState } from "react";
import { useLogin } from "../../hooks";

function LoginPage() {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const { loading, loginApi } = useLogin();

  async function submitFormHandler(event) {
    event.preventDefault();
    await loginApi(loginForm);
    setLoginForm({
      username: "",
      password: "",
    });
  }

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <PagesLayout
          pageLayout={
            "w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0"
          }
        >
          <HeadingComponent
            headingLevel={"h1"}
            styling={"text-3xl font-semibold text-center text-gray-300"}
            headingTitle={"Login"}
          >
            <TextComponent
              textType={"span"}
              text={"VibeChat"}
              styling={"text-blue-300 mx-2 font-semibold text-3xl"}
            />
          </HeadingComponent>
          <FormComponent onSubmitHandler={submitFormHandler}>
            <InputComponent
              label={"Username"}
              type={"text"}
              placeholder={"Enter Username"}
              style={"w-full input input-bordered h-10"}
              value={loginForm.username}
              onChangeHandler={(event) =>
                setLoginForm({ ...loginForm, username: event.target.value })
              }
            />
            <InputComponent
              label={"Password"}
              type={"password"}
              placeholder={"Enter Password"}
              style={"w-full input input-bordered h-10"}
              value={loginForm.password}
              onChangeHandler={(event) =>
                setLoginForm({ ...loginForm, password: event.target.value })
              }
            />
            <LinkComponent
              href={"/signup"}
              styling={
                "text-sm hover:underline hover:text-blue-400 mt-2 inline-block"
              }
              linkText={"Don't have an account ?"}
            />
            <div>
              <ButtonComponent
                btnType="submit"
                styling={
                  "btn btn-block btn-sm mt-2 hover:bg-blue-400 hover:text-white"
                }
                disabled={loading}
              >
                {loading ? <SpinnerLoader type={"loading loading-spinner"} /> : "Login"}
              </ButtonComponent>
            </div>
          </FormComponent>
        </PagesLayout>
      </div>
    </MainLayout>
  );
}

export default LoginPage;
