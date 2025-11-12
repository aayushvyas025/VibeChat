import { Constant } from "../../helper/index.js";
import { authRoutes } from "../../routes/index.js";

const {apisRoutes} = Constant;  
const {auth} = apisRoutes; 
const {BASE_URL} = auth;

const routesMiddleware = {
    auth:(app) => {  
        app.use(BASE_URL, authRoutes)

    }
}

export default routesMiddleware 