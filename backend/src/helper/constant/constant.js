import dotenv from "dotenv" 

dotenv.config(); 

const Constant = {
    envVariables: {
        mongodbUri:process.env.MONGODB_URI,
        backendPort:process.env.BACKEND_PORT
    }
}

export default Constant; 