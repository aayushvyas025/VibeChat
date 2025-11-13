import dotenv from "dotenv" 

dotenv.config(); 

const Constant = Object.freeze({
    envVariables: {
        mongodbUri:process.env.MONGODB_URI,
        backendPort:process.env.BACKEND_PORT,
        jwtSecret:process.env.JWT_SECRET,
        nodeEnviornment:process.env.NODE_ENVIORNMENT
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
        }
    }
});

export default Constant; 