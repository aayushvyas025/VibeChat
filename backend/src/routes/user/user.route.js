import express from "express"; 
import { Constant } from "../../helper/index.js";
import { userControllers } from "../../controller/index.js";
import { authenticationMiddleware } from "../../middleware/index.js";

const {apisRoutes} = Constant;
const {user} = apisRoutes; 
const {GET} = user; 
const {getUsersForSidebar} = userControllers
const router = express.Router(); 
const {protectedRoute} = authenticationMiddleware;

router.get(GET, protectedRoute, getUsersForSidebar)

export default router; 