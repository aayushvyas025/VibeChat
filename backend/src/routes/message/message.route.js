import express from "express" 
import { Constant } from "../../helper/index.js";
import { messageControllers } from "../../controller/index.js";
import authenticationMiddleware from "../../middleware/auth/authentication.middleware.js";


const {protectedRoute} = authenticationMiddleware;
const {apisRoutes} = Constant; 
const {message} = apisRoutes; 
const {CREATE, GET} = message;
const {sendMessage, getMessage} = messageControllers;
const router = express.Router(); 

router.post(CREATE,protectedRoute, sendMessage);
router.get(GET, protectedRoute, getMessage); 

export default router; 