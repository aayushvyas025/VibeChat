import axios from "axios"; 
import { Constant } from "../../helper";

const {envVariables} = Constant;
const {backendURl} = envVariables;

const API = axios.create({
 baseURL:backendURl,
 withCredentials: true
}); 


export default API; 