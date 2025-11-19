import { useState } from "react";
import { API } from "../../config";
import { Constant, inputValidations,handleApi } from "../../helper";

const { apiRoutes, applicationContent } = Constant;
const { authRoutes } = apiRoutes;
const { SIGNUP } = authRoutes;
const { handleSignupInputErrors } = inputValidations;
const {handleApiError , handleApiSuccess} = handleApi;
const { apiSuccessResponse} = applicationContent;
const {signupSuccess} = apiSuccessResponse;


 function useSignup() {
  const [loading, setLoading] = useState(false);

  const signupApi = async (signupinfo) => {
    const success = handleSignupInputErrors(signupinfo);
    if (!success) return;

    setLoading(true);
    try {
      const response = API.post(SIGNUP, signupinfo);
      
      if(response?.error) {
        throw new Error(response?.error)
      }
      handleApiSuccess(signupSuccess)

    } catch (error) {
      console.error(`Error While Signup User: ${error?.message}`);
      handleApiError(error?.response?.message);
    }finally{
        setLoading(false);
    } 

};
return {loading, signupApi}
}

export default useSignup; 