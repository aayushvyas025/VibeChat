import { useState } from "react";
import { API } from "../../config";
import { Constant, inputValidations, handleApi } from "../../helper";
import {useAuthContext} from "../index";

const { apiRoutes, applicationContent } = Constant;
const { authRoutes } = apiRoutes;
const { SIGNUP } = authRoutes;
const { handleSignupInputErrors } = inputValidations;
const { handleApiError, handleApiSuccess } = handleApi;
const { apiSuccessResponse } = applicationContent;
const { signupSuccess } = apiSuccessResponse;

function useSignup() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signupApi = async (signupinfo) => {
    const success = handleSignupInputErrors(signupinfo);
    if (!success) return;

    setLoading(true);
    try {
      const response = await API.post(SIGNUP, signupinfo);
      const signupUser = response?.data?.signupUser;

      if (!signupUser) {
        throw new Error(`Invalid response from the Server`);
      }
      localStorage.setItem("authenticated-user", JSON.stringify(signupUser));
      setAuthUser(signupUser);
      handleApiSuccess(signupSuccess);
    } catch (error) {
      console.error(`Error While Signup User: ${error?.message}`);
      handleApiError(error?.response?.data?.message || "Error While Signup User");
    } finally {
      setLoading(false);
    }
  };
  return { loading, signupApi };
}

export default useSignup;
