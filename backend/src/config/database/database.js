import mongoose from "mongoose";
import { Constant } from "../../helper/index.js";

const {envVariables} = Constant;
const { mongodbUri} = envVariables;

const connectToDB = async() => {
    try {
        const connectingWithDB = await mongoose.connect(mongodbUri);
        console.log(`Connecting Database host string: ${connectingWithDB.connection.host}`)
    } catch (error) {
        console.error(`Error While Connecting with Database Host: ${error?.message}`)
        
    }
}

export default connectToDB 