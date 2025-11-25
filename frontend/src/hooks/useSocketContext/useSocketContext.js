import { useContext } from "react";
import { SocketContext } from "../../context/socket context/SocketContextProvider";

function useSocketContext() {
    return useContext(SocketContext)
}

export default useSocketContext;