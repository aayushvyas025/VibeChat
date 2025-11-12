import dotenv from "dotenv" 

dotenv.config(); 

const Constant = {
    envVariables: {
        mongodbUri:process.env.MONGODB_URI,
        backendPort:process.env.BACKEND_PORT
    },
    apisRoutes:{
        auth: {
            BASE_URL:`/api/v1/auth`,
            SIGNUP:(baseUrl) => `${baseUrl}/signup`,
            LOGIN:(baseUrl) => `${baseUrl}/login`,
            LOGOUT:(baseUrl) => `${baseUrl}/logout`
        }
    }
}

export default Constant; 