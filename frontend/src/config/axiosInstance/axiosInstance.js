import axios from "axios"; 
import { Constant } from "../../helper";

const {envVariables} = Constant;
const {backendUrl} = envVariables;

const API = axios.create({
 baseURL:backendUrl,
 withCredentials: true
}); 


export default API; 