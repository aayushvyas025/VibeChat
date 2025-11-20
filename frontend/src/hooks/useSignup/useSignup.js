import { useState } from "react";
import { API } from "../../config";
import { Constant, inputValidations, handleApi } from "../../helper";
import {useAuthContext} from "../index";

const { apiRoutes, applicationContent } = Constant;
const { authRoutes } = apiRoutes;
const { SIGNUP } = authRoutes;
const { handleSignupInputErrors,apiError } = inputValidations;
const { handleApiError, handleApiSuccess } = handleApi;
const { apiSuccessResponse } = applicationContent;
const { successResponse, errorResponse } = apiSuccessResponse;

function useSignup() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signupApi = async (signupInfo) => {
    const success = handleSignupInputErrors(signupInfo);
    if (!success) return;

    setLoading(true);
    try {
      const response = await API.post(SIGNUP, signupInfo);
      const signupUser = response?.data?.signupUser;
      apiError(signupUser);
      localStorage.setItem("authenticated-user", JSON.stringify(signupUser));
      setAuthUser(signupUser);
      handleApiSuccess(successResponse.signupSuccess);
    } catch (error) {
      console.error(`Error While Signup User: ${error?.message}`);
      handleApiError(error?.response?.data?.message || errorResponse.signupError);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signupApi };
}

export default useSignup;
