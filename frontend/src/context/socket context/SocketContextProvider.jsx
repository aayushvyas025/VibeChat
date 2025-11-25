import React, { createContext, useState, useEffect } from "react";
import  io from "socket.io-client";
import { useAuthContext } from "../../hooks";
import { Constant } from "../../helper";

export const SocketContext = createContext(null);

function SocketContextProvider({ children }) {
  const [socketConnection, setSocketConnection] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();
  const { envVariables } = Constant;
  const { socketBackendUrl } = envVariables;

  useEffect(() => {
    if (authUser) {
      const socketIo = io(socketBackendUrl, {
        query:{
            userId:authUser._id
        }
      });
      setSocketConnection(socketIo);

      socketIo.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      })

      return () => socketIo.close();
    } else {
      if (socketConnection) {
        socketConnection.close();
        setSocketConnection(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socketConnection, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
}

export default SocketContextProvider;
