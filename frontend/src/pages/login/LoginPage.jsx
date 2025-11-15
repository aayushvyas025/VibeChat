import { MainLayout } from "../../layout";
import {
  FormComponent,
  HeadingComponent,
  InputComponent,
  TextComponent,
} from "../../components";
import { useState } from "react";

function LoginPage() {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  function submitFormHandler(event) {
    event.preventDefault();
  }

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
              onChangeHandler={(event) => setLoginForm(event.target.value)}
            />
            <InputComponent
              label={"Password"}
              type={"password"}
              placeholder={"Enter Password"}
              style={"w-full input input-borederd h-10"}
              value={loginForm.password}
              onChangeHandler={(event) => setLoginForm(event.target.value)}
            />
          </FormComponent>
        </div>
      </div>
    </MainLayout>
  );
}

export default LoginPage;
