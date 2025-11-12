import dotenv from "dotenv" 

dotenv.config(); 

const Constant = Object.freeze({
    envVariables: {
        mongodbUri:process.env.MONGODB_URI,
        backendPort:process.env.BACKEND_PORT
    },
    apisRoutes:{
        BASE_URL:`vibechat/api/v1`,
        auth: {
            SIGNUP:(baseUrl) => `${baseUrl}/auth/signup`,
            LOGIN:(baseUrl) => `${baseUrl}/auth/login`,
            LOGOUT:(baseUrl) => `${baseUrl}/auth/logout`
        }
    }
});

export default Constant; 