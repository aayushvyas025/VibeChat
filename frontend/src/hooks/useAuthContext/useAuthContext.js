import { useContext } from "react";
import { AuthContext } from "../../context/auth context/AuthContextProvider";

function useAuthContext() {
    return useContext(AuthContext)
}; 

export default useAuthContext;