import React, { createContext, useState } from "react";


export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("authenticated-user") || null)
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
