import express from "express"; 
import { databaseConnection } from "./src/helper/index.js";
import { commonMiddleware, routesMiddleware } from "./src/middleware/index.js";
import { socketIoConfig } from "./src/config/index.js";

const {jsonParser, parseCookies, corsConnection} = commonMiddleware; 
const {app,server} = socketIoConfig; 

jsonParser(app, express);
parseCookies(app);
corsConnection(app);

routesMiddleware.auth(app);
routesMiddleware.message(app);
routesMiddleware.user(app); 

databaseConnection(server)

