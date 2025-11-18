import { MainLayout, PagesLayout } from "../../layout";
import {
  ButtonComponent,
  FormComponent,
  GenderCheckboxComponent,
  HeadingComponent,
  InputComponent,
  LinkComponent,
  TextComponent,
} from "../../components";
import { useState } from "react";
import { useSignup } from "../../hooks";


function SignupPage() {
  const [signupForm, setSignupForm] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  
  const {loading , signupApi} = useSignup; 

  async function submitFormHandler(event) {
    event.preventDefault();
    await signupApi(signupForm);
    setSignupForm({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };

  function checkboxHandleChange(userGender) { 
    setSignupForm({...signupForm, gender:userGender})

  }  

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <PagesLayout pagelayout={"w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0"}>
          <HeadingComponent
            headingLevel={"h1"}
            styling={"text-3xl font-semibold text-center text-gray-300"}
            headingTitle={"Signup"}
          >
            <TextComponent
              textType={"span"}
              text={"VibeChat"}
              styling={"text-blue-300 mx-2 font-semibold text-3xl"}
            />
          </HeadingComponent>
          <FormComponent onSubmitHandler={submitFormHandler}>
            <InputComponent
              label={"Fullname"}
              type={"text"}
              placeholder={"Enter Fullname"}
              style={"w-full input input-bordered h-10"}
              value={signupForm.fullName}
              onChangeHandler={(event) =>
                setSignupForm({ ...signupForm, fullName: event.target.value })
              }
            />
            <InputComponent
              label={"Username"}
              type={"text"}
              placeholder={"Enter Username"}
              style={"w-full input input-bordered h-10"}
              value={signupForm.username}
              onChangeHandler={(event) =>
                setSignupForm({ ...signupForm, username: event.target.value })
              }
            />
            <InputComponent
              label={"Password"}
              type={"password"}
              placeholder={"Enter Password"}
              style={"w-full input input-bordered h-10"}
              value={signupForm.password}
              onChangeHandler={(event) =>
                setSignupForm({ ...signupForm, password: event.target.value })
              }
            />
            <InputComponent
              label={"Confirm Password"}
              type={"password"}
              placeholder={"Enter Password"}
              style={"w-full input input-bordered h-10"}
              value={signupForm.confirmPassword}
              onChangeHandler={(event) =>
                setSignupForm({
                  ...signupForm,
                  confirmPassword: event.target.value,
                })
              }
            />
            <GenderCheckboxComponent userGender={signupForm.gender} onCheckboxChange={checkboxHandleChange} />
            <LinkComponent
              href={"/login"}
              styling={
                "text-sm hover:underline hover:text-blue-400 mt-2 inline-block"
              }
              linkText={"Already have an account ?"}
            />
            <div>
              <ButtonComponent
                btnType="submit"
                styling={
                  "btn btn-block btn-sm mt-2 hover:bg-blue-400 hover:text-white"
                }
                btnText={"Signup"}
              />
            </div>
          </FormComponent>
                </PagesLayout>
      </div>
    </MainLayout>
  );
}

export default SignupPage;
