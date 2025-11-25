import {Server} from "socket.io"
import http from "http"
import express from "express"
import { Constant } from "../../helper/index.js";


const {envVariables} = Constant;
const {frontendUrl} = envVariables;

const app = express(); 
const server = http.createServer(app); 

const socketIo = new Server(server,{
    cors:{
        origin:frontendUrl,
        methods:["GET","POST"],
        credentials:true
    }
});

const userSocketMap = {};  

socketIo.on("connection", (socket) => {
    console.log(`A User Connected ${socket.id}`);

    const userId = socket.handshake.query.userId;
    if(userId) userSocketMap[userId] = socket.id;

    socketIo.emit("getOnlineUsers", Object.keys(userSocketMap))
    
    socket.on("disconnect", () => {
        console.log(`User Disconnected ${socket.id}`);
        delete userSocketMap[userId];
        socketIo.emit("getOnlineUsers",Object.keys(userSocketMap))
    })
})

export default {app, server, socketIo, userSocketMap}