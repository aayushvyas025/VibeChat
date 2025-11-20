import { useState } from "react";
import { API } from "../../config";
import { Constant, handleApi } from "../../helper";
import { useAuthContext } from "../index";

const { apiRoutes, applicationContent } = Constant;
const { authRoutes } = apiRoutes;
const { LOGOUT } = authRoutes;
const { handleApiError, handleApiSuccess } = handleApi;
const { apiSuccessResponse } = applicationContent;
const { successResponse, errorResponse } = apiSuccessResponse;

function useLogout() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const logoutApi = async () => {
    setLoading(true);
    try {
      const response = await API.post(LOGOUT);
      if(response?.error) {
        throw new Error(`Invalid response from the Server: ${response?.error}`)
      }
      localStorage.removeItem("authenticated-user")
     setAuthUser(null);
      handleApiSuccess(response?.data?.message || successResponse.logoutSuccess);
    } catch (error) {
      console.error(`Error While Logout User: ${error.message}`);
      handleApiError(
        error?.response?.data?.message || errorResponse.logoutError
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, logoutApi };
}

export default useLogout;
