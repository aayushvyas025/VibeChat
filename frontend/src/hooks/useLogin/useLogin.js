import { useState } from "react";
import { API } from "../../config";
import { Constant,inputValidations, handleApi  } from "../../helper";
import {useAuthContext} from "../index"

const { applicationContent, apiRoutes} = Constant; 
const {apiSuccessResponse} = applicationContent;
const {successResponse, errorResponse} = apiSuccessResponse;
const {authRoutes} = apiRoutes; 
const {handleLoginInputErrors} = inputValidations; 
const {LOGIN} = authRoutes; 
const {handleApiSuccess, handleApiError, apiError} = handleApi;


function useLogin() {
const [loading, setLoading] = useState(false); 
const {setAuthUser} = useAuthContext();
 const loginApi = async(loginInfo) => {
     const success = handleLoginInputErrors(loginInfo); 
     if(!success) return
    setLoading(true);
    try {
        const response = await API.post(LOGIN, loginInfo);
        const loginUser = response?.data?.loginUser; 
        console.log(response)
        apiError(loginUser)
         localStorage.setItem("authenticated-user", JSON.stringify(loginUser));
         setAuthUser(loginUser); 
         handleApiSuccess(successResponse.loginSuccess);
    } catch (error) {
        console.error(`Error While login User: ${error.message}`);
        handleApiError(error.response?.data?.message || errorResponse.loginError)
    }finally {
        setLoading(false)
    }
 } 


 return {loading , loginApi}
}

export default useLogin; 