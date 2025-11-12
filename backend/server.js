import express from "express"; 
import { databaseConnection } from "./src/helper/index.js";
import { commonMiddleware, routesMiddleware } from "./src/middleware/index.js";

const {jsonParser} = commonMiddleware; 

const app = express(); 
jsonParser(app, express);
routesMiddleware.auth(app);

databaseConnection(app)

