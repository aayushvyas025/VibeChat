import dotenv from "dotenv" 

dotenv.config(); 

const Constant = Object.freeze({
    envVariables: {
        mongodbUri:process.env.MONGODB_URI,
        backendPort:process.env.BACKEND_PORT,
        jwtSecret:process.env.JWT_SECRET,
        nodeEnvironment:process.env.NODE_ENVIORNMENT,
        frontendUrl:process.env.FRONTEND_URL
    },
    apisRoutes:{
        BASE_URL:`/vibechat/api/v1`,
        auth: {
            SIGNUP: `/auth/signup`,
            LOGIN:`/auth/login`,
            LOGOUT:`/auth/logout`
        },
        avatarApis: {
            maleUserAvatar:(username) => `https://avatar.iran.liara.run/public/boy?username=${username}`,
            femaleUserAvatar:(username) => `https://avatar.iran.liara.run/public/girl?username=${username}`
        },
        user: { 
            GET:`/users`
            
        },
        message: {
            CREATE:`/message/send/:id`,
            GET:`/message/:id`
        }
    }
});

export default Constant; 