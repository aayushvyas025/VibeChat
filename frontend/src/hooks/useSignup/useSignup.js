import { useState } from "react";
import { API } from "../../config";
import { Constant, inputValidations } from "../../helper";

const {apiRoutes} = Constant; 
const {authRoutes} = apiRoutes;
const {SIGNUP} = authRoutes;
const {} = inputValidations;

function useSignup() {
  const [loading , setLoading] = useState(false);     
  
  const signup = async (signupinfo) => { 
      setLoading(true)
    try {
        const response = API.post(SIGNUP, signupinfo); 
    } catch (error) {
        console.error(`Error While Signup User: ${error?.message}`); 
    }
    
  }
}