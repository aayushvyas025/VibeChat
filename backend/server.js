import express from "express"; 
import { databaseConnection } from "./src/helper/index.js";
import { commonMiddleware, routesMiddleware } from "./src/middleware/index.js";

const {jsonParser, parseCookies} = commonMiddleware; 

const app = express(); 
jsonParser(app, express);
parseCookies(app);
routesMiddleware.auth(app);
routesMiddleware.message(app);
routesMiddleware.user(app); 


databaseConnection(app)

