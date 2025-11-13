import jwt from "jsonwebtoken"; 
import { Constant } from "../../index.js";

const {envVariables} = Constant;
const {jwtSecret,nodeEnviornment} = envVariables; 

const generateToken = async(userId, response) => {
    // token was created 
    const token = jwt.sign({userId},jwtSecret, {
        expiresIn:"1d"
    }); 

   response.cookie("jwtToken", token, {
        maxAge:1*24*60*60*1000,
        httpOnly:true, // Prevent XSS attacks cross-site scripting attacks 
        sameSite:"strict", // CSRF attacks cross-site request forgery attacks
        secure:nodeEnviornment === "production"
    }); 

    return token; 


}; 

export default generateToken; 