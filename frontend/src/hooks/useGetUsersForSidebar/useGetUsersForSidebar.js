import { useEffect, useState } from "react";
import { API } from "../../config";
import { Constant, handleApi } from "../../helper";

const { applicationContent, apiRoutes } = Constant;
const { errorResponse } = applicationContent;
const { handleApiError, apiError } = handleApi;
const { userRoutes } = apiRoutes;
const { GET } = userRoutes;

function useGetUsersForSidebar() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const getUsersApi = async () => {
    setLoading(true);
    try {
      const response = await API.get(GET);
      const users = response?.data?.filteredUsers;
      apiError(users);
      setUsers(users);
    } catch (error) {
      console.error(`Error While Fetching Users: ${error?.message}`);
      handleApiError(
        error?.response?.data?.message || errorResponse.getUsersError
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsersApi();
  }, []);

  return { loading, users };
}

export default useGetUsersForSidebar;
