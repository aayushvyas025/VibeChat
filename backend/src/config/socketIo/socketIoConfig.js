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
        origin:[frontendUrl],
        methods:["GET","POST"]
    }
});

socketIo.on("connection", (socket) => {
    console.log(`A User Connected ${socket.id}`);
    
    socket.on("disconnect", () => {
        console.log(`User Disconnected ${socket.id}`)
    })
})

export default {app, server, socketIo}