import { Constant } from "../../helper/index.js";
import { authRoutes } from "../../routes/index.js";

const {apisRoutes} = Constant;  
const {BASE_URL} = apisRoutes; 
const routesMiddleware = {
    auth:(app) => {  
        app.use(BASE_URL, authRoutes)

    }
}

export default routesMiddleware 